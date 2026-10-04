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
  "スマスロ獣王、設定変更で天井は599G＋αに短縮｜導入日に分かっていること整理";
const description =
  "2026年10月5日導入のスマスロ獣王は、通常時の天井が999G＋α、設定変更時は599G＋αに短縮されサバ連に突入するまで継続するとちょんぼりすたが掲載しています。Xでも「新台期間は拾えそう」との声が出ています。導入日時点の情報を整理しました。";
const url = `${SITE_URL}/articles/juoh-tenjo-setting-change-sns-topic`;
const heroImage = "/images/articles/juoh-se-sns-topic.png";
const publishedAt = "2026-10-03";

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

export default function JuohTenjoSettingChangeSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/juoh-tenjo-setting-change-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロ獣王の天井・設定変更に関する話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年10月5日に導入されたスマスロ獣王について、解析サイト「ちょんぼりすた」は、通常時の天井を999G＋α、設定変更時は599G＋αに短縮され、サバ連に突入するまで短縮が継続すると掲載しています（2026年9月28日更新、情報出所は「公式スペック＆解析」）。
          Xでも「設定後599＋αでサバ連入るまで継続？ 新台期間は結構拾えそう」という投稿が1.3万表示を集めています。
        </p>

        <h2>ちょんぼりすた掲載の天井・リセット情報</h2>
        <ul>
          <li>通常時の天井：999G＋α（到達でAT「サバンナチャンス」に当選）</li>
          <li>設定変更時：天井が599G＋αに短縮され、サバ連に突入するまで継続</li>
          <li>設定変更で天井・内部状態はリセット、電源OFF→ONのみの場合は引き継ぎ</li>
          <li>設定変更時のステージ挙動は調査中</li>
          <li>やめどき：AT後の潜伏（29G）を確認してやめ推奨</li>
        </ul>
        <p className="section-note">
          上記はちょんぼりすたの掲載内容です。メーカー公式ページには天井に関する記載がなく、解析サイトによっては「調査中」の表記も見られます。導入後に情報が更新される可能性があります。
        </p>

        <h2>Xの反応：「新台期間は結構拾えそう」</h2>
        <p>
          このスペックに対し、Xでは「来週導入の新台はみんな設定変更後に何かしら恩恵がある」「新台期間は拾えそう」といった期待の声が見られます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/tqkq2580/status/2105950380182090022"
          authorName="たかどら"
        />
        <p className="section-note">
          この投稿は投稿者個人の見立てです。
        </p>

        <h2>その他の分かっていること</h2>
        <ul>
          <li>導入日は2026年10月5日、メーカーはサミー。機械割は設定1の97.8%から設定6の114.3%</li>
          <li>AT「サバンナチャンス」の初当り確率は設定1が1/326.5、設定6が1/279.7、純増は約8.0枚/G</li>
          <li>設定Lを搭載し、下パネルが常時明滅するとちょんぼりすたでは紹介されています</li>
        </ul>

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
                  2026年10月5日導入予定であること／機械割・初当り確率・AT純増などの基本スペック／ちょんぼりすたが天井999G＋α・設定変更後599G＋αと掲載していること／Xでこの天井短縮を話題にする投稿が出ていること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  メーカー公式ページでの天井の記載、設定変更時のステージ挙動、朝一0Gの期待値、有効なリセット判別方法
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          設定変更で天井が599G＋αに短縮されるなら、新台期間の朝一は気になるところだワン🐶 ただ、導入後に情報が更新されることもあるから、最新の解析をチェックしながら立ち回ってね。
        </p>
        <p>
          みんなは、獣王の初日、朝イチから狙ってみる？それとも様子見する？
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
            獣王の朝イチ・リセット情報は、
            <Link href="/machines/juoh">スマスロ獣王の機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li>
              <Link href="/articles/juoh-se-sns-topic">公式試打動画にサバチャン突入音への声も｜超サバのレインボー演出には称賛</Link>
            </li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>


        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・解析サイトを参考に作成しました。埋め込みポストの内容は投稿者個人の見解であり、メーカー公式の発表ではありません。解析サイトの内容も公式情報ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/tqkq2580/status/2105950380182090022"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              たかどら（天井短縮に言及した投稿）
            </a>
          </li>
          <li>
            <a
              href="https://chonborista.com/slot/sammy-slot/263920/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ちょんぼりすた：獣王 スマスロ 解析まとめ（9/28更新・公式情報ではありません）
            </a>
          </li>
          <li>
            <a
              href="https://www.sammy.co.jp/japanese/product/pachislot/sp_jyu_oh/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              サミー公式：スマスロ獣王
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
