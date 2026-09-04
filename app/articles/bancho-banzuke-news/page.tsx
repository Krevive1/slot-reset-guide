import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import WanchankunComment from "@/components/machine/WanchankunComment";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "スマスロ『押忍！番長番付』2026年12月導入予定｜ティザーPV・V図柄・最新情報まとめ";
const description =
  "大都技研の番長シリーズ最新作『押忍！番長番付』のティザーPVが公開されました。2026年12月7日導入予定、V図柄採用など、現時点で分かっていること・まだ分かっていないことを整理してまとめます。続報が入り次第、随時更新します。";
const url = `${SITE_URL}/articles/bancho-banzuke-news`;
const heroImage = "/images/articles/bancho-banzuke-news.png";
const publishedAt = "2026-09-04";
const updatedAt = "2026-09-04";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [{ url: heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

export default function BanchoBanzukeNewsPage() {
  const articleJsonLd = {
    ...buildGenericArticleJsonLd({ headline: title, description, url }),
    datePublished: publishedAt,
    dateModified: updatedAt,
  };
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/bancho-banzuke-news" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">
          公開日：{publishedAt}　更新日：{updatedAt}
        </p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="押忍！番長番付のティザーPVイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          大都技研の人気シリーズ「押忍！番長」の最新作情報が動き出しました。名称は「押忍！番長番付」。2026年9月1日にティザーPVが公開され、話題になっています。
        </p>
        <p>
          この記事の時点では、ゲーム性・詳細スペック・天井・リセット恩恵といった情報はまだ公式発表されていません。現時点で分かっていること・まだ分かっていないことを分けて整理し、続報が入り次第このページを更新していきます。
        </p>

        <h2>押忍！番長番付が発表</h2>
        <p>
          2026年9月1日、大都技研から番長シリーズ最新作「押忍！番長番付」のティザーPVが公開されました。機種名の「番付」が示す通り、スポーツ競技・運動会をモチーフにしたお祭り系の演出になる見込みで、ティザーPVにはカーリングやサッカーといった対決演出が登場しています。
        </p>
        <p>
          大都技研公式X（旧Twitter）アカウント「株式会社大都技研」（
          <a href="https://x.com/DAITOGIKEN_JP" target="_blank" rel="noopener noreferrer nofollow">
            @DAITOGIKEN_JP
          </a>
          ）から、「続報　スロット最新作　ティザーPV公開」として投稿されています。X上で公開されている動画のため、当サイトでは埋め込みではなく公式投稿への直接リンクでご紹介します。
        </p>
        <p>
          <a
            href="https://x.com/DAITOGIKEN_JP/status/2094621277713735952"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            大都技研公式Xのティザーpost（PVリンクあり）を見る
          </a>
        </p>

        <h2>導入時期はいつ？</h2>
        <p>
          導入時期は<strong>2026年12月7日予定</strong>です。複数の業界系情報サイトで同じ日付が報じられており、比較的信頼度の高い情報といえます。ただし、正式な公式発表による確定ではないため、変更の可能性はあります。
        </p>

        <h2>今回の注目ポイント：V図柄</h2>
        <p>
          筐体情報として、従来の番長シリーズで使われてきた「7図柄」ではなく、「V図柄」が採用されるとの情報が出ています。番長シリーズの見た目の印象が大きく変わる可能性があり、ファンの間で話題になっています。
        </p>
        <p>
          この他にも、「いざ！番長」チームとのコラボ企画があるのではという噂も一部で見られますが、現時点では公式発表を確認できていません。あくまで噂の域を出ない情報として、参考程度にとどめてください。
        </p>

        <h2>ファンの反応</h2>
        <p>
          ティザーPV公開後、SNS上では「番長5ではなく番長番付なのか」「V図柄が気になる」「新しい対決演出が楽しみ」といった声が見られます。番長シリーズを追ってきたファンほど、ナンバリングを外した今回の名称・演出の変化に注目しているようです。
        </p>

        <WanchankunComment comment="番長シリーズといえば漢気じゃんけんのイメージが強いワンだけど、今度はスポーツ・お祭り系ときたか🐶 V図柄がどんな役割を持つのか、続報が気になって夜も眠れないワン。詳しいスペックが出たら、朝一・リセット周りもすぐにまとめるワン！" />

        <h2>2026年9月4日時点の情報整理</h2>
        <section className="card" aria-label="確認できていること">
          <h3>確認できていること</h3>
          <ul>
            <li>名称は「押忍！番長番付」で、大都技研から9月1日にティザーPVが公式に公開されている</li>
            <li>番長シリーズ最新作にあたる</li>
            <li>「番付」の名の通り、スポーツ競技・運動会モチーフのお祭り系演出（カーリング・サッカー等）</li>
            <li>導入時期は2026年12月7日予定（複数の業界情報サイトが同日付で報道）</li>
            <li>筐体にV図柄が採用される見込み</li>
          </ul>
        </section>
        <section className="card warning" aria-label="まだ未確定なこと">
          <h3>まだ未確定なこと</h3>
          <ul>
            <li>コイン単価・MY・ベース・純増などの正式スペック</li>
            <li>押忍ポイントやCZなど、正式なゲーム性の名称・仕組み</li>
            <li>天井・リセット恩恵・朝一優遇・据え置き・設定判別方法</li>
            <li>「いざ！番長」チームとのコラボ企画の真偽</li>
          </ul>
        </section>

        <h2>今後判明したら更新する情報</h2>
        <p>このページは速報記事として、続報が入り次第、以下の項目を随時追記していきます。</p>
        <ul>
          <li>正式スペック（コイン単価・MY・ベース・純増）</li>
          <li>ゲーム性・AT仕様</li>
          <li>天井ゲーム数</li>
          <li>朝一・リセット恩恵</li>
          <li>設定判別方法</li>
          <li>導入台数・正式な公式サイト情報</li>
        </ul>

        <h2>まとめ</h2>
        <p>
          押忍！番長番付は、ティザーPVだけですでに大きな注目を集めている新台です。2026年12月7日の導入まで時間はありますが、V図柄採用やスポーツ・お祭りモチーフといった気になる要素はすでに出そろっています。
        </p>
        <p>続報が入り次第、ワンチャンくんでも改めて紹介していきます。楽しみに待ちましょう。</p>

        <div className="article-link-box">
          <p>番長シリーズの他の機種については、以下のページもあわせてご覧ください。</p>
          <ul>
            <li><Link href="/machines/iza-bancho">Lいざ！番長の機種ページ</Link></li>
            <li><Link href="/machines/banchou-3">押忍！番長3の機種ページ</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事の作成にあたり、以下の情報を参考にしました。ティザーPVは大都技研公式Xの投稿、それ以外は業界情報サイト・解析情報サイトによる報道・調査情報です。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/DAITOGIKEN_JP/status/2094621277713735952"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              株式会社大都技研 公式X（ティザーPV・一次ソース）
            </a>
          </li>
          <li>
            <a href="https://parlourfullslotl.com/archives/184700" target="_blank" rel="noopener noreferrer nofollow">
              パーラーフルスロットル（ティザーPV公開・V図柄情報）
            </a>
          </li>
          <li>
            <a href="https://chonborista.com/slot/daito-slot/268978/" target="_blank" rel="noopener noreferrer nofollow">
              ちょんぼりすた（導入予定日・調査中項目の確認）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
