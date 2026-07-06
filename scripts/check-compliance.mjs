import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const BANNED_PHRASES = [
  "必勝",
  "絶対勝てる",
  "絶対に勝てる",
  "三店方式",
  "換金率",
  "違法カジノ",
  "裏カジノ",
];

const CONTENT_DIR = path.join(process.cwd(), "content", "machines");
const files = readdirSync(CONTENT_DIR).filter((file) => file.endsWith(".json"));

let hasViolation = false;

for (const file of files) {
  const raw = readFileSync(path.join(CONTENT_DIR, file), "utf-8");
  for (const phrase of BANNED_PHRASES) {
    if (raw.includes(phrase)) {
      console.error(`[compliance] "${file}" contains banned phrase: "${phrase}"`);
      hasViolation = true;
    }
  }
}

if (hasViolation) {
  console.error("\nCompliance check failed. Remove the flagged phrases before building.");
  process.exit(1);
}

console.log(`[compliance] OK - ${files.length} machine file(s) checked, no banned phrases found.`);
