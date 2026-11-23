import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import WanchankunComment from "@/components/machine/WanchankunComment";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import StickyBottomBanner from "@/components/site/StickyBottomBanner";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title = "スロット新台 12月・1月導入スケジュール｜12/7・12/21・1/12の機種一覧【11月20日時点】";
const description =
  "2026年12月7日・12月21日、2027年1月12日に導入予定のスロット新台を日程別に一覧化。ゼーガペインETR・ツインエンジェル2・番長番付・バジリスクⅣ・モンキーターンREDなど、公表されている機械割と合わせて整理します。導入日は予定です。";
const url = `${SITE_URL}/articles/new-slot-schedule-dec-jan`;
const heroImage = "/images/articles/bancho-banzuke-news.webp";
const publishedAt = "2026-11-20";
const updatedAt = "2026-11-20";

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

export default function NewSlotScheduleDecJanPage() {
  const foodOffer = getActiveAffiliateOffer("amazonFoodDrink");
  const vodOffer = getActiveAffiliateOffer("abemaPremium");
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/new-slot-schedule-dec-jan" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">
          公開日：{publishedAt}　更新日：{updatedAt}
        </p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="12月・1月導入予定のスロット新台スケジュール"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年12月7日に5機種、12月21日に3機種、2027年1月12日に4機種のスロット新台が導入予定です（2026年11月20日時点）。この記事では、導入予定日ごとに機種を整理し、公表されている機械割だけをまとめました。
        </p>
        <p>
          天井・リセット恩恵・朝イチの狙い目といった実戦情報は、解析が出そろってから個別に掲載します。この時点で未確認の項目は、推測では書いていません。
        </p>

        <h2>導入予定の早見表</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>導入予定日</th>
                <th>機種名</th>
                <th>公表されている機械割</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2026年12月7日</td>
                <td>スマスロ ゼーガペインETR</td>
                <td>未確認</td>
              </tr>
              <tr>
                <td>2026年12月7日</td>
                <td>L アカマター</td>
                <td>未確認</td>
              </tr>
              <tr>
                <td>2026年12月7日</td>
                <td>スマスロ 快盗天使ツインエンジェル2</td>
                <td>99.4％〜110.8％（完全攻略時）</td>
              </tr>
              <tr>
                <td>2026年12月7日</td>
                <td>押忍！番長番付</td>
                <td>未確認</td>
              </tr>
              <tr>
                <td>2026年12月7日</td>
                <td>L アサルトリリィ</td>
                <td>97.5％〜112.5％</td>
              </tr>
              <tr>
                <td>2026年12月21日</td>
                <td>スマスロ バジリスク〜甲賀忍法帖〜Ⅳ</td>
                <td>未確認</td>
              </tr>
              <tr>
                <td>2026年12月21日</td>
                <td>スマスロ 魔女と野獣</td>
                <td>97.9％〜113.7％</td>
              </tr>
              <tr>
                <td>2026年12月21日</td>
                <td>L ブルーリフレクション帝</td>
                <td>未確認</td>
              </tr>
              <tr>
                <td>2027年1月12日</td>
                <td>スマスロ モンキーターンRED</td>
                <td>当サイトの記事で整理中</td>
              </tr>
              <tr>
                <td>2027年1月12日</td>
                <td>スマスロ 緋弾のアリア 〜緋緋神降臨〜</td>
                <td>97.9％〜113.2％</td>
              </tr>
              <tr>
                <td>2027年1月12日</td>
                <td>L ガールズ＆パンツァー</td>
                <td>97.9％〜114.9％</td>
              </tr>
              <tr>
                <td>2027年1月12日</td>
                <td>パチスロ ライザのアトリエ 常闇の女王と秘密の隠れ家</td>
                <td>未確認</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          導入日は予定であり、地域・店舗によって前後する場合があります。機械割はP-WORLDの新台スケジュール掲載時点の数値で、「未確認」は同ページに掲載がなかった項目です。
        </p>

        <h2>2026年12月7日導入予定の5機種</h2>
        <p>
          年内最初の導入日です。5機種のうち、当サイトで記事にしているのは「押忍！番長番付」です。
        </p>
        <ul>
          <li>
            <strong>押忍！番長番付</strong>：ティザーPV・V図柄の情報を
            <Link href="/articles/bancho-banzuke-news">新台ニュース記事</Link>
            にまとめています。
          </li>
          <li>
            <strong>スマスロ 快盗天使ツインエンジェル2</strong>：機械割は99.4％〜110.8％（完全攻略時）と掲載されています。
          </li>
          <li>
            <strong>L アサルトリリィ</strong>：機械割は97.5％〜112.5％と掲載されています。
          </li>
          <li>
            <strong>スマスロ ゼーガペインETR</strong>・<strong>L アカマター</strong>：機械割などのスペックは、この時点では確認できていません。
          </li>
        </ul>

        <h2>2026年12月21日導入予定の3機種</h2>
        <ul>
          <li>
            <strong>スマスロ バジリスク〜甲賀忍法帖〜Ⅳ</strong>：新ゲームフロー「胎動の刻」や最終血戦「死合」など、公式発表の内容を
            <Link href="/articles/basilisk-4-news">新台ニュース記事</Link>
            に整理しています。
          </li>
          <li>
            <strong>スマスロ 魔女と野獣</strong>：機械割は97.9％〜113.7％と掲載されています。
          </li>
          <li>
            <strong>L ブルーリフレクション帝</strong>：機械割などのスペックは、この時点では確認できていません。
          </li>
        </ul>

        <h2>2027年1月12日導入予定の4機種</h2>
        <ul>
          <li>
            <strong>スマスロ モンキーターンRED</strong>：AT確率・機械割・ゲームフローを
            <Link href="/articles/monkey-turn-red-news">新台ニュース記事</Link>
            で早見表にしています。
          </li>
          <li>
            <strong>スマスロ 緋弾のアリア 〜緋緋神降臨〜</strong>：機械割は97.9％〜113.2％と掲載されています。
          </li>
          <li>
            <strong>L ガールズ＆パンツァー</strong>：機械割は97.9％〜114.9％と掲載されています。
          </li>
          <li>
            <strong>パチスロ ライザのアトリエ 常闇の女王と秘密の隠れ家</strong>：機械割などのスペックは、この時点では確認できていません。
          </li>
        </ul>
        <p>
          このほか、2027年1月25日に「スマスロ シャカラッシュ」の導入が予定されています。
        </p>

        <WanchankunComment comment="12月は7日と21日の2回に新台が固まっているワン🐶 解析が出たら、天井や朝イチの狙い目はワンチャンくんでもすぐにまとめるワン！" />

        <h2>今後の更新予定</h2>
        <p>
          導入日が近づくにつれて、天井・設定変更時の挙動・やめどきなどの解析情報が出てきます。核になる情報が複数の媒体で一致した機種から、個別の機種ページを公開し、この記事からリンクします。導入予定日に変更があった場合も、このページを更新します。
        </p>
        <section className="card warning" aria-label="この記事で未確認の項目">
          <h3>この時点で未確認の項目</h3>
          <ul>
            <li>天井ゲーム数・ポイント天井などの狙い目</li>
            <li>設定変更時（リセット）の挙動と朝イチ恩恵</li>
            <li>設定判別・やめどき</li>
            <li>機械割が「未確認」の機種のスペック</li>
          </ul>
        </section>

        <h2>まとめ</h2>
        <p>
          12月7日・12月21日・1月12日の3つの導入日に、あわせて12機種のスロット新台が予定されています。機械割が掲載されている機種もありますが、天井や朝イチの狙い目はこれからです。解析が出たら、機種ごとに更新していきます。
        </p>

        <div className="product-box-grid product-box-grid--single">
          {foodOffer && (
            <AffiliateProductBox
              provider={foodOffer.provider}
              name={foodOffer.serviceName}
              note={foodOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={foodOffer.ctaLabel}
              ctaHref={foodOffer.href}
              disclosure={foodOffer.disclosure}
              offerType={foodOffer.offerType}
              serviceName={foodOffer.serviceName}
              imageSrc={foodOffer.imageSrc}
              placement="mid_article"
              affiliateProgram={foodOffer.programName}
            />
          )}
        </div>
        <StickyBottomBanner offer={vodOffer} />

        <h2>参考情報</h2>
        <p className="section-note">
          導入予定日と機種名・機械割は、以下の情報で確認しました（2026年11月20日時点）。
        </p>
        <ul>
          <li>
            <a
              href="https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2026-12"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              P-WORLD 2026年12月の導入機種（新台スケジュール）
            </a>
          </li>
          <li>
            <a
              href="https://www.p-world.co.jp/database/machine/introduce_calendar.cgi?year_month=2027-01"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              P-WORLD 2027年1月の導入機種（新台スケジュール）
            </a>
          </li>
          <li>
            <a href="https://x.com/ibentoan" target="_blank" rel="noopener noreferrer nofollow">
              スロットイベント案内アカウント（新台スケジュール予定の投稿）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
