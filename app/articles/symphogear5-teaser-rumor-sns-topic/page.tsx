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
  "シンフォギア5の超先行映像が話題｜約1/399の噂に賛否、公式で分かったことと噂を整理";
const description =
  "SANKYOが2026年9月30日に「戦姫絶唱シンフォギア」シリーズ最新作の超先行映像を公開し、「5W」の検定通過も伝えられました。10月にはXで約1/399・デカヘソなどの噂に賛否が出ています。公式で分かったことと噂の段階のものを分けて整理しました。";
const url = `${SITE_URL}/articles/symphogear5-teaser-rumor-sns-topic`;
const heroImage = "/images/machines/senki-zesshou-symphogear.jpg";
const publishedAt = "2026-10-03";

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

export default function Symphogear5TeaserRumorSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/symphogear5-teaser-rumor-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="パチンコ戦姫絶唱シンフォギア最新作を巡る話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          SANKYOは2026年9月30日、パチンコ「戦姫絶唱シンフォギア」シリーズ最新作の超先行映像を公開しました。「10年の時を経て、新たな歌が響き始める」というコピーとともに、「スマパチ」「コンプリート機能搭載機」の表記が確認できます。
          同日には「eフィーバー戦姫絶唱シンフォギア5W」（ジェイビー名義）の検定通過も伝えられました。
        </p>
        <p>
          <strong>
            スペックや導入日について、メーカーの公式発表は本稿執筆時点でありません。
          </strong>
          10月に入ってからXでは「約1/399」「デカヘソ」などの噂が出て賛否を呼んでいます。公式で分かったことと、噂の段階のものを分けて整理します。
        </p>

        <h2>公式で分かったこと：9月30日に超先行映像、「スマパチ」表記</h2>
        <p>
          映像の公開を伝える投稿は16万表示を超えました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/p_curation/status/2105138458323034516"
          authorName="ぱちんこキュレーション"
        />
        <p className="section-note">
          上記は映像公開を伝えるまとめ系アカウントの投稿です。映像で示されているのはコピーと「スマパチ」「コンプリート機能搭載機」の表記までで、スペック・導入日は明かされていないと各メディアは伝えています。検定通過した「5W」が今回の映像の機種と同一かどうかについても、公式の明言は確認できていません。
        </p>

        <h2>噂の段階：「約1/399」「デカヘソ」にX上で賛否</h2>
        <p>
          10月1日〜3日にかけて、まとめサイト等から「図柄揃いが約1/399」「デカヘソ搭載」「コテスタ」などの噂が出回り、これに反応する投稿が増えています。
          前作シンフォギア4が1/399だったことを引き合いに、不安視する声が目立ちます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/jaajama0/status/2105668926290170009"
          authorName="ぢゃま"
        />
        <TweetEmbed
          tweetUrl="https://x.com/Gold_WolfGARO_/status/2106115184838496429"
          authorName="最強黄金騎士ぱちんかす"
        />
        <p className="section-note">
          これらの数値はメーカー発表ではなく、あくまで噂の段階です。確定情報として受け取らないようご注意ください。
        </p>

        <h2>「デカヘソなら全然アリ」と期待する声も</h2>
        <p>
          一方で、デカヘソとコテスタでよく回るなら前向きに受け止める、という声もあります。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/yjn_9182/status/2105859408819569041"
          authorName="あすきらTRANCE ver.8.7"
        />
        <p className="section-note">
          こちらも投稿者個人の見解です。実際のスペックが発表されるまで、評価は大きく変わる可能性があります。
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
                  2026年9月30日にSANKYOが超先行映像を公開したこと／映像に「スマパチ」「コンプリート機能搭載機」の表記があること／同日「eフィーバー戦姫絶唱シンフォギア5W」（ジェイビー名義）が検定通過と伝えられていること／約1/399などの噂にXで賛否が出ていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  スペック（初当り確率など）、導入日、「5W」が今回の映像機種と同一かどうか、デカヘソ・コテスタ等の仕様が事実かどうか
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          10年ぶりの新作だから、みんなの期待も不安も大きいんだワン🐶 でも、今出ている数字は噂の段階だから、正式なスペックが出るまでは決めつけずに待つのがよさそうだよ。
        </p>
        <p>
          みんなは、シンフォギア5にどんなスペックを期待する？
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
          本記事は、以下のXポスト・記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。噂の数値はメーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/p_curation/status/2105138458323034516"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ぱちんこキュレーション（超先行映像の公開を伝える投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/jaajama0/status/2105668926290170009"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ぢゃま（噂のスペックへの反応）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Gold_WolfGARO_/status/2106115184838496429"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              最強黄金騎士ぱちんかす（噂のスペックへの反応）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/yjn_9182/status/2105859408819569041"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              あすきらTRANCE ver.8.7（期待の声）
            </a>
          </li>
          <li>
            <a
              href="https://pachinko.nanj-antenna.net/20260930-1127904/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・スロット情報まとめアンテナ：シンフォギア最新作の超先行映像（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
