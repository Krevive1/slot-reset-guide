export type ArticleCategory = "petit-news" | "new-machine-news" | "column";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishedAt: string;
  updatedAt?: string;
  heroImage: string;
};

export const ARTICLE_CATEGORY_INFO: Record<
  ArticleCategory,
  { label: string; description: string; path: string }
> = {
  "petit-news": {
    label: "プチニュース",
    description: "既存機種の新解析・SNSで話題になっている出来事など、気になる最新情報をまとめています。",
    path: "/articles/petit-news",
  },
  "new-machine-news": {
    label: "注目の新台NEWS",
    description: "検定通過・公式特報など、今後登場が期待される注目機種の最新情報をまとめています。",
    path: "/articles/new-machine-news",
  },
  column: {
    label: "実践記録・コラム",
    description: "運営者自身の実践記録や失敗談、コラムを掲載しています。",
    path: "/articles/columns",
  },
};

// 新しい記事を公開したら、この配列へ1件追加する。
// 本文は各記事の app/articles/<slug>/page.tsx に独立して存在し、ここでは一覧表示用のメタデータだけを管理する。
export const articles: ArticleMeta[] = [
  {
    slug: "lycoris-recoil-yuuri-giri-himitsu-sns-topic",
    title: "Lリコリス・リコイル「有利切りの秘密」を公式が公開｜条件は6つ、明確に分かるのは2つだけ",
    description:
      "サミー開発ボイスが「リコスロ3DAYS」企画の一環として、スマスロ リコリス・リコイルの有利区間リセット（通称：有利切り）の条件を公式に公開しました。条件は6パターンあるとされ、実戦上プレイヤーが明確に判別できるのは2パターンのみと紹介されています。公式投稿の内容を整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-24",
    heroImage: "/images/articles/lycoris-recoil-sns-topic.png",
  },
  {
    slug: "minpachi-slosami-2026-trouble-sns-topic",
    title: "「みんパチ・スロサミ2026」で物販・くじにアクセス集中｜SNSでは長時間待機の声も",
    description:
      "業界公式のファン感謝祭「みんパチ・スロサミ2026」（2026年9月22日開催）で、物販・くじコーナーにアクセスが集中し、主催側が新規整列とくじコーナーを一時中止しました。現地参加者のSNS投稿と、公式が案内した内容を整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-23",
    heroImage: "/images/articles/minpachi-slosami-2026-trouble-sns-topic.png",
  },
  {
    slug: "rinseki-fuda-trouble-sns-topic",
    title: "「離席札を置かずに席を立ったら…」ホールでの台確保トラブル投稿がXで話題に",
    description:
      "パチンコホールで「離席札を置かずに席を立った人」と「その後に座った人」がもめたという体験談投稿がXで話題になっています。台の確保はどこまで有効なのか、投稿内容と一般的な考え方を整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-21",
    heroImage: "/images/articles/rinseki-fuda-trouble-sns-topic.png",
  },
  {
    slug: "uma-musume-pachislot-sns-topic",
    title:
      "ウマ娘のパチスロ化を巡る情報がSNSで話題に｜「Lウマ娘 プリティーダービー」が保通協通過との投稿",
    description:
      "「ウマ娘 プリティーダービー」のパチスロ化を巡る情報がSNSで話題に。「Lウマ娘 プリティーダービー（仮名）」が保通協を通過したとの投稿が拡散されていますが、現時点で公式発表は確認されていません。SNSでは賛否両論の声が上がっています。",
    category: "petit-news",
    publishedAt: "2026-09-18",
    heroImage: "/images/articles/uma-musume-pachislot-sns-topic.png",
  },
  {
    slug: "god-arm-hokuto-sns-topic",
    title: "「ゴッドアーム」問題でSNS議論拡大｜演者による「他人の台への関与」を巡り意見分かれる",
    description:
      "パチスロ来店演者「ゴッドアームほくと」氏を巡り、ファンから応援を頼まれた際に台へ関与する「ゴッドアーム」がSNSで話題に。代行遊技にあたるのではとの指摘や業界人の異なる意見が相次ぎ、その後は台に触れず声援を送る「ゴッドエール」へ移行しています。",
    category: "petit-news",
    publishedAt: "2026-09-18",
    heroImage: "/images/articles/god-arm-hokuto-sns-topic.png",
  },
  {
    slug: "lycoris-recoil-sns-topic",
    title: "Lリコリス・リコイルで「間違い探し」が話題｜別機種パーツらしき個体・高稼働の声も",
    description:
      "2026年9月7日導入のスマスロ リコリス・リコイルで、他機種のパーツが付いているように見える個体の投稿がXで拡散し「間違い探し」として話題になっています。話題になっている投稿と、現時点で確認できていることを整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-15",
    heroImage: "/images/articles/lycoris-recoil-sns-topic.png",
  },
  {
    slug: "mieruko-chan-cz-rate-setting-diff",
    title: "L見える子ちゃん、弱レア役CZに最大3倍差｜終了画面にも設定4以上・設定6濃厚パターン",
    description:
      "パチスロ見える子ちゃんで、通常時の弱レア役からのCZ当選率に設定1と設定6で3倍の差があるとする解析情報を、すろぱちくえすと・一撃の両サイトで確認しました。ボーナス終了画面の設定示唆パターンとあわせて、確認できていること・まだ確認できていないことを整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-10",
    heroImage: "/images/articles/mieruko-chan-cz-rate-setting-diff.png",
  },
  {
    slug: "monkey-turn-v-ex-item-rate",
    title: "モンキーターンVの激走チャージEXアイテムとは？弱レア役からの獲得率に設定差",
    description:
      "スマスロモンキーターンVの激走チャージ中に成立するレア役から、EXアイテムを獲得できるかどうかに設定差があるとされています。ボート・弱チェリーなど弱レア役からの獲得率を中心に、非公式に流通している設定別参考値を整理しました。",
    category: "petit-news",
    publishedAt: "2026-09-04",
    heroImage: "/images/articles/monkey-turn-v-ex-item-rate.png",
  },
  {
    slug: "tokyo-ghoul-arima-judgment-reigu-research",
    title: "スマスロ東京喰種『有馬J失敗後は約2000G冷遇』説を調査｜実戦報告に傾向はある？",
    description:
      "スマスロ東京喰種で話題になっている「有利区間切断後、有馬貴将ジャッジメント失敗後は約2000Gの冷遇に入る」という説について、公開情報とX上の複数の実戦報告をもとに調査しました。確定情報・観測されている傾向・未確定事項を分けて整理しています。",
    category: "petit-news",
    publishedAt: "2026-09-04",
    heroImage: "/images/articles/tokyo-ghoul-arima-judgment-reigu-research.png",
  },
  {
    slug: "bancho-banzuke-news",
    title: "スマスロ『押忍！番長番付』2026年12月導入予定｜ティザーPV・V図柄・最新情報まとめ",
    description:
      "大都技研の番長シリーズ最新作『押忍！番長番付』のティザーPVが公開されました。2026年12月7日導入予定、V図柄採用など、現時点で分かっていること・まだ分かっていないことを整理してまとめます。続報が入り次第、随時更新します。",
    category: "new-machine-news",
    publishedAt: "2026-09-04",
    updatedAt: "2026-09-04",
    heroImage: "/images/articles/bancho-banzuke-news.png",
  },
  {
    slug: "monkey-turn-red-news",
    title: "モンキーターンRED始動！「王道から挑戦へ」新作で今わかっていること｜山佐ネクスト新台ニュース",
    description:
      "山佐ネクストの新台『モンキーターンRED』特報が公開され、2026年9月15日にはセブンリーグ名義で型式検定も通過しました。『王道から挑戦へ』『JAC IN』など気になるキーワードと、現時点で分かっていること・まだ未確定なことを整理して紹介します。",
    category: "new-machine-news",
    publishedAt: "2026-08-22",
    updatedAt: "2026-09-20",
    heroImage: "/images/articles/monkey-turn-red-news.jpg",
  },
  {
    slug: "basilisk-4-news",
    title:
      "スマスロ バジリスク～甲賀忍法帖～Ⅳ、2026年12月導入予定｜新要素「胎動の刻」「死合」も判明｜ユニバーサル新台ニュース",
    description:
      "ユニバーサルエンターテインメントが2026年9月7日、スマスロ バジリスク～甲賀忍法帖～Ⅳを正式発表。2026年12月導入予定、新ゲームフロー「胎動の刻」・最終血戦「死合」・バジリスクタイムの2パート構成継承など、公式発表で判明した内容と、まだ未確定な仕様を整理します。",
    category: "new-machine-news",
    publishedAt: "2026-08-22",
    updatedAt: "2026-09-11",
    heroImage: "/images/articles/basilisk-4-news.jpg",
  },
  {
    slug: "tokyo-ghoul-jiro-8586-column",
    title: "二郎系ラーメンを食べに遠征したら、東京喰種で8586枚出た話",
    description:
      "ジャグラーで少し勝って帰るはずが、東京喰種の周りをグールグール5周。乗り打ちで最終8586枚となった二郎系ラーメン遠征の実践記録です。",
    category: "column",
    publishedAt: "2026-08-03",
    heroImage: "/images/articles/tokyo-ghoul-jiro-8586-column.jpg",
  },
  {
    slug: "monkey-paramount-neighbor-column",
    title: "隣のパラマウント打ちに「表出ろ」と言われた結果、まさかの正体が判明した",
    description:
      "スマスロモンキーターンVを打っていたら、右隣で「パラマウントベッド打ち」をしていた男に「表出ろ」と言われた実体験コラムです。もめた相手の正体が判明するまでの顛末をまとめました。",
    category: "column",
    publishedAt: "2026-07-28",
    heroImage: "/images/articles/monkey-paramount-neighbor-column.jpg",
  },
  {
    slug: "soundcore-liberty-4-hall-noise-column",
    title: "モンキーターン・東京喰種・北斗の爆音から耳を守りたい｜ホールでSoundcore Liberty 4を使ってみた",
    description:
      "パチスロホールで隣台がうるさいときの騒音対策を、Soundcore Liberty 4の実体験をもとに解説。爆音は消えなくても、耳への負担はかなり和らぎました。",
    category: "column",
    publishedAt: "2026-07-24",
    heroImage: "/images/articles/soundcore-liberty-4-hall-noise-column.jpg",
  },
  {
    slug: "hokuto-loud-neighbor-column",
    title: "スマスロ北斗の拳で隣に音量MAXの男が座った話｜収支は負けたが謎の勝負には勝った",
    description:
      "スマスロ北斗の拳で音量MAXと大きな貧乏ゆすりの隣人に遭遇し、自分も奇妙な方法で対抗してしまった実体験コラムです。",
    category: "column",
    publishedAt: "2026-07-21",
    heroImage: "/images/articles/hokuto-loud-neighbor-column.jpg",
  },
  {
    slug: "tokyo-ghoul-trophy-misugoshi",
    title: "スマスロ東京喰種 実践記録｜トロフィーを確認せず5万円使い切った7月7日",
    description:
      "2026年7月7日、大型イベントでスマスロ東京喰種に着席。左隣の設定6確定演出とトロフィー出現がありながら、色を確認しないまま消化してしまい、お小遣い5万円を使い切った実践記録です。反省点を正直にまとめています。",
    category: "column",
    publishedAt: "2026-07-19",
    heroImage: "/images/articles/tokyo-ghoul-trophy-misugoshi.jpg",
  },
];

export function getArticlesByCategory(category: ArticleCategory): ArticleMeta[] {
  return articles
    .filter((article) => article.category === category)
    .sort((a, b) => (b.updatedAt ?? b.publishedAt).localeCompare(a.updatedAt ?? a.publishedAt));
}
