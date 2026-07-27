import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import { getAllMachines } from "@/lib/content/machines";
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
  "koukaku-kidoutai-sac-2045": {
    slug: "koukaku-kidoutai-sac-2045",
    name: "スマスロ 攻殻機動隊",
    summary: "CZ天井・AT間天井の短縮を確認したい機種です。",
    point: "設定変更時のCZテーブルと朝一挙動を確認します。",
  },
  "god-eater-resurrection": {
    slug: "god-eater-resurrection",
    name: "スマスロ ゴッドイーター リザレクション",
    summary: "設定変更時の天井短縮と、逆鱗ハンニバル失敗後の特殊条件を確認したい機種です。",
    point: "600G+α短縮テーブルとの整合、逆鱗ハンニバル失敗後の挙動を確認します。",
  },
  "takt-op-destiny": {
    slug: "takt-op-destiny",
    name: "Lタクトオーパス デスティニー",
    summary: "設定変更時のCZ天井短縮を確認したい機種です。",
    point: "300G+α系のCZテーブルとモードB以上の挙動を確認します。",
  },
  "kyokou-suiri": {
    slug: "kyokou-suiri",
    name: "L虚構推理",
    summary: "設定変更時の天井短縮（700G・300G系）を確認したい機種です。",
    point: "短縮天井テーブルと高確スタートの挙動を確認します。",
  },
  "goblin-slayer-2": {
    slug: "goblin-slayer-2",
    name: "スマスロ ゴブリンスレイヤーⅡ",
    summary: "設定変更時の天井短縮（1000G+α）を確認したい機種です。",
    point: "短縮天井テーブルと兜ポイントの初期加算状況を確認します。",
  },
  "animal-slot-dotch": {
    slug: "animal-slot-dotch",
    name: "アニマルスロット ドッチ",
    summary: "BIG後・REG後・設定変更後で天井条件が異なる機種です。",
    point: "499G系の設定変更後天井と赤満月移行状態を確認します。",
  },
  "big-dream-golden-pusher": {
    slug: "big-dream-golden-pusher",
    name: "スマスロ ビッグドリーム THE GOLDEN PUSHER",
    summary: "設定変更時の天井短縮（333G/555G/999G）を確認したい機種です。",
    point: "短縮天井テーブルとボール天井ポイントの初期状況を確認します。",
  },
  "jormungand": {
    slug: "jormungand",
    name: "スマスロ ヨルムンガンド",
    summary: "設定変更後は450G+αの仮天井で必ずATに当選する機種です。",
    point: "450G+αの設定変更後天井と、通常時の仮天井抽選を分けて確認します。",
  },
  "shinuchi-yoshimune": {
    slug: "shinuchi-yoshimune",
    name: "L真打吉宗",
    summary: "設定変更時のAT天井短縮（1000G+α）を確認したい機種です。",
    point: "短縮天井テーブルと真BB後の別条件（700G）を分けて確認します。",
  },
  "to-love-ru-darkness-trance-8-7": {
    slug: "to-love-ru-darkness-trance-8-7",
    name: "L ToLOVEるダークネス TRANCE ver.8.7",
    summary: "設定変更時の天井短縮（650G+α）を確認したい機種です。",
    point: "短縮天井テーブルとどきどきポイントの初期蓄積状況を確認します。",
  },
  "akudama-drive": {
    slug: "akudama-drive",
    name: "Lアクダマドライブ",
    summary: "天井短縮ではなく内部抽選優遇が中心の機種です。",
    point: "カンサイ教育番組関連演出と処刑課バトルのセット数優遇を確認します。",
  },
  "mahjong-fight-club-kakusei": {
    slug: "mahjong-fight-club-kakusei",
    name: "L麻雀格闘倶楽部 覚醒",
    summary: "設定変更時に浅い天井が選ばれやすくなる機種です。",
    point: "浅い天井テーブルと裏覚醒準備モードの示唆を確認します。",
  },
  "hihouden": {
    slug: "hihouden",
    name: "スマスロ秘宝伝",
    summary: "BIG後・REG後・設定変更後で天井条件が異なる機種です。",
    point: "499G+α系の設定変更後天井を、BIG後・REG後と分けて確認します。",
  },
  "prism-nana": {
    slug: "prism-nana",
    name: "プリズムナナ",
    summary: "設定変更後は天井短縮・通常B以上・周期短縮が重なる機種です。",
    point: "555G+α系の設定変更後天井と、通常B以上の示唆を確認します。",
  },
  "zettai-shougeki-4": {
    slug: "zettai-shougeki-4",
    name: "L絶対衝激Ⅳ",
    summary: "設定変更時に周期天井が最大5周期へ短縮される機種です。",
    point: "短縮天井テーブルと滞在モードによる天井周期の変化を確認します。",
  },
  "toaru-kagaku-no-railgun-2": {
    slug: "toaru-kagaku-no-railgun-2",
    name: "スマスロ とある科学の超電磁砲2",
    summary: "設定変更後の天井短縮（最大699G+α）を確認したい機種です。",
    point: "短縮天井テーブルでの当選有無を確認します。",
  },
  "watashi-no-shiawase-na-kekkon": {
    slug: "watashi-no-shiawase-na-kekkon",
    name: "わたしの幸せな結婚",
    summary: "設定変更後は通常C以上濃厚・天井350G+αへ短縮される機種です。",
    point: "通常C以上の示唆と、ボーナス6回天井を分けて確認します。",
  },
  "azur-lane-the-animation": {
    slug: "azur-lane-the-animation",
    name: "Lアズールレーン THE ANIMATION",
    summary: "設定変更後はスルー回数天井が最大6回へ短縮される機種です。",
    point: "スルー回数天井とAT間天井を分けて確認します。",
  },
  "kaguya-sama-wa-kokurasetai": {
    slug: "kaguya-sama-wa-kokurasetai",
    name: "パチスロ かぐや様は告らせたい",
    summary: "通常・REG後・設定変更後で天井条件が異なる機種です。",
    point: "800G+α系の設定変更後天井を、通常・REG後と分けて確認します。",
  },
  "tokyo-revengers": {
    slug: "tokyo-revengers",
    name: "スマスロ 東京リベンジャーズ",
    summary: "設定変更時の天井短縮（最大900G）と抽選優遇を確認したい機種です。",
    point: "短縮天井テーブルとモード移行優遇の兆候を確認します。",
  },
  "initial-d-2nd": {
    slug: "initial-d-2nd",
    name: "スマスロ頭文字D 2nd",
    summary: "設定変更時に約50%で天井が短縮される、内部ゲーム数加算がある機種です。",
    point: "早期当選だけでリセット確定と判断せず、複数の挙動を確認します。",
  },
  "girls-und-panzer-finale": {
    slug: "girls-und-panzer-finale",
    name: "Lパチスロガールズ&パンツァー 最終章",
    summary: "設定変更時に約65%で天井が短縮される、確定ではない機種です。",
    point: "500G天井は通常時にも出現するため、単独の当選では判断しません。",
  },
  "biohazard-5": {
    slug: "biohazard-5",
    name: "スマスロ バイオハザード5",
    summary: "設定変更時に天井が最大666G+αへ短縮される機種です。",
    point: "999G天井到達後の次回99G天井（別条件）と混同せず確認します。",
  },
  "tensei-shitara-ken-deshita": {
    slug: "tensei-shitara-ken-deshita",
    name: "パチスロ 転生したら剣でした",
    summary: "AT間天井とボーナス間天井の両方が設定変更時に短縮される機種です。",
    point: "二つの天井システムを分けて、当日の消化数を確認します。",
  },
  "saki-choujou-kessen": {
    slug: "saki-choujou-kessen",
    name: "L咲-Saki- 頂上決戦",
    summary: "設定変更時にゲーム数天井が最大600G+αへ短縮される機種です。",
    point: "ゲーム数天井・CZ失敗回数天井・周期ポイントを分けて確認します。",
  },
  "darling-in-the-franxx": {
    slug: "darling-in-the-franxx",
    name: "L ダーリン・イン・ザ・フランキス",
    summary: "設定変更時に天井が390G以下へ短縮される機種です。",
    point: "内部ランダム減算があるため、390Gちょうどでなくても該当する場合があります。",
  },
  "arifureta-shokugyou-de-sekai-saikyou": {
    slug: "arifureta-shokugyou-de-sekai-saikyou",
    name: "Lパチスロ ありふれた職業で世界最強",
    summary: "設定変更時に天井が最大700Gへ短縮される機種です。",
    point: "ミュウボーナスのスルー回数天井とは別に確認します。",
  },
  "shin-ikki-tousen": {
    slug: "shin-ikki-tousen",
    name: "L 真・一騎当千",
    summary: "設定変更時に必ず通常Dまたは天国が選ばれ、天井が短縮される機種です。",
    point: "内部モード別天井（常時存在）と設定変更の恩恵を分けて確認します。",
  },
  "nanatsu-no-maken-ga-shihai-suru": {
    slug: "nanatsu-no-maken-ga-shihai-suru",
    name: "七つの魔剣が支配する",
    summary: "設定変更時に天井が最大650G+αへ短縮される機種です。",
    point: "CZポイントは非表示の内部状態のため、示唆だけで確定と判断しません。",
  },
  "dunbine": {
    slug: "dunbine",
    name: "スマスロ 聖戦士ダンバイン",
    summary: "設定変更時に周期天井が最大5周期へ短縮される機種です。",
    point: "「1Gから期待できる」評価と円単位の0G期待値は分けて確認します。",
  },
  "devil-may-cry-5-stylish-tribe": {
    slug: "devil-may-cry-5-stylish-tribe",
    name: "スマスロ デビル メイ クライ5 スタイリッシュトライブ",
    summary: "設定変更時に天井が最大800G+αへ短縮される機種です。",
    point: "STスルー時・上位ST終了後も同じ天井のため、単独では設定変更と断定しません。",
  },
  "karakuri-circus": {
    slug: "karakuri-circus",
    name: "パチスロ からくりサーカス",
    summary: "固定の天井短縮ではなく、モード優遇を確認したい機種です。",
    point: "ステージは電断時と共通のため、ステージ表示だけで判別しません。",
  },
  "iza-bancho": {
    slug: "iza-bancho",
    name: "Lいざ！番長",
    summary: "設定変更時に天井が600G+αへ短縮される機種です。番長3・サラリーマン番長2とは別機種です。",
    point: "内部モード別天井（常時存在）と設定変更の恩恵を分けて確認します。",
  },
  "kaidoumokushiroku-kaiji": {
    slug: "kaidoumokushiroku-kaiji",
    name: "回胴黙示録カイジ 狂宴",
    summary: "設定変更時に天井が最大800G+αへ短縮される機種です。",
    point: "沼最終決戦失敗後の別条件と混同せず確認します。",
  },
  "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e": {
    slug: "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e",
    name: "スマスロ ようこそ実力至上主義の教室へ",
    summary: "設定変更時にAT間天井が最大630G+αへ短縮される機種です。",
    point: "CZ間天井・スルー回数天井とは別に確認します。",
  },
  "godzilla": {
    slug: "godzilla",
    name: "Lゴジラ",
    summary: "設定変更時のモード優遇や天井短縮が解析情報として報告されている機種です。",
    point: "単独ソースの情報が多いため、他の要素とあわせて総合的に判断します。",
  },
  "gundam-seed": {
    slug: "gundam-seed",
    name: "L機動戦士ガンダムSEED",
    summary: "設定変更時にAT間天井が750G+αへ短縮される機種です。ガンダムユニコーン覚醒DRIVEとは別機種です。",
    point: "AT駆け抜け時も同じ天井のため、単独では設定変更と断定しません。",
  },
  "zombieland-saga": {
    slug: "zombieland-saga",
    name: "スマスロ ゾンビランドサガ",
    summary: "設定変更時に天井が555Gへ短縮される機種です。",
    point: "電源再起動では777G天井のまま引き継がれるため区別します。",
  },
  "million-live": {
    slug: "million-live",
    name: "スマスロ アイドルマスター ミリオンライブ！ ネクストプロローグ",
    summary: "設定変更時に天井が500G+αへ短縮される機種です。2021年発売の旧機種とは別機種です。",
    point: "3モード制の天井を分けて確認します。",
  },
  "super-black-jack": {
    slug: "super-black-jack",
    name: "スマスロ スーパーブラックジャック",
    summary: "設定変更時に天井が666G+αへ短縮される機種です。",
    point: "スルー回数天井・スイカ天井とは別に確認します。",
  },
  "bofuri": {
    slug: "bofuri",
    name: "L痛いのは嫌なので防御力に極振りしたいと思います。",
    summary: "設定変更時に天井が450Gまたは650Gへランダムに短縮される機種です。",
    point: "中段チェリー確率の上昇やゾーン挙動の変化とあわせて確認します。",
  },
  "to-love-ru-darkness": {
    slug: "to-love-ru-darkness",
    name: "L ToLOVEるダークネス",
    summary: "設定変更時に天井が650G+αへ短縮される機種です。TRANCE ver.8.7とは別機種です。",
    point: "穢れポイントの再抽選、ドキドキポイントの回復状況を確認します。",
  },
  "lupin-iii-daikoukaisha-no-hihou": {
    slug: "lupin-iii-daikoukaisha-no-hihou",
    name: "Lルパン三世 大航海者の秘宝",
    summary: "設定変更時に天井が700G+αへ短縮される機種です。",
    point: "保証ゲーム数への移行率優遇や、帯の色・出現有無とあわせて確認します。",
  },
  "bandori": {
    slug: "bandori",
    name: "Lバンドリ!",
    summary: "設定変更時に周期天井が最大7周期へ短縮される機種です。",
    point: "周期カウンターは朝一「???」表示のため、単独では判別しません。",
  },
  "dumbbell-nan-kilo-moteru": {
    slug: "dumbbell-nan-kilo-moteru",
    name: "Lパチスロ ダンベル何キロ持てる？",
    summary: "設定変更後にAT天井が1000Gへ短縮される機種です。",
    point: "設定変更後1回目の終了画面の紫枠出現率上昇とあわせて確認します。",
  },
  "senki-zesshou-symphogear": {
    slug: "senki-zesshou-symphogear",
    name: "Lパチスロ戦姫絶唱シンフォギア 正義の歌",
    summary: "設定変更時に天井が498G+αへ短縮される機種です。",
    point: "CZ煽り演出が発生するゲーム数の違いとあわせて確認します。",
  },
  "yoshimune": {
    slug: "yoshimune",
    name: "L吉宗",
    summary: "設定変更時の天井短縮の有無について情報源により見解が分かれている機種です。",
    point: "L真打吉宗とは別機種です。天国モード（193G）の挙動を中心に確認します。",
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
      "koukaku-kidoutai-sac-2045",
      "god-eater-resurrection",
      "takt-op-destiny",
      "kyokou-suiri",
      "goblin-slayer-2",
      "animal-slot-dotch",
      "big-dream-golden-pusher",
      "jormungand",
      "shinuchi-yoshimune",
      "to-love-ru-darkness-trance-8-7",
      "hihouden",
      "prism-nana",
      "zettai-shougeki-4",
      "toaru-kagaku-no-railgun-2",
      "watashi-no-shiawase-na-kekkon",
      "azur-lane-the-animation",
      "kaguya-sama-wa-kokurasetai",
      "tokyo-revengers",
      "biohazard-5",
      "tensei-shitara-ken-deshita",
      "saki-choujou-kessen",
      "darling-in-the-franxx",
      "arifureta-shokugyou-de-sekai-saikyou",
      "shin-ikki-tousen",
      "nanatsu-no-maken-ga-shihai-suru",
      "dunbine",
      "devil-may-cry-5-stylish-tribe",
      "iza-bancho",
      "kaidoumokushiroku-kaiji",
      "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e",
      "godzilla",
      "gundam-seed",
      "zombieland-saga",
      "million-live",
      "super-black-jack",
      "bofuri",
      "to-love-ru-darkness",
      "lupin-iii-daikoukaisha-no-hihou",
      "bandori",
      "dumbbell-nan-kilo-moteru",
      "senki-zesshou-symphogear",
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
      "karakuri-circus",
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
      "akudama-drive",
      "mahjong-fight-club-kakusei",
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
      "initial-d-2nd",
      "girls-und-panzer-finale",
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
      "yoshimune",
    ],
  },
];

function ArticleMachineCard({ machine, heroImage }: { machine: ArticleMachine; heroImage?: string }) {
  return (
    <article className="article-machine-card">
      <Link href={`/machines/${machine.slug}`}>
        <MachineThumbnail heroImage={heroImage} name={machine.name} />
      </Link>
      <h3>
        <Link href={`/machines/${machine.slug}`}>{machine.name}</Link>
      </h3>
      <p>{machine.summary}</p>
      <p className="section-note">確認したいポイント：{machine.point}</p>
      <Link href={`/machines/${machine.slug}`}>個別ページを見る</Link>
    </article>
  );
}

export default async function ResetBenefitMachinesArticlePage() {
  const allMachines = await getAllMachines();
  const heroImageBySlug = new Map(allMachines.map((m) => [m.slug, m.heroImage]));
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
                <ArticleMachineCard
                  key={`${category.title}-${slug}`}
                  machine={machinesBySlug[slug]}
                  heroImage={heroImageBySlug.get(slug)}
                />
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

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
