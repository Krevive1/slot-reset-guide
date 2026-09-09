import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { machineAffiliatePlacements } from "@/lib/affiliate/machinePlacements";

export default function MachineOriginalWorkSection({ slug }: { slug: string }) {
  const configuredOfferIds = machineAffiliatePlacements[slug]?.originalWorkOfferIds ?? [];
  const offers = configuredOfferIds
    .map(getActiveAffiliateOffer)
    .filter((offer) => offer !== null);

  if (offers.length === 0) return null;

  return (
    <section className="card" aria-labelledby="machine-original-work-heading">
      <h2 id="machine-original-work-heading">この台の原作・関連作品を楽しむ</h2>
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
            placement="machine_related"
            affiliateProgram={offer.programName}
          />
        ))}
      </div>
    </section>
  );
}
