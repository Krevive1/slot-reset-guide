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
  "喰霊-零-Reの「準備中のメダル減り」にXで賛否｜「昔のART機はこんなもの」の擁護と「REGがマイナス」の不満";
const description =
  "2026年8月17日導入の「Lパチスロ 喰霊‐零‐Re」で、ART準備中にメダルが減る点についてXで賛否が広がっています。「むかしのART機はほとんどそう」と擁護する投稿は約29万表示。「準備中の減りは少し異常」「REGがマイナスボーナス」という不満の声も含め、投稿内容を整理しました。";
const url = `${SITE_URL}/articles/garei-zero-re-junbichu-sns-topic`;
const heroImage = "/images/articles/garei-zero-re-junbichu-sns-topic.png";
const publishedAt = "2026-10-07";

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

export default function GareiZeroReJunbichuSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/garei-zero-re-junbichu-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="喰霊-零-Reの準備中のメダルの減りを巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年8月17日に導入された「Lパチスロ 喰霊‐零‐Re」を巡り、ART準備中のメダルの減りについてXで賛否が広がっています。10月4日夜には、「準備中に減った分が戻らない」といった不満が出ていることに触れつつ、「むかしのART機はほとんどそう」と擁護する投稿が約29万表示を集めました。
        </p>
        <p>
          <strong>
            実際の減少枚数や仕様の評価は人によって分かれており、メーカーの見解も本稿執筆時点で確認できていません。
          </strong>
          あくまでX上の反応として、批判と擁護の両方を整理します。
        </p>

        <h2>「準備中に減った分が戻らない」への不満と、それを擁護する声</h2>
        <p>
          10月4日夜、すば（@mcds8762）さんは「喰霊のスロットが酷評されているらしい」として、理由に「遅すぎる」「準備中に減った分が戻らない」が挙がっていると紹介。そのうえで「むかしのART機なんてほとんどそう」「あの台はかなり面白い方だと思う」と投稿しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mcds8762/status/2106750033223913671"
          authorName="すば"
        />

        <h2>批判の声：「準備中の減りは少し異常」「REGがマイナスボーナス」</h2>
        <p>
          一方、準備中の減りに不満を示す投稿もあります。10月5日朝のほろよいヘルプマンさんは、「準備中の減りは少し異常かなって思う」「50枚位で済めばまだ良いが、最高100枚持っていくのでREGがマイナスボーナスなのが辛い」と投稿しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/horoyoi_helpman/status/2106862391447478481"
          authorName="ほろよいヘルプマン"
        />
        <p>
          10月4日夜には、購いのsky（@curucify）さんが「準備中が初代以上に長い気がする」「ボーナス枚数が少ないうえ、レギュラー後も枚数が減るだけ」といった趣旨の投稿をしており、こちらは約3.4万表示でした。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/curucify/status/2106752948202266789"
          authorName="購いのsky"
        />
        <p className="section-note">
          「50〜100枚」「100枚超」といった減少枚数は、各投稿者の体感や実戦報告であり、機種の仕様として確定した数値ではありません。台や状況により差があるとみられます。
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
                  10月4日以降、喰霊-零-ReのART準備中のメダルの減りについて、Xで不満と擁護の両方の投稿が出ていること／最も反応の大きい投稿は約29万表示であること／対象機種は2026年8月17日に導入されたオーイズミの「Lパチスロ 喰霊‐零‐Re」であること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  準備中に減る枚数の実際の平均、機種仕様としての公式な見解、メーカーの対応、導入後の稼働への影響
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          準備中にメダルが減るのは、昔のART機を打ってきた人には見慣れた感覚かもしれないけど、最近の機種に慣れているとびっくりするワン🐶 ただ、減る枚数は人によって体感が違うみたいだから、一つの投稿だけで決めつけない方がよさそうだね。
        </p>
        <p>
          みんなは、喰霊の準備中の減り、どう感じる？昔のART機はこんなものだった？
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
            喰霊-零-Reの天井・やめどきは、
            <Link href="/machines/garei-zero-re">Lパチスロ 喰霊‐零‐Reの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>


        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・記事を参考に作成しました。埋め込みポストの内容は各投稿者個人の見解であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/mcds8762/status/2106750033223913671"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              すば（不満の背景に触れつつ擁護する投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/horoyoi_helpman/status/2106862391447478481"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ほろよいヘルプマン（準備中の減りへの不満）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/curucify/status/2106752948202266789"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              購いのsky（準備中の長さ・枚数への不満）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/189562"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：喰霊-零-Reの準備中の仕様に関する議論（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
