import Link from "next/link";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import { buildAmazonSearchUrl } from "@/lib/site";

export default function MachineAffiliateSection() {
  return (
    <section className="card" aria-labelledby="machine-affiliate-heading">
      <h2 id="machine-affiliate-heading">朝一実戦に便利な持ち物</h2>
      <p className="section-note">
        朝一の開店待ちや長時間の実戦であると便利なグッズです。
      </p>
      <div className="product-box-grid">
        <AffiliateProductBox
          provider="Amazon"
          name="遮音タイプの耳栓"
          note="店内の音量は長時間だと負担になりやすいため、遮音性のある耳栓を使う人が多いです。"
          ctaLabel="Amazonで探す"
          ctaHref={buildAmazonSearchUrl("耳栓 遮音")}
        />
        <AffiliateProductBox
          provider="Amazon"
          name="カチカチくん（小役カウンター）"
          note="スイカ・チェリー・ベルなどの小役成立回数を手持ちで数えられるカウンターです。"
          ctaLabel="Amazonで探す"
          ctaHref={buildAmazonSearchUrl("カチカチくん")}
        />
      </div>
      <p className="section-note">
        朝一の待ち物についてさらに詳しくは
        <Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link>
        をご覧ください。
      </p>
    </section>
  );
}
