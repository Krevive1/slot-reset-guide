import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "朝イチリセット恩恵を確認したい機種まとめ";
const description =
  "朝イチリセット後の天井短縮、モード優遇、高確スタートなどを機種別に確認しやすく整理したまとめ記事です。";
const url = `${SITE_URL}/articles/reset-benefit-machines`;

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

type ArticleMachine = {
  slug: string;
  name: string;
  summary: string;
  point: string;
};

const machinesBySlug: Record<string, ArticleMachine> = {
  "bakemonogatari": {
    slug: "bakemonogatari",
    name: "スマスロ化物語",
    summary: "設定変更時の天井短縮を確認したい機種です。",
    point: "AT後天井の短縮内容と現在ゲーム数を確認します。",
  },
  "banchou-3": {
    slug: "banchou-3",
    name: "押忍!番長3",
    summary: "ベル天井短縮や初回対決の扱いを確認したい機種です。",
    point: "ベル回数、初回対決、前日状況をあわせて見ます。",
  },
  "basilisk-kizuna-2-tenzen-black": {
    slug: "basilisk-kizuna-2-tenzen-black",
    name: "バジリスク絆2 天膳 BLACK EDITION",
    summary: "リセット恩恵が大きいタイプではないため、通常の状況確認が重要です。",
    point: "BC間ゲーム数、スルー回数、前日からの状態を確認します。",
  },
  "biohazard-re3": {
    slug: "biohazard-re3",
    name: "スマスロバイオハザードRE:3",
    summary: "AT間天井短縮とポイント加算を確認したい機種です。",
    point: "AT間ゲーム数とNE-ポイントの扱いを確認します。",
  },
  "birdie-wing": {
    slug: "birdie-wing",
    name: "スマスロBIRDIE WING",
    summary: "周期天井の短縮を確認したい機種です。",
    point: "現在周期と朝一の進行状況を確認します。",
  },
  "chibariyo-2": {
    slug: "chibariyo-2",
    name: "チバリヨ2",
    summary: "天井短縮とモード移行を確認したい機種です。",
    point: "ゲーム数、チェリー回数、モード示唆を分けて見ます。",
  },
  "chinjin-gonin-5": {
    slug: "chinjin-gonin-5",
    name: "L主役は銭形5",
    summary: "天井短縮とゲーム数加算を確認したい機種です。",
    point: "前日ゲーム数と当日の進み方を確認します。",
  },
  "code-geass-fukkatsu-no-lelouch": {
    slug: "code-geass-fukkatsu-no-lelouch",
    name: "スマスロコードギアス 復活のルルーシュ",
    summary: "リセットモード時の天井短縮を確認したい機種です。",
    point: "モード別天井と当日ゲーム数を確認します。",
  },
  "en-en-no-shouboutai-2": {
    slug: "en-en-no-shouboutai-2",
    name: "Lパチスロ炎炎ノ消防隊2",
    summary: "複数の天井短縮とモード振り分けを確認したい機種です。",
    point: "ボーナス間、炎炎ループ間、通常モードの扱いを見ます。",
  },
  "golden-kamuy": {
    slug: "golden-kamuy",
    name: "スマスロゴールデンカムイ",
    summary: "天井短縮と砂金ポイントの初期状態を確認したい機種です。",
    point: "ピュウ数とポイント示唆を確認します。",
  },
  "gundam-unicorn-kakusei-drive": {
    slug: "gundam-unicorn-kakusei-drive",
    name: "Lガンダムユニコーン 覚醒DRIVE",
    summary: "CZ間とAT間の天井短縮を確認したい機種です。",
    point: "CZ間ゲーム数、AT間ゲーム数、加算状況を見ます。",
  },
  "hanma-baki": {
    slug: "hanma-baki",
    name: "L範馬刃牙",
    summary: "仮天井とモードの扱いを確認したい機種です。",
    point: "200G付近の扱いと前日状況を確認します。",
  },
  "hokuto-no-ken-smart-slot": {
    slug: "hokuto-no-ken-smart-slot",
    name: "スマスロ北斗の拳",
    summary: "設定変更時の天井短縮を確認したい機種です。",
    point: "短縮天井の位置と当日ゲーム数を確認します。",
  },
  "hokuto-no-ken-tensei-2": {
    slug: "hokuto-no-ken-tensei-2",
    name: "Lスマスロ北斗の拳 転生の章2",
    summary: "あべし数の短縮と加算を確認したい機種です。",
    point: "現在あべし数と加算状況を確認します。",
  },
  "hokuto-tensho": {
    slug: "hokuto-tensho",
    name: "北斗の拳 天昇",
    summary: "有利区間の継続有無を慎重に確認したい機種です。",
    point: "有利区間ランプや前日からの状態を見ます。",
  },
  "kabaneri-kaimon-kessen": {
    slug: "kabaneri-kaimon-kessen",
    name: "スマスロカバネリ 海門決戦",
    summary: "ゲーム数と周期の短縮を確認したい機種です。",
    point: "当日ゲーム数、周期数、前日の消化状況を見ます。",
  },
  "kabaneri-koutetsujou": {
    slug: "kabaneri-koutetsujou",
    name: "パチスロ甲鉄城のカバネリ（無印）",
    summary: "短縮天井型ではなく、有利区間状況を確認したい機種です。",
    point: "前日状況と有利区間の扱いを分けて確認します。",
  },
  "karakuri-circus-2": {
    slug: "karakuri-circus-2",
    name: "Lからくりサーカス2",
    summary: "液晶CZ天井の短縮を確認したい機種です。",
    point: "液晶ゲーム数と実ゲーム数の違いに注意します。",
  },
  "kinnikuman-7akuma": {
    slug: "kinnikuman-7akuma",
    name: "Lスマスロ キン肉マン 7人の悪魔超人編",
    summary: "チャンスモード移行や初期ポイントを確認したい機種です。",
    point: "超人パワーとモード示唆を確認します。",
  },
  "magia-record": {
    slug: "magia-record",
    name: "スマスロマギアレコード",
    summary: "天井短縮はあるものの、慎重に確認したい機種です。",
    point: "ポイント天井と現在位置を確認します。",
  },
  "magical-halloween-8": {
    slug: "magical-halloween-8",
    name: "マジカルハロウィン8",
    summary: "ランダム短縮や朝一状態を確認したい機種です。",
    point: "天井短縮の有無と朝一挙動を確認します。",
  },
  "million-god-kamigami-no-kiseki": {
    slug: "million-god-kamigami-no-kiseki",
    name: "スマスロミリオンゴッド 神々の軌跡",
    summary: "一部で天井短縮が発生するため、条件を確認したい機種です。",
    point: "短縮の可能性と当日ゲーム数を確認します。",
  },
  "monkey-turn-v": {
    slug: "monkey-turn-v",
    name: "スマスロモンキーターンV",
    summary: "AT間と周期天井の短縮を確認したい機種です。",
    point: "ゲーム数、周期、前日状況をあわせて見ます。",
  },
  "monster-hunter-rise": {
    slug: "monster-hunter-rise",
    name: "スマスロモンスターハンターライズ",
    summary: "天井短縮ではなくモード優遇を確認したい機種です。",
    point: "モード示唆や天国準備の扱いを確認します。",
  },
  "mushoku-tensei": {
    slug: "mushoku-tensei",
    name: "L無職転生",
    summary: "ステータスチェンジ天井の短縮を慎重に確認したい機種です。",
    point: "回数天井と到達しやすさを分けて見ます。",
  },
  "nangoku-sodachi-special": {
    slug: "nangoku-sodachi-special",
    name: "L南国育ちSPECIAL",
    summary: "天井短縮とチャンス以上のモード選択を確認したい機種です。",
    point: "モード振り分けと最大天井を確認します。",
  },
  "okidoki-black": {
    slug: "okidoki-black",
    name: "沖ドキ!BLACK",
    summary: "有利区間リセット後の天井短縮やモードを確認したい機種です。",
    point: "通常A/B、引き戻し、チャンスの扱いを分けて見ます。",
  },
  "okidoki-gold-30": {
    slug: "okidoki-gold-30",
    name: "沖ドキ!GOLD-30",
    summary: "チャンスモード移行と天井短縮を確認したい機種です。",
    point: "朝一、朝二の状況とモード示唆を確認します。",
  },
  "okidoki-gorgeous-30": {
    slug: "okidoki-gorgeous-30",
    name: "沖ドキ!ゴージャス30Φ",
    summary: "モード振り分けと天井短縮を確認したい機種です。",
    point: "通常A/Bとチャンスモードの扱いを確認します。",
  },
  "one-punch-man": {
    slug: "one-punch-man",
    name: "スマスロワンパンマン",
    summary: "通常B以上への移行を確認したい機種です。",
    point: "モード示唆演出を見ながら慎重に判断します。",
  },
  "re-zero-season2": {
    slug: "re-zero-season2",
    name: "スロットRe:ゼロ Season2",
    summary: "ポイント天井短縮とポイント加算を確認したい機種です。",
    point: "規定ポイントと当日の加算状況を確認します。",
  },
  "salaryman-banchou-2": {
    slug: "salaryman-banchou-2",
    name: "押忍!サラリーマン番長2",
    summary: "明確な天井短縮よりもモード再抽選を確認したい機種です。",
    point: "モード示唆と前日状況を中心に見ます。",
  },
  "seiya-kaiou-custom-edition": {
    slug: "seiya-kaiou-custom-edition",
    name: "L聖闘士星矢 海皇覚醒 CUSTOM EDITION",
    summary: "AT後天井短縮とGB高確を確認したい機種です。",
    point: "天井位置、GB高確、GBレベル示唆を確認します。",
  },
  "sengoku-collection-6": {
    slug: "sengoku-collection-6",
    name: "戦国コレクション6",
    summary: "周期天井短縮と規定コレ数を確認したい機種です。",
    point: "周期数と1周期目の規定コレ数を確認します。",
  },
  "sengoku-otome-5": {
    slug: "sengoku-otome-5",
    name: "L戦国乙女5",
    summary: "天井短縮と巫女ポイント加算を確認したい機種です。",
    point: "ゲーム数、周期、ポイントの状況を見ます。",
  },
  "shaman-king": {
    slug: "shaman-king",
    name: "スマスロシャーマンキング",
    summary: "ボーナス間天井短縮とポイント加算を確認したい機種です。",
    point: "憑依ポイントや巫門遁甲ポイントを確認します。",
  },
  "shin-hokuto-musou": {
    slug: "shin-hokuto-musou",
    name: "スマスロ真・北斗無双",
    summary: "モード条件による短縮を確認したい機種です。",
    point: "宿命数とモード示唆を確認します。",
  },
  "shin-onimusha-3": {
    slug: "shin-onimusha-3",
    name: "スマスロ鬼武者3・L新鬼武者3",
    summary: "周期天井短縮と初回BPを確認したい機種です。",
    point: "周期数と初回BPの示唆を確認します。",
  },
  "super-rio-ace-2": {
    slug: "super-rio-ace-2",
    name: "スマスロスーパーリオエース2",
    summary: "ボーナス間天井短縮とスルー回数短縮を確認したい機種です。",
    point: "ボーナス間ゲーム数とスルー回数を確認します。",
  },
  "taikai4-with-sonoko": {
    slug: "taikai4-with-sonoko",
    name: "大海物語4 with すーぱーそに子",
    summary: "朝一リセット狙いの対象としては慎重に扱いたい機種です。",
    point: "通常の遊技性と朝一向きかどうかを分けて見ます。",
  },
  "tekken-6": {
    slug: "tekken-6",
    name: "スマスロ鉄拳6",
    summary: "天井短縮とスルー天井短縮を確認したい機種です。",
    point: "ポイント数とスルー回数を確認します。",
  },
  "toaru-majutsu-no-index": {
    slug: "toaru-majutsu-no-index",
    name: "Lスマスロ とある魔術の禁書目録",
    summary: "通常B以上やチャンスモード移行を確認したい機種です。",
    point: "モード示唆と現在ゲーム数を確認します。",
  },
  "tokyo-ghoul": {
    slug: "tokyo-ghoul",
    name: "L東京喰種（スマスロ東京グール）",
    summary: "朝一専用モードとCZ間天井短縮を確認したい機種です。",
    point: "CZ間ゲーム数と朝一専用モードの扱いを確認します。",
  },
  "valvrave-2": {
    slug: "valvrave-2",
    name: "Lヴァルヴレイヴ2",
    summary: "天井短縮と周期短縮を確認したい機種です。",
    point: "ボーナス・AT間ゲーム数と周期数を確認します。",
  },
};

const categories = [
  {
    title: "天井短縮を確認したい機種",
    description: "朝一の天井位置が変わる可能性がある機種です。前日最終ゲーム数と当日ゲーム数を分けて確認します。",
    slugs: [
      "bakemonogatari",
      "biohazard-re3",
      "birdie-wing",
      "chinjin-gonin-5",
      "code-geass-fukkatsu-no-lelouch",
      "en-en-no-shouboutai-2",
      "golden-kamuy",
      "gundam-unicorn-kakusei-drive",
      "hokuto-no-ken-smart-slot",
      "hokuto-no-ken-tensei-2",
      "kabaneri-kaimon-kessen",
      "karakuri-circus-2",
      "magia-record",
      "magical-halloween-8",
      "million-god-kamigami-no-kiseki",
      "monkey-turn-v",
      "mushoku-tensei",
      "re-zero-season2",
      "sengoku-collection-6",
      "sengoku-otome-5",
      "shaman-king",
      "shin-onimusha-3",
      "super-rio-ace-2",
      "tekken-6",
      "tokyo-ghoul",
      "valvrave-2",
    ],
  },
  {
    title: "モード優遇を確認したい機種",
    description: "天井だけでなく、内部モードや初回抽選の扱いを確認したい機種です。",
    slugs: [
      "banchou-3",
      "chibariyo-2",
      "hanma-baki",
      "kinnikuman-7akuma",
      "monster-hunter-rise",
      "nangoku-sodachi-special",
      "okidoki-gold-30",
      "okidoki-gorgeous-30",
      "one-punch-man",
      "seiya-kaiou-custom-edition",
      "shin-hokuto-musou",
      "toaru-majutsu-no-index",
    ],
  },
  {
    title: "高確・内部状態を確認したい機種",
    description: "ポイント加算、高確、内部状態の示唆をあわせて見たい機種です。",
    slugs: [
      "biohazard-re3",
      "golden-kamuy",
      "kinnikuman-7akuma",
      "magical-halloween-8",
      "okidoki-black",
      "re-zero-season2",
      "seiya-kaiou-custom-edition",
      "sengoku-otome-5",
      "shaman-king",
    ],
  },
  {
    title: "判別ポイントを確認したい機種",
    description: "液晶表示、ステージ、有利区間、周期数などの見落としを避けたい機種です。",
    slugs: [
      "birdie-wing",
      "hokuto-tensho",
      "kabaneri-koutetsujou",
      "okidoki-black",
      "okidoki-gold-30",
      "okidoki-gorgeous-30",
      "one-punch-man",
      "salaryman-banchou-2",
    ],
  },
  {
    title: "朝一で慎重に確認したい機種",
    description: "恩恵が控えめ、条件付き、または通常の状況確認が中心になる機種です。",
    slugs: [
      "basilisk-kizuna-2-tenzen-black",
      "kabaneri-koutetsujou",
      "karakuri-circus-2",
      "magia-record",
      "million-god-kamigami-no-kiseki",
      "mushoku-tensei",
      "okidoki-black",
      "okidoki-gorgeous-30",
      "salaryman-banchou-2",
      "taikai4-with-sonoko",
    ],
  },
];

function ArticleMachineCard({ machine }: { machine: ArticleMachine }) {
  return (
    <article className="article-machine-card">
      <h3>{machine.name}</h3>
      <p>{machine.summary}</p>
      <p className="section-note">確認したいポイント：{machine.point}</p>
      <Link href={`/machines/${machine.slug}`}>個別ページを見る</Link>
    </article>
  );
}

export default function ResetBenefitMachinesArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/reset-benefit-machines" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>導入</h2>
        <p>
          朝イチリセット後の挙動は機種ごとに異なります。天井短縮、モード優遇、高確スタートなど内容はさまざまです。
          ただし、リセットされたから有利と断定できるわけではありません。
        </p>
        <p>
          このページは、各機種ページを確認するための入口です。詳しい条件や注意点は、個別ページで確認してください。
        </p>

        <h2>このページの見方</h2>
        <ul>
          <li>リセット恩恵の種類を確認する</li>
          <li>判別しやすさを確認する</li>
          <li>朝一で確認したいポイントを整理する</li>
          <li>注意点を読んで、深追いを避ける</li>
          <li>詳細は各機種ページで確認する</li>
        </ul>

        <div className="article-link-box">
          <p>
            朝一で何を確認すればよいか迷う場合は、
            <Link href="/line/checklist">初心者チェックリスト</Link>も参考にしてください。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/line/checklist">朝一リセット狙い 初心者チェックリスト</Link></li>
            <li><Link href="/line">LINE公式アカウント案内</Link></li>
            <li><Link href="/articles/careful-morning-machines">朝一で慎重に確認したい機種まとめ</Link></li>
          </ul>
        </div>

        <h2>カテゴリ別に機種を確認する</h2>
        {categories.map((category) => (
          <section className="article-category" key={category.title}>
            <h2>{category.title}</h2>
            <p className="section-note">{category.description}</p>
            <div className="article-machine-grid">
              {category.slugs.map((slug) => (
                <ArticleMachineCard key={`${category.title}-${slug}`} machine={machinesBySlug[slug]} />
              ))}
            </div>
          </section>
        ))}

        <h2>注意点</h2>
        <ul>
          <li>掲載内容は公開情報・実践動画・独自整理をもとにした参考情報です。</li>
          <li>遊技結果を保証するものではありません。</li>
          <li>無理な投資や深追いは避けてください。</li>
          <li>店舗状況や台の状態によって挙動は異なる場合があります。</li>
        </ul>

        <LineCta />
      </div>
    </article>
  );
}
