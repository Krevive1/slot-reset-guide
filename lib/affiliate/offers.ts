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
    imageSrc: "/images/products/a-slot-banner.gif",
  },
  bookwalkerTokyoGhoul: {
    id: "bookwalker-tokyo-ghoul",
    provider: "A8.net",
    programName: "215万冊以上から探す！初回購入で50%還元【BOOK WALKER】",
    offerType: "ebook",
    serviceName: "BOOK☆WALKER",
    href: "https://px.a8.net/svt/ejp?a8mat=4B8DGU+89OR8Y+5X16+BW8O2&a8ejpredirect=https%3A%2F%2Fbookwalker.jp%2Fseries%2F12565%2F",
    ctaLabel: "BOOK☆WALKERで東京喰種を確認する",
    disclosure: "広告",
    isActive: true,
    description: "『東京喰種トーキョーグール』を電子書籍で確認できます。",
    imageSrc: "/images/products/bookwalker-tokyo-ghoul-banner.jpg",
  },
  mangazenkanTokyoGhoul30: {
    id: "mangazenkan-tokyo-ghoul-30",
    provider: "A8.net",
    programName: "【漫画全巻ドットコム】コミック全巻セット販売",
    offerType: "product",
    serviceName: "漫画全巻ドットコム",
    href: "https://px.a8.net/svt/ejp?a8mat=4B8DGU+8BH22A+1892+BW8O2&a8ejpredirect=https%3A%2F%2Fwww.mangazenkan.com%2Fitems%2F10484737%2F",
    ctaLabel: "漫画全巻ドットコムで本編全30巻を確認する",
    disclosure: "広告",
    isActive: true,
    description: "無印14巻と『:re』16巻をまとめた本編全30冊セットです。",
    imageSrc: "/images/products/mangazenkan-tokyo-ghoul-banner.jpg",
  },
  rakutenTokyoGhoul30: {
    id: "rakuten-tokyo-ghoul-30",
    provider: "もしもアフィリエイト",
    programName: "楽天市場の商品購入 / 楽天グループ株式会社",
    offerType: "product",
    serviceName: "楽天市場",
    href: "https://af.moshimo.com/af/c/click?a_id=5721789&p_id=54&pc_id=54&pl_id=616&url=https%3A%2F%2Fsearch.rakuten.co.jp%2Fsearch%2Fmall%2F%25E6%259D%25B1%25E4%25BA%25AC%25E5%2596%25B0%25E7%25A8%25AE%2B%25E5%2585%25A8%25E5%25B7%25BB%2F",
    ctaLabel: "楽天市場で無印14巻＋:re16巻・本編全30巻を確認する",
    disclosure: "広告",
    isActive: true,
    imageSrc: "/images/products/rakuten-banner.gif",
  },
  yahooTokyoGhoul30: {
    id: "yahoo-tokyo-ghoul-30",
    provider: "もしもアフィリエイト",
    programName: "【Yahoo!ショッピング】商品購入",
    offerType: "product",
    serviceName: "Yahoo!ショッピング",
    href: "https://af.moshimo.com/af/c/click?a_id=5721823&p_id=1225&pc_id=1925&pl_id=18502&url=https%3A%2F%2Fshopping.yahoo.co.jp%2Fsearch%3Fp%3D%25E6%259D%25B1%25E4%25BA%25AC%25E5%2596%25B0%25E7%25A8%25AE%2B%25E5%2585%25A8%25E5%25B7%25BB",
    ctaLabel: "Yahoo!ショッピングで無印14巻＋:re16巻・本編全30巻を確認する",
    disclosure: "広告",
    isActive: true,
    imageSrc: "/images/products/yahoo-shopping-banner.jpg",
  },
  rentaTokyoGhoul: {
    id: "valuecommerce-renta-tokyo-ghoul",
    provider: "バリューコマース",
    programName: "Renta!プログラム",
    offerType: "ebook",
    serviceName: "Renta!",
    href: "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3777293&pid=892672270&vc_url=https%3A%2F%2Frenta.papy.co.jp%2Frenta%2Fsc%2Ffrm%2Fitem%2F171259%3Fref%3Dvc",
    ctaLabel: "Rentaで東京喰種を確認する",
    disclosure: "広告",
    isActive: true,
    description: "『東京喰種トーキョーグール』をポイント購入で読める電子書籍サービスです。",
    imageSrc: "/images/products/renta-banner.jpg",
  },
  jalanNet: {
    id: "valuecommerce-jalan-net",
    provider: "バリューコマース",
    programName: "★ホテル・宿予約サイト「じゃらんnet」",
    offerType: "hotel",
    serviceName: "じゃらんnet",
    href: "https://ck.jp.ap.valuecommerce.com/servlet/referral?sid=3777293&pid=892672272&vc_url=https%3A%2F%2Fwww.jalan.net%2F",
    ctaLabel: "じゃらんnetで宿を探す",
    disclosure: "広告",
    isActive: true,
    description: "遠征を伴う実践の宿・ホテル予約に使えるサービスです。",
  },
} as const satisfies Record<string, AffiliateOffer>;

export type AffiliateOfferId = keyof typeof affiliateOffers;

export function getActiveAffiliateOffer(id: AffiliateOfferId | string): AffiliateOffer | null {
  const offer = affiliateOffers[id as AffiliateOfferId];
  return offer?.isActive ? offer : null;
}
