import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import TweetEmbed from "@/components/site/TweetEmbed";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import StickyBottomBanner from "@/components/site/StickyBottomBanner";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "Lリコリス・リコイルで「間違い探し」が話題｜別機種パーツらしき個体・高稼働の声も";
const description =
  "2026年9月7日導入のスマスロ リコリス・リコイルで、他機種のパーツが付いているように見える個体の投稿がXで拡散し「間違い探し」として話題になっています。話題になっている投稿と、現時点で確認できていることを整理しました。";
const url = `${SITE_URL}/articles/lycoris-recoil-sns-topic`;
const heroImage = "/images/articles/lycoris-recoil-sns-topic.png";
const publishedAt = "2026-09-15";

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

export default function LycorisRecoilSnsTopicPage() {
  const bookOffer = getActiveAffiliateOffer("bookwalkerLycorisRecoil");
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/lycoris-recoil-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロ リコリス・リコイルのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年9月7日に導入されたスマスロ リコリス・リコイルについて、Xで「間違い探し」と呼ばれる投稿が話題になっています。
          サイドパネルやランプなど、他機種のパーツが付いているように見える個体が複数報告され、大きく拡散しました。
          あわせて、導入直後から注目を集めている様子もうかがえます。この記事では、話題になっている投稿と、現時点で確認できていること・できていないことを整理します。
        </p>
        <p>
          <strong>
            メーカーが製造・組み立てミスを認めたという情報は、本稿執筆時点で確認できていません。
          </strong>
          あくまでXで「そう見える個体が報告されている」という話題として紹介します。
        </p>

        <h2>話題①：北斗転生2の仁王像らしきサイドパネル</h2>
        <p>
          パチスロ関連の情報発信で知られる「わしょう@ぱっすろたいむ」さんが9月12日に投稿したポストが大きく拡散しました。
          サイドパネルに「北斗の拳 転生の章2」の仁王像らしきパーツが付いているように見える個体が報告されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/washo613/status/2098608256734334979"
          authorName="わしょう@ぱっすろたいむ"
        />

        <h2>話題②：東京卍RUSHランプらしきパーツ</h2>
        <p>
          同じく「わしょう@ぱっすろたいむ」さんが翌9月13日に投稿した第2弾です。今度は「東京卍リベンジャーズ」シリーズのランプらしきパーツが付いた個体が報告されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/washo613/status/2098992514397278678"
          authorName="わしょう@ぱっすろたいむ"
        />
        <p className="section-note">
          いずれも「そう見える」という投稿であり、メーカーへの取材や公式コメントを伴うものではありません。断定はせず、話題として紹介しています。
        </p>

        <h2>実戦でも大きな反応</h2>
        <p>
          「間違い探し」以外にも、実戦中の様子を投稿したポストが話題になっています。れおべるさんが9月13日に投稿したプレイ動画は、実戦中のキャラクターボイスの台詞が反応を呼び、大きく拡散しました。
        </p>
        <TweetEmbed tweetUrl="https://x.com/leovlrt/status/2098803947389817244" authorName="れおべる" />

        <h2>高稼働を伝える声も</h2>
        <p>
          間違い探し投稿とあわせて、ホールの公式アカウントが「早埋まり機種」としてリコリス・リコイルを挙げる投稿も複数見られます。
          全国的な稼働状況を裏付ける統計情報ではありませんが、導入直後から高い注目を集めている様子がうかがえます。
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
                <td>他機種のパーツらしきものが付いた個体の投稿が複数存在し、Xで拡散していること</td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>
                  メーカーによる原因の公式説明、該当する個体の台数、遊技性能（当選率など）への影響
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          今回はゲーム性の解析情報ではありませんが、導入直後の注目度の高さがうかがえる話題として紹介しました。
          原因については、メーカーからの公式な情報が出るまで断定しません。続報が入り次第、このページを更新します。
        </p>

        <div className="product-box-grid product-box-grid--single">
            {bookOffer && (
              <AffiliateProductBox
                provider={bookOffer.provider}
                name={bookOffer.serviceName}
                note={bookOffer.description ?? "詳細はリンク先でご確認ください。"}
                ctaLabel={bookOffer.ctaLabel}
                ctaHref={bookOffer.href}
                disclosure={bookOffer.disclosure}
                offerType={bookOffer.offerType}
                serviceName={bookOffer.serviceName}
                imageSrc={bookOffer.imageSrc}
                placement="mid_article"
                affiliateProgram={bookOffer.programName}
              />
            )}
        </div>
        <StickyBottomBanner offer={vodOffer} />

        <div className="article-link-box">
          <p>
            リコリス・リコイルの朝イチ・リセット情報は、
            <Link href="/machines/lycoris-recoil">スマスロ リコリス・リコイルの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポストを参考に作成しました。いずれも投稿者個人の見解であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/washo613/status/2098608256734334979"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              わしょう@ぱっすろたいむ（北斗転生2の仁王像らしきサイドパネル）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/washo613/status/2098992514397278678"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              わしょう@ぱっすろたいむ（東京卍RUSHランプらしきパーツ）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/leovlrt/status/2098803947389817244"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              れおべる（実戦プレイ動画）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
