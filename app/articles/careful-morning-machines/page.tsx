import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "朝一で慎重に確認したい機種まとめ｜初心者向けチェックポイント";
const description =
  "朝一で判別が難しい機種、恩恵内容をよく確認したい機種、深追いに注意したい機種を初心者向けに整理したまとめ記事です。";
const url = `${SITE_URL}/articles/careful-morning-machines`;

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

type CarefulMachine = {
  slug: string;
  name: string;
  reason: string;
  point: string;
};

const categories: { title: string; description: string; machines: CarefulMachine[] }[] = [
  {
    title: "判別が難しい機種",
    description: "見た目だけでは据え置き・リセットを判断しにくい機種です。前日状況と当日の表示を分けて確認します。",
    machines: [
      {
        slug: "hokuto-tensho",
        name: "北斗の拳 天昇",
        reason: "有利区間の継続有無で見方が変わるため、朝一の表示だけで判断しにくい機種です。",
        point: "有利区間ランプ、前日最終ゲーム数、当日のゲーム数を確認します。",
      },
      {
        slug: "kabaneri-koutetsujou",
        name: "パチスロ甲鉄城のカバネリ（無印）",
        reason: "短縮天井型ではなく、有利区間状況の確認が中心になります。",
        point: "前日状況、有利区間、特殊な狙い方に関わる状態を確認します。",
      },
      {
        slug: "okidoki-black",
        name: "沖ドキ!BLACK",
        reason: "有利区間リセット後のモードや短縮の扱いを分けて見る必要があります。",
        point: "通常A/B、引き戻し、チャンスの扱いを確認します。",
      },
      {
        slug: "okidoki-gold-30",
        name: "沖ドキ!GOLD-30",
        reason: "朝一と朝二で確認したいポイントが変わるため、状況整理が重要です。",
        point: "朝一の当たり方、前日履歴、モード示唆を確認します。",
      },
      {
        slug: "okidoki-gorgeous-30",
        name: "沖ドキ!ゴージャス30Φ",
        reason: "モード振り分けと天井短縮の条件を分けて見る必要があります。",
        point: "通常A/B、チャンスモード、当日ゲーム数を確認します。",
      },
      {
        slug: "salaryman-banchou-2",
        name: "押忍!サラリーマン番長2",
        reason: "明確な天井短縮よりも内部モードの再抽選を確認したい機種です。",
        point: "モード示唆、前日ゲーム数、当日の挙動を確認します。",
      },
      {
        slug: "one-punch-man",
        name: "スマスロワンパンマン",
        reason: "天井短縮型ではなく、モード示唆を見ながら判断したい機種です。",
        point: "通常B以上の示唆や当日の演出を確認します。",
      },
      {
        slug: "magical-halloween-8",
        name: "マジカルハロウィン8",
        reason: "天井短縮がランダム要素を含むため、断定しにくい機種です。",
        point: "朝一挙動、天井短縮の有無、現在ゲーム数を確認します。",
      },
    ],
  },
  {
    title: "恩恵内容をよく確認したい機種",
    description: "恩恵が限定的、条件付き、または通常の状況確認が中心になる機種です。",
    machines: [
      {
        slug: "basilisk-kizuna-2-tenzen-black",
        name: "バジリスク絆2 天膳 BLACK EDITION",
        reason: "リセットによる大きな天井短縮があるタイプではありません。",
        point: "BC間ゲーム数、スルー回数、有利区間移行時の扱いを確認します。",
      },
      {
        slug: "magia-record",
        name: "スマスロマギアレコード",
        reason: "天井短縮はありますが、恩恵は控えめに扱いたい機種です。",
        point: "ポイント天井、現在位置、投資上限を確認します。",
      },
      {
        slug: "million-god-kamigami-no-kiseki",
        name: "スマスロミリオンゴッド 神々の軌跡",
        reason: "短縮が一部条件で発生するため、毎回同じ見方はできません。",
        point: "短縮の可能性、現在ゲーム数、前日状況を確認します。",
      },
      {
        slug: "mushoku-tensei",
        name: "L無職転生",
        reason: "天井短縮はありますが、到達しやすさもあわせて見る必要があります。",
        point: "ステータスチェンジ回数と現在位置を確認します。",
      },
      {
        slug: "karakuri-circus-2",
        name: "Lからくりサーカス2",
        reason: "液晶ゲーム数と実ゲーム数を混同しやすい機種です。",
        point: "液晶CZ天井、実ゲーム数、前日履歴を確認します。",
      },
      {
        slug: "monster-hunter-rise",
        name: "スマスロモンスターハンターライズ",
        reason: "天井短縮ではなくモード優遇が中心のため、見方を分ける必要があります。",
        point: "モード示唆、天国準備の扱い、当日ゲーム数を確認します。",
      },
      {
        slug: "kinnikuman-7akuma",
        name: "Lスマスロ キン肉マン 7人の悪魔超人編",
        reason: "モード移行や初期ポイントの確認が中心になります。",
        point: "超人パワー、モード示唆、前兆の位置を確認します。",
      },
      {
        slug: "taikai4-with-sonoko",
        name: "大海物語4 with すーぱーそに子",
        reason: "朝一リセット狙いの対象としては慎重に扱いたい機種です。",
        point: "通常の遊技性と朝一向きかどうかを分けて確認します。",
      },
    ],
  },
  {
    title: "深追いに注意したい機種",
    description: "条件を確認せずに追い続けると判断がぶれやすい機種です。先にやめどきを決めておきます。",
    machines: [
      {
        slug: "valvrave-2",
        name: "Lヴァルヴレイヴ2",
        reason: "天井短縮や周期短縮はありますが、投資が大きくなりやすい場面があります。",
        point: "ボーナス・AT間ゲーム数、周期数、上限金額を確認します。",
      },
      {
        slug: "hokuto-no-ken-tensei-2",
        name: "Lスマスロ北斗の拳 転生の章2",
        reason: "あべし数の確認が必要で、現在位置を見誤ると追いすぎやすい機種です。",
        point: "現在あべし数、加算状況、前日履歴を確認します。",
      },
      {
        slug: "chinjin-gonin-5",
        name: "L主役は銭形5",
        reason: "天井短縮とゲーム数加算の扱いを確認してから判断したい機種です。",
        point: "前日ゲーム数、当日ゲーム数、加算の見方を確認します。",
      },
      {
        slug: "chibariyo-2",
        name: "チバリヨ2",
        reason: "モード期待だけで追うと判断が偏りやすい機種です。",
        point: "ゲーム数、チェリー回数、モード示唆を確認します。",
      },
      {
        slug: "banchou-3",
        name: "押忍!番長3",
        reason: "ベル回数や初回対決の扱いを確認せずに追うと判断しにくくなります。",
        point: "ベル回数、初回対決、前日状況を確認します。",
      },
      {
        slug: "seiya-kaiou-custom-edition",
        name: "L聖闘士星矢 海皇覚醒 CUSTOM EDITION",
        reason: "天井短縮とGB高確の扱いを分けて確認したい機種です。",
        point: "天井位置、GB高確、GBレベル示唆を確認します。",
      },
    ],
  },
  {
    title: "店舗傾向の確認が必要な機種",
    description: "リセット状況は店舗や日によって変わります。ホールの傾向を決めつけず、当日の根拠を確認します。",
    machines: [
      {
        slug: "hokuto-no-ken-smart-slot",
        name: "スマスロ北斗の拳",
        reason: "設置台数が多い店舗では、台ごとの扱いに差が出る場合があります。",
        point: "前日最終ゲーム数、当日ゲーム数、周辺台の状況を確認します。",
      },
      {
        slug: "kabaneri-kaimon-kessen",
        name: "スマスロカバネリ 海門決戦",
        reason: "ゲーム数と周期の短縮を確認しつつ、店舗ごとのリセット傾向も見たい機種です。",
        point: "周期数、当日ゲーム数、前日履歴を確認します。",
      },
      {
        slug: "monkey-turn-v",
        name: "スマスロモンキーターンV",
        reason: "周期とゲーム数の両方を見るため、台ごとの履歴確認が重要です。",
        point: "AT間ゲーム数、周期数、前日状況を確認します。",
      },
      {
        slug: "nangoku-sodachi-special",
        name: "L南国育ちSPECIAL",
        reason: "モード振り分けを確認したい機種のため、履歴の見方が重要です。",
        point: "最大天井、モード示唆、当日の初当たり状況を確認します。",
      },
      {
        slug: "re-zero-season2",
        name: "スロットRe:ゼロ Season2",
        reason: "ポイント天井とポイント加算を確認しながら判断したい機種です。",
        point: "規定ポイント、加算状況、前日履歴を確認します。",
      },
      {
        slug: "tekken-6",
        name: "スマスロ鉄拳6",
        reason: "ポイント数とスルー回数の両方を整理してから判断したい機種です。",
        point: "現在ポイント、スルー回数、当日履歴を確認します。",
      },
    ],
  },
  {
    title: "初心者は個別ページを見てから判断したい機種",
    description: "朝一の恩恵がある場合でも、機種ごとの条件確認が欠かせない機種です。",
    machines: [
      {
        slug: "bakemonogatari",
        name: "スマスロ化物語",
        reason: "天井短縮の条件と現在ゲーム数を確認してから判断したい機種です。",
        point: "AT後天井、前日履歴、当日ゲーム数を確認します。",
      },
      {
        slug: "biohazard-re3",
        name: "スマスロバイオハザードRE:3",
        reason: "AT間天井短縮とポイント加算をあわせて確認したい機種です。",
        point: "AT間ゲーム数とNE-ポイントを確認します。",
      },
      {
        slug: "birdie-wing",
        name: "スマスロBIRDIE WING",
        reason: "周期天井の確認が中心になるため、周期数の見落としに注意します。",
        point: "現在周期と朝一の進行状況を確認します。",
      },
      {
        slug: "code-geass-fukkatsu-no-lelouch",
        name: "スマスロコードギアス 復活のルルーシュ",
        reason: "リセットモード時の天井を確認してから判断したい機種です。",
        point: "モード別天井と当日ゲーム数を確認します。",
      },
      {
        slug: "en-en-no-shouboutai-2",
        name: "Lパチスロ炎炎ノ消防隊2",
        reason: "複数の天井とモード振り分けを分けて確認したい機種です。",
        point: "ボーナス間、炎炎ループ間、通常モードを確認します。",
      },
      {
        slug: "golden-kamuy",
        name: "スマスロゴールデンカムイ",
        reason: "天井短縮とポイントの初期状態をあわせて確認したい機種です。",
        point: "ピュウ数と砂金ポイントを確認します。",
      },
      {
        slug: "gundam-unicorn-kakusei-drive",
        name: "Lガンダムユニコーン 覚醒DRIVE",
        reason: "CZ間とAT間の両方を確認したい機種です。",
        point: "CZ間ゲーム数、AT間ゲーム数、加算状況を確認します。",
      },
      {
        slug: "hanma-baki",
        name: "L範馬刃牙",
        reason: "仮天井とモードの扱いを確認してから判断したい機種です。",
        point: "200G付近の扱いと前日状況を確認します。",
      },
      {
        slug: "sengoku-collection-6",
        name: "戦国コレクション6",
        reason: "周期天井短縮と規定コレ数を確認したい機種です。",
        point: "周期数と1周期目の規定コレ数を確認します。",
      },
      {
        slug: "sengoku-otome-5",
        name: "L戦国乙女5",
        reason: "天井短縮とポイント加算を整理してから判断したい機種です。",
        point: "ゲーム数、周期、巫女ポイントを確認します。",
      },
      {
        slug: "shaman-king",
        name: "スマスロシャーマンキング",
        reason: "ボーナス間天井短縮とポイント加算を確認したい機種です。",
        point: "憑依ポイント、巫門遁甲ポイント、当日ゲーム数を確認します。",
      },
      {
        slug: "shin-hokuto-musou",
        name: "スマスロ真・北斗無双",
        reason: "モード条件による短縮を確認してから判断したい機種です。",
        point: "宿命数とモード示唆を確認します。",
      },
      {
        slug: "shin-onimusha-3",
        name: "スマスロ鬼武者3・L新鬼武者3",
        reason: "周期天井短縮と初回BPを確認したい機種です。",
        point: "周期数と初回BPの示唆を確認します。",
      },
      {
        slug: "super-rio-ace-2",
        name: "スマスロスーパーリオエース2",
        reason: "ボーナス間天井とスルー回数の短縮を確認したい機種です。",
        point: "ボーナス間ゲーム数とスルー回数を確認します。",
      },
      {
        slug: "toaru-majutsu-no-index",
        name: "Lスマスロ とある魔術の禁書目録",
        reason: "通常B以上やチャンスモード移行を確認したい機種です。",
        point: "モード示唆と現在ゲーム数を確認します。",
      },
      {
        slug: "tokyo-ghoul",
        name: "L東京喰種（スマスロ東京グール）",
        reason: "朝一専用モードとCZ間天井短縮を確認したい機種です。",
        point: "CZ間ゲーム数と朝一専用モードの扱いを確認します。",
      },
    ],
  },
];

function CarefulMachineCard({ machine }: { machine: CarefulMachine }) {
  return (
    <article className="article-machine-card">
      <h3>{machine.name}</h3>
      <p>{machine.reason}</p>
      <p className="section-note">確認ポイント：{machine.point}</p>
      <Link href={`/machines/${machine.slug}`}>個別ページを見る</Link>
    </article>
  );
}

export default function CarefulMorningMachinesArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/careful-morning-machines" }]} />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>導入</h2>
        <p>
          朝一リセットは、すべての機種で有利になるわけではありません。機種によっては判別が難しい、
          恩恵が弱い、深追いしやすい場合があります。
        </p>
        <p>
          このページでは、朝一で慎重に確認したいポイントを整理します。遊技結果を保証するものではなく、
          無理な投資を避けるための参考情報として確認してください。
        </p>

        <h2>慎重に確認したい理由</h2>
        <ul>
          <li>リセット恩恵が限定的な場合がある</li>
          <li>見た目だけでは据え置き・リセットを判断しにくい</li>
          <li>天井短縮がない、または弱い場合がある</li>
          <li>初心者ほど深追いしやすい</li>
          <li>SNSや噂だけで判断すると、確認すべき情報を見落としやすい</li>
        </ul>

        <div className="article-link-box">
          <p>
            朝一で何を確認すればよいか迷う場合は、
            <Link href="/line/checklist">初心者チェックリスト</Link>も参考にしてください。
          </p>
          <ul>
            <li><Link href="/articles/reset-benefit-machines">朝イチリセット恩恵を確認したい機種まとめ</Link></li>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/line/checklist">朝一リセット狙い 初心者チェックリスト</Link></li>
            <li><Link href="/line">LINE公式アカウント案内</Link></li>
          </ul>
        </div>

        <h2>カテゴリ別に機種を確認する</h2>
        {categories.map((category) => (
          <section className="article-category" key={category.title}>
            <h2>{category.title}</h2>
            <p className="section-note">{category.description}</p>
            <div className="article-machine-grid">
              {category.machines.map((machine) => (
                <CarefulMachineCard key={`${category.title}-${machine.slug}`} machine={machine} />
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
