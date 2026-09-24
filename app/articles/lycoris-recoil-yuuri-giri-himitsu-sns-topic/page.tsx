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
  "Lリコリス・リコイル「有利切りの秘密」を公式が公開｜条件は6つ、明確に分かるのは2つだけ";
const description =
  "サミー開発ボイスが「リコスロ3DAYS」企画の一環として、スマスロ リコリス・リコイルの有利区間リセット（通称：有利切り）の条件を公式に公開しました。条件は6パターンあるとされ、実戦上プレイヤーが明確に判別できるのは2パターンのみと紹介されています。公式投稿の内容を整理しました。";
const url = `${SITE_URL}/articles/lycoris-recoil-yuuri-giri-himitsu-sns-topic`;
const heroImage = "/images/articles/lycoris-recoil-yuuri-giri-himitsu-sns-topic.png";
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

export default function LycorisRecoilYuuriGiriHimitsuSnsTopicPage() {
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
          { name: title, href: "/articles/lycoris-recoil-yuuri-giri-himitsu-sns-topic" },
        ]}
      />

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
          2026年9月7日に導入されたスマスロ リコリス・リコイルについて、サミー開発ボイス【公式】が9月23日、いわゆる「有利切り」（有利区間リセット）の条件を公式に公開したという投稿がXで話題になっています。
          この記事では、公式投稿の内容と、解析系メディアが整理している条件の詳細を紹介します。
        </p>

        <h2>「リコスロ3DAYS」で公式が公開</h2>
        <p>
          サミー開発ボイス【公式】は9月22日〜24日にかけて「リコスロ3DAYS」という企画で、リコリス・リコイルに関する情報を連日発信していました。
          9月23日18時15分の投稿では「【リコスロの秘密大公開！】有利切りの秘密⁉」として、有利区間リセットの条件に関する情報を公開しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/DevelopVoice/status/2102688353724612884"
          authorName="サミー開発ボイス【公式】"
        />
        <p className="section-note">
          この投稿は本稿執筆時点で28万件以上の表示、1,000件超のリポストを集めています。
        </p>

        <h2>有利切りの条件は6パターン、明確に判別できるのは2つ</h2>
        <p>
          この投稿を受けて、解析系メディア各サイトが公式発表の内容を整理しています。それらの記事によると、有利区間リセットが発生し得るタイミングは次の6パターンとされています。
        </p>
        <ul>
          <li>設定変更時</li>
          <li>上位AT「リコリスラッシュW」中、1000pt到達後のラッシュ終了時の一部（G数パート滞在時）</li>
          <li>上位AT「リコリスラッシュW」中、1000pt到達後のボーナス終了時の一部（STパート滞在時）</li>
          <li>上位CZ「リコイルオブリコリス」成功時の一部（成功告知後、エピローグへ移行せずRUSH準備画面へ移行）</li>
          <li>幼少期特化「レジェンダリーリコリス」後のボーナス終了時の一部</li>
          <li>エンディング終了時</li>
        </ul>
        <p>
          このうち、実戦中にプレイヤーが明確に有利区間リセットを判別できるのは、上位CZ成功後にエピローグを経由せずRUSH準備画面へ移行した場合と、エンディング終了時の2パターンのみとされています。
          残り4パターンは、リセットが発生していても外見上は判別が難しい仕様とのことです。
        </p>
        <p className="section-note">
          上記は解析系メディアが公式投稿の内容を整理・要約したものです。当サイトでは、サミー開発ボイスの投稿そのものは確認できましたが、公式サイトの解説ページ本文までは本稿執筆時点で確認できていません。
          詳しい用語の定義（「有利切り」の指す範囲など）は、続報が入り次第、このページで補足します。
        </p>

        <h2>ワンチャンくんの見解</h2>
        <p>
          6パターンもあるのに、実戦で分かるのは2つだけって聞くと「じゃあ他の4つは指標にできないの？」って思っちゃうワン🐶
          でも逆に言えば、この2パターンに当たったら「ここでリセットされたんだな」と分かる場面があるってことだから、覚えておいて損はなさそうだね。
        </p>
        <p>
          リコリス・リコイルはこれで機種ページの情報とはまた別に、公式発信の話題が続いているワン。
          みんなは実戦中、この2パターンのどちらかに遭遇したことはあるかな？もし気づいたことがあれば教えてほしいワン。
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
            リコリス・リコイルの朝イチ・リセット情報は、
            <Link href="/machines/lycoris-recoil">スマスロ リコリス・リコイルの機種ページ</Link>
            で整理しています。同機種の別の話題は
            <Link href="/articles/lycoris-recoil-sns-topic">「間違い探し」が話題になった記事</Link>
            でも紹介しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下の公式Xポストと、その内容を報じた解析系メディアの記事を参考に作成しました。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/DevelopVoice/status/2102688353724612884"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              サミー開発ボイス【公式】（有利切りの秘密公開の投稿）
            </a>
          </li>
          <li>
            <a href="https://parlourfullslotl.com/archives/187878" target="_blank" rel="noopener noreferrer">
              パーラーフルスロットル（条件6パターンの整理）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
