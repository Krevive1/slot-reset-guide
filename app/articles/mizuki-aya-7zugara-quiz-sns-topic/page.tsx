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
  "水樹あやさんの「7図柄クイズ」がXで話題｜本人は「モニターが遠くて見えなかった」と説明";
const description =
  "ABEMA「パーラーカチ盛り」の7図柄当てクイズを巡り、X上で批判と擁護の声が広がっています。何が起きたのか、本人と寺井一択さんの説明、SNSの反応を中立的に整理しました。";
const url = `${SITE_URL}/articles/mizuki-aya-7zugara-quiz-sns-topic`;
const heroImage = "/images/articles/mizuki-aya-7zugara-quiz-sns-topic.webp";
const publishedAt = "2026-11-22";

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

export default function MizukiAya7zugaraQuizSnsTopicPage() {
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
          { name: title, href: "/articles/mizuki-aya-7zugara-quiz-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="7図柄クイズとモニターが遠くて見えなかったという説明が話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月20日にABEMAで放送された「パーラーカチ盛り ABEMA店」の「第8回パチンコ・パチスロ知識王」で、パチスロ演者の水樹あやさんが7図柄当てクイズに不正解だった場面が、Xで話題になっています。
          切り抜き動画は100万回以上表示され、批判の声も上がる一方、本人と共演の寺井一択さんが「モニターが遠くて見えなかった」と説明したことで、擁護の声も広がりました。
        </p>
        <p>
          今回は、何が起きたのか、本人たちの説明、SNSの反応を、特定の誰かを評価・断定しない形で整理します。
        </p>

        <div className="article-link-box">
          <p>
            <strong>続報：</strong>
            <Link href="/articles/mizuki-aya-7zugara-quiz-followup-sns-topic">
              水樹あやさんの7図柄クイズ【続報】公式アカウントが「あれは…、プリン？」と投稿
            </Link>
          </p>
        </div>

        <h2>何が話題になっているのか</h2>
        <p>
          マルハンタイムズの公式アカウントは放送後の11月20日、7図柄当てクイズの場面をまとめた動画を「珍解答続出で7図柄当てクイズがまさかの大喜利大会に!?」という文面でXに投稿しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/maruhantimes/status/2123785941894467925"
          authorName="マルハンタイムズ【公式】"
        />
        <p>
          報道したMediaDogsによると、7図柄当てクイズは、画面に映ったパチスロの7図柄を見て、どの台かを答える企画です。
          水樹あやさんは『パチスロからくりサーカス』の7図柄に別の作品名を答えて不正解となり、共演の寺井一択さんも別の問題で不正解だった場面があったと伝えられています。
        </p>
        <p>
          11月21日、業界情報アカウントの「パチンコ・パチスロ.com」が、この動画に批判が集まっているとして取り上げ、約66万回表示されました。
          パーラーフルスロットルも同日、「批判の声」と「本人の説明」をあわせて紹介しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2124066033787166824"
          authorName="パチンコ・パチスロ.com"
        />
        <TweetEmbed
          tweetUrl="https://x.com/parlourful/status/2124140783129538988"
          authorName="パーラーフルスロットル"
        />

        <h2>水樹あやさん本人の説明</h2>
        <p>
          水樹あやさんは11月21日、マルハンタイムズの動画を受けて自身のXに投稿し、「モニターが全く見えなかった」「視力が悪く、あんなに見えにくいとは思わなかった」と説明しました。
          次回はメガネをかけて臨むとも書いています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mizukiaya777/status/2124029453131301154"
          authorName="水樹あや"
        />
        <p>
          続けて、「手元にもモニターがあると思ったが、なかった」とも投稿しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mizukiaya777/status/2124043192341504358"
          authorName="水樹あや"
        />

        <h2>寺井一択さんの補足</h2>
        <p>
          共演した寺井一択さんも、元の投稿に怒っている人が多いことに触れたうえで、解答席から見たモニターの大きさの体感を画像で示し、「どうかお許しあれ」と投稿しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/terai_ScooP/status/2124034767423467943"
          authorName="寺井一択"
        />
        <p>
          水樹あやさんは、この投稿を引用して「体感画像は大げさに思えるかもしれないが、再現度が高い」という趣旨の返信をしています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mizukiaya777/status/2124037166217265559"
          authorName="水樹あや"
        />

        <h2>SNSの反応：批判と擁護が両方ある</h2>
        <p>
          話題の投稿に付いた反応は、大きく分けて次のようなものがありました。
        </p>
        <ul>
          <li>「好きな機種なのに分からないのは残念」といった、厳しい受け止め方（MediaDogsによる紹介）</li>
          <li>「スタジオのモニターは距離のわりに小さく見える」「図柄の形だけで答えたのでは」と、状況に理解を示す声</li>
          <li>「演者の仕事は何か」という、より広い議論につなげる声</li>
        </ul>
        <p>
          実際の投稿には、番組の映像を見て「確かにモニターが遠い」と受け止める反応もありました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/funguy_pe/status/2124085299940888900"
          authorName="ぺーさん"
        />
        <p>
          一方で、演者の役割について別の視点から意見を述べる投稿もありました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/Negitama_Slot/status/2124078002111934620"
          authorName="ねぎたま"
        />
        <p className="section-note">
          上記はXの投稿に基づく整理です。誰かの知識や姿勢を評価するものではなく、見え方や状況は放送の映像・スタジオの環境によっても変わります。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            7図柄って、慣れていても画面が小さいと意外と分からなくなるよね🐶
            今回は、見え方の事情を本人たちが説明していて、受け止め方も人それぞれだワン。
            番組側の演出も含めて、ひとつの場面だけで誰かを決めつけないようにしたいところだね。
          </span>
          <span className="wanchankun-comment-para">
            みんなは、7図柄クイズって何問くらい答えられそう？ 遠くのモニターだったら、自信あるかな？
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
          本記事は、以下のXポスト・報道記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/maruhantimes/status/2123785941894467925"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              マルハンタイムズ【公式】（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/pachicom777/status/2124066033787166824"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・パチスロ.com（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/parlourful/status/2124140783129538988"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/mizukiaya777/status/2124029453131301154"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              水樹あや（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/terai_ScooP/status/2124034767423467943"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              寺井一択（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://mediadogs.jp/2026/11/21/mizuki-aya-7zugara-quiz-kachimori/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              MediaDogs：水樹あや、『パーラーカチ盛り』の7図柄クイズで批判も 本人は「モニター全く見えなかった」、寺井一択も擁護
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
