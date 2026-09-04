import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "モンキーターンVの激走チャージEXアイテムとは？弱レア役からの獲得率に設定差";
const description =
  "スマスロモンキーターンVの激走チャージ中に成立するレア役から、EXアイテムを獲得できるかどうかに設定差があるとされています。ボート・弱チェリーなど弱レア役からの獲得率を中心に、非公式に流通している設定別参考値を整理しました。";
const url = `${SITE_URL}/articles/monkey-turn-v-ex-item-rate`;
const heroImage = "/images/articles/monkey-turn-v-ex-item-rate.png";
const publishedAt = "2026-09-04";

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

const exItemTable: { setting: string; weak: string; weakChance: string; strongChance: string; strongCherry: string }[] = [
  { setting: "設定1", weak: "25.0%", weakChance: "31.3%", strongChance: "50.0%", strongCherry: "100%" },
  { setting: "設定2", weak: "26.2%", weakChance: "32.0%", strongChance: "50.8%", strongCherry: "100%" },
  { setting: "設定4", weak: "32.8%", weakChance: "37.5%", strongChance: "58.6%", strongCherry: "100%" },
  { setting: "設定5", weak: "39.1%", weakChance: "40.6%", strongChance: "62.5%", strongCherry: "100%" },
  { setting: "設定6", weak: "43.0%", weakChance: "46.9%", strongChance: "66.4%", strongCherry: "100%" },
];

export default function MonkeyTurnVExItemRateArticlePage() {
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monkey-turn-v-ex-item-rate" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="モンキーターンVの激走チャージEXアイテムのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <h2>激走チャージ・EXアイテムとは</h2>
        <p>
          激走チャージは、スマスロモンキーターンVの通常時に発生するチャージ状態で、規定ゲーム数の消化やチャンス役の成立などを経て、
          ポイントを貯めていく仕組みです。このチャージ中にボート・弱チェリー・弱チャンス目・強チャンス目・強チェリーといったレア役が成立すると、
          そのたびに「EXアイテム」と呼ばれるアイテムを獲得できるかどうかの抽選が行われます。
        </p>

        <h2>なぜ設定推測の参考になるのか</h2>
        <p>
          EXアイテムを獲得できるかどうかの抽選は、レア役の種類によって当選率が異なります。中でも強チェリーはほぼ確定でEXアイテムを獲得できるとされていますが、
          ボート・弱チェリー・弱チャンス目・強チャンス目といった、より出現頻度の高いレア役については、設定によって獲得率が異なるとされています。
          出現頻度が高い分、実戦の中で複数回の成立を確認しやすく、設定推測の材料の一つとして使われています。
        </p>

        <h2>非公式に流通している設定別参考値</h2>
        <p className="section-note">
          以下はメーカー公式の公表値ではなく、解析情報サイトが独自調査として公開している非公式の参考値です。複数サイトで同じ形式の数値が確認できますが、
          各サイトとも「自社調査」である旨を明記しており、メーカー（YAMASA）による正式な数値ではない点にご注意ください。
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>設定</th>
                <th>ボート／弱チェリー</th>
                <th>弱チャンス目</th>
                <th>強チャンス目</th>
                <th>強チェリー</th>
              </tr>
            </thead>
            <tbody>
              {exItemTable.map((row) => (
                <tr key={row.setting}>
                  <td>{row.setting}</td>
                  <td>{row.weak}</td>
                  <td>{row.weakChance}</td>
                  <td>{row.strongChance}</td>
                  <td>{row.strongCherry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="section-note">この機種には設定3が存在しません。</p>
        <p>
          特にボート・弱チェリーからの獲得率は、設定1の25.0%に対し設定6は43.0%と、1.7倍以上の開きがあります。強チェリーは全設定で獲得率100%とされているため、
          設定推測の材料としては、出現頻度が高く設定差も大きいボート・弱チェリー・弱チャンス目からの獲得状況が参考にされやすい傾向にあります。
        </p>

        <h2>この数値だけで設定を断定しない注意点</h2>
        <ul>
          <li>上記の数値はメーカー公式の公表値ではなく、複数サイトの独自調査による非公式情報です。</li>
          <li>激走チャージ中のレア役成立回数自体が少ない場合、獲得率が理論値から大きく偏ることがあります。</li>
          <li>EXアイテムの獲得有無だけで設定を断定せず、天井短縮や終了画面など他の情報とあわせて判断してください。</li>
        </ul>

        <div className="article-link-box">
          <p>
            モンキーターンVの朝イチリセット恩恵や天井については、
            <Link href="/machines/monkey-turn-v">スマスロモンキーターンVの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/articles/monkey-turn-v-5mai-yaku">モンキーターンVの5枚役とは？設定差・数え方・計算方法</Link></li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          設定別参考値の調査にあたり、以下のページを確認しました。いずれもメーカー公式情報ではなく、解析情報サイトによる非公式の参考情報です。
        </p>
        <ul>
          <li>
            <a href="https://1geki.jp/slot/l_monkeyturn5/50/" target="_blank" rel="noopener noreferrer">
              一撃：激走チャージ終了時の示唆とチャージ間天井・獲得ポイント・EXアイテム当選率
            </a>
            （メーカー公式情報ではありません）
          </li>
          <li>
            <a
              href="https://muchiboku.blog/2026/01/27/%E3%80%90%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E3%83%A2%E3%83%B3%E3%82%AD%E3%83%BCv%E3%80%91%E6%BF%80%E8%B5%B0%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8%E4%B8%AD%E3%81%AE%E8%A8%AD%E5%AE%9A%E5%B7%AE%E3%81%8C/"
              target="_blank"
              rel="noopener noreferrer"
            >
              あかべこ日記：激走チャージ中の設定差についての考察
            </a>
            （メーカー公式情報ではありません）
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
