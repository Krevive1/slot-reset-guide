import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "パチスロ用語集｜朝一リセット初心者向け基本用語まとめ";
const description =
  "天井、CZ、有利区間、設定変更など、朝一リセットを理解するうえで欠かせないパチスロの基本用語を初心者向けに解説します。";
const url = `${SITE_URL}/guides/yougo-shu`;

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

type Term = {
  word: string;
  reading: string;
  note: string;
};

const categories: { title: string; terms: Term[] }[] = [
  {
    title: "遊技の基本用語",
    terms: [
      {
        word: "天井",
        reading: "てんじょう",
        note: "一定のゲーム数やポイントに到達すると、ボーナスやAT（差枚が増える状態）が確定する仕組みのことです。機種ごとに天井のゲーム数は異なります。",
      },
      {
        word: "CZ（チャンスゾーン）",
        reading: "シーゼット",
        note: "AT・ボーナスへの当選確率が通常時より高くなる、数ゲーム間の抽選パートです。CZに当選しただけでは必ずAT・ボーナスに繋がるとは限りません。",
      },
      {
        word: "AT／ART",
        reading: "エーティー／エーアールティー",
        note: "遊技者に有利な手順が画面などで指示され、差枚を増やしやすい状態のことです。ATはリプレイ確率が変わらないタイプ、ARTはリプレイ確率も上がるタイプを指します。",
      },
      {
        word: "ゲーム数",
        reading: "げーむすう",
        note: "レバーを叩いた（スタートさせた）回数のことです。天井や周期の起点として使われる、最も基本的な指標です。",
      },
      {
        word: "差枚",
        reading: "さまい",
        note: "投入したメダル数と払い出されたメダル数の差のことです。プラスであれば投資額より多く払い出されている状態を意味します。",
      },
      {
        word: "純増",
        reading: "じゅんぞう",
        note: "AT・ART中などに、1ゲームあたり平均でどれくらい差枚が増えるかを示す数値です。純増が大きいほど短時間で差枚を伸ばしやすくなります。",
      },
      {
        word: "前兆",
        reading: "ぜんちょう",
        note: "ボーナスやCZの当選が確定した後、実際に演出が発生するまでの数ゲームの準備期間のことです。",
      },
    ],
  },
  {
    title: "リセット・設定関連の用語",
    terms: [
      {
        word: "設定変更",
        reading: "せっていへんこう",
        note: "ホールの店員が台の設定（1〜6）を変更する作業のことです。設定変更を行うと、多くの機種で内部状態がリセットされます。",
      },
      {
        word: "リセット",
        reading: "りせっと",
        note: "内部状態が初期化され、前日までの記憶（ゲーム数や内部モードなど）が引き継がれなくなることです。基本的には設定変更にともなって発生します。",
      },
      {
        word: "据え置き",
        reading: "すえおき",
        note: "設定変更が行われず、前日の内部状態（ゲーム数や内部モードなど）がそのまま引き継がれている状態のことです。リセットの対義語にあたります。",
      },
      {
        word: "有利区間",
        reading: "ゆうりくかん",
        note: "AT・ARTなど遊技者に有利な状態をいつまでも連続させないよう、法令で定められた区間管理の仕組みです。有利区間が一定条件でリセットされることが、朝一の判別材料の一つになります。",
      },
    ],
  },
  {
    title: "立ち回り・判別に関わる用語",
    terms: [
      {
        word: "内部モード",
        reading: "ないぶもーど",
        note: "機種内部で管理されている、当選確率の高低を分けるグループのことです。モードによってボーナス・AT当選率が変化します。",
      },
      {
        word: "スルー回数",
        reading: "するーかいすう",
        note: "ボーナス成立のチャンスがありながら、当選せずに見送られた（スルーした）回数のことです。天井とは別に、スルー回数を天井条件に含む機種もあります。",
      },
      {
        word: "周期",
        reading: "しゅうき",
        note: "一定のゲーム数やポイントを1つの区切り（周期）として、その周期を何回消化したかで天井やAT当選が管理される仕組みです。",
      },
      {
        word: "朝一",
        reading: "あさいち",
        note: "ホールの開店直後、その日最初にその台で遊技を始めることです。設定変更・リセットの直後を狙う立ち回りの基本になります。",
      },
      {
        word: "朝二",
        reading: "あさに",
        note: "朝一で一度離席・移動した後、同じ日のうちに改めて別の台（または同じ台）で遊技を始めることです。朝一とは異なり、他の遊技者の状況も判断材料に含まれます。",
      },
    ],
  },
  {
    title: "スラング・ネタ用語（一息コラム）",
    terms: [
      {
        word: "脳汁",
        reading: "のうじる",
        note: "大きな当たりや期待していた演出が来たときの、あの脳が痺れるような興奮のことです。医学用語ではありません。",
      },
      {
        word: "パチンカス",
        reading: "ぱちんかす",
        note: "パチスロ・パチンコにのめり込んでいる人を指す自虐スラングです。愛好者同士が自分を茶化して使う言葉で、他人を見下す目的では使わないのがマナーです。",
      },
      {
        word: "養分",
        reading: "ようぶん",
        note: "根拠の薄い立ち回りで負けを重ね、結果的にホールや周りの遊技者を潤す側に回ってしまっている人を指す自虐スラングです。",
      },
      {
        word: "ハイエナ",
        reading: "はいえな",
        note: "他の遊技者が離席した後の台で、天井やCZ間近など期待値の高い状態だけを狙って座ることです。据え置きの恩恵を横取りするイメージからこう呼ばれます。",
      },
      {
        word: "コロガシ",
        reading: "ころがし",
        note: "少ない投資でボーナスを引き、その差枚を再投資しながら軍資金を増やしていく立ち回りのことです。低投資・低リスク志向の打ち方の一つです。",
      },
      {
        word: "据え置き警察",
        reading: "すえおきけいさつ",
        note: "台のわずかな挙動だけを根拠に「これは絶対に据え置き」と断定したがる人をからかう言葉です。判別は確率の話であり、断定できるものではありません。",
      },
      {
        word: "こぜ6",
        reading: "こぜろく",
        note: "「これは設定6だろう」を略したスラングです。初当たりの軽さや高設定示唆など、挙動から「かなり設定6っぽい」と感じたときに使われます。設定6が確定したわけではなく、あくまで体感・示唆ベースの表現です。確定演出が出た場合は「6確（ろっかく）」と呼ぶのが一般的です。",
      },
      {
        word: "ツモる／ツモった",
        reading: "つもる",
        note: "高設定の台を確保することです。「設定6をツモった」のように使います。元は麻雀用語で、狙って引いたというより運良く割り当てられたニュアンスで使われます。",
      },
      {
        word: "上っぽい／下っぽい",
        reading: "うえっぽい／したっぽい",
        note: "挙動やデータから見て「高設定っぽい」「低設定っぽい」という体感を表す言葉です。こぜ6と同じく、確定情報ではありません。",
      },
      {
        word: "事故る／事故った",
        reading: "じこる",
        note: "確率の低いフラグや上位状態を引いて、想定以上に出玉が伸びることです。トラブルではなく、良い意味で使われるスラングです。",
      },
      {
        word: "駆け抜け",
        reading: "かけぬけ",
        note: "AT・ARTに当選しても、上乗せや出玉がほとんど伸びずに終わってしまうことです。",
      },
      {
        word: "全リセ",
        reading: "ぜんりせ",
        note: "店内の対象機種、または全台が設定変更・リセットされている状態のことです。",
      },
      {
        word: "リセ狩り",
        reading: "りせがり",
        note: "設定変更・リセットの恩恵がある台を朝一から狙う立ち回りのことです。このサイトのテーマそのものにあたる言葉です。",
      },
      {
        word: "焼かれる",
        reading: "やかれる",
        note: "大きく負けたり、強烈な出玉体験によって金銭感覚や立ち回りの判断が狂ってしまうことです。",
      },
      {
        word: "ガックン",
        reading: "がっくん",
        note: "朝一のリール始動時に見られる、不自然な引っかかりのような動きのことです。設定変更判別の参考にされることがありますが、ホール側で対策されている場合もあり、絶対的な判別材料ではありません。",
      },
    ],
  },
];

export default function YougoShuArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/guides/yougo-shu" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>導入</h2>
        <p>
          朝一リセットの記事や機種ページを読んでいると、「天井」「CZ」「有利区間」といった専門用語が数多く出てきます。
          このページでは、そうした基本用語を初心者向けにまとめて解説します。
        </p>
        <p>
          用語の意味を一通り押さえておくと、機種ごとのリセット恩恵や判別方法の解説がぐっと理解しやすくなります。
        </p>

        {categories.map((category) => (
          <section className="article-category" key={category.title}>
            <h2>{category.title}</h2>
            <div className="article-machine-grid">
              {category.terms.map((term) => (
                <article className="article-machine-card" key={term.word}>
                  <h3>
                    {term.word}
                    <span className="section-note">（{term.reading}）</span>
                  </h3>
                  <p>{term.note}</p>
                </article>
              ))}
            </div>
          </section>
        ))}

        <div className="article-link-box">
          <p>
            用語を押さえたら、実際の判別方法・やめどきの考え方もあわせて確認してください。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link></li>
            <li><Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link></li>
            <li><Link href="/machines">機種一覧から個別の恩恵・判別方法を見る</Link></li>
          </ul>
        </div>

        <h2>注意点</h2>
        <ul>
          <li>用語の定義は一般的な使われ方をもとにした参考情報であり、遊技結果を保証するものではありません。</li>
          <li>機種によって同じ用語でも呼び方や細かい仕様が異なる場合があります。個別の機種ページもあわせて確認してください。</li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
