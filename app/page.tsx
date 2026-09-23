import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedMachines, getComingSoonMachines } from "@/lib/content/machines";
import { selectHomeMachines } from "@/lib/content/popularity";
import { getArticlesByCategory, ARTICLE_CATEGORY_INFO } from "@/lib/content/articles";
import MachineCard from "@/components/machine/MachineCard";
import ArticleCardGrid from "@/components/site/ArticleCardGrid";
import ArticleList from "@/components/site/ArticleList";
import ComingSoonSection from "@/components/machine/ComingSoonSection";
import AdSlot from "@/components/ads/AdSlot";
import LineCta from "@/components/site/LineCta";
import { SITE_URL } from "@/lib/site";

const PETIT_NEWS_HOME_LIMIT = 7;
const NEW_MACHINE_NEWS_HOME_LIMIT = 4;
const COLUMN_HOME_LIMIT = 4;

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
  const petitNewsArticles = getArticlesByCategory("petit-news");
  const newMachineNewsArticles = getArticlesByCategory("new-machine-news");
  const columnArticles = getArticlesByCategory("column");

  return (
    <>
      <AdSlot slot="home-top" />
      <h1 className="page-title">初心者向けパチスロ朝一リセットまとめサイト</h1>

      <section aria-label="プチニュース">
        <h2>プチニュース</h2>
        {/* articles.ts から新しい順に取得。トップページでは最大{PETIT_NEWS_HOME_LIMIT}件のみ表示し、超過分は一覧ページへ */}
        <ArticleList articles={petitNewsArticles.slice(0, PETIT_NEWS_HOME_LIMIT)} />
        {petitNewsArticles.length > PETIT_NEWS_HOME_LIMIT && (
          <p>
            <Link href={ARTICLE_CATEGORY_INFO["petit-news"].path}>プチニュース一覧を見る →</Link>
          </p>
        )}
      </section>

      <section aria-label="注目の新台NEWS">
        <h2>🔥 注目の新台NEWS</h2>
        <p className="section-note">
          検定通過・公式特報など、今後登場が期待される注目機種の最新情報をまとめています。
        </p>
        <ArticleCardGrid articles={newMachineNewsArticles.slice(0, NEW_MACHINE_NEWS_HOME_LIMIT)} wide />
        {newMachineNewsArticles.length > NEW_MACHINE_NEWS_HOME_LIMIT && (
          <p>
            <Link href={ARTICLE_CATEGORY_INFO["new-machine-news"].path}>注目の新台NEWS一覧を見る →</Link>
          </p>
        )}
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
        <ArticleCardGrid articles={columnArticles.slice(0, COLUMN_HOME_LIMIT)} showDescription />
        {columnArticles.length > COLUMN_HOME_LIMIT && (
          <p>
            <Link href={ARTICLE_CATEGORY_INFO["column"].path}>コラム一覧を見る →</Link>
          </p>
        )}
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

      <LineCta />
    </>
  );
}
