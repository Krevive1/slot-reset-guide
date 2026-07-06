import type { Metadata } from "next";
import { getAllMachines, sortMachinesByPopularity } from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
import Breadcrumbs from "@/components/site/Breadcrumbs";
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
