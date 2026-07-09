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
      <span className="product-box-provider">{provider}</span>
      <h3>{name}</h3>
      <p>{note}</p>
      {ctaHref ? (
        <a
          href={ctaHref}
          className="button button-secondary"
          target="_blank"
          rel="noopener noreferrer sponsored"
        >
          {ctaLabel}
        </a>
      ) : (
        <span className="button button-disabled" aria-disabled="true">
          リンク準備中
        </span>
      )}
    </div>
  );
}
