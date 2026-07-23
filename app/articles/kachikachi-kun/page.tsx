import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL, buildAmazonSearchUrl } from "@/lib/site";

const title = "カチカチくんとは？小役カウンターの使う場面・選び方";
const description =
  "パチスロの実戦で使われる手持ちの小役カウンター「カチカチくん」について、何を数える道具なのか、スマホアプリとの違い、使う場面や注意点を初心者向けに整理しました。";
const url = `${SITE_URL}/articles/kachikachi-kun`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
  },
};

type CheckPoint = {
  title: string;
  note: string;
};

const checkPoints: CheckPoint[] = [
  {
    title: "桁数（2桁〜4桁）",
    note: "1回のゲームで数える回数の目安に応じて、必要な桁数は変わります。用途に合う桁数を確認します。",
  },
  {
    title: "音の有無",
    note: "ホール内での使用を考えると、無音または静音タイプの方が周囲への配慮になります。",
  },
  {
    title: "リセットボタンの位置・押しやすさ",
    note: "台を移動するときや記録を区切るときにリセットするため、誤操作しにくい位置にボタンがあるかを確認します。",
  },
  {
    title: "携帯性（クリップ・ストラップ）",
    note: "台に固定できるクリップ付きや、手首に掛けられるストラップ付きだと、押しやすさが変わります。",
  },
];

export default function KachikachiKunArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/kachikachi-kun" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>カチカチくんとは</h2>
        <p>
          カチカチくんとは、ボタンを押すごとに数字が1つずつ増える手持ち式のカウンター（ハンドタリー）のことです。
          特定のメーカー品を指す場合もあれば、同種の手持ちカウンター全般を指す呼び方として使われている場合もあります。
        </p>
        <p>
          パチスロの実戦では、台のゲーム数そのものではなく、スイカ・チェリー・ベルといった小役の成立回数を数える用途で使われることが多い道具です。
          このページでは、何を数える道具なのか、スマホアプリとの違い、使う場面や注意点を整理します。
        </p>

        <h2>何を数える道具なのか</h2>
        <p>
          カチカチくんは基本的に、狙った小役（スイカ・チェリー・ベルなど）が成立した回数を、打ちながら手元でカウントするための道具です。
          小役の成立回数は、設定推測や実戦を続けるかどうかを考える際の参考情報として扱われることがあります。
        </p>
        <p>
          ただし、小役カウントの数値だけで設定や内部状態が確定するわけではありません。あくまで判断材料の一つとして扱われている情報です。
        </p>

        <h2>スマホアプリとの違い</h2>
        <p>
          小役カウントは、スマートフォンの専用アプリでも記録できます。カチカチくんのような手持ち式カウンターは、
          画面を見ずにワンプッシュで操作できる点が特徴です。台からスマートフォンを持ち上げたり画面を確認したりする動作を減らしたい場合に選ばれています。
        </p>
        <p>
          一方でスマホアプリは、複数の小役を同時に管理できたり、記録をあとから見返しやすかったりする場合があります。
          どちらが向いているかは、実戦スタイルや管理したい項目数によって変わります。
        </p>

        <h2>使う場面</h2>
        <ul>
          <li>特定の小役（スイカ・チェリー・ベルなど）の成立回数を、打ちながら数えたい場面</li>
          <li>台の性能表に記載されている確率と、自分の実戦データを見比べたい場面</li>
          <li>画面を見ずに操作したい、片手だけで数を数えたい場面</li>
        </ul>

        <h2>具体例：モンキーターンVの5枚役を数える</h2>
        <p>
          カチカチくんが実際に使われる例として、スマスロモンキーターンVの「5枚役」があります。5枚役は通常時・AT中を問わず成立する小役で、
          出現回数を数えておくと、実戦を続けるかどうかを考える際の参考情報を一つ増やせます。
        </p>
        <p>
          設定差の考え方、総ゲーム数を使った出現率の計算方法、途中からカウントした場合の計算などは、
          <Link href="/articles/monkey-turn-v-5mai-yaku">モンキーターンVの5枚役の設定差・数え方・計算方法を詳しく見る</Link>
          で詳しく解説しています。
        </p>

        <h2>向いている人</h2>
        <ul>
          <li>小役カウントを日常的に行っており、スマートフォンの操作を減らしたい人</li>
          <li>台のデータ表示に出ない情報を、自分の記録として残しておきたい人</li>
          <li>まずは無理のない範囲で、実戦データの記録を試してみたい人</li>
        </ul>

        <h2>選び方のポイント</h2>
        <div className="product-box-grid">
          {checkPoints.map((point) => (
            <div className="article-machine-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.note}</p>
            </div>
          ))}
        </div>

        <div className="product-box-grid">
          <AffiliateProductBox
            provider="Amazon"
            name="カチカチくん（小役カウンター）"
            note="価格・在庫・レビュー内容は変動するため、購入前に商品ページで最新情報をご確認ください。"
            ctaLabel="Amazonで探す"
            ctaHref={buildAmazonSearchUrl("カチカチくん")}
          />
        </div>

        <h2>使用時の注意点</h2>
        <ul>
          <li>小役カウンターは、勝敗や利益を保証する道具ではありません。あくまで記録・確認のための補助です。</li>
          <li>
            小役の成立回数は設定判別の参考にされることがありますが、カウントした回数だけで設定や内部状態が確定するわけではありません。
          </li>
          <li>店舗によっては、カウンター等の使用について独自のルールがある場合があります。周囲への配慮も含めて事前に確認してください。</li>
        </ul>

        <div className="article-link-box">
          <p>
            朝一の判別や狙い目については、
            <Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link>も参考にしてください。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link></li>
            <li><Link href="/machines">機種一覧</Link></li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
