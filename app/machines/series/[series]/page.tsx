import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMachinesBySeries, sortMachinesByPopularity } from "@/lib/content/machines";
import { getAllSeries, getSeriesBySlug } from "@/lib/content/refs";
import MachineCard from "@/components/machine/MachineCard";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  const series = await getAllSeries();
  return series.map((s) => ({ series: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ series: string }>;
}): Promise<Metadata> {
  const { series: seriesSlug } = await params;
  const series = await getSeriesBySlug(seriesSlug);
  if (!series) return {};
  return {
    title: `${series.name}の機種一覧`,
    description: `${series.name}のリセット恩恵・朝イチ狙い目情報をまとめています。`,
    alternates: { canonical: `${SITE_URL}/machines/series/${series.slug}` },
  };
}

export default async function SeriesPage({
  params,
}: {
  params: Promise<{ series: string }>;
}) {
  const { series: seriesSlug } = await params;
  const series = await getSeriesBySlug(seriesSlug);
  if (!series) notFound();

  const machines = sortMachinesByPopularity(await getMachinesBySeries(seriesSlug));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "トップ", href: "/" },
          { name: "機種一覧", href: "/machines" },
          { name: series.name, href: `/machines/series/${series.slug}` },
        ]}
      />
      <h1 className="page-title">{series.name}の機種一覧</h1>
      {machines.length > 0 ? (
        <div className="cards">
          {machines.map((machine) => (
            <MachineCard key={machine.slug} machine={machine} />
          ))}
        </div>
      ) : (
        <p>現在このシリーズの公開中の機種ページはありません。</p>
      )}
    </>
  );
}
