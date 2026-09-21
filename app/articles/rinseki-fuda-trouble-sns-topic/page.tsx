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
  "「離席札を置かずに席を立ったら…」ホールでの台確保トラブル投稿がXで話題に";
const description =
  "パチンコホールで「離席札を置かずに席を立った人」と「その後に座った人」がもめたという体験談投稿がXで話題になっています。台の確保はどこまで有効なのか、投稿内容と一般的な考え方を整理しました。";
const url = `${SITE_URL}/articles/rinseki-fuda-trouble-sns-topic`;
const heroImage = "/images/articles/rinseki-fuda-trouble-sns-topic.png";
const publishedAt = "2026-09-21";

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

export default function RinsekiFudaTroubleSnsTopicPage() {
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
          { name: title, href: "/articles/rinseki-fuda-trouble-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ホールでの台確保トラブルを巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          パチンコホールでの「離席札」を巡るトラブル体験談がXで話題になっています。
          離席札を置かずに席を立った人と、その後に座った人との間でもめたという投稿で、台の確保がどこまで有効なのかについて多くの反応が集まっています。
        </p>
        <p>今回は、話題になっている投稿の内容と、一般的に知られている離席札・台確保のルールについて整理します。</p>

        <h2>離席札を置かずに席を立ったことが発端に</h2>
        <p>
          投稿主は、隣の台で起きたやり取りを次のように説明しています。離席札を置かずに席を離れた人がいて、しばらくしてから別の客がその台に着席。
          15〜20分ほど経って新しく座った客が大当たりを引いたタイミングで、先に離席していた客が戻ってきたといいます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/umeko777kirari/status/2098702483413688603"
          authorName="パチンカス人生に一片の悔い無し"
        />
        <p>
          投稿によると、戻ってきた客は「自分が打っていた台だ」と主張し、その場でもめる展開に。
          投稿主が呼び出しボタンでスタッフを呼んだところ、スタッフが確認した結果、離席していた客は離席札を置いていなかったことが分かったとされています。
          離席していた客は「IQOS（加熱式たばこ）を置いていた」と主張したものの、最終的にその主張は通らなかった、という内容です。
        </p>
        <p className="section-note">
          この投稿はあくまで投稿主から見た体験談であり、当事者双方の言い分や、実際のやり取りの一部始終を本記事で確認できているわけではありません。
          投稿の最後では「離席札を置かずに立ち去って、見えない場所に私物を置いても確保にならないと思うが、皆さんはどう思いますか？」という問いかけがされています。
        </p>

        <h2>台の「確保」はどこまで有効？一般的な考え方</h2>
        <p>
          離席札や休憩札そのものは法律で定められたものではなく、運用方法は店舗ごとのルールに委ねられています。
          一般的には、離席札や店舗が用意する目印を使うことで一定時間の離席が案内される仕組みを採用しているホールが多いとされていますが、時間の長さや私物だけを置いた場合の扱いは店舗によって異なります。
        </p>
        <p>
          今回の投稿でも、私物（IQOS）を置いていたことが「確保」として認められるかどうかが争点になっています。
          店舗の判断基準は貼り紙やスタッフへの確認でしか分からないことが多いため、長時間離席する場合や不安がある場合は、離席札の有無にかかわらず一声スタッフにかけておくのが無難と言えそうです。
        </p>

        <h2>ワンチャンくんの見解</h2>
        <p>
          今回の投稿を見て、「離席札を置く」というひと手間の大切さを改めて感じたワン🐶
          私物を置いておくだけでは確保の意思が伝わらないこともあるみたいだから、少しの離席でも離席札やスタッフへの一声を忘れないようにしたいところだね。
        </p>
        <p>
          ただ、店舗によってルールの運用は違うだろうから、この投稿だけで「絶対にこうすべき」と決めつけることはできないワン。
          皆さんは、台に私物を忘れて戻ったら別の人に打たれていた…という経験はあるかな？もし同じ場面に遭遇したら、あなたならどうしますか？
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
          本記事は、以下のXポストを参考に作成しました。投稿はあくまで投稿者個人の体験談・見解であり、本記事で当事者間の是非を断定するものではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/umeko777kirari/status/2098702483413688603"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンカス人生に一片の悔い無し（離席札トラブルの体験談投稿）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
