import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedMachines, getComingSoonMachines, sortMachinesByLatest } from "@/lib/content/machines";
import { selectHomeMachines } from "@/lib/content/popularity";
import MachineCard from "@/components/machine/MachineCard";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import ComingSoonSection from "@/components/machine/ComingSoonSection";
import AdSlot from "@/components/ads/AdSlot";
import LineCta from "@/components/site/LineCta";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "ワンチャンくん｜パチスロ朝一リセットまとめサイト",
  description: "朝一リセット・リセット恩恵・注意点を初心者向けにやさしくまとめた情報サイトです。",
  alternates: { canonical: SITE_URL },
};

export default async function HomePage() {
  const allMachines = await getPublishedMachines();
  const comingSoonMachines = await getComingSoonMachines();
  const comingSoonGroups = Object.entries(
    comingSoonMachines.reduce<Record<string, typeof comingSoonMachines>>((groups, machine) => {
      const releaseDate = machine.spec.releaseDate ?? "undated";
      (groups[releaseDate] ??= []).push(machine);
      return groups;
    }, {})
  ).sort(([dateA], [dateB]) => dateA.localeCompare(dateB));
  const homeSelection = selectHomeMachines(allMachines, 12);
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
                  <MachineThumbnail heroImage={machine.heroImage} name={machine.name} sizes="72px" />
                </Link>
                <Link href={`/machines/${machine.slug}`}>{machine.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-label="注目の新台NEWS">
        <h2>🔥 注目の新台NEWS</h2>
        <p className="section-note">
          検定通過・公式特報など、今後登場が期待される注目機種の最新情報をまとめています。
        </p>
        <div className="cards top-news-cards">
          <Link href="/articles/monkey-turn-red-news" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/monkey-turn-red-news.jpg"
              name="モンキーターンRED始動！「王道から挑戦へ」"
            />
            <h3>
              モンキーターンRED始動！「王道から挑戦へ」<span className="new-badge">公式特報</span>
            </h3>
            <p className="updated-at">公開日：2026-08-22</p>
            <p className="section-note">
              山佐公式特報が公開。VIではなく“RED”――新作で今わかっていること。
            </p>
          </Link>
          <Link href="/articles/basilisk-4-news" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/basilisk-4-news.jpg"
              name="バジリスクⅣが検定通過！"
            />
            <h3>
              バジリスクⅣが検定通過！<span className="new-badge">検定通過</span>
            </h3>
            <p className="updated-at">公開日：2026-08-22</p>
            <p className="section-note">
              “絆3”ではなく約10年ぶりのナンバリング新作？ 今わかっている情報を整理。
            </p>
          </Link>
        </div>
      </section>

      {comingSoonGroups.map(([releaseDate, machines], index) => {
        const releaseLabel = releaseDate === "undated"
          ? "導入日未定"
          : `${Number(releaseDate.slice(5, 7))}月${Number(releaseDate.slice(8, 10))}日導入予定`;

        return (
          <ComingSoonSection
            key={releaseDate}
            sectionId={`coming-soon-${releaseDate}`}
            machines={machines}
            heading={`${releaseLabel}｜Coming Soon`}
            description={`${releaseLabel}の新台${machines.length}機種です。解析情報は随時更新します。`}
            footerLink={index === comingSoonGroups.length - 1
              ? { href: "/machines#coming-soon", label: "導入予定機種をすべて見る" }
              : undefined}
            variant="compact"
          />
        );
      })}

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

      {homeSelection.machines.length > 0 && (
        <section>
          <h2>{homeSelection.heading}</h2>
          <p className="section-note">
            {homeSelection.heading === "よく見られている機種"
              ? "実際によく検索・閲覧されている機種を中心に表示しています。"
              : "機種ごとのリセット恩恵・判別方法・実践データをまとめています。掲載機種は順次追加予定です。"}
          </p>
          <div className="cards">
            {homeSelection.machines.map((machine) => (
              <MachineCard key={machine.slug} machine={machine} />
            ))}
          </div>
          <div className="home-machines-actions">
            <Link href="/machines" className="button">
              全機種を見る（全{allMachines.length}件）
            </Link>
            <Link href="/search" className="button button-secondary">
              機種名で検索する
            </Link>
            <Link href="/articles/reset-benefit-machines" className="button button-secondary">
              リセット恩恵別に探す
            </Link>
          </div>
        </section>
      )}

      <section aria-label="実践記録・コラム">
        <h2>実践記録・コラム</h2>
        <p className="section-note">運営者自身の実践記録や失敗談、コラムを掲載しています。</p>
        <div className="cards">
          <Link href="/articles/tokyo-ghoul-jiro-8586-column" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/tokyo-ghoul-jiro-8586-column.jpg"
              name="二郎系ラーメンを食べに遠征したら、東京喰種で8586枚出た話"
            />
            <h3>二郎系ラーメンを食べに遠征したら、東京喰種で8586枚出た話</h3>
            <p className="updated-at">公開日：2026-08-03</p>
            <p className="section-note">ジャグラーで少し勝って帰るはずが、東京喰種の周りをグールグール5周。乗り打ちで最終8586枚となった二郎系ラーメン遠征の実践記録です。</p>
          </Link>
          <Link href="/articles/monkey-paramount-neighbor-column" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/monkey-paramount-neighbor-column.jpg"
              name="隣のパラマウント打ちに「表出ろ」と言われた結果、まさかの正体が判明した"
            />
            <h3>隣のパラマウント打ちに「表出ろ」と言われた話</h3>
            <p className="updated-at">公開日：2026-07-28</p>
            <p className="section-note">スマスロモンキーターンVのホール体験コラムです。</p>
          </Link>
          <Link href="/articles/soundcore-liberty-4-hall-noise-column" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/soundcore-liberty-4-hall-noise-column.jpg"
              name="モンキーターン・東京喰種・北斗の爆音から耳を守りたい｜ホールでSoundcore Liberty 4を使ってみた"
            />
            <h3>ホールでSoundcore Liberty 4を使ってみた</h3>
            <p className="updated-at">公開日：2026-07-24</p>
            <p className="section-note">隣台の爆音対策コラムです。</p>
          </Link>
          <Link href="/articles/hokuto-loud-neighbor-column" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/hokuto-loud-neighbor-column.jpg"
              name="スマスロ北斗の拳で隣に音量MAXの男が座った話｜収支は負けたが謎の勝負には勝った"
            />
            <h3>隣に音量MAXの男が座った話</h3>
            <p className="updated-at">公開日：2026-07-21</p>
            <p className="section-note">スマスロ北斗の拳のホール体験コラムです。</p>
          </Link>
          <Link href="/articles/tokyo-ghoul-trophy-misugoshi" className="card machine-card">
            <MachineThumbnail
              heroImage="/images/articles/tokyo-ghoul-trophy-misugoshi.jpg"
              name="スマスロ東京喰種 実践記録｜トロフィーを確認せず5万円使い切った7月7日"
            />
            <h3>実践記録：トロフィーを確認せず5万円使い切った7月7日</h3>
            <p className="updated-at">公開日：2026-07-19</p>
            <p className="section-note">スマスロ東京喰種の実践記録・失敗談です。</p>
          </Link>
        </div>
      </section>

      <LineCta />
    </>
  );
}
