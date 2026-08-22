import { getAllMachines } from "@/lib/content/machines";
import { getAllMakers, getAllSeries } from "@/lib/content/refs";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

type ChangeFrequency = "daily" | "weekly" | "monthly" | "yearly";

interface SitemapEntry {
  path: string;
  lastModified?: string;
  changeFrequency: ChangeFrequency;
  priority: number;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/machines", changeFrequency: "daily", priority: 0.9 },
  { path: "/articles/reset-benefit-machines", changeFrequency: "weekly", priority: 0.7 },
  { path: "/articles/careful-morning-machines", changeFrequency: "weekly", priority: 0.7 },
  { path: "/articles/asaichi-benri-guzzu", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/ie-suro-erabikata", changeFrequency: "monthly", priority: 0.4 },
  { path: "/articles/kachikachi-kun", changeFrequency: "monthly", priority: 0.4 },
  { path: "/articles/monkey-turn-v-5mai-yaku", changeFrequency: "monthly", priority: 0.4 },
  { path: "/articles/tokyo-ghoul-trophy-misugoshi", lastModified: "2026-07-19", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/tokyo-ghoul-manga-reading-order", lastModified: "2026-07-31", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/hokuto-loud-neighbor-column", lastModified: "2026-07-21", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/soundcore-liberty-4-hall-noise-column", lastModified: "2026-07-24", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/monkey-paramount-neighbor-column", lastModified: "2026-07-28", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/tokyo-ghoul-jiro-8586-column", lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.5 },
  { path: "/articles/monkey-turn-red-news", lastModified: "2026-08-22", changeFrequency: "weekly", priority: 0.5 },
  { path: "/articles/basilisk-4-news", lastModified: "2026-08-22", changeFrequency: "weekly", priority: 0.5 },
  { path: "/beginner", changeFrequency: "monthly", priority: 0.5 },
  { path: "/line", changeFrequency: "monthly", priority: 0.4 },
  { path: "/line/checklist", changeFrequency: "monthly", priority: 0.5 },
  { path: "/operator", lastModified: "2026-07-24", changeFrequency: "yearly", priority: 0.3 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.2 },
  { path: "/advertising-policy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/guides/mikiwake-kata", changeFrequency: "monthly", priority: 0.5 },
  { path: "/guides/yamedoki-chuiten", changeFrequency: "monthly", priority: 0.5 },
  { path: "/guides/yougo-shu", changeFrequency: "monthly", priority: 0.6 },
  { path: "/guides/how-to-check-hall-reset-pattern", changeFrequency: "monthly", priority: 0.5 },
  { path: "/disclaimer", changeFrequency: "yearly", priority: 0.1 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.1 },
];

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function absoluteUrl(path: string): string {
  return new URL(path.trim(), `${SITE_URL.replace(/\/+$/, "")}/`).toString();
}

function formatLastModified(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid sitemap lastModified value: ${value}`);
  }
  return date.toISOString();
}

function renderEntry(entry: SitemapEntry): string {
  const lastModified = entry.lastModified
    ? `\n    <lastmod>${formatLastModified(entry.lastModified)}</lastmod>`
    : "";

  return `  <url>
    <loc>${escapeXml(absoluteUrl(entry.path))}</loc>${lastModified}
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority.toFixed(1)}</priority>
  </url>`;
}

export async function GET(): Promise<Response> {
  const [machines, makers, series] = await Promise.all([
    getAllMachines(),
    getAllMakers(),
    getAllSeries(),
  ]);

  const entries: SitemapEntry[] = [
    ...staticEntries,
    ...machines.map((machine) => ({
      path: `/machines/${machine.slug.trim()}`,
      lastModified: machine.updatedAt,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...makers.map((maker) => ({
      path: `/machines/maker/${maker.slug.trim()}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
    ...series.map((item) => ({
      path: `/machines/series/${item.slug.trim()}`,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.map(renderEntry).join("\n")}
</urlset>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
