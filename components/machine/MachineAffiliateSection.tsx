import Link from "next/link";
import AffiliateOfferList from "@/components/site/AffiliateOfferList";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { machineAffiliatePlacements } from "@/lib/affiliate/machinePlacements";

export default function MachineAffiliateSection({ slug }: { slug: string }) {
  const configuredOfferIds = machineAffiliatePlacements[slug]?.offerIds ?? [];
  const offers = configuredOfferIds
    .map(getActiveAffiliateOffer)
    .filter((offer) => offer !== null);

  if (offers.length === 0) return null;

  return (
    <section className="card" aria-labelledby="machine-affiliate-heading">
      <h2 id="machine-affiliate-heading">朝一実戦に便利な持ち物</h2>
      <p className="section-note">
        朝一の開店待ちや長時間の実戦であると便利なグッズです。
      </p>
      <AffiliateOfferList offers={offers} featuredCount={machineAffiliatePlacements[slug]?.gearFeaturedCount} />
      <p className="section-note">
        朝一の待ち物についてさらに詳しくは
        <Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link>
        をご覧ください。
      </p>
    </section>
  );
}
