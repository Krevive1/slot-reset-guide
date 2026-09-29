import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import StickyBottomBanner from "@/components/site/StickyBottomBanner";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "L彼女、お借りします、REGULAR BONUS中の「水着キャラ」出現に公式が言及｜1〜5人目のどこで出るかがポイント";
const description =
  "パチスロ『彼女、お借りします』のSANKYO公式「開発こぼれ話」で、REGULAR BONUS中に水着キャラが出現するタイミングが重要というヒントと、2〜5人目全てが水着キャラになるスペシャルパターンの存在が明かされました。公式が公開した内容を整理しました。";
const url = `${SITE_URL}/articles/kanojo-okarishimasu-reg-mizugi-pattern`;
const heroImage = "/images/articles/kanojo-okarishimasu-reg-mizugi-pattern.png";
const publishedAt = "2026-09-29";

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

export default function KanojoOkarishimasuRegMizugiPatternPage() {
  const foodOffer = getActiveAffiliateOffer("amazonFoodDrink");
  const vodOffer = getActiveAffiliateOffer("abemaPremium");
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs
        items={[
          { name: "トップ", href: "/" },
          { name: title, href: "/articles/kanojo-okarishimasu-reg-mizugi-pattern" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="彼女、お借りしますのREGULAR BONUS中の水着キャラ出現パターンのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          パチスロ『Lパチスロ 彼女、お借りします』の公式情報発信「SANKYO『開発こぼれ話』」で、REGULAR BONUS（レギュラーボーナス）中に登場する「水着キャラ」の出現タイミングについての新しいヒントが公開されました。
        </p>
        <p>この記事では、公式が明かした内容をそのまま整理してお伝えします。</p>

        <h2>公式が明かした内容：水着キャラの出現タイミングがポイント</h2>
        <p>
          2026年9月28日、SANKYO「開発こぼれ話」公式Xアカウント（
          <a href="https://x.com/OFFICIAL_KOBORE" target="_blank" rel="noopener noreferrer nofollow">
            @OFFICIAL_KOBORE
          </a>
          ）が、「REGULAR BONUS中の演出③」と題した記事を公開しました。内容は次の通りです。
        </p>
        <ul>
          <li>REGULAR BONUS消化中は、ベル2回ごとにキャラが切り替わる</li>
          <li>水着キャラが出現するタイミングでは「何かが濃厚」という示唆表現あり</li>
          <li>「1〜5人目」のどこで水着キャラが出現するかが重要ポイントとされている</li>
          <li>「2〜5人目が全て水着キャラ」となるスペシャルパターンも存在するとのこと</li>
        </ul>
        <p className="section-note">
          これはSANKYO公式が発信した内容ですが、「何が濃厚なのか」（設定なのか、他の恩恵なのか）までは公式記事内で明言されていません。断定的な意味づけをせず、公式の表現をそのままお伝えしています。
        </p>

        <h2>現時点で確認できていること・まだ確認できていないこと</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>区分</th>
                <th>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>確認できていること</td>
                <td>
                  REGULAR BONUS中、ベル2回ごとにキャラが切り替わること／水着キャラの出現タイミング（1〜5人目のどこか）が何らかのポイントとされていること／「2〜5人目全て水着キャラ」というスペシャルパターンが存在すること（いずれもSANKYO公式「開発こぼれ話」による発信）
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  水着キャラ出現が具体的に何を示唆するのか（設定差の有無を含む）／出現パターンごとの発生率や期待度の数値
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          公式から直接、演出のヒントが小出しに公開されるのは実戦する側としてもありがたいワン🐶
          ただ「何かが濃厚」という部分がまだぼかされているから、設定差なのか他の恩恵なのか、現時点では決めつけない方がよさそうだね。
        </p>
        <p>
          SANKYO「開発こぼれ話」では日替わりで新しい小ネタが公開されているみたいだから、続報が出たらこのページも更新するワン。実戦で水着キャラの出現タイミングを意識してみた方は、ぜひ体感を教えてください。
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

        <div className="article-link-box">
          <p>
            彼女、お借りしますの朝一・リセット恩恵情報は、
            <Link href="/machines/kanojo-okarishimasu">彼女、お借りしますの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li>
              <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            </li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のSANKYO公式情報を参考に作成しました。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/OFFICIAL_KOBORE/status/2104420839034630492"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              SANKYO「開発こぼれ話」公式X（REGULAR BONUS中の演出③の告知）
            </a>
          </li>
          <li>
            <a
              href="https://secret-story.sankyo-fever.jp/article/szf_34"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              SANKYO「開発こぼれ話」記事本文
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
