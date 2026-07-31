import Image from "next/image";
import AffiliateLink from "./AffiliateLink";
import type { AffiliateOfferType, AffiliatePlacement } from "@/lib/affiliate/offers";

type AffiliateProductBoxProps = {
  provider: string;
  name: string;
  note: string;
  ctaLabel: string;
  ctaHref?: string | null;
  imageSrc?: string;
  disclosure?: "広告" | "PR";
  offerType?: AffiliateOfferType;
  serviceName?: string;
  placement?: AffiliatePlacement;
  affiliateProgram?: string;
};

// ctaHref is null until the corresponding affiliate account is approved and a
// real tracking link exists. Renders a disabled button instead of guessing a URL.
export default function AffiliateProductBox({
  provider,
  name,
  note,
  ctaLabel,
  ctaHref,
  imageSrc,
  disclosure = "広告",
  offerType,
  serviceName,
  placement,
  affiliateProgram,
}: AffiliateProductBoxProps) {
  return (
    <div className="product-box">
      <span className="product-box-provider">
        {provider}
        <span className="product-box-ad-label">{disclosure}</span>
      </span>
      {imageSrc && ctaHref ? (
        <AffiliateLink
          href={ctaHref}
          className="product-box-image-link"
          provider={provider}
          productName={name}
          ctaLabel={ctaLabel}
          offerType={offerType}
          serviceName={serviceName}
          placement={placement}
          affiliateProgram={affiliateProgram}
        >
          <span className="product-box-image">
            <Image src={imageSrc} alt={name} fill sizes="(max-width: 720px) 100vw, 320px" style={{ objectFit: "contain" }} />
          </span>
        </AffiliateLink>
      ) : imageSrc ? (
        <span className="product-box-image">
          <Image src={imageSrc} alt={name} fill sizes="(max-width: 720px) 100vw, 320px" style={{ objectFit: "contain" }} />
        </span>
      ) : null}
      <h3>{name}</h3>
      <p>{note}</p>
      {ctaHref ? (
        <AffiliateLink
          href={ctaHref}
          className="button button-secondary"
          provider={provider}
          productName={name}
          ctaLabel={ctaLabel}
          offerType={offerType}
          serviceName={serviceName}
          placement={placement}
          affiliateProgram={affiliateProgram}
        >
          {ctaLabel}
        </AffiliateLink>
      ) : (
        <span className="button button-disabled" aria-disabled="true">
          リンク準備中
        </span>
      )}
    </div>
  );
}
