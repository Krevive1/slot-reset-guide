"use client";

import { useState } from "react";
import Image from "next/image";
import AffiliateLink from "./AffiliateLink";
import type { AffiliateOffer } from "@/lib/affiliate/offers";

type StickyBottomBannerProps = {
  offer: AffiliateOffer | null;
};

export default function StickyBottomBanner({ offer }: StickyBottomBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!offer || !offer.imageSrc || dismissed) {
    return null;
  }

  return (
    <>
      {/* Reserves space so the fixed bar never covers the page's own footer content. */}
      <div className="sticky-bottom-banner-spacer" aria-hidden="true" />
      <div className="sticky-bottom-banner">
        <span className="sticky-bottom-banner-ad-label">{offer.disclosure}</span>
        <AffiliateLink
          href={offer.href}
          className="sticky-bottom-banner-link"
          provider={offer.provider}
          productName={offer.serviceName}
          ctaLabel={offer.ctaLabel}
          offerType={offer.offerType}
          serviceName={offer.serviceName}
          placement="sticky_footer"
          affiliateProgram={offer.programName}
        >
          <span className="sticky-bottom-banner-image">
            <Image
              src={offer.imageSrc}
              alt={offer.serviceName}
              fill
              sizes="100vw"
              style={{ objectFit: "contain" }}
            />
          </span>
        </AffiliateLink>
        <button
          type="button"
          className="sticky-bottom-banner-close"
          aria-label="バナーを閉じる"
          onClick={() => setDismissed(true)}
        >
          ✕
        </button>
      </div>
    </>
  );
}
