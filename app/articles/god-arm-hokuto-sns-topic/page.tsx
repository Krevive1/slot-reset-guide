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
  "「ゴッドアーム」問題でSNS議論拡大｜演者による「他人の台への関与」を巡り意見分かれる";
const description =
  "パチスロ来店演者「ゴッドアームほくと」氏を巡り、ファンから応援を頼まれた際に台へ関与する「ゴッドアーム」がSNSで話題に。代行遊技にあたるのではとの指摘や業界人の異なる意見が相次ぎ、その後は台に触れず声援を送る「ゴッドエール」へ移行しています。";
const url = `${SITE_URL}/articles/god-arm-hokuto-sns-topic`;
const heroImage = "/images/articles/god-arm-hokuto-sns-topic.png";
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

export default function GodArmHokutoSnsTopicPage() {
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
          { name: title, href: "/articles/god-arm-hokuto-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ゴッドアーム問題を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          パチスロ来店演者「ゴッドアームほくと」氏を巡り、演者による「他人の台への関与」をめぐる議論がSNS上で広がっています。
          ほくと氏は、ファンから応援を頼まれた際などに、その人の台に関わる形で応援する「ゴッドアーム」という演出を行っていました。
        </p>
        <p>
          これについてSNSでは、「代行遊技にあたるのではないか」といった指摘が出たほか、業界関係者の間でも意見が分かれる展開に。
          その後、ほくと氏は物理的に台へ触れることなく、声援によって応援する「ゴッドエール」という形に切り替えています。
          今回は、この一連の流れについて、現時点で確認できる情報を整理します。
        </p>

        <h2>「ゴッドアーム」を巡りSNSで議論が拡大</h2>
        <p>
          「ゴッドアームほくと」氏は、来店時の実戦などでファンから応援を求められた際に、ファンの遊技台に関わる形で応援する「ゴッドアーム」を行っていました。
          ところが、この「他人の台への関与」を巡ってSNS上で議論が拡大。「演者が他人の台を打つことは問題ないのか」「どこまでが応援で、どこからが代行遊技になるのか」など、さまざまな意見が投稿されるようになりました。
        </p>
        <p>こうした議論については、業界人の間でも意見が一致しているわけではありません。</p>
        <TweetEmbed tweetUrl="https://x.com/slotterk777/status/2100440553082995149" authorName="スロッターK(養分)" />
        <p>
          上記の投稿では、日直島田氏と現役設定師氏の異なる意見が紹介され、「ゴッドアーム問題」を巡って業界内でも見方が分かれていることが話題になっています。
        </p>
        <p className="section-note">
          ここで重要なのは、今回の議論について「ほくと氏が違反行為を行った」と断定できる状況ではないという点です。問題となっているのは、演者がファンの遊技台にどの程度関与することが認められるのか、その線引きをどう考えるかという部分です。
        </p>

        <h2>その後「ゴッドエール」へ移行</h2>
        <p>
          こうした議論が広がる中、ほくと氏はその後、「ゴッドアーム」ではなく「ゴッドエール」という形でファンを応援するようになりました。
          「ゴッドエール」は、物理的に遊技台へ触れるのではなく、声援などによってファンを応援するスタイルです。9月17日には、ほくと氏自身が実際に「ゴッドエール」を行った様子をXへ投稿しています。
        </p>
        <TweetEmbed tweetUrl="https://x.com/hokuto_slot/status/2100477506038206467" authorName="ゴッドアームほくと" />
        <p>
          投稿では、ファンから「リコリコ初打ちで上位CZにいきました。応援お願いできますか」と頼まれたことに対し、「ゴッドエール！いきます！」と応援。その後、「というわけで実戦終了」と報告しています。
          このように、少なくとも現在は、台に直接触れるのではなく声援によって応援する形へと変化していることが確認できます。
        </p>

        <h2>「どこまでが遊技への関与なのか」を巡って意見はさまざま</h2>
        <p>
          今回の議論では、「他人の台に関わる行為をどこまで認めるのか」という線引きもポイントになっています。SNSでは、演者がファンの台に関与することについて、
          「遊技の結果に影響する可能性があるのではないか」と考える意見がある一方、演者による応援そのものを問題視することに疑問を呈する声もあります。
        </p>
        <TweetEmbed tweetUrl="https://x.com/SLOGEN777/status/2100558659239678433" authorName="回胴弦之助" />
        <p className="section-note">
          特に、実際の遊技結果にどの程度影響したのかを外部から判断することは難しく、「代行者のヒキ」が出玉に影響しているかどうかをどこで線引きするのか、という点も議論されています。
          一連の騒動を受け、演者による遊技補助や代行遊技について改めて注目が集まる形となっています。
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
                  ほくと氏がファンから応援を頼まれた際などに「ゴッドアーム」を行っていたこと／これを巡りSNS・業界人の間で議論が拡大したこと／その後、台に直接触れず声援を送る「ゴッドエール」へ移行したこと（9月17日に本人が投稿）
                </td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>
                  「ゴッドアーム」が法令・規則上どう扱われるかについての公的な見解／ほくと氏の行為が実際に何らかの規則へ抵触していたかどうか／今後の業界ルールがどう運用されるか
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          今回の「ゴッドアーム問題」は、単純に「演者が他人の台を打っていいのか」という話だけではなく、演者による“応援”と、遊技そのものへの“関与”をどこで線引きするのかという問題として見ると分かりやすいでしょう。
          実際、SNS上でも「代行遊技として問題視するべき」という方向の意見だけでなく、「どこまでを禁止するのか」「遊技結果への影響をどう判断するのか」といった疑問の声も出ています。
        </p>
        <p>
          一方で、今回の騒動を受けて、ほくと氏が「ゴッドエール」という新しい形へ切り替えたことは確認できます。当サイトでもほくと氏の実戦動画を拝見していますが、引きの強さや、今回のような状況に対して「ゴッドエール」へ切り替える対応力は印象的でした。
          ただし、記事としては特定の行為が正しい・間違っていると結論づけるのではなく、今後、演者によるファンの遊技への関与について業界でどのような線引きがされていくのかを見ていきたいところです。
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
          本記事は、以下のXポストを参考に作成しました。いずれも投稿者個人の見解であり、特定の行為が規則・法令に抵触するかどうかを本記事で断定するものではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/slotterk777/status/2100440553082995149"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              スロッターK(養分)（業界人の間で意見が分かれている様子）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/hokuto_slot/status/2100477506038206467"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ゴッドアームほくと（「ゴッドエール」への移行の様子）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/SLOGEN777/status/2100558659239678433"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              回胴弦之助（線引きの難しさについての意見）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
