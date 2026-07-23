#!/usr/bin/env node
// Weekly GA4 + Search Console report for wanchankun.com
// Requires .credentials/ga4-gsc-service-account.json (gitignored) with
// Viewer access on the GA4 property and Full access on the Search Console property.

import { google } from "googleapis";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const KEY_PATH = path.join(__dirname, "..", ".credentials", "ga4-gsc-service-account.json");
const GA4_PROPERTY_ID = "545130836"; // ワンチャンくん
const SITE_URL = "sc-domain:wanchankun.com";

const credentials = JSON.parse(readFileSync(KEY_PATH, "utf8"));

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: [
    "https://www.googleapis.com/auth/analytics.readonly",
    "https://www.googleapis.com/auth/webmasters.readonly",
  ],
});

async function getGa4WeeklySummary() {
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const res = await analyticsdata.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [
        { startDate: "7daysAgo", endDate: "today", name: "current" },
        { startDate: "14daysAgo", endDate: "8daysAgo", name: "previous" },
      ],
      metrics: [
        { name: "activeUsers" },
        { name: "newUsers" },
        { name: "eventCount" },
        { name: "averageSessionDuration" },
      ],
      dimensions: [{ name: "sessionDefaultChannelGroup" }],
    },
  });

  return res.data;
}

async function getGa4TopPages() {
  const analyticsdata = google.analyticsdata({ version: "v1beta", auth });

  const res = await analyticsdata.properties.runReport({
    property: `properties/${GA4_PROPERTY_ID}`,
    requestBody: {
      dateRanges: [{ startDate: "7daysAgo", endDate: "today" }],
      metrics: [{ name: "screenPageViews" }, { name: "activeUsers" }, { name: "bounceRate" }],
      dimensions: [{ name: "pageTitle" }],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 10,
    },
  });

  return res.data;
}

async function getSearchConsoleOpportunities() {
  const searchconsole = google.searchconsole({ version: "v1", auth });

  const res = await searchconsole.searchanalytics.query({
    siteUrl: SITE_URL,
    requestBody: {
      startDate: dateNDaysAgo(28),
      endDate: dateNDaysAgo(3), // GSC data usually lags ~3 days
      dimensions: ["page"],
      rowLimit: 100,
    },
  });

  const rows = res.data.rows ?? [];
  // High-opportunity: decent impressions, good position, but low CTR
  const opportunities = rows
    .filter((r) => r.impressions >= 20 && r.position <= 15 && r.ctr < 0.02)
    .sort((a, b) => b.impressions - a.impressions);

  return opportunities;
}

function dateNDaysAgo(n) {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
}

async function main() {
  console.log("=== GA4: 過去7日間 vs 前の7日間 (チャネル別) ===");
  const ga4Summary = await getGa4WeeklySummary();
  for (const row of ga4Summary.rows ?? []) {
    console.log(
      row.dimensionValues[0].value,
      "|", row.dimensionValues[1].value,
      "| activeUsers:", row.metricValues[0].value,
      "| newUsers:", row.metricValues[1].value,
      "| events:", row.metricValues[2].value
    );
  }

  console.log("\n=== GA4: 直近7日間の上位ページ ===");
  const topPages = await getGa4TopPages();
  for (const row of topPages.rows ?? []) {
    console.log(
      row.dimensionValues[0].value,
      "| PV:", row.metricValues[0].value,
      "| Users:", row.metricValues[1].value,
      "| BounceRate:", (Number(row.metricValues[2].value) * 100).toFixed(1) + "%"
    );
  }

  console.log("\n=== Search Console: 掲載順位は良いのにCTRが低いページ (機会) ===");
  const opportunities = await getSearchConsoleOpportunities();
  if (opportunities.length === 0) {
    console.log("該当ページなし");
  }
  for (const o of opportunities) {
    console.log(
      o.keys[0],
      "| impressions:", o.impressions,
      "| clicks:", o.clicks,
      "| CTR:", (o.ctr * 100).toFixed(2) + "%",
      "| position:", o.position.toFixed(1)
    );
  }
}

main().catch((err) => {
  console.error("エラーが発生しました:", err.message);
  if (err.errors) console.error(JSON.stringify(err.errors, null, 2));
  process.exit(1);
});
