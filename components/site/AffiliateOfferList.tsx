import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import type { AffiliateOffer } from "@/lib/affiliate/offers";

// Renders offers in a grid. When featuredCount is set (trial pages only), just
// the first N are shown and the rest sit in a collapsed <details>.
function Boxes({ offers, placement }: { offers: AffiliateOffer[]; placement: "machine_related" | "trial_featured" | "trial_more" }) {
  return (
    <div className="product-box-grid">
      {offers.map((offer) => (
        <AffiliateProductBox
          key={offer.id}
          provider={offer.provider}
          name={offer.serviceName}
          note={offer.description ?? "詳細はリンク先でご確認ください。"}
          ctaLabel={offer.ctaLabel}
          ctaHref={offer.href}
          imageSrc={offer.imageSrc}
          disclosure={offer.disclosure}
          offerType={offer.offerType}
          serviceName={offer.serviceName}
          placement={placement}
          affiliateProgram={offer.programName}
        />
      ))}
    </div>
  );
}

export default function AffiliateOfferList({ offers, featuredCount }: { offers: AffiliateOffer[]; featuredCount?: number }) {
  if (featuredCount === undefined || offers.length <= featuredCount) {
    return <Boxes offers={offers} placement={featuredCount === undefined ? "machine_related" : "trial_featured"} />;
  }
  return (
    <>
      <Boxes offers={offers.slice(0, featuredCount)} placement="trial_featured" />
      <details className="product-more">
        <summary>他のサービスも見る（広告）</summary>
        <Boxes offers={offers.slice(featuredCount)} placement="trial_more" />
      </details>
    </>
  );
}
