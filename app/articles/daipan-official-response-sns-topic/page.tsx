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
  "台パン注意への公式Xの返信が話題｜強い表現に賛否、ホール公式アカウントの言葉選びを考える";
const description =
  "「台パン（台を叩く行為）を黙認しているのか」というXでの質問に対し、あるホールの公式アカウントがかなり強い言葉を使って回答し、賛否の反応が広がっています。何が起きたのか、現時点で確認できている内容を整理しました。";
const url = `${SITE_URL}/articles/daipan-official-response-sns-topic`;
const heroImage = "/images/articles/daipan-official-response-sns-topic.png";
const publishedAt = "2026-09-28";

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

export default function DaipanOfficialResponseSnsTopicPage() {
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
          { name: title, href: "/articles/daipan-official-response-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="台パン注意への公式回答を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年9月26日、あるホールの公式X（旧Twitter）アカウントへ「台パン（台を強く叩く行為）を黙認しているのではないか」という趣旨の投稿が寄せられました。
          これに対する公式アカウントの返信の言葉選びが強かったことから、X上で賛否の反応が広がっています。
        </p>
        <p>
          台パンという迷惑行為への対応そのものと、公式アカウントの言葉選びという2つの論点を分けて、実際の投稿とあわせて現時点で確認できている内容を整理します。
        </p>

        <h2>「台パンを黙認しているのか」という投稿に、公式が返信</h2>
        <p>
          発端は、利用者から寄せられた「朝イチ以降、時間帯によっては台パンが黙認されているように感じる」という趣旨の投稿でした。
          これに対しホールの公式アカウントは、台パンを黙認しているわけではないこと、遠くのスタッフからは気付きにくい場合があること、酷いときは離れたスタッフにも申し出てほしいことなどを説明しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/akiba_island/status/2103776377195696168"
          authorName="アイランド秋葉原店"
        />
        <p className="section-note">
          この返信の中で、台パンをする利用者を指す表現として、差別的な意味合いを持つ強い言葉が使われています。台パンという迷惑行為そのものへの注意喚起の内容は妥当なものですが、その表現方法について、公式アカウントとして適切だったのかという点でX上の反応が分かれています。
        </p>

        <h2>Xの反応：言葉の強さを面白がる声、対応そのものを支持する声</h2>
        <p>
          この投稿への反応としては、対応そのものを支持したり、言葉の強さを面白がったりする声が目立ちます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/gakemeron/status/2103793497480573097"
          authorName="猫"
        />
        <TweetEmbed
          tweetUrl="https://x.com/mubech08/status/2103809489036251578"
          authorName="むべ太郎"
        />
        <p>
          一方で、次の投稿のように、対応の趣旨には同意しつつも言葉選びの強さそのものに触れる声も見られます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/Gifu_uo0/status/2103801502439813177"
          authorName="じふ꒷꒦✧"
        />
        <p>
          台パンは他の利用者の迷惑になるだけでなく、遊技機の故障の原因にもなる行為です。今回の件は、迷惑行為への注意喚起という内容自体への賛否というより、「公式アカウントがどこまで踏み込んだ表現を使ってよいか」という言葉選びの部分に反応が集まっている、という整理が実態に近いと考えられます。
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
                  2026年9月26日、台パンの黙認を疑う投稿にホール公式アカウントが返信したこと／その返信内で強い言葉が使われたこと／SNS上で対応・言葉選びの両面に反応が出ていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  該当投稿の削除・訂正の有無、ホール側の今後の対応方針
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          台パンは台の故障にもつながる迷惑行為だから、注意すること自体は当然だと思うワン🐶 ただ、公式アカウントの発信は不特定多数の目に触れるものだから、内容がどれだけ正しくても、言葉選び次第で受け取られ方が変わってしまうのは難しいところだね。
        </p>
        <p>
          今回は「対応は正しいけど言葉が強い」という反応が多かった印象。みんなは、ホールの公式アカウントってどこまで踏み込んだ発信をしていいと思う？
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
          本記事は、以下のXポスト・まとめ記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/akiba_island/status/2103776377195696168"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              アイランド秋葉原店（公式アカウントの返信）
            </a>
          </li>
          <li>
            <a
              href="https://pachinkopachisro.com/archives/60072560.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・パチスロ.com：ホール公式アカウントの返信まとめ
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
