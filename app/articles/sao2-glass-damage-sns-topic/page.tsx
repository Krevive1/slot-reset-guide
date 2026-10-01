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

const title = "今回は「牙狼剣」ではなく「ヘカートII」で台破壊";
const description =
  "スマスロ『ソードアート・オンラインⅡ』の筐体ガラスが割られた写真がXに投稿され、表示回数480万回超の反響に。8月にも2件の同様の破損が話題になっており、「また？」という反応が広がっています。誰が・なぜ割ったのかは明らかになっていません。";
const url = `${SITE_URL}/articles/sao2-glass-damage-sns-topic`;
const heroImage = "/images/articles/sao2-glass-damage-sns-topic.png";
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

export default function Sao2GlassDamageSnsTopicPage() {
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
          { name: title, href: "/articles/sao2-glass-damage-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロSAO2の筐体ガラス破損を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          スマスロ「ソードアート・オンラインⅡ」（SAO2）の筐体ガラスが割られた写真がXに投稿され、表示回数480万回を超える反響を呼んでいます。
          この台のガラス破損が話題になるのは今回が初めてではなく、8月にも2件の同様の破損が拡散しており、「また？」という反応が広がっています。
        </p>
        <p>
          <strong>
            誰が・どのような経緯で割ったのかは、本稿執筆時点で明らかになっていません。
          </strong>
          写真と、それに対するX上の反応を中心に、現時点で確認できている内容を整理します。
        </p>

        <h2>9月26日、またガラス破損の写真が投稿される</h2>
        <p>
          投稿したのはろくちゃんさん。2026年9月26日夜、「ついにうちのホールにも現れて草」「これ賠償どのくらいするんだろ？ww」というコメントとともに写真を公開しました。
          写真では筐体前面のガラスが大きく割れ、床にも破片が散らばっています。ホール名や、誰がどのように割ったのかは明らかにされていません。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/rokuchan__666/status/2103806752793993313"
          authorName="ろくちゃん"
        />
        <p className="section-note">
          SAO2の筐体ガラス破損が話題になるのは今回が初めてではありません。8月1日にはガラスが崩れ落ちた状態の写真が、8月7日にも大きく割れた状態の写真が、それぞれXで拡散していました。
          今回の投稿主も、リプ欄で「よりによってSAOですからねぇ〜」と反応しています。
        </p>

        <h2>「賠償どのくらい？」経験者を名乗る人からの体験談も</h2>
        <p>
          「賠償どのくらい？」という問いかけには、さまざまな見立てが寄せられました。中には台を壊した経験があると明かし、ガラス代よりも稼働停止中の利益分の方が大きかったと振り返るユーザーもいます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/777renaiGOD/status/2103835395477926189"
          authorName="Devil Love Master"
        />
        <p className="section-note">
          もっとも、実際の賠償額は壊れ方やホールとの話し合いで変わるもので、これらはあくまでリプ欄での個人の見立てや体験談です。断定的な相場として受け取らないよう注意してください。
        </p>

        <h2>「まさかヘカートIIで台破壊？」役物原因説も</h2>
        <p>
          リプ欄では、半分本気の台パン対策を提案する声のほか、SAO2の銃形状の役物（ガン・ギミック）に掛けたネタも集まりました。
          SAO2は、作中でシノンが愛用する狙撃銃「ヘカートⅡ」をモチーフにした役物が特徴の一つで、過去の破損騒動でも「役物の関係で割れやすいのでは」という指摘が出ていました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/jEyMpTGNm435311/status/2103834302509424655"
          authorName="ぽにょ&アッコ"
        />
        <p className="section-note">
          これはあくまでX上の大喜利・ネタ投稿であり、役物の動作がガラス破損の直接原因だと公式に確認されたものではありません。台パン（台を叩く行為）の可能性も含め、破損の経緯は明らかになっていない点にご注意ください。
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
                  2026年9月26日、SAO2の筐体ガラスが割られた写真がXに投稿され480万表示超の反響があったこと／8月にも2件同様の破損が話題になっていたこと／「賠償額」や「役物原因説」を巡ってX上で反応が広がっていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  破損した具体的なホール名、破損の直接原因（台パンか役物の設計上の問題か）、実際の賠償額
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          同じ機種でガラス破損が繰り返し話題になると、「また？」って気になっちゃうワン🐶
          役物ネタは面白いけど、実際に台パンだった場合は洒落にならない賠償額になるから、どんなに苛立っても手を出さないのが一番だよ。
        </p>
        <p>
          みんなは、こういう破損ネタを見てどう思う？役物原因説、信じる？
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
              href="https://x.com/rokuchan__666/status/2103806752793993313"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ろくちゃん（ガラス破損写真の投稿）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/188809"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：スマスロSAO2の筐体ガラスがまた割られる…まとめ（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
