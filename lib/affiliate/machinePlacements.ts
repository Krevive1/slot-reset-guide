import type { AffiliateOfferId } from "@/lib/affiliate/offers";

export type RelatedReadingItem = {
  href: string;
  label: string;
};

export type MachineAffiliatePlacement = {
  offerIds?: AffiliateOfferId[];
  relatedReadings?: RelatedReadingItem[];
};

// Only explicitly listed slugs receive affiliate products or extra reading.
// Array order is the display order on the machine page.
export const machineAffiliatePlacements: Record<string, MachineAffiliatePlacement> = {
  "monkey-turn-v": {
    offerIds: ["soundcoreLiberty4", "kachikachiKun"],
    relatedReadings: [
      {
        href: "/articles/monkey-turn-v-5mai-yaku",
        label: "モンキーターンVの5枚役とは？設定差・数え方・計算方法",
      },
    ],
  },
  "tokyo-ghoul": {
    offerIds: ["soundcoreLiberty4"],
    relatedReadings: [
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
};
