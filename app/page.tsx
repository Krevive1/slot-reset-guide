import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllMachines,
  sortMachinesByLatest,
  sortMachinesByPopularity,
} from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import AdSlot from "@/components/ads/AdSlot";
import LineCta from "@/components/site/LineCta";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ワンチャンくん｜パチスロ朝一リセットまとめサイト",
  description: "朝一リセット・リセット恩恵・注意点を初心者向けにやさしくまとめた情報サイトです。",
  alternates: { canonical: SITE_URL },
};

export default async function HomePage() {
  const allMachines = await getAllMachines();
  const machines = sortMachinesByPopularity(allMachines);
  const latestMachines = sortMachinesByLatest(allMachines).slice(0, 4);

  return (
    <>
      <AdSlot slot="home-top" />
      <h1 className="page-title">初心者向けパチスロ朝一リセットまとめサイト</h1>

      {latestMachines.length > 0 && (
        <section aria-label="新着情報">
          <h2>新着情報</h2>
          <ul className="latest-list">
            {latestMachines.map((machine) => (
              <li key={machine.slug} className="latest-list-item">
                <Link href={`/machines/${machine.slug}`}>
                  <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />
                </Link>
                <Link href={`/machines/${machine.slug}`}>{machine.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="card warning" aria-label="注意喚起">
        <h2>はじめに（重要）</h2>
        <ul>
          <li>本サイトは収支や遊技結果を保証するものではありません。</li>
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
          <li><Link href="/guides/yougo-shu">パチスロ用語集（初心者向け基本用語まとめ）</Link></li>
          <li><Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link></li>
          <li><Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link></li>
          <li><Link href="/articles/reset-benefit-machines">朝イチリセット恩恵を確認したい機種まとめ</Link></li>
          <li><Link href="/articles/careful-morning-machines">朝一で慎重に確認したい機種まとめ</Link></li>
          <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link></li>
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

      <LineCta />
    </>
  );
}
