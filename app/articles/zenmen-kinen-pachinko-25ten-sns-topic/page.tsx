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
  "全面禁煙のパチンコ店は5743店中25店？Xの集計が話題｜全国一律の全面禁煙は決まったのか";
const description =
  "「全面禁煙のパチンコ店は全国に25店舗くらいしかない模様」というXの投稿と「5743店中わずか25店」とするまとめ投稿が話題になっています。集計の注意点と、喫煙環境を巡る現時点の動きを整理しました。";
const url = `${SITE_URL}/articles/zenmen-kinen-pachinko-25ten-sns-topic`;
const heroImage = "/images/articles/zenmen-kinen-pachinko-25ten-sns-topic.png";
const publishedAt = "2026-11-21";

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

export default function ZenmenKinenPachinko25tenSnsTopicPage() {
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
          { name: title, href: "/articles/zenmen-kinen-pachinko-25ten-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="全面禁煙のパチンコ店は5743店中25店という集計が話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月17日、業界情報アカウントの「パチンコ・パチスロ.com」が「全面禁煙のパチンコ店、全国に僅か25店舗くらいしかない模様…」とXに投稿し、約3.2万回表示されるなど話題になりました。
          その後、パーラーフルスロットルのアカウントも「5743店中わずか25店」とする集計がXで話題になっていると紹介しています。
        </p>
        <p>
          今回は、何が話題になっているのか、数字を読むときの注意点、そして喫煙環境を巡る現時点の動きを整理します。
        </p>

        <h2>「全国に25店舗くらい」という投稿が話題に</h2>
        <p>
          「パチンコ・パチスロ.com」の投稿は「【全面禁煙になったらヤバそう】」という書き出しで、全面禁煙のパチンコ店が全国に25店舗くらいしかない模様だと伝えるものでした。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2122528086084481067"
          authorName="パチンコ・パチスロ.com"
        />
        <p>
          続いて、パーラーフルスロットルが「全面禁煙のパチンコ店、5743店中わずか25店！？」として、この集計を取り上げました。
          投稿では「全国一律の全面禁煙になれば『期待値が下がる』『専業を辞める人も』と懸念」「『パチ屋は一服する場所』の声も」と、反応の内容も紹介されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/parlourful/status/2122796921941098950"
          authorName="パーラーフルスロットル"
        />

        <h2>この数字を読むときの注意点</h2>
        <p>
          「25店」という数字は、公的な統計ではなく、SNS上で出回った集計です。元の投稿でも「25店舗くらい」「模様」と書かれており、集計の方法や調べた時点は、本記事の執筆時点では確認できていません。
          そのため、全国の全面禁煙のパチンコ店が実際に25店であると断定することはできません。
        </p>
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
                  Xで「全面禁煙のパチンコ店は25店舗くらい」「5743店中25店」という投稿が話題になっていること／投稿への反応に「期待値が下がる」「専業を辞める人も」といった声があること
                </td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>
                  25店・5743店という数字の集計方法と調査時点、全国の全面禁煙店の正確な数
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>喫煙環境を巡る現時点の動き</h2>
        <p>
          パチンコ店は、法律上は一定の条件で喫煙室を設けることができる施設に含まれます。
          業界メディアのグリーンべるとによると、厚生労働省の受動喫煙対策専門委員会は2026年7月9日の会合で、パチンコ店が含まれる「指定たばこ専用喫煙室」の経過措置（加熱式たばこ専用の喫煙室で、喫煙しながら遊技などができる扱い）について、現状を維持する方向性を示しました。
          理由として、加熱式たばこの副流煙に有害物質が含まれることは報告されているものの、人体への影響に関する科学的知見が現時点で十分に蓄積されているとは言えない点が挙げられています。
          一方で、会議では「予防原則を適用して紙巻きたばこと同じ扱いにすべき」という厳しい意見も出たと伝えられています。
        </p>
        <p>
          Xでも、全面禁煙になる議論が再燃しているものの、まだ決定ではなく延期になったようだという投稿が見られました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/CIqs6q/status/2122357050986619204"
          authorName="CIRO@エクセルジャパン班長"
        />
        <p>
          2026年11月時点で、パチンコ店が全国一律で全面禁煙になることが決まったという報道は、本記事では確認できていません。
        </p>
        <p className="section-note">
          上記は業界メディアの報道とSNS投稿に基づく整理です。正式な内容は、厚生労働省の公表資料や各報道でご確認ください。
        </p>

        <h2>SNSの反応</h2>
        <p>
          話題の投稿に付いた反応は、大きく分けて次のようなものがありました（パーラーフルスロットルの紹介内容による）。
        </p>
        <ul>
          <li>全国一律の全面禁煙になれば、期待値が下がるのではないかという懸念</li>
          <li>専業で打つ人の中には、辞める人も出るのではないかという声</li>
          <li>「パチ屋は一服する場所」という、喫煙とセットで楽しんできた人の声</li>
        </ul>

        <WanchankunComment>
          <p>
            たばこを吸う人にとっても吸わない人にとっても大事な話題だから、数字ひとつでこれだけ反応が広がるんだね🐶
            ただ、今回の「25店」は集計方法がはっきりしないので、「そういう集計が話題になっている」くらいに受け止めておくのがよさそうだワン。
          </p>
          <p>
            もし全国一律の全面禁煙になったら、みんなのホール選びや打つ時間は変わりそう？ それとも、あまり変わらないかな？
          </p>
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
              href="https://x.com/pachicom777/status/2122528086084481067"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・パチスロ.com（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/parlourful/status/2122796921941098950"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/CIqs6q/status/2122357050986619204"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              CIRO@エクセルジャパン班長（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://web-greenbelt.jp/post-115380/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              グリーンべると：パチンコ店における加熱式たばこを巡る経過措置は現状維持へ 厚労省専門委が方針
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
