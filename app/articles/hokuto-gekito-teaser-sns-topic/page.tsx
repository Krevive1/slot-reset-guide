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

const slug = "hokuto-gekito-teaser-sns-topic";
const title =
  "「スマスロ 北斗の拳 激闘」超ティザー映像公開｜2027年3月導入予定、適合の速報にSNSで反響";
const description =
  "サミーが2026年11月26日、「スマスロ 北斗の拳 激闘」の超ティザー映像を公開しました。公式YouTubeの概要欄では2027年3月導入予定とされています。同日には適合の速報も広がりました。公式で確認できることと、まだ発表されていないこと、Xの反響を整理します。";
const url = `${SITE_URL}/articles/${slug}`;
const heroImage = `/images/articles/${slug}.webp`;
const publishedAt = "2026-11-27";

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

export default function HokutoGekitoTeaserSnsTopicPage() {
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
            alt="スマスロ北斗の拳 激闘の超ティザー映像公開を知らせるワンチャンくんのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月26日16時、サミーの公式Xアカウントが、新機種「スマスロ 北斗の拳 激闘」の超ティザー映像（約37秒）を投稿しました。
          投稿は約182万回表示されています（11月27日確認時点）。
          サミー公式YouTubeの概要欄では、「2027年3月導入予定」と案内されています。
        </p>
        <p>
          同じ時間帯には、業界情報アカウントが「適合」と速報し、こちらも約20万回表示されました。
          この記事では、公式で確認できることと、まだ発表されていないこと、Xの反響を分けて整理します。
        </p>

        <h2>公式で確認できること</h2>
        <ul>
          <li>機種名は「スマスロ 北斗の拳 激闘」（サミー）です。</li>
          <li>2026年11月26日に、サミー公式Xと公式YouTube（サミーチャンネル）で超ティザー映像が公開されました。</li>
          <li>公式YouTubeの概要欄では「2027年3月導入予定」とされています。導入時期は予定のため、変更される可能性があります。</li>
        </ul>
        <TweetEmbed
          tweetUrl="https://x.com/sammy_corp/status/2125847024344187112"
          authorName="サミー株式会社"
        />

        <h2>「適合」の速報と、映像で紹介された内容</h2>
        <p>
          パチンコ・パチスロ情報アカウントの「パチンコ・パチスロ.com」は、映像公開とほぼ同時に「Sammy『スマスロ 北斗の拳 激闘』が適合」と投稿しました。
          続く投稿では、映像の内容として「王道システム、上乗せ、継続バトル」と紹介しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2125847311054196861"
          authorName="パチンコ・パチスロ.com"
        />
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2125850571836215750"
          authorName="パチンコ・パチスロ.com"
        />
        <p className="section-note">
          適合は、型式試験に通ったことを示すもので、導入日やスペックが確定したという意味ではありません。
          天井・純増・設定差・朝一のリセット恩恵などは、11月27日時点で公式からは発表されていません。当サイトでは、発表前の数値を推測で補うことはしません。
        </p>

        <h2>パチンコ「e 北斗の拳 激闘」とは別の機種</h2>
        <p>
          サミーからは、パチンコの「e 北斗の拳 激闘」も発表されています。
          公式YouTubeにはティザームービーとWEB-CMが公開されており、なな徹の新台カレンダーでは2027年1月12日導入予定とされています。
          名前が似ていますが、今回のスマスロとは別の機種なので、検索や新台情報を見るときは「スマスロ」か「e（パチンコ）」かを確認してください。
        </p>

        <h2>Xの反響：「覇権」から「また北斗？」まで</h2>
        <p>
          公式投稿の引用では、期待の声が目立ちました。「覇権」と短く反応した投稿は約52万回表示されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/genn_eki/status/2125859512766845267"
          authorName="現役設定師"
        />
        <TweetEmbed
          tweetUrl="https://x.com/shindai_talk/status/2125848606934704622"
          authorName="新台トーーク"
        />
        <p>
          一方で、北斗シリーズの新作が続くことに「いつまで北斗擦るんや」と苦笑する声や、別のシリーズを望む声もありました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/W34RT9UWDWYiyy6/status/2125871099099705519"
          authorName="Xユーザー"
        />
        <TweetEmbed
          tweetUrl="https://x.com/dontokoi1999/status/2125890068242137393"
          authorName="Xユーザー"
        />
        <p className="section-note">
          埋め込みポストの内容は各投稿者個人の感想であり、本記事の見解ではありません。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            北斗の新しいスマスロが動き出したワン🐶 2027年3月導入予定とされているけれど、天井や朝一のリセット恩恵はまだ発表されていないよ。
            パチンコの「e 北斗の拳 激闘」とは別の機種だから、名前を見間違えないように気をつけてね。
          </span>
          <span className="wanchankun-comment-para">
            みんなは、「激闘」という名前からどんなゲーム性を想像したかな？ 歴代の北斗で好きだった台も、ぜひ教えてほしい！
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

        <h2>北斗シリーズの関連ページ</h2>
        <p className="section-note">
          現在ホールで稼働している北斗シリーズの朝イチ情報は、次のページにまとめています。
        </p>
        <ul>
          <li><Link href="/machines/hokuto-no-ken-smart-slot">スマスロ北斗の拳の機種ページ</Link></li>
          <li><Link href="/machines/hokuto-no-ken-tensei-2">Lスマスロ北斗の拳 転生の章2の機種ページ</Link></li>
          <li><Link href="/articles/new-slot-schedule-dec-jan">12月〜1月導入予定のスロット新台一覧</Link></li>
        </ul>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下の公式発表・Xポスト・紹介ページを参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=i1TjJHksC9w" target="_blank" rel="noopener noreferrer nofollow">
              サミーチャンネル：【公式】「スマスロ 北斗の拳 激闘」超ティザー映像（YouTube）
            </a>
          </li>
          <li>
            <a href="https://x.com/sammy_corp/status/2125847024344187112" target="_blank" rel="noopener noreferrer nofollow">
              サミー株式会社（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/pachicom777/status/2125847311054196861" target="_blank" rel="noopener noreferrer nofollow">
              パチンコ・パチスロ.com：適合の速報（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/pachicom777/status/2125850571836215750" target="_blank" rel="noopener noreferrer nofollow">
              パチンコ・パチスロ.com：超ティザー映像の紹介（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/genn_eki/status/2125859512766845267" target="_blank" rel="noopener noreferrer nofollow">
              現役設定師（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/shindai_talk/status/2125848606934704622" target="_blank" rel="noopener noreferrer nofollow">
              新台トーーク（Xの投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/W34RT9UWDWYiyy6/status/2125871099099705519" target="_blank" rel="noopener noreferrer nofollow">
              Xユーザーの投稿（「いつまで北斗擦るんや」）
            </a>
          </li>
          <li>
            <a href="https://x.com/dontokoi1999/status/2125890068242137393" target="_blank" rel="noopener noreferrer nofollow">
              Xユーザーの投稿（別シリーズを望む声）
            </a>
          </li>
          <li>
            <a href="https://nana-press.com/kaiseki/machine/1297/" target="_blank" rel="noopener noreferrer nofollow">
              なな徹：e 北斗の拳 激闘（パチンコ）の機種ページ
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
