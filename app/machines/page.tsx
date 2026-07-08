import type { Metadata } from "next";
import Link from "next/link";
import { getAllMachines, sortMachinesByPopularity } from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import AdSlot from "@/components/ads/AdSlot";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "機種一覧",
  description: "朝一リセット恩恵・判別方法・実践データをまとめた機種ページの一覧です。",
  alternates: { canonical: `${SITE_URL}/machines` },
};

export default async function MachinesIndexPage() {
  const machines = sortMachinesByPopularity(await getAllMachines());

  return (
    <>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "機種一覧", href: "/machines" }]} />
      <h1 className="page-title">機種一覧</h1>
      <p className="section-note">
        機種ごとのリセット恩恵・判別方法・朝イチの狙い目・実践データをまとめています。
      </p>
      <p>
        目的別に探したい場合は、
        <Link href="/articles/reset-benefit-machines">朝イチリセット恩恵を確認したい機種まとめ</Link>
        や
        <Link href="/articles/careful-morning-machines">朝一で慎重に確認したい機種まとめ</Link>
        も参考にしてください。
      </p>
      <AdSlot slot="machines-top" />
      {machines.length > 0 ? (
        <div className="cards">
          {machines.map((machine) => (
            <MachineCard key={machine.slug} machine={machine} />
          ))}
        </div>
      ) : (
        <p>現在公開中の機種ページはありません。</p>
      )}
    </>
  );
}
