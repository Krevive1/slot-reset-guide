import AffiliateOfferList from "@/components/site/AffiliateOfferList";
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
      <AffiliateOfferList offers={offers} featuredCount={machineAffiliatePlacements[slug]?.originalWorkFeaturedCount} />
    </section>
  );
}
