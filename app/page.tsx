import Link from "next/link";
import type { Metadata } from "next";
import { getAllMachines, sortMachinesByPopularity } from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
import AdSlot from "@/components/ads/AdSlot";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ワンチャンくん｜パチスロ朝一リセットまとめサイト",
  description: "朝一リセット・リセット恩恵・注意点を初心者向けにやさしくまとめた情報サイトです。",
  alternates: { canonical: SITE_URL },
};

export default async function HomePage() {
  const machines = sortMachinesByPopularity(await getAllMachines());

  return (
    <>
      <AdSlot slot="home-top" />
      <h1 className="page-title">初心者向けパチスロ朝一リセットまとめサイト</h1>

      <section className="card warning" aria-label="注意喚起">
        <h2>はじめに（重要）</h2>
        <ul>
          <li>本サイトは「勝てる・稼げる」を保証するものではありません。</li>
          <li>無理な投資や借入をしての遊技は避けてください。</li>
          <li>不安を感じたら、すぐに休む・やめる判断を優先してください。</li>
        </ul>
      </section>

      <section className="card">
        <h2>このサイトで学べること</h2>
        <ol>
          <li>朝一リセットとは何か</li>
          <li>リセット恩恵の代表例（天井短縮・モード優遇など）</li>
          <li>実践前に確認すべき注意点</li>
        </ol>
        <p><Link href="/beginner">3分で分かる基礎ガイドを読む →</Link></p>
        <ul>
          <li><Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link></li>
          <li><Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link></li>
        </ul>
      </section>

      <AdSlot slot="home-mid" />

      {machines.length > 0 && (
        <section>
          <h2>機種一覧</h2>
          <p className="section-note">
            機種ごとのリセット恩恵・判別方法・実践データをまとめています。掲載機種は順次追加予定です。
          </p>
          <div className="cards">
            {machines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>
          <p><Link href="/machines">全機種を見る →</Link></p>
        </section>
      )}
    </>
  );
}
