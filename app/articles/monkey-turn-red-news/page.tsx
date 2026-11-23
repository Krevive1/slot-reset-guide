import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import TweetEmbed from "@/components/site/TweetEmbed";
import Comments from "@/components/machine/Comments";
import WanchankunComment from "@/components/machine/WanchankunComment";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import StickyBottomBanner from "@/components/site/StickyBottomBanner";
import ArticleRelatedLinks from "@/components/site/ArticleRelatedLinks";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";

const title =
  "モンキーターンRED 導入日はいつ？2027年1月12日予定｜AT確率・機械割・最新情報（山佐ネクスト）";
const description =
  "スマスロ「モンキーターンRED」の導入日（2027年1月12日予定・DMMぱちタウン／なな徹掲載、ちょんぼりすたは1月上旬、メーカー公式は2027年1月予定）・AT確率・機械割・純増・ゲームフローを早見表で整理。天井・朝イチは調査中。";
const url = `${SITE_URL}/articles/monkey-turn-red-news`;
const heroImage = "/images/articles/monkey-turn-red-news.webp";
const publishedAt = "2026-08-22";
const updatedAt = "2026-11-17";

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

const faqItems = [
  { question: "モンキーターンREDはいつ導入されますか？", answer: "DMMぱちタウンとなな徹は「2027年1月12日（火）予定」、ちょんぼりすたは「2027年1月上旬予定」と掲載しています。メーカー公式（山佐のティザーPV概要欄）では「2027年1月予定」まで確認でき、具体的な日付は発表されていません。" },
  { question: "AT確率・機械割・純増はどのくらいですか？", answer: "AT確率は設定1の1/422.9から設定6の1/354.7、機械割は97.9％〜113.2％と、なな徹・ちょんぼりすたが同じ数値を掲載しています。純増はREDゾーンで約6.5枚/G、加速ステージで約1.6枚/Gです。いずれもメーカー公式では未確認です。" },
  { question: "天井はありますか？", answer: "なな徹・ちょんぼりすた・DMMぱちタウンとも「調査中」で、天井の有無・ゲーム数・恩恵は分かっていません。" },
  { question: "朝イチ・リセット恩恵はありますか？", answer: "設定変更時の挙動や朝イチの扱いは、主要媒体でも調査中・準備中で、現時点では確認できていません。" },
];

export default function MonkeyTurnRedNewsPage() {
  const foodOffer = getActiveAffiliateOffer("amazonFoodDrink");
  const vodOffer = getActiveAffiliateOffer("abemaPremium");
  const articleJsonLd = {
    ...buildGenericArticleJsonLd({ headline: title, description, url }),
    datePublished: publishedAt,
    dateModified: updatedAt,
  };
  const faqJsonLd = buildFaqJsonLd(faqItems);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <Breadcrumbs
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monkey-turn-red-news" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">
          公開日：{publishedAt}　更新日：{updatedAt}
        </p>

        <div className="thumbnail">
          <Image unoptimized
            src={heroImage}
            alt="モンキーターンRED新作ニュース記事のオリジナルサムネイル"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          山佐の人気シリーズ「モンキーターン」の新作「モンキーターンRED」の最新情報をまとめています。開発元の山佐ネクストが特報映像を公開しており、2026年11月17日時点では、導入日・AT確率・機械割・ゲームフローが解析媒体に掲載されています。
        </p>
        <p>
          ただし、メーカー公式で確認できているのは「2027年1月導入予定」までです。天井・設定変更時の挙動・朝イチの扱いは、主要媒体でも「調査中」の段階です。分かっていることと未確定のことを分けて整理します。
        </p>

        <h2>結論・早見表（2026年11月17日時点）</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr><th>項目</th><th>内容</th><th>確認状況</th></tr>
            </thead>
            <tbody>
              <tr><td>導入日</td><td><strong>2027年1月12日（火）予定</strong></td><td>DMMぱちタウン（11/16更新）・なな徹（10/22更新）が掲載。ちょんぼりすたは「2027年1月上旬予定」。メーカー公式（ティザーPV概要欄）は「2027年1月予定」</td></tr>
              <tr><td>メーカー表記</td><td>セブンリーグ（開発：山佐ネクスト）</td><td>DMMぱちタウン・ちょんぼりすた</td></tr>
              <tr><td>AT確率</td><td>設定1 1/422.9〜設定6 1/354.7</td><td>なな徹・ちょんぼりすたが同一数値（メーカー公式では未確認）</td></tr>
              <tr><td>機械割</td><td>97.9％〜113.2％</td><td>なな徹・ちょんぼりすた・DMMぱちタウンが同一数値</td></tr>
              <tr><td>AT純増</td><td>REDゾーン 約6.5枚/G、加速ステージ 約1.6枚/G</td><td>DMMぱちタウン・ちょんぼりすた</td></tr>
              <tr><td>天井</td><td>調査中</td><td>なな徹・ちょんぼりすた・DMMぱちタウンとも未発表扱い</td></tr>
              <tr><td>設定変更・朝イチ</td><td>調査中（未確認）</td><td>ちょんぼりすた「調査中」、DMMぱちタウン「解析準備中」</td></tr>
            </tbody>
          </table>
        </div>
        <p className="section-note">
          導入日は媒体によって表記が異なり、メーカー公式から具体的な日付は発表されていません。「1月12日予定」は、DMMぱちタウンとなな徹の掲載に基づく目安として受け止めてください。導入前の情報のため、今後変更・訂正される可能性があります。
        </p>

        <h2>AT確率・機械割（設定別）</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr><th>設定</th><th>AT確率</th><th>機械割（出玉率）</th></tr>
            </thead>
            <tbody>
              <tr><td>設定1</td><td>1/422.9</td><td>97.9％</td></tr>
              <tr><td>設定2</td><td>1/405.9</td><td>98.9％</td></tr>
              <tr><td>設定3</td><td>1/386.6</td><td>100.5％</td></tr>
              <tr><td>設定4</td><td>1/357.8</td><td>105.0％</td></tr>
              <tr><td>設定5</td><td>1/355.6</td><td>109.1％</td></tr>
              <tr><td>設定6</td><td>1/354.7</td><td>113.2％</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          上の数値は、なな徹・ちょんぼりすたの掲載値です（2026年11月17日時点の確認）。機械割はDMMぱちタウンも「97.9％〜113.2％」と掲載しています。
        </p>

        <h2>ゲームフロー（解析媒体の掲載内容）</h2>
        <p>
          DMMぱちタウンとちょんぼりすた（いずれも2026年11月16日更新）の掲載をもとに、現時点で分かっているゲームフローを整理します。メーカー公式の仕様説明ではなく、導入前の解析媒体の情報です。
        </p>
        <ul>
          <li>通常時：レア役でCZ「SGチャレンジ」を抽選し、規定回数に到達するとより上位のCZ「超抜チャレンジRED」へ（DMMぱちタウン・ちょんぼりすた）。</li>
          <li>AT：ボーナスからスタートし、ボーナスは3種類。AT「SGラッシュRED」は純増変動タイプで、加速ステージ約1.6枚/G、REDゾーン約6.5枚/G。上位AT「究極SGラッシュRED」も搭載（DMMぱちタウン・ちょんぼりすた）。</li>
          <li>ボーナス3種（ちょんぼりすたの掲載）：タイムアタックボーナス（10G+α）、バカンスボーナス（G数上乗せ・150枚以上）、エピソードボーナス（20G）。</li>
          <li>フリーズ：「究極Vフリーズ」で100G以上の上乗せとする掲載がありますが、ちょんぼりすた1媒体のみの情報です。通常のフリーズの確率・契機・恩恵は調査中です。</li>
        </ul>
        <p className="section-note">
          上記の細かい名称・数値のうち、ボーナス3種の内容と究極Vフリーズは単独媒体の情報です。複数媒体で一致が確認できた時点で、確定情報として扱います。
        </p>

        <h2>よくある質問</h2>
        <h3>モンキーターンREDはいつ導入されますか？</h3>
        <p>DMMぱちタウンとなな徹は「2027年1月12日（火）予定」、ちょんぼりすたは「2027年1月上旬予定」と掲載しています。メーカー公式（山佐のティザーPV概要欄）では「2027年1月予定」まで確認でき、具体的な日付は発表されていません。</p>
        <h3>AT確率・機械割・純増はどのくらいですか？</h3>
        <p>AT確率は設定1の1/422.9から設定6の1/354.7、機械割は97.9％〜113.2％と、なな徹・ちょんぼりすたが同じ数値を掲載しています。純増はREDゾーンで約6.5枚/G、加速ステージで約1.6枚/Gです。いずれもメーカー公式では未確認です。</p>
        <h3>ゲームフローはどうなっていますか？</h3>
        <p>通常時はレア役からCZ「SGチャレンジ」、上位CZ「超抜チャレンジRED」を経て、ATは「SGラッシュRED」、上位ATは「究極SGラッシュRED」という流れが掲載されています。詳しくは上の「ゲームフロー」をご覧ください。</p>
        <h3>天井はありますか？</h3>
        <p>なな徹・ちょんぼりすた・DMMぱちタウンとも「調査中」で、天井の有無・ゲーム数・恩恵は分かっていません。</p>
        <h3>朝イチ・リセット恩恵はありますか？</h3>
        <p>設定変更時の挙動や朝イチの扱いは、主要媒体でも調査中・準備中です。現時点では確認できていないため、前作の仕様を当てはめないでください。解析情報が出そろい次第、機種ページで整理します。</p>
        <h3>フリーズはありますか？</h3>
        <p>ちょんぼりすたに「究極Vフリーズ」（100G以上の上乗せ）の掲載がありますが、単独媒体の情報です。展示会で実機を見たとする投稿にも「フリーズ」という項目名が出ていますが、投稿者個人の紹介で、確率や契機は分かっていません。</p>
        <h3>モンキーターンVとの違いは何ですか？</h3>
        <p>名称が「VI」ではなく「RED」で、REDゾーン約6.5枚/Gの純増が紹介されています。展示会で実機を見たとするダイナムのブロック長は「前作とは別物」という印象を投稿していますが、投稿者個人の感想で、メーカーからの比較説明はありません。前作の仕様は<Link href="/machines/monkey-turn-v">スマスロ モンキーターンVの機種ページ</Link>で確認できます。</p>

        <h2>朝一・リセット情報はまだ分からない</h2>
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

        <h2>2026年11月17日時点の情報整理</h2>
        <h3>情報の信頼度</h3>
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
                <td>公式ティザーPVの紹介（DMMぱちタウンの記事）</td>
                <td>導入2027年1月予定、AT「SG RUSH RED」、純増約6.5枚/G、SPLASH ZONE・TIME ATTACK BONUS・RED ZONEの名称、演出「三つ巴」</td>
              </tr>
              <tr>
                <td>展示会参加者の報告（投稿者個人）</td>
                <td>フリーズ・プレミアムボーナス・フルスロットルチャレンジ・優出モード・SGチャレンジ・バカンスボーナスの名称、単価4.0円、AT3層構造（通常→上位→最上位）、ペラpt。複数媒体での確認はまだ取れていない</td>
              </tr>
              <tr>
                <td>機種情報・解析サイトの掲載（なな徹・ちょんぼりすた・DMMぱちタウン）</td>
                <td>AT確率（設定1 1/422.9〜設定6 1/354.7）・機械割（97.9％〜113.2％）、導入日はDMMぱちタウン・なな徹「2027年1月12日（火）予定」、ちょんぼりすた「2027年1月上旬予定」（メーカー公式では未確認）</td>
              </tr>
              <tr>
                <td>未確認</td>
                <td>各ボーナスやフリーズの仕様、朝一・リセット時の挙動、天井、メーカー公式の具体的な導入日、AT確率・機械割のメーカー公式での確認</td>
              </tr>
            </tbody>
          </table>
        </div>
        <section className="card" aria-label="確認できていること">
          <h3>確認できていること</h3>
          <ul>
            <li>名称は「モンキーターンRED」で、山佐ネクストから特報映像が公式に公開されている</li>
            <li>特報内で「王道から挑戦へ」「MODE UP」「COUNT」「最速達成」「JAC IN」「7揃い」「Coming Soon」という単語が確認できる</li>
            <li>シリーズの流れとしては、モンキーターンV（スマスロ）の次回作にあたる</li>
            <li>2026年9月15日、セブンリーグ名義の「LモンキーターンREDSC04H」が型式検定を通過（高知県公安委員会公示、複数業界媒体で確認）</li>
            <li>2026年9月29日、赤いフレーム・下パネルが特徴の筐体画像がSNS上で公開（複数の業界系アカウントで確認、ただし転載の可能性あり）</li>
            <li>2026年10月13日、山佐の公式YouTubeでティザーPVが公開され、概要欄で導入は2027年1月予定、AT「SG RUSH RED」・純増約6.5枚/Gなどが紹介された（DMMぱちタウンの記事による）</li>
            <li>2026年11月時点で、AT確率（設定1 1/422.9〜設定6 1/354.7）・機械割（97.9％〜113.2％）が、なな徹・ちょんぼりすたに同じ数値で掲載されている（メーカー公式では未確認）</li>
            <li>2026年10月15日、実機を見たとする投稿が複数あり、フリーズ・プレミアムボーナス・フルスロットルチャレンジ・SGチャレンジ・バカンスボーナスといった項目が紹介されている（投稿者個人の紹介）</li>
          </ul>
        </section>
        <section className="card warning" aria-label="まだ未確定なこと">
          <h3>まだ未確定なこと</h3>
          <ul>
            <li>メーカー公式によるスペックの確認（AT確率・機械割は解析媒体の掲載値。「コイン単価4.0円」「AT3層構造」は展示会を見た投稿者の説明で、独立した確認ができていない）</li>
            <li>メーカー公式の具体的な導入日（2027年1月予定は概要欄の情報。1月12日はDMMぱちタウン・なな徹、1月上旬はちょんぼりすたの掲載で、表記が割れている）</li>
            <li>フリーズ・各種ボーナスの詳細な仕様と契機（投稿は項目名の紹介にとどまる）</li>
            <li>天井・リセット恩恵・朝一優遇・据え置き・判別方法</li>
            <li>「モンキーVより荒い」といった性能面の噂の真偽</li>
          </ul>
        </section>


        <h2>経緯：発表から現在までの時系列（新しい順）</h2>
        <h3>2026年11月、導入日・AT確率・機械割・ゲームフローが解析媒体に掲載</h3>
        <p>
          11月10日〜16日にかけて、DMMぱちタウン・ちょんぼりすた・なな徹に、導入日・AT確率・機械割、そしてゲームフローが掲載されました。内容は、冒頭の早見表とゲームフローにまとめています。メーカー公式のティザーPV概要欄は「2027年1月予定」の段階で、公式で確認できた情報とは分けて扱っています。
        </p>

        <h3>【続報】2026年10月15日、展示会で実機を見たとする投稿が相次ぐ</h3>
        <p>
          2026年10月15日には、「モンキーターンRED」の実機を見たとする投稿が複数のアカウントから出ています。
          なかでもKEN氏（@html_sns）は、「フリーズ」「プレミアムボーナス」「フルスロットルチャレンジ」といった項目を紹介する動画つきの投稿をしており、約47万表示（10月15日時点）を集めました。
          動画の内容そのものは、当サイトでは検証していません。
        </p>
        <TweetEmbed tweetUrl="https://x.com/html_sns/status/2110572874658726378" authorName="KEN" />
        <p>
          同じ投稿者は、「通常時」「優出モード」「SGチャレンジ」「ボーナス」「バカンスボーナス」といった項目を紹介する投稿も続けています（約22万表示）。
        </p>
        <TweetEmbed tweetUrl="https://x.com/html_sns/status/2110585697077961086" authorName="KEN" />
        <p>
          ダイナムのブロック長とみられるパリテン氏（@paritten_dynam）は、実機を見たうえで、前作のモンキーターンVとは「完全に別物」という印象を投稿し、「単価4.0円」「純増6.5枚」「ペラpt」を変更点として挙げています。
          ATは「通常→上位→最上位」の3層構造で、同社の神喰に近いのでは、という見方も添えています。
        </p>
        <TweetEmbed tweetUrl="https://x.com/paritten_dynam/status/2110521557126967711" authorName="パリテン（ダイナム岡山ブロック長）" />
        <p>
          キコーナのトミー氏（@kicona_tomi）も、「波多野憲三vs青島優子」と紹介する動画を投稿しています。
        </p>
        <TweetEmbed tweetUrl="https://x.com/kicona_tomi/status/2110636143360590261" authorName="キコーナのトミー" />
        <p className="section-note">
          これらは、実機を見たとする投稿者個人の感想・紹介で、メーカーが公式に発表したスペックではありません。展示会参加者のパリテン氏は、コイン単価4.0円、ATは通常→上位→最上位の3層と説明していますが、現時点ではメーカー公式や複数媒体での確認は取れていません。動画で紹介されている「フリーズ」などの名称についても、動画の内容は確認しておらず、性能や突入条件は分かっていません。「純増約6.5枚」は、次のティザーPVの紹介記事とも一致します。
        </p>

        <h3>【続報】2026年10月13日、ティザーPVが公開され「2027年1月導入予定」と紹介</h3>
        <p>
          2026年10月13日付のDMMぱちタウンの記事では、山佐の公式YouTubeチャンネルで、パチスロ新台「モンキーターンRED」のティザーPVが公開されたと伝えています。
          動画の概要欄の情報として、ホールへの導入は2027年1月予定とされ、ATは「SG RUSH RED」で純増は約6.5枚/Gと紹介されています。
        </p>
        <ul>
          <li>機能として「SPLASH ZONE」（赤7図柄を狙う内容とされる）、「TIME ATTACK BONUS」（ボーナス中に制限時間内のゴールを目指す内容とされる）が紹介されています。「RED ZONE」は名称のみで、内容は分かっていません。</li>
          <li>演出面では、3選手のバトルを描く「三つ巴」などが追加されるとしています。</li>
          <li>確率・設定差・機械割は、記事には記載がありません。</li>
        </ul>

        <h3>【続報】2026年9月29日、筐体画像が公開</h3>
        <p>
          2026年9月29日、SNS上で「LモンキーターンRED」の筐体画像が公開され話題になっています。複数の業界系アカウントで同一の筐体画像が共有されており、赤いフレームと下パネルが特徴的なデザインです。画像とあわせて「JAC IN」に関連するとみられる新要素を示唆する表記も確認できます。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/divo_x_central/status/2104751386634461261"
          authorName="島国★購買部"
        />
        <p>
          導入時期については、業界系アカウントの間で「2027年1月11日」「2027年1月12日」など、2027年1月中旬とする情報が出ていますが、投稿によって日付に若干のズレがあり、メーカーからの正式な発表ではありません。正式な導入日は未確定として、引き続き続報を待つ必要があります。
        </p>
        <p className="section-note">
          筐体画像の公開自体は複数のアカウントで確認できますが、いずれも同じ業界配布画像を転載している可能性があり、独立した複数ソースで裏取りができているとまでは言えません。ゲーム性・スペックについても、この記事の時点で正式発表はなく、依然として未確定です。
        </p>

        <h3>【続報】2026年9月15日、型式検定を通過</h3>
        <p>
          2026年9月15日、高知県公安委員会の公示で、セブンリーグ名義の「LモンキーターンREDSC04H」が型式検定を通過したことが確認されました。複数の業界メディアが報じており、パチスロ版の申請名義はセブンリーグ、開発・発売元は特報を出した山佐ネクストという関係とみられます（ぱちんこキュレーション等で「セブンリーグ／山佐ネクスト」と併記）。
        </p>
        <p>
          業界筋の噂では「AT純増約6.5枚のボーナス連チャンタイプ」「コイン単価4円程度」といった情報も出ていますが、いずれもメーカー公式の発表ではなく、現時点では噂の域を出ません。導入時期についても「2026年12月以降」「年末年始になる可能性」といった予想が出ていますが、正式発表ではない点にご注意ください。
        </p>
        <p className="section-note">
          型式検定の通過は「機種として実在し、稼働に向けて手続きが進んでいる」ことを示す確かな事実ですが、検定通過＝スペック確定ではありません。正式なゲーム性・スペック・導入日は、引き続きメーカーの正式発表を待つ必要があります。
        </p>

        <h3>特報映像</h3>
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

        <h3>公式特報で確認できたこと</h3>
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

        <h3>なぜ「VI」ではなく「RED」？</h3>
        <p>
          モンキーターンシリーズは、無印（2011年3月導入）から始まり、モンキーターンII（2014年）、III（2017年）、IV（2020年）と続き、2023年12月にはスマスロ化された「モンキーターンV」が導入されました。
        </p>
        <p>
          この流れを追ってきたファンからすれば、「次はVIだろう」と考えるのが自然な予想です。それが今回、まさかの「RED」という名称で登場したことが、新台ファンの間で大きな話題になっています。
        </p>
        <p>
          ただし、名称が変わったからといって「RED＝完全新システム確定」というわけではありません。ナンバリングを外した理由も含めて、現時点では公式から説明はありません。
        </p>

        <h3>気になるキーワード「JAC IN」</h3>
        <p>
          特報に登場した単語の中でも特に反響が大きいのが「JAC IN」です。一般的にスロット用語として「JAC IN」は、ボーナス中に小役ゲームからJAC（レギュラーボーナス的な状態）へ移行する契機を指す言葉として使われることがあります。
        </p>
        <p>
          ただし、これはあくまで一般的な用語としての意味であり、モンキーターンREDにおいて実際にどのような形で使われるのかは分かっていません。ネット上ではさまざまな予想が飛び交っていますが、現段階では「何を意味するのか気になる」というのが正直なところです。
        </p>

        <h3>導入時期はいつ？</h3>
        <p>
          2026年10月13日のティザーPVの概要欄では、ホールへの導入は2027年1月予定とされています（DMMぱちタウンの紹介記事による）。以前は、2026年末ごろ、2026年12月から2027年1月、2027年1月以降など、複数の見方が出ていましたが、PVの概要欄の記載で、2027年1月に絞られた形です。
        </p>
        <p>
          その後、DMMぱちタウンとなな徹が「2027年1月12日（火）予定」、ちょんぼりすたが「2027年1月上旬予定」と掲載していますが、日付の表記が媒体で異なり、メーカー公式からは具体的な導入日は発表されていません。<strong>正式な導入日は、続報を待つ必要があります。</strong>
        </p>

        <h3>「モンキーVより荒い？」という声も</h3>
        <p>
          ネット上では「モンキーターンVより荒い（ハイリスク・ハイリターン寄りの）性能になるのでは」といった予想も見かけます。ただし、純増約6.5枚/Gという点は、10月13日のティザーPVの紹介で明らかになりましたが、コイン単価・AT性能・出玉性能といった具体的な数値は、メーカーからは公表されていません（展示会の投稿には「単価4.0円」とする説明もあります）。
        </p>
        <p>あくまで予想・期待の声として受け止めるのが適切で、事実として断定できる段階ではありません。</p>

        <h2>まとめ</h2>
        <p>
          モンキーターンREDは、特報映像に続いて2026年9月15日に型式検定も通過し、ファンの間で大きな盛り上がりを見せている新台です。正式な発表が待たれる段階ではありますが、「王道から挑戦へ」というコピーや「JAC IN」というキーワードなど、気になる要素はすでに出そろっています。
        </p>
        <p>続報が入り次第、ワンチャンくんでも改めて紹介していきます。楽しみに待ちましょう。</p>
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

        <div className="article-link-box" aria-label="10月5日導入の新台">
          <p>
            2026年10月5日に導入された新台の機種ページです。山佐ネクストの新台は「パリピ孔明」で、朝一・リセット恩恵や天井の情報をまとめています。
          </p>
          <ul>
            <li>
              <Link href="/machines/juoh">スマスロ獣王（サミー）の機種ページ</Link>
            </li>
            <li>
              <Link href="/machines/paripi-koumei">スマスロパリピ孔明（山佐ネクスト）の機種ページ</Link>
            </li>
            <li>
              <Link href="/machines/tensei-oujo-to-tensai-reijou">L転生王女と天才令嬢の魔法革命（オリンピアエステート）の機種ページ</Link>
            </li>
          </ul>
        </div>

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
                href="https://x.com/divo_x_central/status/2104751386634461261"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                島国★購買部（2026年9月29日、筐体画像の投稿）
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
                ぱちんこキュレーション（セブンリーグ／山佐ネクストの関係を確認）
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
                href="https://p-town.dmm.com/machines/5136"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                DMMぱちタウン（スマスロ モンキーターンRED 機種情報・2026年11月17日確認、11月16日更新）
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
              （2026年11月16日更新・ゲームフロー掲載、天井は調査中）
            </li>
            <li>
              <a
                href="https://nana-press.com/kaiseki/machine/1255/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                なな徹
              </a>
              （2026年10月22日更新・導入日・AT確率・機械割を掲載、天井は調査中）
            </li>
            <li>
              <a
                href="https://web-greenbelt.jp/post-118168/"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                web-greenbelt（2026年9月15日型式検定通過の公示情報）
              </a>
            </li>
          </ul>
        </div>

        <ArticleRelatedLinks
          links={[
            { href: "/machines/monkey-turn-v", label: "スマスロ モンキーターンV｜朝イチ・リセット恩恵と天井" },
            { href: "/articles/monkey-turn-v-5mai-yaku", label: "モンキーターンV 5枚役の解説" },
            { href: "/machines/paripi-koumei", label: "スマスロ パリピ孔明｜リセット恩恵・朝イチ打ち出し目安" },
            { href: "/machines/tokyo-ghoul", label: "スマスロ 東京喰種｜朝一・リセット恩恵" },
            { href: "/machines", label: "朝イチ・リセット恩恵がわかる機種一覧" },
          ]}
        />
        <ShareButtons url={url} title={title} />
        <Comments slug="monkey-turn-red-news" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
