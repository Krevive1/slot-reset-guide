import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Machine, MachineSchema } from "./schema";
import { buildSearchHaystack, matchesQuery } from "./search";

export { isNewMachine } from "./badges";

const CONTENT_DIR = path.join(process.cwd(), "content", "machines");

export interface MachineRepository {
  getAllSlugs(): Promise<string[]>;
  getBySlug(slug: string): Promise<Machine | null>;
  getAll(): Promise<Machine[]>;
}

// Reads machine content from /content/machines/*.json. Swap this class for
// a headless-CMS-backed implementation later without touching page code —
// callers only ever use the `machineRepository` export below.
class JsonFileMachineRepository implements MachineRepository {
  private slugFromFilename(filename: string): string {
    return filename.replace(/\.json$/, "");
  }

  async getAllSlugs(): Promise<string[]> {
    return readdirSync(CONTENT_DIR)
      .filter((file) => file.endsWith(".json"))
      .map((file) => this.slugFromFilename(file));
  }

  async getBySlug(slug: string): Promise<Machine | null> {
    const filePath = path.join(CONTENT_DIR, `${slug}.json`);
    try {
      const raw = readFileSync(filePath, "utf-8");
      return MachineSchema.parse(JSON.parse(raw));
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === "ENOENT") {
        return null;
      }
      throw error;
    }
  }

  async getAll(): Promise<Machine[]> {
    const slugs = await this.getAllSlugs();
    const machines = await Promise.all(slugs.map((slug) => this.getBySlug(slug)));
    return machines.filter((machine): machine is Machine => machine !== null);
  }
}

export const machineRepository: MachineRepository = new JsonFileMachineRepository();

export const getAllMachineSlugs = () => machineRepository.getAllSlugs();
export const getMachine = (slug: string) => machineRepository.getBySlug(slug);
// Raw, unfiltered fetch -- includes coming-soon/draft machines. Used by
// sitemap.xml (which intentionally lists coming-soon pages too) and by
// generateStaticParams (every status still needs its page built). Listing,
// counting, searching, and "related machines" pools should use
// getPublishedMachines() below instead.
export const getAllMachines = () => machineRepository.getAll();

export async function getPublishedMachines(): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.status === "published");
}

export async function getComingSoonMachines(): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.status === "coming-soon");
}

// Manually pinned above the popularity ranking, regardless of rank number.
const PINNED_SLUGS = ["karakuri-circus-2"];

export function sortMachinesByPopularity(machines: Machine[]): Machine[] {
  return [...machines].sort((a, b) => {
    const aPinned = PINNED_SLUGS.indexOf(a.slug);
    const bPinned = PINNED_SLUGS.indexOf(b.slug);
    if (aPinned !== -1 || bPinned !== -1) {
      if (aPinned === -1) return 1;
      if (bPinned === -1) return -1;
      return aPinned - bPinned;
    }
    const rankA = a.popularityRank ?? Number.POSITIVE_INFINITY;
    const rankB = b.popularityRank ?? Number.POSITIVE_INFINITY;
    return rankA - rankB;
  });
}

export function sortMachinesByLatest(machines: Machine[]): Machine[] {
  return [...machines].sort((a, b) => {
    // Sort by real-world machine release date (導入日) rather than site
    // publish date, so "新着情報" reflects genuinely new machines.
    const releaseA = a.spec.releaseDate ? new Date(a.spec.releaseDate).getTime() : 0;
    const releaseB = b.spec.releaseDate ? new Date(b.spec.releaseDate).getTime() : 0;
    const releaseDiff = releaseB - releaseA;
    if (releaseDiff !== 0) return releaseDiff;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

export async function getMachinesByMaker(makerSlug: string): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.spec.maker?.slug === makerSlug);
}

export async function getMachinesBySeries(seriesSlug: string): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.spec.series?.slug === seriesSlug);
}

export function searchMachines(machines: Machine[], query: string): Machine[] {
  if (!query.trim()) return [];
  return machines.filter((machine) => matchesQuery(buildSearchHaystack(machine), query));
}

// Picks a build-time-random sample of other machines for "related articles"
// style sections. Random at build/deploy time is fine here — it just keeps
// the picks from going stale between content updates.
export function getRandomMachines(
  machines: Machine[],
  excludeSlug: string,
  count: number
): Machine[] {
  const candidates = machines.filter((machine) => machine.slug !== excludeSlug);
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

