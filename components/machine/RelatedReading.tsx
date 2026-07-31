import Link from "next/link";
import { machineAffiliatePlacements } from "@/lib/affiliate/machinePlacements";

export default function RelatedReading({ slug }: { slug?: string }) {
  const readings = slug ? machineAffiliatePlacements[slug]?.relatedReadings ?? [] : [];

  if (readings.length === 0) return null;

  return (
    <section className="article-link-box" aria-label="合わせて読みたい">
      <p>合わせて読みたい</p>
      <ul>
        {readings.map((reading) => (
          <li key={reading.href}>
            <Link href={reading.href}>{reading.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
