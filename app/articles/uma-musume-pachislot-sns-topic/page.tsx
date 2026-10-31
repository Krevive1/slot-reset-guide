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
  "ウマ娘のパチスロ化｜京楽産業.が「ぱちスロ ウマ娘 プリティーダービー」を発表、2027年導入予定・専用筐体は3種のパネル";
const description =
  "京楽産業.が10月14日に「ぱちスロ ウマ娘 プリティーダービー」を発表しました。2027年導入予定、専用の新設計筐体（パネル3種）、育成型ATの内容を整理。天井・設定変更時の挙動・機械割は未発表です。導入月やパチンコ版はSNS上の情報で、公式には確認できていません（2026年10月31日時点）。9月以降のSNSの反応も残しています。";
const url = `${SITE_URL}/articles/uma-musume-pachislot-sns-topic`;
const heroImage = "/images/articles/uma-musume-pachislot-sns-topic.png";
const publishedAt = "2026-09-18";
const updatedAt = "2026-10-31";

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

export default function UmaMusumePachisloSnsTopicPage() {
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
      <Breadcrumbs
        items={[
          { name: "トップ", href: "/" },
          { name: title, href: "/articles/uma-musume-pachislot-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}　更新日：{updatedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ウマ娘のパチスロ化を巡る話題のイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          人気コンテンツ「ウマ娘 プリティーダービー」のパチスロ化を巡る情報が、SNS上で話題になっています。
          きっかけとなったのは、9月16日にXへ投稿された「Lウマ娘プリティーダービー（仮名）が保通協を通過した」とする情報です。
          投稿では、販売を京楽産業.が担当し、2027年1月導入予定との情報に加え、パチンコ版についても2027年3月以降に販売予定との噂が紹介されていました。
        </p>
        <p>
          その後、10月14日に京楽産業.が「ぱちスロ ウマ娘 プリティーダービー」を正式に発表しました（2026年10月31日追記）。
          この記事では、まず公式発表で確認できた内容を整理し、そのうえで9月以降のSNS上の情報と反応を、時系列のまま残しています。
        </p>

        <h2>公式発表：10月14日に「ぱちスロ ウマ娘 プリティーダービー」が発表</h2>
        <p>
          京楽産業.は2026年10月14日、「ぱちスロ ウマ娘 プリティーダービー」を発表しました。以下は、
          <a
            href="https://game.watch.impress.co.jp/docs/kikaku/2148259.html"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            GAME Watchの発表会レポート
          </a>
          と
          <a
            href="https://p-town.dmm.com/specials/5538"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            DMMぱちタウンの特集記事
          </a>
          で、2媒体とも確認できた内容を中心にまとめたものです。
        </p>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>項目</th>
                <th>確認できた内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>導入時期</td>
                <td>2027年からの導入を予定（月・日付は公式発表に記載なし）</td>
              </tr>
              <tr>
                <td>筐体</td>
                <td>ウマ娘専用の新設計筐体。白を基調に下パネルの輝度を上げ、中央部に新デザインのプッシュボタンと専用デザインシートを採用</td>
              </tr>
              <tr>
                <td>パネル</td>
                <td>「スペシャルウィーク」「トウカイテイオー」「オグリキャップ」の3種類を同時にリリース</td>
              </tr>
              <tr>
                <td>搭載スペック</td>
                <td>ROM容量は最大640Gbit。ゲーム性は、育成した内容でAT性能が変わる「育成型AT」</td>
              </tr>
              <tr>
                <td>PV</td>
                <td>10月26日に京楽産業.の公式YouTubeチャンネルで公開（DMMぱちタウンの掲載による）</td>
              </tr>
              <tr>
                <td>天井・設定変更時の挙動・機械割</td>
                <td>2媒体とも記載なし（未発表）</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          GAME Watchには、育成をステータス最大まで行った場合のATの継続率が「約95%オーバー」とあります。これは育成を最大まで進めた場合の数値で、機械割や通常時の期待値を示すものではありません。
          朝一リセットや天井など、ホールで使う情報は公式発表の時点では出ていないため、当サイトでは確認できた情報だけを載せています。
        </p>

        <h2>「Lウマ娘 プリティーダービー」が保通協を通過したとの情報</h2>
        <p>
          9月16日、X上で「Lウマ娘プリティーダービー（仮名）が保通協を通過したとの情報を入手した」とする投稿が行われました。
          投稿者によると、販売は京楽産業.で、2027年1月導入予定とのこと。さらに「パチンコは3月以降で販売予定との噂」とも記載されており、
          10月には特別先行展示会が予定されているとの情報も投稿されています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/umeko777kirari/status/2100167811813298667"
          authorName="パチンカス人生に一片の悔い無し"
        />
        <p>
          この投稿は約204万表示を記録するなど大きな反響となり、「ついにウマ娘がパチスロになるのでは」と注目を集めることになりました。
        </p>
        <p className="section-note">
          この投稿は、あくまでX上の投稿を発端とした情報でした。その後、10月14日に京楽産業.がパチスロ版の発表を行い、パチスロ化そのものは公式に確認できています。
          一方、投稿にあった「保通協通過」「2027年1月導入」「パチンコ版は3月以降」といった内容のうち、公式発表で確認できるのは「2027年導入予定」までです。月や、パチンコ版については、公式には確認できていません。
        </p>

        <h2>SNSでは「パチスロ化」に賛否両論</h2>
        <p>
          今回の情報が拡散されると、SNSではさまざまな反応が見られました。特に目立ったのが、「ウマ娘のパチスロ化を望まない」という趣旨の意見です。
        </p>
        <TweetEmbed tweetUrl="https://x.com/Yoshida_S_X/status/2100734776114352613" authorName="Yoshida" />
        <p>
          一方で、パチスロ化そのものを問題視しないという意見も投稿されています。ウマ娘は実在の競走馬をモチーフとしたコンテンツであり、ゲーム自体も競馬を題材としています。
          そのため、「競馬をモチーフとしたコンテンツがパチスロになることについて、そこまで意外ではないのではないか」という趣旨の反応もありました。
        </p>
        <TweetEmbed tweetUrl="https://x.com/expelion2736/status/2100703637119054015" authorName="神耶詩鷺" />
        <p className="section-note">
          このように、今回の情報を巡っては「ウマ娘をパチスロで遊びたい」という声だけでなく、パチスロというジャンルそのものへの抵抗感を示す声もあり、反応は分かれています。
        </p>

        <h2>続報：10月14日に「特別先行展示会」が開催されたとする投稿</h2>
        <p>
          2026年10月14日、渋谷で「Lウマ娘」の特別先行展示会が開かれたとする投稿が複数のアカウントから出ています。
          展示会に参加したとする投稿者の感想では、「育てるゲーム性」「新筐体のストップボタンの止めやすさ」「自分で育成した感覚」といった点に触れたものが目立ちます。
        </p>
        <TweetEmbed tweetUrl="https://x.com/456_goddess/status/2110243563766452562" authorName="メガガディス（幹部X）" />
        <p>
          1つ目の投稿では、「育てるゲーム性」で「コンテンツが活かされているように感じた」「通常時も飽きにくい仕組み」といった印象が書かれています。
        </p>
        <TweetEmbed tweetUrl="https://x.com/pachinko252525/status/2110253377548697953" authorName="パチンコ店店長（メガガーデン所沢パチンコ館）" />
        <p>
          2つ目の投稿は、新筐体のストップボタンについて、「止めやすさ神レベル」「スライド押しも普通にいける」と操作感を評価しています。
        </p>
        <TweetEmbed tweetUrl="https://x.com/YSD_YASUDA/status/2110261801111990643" authorName="盛（やすだプロモーション担当）" />
        <p>
          3つ目の投稿は、「自分で育成した、自分だけのステータスでレースに挑む」という感覚を「自力感」と表現しています。
        </p>
        <p className="section-note">
          これらは展示会に参加したとする投稿者個人の感想で、機種のスペック・出玉・導入日についての公式な発表ではありません。展示会の主催や詳細な内容は、投稿からは確認できていません。
        </p>

        <h2>よくある疑問：パチスロ？パチンコ？いつ導入？</h2>
        <p>
          検索でもよく見られる疑問を、公式発表で確認できた内容と、SNS上の情報に分けて整理します（2026年10月31日時点）。
        </p>
        <ul>
          <li>
            <strong>パチスロとパチンコ、どちらが出るの？</strong>
            …パチスロ版「ぱちスロ ウマ娘 プリティーダービー」は、公式に発表されています。パチンコ版は、投稿で「2027年3月以降に販売予定との噂」と紹介されているだけで、公式には確認できていません。
          </li>
          <li>
            <strong>どこのメーカーが出すの？</strong>
            …京楽産業.が発表しています（公式発表で確認できた内容）。
          </li>
          <li>
            <strong>いつ導入されるの？</strong>
            …公式発表は「2027年からの導入を予定」で、月・日付は出ていません。「2027年1月」は、9月の投稿にある情報で、公式には確認できていません。
          </li>
          <li>
            <strong>公式発表はあった？</strong>
            …10月14日に京楽産業.が発表しました。10月26日にはPVも公開されています。天井・設定変更時の挙動・機械割は、未発表です。
          </li>
        </ul>
        <p className="section-note">
          導入月やパチンコ版などの情報は、投稿者が入手したとする情報です。今後の続報で内容が変わる可能性があるため、確定事項として受け取らないようご注意ください。スペックなどの続報が確認でき次第、本記事を更新します。
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
                <td>京楽産業.が10月14日に「ぱちスロ ウマ娘 プリティーダービー」を発表したこと（2媒体で確認）。2027年導入予定、専用の新設計筐体とパネル3種、ROM容量最大640Gbit、育成型AT、10月26日のPV公開。9月16日にX上で「保通協通過・2027年1月導入・パチンコ版は3月以降との噂」とする投稿があったこと、10月14日の特別先行展示会に参加したとする投稿に感想が出ていること</td>
              </tr>
              <tr>
                <td>確認できていないこと</td>
                <td>導入月・日付、天井、設定変更時の挙動、機械割、実際の出玉性能、パチンコ版の発売有無・時期（いずれも公式発表に記載なし）</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>ワンチャンくんの見解</h2>
        <p>
          9月の投稿で出ていた内容のうち、京楽産業.によるパチスロ化と「2027年導入予定」は、10月14日の公式発表で裏づけられました。専用筐体とパネル3種も、公式の発表内容です。
          一方、導入月やパチンコ版の話は、まだ公式に確認できていません。
        </p>
        <p>
          朝一リセットや天井、やめどきなど、ホールで使う情報は、現時点では何も出ていません。これらは機種の仕様が公開されてから整理するものなので、天井や設定変更の数字が出回っても、公式や複数の解析媒体で確認できるまでは、確定情報として扱わないほうがよいでしょう。
          SNSの反応も、「パチスロ化してほしくない」という意見と「競馬を題材とした作品なのだから不自然ではない」という意見に分かれていました。今後のスペック発表や導入日の続報は、確認でき次第、この記事に反映します。
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
            朝一リセット・リセット恩恵の基礎については、
            <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/articles/petit-news">プチニュース一覧（SNSで話題の最新情報）</Link></li>
            <li><Link href="/articles/new-machine-news">注目の新台NEWS一覧</Link></li>
          </ul>
        </div>

        <h2>参考情報</h2>
        <p className="section-note">
          公式発表の内容は、次の2つの記事で確認しました。
        </p>
        <ul>
          <li>
            <a
              href="https://game.watch.impress.co.jp/docs/kikaku/2148259.html"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              GAME Watch「ぱちスロ ウマ娘プリティーダービー」発表会レポート
            </a>
          </li>
          <li>
            <a
              href="https://p-town.dmm.com/specials/5538"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              DMMぱちタウン「ぱちスロ ウマ娘 プリティーダービー」PV公開の特集記事
            </a>
          </li>
        </ul>
        <p className="section-note">
          9月以降のSNSの情報と反応は、以下のXポストを参考にしました。いずれも投稿者個人の見解・情報であり、メーカー公式の発表ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/umeko777kirari/status/2100167811813298667"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンカス人生に一片の悔い無し（「Lウマ娘 プリティーダービー」保通協通過情報）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Yoshida_S_X/status/2100734776114352613"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Yoshida（パチスロ化への懸念の声）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/expelion2736/status/2100703637119054015"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              神耶詩鷺（パチスロ化を問題視しない意見）
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
