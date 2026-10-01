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
  "「ハイエナきつくない？」Xで立ち回り議論｜朝一リセット狙い・設定狙いへ移る声も";
const description =
  "「ハイエナキツない？」という投稿をきっかけに、X上で実戦勢による立ち回りの議論が広がっています。エナが厳しくなったという声、情報格差が縮まったことが原因という分析、朝一リセット狙い・設定狙いへ軸足を移す声などを整理しました。";
const url = `${SITE_URL}/articles/haiena-kitsui-sns-topic`;
const heroImage = "/images/articles/haiena-kitsui-sns-topic.png";
const publishedAt = "2026-10-01";

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

export default function HaienaKitsuiSnsTopicPage() {
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
          { name: title, href: "/articles/haiena-kitsui-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ハイエナが厳しくなったというSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          「ハイエナキツない？」という投稿をきっかけに、X上で実戦勢による立ち回りの議論が広がっています。
          エナ（ハイエナ）が厳しくなったという嘆き、情報格差が縮まったことを原因として挙げる分析、朝一リセット狙いや設定狙いへ軸足を移す声など、さまざまな反応が集まっています。
        </p>

        <h2>9月27日、「ハイエナキツない？」投稿から議論が広がる</h2>
        <p>
          発端は、ちいかぶ専業さんによる「ハイエナキツない？エナ専はどうやって生活してるん みんな何打ってんの笑」という投稿でした。
          これに対し、複数の実戦勢が現在何を狙っているかを具体的に返信する形で議論が広がっていきました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/kegare_777/status/2104257186721595446"
          authorName="ちいかぶ専業"
        />

        <h2>「エナ厳しすぎて設定にシフト」という声も</h2>
        <p>
          リプ欄では、ハイエナの厳しさを理由に設定狙いへ軸足を移したという声も見られました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/setsu288372/status/2104487379600101695"
          authorName="せつ"
        />
        <p className="section-note">
          ハイエナから設定狙いへの移行は、あくまでこの投稿者個人の立ち回り判断です。「ハイエナが稼げなくなった」「専業全体が設定狙いへ移行している」という業界全体の確定事実として断定できるものではありません。
        </p>

        <h2>「情報格差が縮まったから」という分析も</h2>
        <p>
          ハイエナが厳しくなった原因について、SNSの発展によって無料〜大手サブスクの情報が一般客にも広まり、差がつきにくくなったという分析も寄せられています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/SLOT91727192/status/2104804056166170691"
          authorName="ヲ猿@SLOT"
        />
        <p className="section-note">
          この分析もあくまで投稿者個人の見立てであり、ハイエナの難易度が客観的な数値として悪化したことを示すデータではありません。
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
                  2026年9月27日の投稿をきっかけに、X上で複数の実戦勢がハイエナの難易度について議論していること／設定狙いへ軸足を移したという声や、情報格差の縮小を原因とする分析が出ていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  ハイエナの収益性が客観的に悪化したことを示すデータ、専業全体の傾向としての設定狙いへの移行
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          情報が広まるほど、みんな同じところを狙うようになって差がつきにくくなるのは自然な流れだと思うワン🐶
          だからこそ、朝一のリセット判別みたいに「自分の目で確認できる情報」を積み重ねることが大事なんだと思うよ。
        </p>
        <p>
          みんなは最近、ハイエナと朝一リセット狙い・設定狙い、どっちに比重を置いてる？
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
            朝一リセット・リセット恩恵の基礎については、
            <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            で整理しています。
          </p>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・まとめ記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/kegare_777/status/2104257186721595446"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ちいかぶ専業（「ハイエナキツない？」の投稿）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/188688"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：「ハイエナキツない？」専業から悲鳴…まとめ（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
