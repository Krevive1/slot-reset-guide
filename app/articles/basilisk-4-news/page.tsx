import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import Comments from "@/components/machine/Comments";
import WanchankunComment from "@/components/machine/WanchankunComment";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "スマスロ バジリスク～甲賀忍法帖～Ⅳ、2026年12月導入予定｜新要素「胎動の刻」「死合」も判明｜ユニバーサル新台ニュース";
const description =
  "ユニバーサルエンターテインメントが2026年9月7日、スマスロ バジリスク～甲賀忍法帖～Ⅳを正式発表。2026年12月導入予定、新ゲームフロー「胎動の刻」・最終血戦「死合」・バジリスクタイムの2パート構成継承など、公式発表で判明した内容と、まだ未確定な仕様を整理します。";
const url = `${SITE_URL}/articles/basilisk-4-news`;
const heroImage = "/images/articles/basilisk-4-news.jpg";
const publishedAt = "2026-08-22";
const updatedAt = "2026-09-11";

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

export default function Basilisk4NewsPage() {
  const jinsOffer = getActiveAffiliateOffer("jinsScreen");
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
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/basilisk-4-news" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">
          公開日：{publishedAt}　更新日：{updatedAt}
        </p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="バジリスクⅣ検定通過ニュース記事のオリジナルサムネイル"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          「バジリスク～甲賀忍法帖～」シリーズの新作について、以前からファンの間で噂が絶えませんでしたが、2026年8月に入って具体的な動きが出てきました。型式「L／バジリスクⅣXB」の存在が確認され、予告映像に関する情報も出始めています。
        </p>
        <p>
          モンキーターンREDと違い、こちらはすでに検定通過という強い裏付けが取れていましたが、2026年9月7日、ユニバーサルエンターテインメントが正式に「スマスロ バジリスク～甲賀忍法帖～Ⅳ」の発売を発表しました。2026年12月導入予定であることに加え、新ゲームフロー「胎動の刻」・最終血戦「死合」といったゲーム性の一部も判明しています。ただし、AT性能・天井・リセット恩恵など、実戦に直結する数値はまだ発表されていません。分かっていること、まだ分かっていないことを分けて整理します。
        </p>

        <h2>2026年9月7日、正式発表</h2>
        <p>
          ユニバーサルエンターテインメント公式サイトのニュースリリースおよび特設ページで、「スマスロ バジリスク～甲賀忍法帖～Ⅳ」の発売が正式発表されました。
        </p>
        <ul>
          <li>正式名称：スマスロ バジリスク～甲賀忍法帖～Ⅳ（製造：株式会社アクロス）</li>
          <li>導入予定：2026年12月</li>
          <li>筐体：ランドマークS（スマスロミリオンゴッド 神々の軌跡などと同型、検定通過時点の業界情報が公式に裏付けられた形）</li>
          <li>「バジリスクタイム」の2パート構成・ミニキャラバトルによるループシステムはシリーズから継承</li>
          <li>新たなゲームフロー「胎動の刻」を搭載</li>
          <li>自らチャンスを掴む最終血戦「死合」を搭載</li>
          <li>6号機共通のコンプリート機能搭載（1日の払出上限到達で遊技終了、事前報知あり）</li>
        </ul>
        <p>
          <a
            href="https://www.universal-777.co.jp/news/20260907002538/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            ユニバーサルエンターテインメント公式ニュースリリースを見る
          </a>
        </p>
        <p>
          <a
            href="https://www.universal-777.com/product/slot/basilisk4/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            スマスロ バジリスクⅣ特設ページを見る
          </a>
        </p>
        <p>
          「胎動の刻」「死合」がゲームフロー上どのような位置づけになるのか（BC・争忍の刻との関係、当選契機など）は、公式発表時点ではまだ詳細が説明されていません。
        </p>

        <h2>予告映像</h2>
        <p>
          2026年8月21日、ユニバーサルエンターテインメントの公式X（旧Twitter）アカウント「【ユニバ公式】ユニバフリーク」（
          <a href="https://x.com/univerfreaks" target="_blank" rel="noopener noreferrer nofollow">
            @univerfreaks
          </a>
          ）から約28秒の予告映像が投稿されています。当サイトでは投稿・動画を直接確認したうえで、複数の業界メディアがこれをバジリスクⅣの予告映像として報じていることもあわせて確認しています。X上で公開されている動画のため、当サイトでは埋め込みではなく公式投稿への直接リンクでご紹介します。
        </p>
        <p>
          <a
            href="https://x.com/univerfreaks/status/2090725927974285599"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            ユニバーサルエンターテインメント公式Xの予告映像を見る
          </a>
        </p>

        <h2>検定通過情報</h2>
        <p>
          2026年8月7日、新潟県公安委員会が公示した検定通過情報の中に、株式会社アクロス名義の型式「L／バジリスクⅣXB」が含まれていることが、業界メディアで報じられています。
        </p>
        <p>
          検定通過はあくまで「その型式のパチスロ機が、法令上の技術基準に適合していると確認された」という手続き上の事実であり、出玉性能や発売名称・発売時期を保証するものではありません。とはいえ、匿名の噂だけの段階だったモンキーターンREDと比べると、公的な検定公示という強い裏付けがある点は大きな違いです。
        </p>

        <h2>「絆3」ではなく「Ⅳ」？</h2>
        <p>
          バジリスクシリーズはこれまで、「バジリスク絆」「バジリスク絆2 天膳 BLACK EDITION」といった「絆」ナンバリングの派生シリーズが導入されてきました。今回検定通過した型式には「絆」ではなく「バジリスクⅣ」という名称が使われています。
        </p>
        <p>
          正式な販売名称・シリーズ位置づけはまだ発表されていませんが、型式名に「Ⅳ」が使われていること自体が、ファンの間で「絆シリーズとは別の、本流ナンバリングの新作なのでは」という期待を呼んでいます。
        </p>

        <h2>約10年ぶり？</h2>
        <p>
          ナンバリング作品としての前作「SLOTバジリスク～甲賀忍法帖～III」は、ユニバーサルエンターテインメント公式サイトによると2016年11月に発売されています。そこから数えると、2026年は約10年ぶりの節目にあたります。
        </p>
        <p>
          この間には「絆」「絆2」といった派生シリーズが導入されていますが、あくまで「ナンバリング本流の新作」という意味では約10年ぶりという表現になります。
        </p>

        <h2>筐体・イヤホン情報</h2>
        <p>
          予告映像の公開にあわせて、業界メディアでは次の情報も報じられています。当サイトでは映像そのものから筐体構造まで断定的に確認できたわけではないため、業界メディア経由の情報として扱います。
        </p>
        <ul>
          <li>筐体は「ランドマークS」（スマスロミリオンゴッド 神々の軌跡などと同型）を採用</li>
          <li>有線イヤホンに対応</li>
        </ul>
        <p>
          これらは予告公開にあわせて報じられた情報ですが、記事の主軸となるゲーム性の発表ではないため、あくまで補足情報として捉えてください。
        </p>

        <h2>2026年12月導入予定が正式発表</h2>
        <p>
          検定通過・予告映像の段階では「業界情報として2026年12月説がある」という扱いでしたが、9/7の公式発表により、2026年12月導入予定であることがメーカー公式から正式に発表されました。具体的な導入日（何日か）は本稿執筆時点では未発表です。
        </p>

        <h2>それでも、まだ分からないこと</h2>
        <p>
          9/7の発表で「胎動の刻」「死合」という新ゲームフローの存在は判明しましたが、実戦に直結する具体的な数値・仕様は、この記事の時点でまだ正式発表されていません。
        </p>
        <ul>
          <li>AT性能・純増枚数・出玉率などの具体的な数値</li>
          <li>「胎動の刻」「死合」それぞれの当選契機・突入率</li>
          <li>バジリスクタイム・争忍の刻の詳細仕様</li>
          <li>BC（ボーナス関連）の仕様</li>
          <li>天井・リセット恩恵</li>
        </ul>
        <p>
          過去作である
          <Link href="/machines/basilisk-kizuna-2-tenzen-black">バジリスク絆2 天膳 BLACK EDITION</Link>
          や、SLOTバジリスク～甲賀忍法帖～IIIの仕様を新作へそのまま当てはめることはできません。バジリスクⅣについては、正式な解析情報が出そろい次第、改めて機種ページとして整理する予定です。
        </p>

        <WanchankunComment comment="バジリスクという台に、感情を激しく揺さぶられた人をこれまで数え切れないほど見てきました。真瞳術チャンスを渇望し、『頼む……！』と願いながら何度もレバーを叩いたあの日。強チェリーに喜び、巻物に期待し、争忍の刻で一喜一憂した記憶が蘇る人もいると思います。そんなバジリスクが『Ⅳ』として帰ってくるかもしれない。まだゲーム性すら分からない段階なのに、その名前を見るだけで少し胸が熱くなるワン🐶" />

        <h2>2026年9月11日時点の情報整理</h2>
        <section className="card" aria-label="確認できていること">
          <h3>確認できていること</h3>
          <ul>
            <li>正式名称「スマスロ バジリスク～甲賀忍法帖～Ⅳ」（製造：株式会社アクロス）を2026年9月7日にユニバーサルエンターテインメントが正式発表</li>
            <li>導入予定は2026年12月（具体的な導入日は未発表）</li>
            <li>新ゲームフロー「胎動の刻」・最終血戦「死合」を搭載</li>
            <li>「バジリスクタイム」の2パート構成・ミニキャラバトルによるループシステムはシリーズから継承</li>
            <li>筐体は「ランドマークS」を採用（公式発表で確認）</li>
            <li>6号機共通のコンプリート機能搭載</li>
            <li>前作ナンバリング作品「SLOTバジリスク～甲賀忍法帖～III」は2016年11月発売（＝約10年ぶりの本流ナンバリング作品）</li>
          </ul>
        </section>
        <section className="card warning" aria-label="まだ未確定なこと">
          <h3>まだ未確定なこと</h3>
          <ul>
            <li>具体的な導入日（何日か）</li>
            <li>AT性能・純増枚数・出玉率などの具体的な数値</li>
            <li>「胎動の刻」「死合」それぞれの当選契機・突入率</li>
            <li>バジリスクタイム・争忍の刻の詳細仕様、BC（ボーナス関連）の仕様</li>
            <li>天井・リセット恩恵・設定変更時の挙動</li>
          </ul>
        </section>

        <h2>まとめ</h2>
        <p>
          バジリスクⅣは、2026年9月7日の公式発表によって導入時期（2026年12月）とゲームフローの一部（「胎動の刻」「死合」）が判明し、検定通過・予告映像の段階から一歩進みました。とはいえ、AT性能や天井・リセット恩恵といった実戦に直結する仕様はまだ分かっておらず、続報を待つ段階であることに変わりはありません。
        </p>
        <p>続報が入り次第、ワンチャンくんでも改めて紹介していきます。</p>

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

        <div className="article-link-box" aria-label="参考情報">
          <p>本記事の作成にあたり、以下の情報を参考にしました。</p>
          <ul>
            <li>
              <a
                href="https://www.universal-777.co.jp/news/20260907002538/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ユニバーサルエンターテインメント公式ニュースリリース（2026年9月7日発表・一次ソース）
              </a>
            </li>
            <li>
              <a
                href="https://www.universal-777.com/product/slot/basilisk4/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ユニバーサルエンターテインメント公式 バジリスクⅣ特設ページ（一次ソース）
              </a>
            </li>
            <li>
              <a
                href="https://x.com/univerfreaks/status/2090725927974285599"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                【ユニバ公式】ユニバフリーク 公式X（予告映像・一次ソース）
              </a>
            </li>
            <li>
              <a href="https://web-greenbelt.jp/post-116775/" target="_blank" rel="noopener noreferrer nofollow">
                グリーンべると（検定通過公示情報）
              </a>
            </li>
            <li>
              <a href="https://pachinko-curation.com/65646" target="_blank" rel="noopener noreferrer nofollow">
                ぱちんこキュレーション
              </a>
            </li>
            <li>
              <a
                href="https://pachinkopachisro.com/archives/60010280.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                パチンコ・パチスロ.com（予告映像・筐体情報）
              </a>
            </li>
            <li>
              <a
                href="https://www.universal-777.com/product/slot/basilisk3/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                ユニバーサルエンターテインメント公式（SLOTバジリスク～甲賀忍法帖～III 発売時期の確認用）
              </a>
            </li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <Comments slug="basilisk-4-news" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
