import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import Comments from "@/components/machine/Comments";
import WanchankunComment from "@/components/machine/WanchankunComment";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title =
  "モンキーターンRED始動！「王道から挑戦へ」新作で今わかっていること｜山佐ネクスト新台ニュース";
const description =
  "山佐ネクストの新台『モンキーターンRED』特報が公開されました。『王道から挑戦へ』『JAC IN』など気になるキーワードと、2026年8月22日時点で分かっていること・まだ未確定なことを整理して紹介します。";
const url = `${SITE_URL}/articles/monkey-turn-red-news`;
const heroImage = "/images/articles/monkey-turn-red-news.jpg";
const publishedAt = "2026-08-22";
const updatedAt = "2026-08-22";

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

export default function MonkeyTurnRedNewsPage() {
  const articleJsonLd = {
    ...buildGenericArticleJsonLd({ headline: title, description, url }),
    datePublished: publishedAt,
    dateModified: updatedAt,
  };
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monkey-turn-red-news" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">
          公開日：{publishedAt}　更新日：{updatedAt}
        </p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="モンキーターンRED新作ニュース記事のオリジナルサムネイル"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          山佐の人気シリーズ「モンキーターン」の新作情報が動き出しました。名称は「モンキーターンRED」。単なる匿名の噂ではなく、開発元である山佐ネクストの特報映像が公式に公開されています。
        </p>
        <p>
          ただし、この記事の時点ではゲーム性・スペック・正式な導入日はまだ発表されていません。分かっていること、まだ分かっていないことを分けて整理していきます。
        </p>

        <h2>特報映像</h2>
        <p>
          2026年8月8日、山佐グループの公式X（旧Twitter）アカウント「山佐PR情報局」（
          <a href="https://x.com/YAMASA_PR" target="_blank" rel="noopener noreferrer nofollow">
            @YAMASA_PR
          </a>
          ）から、「王道から挑戦へ」の文言とともに約39秒の特報映像が投稿されました。X上で公開されている動画のため、当サイトでは埋め込みではなく公式投稿への直接リンクでご紹介します。
        </p>
        <p>
          <a
            href="https://x.com/YAMASA_PR/status/2085923955316015124"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            山佐PR情報局公式Xの特報映像を見る
          </a>
        </p>

        <h2>公式特報で確認できたこと</h2>
        <p>
          2026年8月上旬、山佐ネクストから「LモンキーターンRED」の特報映像が公開されました。映像内で確認できるキーワードは次の通りです。
        </p>
        <ul>
          <li>「王道から挑戦へ」というキャッチコピー</li>
          <li>MODE UP</li>
          <li>COUNT</li>
          <li>最速達成</li>
          <li>JAC IN</li>
          <li>7揃い</li>
          <li>「Coming Soon」表記</li>
        </ul>
        <p>
          これらの単語が具体的に何を意味するのかは、現時点では公式から説明されていません。あくまで特報映像に登場した単語という段階です。
        </p>

        <h2>なぜ「VI」ではなく「RED」？</h2>
        <p>
          モンキーターンシリーズは、無印（2011年3月導入）から始まり、モンキーターンII（2014年）、III（2017年）、IV（2020年）と続き、2023年12月にはスマスロ化された「モンキーターンV」が導入されました。
        </p>
        <p>
          この流れを追ってきたファンからすれば、「次はVIだろう」と考えるのが自然な予想です。それが今回、まさかの「RED」という名称で登場したことが、新台ファンの間で大きな話題になっています。
        </p>
        <p>
          ただし、名称が変わったからといって「RED＝完全新システム確定」というわけではありません。ナンバリングを外した理由も含めて、現時点では公式から説明はありません。
        </p>

        <h2>気になるキーワード「JAC IN」</h2>
        <p>
          特報に登場した単語の中でも特に反響が大きいのが「JAC IN」です。一般的にスロット用語として「JAC IN」は、ボーナス中に小役ゲームからJAC（レギュラーボーナス的な状態）へ移行する契機を指す言葉として使われることがあります。
        </p>
        <p>
          ただし、これはあくまで一般的な用語としての意味であり、モンキーターンREDにおいて実際にどのような形で使われるのかは分かっていません。ネット上ではさまざまな予想が飛び交っていますが、現段階では「何を意味するのか気になる」というのが正直なところです。
        </p>

        <h2>導入時期はいつ？</h2>
        <p>
          導入時期についても、まだ正式な発表はありません。業界メディアの記事では、2026年末ごろとする情報や、2026年12月から2027年1月にかけてとする情報、2027年1月以降とする情報など、複数の見方が出ている段階です。
        </p>
        <p>
          いずれも業界情報・噂の域を出るものではなく、<strong>正式な導入日は未定</strong>です。今後の続報を待つ必要があります。
        </p>

        <h2>「モンキーVより荒い？」という声も</h2>
        <p>
          ネット上では「モンキーターンVより荒い（ハイリスク・ハイリターン寄りの）性能になるのでは」といった予想も見かけます。ただし、純増枚数・コイン単価・AT性能・出玉性能といった具体的な数値は、この記事の時点では一切公表されていません。
        </p>
        <p>あくまで予想・期待の声として受け止めるのが適切で、事実として断定できる段階ではありません。</p>

        <h2>朝一情報はまだ何も分からない</h2>
        <p>ワンチャンくんらしく、朝一・リセット周りについても正直にお伝えします。次の項目は、この記事の時点ではすべて未確認です。</p>
        <ul>
          <li>リセット時の天井短縮</li>
          <li>リセット専用モードの有無</li>
          <li>朝一の内部状態優遇</li>
          <li>据え置き時の引き継ぎ</li>
          <li>有効なリセット判別方法</li>
          <li>朝一0Gからの金額期待値</li>
        </ul>
        <p>
          前作にあたる<Link href="/machines/monkey-turn-v">スマスロモンキーターンV</Link>
          の朝一・リセット恩恵は現行の解析情報として別ページでまとめていますが、その仕様をモンキーターンREDへそのまま当てはめることはできません。V独自の5枚役については
          <Link href="/articles/monkey-turn-v-5mai-yaku">モンキーターンVの5枚役についての記事</Link>
          でも解説しています。モンキーターンREDについては、正式な解析情報が出そろい次第、改めて機種ページとして整理する予定です。
        </p>

        <WanchankunComment comment="最近のスマスロで覇権級の人気を誇ったモンキーターンV。朝イチからの稼働も強く、『今日はグランドスラムを目指すぞ』とレバーを叩き続けた人も多いんじゃないでしょうか。そんなモンキーターンの次なる一手が、まさかの『VI』ではなく『RED』。今までの王道を残すのか、それとも全く違うモンキーを見せてくれるのか。モンキーVにハマった一人として、これは続報を追わずにはいられないワン🐶" />

        <h2>2026年8月22日時点の情報整理</h2>
        <section className="card" aria-label="確認できていること">
          <h3>確認できていること</h3>
          <ul>
            <li>名称は「モンキーターンRED」で、山佐ネクストから特報映像が公式に公開されている</li>
            <li>特報内で「王道から挑戦へ」「MODE UP」「COUNT」「最速達成」「JAC IN」「7揃い」「Coming Soon」という単語が確認できる</li>
            <li>シリーズの流れとしては、モンキーターンV（スマスロ）の次回作にあたる</li>
          </ul>
        </section>
        <section className="card warning" aria-label="まだ未確定なこと">
          <h3>まだ未確定なこと</h3>
          <ul>
            <li>正式なゲーム性・スペック</li>
            <li>正式な導入日（業界情報では2026年末〜2027年1月ごろの説が複数あるのみ）</li>
            <li>天井・リセット恩恵・朝一優遇・据え置き・判別方法</li>
            <li>「モンキーVより荒い」といった性能面の噂の真偽</li>
          </ul>
        </section>

        <h2>まとめ</h2>
        <p>
          モンキーターンREDは、特報映像だけでファンの間で大きな盛り上がりを見せている新台です。正式な発表が待たれる段階ではありますが、「王道から挑戦へ」というコピーや「JAC IN」というキーワードなど、気になる要素はすでに出そろっています。
        </p>
        <p>続報が入り次第、ワンチャンくんでも改めて紹介していきます。楽しみに待ちましょう。</p>

        <div className="article-link-box" aria-label="参考情報">
          <p>本記事の作成にあたり、以下の情報を参考にしました。</p>
          <ul>
            <li>
              <a
                href="https://x.com/YAMASA_PR/status/2085923955316015124"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                山佐PR情報局 公式X（特報映像・一次ソース）
              </a>
            </li>
            <li>
              <a
                href="https://yamasa-next.co.jp/model_mkt/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                山佐ネクスト株式会社 機種情報ページ
              </a>
              （本稿執筆時点でモンキーターンREDの掲載は未確認）
            </li>
            <li>
              <a
                href="https://pachinko-curation.com/65657/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ぱちんこキュレーション
              </a>
            </li>
            <li>
              <a
                href="https://www.redesign777.tokyo/Topics/Details?id=20260810115303001&index=2&category=-1"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Re.design トピックス
              </a>
            </li>
            <li>
              <a
                href="https://marutto-w.com/industry_news/sd26817"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                マルっとWAVE
              </a>
            </li>
            <li>
              <a
                href="http://pachinkopachisro.com/archives/59987634.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                パチンコ・パチスロ.com
              </a>
            </li>
            <li>
              <a
                href="https://chonborista.com/slot/yamasa-slot/267229/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ちょんぼりすた
              </a>
            </li>
            <li>
              <a
                href="https://nana-press.com/kaiseki/machine/1255/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                なな徹
              </a>
              （本稿執筆時点で解析情報は未掲載）
            </li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <Comments slug="monkey-turn-red-news" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
