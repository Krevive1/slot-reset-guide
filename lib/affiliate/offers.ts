import { A8_SLOT_URL, buildAmazonSearchUrl } from "@/lib/site";

export type AffiliateOfferType = "vod" | "ebook" | "hotel" | "product";

export type AffiliatePlacement =
  | "intro"
  | "comparison"
  | "mid_article"
  | "conclusion"
  | "machine_related";

export type AffiliateOffer = {
  id: string;
  provider: string;
  programName: string;
  offerType: AffiliateOfferType;
  serviceName: string;
  href: string;
  ctaLabel: string;
  disclosure: "広告" | "PR";
  isActive: boolean;
  description?: string;
  imageSrc?: string;
};

export const affiliateOffers = {
  soundcoreLiberty4: {
    id: "amazon-soundcore-liberty-4",
    provider: "Amazon",
    programName: "Amazonアソシエイト",
    offerType: "product",
    serviceName: "Soundcore Liberty 4",
    href: buildAmazonSearchUrl("Soundcore Liberty 4"),
    ctaLabel: "Amazonで探す",
    disclosure: "広告",
    isActive: true,
    description: "隣台の爆音がつらいときに。運営者が実際にホールで使用している製品です。",
    imageSrc: "/images/products/soundcore-liberty-4.png",
  },
  soundcoreLiberty5: {
    id: "amazon-soundcore-liberty-5",
    provider: "Amazon",
    programName: "Amazonアソシエイト",
    offerType: "product",
    serviceName: "Soundcore Liberty 5",
    href: buildAmazonSearchUrl("Soundcore Liberty 5"),
    ctaLabel: "Amazonで探す",
    disclosure: "広告",
    isActive: true,
    description: "Anker Japan公式サイトでLiberty 4の後継機として案内されているモデルです。",
    imageSrc: "/images/products/soundcore-liberty-5.png",
  },
  kachikachiKun: {
    id: "amazon-kachikachi-kun",
    provider: "Amazon",
    programName: "Amazonアソシエイト",
    offerType: "product",
    serviceName: "カチカチくん（小役カウンター）",
    href: buildAmazonSearchUrl("カチカチくん"),
    ctaLabel: "Amazonで探す",
    disclosure: "広告",
    isActive: true,
    description: "スイカ・チェリー・ベルなどの小役成立回数を手持ちで数えられるカウンターです。",
  },
  noiseCancellingEarphones: {
    id: "amazon-noise-cancelling-earphones",
    provider: "Amazon",
    programName: "Amazonアソシエイト",
    offerType: "product",
    serviceName: "ノイズキャンセリングイヤホン",
    href: buildAmazonSearchUrl("ノイズキャンセリング イヤホン"),
    ctaLabel: "Amazonで探す",
    disclosure: "広告",
    isActive: true,
  },
  aSlot: {
    id: "a8-a-slot",
    provider: "A8.net",
    programName: "A8.net",
    offerType: "product",
    serviceName: "家庭で楽しめる中古スロット【A-SLOT】",
    href: A8_SLOT_URL,
    ctaLabel: "A-SLOTを見る",
    disclosure: "広告",
    isActive: true,
  },
} as const satisfies Record<string, AffiliateOffer>;

export type AffiliateOfferId = keyof typeof affiliateOffers;

export function getActiveAffiliateOffer(id: AffiliateOfferId | string): AffiliateOffer | null {
  const offer = affiliateOffers[id as AffiliateOfferId];
  return offer?.isActive ? offer : null;
}
