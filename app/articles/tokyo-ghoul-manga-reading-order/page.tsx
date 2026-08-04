import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Comments from "@/components/machine/Comments";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "東京喰種の漫画を読む順番｜無印・:reは全何巻？電子書籍と全巻セットを比較";
const seoTitle = "東京喰種の漫画を読む順番｜無印14巻・:re16巻と全30巻を解説";
const description =
  "東京喰種の漫画を読む順番を解説。無印全14巻の次に:re全16巻を読む本編全30巻の構成、アニメ視聴後の注意点、電子書籍と紙の全巻セットの違いをまとめます。";
const url = `${SITE_URL}/articles/tokyo-ghoul-manga-reading-order`;
const publishedAt = "2026-07-31";
const updatedAt = "2026-07-31";

const faq = [
  {
    question: "東京喰種の漫画は全何巻ですか？",
    answer: "本編は『東京喰種トーキョーグール』全14巻と『東京喰種トーキョーグール:re』全16巻の合計30巻です。どちらも完結しています。",
  },
  {
    question: "東京喰種と:reはどちらから読みますか？",
    answer: "最初に『東京喰種トーキョーグール』全14巻を読み、その後に続編の『東京喰種トーキョーグール:re』全16巻を読む順番です。",
  },
  {
    question: "アニメの続きから漫画を読めますか？",
    answer: "『東京喰種√A』など原作漫画と流れが異なる部分があるため、特定の巻から続きが読めるとは断定していません。アニメ視聴済みでも、無印1巻から読むと経緯を追いやすくなります。",
  },
  {
    question: "小説や番外編も読む必要がありますか？",
    answer: "本編の順番は無印から:reまでで完結します。小説・番外編・資料集は、本編を読んだ後に興味に応じて選べます。",
  },
  {
    question: "紙と電子書籍のどちらがよいですか？",
    answer: "すぐ読み始めたい、置き場所を増やしたくない場合は電子書籍、手元に並べたい場合は紙が選択肢です。価格・在庫・送料・キャンペーンは変動するため、購入時に確認してください。",
  },
];

export const metadata: Metadata = {
  title: seoTitle,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: seoTitle,
    description,
    url,
    type: "article",
    publishedTime: publishedAt,
    modifiedTime: updatedAt,
  },
  twitter: {
    card: "summary",
    title: seoTitle,
    description,
  },
};

export default function TokyoGhoulMangaReadingOrderPage() {
  const bookwalkerOffer = getActiveAffiliateOffer("bookwalkerTokyoGhoul");
  const mangazenkanOffer = getActiveAffiliateOffer("mangazenkanTokyoGhoul30");
  const rakutenOffer = getActiveAffiliateOffer("rakutenTokyoGhoul30");
  const yahooOffer = getActiveAffiliateOffer("yahooTokyoGhoul30");
  const rentaOffer = getActiveAffiliateOffer("rentaTokyoGhoul");
  const articleJsonLd = {
    ...buildGenericArticleJsonLd({ headline: title, description, url }),
    datePublished: publishedAt,
    dateModified: updatedAt,
  };
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);
  const faqJsonLd = buildFaqJsonLd(faq);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/tokyo-ghoul-manga-reading-order" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}｜更新日：{updatedAt}</p>
        <p className="section-note">この記事にはアフィリエイト広告が含まれています。</p>

        <p>
          『東京喰種トーキョーグール』の本編は、無印全14巻を読んだ後に『東京喰種トーキョーグール:re』全16巻へ進む順番です。本編は合計30巻で完結しています。
        </p>
        <p>
          アニメを見た人も、漫画では無印1巻から読むと物語の経緯を追いやすくなります。この記事では、重大なネタバレを避けながら、読む順番と電子書籍・紙の全巻セットの違いを整理します。
        </p>

        <h2>結論｜無印14巻から:re16巻の順で読む</h2>
        <ol>
          <li>『東京喰種トーキョーグール』1〜14巻</li>
          <li>『東京喰種トーキョーグール:re』1〜16巻</li>
          <li>小説・番外編・資料集は興味があれば読む</li>
        </ol>
        <p>本編だけを読むなら、無印から:reの順で全30巻です。小説や資料集を途中へ入れなくても、本編の順番は変わりません。</p>

        {bookwalkerOffer && (
          <div className="product-box-grid">
            <AffiliateProductBox
              provider={bookwalkerOffer.provider}
              name={bookwalkerOffer.serviceName}
              note="『東京喰種トーキョーグール』の電子書籍シリーズページです。価格やキャンペーン条件はリンク先で確認してください。"
              ctaLabel={bookwalkerOffer.ctaLabel}
              ctaHref={bookwalkerOffer.href}
              imageSrc={bookwalkerOffer.imageSrc}
              disclosure={bookwalkerOffer.disclosure}
              offerType={bookwalkerOffer.offerType}
              serviceName={bookwalkerOffer.serviceName}
              placement="intro"
              affiliateProgram={bookwalkerOffer.programName}
            />
          </div>
        )}

        <h2>東京喰種の漫画は全何巻？</h2>
        <p>
          『東京喰種トーキョーグール』は石田スイによる漫画で、集英社の『週刊ヤングジャンプ』に掲載されました。無印と続編の:reはいずれも完結しています。
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr><th>シリーズ</th><th>巻数</th><th>状態</th><th>読む順番</th></tr>
            </thead>
            <tbody>
              <tr><td>東京喰種トーキョーグール</td><td>全14巻</td><td>完結</td><td>1</td></tr>
              <tr><td>東京喰種トーキョーグール:re</td><td>全16巻</td><td>完結</td><td>2</td></tr>
              <tr><td>本編合計</td><td>全30巻</td><td>完結</td><td>—</td></tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">38冊セットなどの商品には、小説や関連書籍が含まれる場合があります。本編全30巻のセットと混同しないよう、商品内訳を確認してください。</p>

        <h2>初心者向けの読む順番</h2>
        <h3>最初は無印1巻から</h3>
        <p>主人公や世界観の始まりから追うには、『東京喰種トーキョーグール』1巻から読むのが分かりやすい順番です。</p>
        <h3>無印14巻の次に:re1巻</h3>
        <p>無印14巻まで読み終えたら、続編の『東京喰種トーキョーグール:re』1巻へ進みます。:reは全16巻で完結しています。</p>
        <h3>小説・番外編は後からでもよい</h3>
        <p>
          関連作には『日々』『空白』『昔日』『:re Novel [quest]』『JACK』『zakki』『ZAKKI:re』があります。小説・番外編・資料集は本編30巻とは別で、本編を読んだ後に興味に応じて選べます。
        </p>

        <h2>アニメを見た人も無印1巻から読むべき？</h2>
        <p>アニメの放送順は、無印、√A、:re、:re最終章です。</p>
        <p>
          アニメ公式のスタッフ情報では、√Aに「オリジナルストーリーネーム：石田スイ」と記載されています。原作漫画と完全に同じ流れとして扱えない部分があるため、「アニメの続きは漫画の何巻から」と厳密に断定していません。
        </p>
        <p>アニメ視聴済みでも、漫画は無印1巻から読むと、登場人物の経緯や物語の流れを初めから追いやすくなります。</p>

        <h2>電子書籍と紙の全巻セットを比較</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr><th>比較項目</th><th>電子書籍</th><th>紙の全巻セット</th></tr>
            </thead>
            <tbody>
              <tr><td>置き場所</td><td>不要</td><td>必要</td></tr>
              <tr><td>読み始め</td><td>購入後すぐ</td><td>配送後</td></tr>
              <tr><td>持ち運び</td><td>しやすい</td><td>冊数が多い</td></tr>
              <tr><td>コレクション性</td><td>低め</td><td>高い</td></tr>
              <tr><td>売却</td><td>基本不可</td><td>可能な場合あり</td></tr>
              <tr><td>価格・還元</td><td>変動</td><td>価格・送料が変動</td></tr>
            </tbody>
          </table>
        </div>
        <div className="product-box-grid">
          {bookwalkerOffer && (
            <AffiliateProductBox
              provider={bookwalkerOffer.provider}
              name={bookwalkerOffer.serviceName}
              note="電子書籍で単巻から確認できます。価格やキャンペーン条件はリンク先で確認してください。"
              ctaLabel={bookwalkerOffer.ctaLabel}
              ctaHref={bookwalkerOffer.href}
              imageSrc={bookwalkerOffer.imageSrc}
              disclosure={bookwalkerOffer.disclosure}
              offerType={bookwalkerOffer.offerType}
              serviceName={bookwalkerOffer.serviceName}
              placement="comparison"
              affiliateProgram={bookwalkerOffer.programName}
            />
          )}
          {mangazenkanOffer && (
            <AffiliateProductBox
              provider={mangazenkanOffer.provider}
              name={mangazenkanOffer.serviceName}
              note="無印14巻＋:re16巻の本編全30冊セットです。価格・在庫・送料はリンク先で確認してください。"
              ctaLabel={mangazenkanOffer.ctaLabel}
              ctaHref={mangazenkanOffer.href}
              imageSrc={mangazenkanOffer.imageSrc}
              disclosure={mangazenkanOffer.disclosure}
              offerType={mangazenkanOffer.offerType}
              serviceName={mangazenkanOffer.serviceName}
              placement="comparison"
              affiliateProgram={mangazenkanOffer.programName}
            />
          )}
          {rentaOffer && (
            <AffiliateProductBox
              provider={rentaOffer.provider}
              name={rentaOffer.serviceName}
              note="ポイント購入で単巻から読める電子書籍サービスです。価格やキャンペーン条件はリンク先で確認してください。"
              ctaLabel={rentaOffer.ctaLabel}
              ctaHref={rentaOffer.href}
              imageSrc={rentaOffer.imageSrc}
              disclosure={rentaOffer.disclosure}
              offerType={rentaOffer.offerType}
              serviceName={rentaOffer.serviceName}
              placement="comparison"
              affiliateProgram={rentaOffer.programName}
            />
          )}
        </div>

        <h2>電子書籍で読むならBOOK☆WALKERやRenta</h2>
        <p>
          BOOK☆WALKERでは、確認時点で『東京喰種トーキョーグール』全14巻と『東京喰種トーキョーグール:re』全16巻の電子書籍を取り扱っています。単巻で購入でき、シリーズページから各巻を確認できます。Rentaでも同作品をポイント購入で単巻から読めます。
        </p>
        <p>価格やキャンペーン条件は変動するため、最新情報はリンク先で確認してください。</p>

        <h2>紙で本編全30巻をそろえる選択肢</h2>
        <p>
          紙で本編をまとめる場合は、無印14巻と:re16巻の合計30巻が基準です。漫画全巻ドットコムでは、確認時点で本編全30冊セットの取扱いを確認しました。
        </p>
        <p>
          楽天市場やYahoo!ショッピングにも新品・中古の商品がありますが、価格・在庫・送料は変動します。レンタル落ち、DVD、収納箱、資料集、関連書籍込みのセットを本編30巻と間違えないよう、商品名と内訳を確認してください。
        </p>

        <h2>楽天市場・Yahoo!ショッピングでも比較できる</h2>
        <p>販売店や商品の状態を比較したい場合は、検索結果から「無印14巻＋:re16巻」の本編全30巻であることを確認してください。</p>
        <div className="product-box-grid">
          {rakutenOffer && (
            <AffiliateProductBox
              provider={rakutenOffer.provider}
              name={rakutenOffer.serviceName}
              note="検索結果には関連商品も含まれます。本編全30巻か、商品内訳を確認してください。"
              ctaLabel={rakutenOffer.ctaLabel}
              ctaHref={rakutenOffer.href}
              imageSrc={rakutenOffer.imageSrc}
              disclosure={rakutenOffer.disclosure}
              offerType={rakutenOffer.offerType}
              serviceName={rakutenOffer.serviceName}
              placement="conclusion"
              affiliateProgram={rakutenOffer.programName}
            />
          )}
          {yahooOffer && (
            <AffiliateProductBox
              provider={yahooOffer.provider}
              name={yahooOffer.serviceName}
              note="検索結果には関連商品も含まれます。本編全30巻か、商品内訳を確認してください。"
              ctaLabel={yahooOffer.ctaLabel}
              ctaHref={yahooOffer.href}
              imageSrc={yahooOffer.imageSrc}
              disclosure={yahooOffer.disclosure}
              offerType={yahooOffer.offerType}
              serviceName={yahooOffer.serviceName}
              placement="conclusion"
              affiliateProgram={yahooOffer.programName}
            />
          )}
        </div>

        <h2>よくある質問</h2>
        <div className="machine-faq-list">
          {faq.map((item) => (
            <details className="machine-faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <h2>まとめ</h2>
        <ul>
          <li>読む順番は無印全14巻から:re全16巻</li>
          <li>本編は合計30巻で完結</li>
          <li>アニメ視聴済みでも、無印1巻から読むと流れを追いやすい</li>
          <li>すぐ読みたい場合は電子書籍、手元に並べたい場合は紙など、用途に合わせて選ぶ</li>
        </ul>

        <div className="article-link-box">
          <p>
            この記事は原作漫画の案内です。遊技情報は、
            <Link href="/machines/tokyo-ghoul">スマスロ東京喰種のリセット・やめどき情報を見る</Link>
            で確認できます。
          </p>
          <ul>
            <li><Link href="/articles/tokyo-ghoul-trophy-misugoshi">東京喰種の実践記録｜トロフィーを確認できなかった日の反省</Link></li>
            <li><Link href="/machines">機種一覧を見る</Link></li>
          </ul>
        </div>

        <section className="card" aria-labelledby="references-heading">
          <h2 id="references-heading">参考情報</h2>
          <p>広告リンクとは別に、巻数・作品情報・アニメスタッフ情報を次の公式ページで確認しました。</p>
          <ul>
            <li><a href="https://www.s-manga.net/items/contents.html?isbn=978-4-08-890031-5" target="_blank" rel="noopener noreferrer">集英社コミック公式 S-MANGA｜東京喰種トーキョーグール 14</a></li>
            <li><a href="https://www.s-manga.net/items/contents.html?isbn=978-4-08-891050-5" target="_blank" rel="noopener noreferrer">集英社コミック公式 S-MANGA｜東京喰種トーキョーグール:re 16</a></li>
            <li><a href="https://www.marv.jp/special/tokyoghoul/first/staff.html" target="_blank" rel="noopener noreferrer">TVアニメ『東京喰種トーキョーグール』公式｜スタッフ情報</a></li>
            <li><a href="https://bookwalker.jp/series/12565/" target="_blank" rel="noopener noreferrer">BOOK☆WALKER｜東京喰種トーキョーグール シリーズ</a></li>
            <li><a href="https://www.mangazenkan.com/items/10484737/" target="_blank" rel="noopener noreferrer">漫画全巻ドットコム｜東京喰種 本編全30冊セット</a></li>
          </ul>
        </section>

        <ShareButtons url={url} title={title} />
        <Comments slug="tokyo-ghoul-manga-reading-order" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
