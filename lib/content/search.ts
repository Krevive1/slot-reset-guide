// Pure, framework-agnostic search matching with no Node.js (fs) dependency,
// so it is safe to import from both server components (app/search,
// app/machines) and client components (components/machine/MachinesBrowser).
import type { Machine } from "./schema";

// Common naming prefixes that vary between how a machine is officially
// titled and how users are likely to type it (e.g. "スマスロ吉宗" vs
// "L吉宗" vs "吉宗"). Stripped from both the query and the machine name
// before a secondary match attempt, so a mismatched prefix doesn't block
// an otherwise-correct search.
const PREFIX_PATTERNS = [/^l/, /^スマスロ/, /^パチスロ/, /^スロット/];

// NFKC folds full-width alphanumerics/half-width katakana to a common form,
// which combined with lowercasing and whitespace/nakaguro stripping absorbs
// the most common typing variations without resorting to fuzzy matching
// (which risks surfacing the wrong machine).
function normalize(input: string): string {
  return input
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s　]+/g, "")
    .replace(/[・･·]/g, "");
}

function stripKnownPrefixes(value: string): string {
  let result = value;
  let changed = true;
  while (changed) {
    changed = false;
    for (const pattern of PREFIX_PATTERNS) {
      const stripped = result.replace(pattern, "");
      if (stripped !== result) {
        result = stripped;
        changed = true;
      }
    }
  }
  return result;
}

export interface SearchHaystack {
  full: string;
  nameStripped: string;
}

// Only searches fields the schema already carries (name/nameKana/series
// name/maker name/slug) -- no new required fields are introduced, so this
// works today across all machines and can pick up richer data later
// (e.g. an explicit aliases[] field) without a migration.
export function buildSearchHaystack(machine: Machine): SearchHaystack {
  const fields = [
    machine.name,
    machine.nameKana,
    machine.spec.series?.name,
    machine.spec.maker?.name,
    machine.slug.replace(/-/g, " "),
  ].filter((value): value is string => Boolean(value));
  return {
    full: normalize(fields.join(" ")),
    nameStripped: stripKnownPrefixes(normalize(machine.name)),
  };
}

export function matchesQuery(haystack: SearchHaystack, rawQuery: string): boolean {
  const query = normalize(rawQuery);
  if (!query) return true;
  if (haystack.full.includes(query)) return true;
  const strippedQuery = stripKnownPrefixes(query);
  if (!strippedQuery) return false;
  return haystack.nameStripped.includes(strippedQuery);
}
