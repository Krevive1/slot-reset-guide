import { readFileSync } from "node:fs";
import path from "node:path";
import { z } from "zod";
import { MakerRef, MakerRefSchema, SeriesRef, SeriesRefSchema } from "./schema";

const CONTENT_DIR = path.join(process.cwd(), "content");

function readJson<T>(filename: string, schema: z.ZodType<T[]>): T[] {
  const raw = readFileSync(path.join(CONTENT_DIR, filename), "utf-8");
  return schema.parse(JSON.parse(raw));
}

export async function getAllMakers(): Promise<MakerRef[]> {
  return readJson("makers.json", z.array(MakerRefSchema));
}

export async function getAllSeries(): Promise<SeriesRef[]> {
  return readJson("series.json", z.array(SeriesRefSchema));
}
