import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import TweetEmbed from "@/components/site/TweetEmbed";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "ウマ娘のパチスロ化を巡る情報がSNSで話題に｜「Lウマ娘 プリティーダービー」が保通協通過との投稿";
const description =
  "「ウマ娘 プリティーダービー」のパチスロ化を巡る情報がSNSで話題に。「Lウマ娘 プリティーダービー（仮名）」が保通協を通過したとの投稿が拡散されていますが、現時点で公式発表は確認されていません。SNSでは賛否両論の声が上がっています。";
const url = `${SITE_URL}/articles/uma-musume-pachislot-sns-topic`;
const heroImage = "/images/articles/uma-musume-pachislot-sns-topic.png";
const publishedAt = "2026-09-18";

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

export default function UmaMusumePachisloSnsTopicPage() {
  const jinsOffer = getActiveAffiliateOffer("jinsScreen");
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
          { name: title, href: "/articles/uma-musume-pachislot-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ウマ娘のパチスロ化を巡る話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          人気コンテンツ「ウマ娘 プリティーダービー」のパチスロ化を巡る情報が、SNS上で話題になっています。
          きっかけとなったのは、9月16日にXへ投稿された「Lウマ娘プリティーダービー（仮名）が保通協を通過した」とする情報です。
          投稿では、販売を京楽産業.が担当し、2027年1月導入予定との情報に加え、パチンコ版についても2027年3月以降に販売予定との噂が紹介されていました。
        </p>
        <p>
          この投稿は大きな反響を集めていますが、現時点では「ウマ娘」のパチスロ化について、公式から正式な発表が行われたことは確認できません。
          今回は、現在SNS上で話題になっている情報と、それに対するユーザーの反応を整理します。
        </p>

        <h2>「Lウマ娘 プリティーダービー」が保通協を通過したとの情報</h2>
        <p>
          9月16日、X上で「Lウマ娘プリティーダービー（仮名）が保通協を通過したとの情報を入手した」とする投稿が行われました。
          投稿者によると、販売は京楽産業.で、2027年1月導入予定とのこと。さらに「パチンコは3月以降で販売予定との噂」とも記載されており、
          10月には特別先行展示会が予定されているとの情報も投稿されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/umeko777kirari/status/2100167811813298667"
          authorName="パチンカス人生に一片の悔い無し"
        />
        <p>
          この投稿は約204万表示を記録するなど大きな反響となり、「ついにウマ娘がパチスロになるのでは」と注目を集めることになりました。
        </p>
        <p className="section-note">
          ここで注意したいのは、今回の情報があくまでX上の投稿を発端とした情報であるという点です。現時点で、ウマ娘のパチスロ化について公式サイトなどから正式発表が行われたことは確認できていません。
          そのため、現段階では「ウマ娘がパチスロ化する」と断定するのではなく、パチスロ化を巡る情報がSNSで話題になっていると捉えるのが適切でしょう。
        </p>

        <h2>SNSでは「パチスロ化」に賛否両論</h2>
        <p>
          今回の情報が拡散されると、SNSではさまざまな反応が見られました。特に目立ったのが、「ウマ娘のパチスロ化を望まない」という趣旨の意見です。
        </p>
        <TweetEmbed tweetUrl="https://x.com/Yoshida_S_X/status/2100734776114352613" authorName="Yoshida" />
        <p>
          一方で、パチスロ化そのものを問題視しないという意見も投稿されています。ウマ娘は実在の競走馬をモチーフとしたコンテンツであり、ゲーム自体も競馬を題材としています。
          そのため、「競馬をモチーフとしたコンテンツがパチスロになることについて、そこまで意外ではないのではないか」という趣旨の反応もありました。
        </p>
        <TweetEmbed tweetUrl="https://x.com/expelion2736/status/2100703637119054015" authorName="神耶詩鷺" />
        <p className="section-note">
          このように、今回の情報を巡っては「ウマ娘をパチスロで遊びたい」という声だけでなく、パチスロというジャンルそのものへの抵抗感を示す声もあり、反応は分かれています。
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
                <td>X上で「Lウマ娘 プリティーダービー（仮名）」が保通協を通過したとする投稿があること（投稿日：2026年9月16日、投稿では京楽産業.が2027年1月導入予定、パチンコ版は2027年3月以降との噂と紹介）</td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>ウマ娘公式からのパチスロ化に関する正式発表、実際の導入時期、機種のゲーム性・スペック、実在馬の使用許諾等の詳細</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          今回の件は、「ウマ娘のパチスロ化が正式決定した」というニュースとして見るよりも、パチスロ化に関する具体的な情報がSNS上で出てきたことで、大きな話題になっている段階として見るのがよさそうです。
          特に「保通協通過」「2027年1月導入予定」「京楽産業.が販売」といった具体的な内容まで投稿されているため、ウマ娘ファンだけでなくパチンコ・パチスロファンからも注目を集めています。
        </p>
        <p>
          一方、公式発表が確認できていない以上、現時点で導入を確定事項として扱うのは早いでしょう。また、SNSの反応についても、「パチスロ化してほしくない」という意見がある一方、
          「競馬を題材とした作品なのだから、パチスロ化自体は不自然ではない」という意見もあります。ウマ娘ファンとパチスロユーザーの双方から注目される話題だけに、今後、公式から何らかの発表があるのか引き続き注目したいところです。
        </p>

        {jinsOffer && (
          <div className="product-box-grid">
            <AffiliateProductBox
              provider={jinsOffer.provider}
              name={jinsOffer.serviceName}
              note={jinsOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={jinsOffer.ctaLabel}
              ctaHref={jinsOffer.href}
              disclosure={jinsOffer.disclosure}
              offerType={jinsOffer.offerType}
              serviceName={jinsOffer.serviceName}
              placement="mid_article"
              affiliateProgram={jinsOffer.programName}
            />
          </div>
        )}

        <div className="article-link-box">
          <p>
            朝一リセット・リセット恩恵の基礎については、
            <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            で整理しています。
          </p>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポストを参考に作成しました。いずれも投稿者個人の見解・情報であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/umeko777kirari/status/2100167811813298667"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンカス人生に一片の悔い無し（「Lウマ娘 プリティーダービー」保通協通過情報）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Yoshida_S_X/status/2100734776114352613"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Yoshida（パチスロ化への懸念の声）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/expelion2736/status/2100703637119054015"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              神耶詩鷺（パチスロ化を問題視しない意見）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
