import Link from "next/link";
import { Machine } from "@/lib/content/schema";

export default function RelatedMachinesSection({
  relatedMachines,
  maker,
  series,
}: {
  relatedMachines: Machine["relatedMachines"];
  maker: Machine["spec"]["maker"];
  series?: Machine["spec"]["series"];
}) {
  return (
    <section className="card" aria-labelledby="related-machines-heading">
      <h2 id="related-machines-heading">関連機種・同メーカーへの内部リンク</h2>
      {relatedMachines.length > 0 && (
        <ul>
          {relatedMachines.map((related) => (
            <li key={related.slug}>
              <Link href={`/machines/${related.slug}`}>{related.name}</Link>
            </li>
          ))}
        </ul>
      )}
      <p className="section-note">
        メーカー：<Link href={`/machines/maker/${maker.slug}`}>{maker.name}</Link>
        {series && (
          <>
            {" "}／ シリーズ：<Link href={`/machines/series/${series.slug}`}>{series.name}</Link>
          </>
        )}
      </p>
    </section>
  );
}
