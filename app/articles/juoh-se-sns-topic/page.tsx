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
  "スマスロ獣王、公式試打動画にサバチャン突入音への声も｜超サバのレインボー演出には称賛";
const description =
  "サミーが2026年9月18日に公開したスマスロ獣王の最速解説動画・デジタル小冊子をきっかけに、Xでは「サバチャン突入時のSEが気になる」という声と、超サバのレインボー演出を評価する声の両方が上がっています。10月5日の導入前に、現時点で分かっている内容と話題の反応を整理しました。";
const url = `${SITE_URL}/articles/juoh-se-sns-topic`;
const heroImage = "/images/articles/juoh-se-sns-topic.png";
const publishedAt = "2026-09-27";

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

export default function JuohSeSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/juoh-se-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロ獣王のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          サミーは2026年9月18日、2026年10月5日導入予定のスマスロ獣王について、公式YouTubeで約37分の最速解説動画とデジタル小冊子を公開しました。
          この続報をきっかけに、Xでは試打・解説映像を見た人の反応が広がっています。目立つのは、サバチャン突入時のSE（演出音）への違和感を口にする声と、超サバ時のレインボー演出を評価する声の両論です。
        </p>
        <p>
          <strong>
            演出の仕様変更や修正を示す公式発表は、本稿執筆時点で確認できていません。
          </strong>
          あくまで、公式の続報公開をきっかけに広がっているSNSの反応として紹介します。
        </p>

        <h2>9月18日、公式が最速解説動画とデジタル小冊子を公開</h2>
        <p>
          サミー公式は9月18日、獣王の最速解説動画を公開したことをXで案内しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/sammy_corp/status/2100842257414840529"
          authorName="サミー株式会社"
        />
        <p>
          同日にはデジタル小冊子の公開も案内されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/sammy_corp/status/2100781869033734250"
          authorName="サミー株式会社"
        />
        <p>
          解説動画では、サバ連（サバンナチャンス当選の約50％で移行）・超サバ（期待獲得枚数3000枚超、液晶がレインボーに光る演出で突入）・今作の新規要素であるキリンサバチャン（継続率を持ったループ型）・サバンナチャンス（純増約8.0枚／G、30ナビ超でサバチャンEX、フリーズで100ナビ）などが、実機映像つきで紹介されています。
        </p>

        <h2>Xの反応：「突入音が邪魔」という声も</h2>
        <p>
          公式投稿の直後から、試打・解説映像を見た人の反応が見られるようになりました。特に目立つのが、サバチャン突入時のSEについてのコメントです。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/sincyan_A/status/2101178515693732318"
          authorName="しんちやん"
        />
        <p className="section-note">
          この投稿は「試打動画のコメント欄で突入音への言及が多かった」という投稿者個人の体感であり、演出仕様そのものが変更される・問題視されているという確定情報ではありません。
          一方で、同じ解説動画の超サバ時のレインボー演出については「綺麗」と評価する声も見られ、演出面の反応は一つの方向に偏っているわけではないようです。
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
                  サミー公式が9月18日に最速解説動画・デジタル小冊子を公開したこと／導入予定が2026年10月5日（地域により異なる場合あり）であること／サバチャン突入音・超サバのレインボー演出についてXで賛否の反応が出ていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  演出仕様の変更・修正の有無、ホール導入後の実戦での体感、設定判別の詳細
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          導入前の公式解説動画にこれだけ反応が集まるのは、注目度の高さの裏返しだと思うワン🐶 演出音の好みは人それぞれだから、賛否が分かれるのは新台ではよくあることだね。
        </p>
        <p>
          10月5日の導入後、実際にホールで打った人の感想がどう変わっていくか気になるワン。みんなは試打動画のSE、どう感じた？
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
            獣王の朝イチ・リセット情報は、
            <Link href="/machines/juoh">スマスロ獣王の機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・記事を参考に作成しました。いずれも投稿者個人の見解であり、メーカー公式の演出変更発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/sammy_corp/status/2100842257414840529"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              サミー株式会社（最速解説動画の公開案内）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/sincyan_A/status/2101178515693732318"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              しんちやん（試打動画コメント欄への言及）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/187493"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：スマスロ獣王 最速解説動画まとめ（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
