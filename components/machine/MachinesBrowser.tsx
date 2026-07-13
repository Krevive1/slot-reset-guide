"use client";

import { useMemo, useState } from "react";
import MachineCard from "./MachineCard";
import { buildSearchHaystack, matchesQuery } from "@/lib/content/search";
import type { Machine } from "@/lib/content/schema";

const PAGE_SIZE = 20;

// All machine cards are always rendered (and linked) in the DOM -- search and
// "load more" only toggle the `hidden` attribute on wrapper elements. This
// keeps every /machines/[slug] link present in the server-rendered HTML for
// crawlers, even though the visible portion is progressively revealed.
export default function MachinesBrowser({ machines }: { machines: Machine[] }) {
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

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

  const visibleSlugs = useMemo(() => {
    const pool = matchedSlugs ? machines.filter((m) => matchedSlugs.has(m.slug)) : machines;
    return new Set(pool.slice(0, visibleCount).map((m) => m.slug));
  }, [matchedSlugs, machines, visibleCount]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    setVisibleCount(PAGE_SIZE);
  };

  const hasMore = matchedCount > visibleCount;

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
          onChange={(e) => handleQueryChange(e.target.value)}
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
            const isMatch = matchedSlugs ? matchedSlugs.has(machine.slug) : true;
            const isVisible = isMatch && visibleSlugs.has(machine.slug);
            return (
              <div key={machine.slug} hidden={!isVisible}>
                <MachineCard machine={machine} />
              </div>
            );
          })}
        </div>
      )}

      {hasMore && (
        <div className="load-more-row">
          <button
            type="button"
            className="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            さらに表示（残り{matchedCount - visibleCount}件）
          </button>
        </div>
      )}
    </div>
  );
}
