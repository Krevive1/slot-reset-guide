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
  "Lパチスロ もののがたり先行映像が話題｜「からくり×ヴヴヴ？」との声も、スペック情報は未確認";
const description =
  "SANKYOは2026年10月7日、新台「Lパチスロ もののがたり」の先行映像を公開しました。Xではホールアカウントが「純増7枚」「からくり×ヴヴヴ的」などと投稿して25万表示を集めています。公式で確認できていることと、SNS上の未確認情報を分けて整理しました。";
const url = `${SITE_URL}/articles/sankyo-monogatari-senkou-eizou-sns-topic`;
const heroImage = "/images/articles/sankyo-monogatari-senkou-eizou-sns-topic.png";
const publishedAt = "2026-10-09";

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

export default function SankyoMonogatariSenkouEizouSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/sankyo-monogatari-senkou-eizou-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="Lパチスロ もののがたり先行映像を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          SANKYOは2026年10月7日、新台スマスロ「Lパチスロ もののがたり」の先行映像を公式Xで公開しました。
          「人気アニメ『もののがたり』が、今度はパチスロで登場」「極限の一打を叩き込め！」という告知で、映像の紹介投稿は24万表示を超えています。
        </p>
        <p>
          <strong>
            今回扱うのはパチンコ版（eフィーバーもののがたり）ではなく、パチスロ新台「Lパチスロ もののがたり」です。
          </strong>
          公式で確認できているのは先行映像の公開までで、スペックの詳細は本稿執筆時点で確認できていません。翌10月8日にはホールのアカウントが純増などに言及しており、公式情報とSNS上の情報を分けて整理します。
        </p>

        <div className="article-link-box">
          <p><strong>この記事の要点</strong></p>
          <ul>
            <li>公式確認済み：SANKYO公式が10月7日に「Lパチスロ もののがたり」の先行映像を公開</li>
            <li>報道ベース：業界ニュースでは導入日は2027年1月予定と紹介されている（メーカーの正式発表は本稿では未確認）</li>
            <li>SNS上の情報：ホールのアカウントが「純増7枚」「からくり×ヴヴヴ的」などと投稿（スペックとしては未確認）</li>
          </ul>
        </div>

        <h2>公式で確認できたこと：10月7日に先行映像を公開</h2>
        <p>
          SANKYO公式アカウントは10月7日、「『Lパチスロ もののがたり』先行映像公開！」と告知しました。
          「人気アニメ『もののがたり』が、今度はパチスロで登場！ 極限の一打を叩き込め！」というコピーが添えられています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/OFFICIAL_SANKYO/status/2107682330982891855"
          authorName="【公式】SANKYO"
        />
        <p>
          新台の情報を発信しているアカウントも同日、先行映像を紹介しており、約24万表示、1,500件を超えるいいねを集めました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/shindai_talk/status/2107672935905550713"
          authorName="新台トーーク"
        />

        <h2>原作は2014年連載開始の漫画「もののがたり」</h2>
        <p>
          業界ニュースサイトのマルットでは、『もののがたり』は2014年にミラクルジャンプで連載が始まり、その後アニメ化もされた比較的新しい作品だと紹介されています。
          同記事は、導入日を2027年1月予定としています（メーカーの正式発表かどうかは本稿では確認できていません）。
          なお、先行映像のどの場面を指しているかは、媒体の記事では具体的に触れられていません。
        </p>

        <h2>ホールのアカウントが「純増7枚」「からくり×ヴヴヴ的」と投稿</h2>
        <p>
          10月8日には、大阪の天王寺ホールのアカウントが、「Lもののがたり」について次のように投稿しています。
        </p>
        <ul>
          <li>純増は7枚</li>
          <li>70%突破の敵を4回突破すると、上位ATと超上位AT特化型へ</li>
          <li>1確目は「けんざち」（投稿者の表記）</li>
          <li>「このタイプは現行の機械ではないかも」「感覚的にはからくり×ヴヴヴ的」</li>
        </ul>
        <TweetEmbed
          tweetUrl="https://x.com/tennoji_hall/status/2108053704305983630"
          authorName="天王寺ホール"
        />
        <p className="section-note">
          この投稿は約25万表示を集めましたが、<strong>ホール側の発言であり、メーカー公式のスペックとして確認できているものではありません。</strong>
          「からくり×ヴヴヴ的」は、スペックの数値ではなく投稿者によるゲーム性の比較・感想です。実際のスペックや仕様は、メーカーの正式発表で変わる可能性があります。
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
                <td>公式で確認できていること</td>
                <td>
                  SANKYO公式が2026年10月7日に「Lパチスロ もののがたり」の先行映像を公開したこと
                </td>
              </tr>
              <tr>
                <td>報道・SNSで言及されていること</td>
                <td>
                  導入日は2027年1月予定と一部媒体が紹介／ホールのアカウントが純増7枚、70%突破の敵を4回突破で上位ATなどと投稿（いずれもメーカー公式の確認なし）
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  純増・AT確率・機械割・天井などの正式スペック、導入日の正式発表、ホール側の投稿内容の正確性
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          SANKYOの新台は、先行映像が出た段階でも反応が大きいワン🐶 ただ、今出ているのは映像と、ホールのアカウントの投稿くらいで、正式なスペックはこれからだよ。
          数字を見て期待しすぎず、メーカーの発表を待つのがよさそうだワン。
        </p>
        <p>
          みんなは、もののがたりの先行映像を見て、期待してる？ それとも様子見？
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
            SANKYOの他のパチスロ機種の天井・朝一情報は、
            <Link href="/machines/maker/sankyo">SANKYOの機種一覧</Link>
            でまとめています。
          </p>
          <ul>
            <li><Link href="/machines/karakuri-circus-2">Lからくりサーカス2の機種ページ</Link></li>
            <li><Link href="/machines/valvrave-2">Lヴァルヴレイヴ2の機種ページ</Link></li>
            <li><Link href="/articles/symphogear5-teaser-rumor-sns-topic">パチンコ「シンフォギア」最新作の超先行映像とスペックの噂｜公式で分かったこと</Link></li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・記事を参考に作成しました。埋め込みポストのうちホールアカウントの内容は、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a href="https://x.com/OFFICIAL_SANKYO/status/2107682330982891855" target="_blank" rel="noopener noreferrer nofollow">
              【公式】SANKYO（先行映像公開の告知）
            </a>
          </li>
          <li>
            <a href="https://x.com/shindai_talk/status/2107672935905550713" target="_blank" rel="noopener noreferrer nofollow">
              新台トーーク（先行映像の紹介）
            </a>
          </li>
          <li>
            <a href="https://x.com/tennoji_hall/status/2108053704305983630" target="_blank" rel="noopener noreferrer nofollow">
              天王寺ホール（ホール側の投稿・未確認情報）
            </a>
          </li>
          <li>
            <a href="https://marutto-w.com/industry_news/sd26107" target="_blank" rel="noopener noreferrer nofollow">
              マルット：SANKYOがスマスロ新台『Lもののがたり』（2026-10-07、導入予定の記載あり）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
