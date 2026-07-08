import type { MetadataRoute } from "next";
import { getAllMachines } from "@/lib/content/machines";
import { getAllMakers, getAllSeries } from "@/lib/content/refs";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [machines, makers, series] = await Promise.all([
    getAllMachines(),
    getAllMakers(),
    getAllSeries(),
  ]);

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${SITE_URL}/machines`, changeFrequency: "daily", priority: 0.9 },
    { url: `${SITE_URL}/articles/reset-benefit-machines`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/articles/careful-morning-machines`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/beginner`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/line`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${SITE_URL}/line/checklist`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/operator`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/advertising-policy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/guides/mikiwake-kata`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/guides/yamedoki-chuiten`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.1 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.1 },
  ];

  const machineRoutes: MetadataRoute.Sitemap = machines.map((machine) => ({
    url: `${SITE_URL}/machines/${machine.slug}`,
    lastModified: machine.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const makerRoutes: MetadataRoute.Sitemap = makers.map((maker) => ({
    url: `${SITE_URL}/machines/maker/${maker.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const seriesRoutes: MetadataRoute.Sitemap = series.map((s) => ({
    url: `${SITE_URL}/machines/series/${s.slug}`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...machineRoutes, ...makerRoutes, ...seriesRoutes];
}
