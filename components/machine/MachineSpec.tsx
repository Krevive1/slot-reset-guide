import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import { TOC_IDS } from "@/lib/content/toc";

export default function MachineSpec({ spec }: { spec: Machine["spec"] }) {
  return (
    <section id={TOC_IDS.specs} className="card" aria-labelledby="spec-heading">
      <h2 id="spec-heading">スペック</h2>
      <ul>
        {spec.releaseDate && <li>導入日：{spec.releaseDate}</li>}
        {spec.maker && (
          <li>
            メーカー：<Link href={`/machines/maker/${spec.maker.slug}`}>{spec.maker.name}</Link>
          </li>
        )}
        {spec.series && (
          <li>
            シリーズ：<Link href={`/machines/series/${spec.series.slug}`}>{spec.series.name}</Link>
          </li>
        )}
        {spec.baseProbability && <li>通常時確率：{spec.baseProbability}</li>}
        {spec.bonusProbability && <li>ボーナス確率：{spec.bonusProbability}</li>}
        {spec.atProbability && <li>AT確率：{spec.atProbability}</li>}
      </ul>
      <p>{spec.overview}</p>
    </section>
  );
}
