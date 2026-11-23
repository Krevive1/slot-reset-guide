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
import WanchankunComment from "@/components/machine/WanchankunComment";

const title =
  "水樹あやさんの7図柄クイズ【続報】公式アカウントが「あれは…、プリン？」と投稿｜本人は「人の炎上したやつで遊ぶんじゃねぇ」と返信";
const description =
  "水樹あやさんの7図柄当てクイズを巡る話題の続報です。11月22日、公式アカウントが「あれは…、プリン？」と投稿し、本人が引用して返信しました。何が投稿され、SNSでどう受け止められたかを中立的に整理します。";
const url = `${SITE_URL}/articles/mizuki-aya-7zugara-quiz-followup-sns-topic`;
const heroImage = "/images/articles/mizuki-aya-7zugara-quiz-followup-sns-topic.webp";
const publishedAt = "2026-11-23";

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

export default function MizukiAya7zugaraQuizFollowupSnsTopicPage() {
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
          { name: title, href: "/articles/mizuki-aya-7zugara-quiz-followup-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image unoptimized
            src={heroImage}
            alt="7図柄クイズの続報として公式アカウントのプリンの投稿が話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="article-link-box">
          <p>
            <strong>前回の記事：</strong>
            <Link href="/articles/mizuki-aya-7zugara-quiz-sns-topic">
              水樹あやさんの「7図柄クイズ」がXで話題｜本人は「モニターが遠くて見えなかった」と説明
            </Link>
          </p>
          <p>
            11月20日放送のABEMA「パーラーカチ盛り」の7図柄当てクイズで水樹あやさんが不正解となった場面が話題になり、本人と共演の寺井一択さんが「モニターが遠くて見えなかった」と説明した、という内容です。批判と擁護の声が両方あったことも整理しています。
          </p>
        </div>

        <p>
          前回の記事で取り上げた7図柄クイズの話題に、続報がありました。
          2026年11月22日、水樹あやさんの公式アカウントが「あれは…、プリン？」とだけ投稿し、約28万回表示されています（11月23日確認時点）。
          本人もこの投稿を引用して返信しました。
        </p>
        <p>
          この記事では、何が投稿されたのか、SNSの反応を、特定の誰かを評価・断定しない形で整理します。
        </p>

        <h2>公式アカウントの投稿</h2>
        <p>
          投稿には、番組の場面とみられる画像と、富士山の写真が並んで添付されています。
          「プリン」が何を指すのかは、投稿の中では説明されていません。本記事でも意図は断定せず、「公式アカウントが冗談めいた一言を投稿した」という事実の範囲にとどめます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/ayamizuki_PR/status/2124298674679460175"
          authorName="水樹あやofficial"
        />

        <h2>本人の返信</h2>
        <p>
          水樹あやさん本人は、この投稿を引用して「おいこら人の炎上したやつで遊ぶんじゃねぇ」と返信し、続けて「富士山が綺麗に見えて良いことありそうな朝」と書いています。
          この投稿も約28万回表示されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mizukiaya777/status/2124304244807463289"
          authorName="水樹あや"
        />

        <h2>SNSの反応</h2>
        <p>
          公式アカウントの投稿には、冗談として受け止めるものや、前回の経緯に触れるものなど、さまざまな反応が付いています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/ka2uu8/status/2124306644813377896"
          authorName="もぎふる"
        />
        <TweetEmbed
          tweetUrl="https://x.com/new0927mine/status/2124318838410055879"
          authorName="たけぴー"
        />
        <p className="section-note">
          上記はXの投稿に基づく整理です。今回の投稿によって一連の話題が決着したと評価するものではなく、受け止め方は人それぞれです。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            公式アカウントの一言と、本人のツッコミで、場の空気が少しやわらいだ感じがするね🐶
            ただ、冗談の受け止め方は人それぞれだワン。
            前回の話題も含めて、誰かを決めつけずに見ていきたいところだよ。
          </span>
          <span className="wanchankun-comment-para">
            みんなは、この「プリン？」の一言、どう受け止めたかな？
          </span>
        </WanchankunComment>
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
          本記事は、以下のXポストを参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/ayamizuki_PR/status/2124298674679460175"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              水樹あやofficial（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/mizukiaya777/status/2124304244807463289"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              水樹あや（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ka2uu8/status/2124306644813377896"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              もぎふる（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/new0927mine/status/2124318838410055879"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              たけぴー（Xの投稿）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
