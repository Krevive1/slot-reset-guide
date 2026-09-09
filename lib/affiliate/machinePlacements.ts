import type { AffiliateOfferId } from "@/lib/affiliate/offers";

export type RelatedReadingItem = {
  href: string;
  label: string;
};

export type MachineAffiliatePlacement = {
  offerIds?: AffiliateOfferId[];
  originalWorkOfferIds?: AffiliateOfferId[];
  relatedReadings?: RelatedReadingItem[];
};

// Only explicitly listed slugs receive affiliate products or extra reading.
// Array order is the display order on the machine page.
export const machineAffiliatePlacements: Record<string, MachineAffiliatePlacement> = {
  "monkey-turn-v": {
    offerIds: ["soundcoreLiberty4", "kachikachiKun"],
    originalWorkOfferIds: ["bookwalkerMonkeyTurn", "mangazenkanMonkeyTurn30"],
    relatedReadings: [
      {
        href: "/articles/monkey-turn-v-ex-item-rate",
        label: "激走チャージEXアイテムとは？弱レア役からの獲得率に設定差",
      },
      {
        href: "/articles/monkey-turn-v-5mai-yaku",
        label: "モンキーターンVの5枚役とは？設定差・数え方・計算方法",
      },
    ],
  },
  "tokyo-ghoul": {
    offerIds: ["soundcoreLiberty4"],
    originalWorkOfferIds: ["bookwalkerTokyoGhoul", "mangazenkanTokyoGhoul30", "rentaTokyoGhoul"],
    relatedReadings: [
      {
        href: "/articles/tokyo-ghoul-arima-judgment-reigu-research",
        label: "『有馬J失敗後は約2000G冷遇』説を調査｜実戦報告に傾向はある？",
      },
      {
        href: "/articles/tokyo-ghoul-trophy-misugoshi",
        label: "実践記録：トロフィーを確認せず5万円使い切った7月7日",
      },
      {
        href: "/articles/tokyo-ghoul-manga-reading-order",
        label: "東京喰種の漫画を読む順番｜無印14巻と:re16巻を解説",
      },
    ],
  },
  "hokuto-no-ken-smart-slot": {
    offerIds: ["soundcoreLiberty4"],
    originalWorkOfferIds: ["bookwalkerHokutoNoKen"],
    relatedReadings: [
      {
        href: "/articles/hokuto-loud-neighbor-column",
        label: "隣に音量MAXの男が座った話｜収支は負けたが謎の勝負には勝った",
      },
    ],
  },
  "street-fighter-6": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
  },
  // Group B: no identifiable manga/anime/game source material — common goods
  // (earphones + mobile battery) only. Added 2026-09-09 per ChatGPT + user
  // review; see DECISIONS.md affiliate policy.
  "okidoki-black": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "okidoki-gold-30": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "okidoki-gorgeous-30": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "iza-bancho": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "banchou-3": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "juoh": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "hihouden": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "nangoku-sodachi-special": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "yoshimune": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "shinuchi-yoshimune": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "super-rio-ace-2": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "million-god-kamigami-no-kiseki": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "taikai4-with-sonoko": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "tacoslot": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "yabachiba": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "yajikita-dochuki-mairu": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "mogumogu-furinkazan-daikaisen": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "animal-slot-dotch": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "big-dream-golden-pusher": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "chibariyo-2": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "magical-halloween-8": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "zettai-shougeki-4": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "lotis": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  // Group A (original-work-linked), phase 1 of the follow-up rollout. Common
  // goods box included per the two-layer model (common goods on every
  // machine page + original-work box only where a source work exists).
  "saki-choujou-kessen": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerSaki", "mangazenkanSaki27"],
  },
  "koukaku-kidoutai-sac-2045": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKoukaku"],
  },
  "bakemonogatari": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerBakemonogatari"],
  },
  "lycoris-recoil": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerLycorisRecoil"],
  },
  // Group A, phase 2.
  "hokuto-no-ken-tensei-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerHokutoNoKen"],
  },
  "hokuto-tensho": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerHokutoNoKen"],
  },
  "gundam-seed": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonGundamSeed"],
  },
  "gundam-unicorn-kakusei-drive": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerGundamUC"],
  },
  "tokyo-revengers": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerTokyoRevengers"],
  },
  "one-punch-man": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerOnePunchMan"],
  },
  "kanojo-okarishimasu": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKanojoOkarishimasu", "mangazenkanKanojoOkarishimasu45"],
  },
  "golden-kamuy": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerGoldenKamuy"],
  },
  // Group A, phase 3.
  "kaidoumokushiroku-kaiji": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKaiji"],
  },
  "kinnikuman-7akuma": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKinnikuman"],
  },
  "hanma-baki": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerHanmaBaki"],
  },
  "karakuri-circus": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKarakuriCircus"],
  },
  "karakuri-circus-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKarakuriCircus"],
  },
  "kyokou-suiri": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKyokouSuiri"],
  },
  "kaguya-sama-wa-kokurasetai": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKaguyaSama", "mangazenkanKaguyaSama28"],
  },
  "shaman-king": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerShamanKing"],
  },
  "mushoku-tensei": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerMushokuTensei"],
  },
  // Group A, phase 4.
  "basilisk-kizuna-2-tenzen-black": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerBasilisk"],
  },
  "goblin-slayer-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerGoblinSlayer"],
  },
  "godzilla": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonGodzilla"],
  },
  "tekken-6": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonTekken"],
  },
  "code-geass-fukkatsu-no-lelouch": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerCodeGeass"],
  },
  "dumbbell-nan-kilo-moteru": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerDumbbell"],
  },
  "en-en-no-shouboutai-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerFireForce"],
  },
  "garei-zero-re": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerGarei"],
  },
  "god-eater-resurrection": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonGodEater"],
  },
  // Group A, phase 5.
  "biohazard-5": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonBiohazard"],
  },
  "biohazard-re3": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonBiohazard"],
  },
  "monster-hunter-rise": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonMonsterHunter"],
  },
  "devil-may-cry-5-stylish-tribe": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonDevilMayCry5"],
  },
  "girls-und-panzer-finale": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonGirlsPanzer"],
  },
  "birdie-wing": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonBirdieWing"],
  },
  "bofuri": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerBofuri"],
  },
  "bandori": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerBandori"],
  },
  "azur-lane-the-animation": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerAzurLane"],
  },
  // Group A, phase 6.
  "magia-record": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerMagiaRecord"],
  },
  "million-live": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonMillionLive"],
  },
  "takt-op-destiny": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonTaktOp"],
  },
  "arifureta-shokugyou-de-sekai-saikyou": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerArifureta"],
  },
  "senki-zesshou-symphogear": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerSymphogear"],
  },
  "kabaneri-kaimon-kessen": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKabaneri"],
  },
  "kabaneri-koutetsujou": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerKabaneri"],
  },
  "lupin-iii-daikoukaisha-no-hihou": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerLupin"],
  },
  "initial-d-2nd": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerInitialD"],
  },
  // Group A, phase 7.
  "nanatsu-no-maken-ga-shihai-suru": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerNanatsuNoMaken"],
  },
  "tensei-shitara-ken-deshita": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerTenseiKen"],
  },
  "tensei-oujo-to-tensai-reijou": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerTenseiOujo"],
  },
  "re-zero-season2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerRezero"],
  },
  "seishun-buta-yaro": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerSeishunButaYaro"],
  },
  "seiya-kaiou-custom-edition": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerSeiya"],
  },
  "shin-ikki-tousen": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerIkkiTousen"],
  },
  "shin-onimusha-3": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonOnimusha"],
  },
  "valvrave-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerValvrave"],
  },
  // Group A, phase 8.
  "toaru-majutsu-no-index": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerToaruIndex"],
  },
  "toaru-majutsu-no-index-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerToaruIndex"],
  },
  "toaru-kagaku-no-railgun-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerToaruRailgun"],
  },
  "to-love-ru-darkness": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerToLoveRu"],
  },
  "to-love-ru-darkness-trance-8-7": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerToLoveRu"],
  },
  "darling-in-the-franxx": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerDarlingFranxx"],
  },
  "watashi-no-shiawase-na-kekkon": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerWatashiNoShiawase"],
  },
  "youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerYokoso"],
  },
  "zombieland-saga": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerZombielandSaga"],
  },
  // Group A, phase 9 (missed in the initial classification pass).
  "akudama-drive": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerAkudamaDrive"],
  },
  "dunbine": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonDunbine"],
  },
  "jashin-chan-dropkick": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerJashinChan"],
  },
  "jormungand": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerJormungand"],
  },
  "mieruko-chan": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerMierukoChan"],
  },
  "paripi-koumei": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerParipiKoumei"],
  },
  "shin-hokuto-musou": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["amazonShinHokutoMusou"],
  },
  "sword-art-online-2": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerSAO"],
  },
  "ultraman-saishuu-kessen": {
    offerIds: ["soundcoreLiberty4", "mobileBatteryCable"],
    originalWorkOfferIds: ["bookwalkerUltraman"],
  },
  // Group C candidates re-checked: no confident source-work match found, so
  // common goods only (no originalWorkOfferIds) for now.
  "chinjin-gonin-5": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
  "mahjong-fight-club-kakusei": { offerIds: ["soundcoreLiberty4", "mobileBatteryCable"] },
};
