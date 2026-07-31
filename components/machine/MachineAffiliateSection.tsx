import Link from "next/link";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
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
      <p className="section-note">
        朝一の待ち物についてさらに詳しくは
        <Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link>
        をご覧ください。
      </p>
    </section>
  );
}
