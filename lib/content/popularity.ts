import { readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { Machine } from "./schema";
import { sortMachinesByLatest } from "./machines";

const POPULARITY_FILE = path.join(process.cwd(), "data", "popular-machines.json");

const PopularEntrySchema = z.object({
  slug: z.string(),
  clicks: z.number(),
  impressions: z.number(),
});

const PopularMachinesFileSchema = z.object({
  generatedAt: z.string(),
  period: z.object({ startDate: z.string(), endDate: z.string() }),
  source: z.string(),
  machines: z.array(PopularEntrySchema),
});

export type PopularMachinesFile = z.infer<typeof PopularMachinesFileSchema>;

// Reads data/popular-machines.json produced by scripts/update-popular-machines.mjs.
// Must degrade gracefully in every case: the file may not exist yet (no GSC
// credentials configured), be empty, contain slugs that no longer exist, or
// fail to parse -- none of that should ever break the homepage build/render.
export function loadPopularMachinesFile(): PopularMachinesFile | null {
  try {
    const raw = readFileSync(POPULARITY_FILE, "utf-8");
    const parsed = PopularMachinesFileSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
}

export interface HomeMachineSelection {
  heading: "新着機種" | "よく見られている機種";
  machines: Machine[];
}

// Selects the homepage's top-N machines. Prefers real Search Console click
// data when it's present and meaningful (at least one machine with clicks
// > 0); otherwise falls back to newest-by-release-date so the homepage
// never claims "popular" without evidence. When popularity data covers
// fewer than `limit` machines, the remaining slots are filled with the
// newest machines not already picked (no duplicates).
export function selectHomeMachines(allMachines: Machine[], limit = 12): HomeMachineSelection {
  const file = loadPopularMachinesFile();
  const slugSet = new Set(allMachines.map((machine) => machine.slug));
  const validEntries = (file?.machines ?? []).filter((entry) => slugSet.has(entry.slug));
  const hasSignal = validEntries.some((entry) => entry.clicks > 0);

  if (!file || validEntries.length === 0 || !hasSignal) {
    return { heading: "新着機種", machines: sortMachinesByLatest(allMachines).slice(0, limit) };
  }

  const sortedEntries = [...validEntries].sort(
    (a, b) => b.clicks - a.clicks || b.impressions - a.impressions
  );

  const bySlug = new Map(allMachines.map((machine) => [machine.slug, machine]));
  const picked: Machine[] = [];
  const seen = new Set<string>();

  for (const entry of sortedEntries) {
    if (picked.length >= limit) break;
    const machine = bySlug.get(entry.slug);
    if (machine && !seen.has(machine.slug)) {
      picked.push(machine);
      seen.add(machine.slug);
    }
  }

  if (picked.length < limit) {
    for (const machine of sortMachinesByLatest(allMachines)) {
      if (picked.length >= limit) break;
      if (!seen.has(machine.slug)) {
        picked.push(machine);
        seen.add(machine.slug);
      }
    }
  }

  return { heading: "よく見られている機種", machines: picked };
}
