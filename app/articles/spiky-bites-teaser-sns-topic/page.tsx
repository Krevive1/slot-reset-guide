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

const slug = "spiky-bites-teaser-sns-topic";
const title =
  "スパイキーが新機種の特報映像を公開｜「BITES」「ついに魔王降臨」に“東京喰種2？”とSNSで予想が過熱";
const description =
  "スパイキー・クロスアルファブランド公式が2026年11月27日、機種名を伏せたパチスロ最新機種の特報映像を公開しました。映像には「BITES」「2年の時を越え正統進化」「ついに魔王降臨」などの文字が登場し、Xでは東京喰種の続編ではないかという予想が広がっています。公式で確認できることと、まだ発表されていないことを分けて整理します。";
const url = `${SITE_URL}/articles/${slug}`;
const heroImage = `/images/articles/${slug}.webp`;
const publishedAt = "2026-11-28";

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

export default function SpikyBitesTeaserSnsTopicPage() {
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
          { name: title, href: `/articles/${slug}` },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image unoptimized
            src={heroImage}
            alt="スパイキーの新機種特報映像を知らせるワンチャンくんのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月27日の正午、スパイキー・クロスアルファブランドの公式Xアカウントが「パチスロ最新機種 特報映像 解禁‼」として、短い映像を投稿しました。
          機種名は伏せられたままですが、投稿は約343万回表示されています（11月28日確認時点）。
        </p>
        <p>
          映像に「BITES（バイツ）」の文字が出てきたことから、Xでは「東京喰種の続編では？」という予想が一気に広がりました。
          この記事では、公式の映像で確認できることと、まだ発表されていないこと、Xで出ている予想を分けて整理します。
        </p>

        <h2>公式の特報映像で確認できること</h2>
        <p>映像では、次の文字が順番に表示されます（当サイトで映像を見て確認）。</p>
        <ol>
          <li>「特報」</li>
          <li>「すべてのプレイヤーが熱狂した」</li>
          <li>「BITES」のロゴと「バイツ」の読み</li>
          <li>「2年の時を越え 正統進化」</li>
          <li>「本物はスパイキーだけ」</li>
          <li>「ついに魔王降臨」</li>
          <li>「近日情報解禁」</li>
        </ol>
        <TweetEmbed
          tweetUrl="https://x.com/spikycrossalpha/status/2126149012940267544"
          authorName="【公式】スパイキー・クロスアルファブランド"
        />
        <p className="section-note">
          11月28日時点で、機種名・導入時期・スペック（天井・純増・設定差・朝一のリセット恩恵など）は公式から発表されていません。
          映像の最後は「近日情報解禁」となっているため、続報を待つ段階です。当サイトでは、発表前の内容を推測で補うことはしません。
        </p>

        <h2>なぜ「東京喰種2？」と言われているのか</h2>
        <p>
          「BITES（バイツ）」は、同じスパイキーの「L東京喰種」に登場する名前です。L東京喰種では、規定ポイント到達後のAT当選でBITESをストックする仕組みがあるとされています。
          L東京喰種は2025年2月導入なので、映像の「2年の時を越え 正統進化」という言葉と合わせて、続編ではないかと受け取る人が多く出ました。
        </p>
        <p>
          パチンコ・パチスロ情報アカウントや、解析サイト「ちょんぼりすた」の管理人も映像を引用し、「東京喰種2!?」と反応しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2126156914400924010"
          authorName="パチンコ・パチスロ.com"
        />
        <TweetEmbed
          tweetUrl="https://x.com/chonbo7771/status/2126150802549219357"
          authorName="ちょんぼ@ちょんぼりすた管理人"
        />
        <p className="section-note">
          「東京喰種の続編」というのは、映像の文字から出ているXでの予想です。公式は機種名を発表していないため、当サイトでは確定情報として扱いません。
        </p>

        <h2>「魔王降臨」をめぐって予想が割れている</h2>
        <p>
          一方で、「ついに魔王降臨」という言葉には「東京喰種に魔王っていたっけ？」と首をかしげる声もあります。
          「魔王金木」と呼んで続編を予想する声のほか、「魔王学院の不適合者のスマスロ化では」と別の作品を予想する声や、「魔王はキャラクターではなく、魔王のような台が来るという意味では」という読み方も出ています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/zvSSp7d9paRFWaa/status/2126289527279079460"
          authorName="Xユーザー"
        />
        <TweetEmbed
          tweetUrl="https://x.com/ao_AOBARA1213/status/2126208968473338101"
          authorName="Xユーザー"
        />
        <TweetEmbed
          tweetUrl="https://x.com/poosandesu00/status/2126500825292058828"
          authorName="Xユーザー"
        />
        <p className="section-note">
          埋め込みポストの内容は各投稿者個人の予想・感想であり、本記事の見解ではありません。
        </p>

        <h2>L東京喰種の「2nd ANNIVERSARY MODEL」とは別の話</h2>
        <p>
          スパイキーは11月25日に、L東京喰種の導入2周年記念パネル「2nd ANNIVERSARY MODEL」（2027年1月25日から登場予定）も発表しています。
          こちらはパネル違いのモデルで、今回の特報映像の新機種とは別の発表です。詳しくは
          <Link href="/articles/tokyo-ghoul-2nd-anniversary-panel-sns-topic">L東京喰種「2nd ANNIVERSARY MODEL」の記事</Link>
          で整理しています。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            「BITES」の文字が出てきて、喰種を打っていた人ほどドキッとした映像だったワン🐶 ただ、機種名もスペックもまだ発表されていないから、正体は「近日情報解禁」を待とうね。
          </span>
          <span className="wanchankun-comment-para">
            みんなは「魔王降臨」をどう読んだかな？ 喰種の続編だと思う人も、別の作品だと思う人も、予想を教えてほしい！
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
          現在ホールで稼働しているL東京喰種の朝イチ情報や話題は、次のページにまとめています。
        </p>
        <ul>
          <li><Link href="/machines/tokyo-ghoul">L東京喰種の機種ページ</Link></li>
          <li><Link href="/articles/tokyo-ghoul-2nd-anniversary-panel-sns-topic">L東京喰種「2nd ANNIVERSARY MODEL」発表の記事</Link></li>
          <li><Link href="/articles/tokyo-ghoul-arima-judgment-reigu-research">「有馬ジャッジメント失敗後は冷遇」説の調査記事</Link></li>
        </ul>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下の公式発表・Xポスト・紹介ページを参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a href="https://x.com/spikycrossalpha/status/2126149012940267544" target="_blank" rel="noopener noreferrer nofollow">
              【公式】スパイキー・クロスアルファブランド：パチスロ最新機種 特報映像（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://pachinkopachisro.com/archives/13122/" target="_blank" rel="noopener noreferrer nofollow">
              パチンコ・パチスロ.com：スパイキーが新機種特報映像を公開
            </a>
          </li>
          <li>
            <a href="https://x.com/pachicom777/status/2126156914400924010" target="_blank" rel="noopener noreferrer nofollow">
              パチンコ・パチスロ.com（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/chonbo7771/status/2126150802549219357" target="_blank" rel="noopener noreferrer nofollow">
              ちょんぼ@ちょんぼりすた管理人（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/zvSSp7d9paRFWaa/status/2126289527279079460" target="_blank" rel="noopener noreferrer nofollow">
              Xユーザーの投稿（「魔王金木」の声）
            </a>
          </li>
          <li>
            <a href="https://x.com/ao_AOBARA1213/status/2126208968473338101" target="_blank" rel="noopener noreferrer nofollow">
              Xユーザーの投稿（魔王学院の不適合者を予想する声）
            </a>
          </li>
          <li>
            <a href="https://x.com/poosandesu00/status/2126500825292058828" target="_blank" rel="noopener noreferrer nofollow">
              Xユーザーの投稿（「魔王降臨」の読み方）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
