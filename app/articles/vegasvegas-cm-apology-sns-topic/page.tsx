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
  "「ベガスベガス！」連呼でXトレンド入り｜ボクシング配信CMに視聴者困惑、企業が異例の謝罪";
const description =
  "2026年9月27日のボクシング世界戦Prime Video配信で、パチンコホール「ベガスベガス」のCMがラウンド間に何度も流れ、Xで「ベガスベガス」がトレンド入りしました。視聴者の反応と、企業側の謝罪までの経緯を整理しています。";
const url = `${SITE_URL}/articles/vegasvegas-cm-apology-sns-topic`;
const heroImage = "/images/articles/vegasvegas-cm-apology-sns-topic.png";
const publishedAt = "2026-09-28";

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

export default function VegasvegasCmApologySnsTopicPage() {
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
          { name: title, href: "/articles/vegasvegas-cm-apology-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ボクシング配信CM連呼騒動のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年9月27日、トヨタアリーナ東京で行われたWBC世界バンタム級タイトルマッチ（井上拓真vs那須川天心）が、Prime Videoでライブ配信されました。
          試合の合間に流れたパチンコホール「ベガスベガス」のCMが何度も繰り返し流れたことで視聴者の間で話題になり、「ベガスベガス」がX（旧Twitter）の日本のトレンド入りするという展開になりました。
        </p>
        <p>
          パチスロ業界の枠を超えて一般ニュースメディアまで取り上げる規模の話題になったため、今回は経緯と反応を整理します。
        </p>

        <h2>ラウンド間に何度も流れたCM、視聴者から「もうええて」の声</h2>
        <p>
          試合は井上拓真が那須川天心に判定勝ちし、王座防衛に成功する結果となりました。この一戦は「井上拓真」「拓真vs天心」といったワードとともに大きな注目を集めていましたが、それと並んでXのトレンドに入ったのが「ベガスベガス」でした。
        </p>
        <p>
          「ベガスベガス」は那須川天心がブランドアンバサダーを務めるパチンコホールで、CMでは天心がミットを打つ映像とともに「たぎる力が世界を動かす！ ベガス、ベガス」というフレーズが流れます。
          日刊スポーツによると、わずか1分ほどのラウンド間インターバルにこのCMがほかのCMを挟まずに連続で流れたため、視聴者の間で「刷り込みがえぐい」といった声が広がりました。
        </p>
        <p>
          Xでは「さすがにしつこい」「もうええて…」「ベガスベガス、あの連呼は嫌いになるわw」といった声のほか、「ベガスベガスが面白すぎた」「すごい広告効果」「これは戦略的には正解」など、ネタとして楽しむ反応も見られました。
          試合の採点そのものに注目していた視聴者からは「ベガスはええから採点を！」という声も上がっています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/J3D_D2/status/2104205561525133735"
          authorName="J3D"
        />

        <h2>企業側が「誠に申し訳ございませんでした」と異例の謝罪</h2>
        <p>
          こうしたSNS上の反応を受けてか、ベガスベガスを運営する企業の公式Xアカウント（@VegasVegas_Corp）は、試合当日中に次のような投稿を行いました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/VegasVegas_Corp/status/2104170476130243023"
          authorName="VEGAS VEGAS CORPORATE"
        />
        <p>
          同社はパチンコチェーン「ベガスベガス」の運営などを手がける、東京に本社を置く企業です。
        </p>
        <p className="section-note">
          CMの放映回数・編成については配信側（Prime Video／広告主）の判断によるもので、狙って連呼させたのか、結果的にそう見えただけなのかは本記事執筆時点で確認できていません。
          あくまで、SNS上の反応と企業側の謝罪という事実を整理したものであり、企業を批判する意図の記事ではありません。
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
                  2026年9月27日のボクシング世界戦Prime Video配信でベガスベガスのCMがラウンド間に繰り返し流れたこと／Xで「ベガスベガス」がトレンド入りしたこと／企業側が公式Xで謝罪の投稿を行ったこと
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  CM編成・放映回数の決定経緯の詳細、今後のCM出稿方針への影響
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          企業側が「こんなはずじゃなかったんです」と正直に謝罪しているのが、なんだか人間味があっていいなと思うワン🐶 SNSの反応を見ると、怒っているというより「面白すぎた」「頭から離れない」というネタ反応の方が多い印象だね。
        </p>
        <p>
          結果的にはXトレンド入りするくらい認知が広がったわけだから、広告としては強烈なインパクトを残した一件だったんじゃないかな。みんなはこのCM、見た（聞いた）ことある？
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
          本記事は、以下のXポスト・報道記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/VegasVegas_Corp/status/2104170476130243023"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              VEGAS VEGAS CORPORATE（公式アカウントの謝罪投稿）
            </a>
          </li>
          <li>
            <a
              href="https://www.nikkansports.com/battle/boxing/news/202609270001934.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              日刊スポーツ：配信で繰り返される謎のフレーズに視聴者困惑
            </a>
          </li>
          <li>
            <a
              href="https://encount.press/archives/1072746/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ENCOUNT：拓真―天心戦で連呼された「ベガスベガス！」企業は異例の謝罪
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
