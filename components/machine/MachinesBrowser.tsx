"use client";

import { useMemo, useState } from "react";
import MachineCard from "./MachineCard";
import { buildSearchHaystack, matchesQuery } from "@/lib/content/search";
import type { Machine } from "@/lib/content/schema";

// Every machine card is always rendered AND visible in the default
// (no-query) state, so every /machines/[slug] link is present and
// unhidden in the server-rendered HTML for crawlers. Search only toggles
// the `hidden` attribute to filter the list -- it never limits the
// default, no-query view.
export default function MachinesBrowser({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");

  const haystacks = useMemo(
    () => new Map(machines.map((machine) => [machine.slug, buildSearchHaystack(machine)])),
    [machines]
  );

  const matchedSlugs = useMemo(() => {
    if (!query.trim()) return null;
    const matched = new Set<string>();
    for (const machine of machines) {
      const haystack = haystacks.get(machine.slug);
      if (haystack && matchesQuery(haystack, query)) matched.add(machine.slug);
    }
    return matched;
  }, [query, machines, haystacks]);

  const matchedCount = matchedSlugs ? matchedSlugs.size : machines.length;

  return (
    <div>
      <form role="search" onSubmit={(e) => e.preventDefault()} className="machines-browser-search">
        <label htmlFor="machines-browser-q" className="sr-only">
          機種名・シリーズ名・メーカー名で検索
        </label>
        <input
          id="machines-browser-q"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="機種名・シリーズ名・メーカー名で検索"
          autoComplete="off"
        />
      </form>

      <p className="section-note">
        {query ? `「${query}」の検索結果：${matchedCount}件` : `全${machines.length}件`}
      </p>

      {matchedCount === 0 ? (
        <p>該当する機種が見つかりませんでした。別のキーワードでお試しください。</p>
      ) : (
        <div className="cards">
          {machines.map((machine) => {
            const isVisible = matchedSlugs ? matchedSlugs.has(machine.slug) : true;
            return (
              <div key={machine.slug} hidden={!isVisible}>
                <MachineCard machine={machine} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
