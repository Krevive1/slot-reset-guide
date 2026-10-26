import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import TweetEmbed from "@/components/site/TweetEmbed";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title =
  "エクセルジャパン班長が鉄拳6の収支を公開｜58,508件・約9,780万円と本人が報告";
const description =
  "エクセルジャパン班長のまるこーさんが2026年10月25日、スマスロ鉄拳6の収支として件数58,508件・収支97,802,144円・機械割104.130%をXに投稿しました。本人が公開した数値と、確認できていること・できていないこと、当サイトの鉄拳6の狙い目との関係を整理しました。";
const slug = "excel-japan-tekken6-shuushi-sns-topic";
const url = `${SITE_URL}/articles/${slug}`;
const heroImage = "/images/articles/excel-japan-tekken6-shuushi-sns-topic.png";
const publishedAt = "2026-10-27";

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

export default function ExcelJapanTekken6ShuushiSnsTopicPage() {
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
          <Image
            src={heroImage}
            alt="スマスロ鉄拳6の収支公開が話題になっているイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          専業集団として知られるエクセルジャパンの班長・まるこーさんが、10月25日にスマスロ「鉄拳6」の収支をXに投稿しました。
          件数58,508件、収支97,802,144円、機械割104.130%という数字が本人から公開され、X上で話題になっています。
          この記事では、本人が公開した内容と、確認できていること・まだ確認できていないことを分けて整理します。
        </p>

        <h2>本人が公開した内容（10月25日）</h2>
        <p>まるこーさんは、鉄拳6について次の数字を投稿しています。いずれも本人が公開した集計値です。</p>
        <ul>
          <li>件数：58,508件</li>
          <li>収支：97,802,144円</li>
          <li>仕事量：80,488,177円</li>
          <li>機械割：104.130%</li>
        </ul>
        <p>
          あわせて、投稿では「ネットなどで出回っている期待値表より、実際はかなり高い収支を出せた機種だった」「ライバルが少なく、平均消化時間は北斗の約2倍で使いやすかった」という趣旨のコメントが添えられています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/ede56971/status/2114313973634039877"
          authorName="まるこー＠エクセルジャパン班長"
        />

        <h2>まとめ記事とX上の反応</h2>
        <p>
          この投稿は、パーラーフルスロットルが10月26日にまとめ記事として取り上げています。
          引用した投稿者からは、鉄拳6を見送ったことを悔やむ声や、リセット後の狙い方についての感想が出ています。
          一方で、記事のコメント欄には「確かに美味しかったが、今はもう同じとは限らない」という趣旨の意見も見られます。
          いずれも個人の感想で、機種の評価を示すものではありません。
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
                  まるこーさんが10月25日に、件数・収支・仕事量・機械割をXに投稿していること／本人が「期待値表より高い収支を出せた」という趣旨のコメントを添えていること
                </td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>
                  集計の期間や対象（どの台を、どの条件で拾ったか）／1件の定義／仕事量・収支の算出方法／設定やスルー回数などの内訳／数値を第三者が検証する手段
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          当サイトでは、元データや集計条件を独自に検証できていません。この記事は、本人が公開した集計値を紹介するもので、同じ結果の再現を保証するものではありません。
        </p>

        <h2>期待値表の数字と、単純に比べられない理由</h2>
        <p>
          X上では、朝イチ0Gの出玉率を94.6%とする期待値表の画像を引き合いに出した反応もありました。
          ただし、その表の出典や算出条件は確認できないため、この記事では数値比較の根拠には使いません。
        </p>
        <p>
          一般的に、期待値表は「朝イチ0Gから打った場合」のように、特定の条件で計算した数字です。
          一方、実戦の収支や機械割は、打つ台や止めどころを選んだ集計になります。
          条件が違う数字を並べても、どちらかが間違いとは言えません。
        </p>

        <h2>当サイトの鉄拳6の狙い目の目安</h2>
        <p>
          当サイトの鉄拳6のページでは、公開されている解析情報をもとに、次の目安を整理しています。
        </p>
        <ul>
          <li>設定変更時は、規定ポイント天井が最大900pt+αから500pt+αに短縮される</li>
          <li>AT天井は、通常時のボーナス3スルーから、設定変更時は2スルーに短縮される</li>
          <li>ボーナス天井の期待値1000円超の目安は、通常時が等価約450G・5.6枚約500G、設定変更後が等価約200G・5.6枚約250G</li>
        </ul>
        <p>
          設定変更を朝一の見た目だけで確定させる方法は確認できていないため、これらは「これだけ回れば期待値が見える」という参考値です。
          詳しくは
          <Link href="/machines/tekken-6">スマスロ鉄拳6のリセット恩恵・朝イチ狙い目</Link>
          をご覧ください。
        </p>

        <h2>ワンチャンくんの見解</h2>
        <p>
          大きな数字は目を引くけれど、いちばん大事なのは「どの条件の台を、どこまで追った結果なのか」だと思うワン🐶
          元の集計条件が分からないまま、同じ数字を狙うのは危ないんだワン。
        </p>
        <p>
          みんなは、期待値表の数字と実戦の結果が違ったとき、どっちを信じて動く？
        </p>

        <div className="article-link-box">
          <p>
            朝一リセット・リセット恩恵の基礎については、
            <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            で整理しています。
          </p>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・まとめ記事を参考に作成しました。投稿の内容は各投稿者本人の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/ede56971/status/2114313973634039877"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              まるこー＠エクセルジャパン班長（「鉄拳6 収支公開」の投稿）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/193424"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：エクセルジャパンが鉄拳6で約9780万円の収支公開（メーカー公式情報ではありません）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
