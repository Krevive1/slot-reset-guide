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
  "獣王「設定6でも大きく沈む」実戦報告が話題｜“冷遇”説はどこまで確認できる？";
const description =
  "2026年10月11〜12日、スマスロ獣王の設定6とする実戦報告がXで約37万〜42万表示を集めました。「逆万枚」「7〜8000ゲームの冷遇」といった投稿者の表現と、確認できていること・できていないことを、個人の報告として整理しました。";
const slug = "juoh-setting6-sinking-sns-topic";
const url = `${SITE_URL}/articles/${slug}`;
const heroImage = `/images/articles/${slug}.png`;
const publishedAt = "2026-10-12";

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

export default function JuohSetting6SinkingSnsTopicPage() {
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: `/articles/${slug}` }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロ獣王の設定6の実戦報告を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          スマスロ獣王について、「設定6」とする台で出玉が大きく沈んだという実戦報告が、2026年10月11日〜12日にXで広がりました。
          2つの投稿はそれぞれ約37万〜42万表示、いいねは1,400件を超えています。
        </p>
        <p>
          <strong>
            これらは投稿者個人による実戦報告であり、メーカー公式の情報でも、機種の仕様として確認された内容でもありません。
          </strong>
          本稿では、投稿内容と反応、そして当サイトで確認できている獣王の設定差の情報を分けて整理します。
        </p>

        <h2>「設定6で逆万枚」「7〜8000ゲームの冷遇」とする2つの投稿</h2>
        <p>
          1つ目は、わしょう（@washo613）さんの10月12日朝の投稿です。「L獣王の設定6、完全無慈悲挙動で逆万枚を達成してしまう」と紹介し、
          「トロフィー表示バグ？」「もはやパチスロではない」といった反応を引用しています。
          投稿には画像が添付されていますが、本文には具体的な枚数や投資額は書かれていません。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/washo613/status/2109456416440508724"
          authorName="わしょう"
        />
        <p>
          2つ目は、マナリュー（@ManaryuShin）さんの10月11日夜の投稿です。「L獣王設定6の一万回転の実戦データ参考にして下さい」としたうえで、
          「7〜8000ゲームの冷遇を耐え抜けば謎高確でポンポン当たります」「冷遇の時はチャンス目重ねて引こうが何も起こりません」と書いています。
          「皆さんは真似しないように」との注意書きもあり、こちらも画像つきの投稿です。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/ManaryuShin/status/2109278627783389635"
          authorName="マナリュー"
        />

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
                  設定6とする獣王の実戦報告が2026年10月11日〜12日にXで投稿され、それぞれ約37万・約42万表示を集めていること／投稿に画像が添付されていること／獣王には初当り確率や謎高確など、設定差のある要素が公開情報として存在すること
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  実際にその台が設定6だったか／「逆万枚」の正確な収支／7〜8000ゲームの低迷が機種の仕様によるものか、偏りによるものか／メーカー公式の見解
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          投稿の数値や表現は投稿者によるもので、当サイトでは設定確認画面や全実戦データを独自に検証していません。本文にない投資額・回収額・差枚を推測して補うことは行っていません。
        </p>

        <h2>設定6でも、一直線に出るとは限らない</h2>
        <p>
          パチスロの設定は、あくまで抽選の確率を決めるものです。高設定でも、短期間や1台のデータでは、大きく沈んだり、反対に伸びたりすることがあります。
          「高設定なら必ず出る」「設定6なら右肩上がり」という考え方は、初心者ほど注意したいところです。
        </p>
        <p>
          ただし、今回のような1〜2例だけで、獣王の設定6の出玉特性全体を決めつけることもできません。
          こうした実戦報告は、サンプルが増えるにつれて見え方が変わる可能性があります。
        </p>

        <h2>獣王で公開されている設定差の情報</h2>
        <p>
          当サイトの<Link href="/machines/juoh">スマスロ獣王の機種ページ</Link>で整理している、設定差に関する情報は次のとおりです（解析サイトの掲載をもとにしており、メーカー公式の確定情報ではありません）。
        </p>
        <ul>
          <li>初当り確率は、設定1が1/326.5、設定6が1/279.7とされています。</li>
          <li>謎高確の確率は、設定6が設定1の倍以上とされています。</li>
          <li>百の位が偶数のゲーム数（200G・400Gなど）では、SC高確への移行率が高設定ほど高いとされています。</li>
          <li>初回SC終了時のサミートロフィーは、虹色が設定6濃厚、キリン柄が設定5以上濃厚とされています。</li>
        </ul>
        <p>
          なお、設定6でも長く当たらない区間が出ることがあるかどうかは、これらの確率からは断言できません。確率に設定差があっても、短期的なブレは起こり得るためです。
        </p>

        <h2>「冷遇」という言葉はどこまで使える？</h2>
        <p>
          投稿者は「冷遇」という言葉を使っていますが、これは投稿者の表現です。
          獣王について、設定6の台を長く冷遇する仕様があるという情報は、メーカー・解析サイトのいずれでも、当サイトでは確認できていません。
          今回の報告が仕様に基づくものか、偶然の偏りかは、今後の実戦データの蓄積を待つ必要があります。
        </p>

        <h2>ワンチャンくんの見解</h2>
        <p>
          設定6でも荒い実戦報告が出ているのは、ちょっと気になる話題だワン🐶 ただ、これだけで「設定6は冷遇される台」とは言えないと思うよ。
          1台のデータや、投稿者の画像だけで決めつけず、これから集まる実戦データを待ちたいワン。
        </p>
        <p>
          みんなは、高設定でもこのくらい荒れる展開、アリだと思う？それとも、ちょっと厳しい？
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
            獣王の天井・設定変更時の恩恵・設定判別は、
            <Link href="/machines/juoh">スマスロ獣王の機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li>
              <Link href="/articles/juoh-tenjo-setting-change-sns-topic">スマスロ獣王、設定変更で天井は599G＋αに短縮｜導入日に分かっていること整理</Link>
            </li>
            <li>
              <Link href="/articles/juoh-0through-100g-zone-sns-topic">スマスロ獣王「0スルーの100Gゾーン狙い」がXで話題｜57万表示の投稿に「朝は強くない」「サバ連後のみ」と補足も</Link>
            </li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>責任ある遊技について</h2>
        <p>
          本記事はSNS上の実戦報告を整理したもので、遊技を強くおすすめするものではありません。
          設定や出玉は結果を保証するものではないため、資金と時間の上限を決めて、無理のない範囲で楽しんでください。
        </p>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポストを参考に作成しました。埋め込みポストの内容は各投稿者個人の見解・報告であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/washo613/status/2109456416440508724"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              わしょう（獣王の設定6の実戦報告）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/ManaryuShin/status/2109278627783389635"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              マナリュー（獣王設定6の一万回転の実戦データ）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
