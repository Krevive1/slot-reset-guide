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
  "「みんパチ・スロサミ2026」で物販・くじにアクセス集中｜SNSでは長時間待機の声も";
const description =
  "業界公式のファン感謝祭「みんパチ・スロサミ2026」（2026年9月22日開催）で、物販・くじコーナーにアクセスが集中し、主催側が新規整列とくじコーナーを一時中止しました。現地参加者のSNS投稿と、公式が案内した内容を整理しました。";
const url = `${SITE_URL}/articles/minpachi-slosami-2026-trouble-sns-topic`;
const heroImage = "/images/articles/minpachi-slosami-2026-trouble-sns-topic.png";
const publishedAt = "2026-09-23";

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

export default function MinpachiSlosami2026TroubleSnsTopicPage() {
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
          { name: title, href: "/articles/minpachi-slosami-2026-trouble-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="みんパチ・スロサミ2026の物販混雑を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年9月22日に東京で開催された、業界団体主催のファン感謝祭「みんパチ・スロサミ2026」で、物販・くじコーナーにアクセスが集中するトラブルが発生しました。
          主催側は当日中に物販の新規整列中止・くじコーナー休止を案内し、謝罪しています。
        </p>
        <p>
          350台超の試打やステージイベントも用意された大型企画だっただけに、SNSでは長時間待機を訴える声が相次ぐ一方、試打やメーカー展示そのものを楽しんだという投稿も見られます。今回は、現時点で確認できている内容を整理します。
        </p>

        <h2>物販・くじにアクセス集中、主催が新規整列を中止</h2>
        <p>
          「みんパチ・スロサミ2026」は、日本遊技機工業組合等が主催する業界公式のファン感謝祭で、350台以上の最新機種試打コーナーやステージイベント、物販が用意された大型イベントでした。
          当日は物販・くじコーナーにアクセスが集中し、主催側は正常に案内できない状態が続いているとして、物販への新規整列中止・くじコーナー休止を案内。この対応について謝罪しています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/slotterk777/status/2102404066764861879"
          authorName="スロッターK(養分)"
        />
        <p>
          上記の投稿では、当日の経緯が時系列でまとめられており、「5時間並んでも買えなかった」「3時間並んで諦めて帰った」といった現地からの報告とあわせて、閉会後の案内にあった「全日程を無事終了」という表現に対して疑問の声が上がったことも紹介されています。
          一方で同じ投稿では「現場スタッフは悪くない」「試打そのものは楽しかった」という声も紹介されており、批判の矛先はスタッフ個人ではなく運営方法やシステム面に向いている、という見方が示されています。
        </p>

        <h2>謝罪メールも送付、現地からは長時間待機の報告</h2>
        <p>
          物販の列に並びメールアドレスを登録した参加者宛には、当日中に運営事務局から謝罪の案内メールが送られたとの投稿もあります。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/la_mb_da_cam/status/2102382224024985972"
          authorName="すーしー"
        />
        <p>
          また、現地に足を運んだ参加者からも、システムトラブルによって当初の予定通りに進行しなかったことを伝える投稿が見られます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/goe_shira_don/status/2102417920714580107"
          authorName="Eno-MO'"
        />
        <p className="section-note">
          これらの投稿はいずれも投稿者個人の体験・見解であり、トラブルの技術的な原因（システム構成など）について本記事で断定するものではありません。
          物販・くじコーナーの混乱があった一方で、試打コーナーやステージイベント、メーカー展示そのものを楽しんだという投稿も多く見られ、イベント全体としての評価は参加者によって分かれています。
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
                  2026年9月22日に「みんパチ・スロサミ2026」が東京で開催されたこと／物販・くじコーナーにアクセスが集中したこと／主催側が物販の新規整列中止・くじコーナー休止を案内し謝罪したこと／SNS上で長時間待機を訴える声が複数投稿されていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  トラブルの技術的な原因の詳細／今後の返金・補償等の具体的な対応内容／来年以降の開催・運営方法への反映有無
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          350台超の試打が用意される業界最大級のファンイベントだけに、楽しみにしていた人ほど物販・くじの混乱は残念だったと思うワン🐶
          ただ、SNSを見る限り「現場スタッフは悪くない」「試打自体は楽しかった」という声も多く、イベントそのものが失敗だったというより、物販・くじの運営面に課題が集中していたという印象だね。
        </p>
        <p>
          来年以降も開催されるなら、今回の反省が運営方法に活かされるといいワン。皆さんはこうした大型ファンイベントの物販・抽選、どんな方式なら混乱が少なくなると思う？
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
          本記事は、以下のXポストを参考に作成しました。いずれも投稿者個人の体験・見解であり、トラブルの原因や今後の対応について本記事で断定するものではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/slotterk777/status/2102404066764861879"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              スロッターK(養分)（当日の経緯まとめ）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/la_mb_da_cam/status/2102382224024985972"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              すーしー（運営事務局からの謝罪メール）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/goe_shira_don/status/2102417920714580107"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Eno-MO&apos;（現地参加者の体験投稿）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
