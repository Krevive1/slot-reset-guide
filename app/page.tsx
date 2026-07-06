import Link from "next/link";
import type { Metadata } from "next";
import { getAllMachines } from "@/lib/content/machines";
import MachineCard from "@/components/machine/MachineCard";

export const metadata: Metadata = {
  title: "あさイチワンちゃんくん｜パチスロ朝一リセット学習サイト",
  description: "朝一リセット・リセット恩恵・注意点を初心者向けにやさしく学べる教育サイトです。",
};

export default async function HomePage() {
  const machines = await getAllMachines();

  return (
    <>
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
        <p><Link href="/beginner">まずは「はじめてガイド」を読む →</Link></p>
      </section>

      {machines.length > 0 && (
        <section>
          <h2>機種一覧</h2>
          <p className="section-note">
            機種ごとのリセット恩恵・判別方法・実践データをまとめたページの例です（現在はテンプレート確認用のサンプルデータです）。
          </p>
          <div className="cards">
            {machines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
