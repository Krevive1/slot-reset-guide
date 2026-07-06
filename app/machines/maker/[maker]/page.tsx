import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getMachinesByMaker, sortMachinesByPopularity } from "@/lib/content/machines";
import { getAllMakers, getMakerBySlug } from "@/lib/content/refs";
import MachineCard from "@/components/machine/MachineCard";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import { SITE_URL } from "@/lib/site";

export async function generateStaticParams() {
  const makers = await getAllMakers();
  return makers.map((maker) => ({ maker: maker.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ maker: string }>;
}): Promise<Metadata> {
  const { maker: makerSlug } = await params;
  const maker = await getMakerBySlug(makerSlug);
  if (!maker) return {};
  return {
    title: `${maker.name}の機種一覧`,
    description: `${maker.name}が展開する機種のリセット恩恵・朝イチ狙い目情報をまとめています。`,
    alternates: { canonical: `${SITE_URL}/machines/maker/${maker.slug}` },
  };
}

export default async function MakerPage({
  params,
}: {
  params: Promise<{ maker: string }>;
}) {
  const { maker: makerSlug } = await params;
  const maker = await getMakerBySlug(makerSlug);
  if (!maker) notFound();

  const machines = sortMachinesByPopularity(await getMachinesByMaker(makerSlug));

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "トップ", href: "/" },
          { name: "機種一覧", href: "/machines" },
          { name: maker.name, href: `/machines/maker/${maker.slug}` },
        ]}
      />
      <h1 className="page-title">{maker.name}の機種一覧</h1>
      {machines.length > 0 ? (
        <div className="cards">
          {machines.map((machine) => (
            <MachineCard key={machine.slug} machine={machine} />
          ))}
        </div>
      ) : (
        <p>現在このメーカーの公開中の機種ページはありません。</p>
      )}
    </>
  );
}
