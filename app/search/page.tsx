import type { Metadata } from "next";
import { getAllMachines, searchMachines, sortMachinesByPopularity } from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
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
  const machines = query ? sortMachinesByPopularity(searchMachines(await getAllMachines(), query)) : [];

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
          「{query}」の検索結果：{machines.length}件
        </p>
      )}

      {query && machines.length === 0 && (
        <p>該当する機種が見つかりませんでした。別のキーワードでお試しください。</p>
      )}

      {machines.length > 0 && (
        <div className="cards">
          {machines.map((machine) => (
            <MachineCard key={machine.slug} machine={machine} />
          ))}
        </div>
      )}
    </>
  );
}
