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
  "モンハンサンブレイクはなぜ評価が割れる？通常時CZへの不満と万枚実戦をXの投稿から整理";
const description =
  "2026年10月5日に導入されたスマスロ モンハンサンブレイクについて、Xでは通常時のCZやゲーム性に厳しい声が目立つ一方、設定5で約1.3万枚を回収したという報告も出ています。評価が分かれている理由を、複数の投稿をもとに個人の感想として整理しました。";
const url = `${SITE_URL}/articles/monster-hunter-sunbreak-hyouka-wareru-sns-topic`;
const heroImage = "/images/articles/monster-hunter-sunbreak-hyouka-wareru-sns-topic.png";
const publishedAt = "2026-10-09";

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

export default function MonsterHunterSunbreakHyoukaWareruSnsTopicPage() {
  const gameOffer = getActiveAffiliateOffer("amazonMonsterHunter");
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monster-hunter-sunbreak-hyouka-wareru-sns-topic" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スマスロ モンハンサンブレイクの評価を巡るSNSの話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年10月5日に導入されたスマスロ モンスターハンターライズ：サンブレイク（アデリオン／エンターライズ）について、導入直後からXで評価が割れています。
          「通常時のCZが厳しい」「特化ゾーンが期待ほど面白くない」といった声がある一方、設定5で約1.3万枚を回収したという報告も出ています。
        </p>
        <p>
          <strong>ここで紹介するのは、いずれも投稿者個人の感想・実戦報告であり、メーカー公式の情報ではありません。</strong>
          点数の高低を並べるのではなく、「何が評価を分けているのか」に絞って整理します。台の天井や狙い目などの仕様は、
          <Link href="/machines/monster-hunter-rise-sunbreak">サンブレイクの機種ページ</Link>
          にまとめています。
        </p>

        <div className="article-link-box">
          <p><strong>この記事の要点</strong></p>
          <ul>
            <li>厳しい声の中心は「通常時のCZ」と「特化ゾーンの面白さ」で、出玉性能そのものへの低評価とは限らない</li>
            <li>一方で、設定5の実戦では投資1,800枚から13,410枚を回収したという報告もある</li>
            <li>いずれも個人の感想・実戦報告で、機械割や設定の確定情報ではない</li>
          </ul>
        </div>

        <h2>評価が先行して「何とも言えない」空気に</h2>
        <p>
          10月6日、パチスロ系の情報発信をしているわしょう（@washo613）さんは、サンブレイクについて「何とも言えない評価が先行してしまう」と投稿しました。
          「30点」と評価する声や、「モンハンなのにモンスターと戦えない」「ライズが再評価されてほしい」といった意見が目立つとしています。この投稿は約24万表示を記録しました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/washo613/status/2107313756095275371"
          authorName="わしょう"
        />
        <p className="section-note">
          「30点」という点数は評価する人それぞれの基準によるもので、台の良し悪しを決めるものではありません。ここでは「厳しい評価が大きく拡散された」という事実だけを紹介します。
        </p>

        <h2>「特化ゾーンが目玉なのに面白くない」という声</h2>
        <p>
          10月5日の導入初日には、ゲンキー（@genki_genki777）さんも初打ちの感想を投稿しています。
          他の2機種と並べて「共通するのは特化ゾーンが目玉であること」としたうえで、サンブレイクは特化ゾーンが期待ほど面白くなく、それしか伸ばす契機がない点を指摘。
          一方で「通常時は辛いながらもシステムは良い」とも述べており、評価は一面的ではありません。この投稿は約18万表示でした。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/genki_genki777/status/2107012398314078675"
          authorName="ゲンキー"
        />

        <h2>通常時のCZの仕様を指摘する声</h2>
        <p>
          10月7日には、ミリ（@mirisuro777）さんが「サンブレイクで何気に一番ヤバいのは通常時のCZかも」と投稿しました。
          CZの演出に複数の要素が組み合わされており、最後までマスを進めるには強いヒキが必要になる、という趣旨です。
          さらに「設定が良いとマスが良いものを選ばれやすくなりそうで、設定が早く見抜かれそう」という推測も添えています（約6.8万表示）。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/mirisuro777/status/2107759470931837045"
          authorName="ミリ"
        />
        <p className="section-note">
          設定差についての推測は投稿者の見立てで、メーカー公式の情報ではありません。
        </p>

        <h2>一方で「設定5で1.3万枚」の実戦報告も</h2>
        <p>
          同じ10月7日には、ゆう（@pawasakayuuu）さんが「サンブレイク　設定5」の実戦結果を投稿しています。
          「19時まで死にそうだったけど復活」と、投資1,800枚に対して回収13,410枚だったと報告しています（約6.2万表示）。
          設定5という情報は投稿者によるものです。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pawasakayuuu/status/2107836720616267932"
          authorName="ゆう"
        />
        <p>
          この報告は途中まで厳しい展開だったことも含んでおり、「通常時は辛いが、ATに入ると伸びる」という見方とも整合しますが、1件の実戦報告で台の性能を判断することはできません。
        </p>

        <h2>評価を分けているのは「出玉」より「体感・ゲーム性」か</h2>
        <p>
          ここまでの投稿を整理すると、厳しい声の中心は、出玉性能そのものではなく、通常時のCZやゲーム数上乗せの特化ゾーンといった、遊技中の体感・ゲーム性に向いています。
          機械割は設定1で97.5%、設定6で112.4%と公表されており（ぱちタウン掲載）、ゲームフローはCZ（ブレイクゾーン／アイルー福引）からAT「サンブレイクラッシュ」、上位ATへと進む構成です。
          低評価と高設定での大量出玉が同時に報告されているのは、台の「好き嫌い」と「出玉」が必ずしも一致しないことを示しているのかもしれません。
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
                  サンブレイクが2026年10月5日に導入されたこと／Xで通常時のCZや特化ゾーンに厳しい声が複数出ていること／一方で設定5での実戦報告（投資1,800枚→回収13,410枚）が出ていること／機械割は97.5%〜112.4%（ぱちタウン掲載）
                </td>
              </tr>
              <tr>
                <td>まだ確認できていないこと</td>
                <td>
                  「30点」などの評価が台の実力を示すかどうか、CZの仕様と設定差の関係、導入後の大規模な実戦データ、メーカー公式の見解
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          サンブレイクは導入からまだ数日で、評価が大きく割れている台だワン🐶 厳しい声は通常時のCZに集まっていて、出玉が出ない台と決まったわけではないところがポイントだと思うよ。
          数字や点数だけを見て決めつけず、自分の目で状況を確かめるのが大事だワン。
        </p>
        <p>
          みんなは、サンブレイクの通常時やCZ、どう感じてる？ 打った人の感想を教えてほしいワン！
        </p>

        <div className="product-box-grid product-box-grid--single">
          {gameOffer && (
            <AffiliateProductBox
              provider={gameOffer.provider}
              name={gameOffer.serviceName}
              note={gameOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={gameOffer.ctaLabel}
              ctaHref={gameOffer.href}
              disclosure={gameOffer.disclosure}
              offerType={gameOffer.offerType}
              serviceName={gameOffer.serviceName}
              imageSrc={gameOffer.imageSrc}
              placement="mid_article"
              affiliateProgram={gameOffer.programName}
            />
          )}
        </div>
        <StickyBottomBanner offer={vodOffer} />

        <div className="article-link-box">
          <p>
            サンブレイクの天井・設定変更時の挙動・やめどきは、
            <Link href="/machines/monster-hunter-rise-sunbreak">スマスロ モンスターハンターライズ：サンブレイクの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li>
              <Link href="/machines/monster-hunter-rise">前作「スマスロモンスターハンターライズ」の機種ページ（別機種）</Link>
            </li>
            <li><Link href="/machines/maker/enta">エンターライズの機種一覧</Link></li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポストを参考に作成しました。埋め込みポストの内容は各投稿者個人の見解であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a href="https://x.com/washo613/status/2107313756095275371" target="_blank" rel="noopener noreferrer nofollow">
              わしょう（評価が先行する旨の投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/genki_genki777/status/2107012398314078675" target="_blank" rel="noopener noreferrer nofollow">
              ゲンキー（初打ちの感想）
            </a>
          </li>
          <li>
            <a href="https://x.com/mirisuro777/status/2107759470931837045" target="_blank" rel="noopener noreferrer nofollow">
              ミリ（通常時のCZについての投稿）
            </a>
          </li>
          <li>
            <a href="https://x.com/pawasakayuuu/status/2107836720616267932" target="_blank" rel="noopener noreferrer nofollow">
              ゆう（設定5の実戦報告）
            </a>
          </li>
          <li>
            <a href="https://p-town.dmm.com/machines/5095" target="_blank" rel="noopener noreferrer nofollow">
              DMMぱちタウン：スマスロ モンスターハンターライズ：サンブレイク（機種情報）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
