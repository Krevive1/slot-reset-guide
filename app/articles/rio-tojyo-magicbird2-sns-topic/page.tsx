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
  "東城りおさん来店でファン対応整理券が配布終了｜マジックバード2に多くのファン";
const description =
  "麻雀プロの東城りおさんが大阪・マジックバード2に来店した際、ファン対応整理券が早い時間に配布終了したとの投稿がXで話題になっています。当日の投稿内容を整理しました。";
const url = `${SITE_URL}/articles/rio-tojyo-magicbird2-sns-topic`;
const heroImage = "/images/articles/rio-tojyo-magicbird2-sns-topic.png";
const publishedAt = "2026-09-24";

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

export default function RioTojyoMagicbird2SnsTopicPage() {
  const jalanOffer = getActiveAffiliateOffer("jalanNet");
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
          { name: title, href: "/articles/rio-tojyo-magicbird2-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="東城りおさんの来店が話題になったことのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          麻雀プロの東城りおさんが2026年9月20日、大阪のマジックバード2へ来店しました。
          その際、来店ファン向けに用意されていた「ファン対応整理券」が早い時間に配布終了したという投稿がXで話題になっています。
        </p>

        <h2>10時15分配布開始、10時24分には「打ち切り」の報告</h2>
        <p>
          東城さんは来店前日の9月19日、ファン対応の注意事項として「ファン対応時間は14:00〜16:00」「来店当日の10:15より2階スロットフロアのレストスペースにて、ファン対応整理券を配布」と案内していました。
        </p>
        <p>
          そして来店当日の9月20日午前10時24分、東城さん本人が「マジックバード2さんに到着しました〜　ファン対応整理券が先ほど打ち切りになったそうです🙇‍♀️💦　すみません🙇‍♀️🙇‍♀️」と投稿。
          案内していた配布開始時刻（10:15）から、この投稿までは10分ほどでした。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/RioTojyo/status/2101482666709418353"
          authorName="東城りお"
        />
        <p className="section-note">
          この投稿は20万件以上の表示を集めています。なお、ホールの入場整理券とファン対応整理券は別のものです。配布終了の具体的な経緯（配布数・希望者数など）は、本稿執筆時点で公式な発表を確認できていません。
        </p>

        <h2>来店後には感謝の投稿も</h2>
        <p>
          同日夜には、来店してくれたファンへの感謝を伝える投稿もありました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/RioTojyo/status/2101651329810931826"
          authorName="東城りお"
        />

        <h2>ワンチャンくんの見解</h2>
        <p>
          配布開始から10分ほどで整理券が無くなったという話を見て、東城りおさんの人気ぶりを感じたワン🐶
          ファン対応整理券自体はホールや演者ごとに運用が違うから、今回のケースがどこでも起きるとは言えないけど、朝一から並ぶ人がそれだけ多かったってことなんだろうね。
        </p>
        <p>
          みんなは、応援している演者さんの来店で「整理券が取れなかった」経験はあるかな？もしあれば教えてほしいワン。
        </p>

        <div className="product-box-grid product-box-grid--single">
          {jalanOffer && (
            <AffiliateProductBox
              provider={jalanOffer.provider}
              name={jalanOffer.serviceName}
              note={jalanOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={jalanOffer.ctaLabel}
              ctaHref={jalanOffer.href}
              disclosure={jalanOffer.disclosure}
              offerType={jalanOffer.offerType}
              serviceName={jalanOffer.serviceName}
              imageSrc={jalanOffer.imageSrc}
              placement="mid_article"
              affiliateProgram={jalanOffer.programName}
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
          本記事は、以下のXポストを参考に作成しました。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/RioTojyo/status/2101482666709418353"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              東城りお（マジックバード2到着・整理券打ち切りの報告）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/RioTojyo/status/2101651329810931826"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              東城りお（来店後の感謝の投稿）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
