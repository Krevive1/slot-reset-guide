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
};
