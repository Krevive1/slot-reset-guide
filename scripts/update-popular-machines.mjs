// Fetches per-page click/impression data from the Google Search Console API
// for the last 28 confirmed days and writes data/popular-machines.json,
// which lib/content/popularity.ts reads at build/render time.
//
// Must be safe to run with no credentials configured (local dev, forks,
// PRs from contributors without secrets): it prints a clear reason and
// exits 0 rather than failing the build/workflow.
import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { GoogleAuth } from "google-auth-library";

const SERVICE_ACCOUNT_JSON = process.env.GSC_SERVICE_ACCOUNT_JSON;
const SITE_URL = process.env.GSC_SITE_URL;

const OUTPUT_PATH = path.join(process.cwd(), "data", "popular-machines.json");
const CONTENT_DIR = path.join(process.cwd(), "content", "machines");

function getExistingSlugs() {
  return new Set(
    readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => file.replace(/\.json$/, ""))
  );
}

// Search Console's most recent ~2 days of data are provisional and can
// change; using a 3-day lag keeps the queried range fully finalized.
function getDateRange() {
  const lagDays = 3;
  const windowDays = 28;
  const end = new Date();
  end.setUTCDate(end.getUTCDate() - lagDays);
  const start = new Date(end);
  start.setUTCDate(start.getUTCDate() - windowDays);
  const fmt = (d) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end) };
}

function extractSlugFromUrl(url) {
  try {
    const { pathname } = new URL(url);
    const match = pathname.match(/^\/machines\/([^/]+)\/?$/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

async function main() {
  if (!SERVICE_ACCOUNT_JSON || !SITE_URL) {
    console.log(
      "[update-popular-machines] GSC_SERVICE_ACCOUNT_JSON and/or GSC_SITE_URL are not set. " +
        "Skipping Search Console fetch (this is expected until credentials are configured). " +
        "See README/final report for setup steps."
    );
    return;
  }

  let credentials;
  try {
    credentials = JSON.parse(SERVICE_ACCOUNT_JSON);
  } catch {
    console.log(
      "[update-popular-machines] GSC_SERVICE_ACCOUNT_JSON is set but is not valid JSON. Skipping."
    );
    return;
  }

  const auth = new GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  const { startDate, endDate } = getDateRange();

  let client;
  let accessToken;
  try {
    client = await auth.getClient();
    const tokenResponse = await client.getAccessToken();
    accessToken = tokenResponse?.token;
  } catch (err) {
    console.log(
      "[update-popular-machines] Failed to authenticate with the service account. " +
        "Check that the account has been added to the Search Console property. " +
        `Reason: ${err instanceof Error ? err.message : "unknown error"}`
    );
    return;
  }

  if (!accessToken) {
    console.log("[update-popular-machines] No access token was returned. Skipping.");
    return;
  }

  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(
    SITE_URL
  )}/searchAnalytics/query`;

  let rows = [];
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions: ["page"],
        rowLimit: 5000,
      }),
    });

    if (!response.ok) {
      const text = await response.text();
      console.log(
        `[update-popular-machines] Search Console API returned HTTP ${response.status}. ` +
          `Skipping this run. Body: ${text.slice(0, 300)}`
      );
      return;
    }

    const data = await response.json();
    rows = Array.isArray(data.rows) ? data.rows : [];
  } catch (err) {
    console.log(
      "[update-popular-machines] Request to the Search Console API failed. Skipping. " +
        `Reason: ${err instanceof Error ? err.message : "unknown error"}`
    );
    return;
  }

  const existingSlugs = getExistingSlugs();
  const bySlug = new Map();

  for (const row of rows) {
    const url = row.keys?.[0];
    if (!url) continue;
    const slug = extractSlugFromUrl(url);
    if (!slug || !existingSlugs.has(slug)) continue;
    const clicks = Math.round(row.clicks ?? 0);
    const impressions = Math.round(row.impressions ?? 0);
    const prev = bySlug.get(slug);
    if (prev) {
      prev.clicks += clicks;
      prev.impressions += impressions;
    } else {
      bySlug.set(slug, { slug, clicks, impressions });
    }
  }

  const machines = [...bySlug.values()].sort(
    (a, b) => b.clicks - a.clicks || b.impressions - a.impressions
  );

  const output = {
    generatedAt: new Date().toISOString(),
    period: { startDate, endDate },
    source: "google-search-console",
    machines,
  };

  const dataDir = path.dirname(OUTPUT_PATH);
  if (!existsSync(dataDir)) mkdirSync(dataDir, { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(output, null, 2) + "\n", "utf-8");

  console.log(
    `[update-popular-machines] Wrote ${machines.length} machine(s) with data for ${startDate}..${endDate}.`
  );
}

main().catch((err) => {
  // Never let a credentials/network problem fail the build or workflow --
  // log a safe, non-secret-leaking message and exit cleanly.
  console.log(
    "[update-popular-machines] Unexpected error, skipping this run. " +
      `Reason: ${err instanceof Error ? err.message : "unknown error"}`
  );
});
