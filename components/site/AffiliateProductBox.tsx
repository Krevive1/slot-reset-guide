import AffiliateLink from "./AffiliateLink";

type AffiliateProductBoxProps = {
  provider: "Amazon" | "A8.net";
  name: string;
  note: string;
  ctaLabel: string;
  ctaHref?: string | null;
};

// ctaHref is null until the corresponding affiliate account is approved and a
// real tracking link exists. Renders a disabled button instead of guessing a URL.
export default function AffiliateProductBox({
  provider,
  name,
  note,
  ctaLabel,
  ctaHref,
}: AffiliateProductBoxProps) {
  return (
    <div className="product-box">
      <span className="product-box-provider">
        {provider}
        <span className="product-box-ad-label">広告</span>
      </span>
      <h3>{name}</h3>
      <p>{note}</p>
      {ctaHref ? (
        <AffiliateLink
          href={ctaHref}
          className="button button-secondary"
          provider={provider}
          productName={name}
          ctaLabel={ctaLabel}
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
