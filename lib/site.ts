// Update after the Vercel project is created and a production domain is known.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://slot-reset-guide-two.vercel.app";
export const LINE_OFFICIAL_URL = "https://lin.ee/vyukjWs";
export const X_OFFICIAL_URL = "https://x.com/onechancekun";

// Amazon Associates tracking tag, approved 2026-07-09.
export const AMAZON_ASSOCIATE_TAG = "wanchankun-22";

// No specific ASINs are hand-picked (we haven't personally tested products), so
// affiliate links point to a tagged Amazon search for the item category instead.
export function buildAmazonSearchUrl(keyword: string): string {
  const params = new URLSearchParams({ k: keyword, tag: AMAZON_ASSOCIATE_TAG });
  return `https://www.amazon.co.jp/s?${params.toString()}`;
}

// A8.net merchant affiliation approved 2026-07-09 (家庭で楽しめる中古スロット【A-SLOT】, 素材ID unlisted).
export const A8_SLOT_URL = "https://px.a8.net/svt/ejp?a8mat=4B7WD6+BRB7W2+2SY6+5YJRM";
