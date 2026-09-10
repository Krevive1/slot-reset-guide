import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title = "L見える子ちゃん、弱レア役CZに最大3倍差｜終了画面にも設定4以上・設定6濃厚パターン";
const description =
  "パチスロ見える子ちゃんで、通常時の弱レア役からのCZ当選率に設定1と設定6で3倍の差があるとする解析情報を、すろぱちくえすと・一撃の両サイトで確認しました。ボーナス終了画面の設定示唆パターンとあわせて、確認できていること・まだ確認できていないことを整理しました。";
const url = `${SITE_URL}/articles/mieruko-chan-cz-rate-setting-diff`;
const heroImage = "/images/articles/mieruko-chan-cz-rate-setting-diff.png";
const publishedAt = "2026-09-10";

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

export default function MierukoChanCzRateSettingDiffPage() {
  const jinsOffer = getActiveAffiliateOffer("jinsScreen");
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/mieruko-chan-cz-rate-setting-diff" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="パチスロ見える子ちゃんのイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年9月7日に導入されたパチスロ見える子ちゃんについて、通常時の弱レア役からのCZ当選率に設定差があるとする解析情報を、すろぱちくえすと・一撃の両サイトで確認しました。
          この記事では、その数値とボーナス終了画面の設定示唆パターンを整理し、実戦でどう扱うべきかをまとめます。
        </p>
        <p>
          先に結論を言うと、<strong>この数値だけで設定を判別できるとまでは言えません</strong>。差自体は明確ですが、そもそもの発生率が低いため、他の要素と組み合わせて見る材料の一つとして捉えるのが適切です。
        </p>

        <h2>今回確認できた設定差：弱レア役からのCZ当選率</h2>
        <p>
          通常時に弱レア役（原文の表記に準拠）が成立した際のCZ当選率について、すろぱちくえすと・一撃の双方で同一の数値が確認できました。
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>設定</th>
                <th>弱レア役からのCZ当選率</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>設定1</td>
                <td>0.4%</td>
              </tr>
              <tr>
                <td>設定6</td>
                <td>1.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>設定1の0.4%に対して設定6は1.2%で、最大約3倍の差があります。</p>

        <h2>実戦でどう見るべきか</h2>
        <ul>
          <li>設定1と6の差自体は3倍と大きく見えますが、当選率そのものが1%前後と低いため、短時間・少サンプルでは実感しにくい差です。</li>
          <li>この数値単体で「設定6が分かる」と読むのは早計です。あくまで他の判別要素と合わせて見る補助材料として扱うのが安全です。</li>
          <li>今回確認した2サイトでは、設定2〜5の具体的なCZ当選率は確認できず、設定1・6以外は解析待ちです。</li>
        </ul>

        <h2>ボーナス終了画面の設定示唆パターン</h2>
        <p>
          あわせて、ボーナス終了画面にも設定示唆があるとする解析情報が確認できています。
        </p>
        <ul>
          <li>紫エフェクトの画面：設定4以上濃厚</li>
          <li>最高示唆にあたる画面（2種）：設定6濃厚</li>
        </ul>
        <p>
          ここでの「濃厚」は解析サイトの表記に準拠したもので、「確定」ではありません。設定4以上・設定6を断定する情報ではない点にご注意ください。
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
                <td>両サイトで同一内容を確認</td>
                <td>弱レア役からのCZ当選率（設定1：0.4%、設定6：1.2%）、終了画面の設定示唆パターン</td>
              </tr>
              <tr>
                <td>未確認事項</td>
                <td>設定2〜5の具体的な数値、メーカー公式による裏付け、実戦での判別力の検証データ</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          いずれもメーカー公式の解析情報ではなく、解析サイトが独自調査として掲載している非公式の参考情報です。両サイトとも自社調査である旨を明記しています。
          両サイトで同一内容が掲載されていますが、元データや調査経路が独立しているかまでは確認できていません。
        </p>

        <h2>ワンチャンくんの見解</h2>
        <p>
          弱レア役からのCZ当選率の差は、単独の看破要素というより、終了画面の示唆など他の情報と組み合わせて使う追加材料と捉えるのがよさそうです。
          特に終了画面の強めの示唆（紫エフェクト・最高示唆2種）は、成立すれば実戦上の価値が高い情報です。
          新しい判別要素や詳細な数値が判明した場合は、このページを更新します。
        </p>

        {jinsOffer && (
          <div className="product-box-grid">
            <AffiliateProductBox
              provider={jinsOffer.provider}
              name={jinsOffer.serviceName}
              note={jinsOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={jinsOffer.ctaLabel}
              ctaHref={jinsOffer.href}
              disclosure={jinsOffer.disclosure}
              offerType={jinsOffer.offerType}
              serviceName={jinsOffer.serviceName}
              placement="mid_article"
              affiliateProgram={jinsOffer.programName}
            />
          </div>
        )}

        <div className="article-link-box">
          <p>
            見える子ちゃんの朝イチ・天井情報は、
            <Link href="/machines/mieruko-chan">パチスロ見える子ちゃんの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事の作成にあたり、以下の解析サイトを参照しました。いずれもメーカー公式情報ではなく、各サイトの自社調査による非公式の参考情報です。
        </p>
        <ul>
          <li>
            <a
              href="https://www.slopachi-quest.com/article/mierukochan-settei/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              すろぱちくえすと（CZ当選率・終了画面の設定示唆）
            </a>
          </li>
          <li>
            <a href="https://1geki.jp/slot/l_mierukochan/0/" target="_blank" rel="noopener noreferrer nofollow">
              一撃（同数値・終了画面情報の確認）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
