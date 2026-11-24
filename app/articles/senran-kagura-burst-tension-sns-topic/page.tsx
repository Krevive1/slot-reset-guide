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
  "「LBパチスロ閃乱カグラ Burst Tension」PV公開｜オーイズミBT機第3弾、2027年2月導入予定";
const description =
  "オーイズミ公式が「LBパチスロ閃乱カグラ Burst Tension」のプロモーションムービーを公開しました。BT機第三弾で、導入は2027年2月予定と発表されています。公式の発表内容とXでの反響を、確認できた範囲で整理します。";
const url = `${SITE_URL}/articles/senran-kagura-burst-tension-sns-topic`;
const heroImage = "/images/articles/senran-kagura-burst-tension-sns-topic.webp";
const publishedAt = "2026-11-24";

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

export default function SenranKaguraBurstTensionSnsTopicPage() {
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
          { name: title, href: "/articles/senran-kagura-burst-tension-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image unoptimized
            src={heroImage}
            alt="閃乱カグラBTのPV公開を知らせるワンチャンくんのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月24日、オーイズミの公式アカウント「1000ちゃん（㈱オーイズミ公式）」が、「LBパチスロ閃乱カグラ Burst Tension」のプロモーションムービーを公開したとXに投稿しました。
          導入は2027年2月の予定で、約2.3万回表示されています（11月24日確認時点）。
        </p>
        <p>
          この記事では、公式が発表している内容と、Xでの反響を、確認できた範囲で整理します。
        </p>

        <h2>オーイズミ公式の発表</h2>
        <p>
          投稿では、オーイズミのBT機の第三弾であること、BT機として初めて本格的な「技術快乳」（技術介入）を搭載していること、導入が2027年2月予定であることが紹介されています。
          オーイズミ公式サイトの製品情報にも、同機の導入が「2027.02」と記載されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/oizumi_koushiki/status/2125064086690099228"
          authorName="1000ちゃん（㈱オーイズミ公式）"
        />
        <p className="section-note">
          導入日や仕様は、今後変更される可能性があります。スペックや機械割などの詳細は、本記事の執筆時点では確認できていません。最新の情報は
          <a
            href="https://www.oizumi.co.jp/machine/kagurabursttension/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            オーイズミ公式サイト
          </a>
          をご確認ください。
        </p>

        <h2>11月20日にはホール関係者が試打を報告</h2>
        <p>
          公式のPV公開に先立つ11月20日には、ホールの店長とみられるアカウントが、事務所で新台を試打したと投稿していました。
          メーカー承認済みの写真を添えたもので、「技術介入でビタ押し炸裂台」という感想が書かれています。
          約1.9万回表示されています（11月24日確認時点）。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/eagle_tenchom/status/2123684906782150728"
          authorName="店長M"
        />
        <p className="section-note">
          上記は投稿者個人の感想であり、本記事の見解ではありません。
        </p>

        <h2>追記：PVで示された内容（11月25日）</h2>
        <p className="section-note">
          パーラーフルスロットルの記事によると、公開されたPVと動画の概要欄では、メーカー自身が次の内容を示しているとのことです。
          （筆者はPVそのものでの確認が済んでおらず、以下は同記事の報道に基づく整理です）
        </p>
        <ul>
          <li>通常時のBB（ボーナス）は、すべてBTにつながる</li>
          <li>BTループ率は約67％</li>
          <li>BT中の技術介入では、ビタ押しに成功すると11枚獲得できる表示がある</li>
        </ul>
        <p>
          出玉率や設定別のボーナス確率などは、PVでは示されていないとされています。
          導入は2027年2月予定で、日付や台数など、公式が発表していない情報は確定ではありません。
        </p>

        <h2>わかっていること・まだわからないこと</h2>
        <p>
          公式の投稿と製品情報で確認できたのは、機種名、オーイズミのBT機第三弾であること、技術介入を搭載していること、導入が2027年2月予定であることです。
          公式サイトのトップには「BT登場」の文字も掲げられています。
          出玉の仕組みや機械割などの詳しい仕様は、本記事の執筆時点では確認できていません。続報が出た時点で、あらためて整理します。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            BT機の第三弾で、技術介入にも力を入れているみたいだワン🐶
            導入は2027年2月の予定だから、まだ少し先だけど、続報が出たらチェックしたいワン。
          </span>
          <span className="wanchankun-comment-para">
            みんなは、BT機や技術介入のある機種は好きかな？ 気になるところを、ぜひ教えてほしいワン！
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
          本記事は、以下のXポストとオーイズミ公式サイトを参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/oizumi_koushiki/status/2125064086690099228"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              1000ちゃん（㈱オーイズミ公式）（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/eagle_tenchom/status/2123684906782150728"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              店長M（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://www.oizumi.co.jp/machine/kagurabursttension/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              オーイズミ：LBパチスロ閃乱カグラ Burst Tension
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/202116"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：閃乱カグラ Burst TensionのPVが公開
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
