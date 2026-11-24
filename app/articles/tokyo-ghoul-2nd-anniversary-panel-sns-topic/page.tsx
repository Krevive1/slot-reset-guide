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
  "L東京喰種「2nd ANNIVERSARY MODEL」発表｜2027年1月25日から登場予定、パネル違いにSNSで賛否";
const description =
  "スパイキー・クロスアルファブランド公式が、L東京喰種の導入2周年記念パネル「2nd ANNIVERSARY MODEL」を発表しました。2027年1月25日から全国のホールに登場予定です。新機種ではなくパネル違いであることと、Xで出た賛否の声を中立的に整理します。";
const url = `${SITE_URL}/articles/tokyo-ghoul-2nd-anniversary-panel-sns-topic`;
const heroImage = "/images/articles/tokyo-ghoul-2nd-anniversary-panel-sns-topic.webp";
const publishedAt = "2026-11-25";

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

export default function TokyoGhoul2ndAnniversaryPanelSnsTopicPage() {
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
          { name: title, href: "/articles/tokyo-ghoul-2nd-anniversary-panel-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image unoptimized
            src={heroImage}
            alt="東京喰種の2周年パネル発表を知らせるワンチャンくんのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月24日、スパイキー・クロスアルファブランドの公式アカウントが、「L東京喰種」の導入2周年を記念したパネル「2nd ANNIVERSARY MODEL」の発売が決定したとXに投稿しました。
          2027年1月25日（月）から全国のホールに登場する予定で、投稿は約65万回表示されています（11月25日確認時点）。
        </p>
        <p>
          この記事では、公式が発表した内容と、Xで出ている賛否の声を、確認できた範囲で整理します。
          なお、これは新機種の発表ではなく、「L東京喰種」のパネル違いの発表です。
        </p>

        <h2>公式の発表内容</h2>
        <p>
          公式の投稿によると、2027年2月に導入2周年を迎えるL東京喰種を祝うために、特別にデザインされたパネルです。
          告知画像では、金色の筐体の下パネルに、大きな「2」と「Anniversary」の文字が入っています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/spikycrossalpha/status/2125061866569318791"
          authorName="【公式】スパイキー・クロスアルファブランド"
        />
        <p className="section-note">
          販売の形（パネルのみか、筐体ごとか）や価格などは、今回の告知では触れられていません。導入日は予定のため、変更される可能性があります。
        </p>

        <h2>「パネル違いが多い」という声</h2>
        <p>
          L東京喰種には、これまでも複数のパネル違いが登場しています。
          Xでは、初代・董香・有馬・金木・什造に今回の2周年を加えて「6種類目」と数える声があり、「何個出すのか」といった反応が目立ちました。
          引用元のパーラーフルスロットルの記事では、11月から鈴屋什造MODELの納品が始まったとされており、その直後の発表であることも話題になっています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/ieslo_asuna/status/2125064088434970921"
          authorName="アスナの嫁"
        />
        <TweetEmbed
          tweetUrl="https://x.com/alien_tentyo/status/2125074109751279824"
          authorName="エイリアン店長👽🌻　サンフラワー🌻"
        />
        <p>
          このほか、「リゼやエトのパネルが出ないのはなぜか」と、別のキャラクターのパネルを望む声もありました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/shima_pachi/status/2125161279400849458"
          authorName="島　孫六"
        />

        <h2>「2」の文字が話題に</h2>
        <p>
          下パネルに大きく入った「2」の文字から、「東京喰種2が出たのかと思った」という反応も多く見られました。
          今回の発表は2周年を記念したパネルであり、続編の機種が発表されたわけではありません。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mii_on/status/2125078595429421313"
          authorName="みょん"
        />

        <h2>歓迎する声も</h2>
        <p>
          一方で、パネルのデザインを評価する声や、新しいパネルの導入を歓迎する声もありました。
          記事執筆時点で確認できた範囲では、賛否が入り混じっている状況です。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/honopisuro/status/2125093227342799248"
          authorName="スロじゃこ🍟🐟🍻(ちりめんじゃこ太)"
        />
        <p className="section-note">
          上記はXの投稿と、それを紹介する記事に基づく整理です。埋め込みポストの内容は各投稿者個人の感想であり、本記事の見解ではありません。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            東京喰種は、パネルの種類がどんどん増えているんだね🐶
            「2」の文字が大きいけれど、新しい機種ではなくパネル違いの発表だから、間違えないように気をつけてほしいワン。
          </span>
          <span className="wanchankun-comment-para">
            みんなは、東京喰種のパネル違いについてどう思うかな？ 好きなパネルや、出してほしいパネルを、ぜひ教えてほしいワン！
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

        <h2>L東京喰種の関連ページ</h2>
        <p className="section-note">
          L東京喰種の朝イチ情報や関連記事は、次のページにまとめています。
        </p>
        <ul>
          <li><Link href="/machines/tokyo-ghoul">L東京喰種（スマスロ東京グール）の機種ページ</Link></li>
          <li><Link href="/articles/tokyo-ghoul-arima-judgment-reigu-research">「有馬ジャッジメント失敗後は約2000G冷遇」説を調査</Link></li>
          <li><Link href="/articles/tokyo-ghoul-trophy-misugoshi">実践記録：トロフィーを確認せず5万円使い切った7月7日</Link></li>
        </ul>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・紹介記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/spikycrossalpha/status/2125061866569318791"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              スパイキー・クロスアルファブランド公式（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ieslo_asuna/status/2125064088434970921"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              アスナの嫁（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/alien_tentyo/status/2125074109751279824"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              エイリアン店長（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/shima_pachi/status/2125161279400849458"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              島　孫六（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/mii_on/status/2125078595429421313"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              みょん（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/honopisuro/status/2125093227342799248"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              スロじゃこ（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/202154"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：L東京喰種の2周年モデル発売へ
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
