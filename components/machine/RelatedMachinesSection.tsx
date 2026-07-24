import Link from "next/link";
import MachineThumbnail from "./MachineThumbnail";
import NewBadge from "./NewBadge";
import HotBadge from "./HotBadge";
import VideoBadge from "./VideoBadge";
import { Machine } from "@/lib/content/schema";

export default function RelatedMachinesSection({
  randomMachines,
}: {
  randomMachines: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "hot" | "referenceVideos">[];
}) {
  if (randomMachines.length === 0) return null;

  return (
    <section className="card" aria-labelledby="related-articles-heading">
      <h2 id="related-articles-heading">関連記事</h2>
      <div className="cards">
        {randomMachines.map((machine) => (
          <Link key={machine.slug} href={`/machines/${machine.slug}`} className="card machine-card">
            <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />
            <h3>
              {machine.name}
              <NewBadge releaseDate={machine.spec.releaseDate} />
              <HotBadge hot={machine.hot} />
              <VideoBadge count={machine.referenceVideos.length} />
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
