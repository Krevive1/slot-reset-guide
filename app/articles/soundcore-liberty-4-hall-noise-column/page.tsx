import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import Comments from "@/components/machine/Comments";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "モンキーターン・東京喰種・北斗の爆音から耳を守りたい｜ホールでSoundcore Liberty 4を使ってみた";
const description =
  "パチスロホールで隣台がうるさいときの騒音対策を、Soundcore Liberty 4の実体験をもとに解説。爆音は消えなくても、耳への負担はかなり和らぎました。";
const url = `${SITE_URL}/articles/soundcore-liberty-4-hall-noise-column`;
const heroImage = "/images/articles/soundcore-liberty-4-hall-noise-column.jpg";
const publishedAt = "2026-07-24";

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

export default function SoundcoreLiberty4HallNoiseColumnPage() {
  const liberty4Offer = getActiveAffiliateOffer("soundcoreLiberty4");
  const liberty5Offer = getActiveAffiliateOffer("soundcoreLiberty5");
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
          { name: title, href: "/articles/soundcore-liberty-4-hall-noise-column" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <MachineThumbnail heroImage={heroImage} name={title} />

        <p>モンキーターンの爆音は、耳が壊れます。</p>
        <p>東京喰種の爆音も、耳が壊れます。</p>
        <p>北斗の爆音も、耳が壊れます。</p>
        <p>
          もちろん、一度座っただけで本当に鼓膜が壊れるという医学的な話ではありません。ただ、音量MAXの隣台に着席したときの体感としては、そのくらいの威力があるという話です。
        </p>
        <p>
          モンキーターンは、レースの勝敗が決まるより先に、鼓膜が危険水域へ突入します。東京喰種は、喰種よりも先に音圧のほうがこちらを喰いにきます。北斗の拳にいたっては、ケンシロウが画面の中ではなく、耳元で戦い始めます。
        </p>
        <p>
          とはいえ「あなたのケンシロウ、少し静かにしてもらえませんか？」とは、なかなか言い出せません。以前、
          <Link href="/articles/hokuto-loud-neighbor-column">
            隣に音量MAXの男が座った話
          </Link>
          では両足バタバタで対抗してみましたが、あれは騒音対策ではなく、島に新しい騒音を追加しただけでした。
        </p>
        <p>
          そこで今回は、平和的な対策としてホールで使っているSoundcore
          Liberty 4について、実際に使った範囲での感想をまとめます。
        </p>
        <p>
          ホールが図書館になることはありません。しかし、耳元で暴れていたケンシロウを、少し離れた場所まで戻すことはできました。
        </p>

        <h2>パチスロの音量、本当にそこまで必要ですか</h2>
        <p>
          機種の演出上、音量が大きいこと自体は理解できます。当たりの臨場感や興奮を高める演出として、音量は重要な要素です。
        </p>
        <p>
          ただ、隣台でその演出がフルボリュームで鳴り続けると、話は別です。自分が打っている台の音より、隣の当たり演出のほうが大きく聞こえる状況は珍しくありません。演出を楽しみたいのは当たった本人であって、隣で聞かされる側の負担は考慮されていないように感じます。
        </p>

        <h2>結論：爆音は消えない。ただし、かなり遠ざけられる</h2>
        <p>
          先に結論を書きます。Soundcore
          Liberty 4を使っても、ホールの音が完全に消えるわけではありません。それでも、隣台の音が耳へ直接突き刺さるような感覚は、かなり和らぎました。隣の大音量によるストレスは、体感としてかなり軽減できています。
        </p>

        <h2>Soundcore Liberty 4をホールで使った実感</h2>
        <p>
          実際に使用しているのはSoundcore Liberty
          4で、パチスロホールでのノイズキャンセリング用途として使っています。装着感や連続使用時間、故障の有無などについては、確認できる範囲を超える情報になるため、ここでは触れません。あくまで「隣台の音に対してどう感じたか」という一点に絞って書きます。
        </p>
        <p>
          結論から言うと、隣台の大音量によるストレスはかなり軽減できました。特に、演出音が耳へ直接突き刺さるような感覚が和らいだのは、実際に使ってみて一番効果を感じた部分です。
        </p>

        <h2>ノイズキャンセリングでも完全な無音にはならない</h2>
        <p>
          誤解のないように書きますが、ノイズキャンセリングイヤホンを着けたからといって、ホールの音が無音になるわけではありません。大音量の演出音は、ノイズキャンセリング機能をすり抜けてある程度は聞こえてきます。
        </p>
        <p>
          モンキーターンが無音でレースを始めるわけではありませんし、東京喰種が急に上品な音量になるわけでもありません。ケンシロウが小声で「アタァ」と言ってくれるわけでもないのです。それでも、耳へ直接突き刺さる感覚はかなり和らぎました。「完全に消える」ではなく「かなり遠ざかる」というのが、実感に近い表現です。
        </p>

        <h2>隣台の大音量対策として感じたメリット</h2>
        <p>
          隣台の音そのものが小さくなるわけではなく、耳へ届く際の刺さり方が和らぐ、という感覚です。結果として、長時間ホールにいるときの音による疲労感が軽くなったと感じています。
        </p>
        <p>
          また、両足バタバタのような、自分から新しい騒音を発生させる対抗手段を取らずに済むのも利点です。誰かと戦わずに、自分側の負担だけを軽減できる点は、平和的な対策として気に入っています。
        </p>

        <h2>使用する際の注意点</h2>
        <p>ノイズキャンセリングイヤホンをホールで使う場合、いくつか注意しておきたい点があります。</p>
        <ul>
          <li>ノイズキャンセリングによって、店内アナウンスや店員からの呼びかけに気づきにくくなる可能性があります。</li>
          <li>音楽を大音量で重ねて流すような使い方は、耳への負担をさらに増やす可能性があります。</li>
          <li>完全な遮音を前提にせず、周囲の状況にも注意を払ってください。</li>
          <li>本記事は個人の使用感を紹介するものであり、医療的な効果を保証するものではありません。</li>
        </ul>

        <h2>Soundcore Liberty 4が向いている人・向いていない人</h2>
        <p>
          隣台の大音量によるストレスを少しでも軽減したい人には、試す価値がある選択肢だと感じています。一方で、ホール内の音を完全に遮断したい人や、店内アナウンス・店員からの呼びかけに気づけないことを避けたい人には、過度な期待は禁物です。あくまで「刺さる感覚を和らげる」道具として捉えるのが実情に合っています。
        </p>

        <h2>今から購入するなら後継機とも比較</h2>
        <p>
          Soundcore Liberty
          4は運営者が実際に使用している製品ですが、後継機は使用していません。そのため後継機については、実際に使ったような書き方はせず、Anker
          Japan公式オンラインストアで確認できる仕様のみを比較として掲載します。
        </p>
        <p>
          2026年7月24日時点で、Anker Japan公式オンラインストアではSoundcore
          Liberty 4の後継機としてSoundcore Liberty
          5が案内されています。価格は変動する場合があるため、下記は確認日時点の公式価格です。
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>モデル名</th>
                <th>ノイズキャンセリング</th>
                <th>再生時間</th>
                <th>防水性能</th>
                <th>公式価格</th>
                <th>向いている人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Soundcore Liberty 4（運営者使用中）</td>
                <td>ウルトラノイズキャンセリング2.0</td>
                <td>通常最大9時間／28時間（ケース込み）、ANC時最大7時間／24時間（ケース込み）</td>
                <td>IPX4</td>
                <td>¥14,990（確認日時点）</td>
                <td>公式サイトの製品説明に基づく仕様情報</td>
              </tr>
              <tr>
                <td>Soundcore Liberty 5（現行後継機）</td>
                <td>ウルトラノイズキャンセリング3.5</td>
                <td>ANCオフ最大12時間／48時間（ケース込み）、ANCオン最大8時間／32時間（ケース込み）</td>
                <td>IP55</td>
                <td>¥14,990（確認日時点）</td>
                <td>ハイレゾ音質・長時間再生・マルチポイント接続を重視する人（公式サイトの製品説明に基づく）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          上記はAnker Japan公式オンラインストアの
          <a
            href="https://www.ankerjapan.com/products/a3953"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcore Liberty 4製品ページ
          </a>
          および
          <a
            href="https://www.ankerjapan.com/products/a3957"
            target="_blank"
            rel="noopener noreferrer"
          >
            Soundcore Liberty 5製品ページ
          </a>
          （いずれも2026年7月24日確認）に基づく仕様です。価格は変動する場合があるため、購入前に公式サイトで最新情報をご確認ください。
        </p>
        {(liberty4Offer || liberty5Offer) && (
          <div className="product-box-grid">
            {liberty4Offer && (
              <AffiliateProductBox
                provider={liberty4Offer.provider}
                name={liberty4Offer.serviceName}
                note="運営者が実際にホールで使用している製品です。"
                ctaLabel={liberty4Offer.ctaLabel}
                ctaHref={liberty4Offer.href}
                imageSrc={liberty4Offer.imageSrc}
                disclosure={liberty4Offer.disclosure}
                offerType={liberty4Offer.offerType}
                serviceName={liberty4Offer.serviceName}
                placement="comparison"
                affiliateProgram={liberty4Offer.programName}
              />
            )}
            {liberty5Offer && (
              <AffiliateProductBox
                provider={liberty5Offer.provider}
                name={liberty5Offer.serviceName}
                note="Anker Japan公式サイトでLiberty 4の後継機として案内されているモデルです。"
                ctaLabel={liberty5Offer.ctaLabel}
                ctaHref={liberty5Offer.href}
                imageSrc={liberty5Offer.imageSrc}
                disclosure={liberty5Offer.disclosure}
                offerType={liberty5Offer.offerType}
                serviceName={liberty5Offer.serviceName}
                placement="comparison"
                affiliateProgram={liberty5Offer.programName}
              />
            )}
          </div>
        )}

        <h2>まとめ</h2>
        <p>
          隣の人へ「音量を下げてください」と注意するのは、なかなか気まずいものです。かといって両足バタバタのような対抗手段を取ると、今度は自分が店員に注意される側になりかねません。
        </p>
        <p>
          ノイズキャンセリングイヤホンであれば、誰とも戦わずに自分側の負担だけを軽減できます。モンキーターンが無音でレースを始めるわけではなく、東京喰種が急に上品な音量になるわけでもなく、ケンシロウが小声で「アタァ」と言ってくれるわけでもありません。それでも、耳へ直接突き刺さる感覚はかなり和らぎました。
        </p>
        <p>
          収支では機械に負ける日があります。せめて音量との戦いくらいは、装備を整えてから挑みたいところです。
        </p>

        <ShareButtons url={url} title={title} />
        <Comments slug="soundcore-liberty-4-hall-noise-column" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
