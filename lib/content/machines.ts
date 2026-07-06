import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { Machine, MachineSchema } from "./schema";

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
export const getAllMachines = () => machineRepository.getAll();

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

export async function getMachinesByMaker(makerSlug: string): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.spec.maker?.slug === makerSlug);
}

export async function getMachinesBySeries(seriesSlug: string): Promise<Machine[]> {
  const machines = await getAllMachines();
  return machines.filter((machine) => machine.spec.series?.slug === seriesSlug);
}

const NEW_BADGE_WINDOW_DAYS = 90;

// Shows a "NEW" badge for 3 months (90 days) after a machine's release date.
// Evaluated at build/render time, so it naturally stops showing once expired.
export function isNewMachine(releaseDate: string | undefined, now: Date = new Date()): boolean {
  if (!releaseDate) return false;
  const release = new Date(releaseDate);
  if (Number.isNaN(release.getTime())) return false;
  const diffDays = (now.getTime() - release.getTime()) / (1000 * 60 * 60 * 24);
  return diffDays >= 0 && diffDays <= NEW_BADGE_WINDOW_DAYS;
}
