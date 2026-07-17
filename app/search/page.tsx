import type { Metadata } from "next";
import {
  getPublishedMachines,
  getComingSoonMachines,
  searchMachines,
  sortMachinesByPopularity,
} from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
import ComingSoonSection from "@/components/machine/ComingSoonSection";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "機種検索",
  description: "機種名やシリーズ名から、リセット恩恵・朝イチ狙い目情報を検索できます。",
  alternates: { canonical: `${SITE_URL}/search` },
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? "";
  const machines = query ? sortMachinesByPopularity(searchMachines(await getPublishedMachines(), query)) : [];
  const comingSoonResults = query ? searchMachines(await getComingSoonMachines(), query) : [];

  return (
    <>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "機種検索", href: "/search" }]} />
      <h1 className="page-title">機種検索</h1>

      <form action="/search" method="get" className="search-form" role="search">
        <label htmlFor="search-q-page" className="sr-only">
          機種名で検索
        </label>
        <input
          id="search-q-page"
          type="search"
          name="q"
          defaultValue={query}
          placeholder="機種名で検索（例：北斗の拳）"
          autoComplete="off"
        />
        <button type="submit">検索</button>
      </form>

      {query && (
        <p className="section-note">
          「{query}」の検索結果：掲載中 {machines.length}件
          {comingSoonResults.length > 0 && ` ／ Coming Soon ${comingSoonResults.length}件`}
        </p>
      )}

      {query && machines.length === 0 && comingSoonResults.length === 0 && (
        <p>該当する機種が見つかりませんでした。別のキーワードでお試しください。</p>
      )}

      {machines.length > 0 && (
        <section aria-labelledby="search-published-heading">
          <h2 id="search-published-heading">掲載中の機種</h2>
          <div className="cards">
            {machines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>
        </section>
      )}

      <ComingSoonSection machines={comingSoonResults} />
    </>
  );
}
