import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL, buildAmazonSearchUrl } from "@/lib/site";

const title = "朝一待ち・実戦に便利な持ち物まとめ";
const description =
  "朝一の開店待ちや長時間の実戦で役立つ持ち物を、初心者向けに種類ごとに整理したまとめです。";
const url = `${SITE_URL}/articles/asaichi-benri-guzzu`;

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

type ProductItem = {
  name: string;
  note: string;
  searchKeyword: string;
};

const categories: { title: string; description: string; items: ProductItem[] }[] = [
  {
    title: "開店待ちで役立つもの",
    description: "早朝からの並び・待機時間を少しでも快適にするための基本装備です。",
    items: [
      {
        name: "防寒インナー・使い捨てカイロ",
        note: "早朝の屋外待機は想像以上に体が冷えます。特に冬場は、体を冷やさない備えが最優先です。",
        searchKeyword: "防寒インナー 使い捨てカイロ",
      },
      {
        name: "折りたたみ椅子・レジャーシート",
        note: "整列時間が長い店舗では、立ちっぱなしが負担になります。持ち運びやすい軽量タイプが便利です。",
        searchKeyword: "折りたたみ椅子 レジャーシート",
      },
    ],
  },
  {
    title: "長時間の実戦で役立つもの",
    description: "座席に着いてからの時間を、無理なく過ごすための持ち物です。",
    items: [
      {
        name: "遮音タイプの耳栓",
        note: "店内の音量は長時間だと負担になりやすいため、遮音性のある耳栓を使う人が多いです。",
        searchKeyword: "耳栓 遮音",
      },
      {
        name: "大容量モバイルバッテリー",
        note: "ゲーム数の記録や情報サイトの確認でスマートフォンを長時間使う場合、バッテリー切れ対策が必要です。",
        searchKeyword: "モバイルバッテリー 大容量",
      },
    ],
  },
  {
    title: "記録・確認まわりで役立つもの",
    description: "台の状況を見落とさないための、地味だが重要な持ち物です。",
    items: [
      {
        name: "小型メモ帳・筆記用具",
        note: "前日最終ゲーム数や当日の履歴をその場でメモしておくと、判断の見直しがしやすくなります。",
        searchKeyword: "小型メモ帳 筆記用具",
      },
      {
        name: "カチカチくん（小役カウンター）",
        note: "スイカ・チェリー・ベルなどの小役成立回数を手持ちで数えられるカウンターです。詳しい使い方や選び方は下記の個別記事もご覧ください。",
        searchKeyword: "カチカチくん",
      },
      {
        name: "除菌シート・手指消毒",
        note: "台や椅子に触れる機会が多いため、衛生面のケアも準備しておくと安心です。",
        searchKeyword: "除菌シート 携帯用",
      },
    ],
  },
];

export default function AsaichiBenriGuzzuArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/asaichi-benri-guzzu" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>導入</h2>
        <p>
          朝一狙いは、開店前の待機から実戦終了まで拘束時間が長くなりがちです。
          このページでは、判別や立ち回りそのものではなく、当日を快適に・安全に過ごすための持ち物を種類ごとに整理します。
        </p>
        <p>
          紹介する持ち物は、特定の勝ち方や結果を保証するものではありません。あくまで実戦時の負担を減らすための参考情報です。
        </p>

        <h2>種類別に確認する</h2>
        {categories.map((category) => (
          <section className="article-category" key={category.title}>
            <h2>{category.title}</h2>
            <p className="section-note">{category.description}</p>
            <div className="product-box-grid">
              {category.items.map((item) => (
                <AffiliateProductBox
                  key={item.name}
                  provider="Amazon"
                  name={item.name}
                  note={item.note}
                  ctaLabel="Amazonで探す"
                  ctaHref={buildAmazonSearchUrl(item.searchKeyword)}
                />
              ))}
            </div>
            {category.title === "記録・確認まわりで役立つもの" && (
              <p className="section-note">
                カチカチくんの使い方や選び方は、
                <Link href="/articles/kachikachi-kun">カチカチくん（小役カウンター）とは？使う場面と選び方</Link>
                で詳しく解説しています。
              </p>
            )}
          </section>
        ))}

        <div className="article-link-box">
          <p>
            機種ごとの朝一リセット恩恵や判別のポイントは、
            <Link href="/machines">機種一覧</Link>から確認してください。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link></li>
            <li><Link href="/line/checklist">朝一リセット狙い 初心者チェックリスト</Link></li>
          </ul>
        </div>

        <h2>注意点</h2>
        <ul>
          <li>掲載内容は一般的な準備の参考情報であり、遊技結果を保証するものではありません。</li>
          <li>店舗によっては持ち込みが制限される物がある場合があります。事前にルールを確認してください。</li>
          <li>無理な投資や長時間の連続実戦は避け、体調を優先してください。</li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
