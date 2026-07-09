import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { A8_SLOT_URL, SITE_URL } from "@/lib/site";

const title = "家スロ（家庭用実機）の選び方｜購入前に確認したいポイント";
const description =
  "自宅でパチスロを楽しむ家庭用実機（家スロ）を選ぶ際に、購入前に確認しておきたいポイントを初心者向けに整理しました。";
const url = `${SITE_URL}/articles/ie-suro-erabikata`;

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
    title: "電源方式・電圧",
    note: "業務用のまま100Vに非対応な個体もあります。家庭用に電源が改造・対応済みかを必ず確認します。",
  },
  {
    title: "音量調整機能の有無",
    note: "集合住宅では特に重要です。音量を絞れる、またはヘッドホン端子がある個体だと扱いやすくなります。",
  },
  {
    title: "サイズ・重量・設置スペース",
    note: "実機は想像より大きく重い場合が多いため、搬入経路と設置スペースを事前に採寸しておきます。",
  },
  {
    title: "動作確認・保証の有無",
    note: "中古が中心のジャンルです。動作確認済みか、初期不良時の保証があるかを購入前に確認します。",
  },
  {
    title: "コイン・メダルの扱い",
    note: "家庭で遊ぶ場合、コインは景品や換金とは切り離した、単なる遊技用トークンとして扱う前提で検討します。",
  },
  {
    title: "ROM・設定の状態",
    note: "設定変更ができる個体か、固定されているかで遊び方が変わります。出品ページの記載をよく確認します。",
  },
];

export default function IeSuroErabikataArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/ie-suro-erabikata" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>家スロとは</h2>
        <p>
          家スロ（家庭用実機）とは、ホールで使われていたパチスロ実機を、自宅で電源につないで動かせるようにした個体のことです。
          金銭のやり取りを伴わない、純粋な趣味・コレクションとしての楽しみ方が中心になります。
        </p>
        <p>
          このページでは、初めて家スロの購入を検討する人向けに、機種選びそのものではなく、
          購入前に確認しておきたいチェックポイントを整理します。
        </p>

        <h2>購入前に確認したいポイント</h2>
        <div className="product-box-grid">
          {checkPoints.map((point) => (
            <div className="article-machine-card" key={point.title}>
              <h3>{point.title}</h3>
              <p>{point.note}</p>
            </div>
          ))}
        </div>

        <h2>購入先を選ぶときの考え方</h2>
        <p>
          家スロは個人売買よりも、動作確認や保証を明示している専門販売店を通す方が、初心者にとってはトラブルが少なくなります。
          販売店ごとに保証期間や搬入サポートの内容が異なるため、条件を比較してから検討してください。
        </p>
        <div className="product-box-grid">
          <AffiliateProductBox
            provider="A8.net"
            name="家庭で楽しめる中古スロット【A-SLOT】"
            note="動作確認・保証内容・搬入サポートの有無を、販売店ごとに比較してから検討することをおすすめします。"
            ctaLabel="A-SLOTを見る"
            ctaHref={A8_SLOT_URL}
          />
        </div>

        <div className="article-link-box">
          <p>
            機種ごとの朝一リセット恩恵や判別のポイントは、
            <Link href="/machines">機種一覧</Link>から確認してください。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link></li>
          </ul>
        </div>

        <h2>注意点</h2>
        <ul>
          <li>掲載内容は一般的な購入検討の参考情報であり、特定の販売店や個体の状態を保証するものではありません。</li>
          <li>集合住宅では、音量・振動・搬入経路について事前に規約を確認してください。</li>
          <li>コインの扱いは、金銭のやり取りを伴わない趣味利用の範囲にとどめてください。</li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
