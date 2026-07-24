import Link from "next/link";
import MachineThumbnail from "./MachineThumbnail";
import NewBadge from "./NewBadge";
import HotBadge from "./HotBadge";
import VideoBadge from "./VideoBadge";
import { Machine } from "@/lib/content/schema";

export default function MachineCard({
  machine,
}: {
  machine: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "hot" | "referenceVideos">;
}) {
  return (
    <Link href={`/machines/${machine.slug}`} className="card machine-card">
      <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />
      <h3>
        {machine.name}
        <NewBadge releaseDate={machine.spec.releaseDate} />
        <HotBadge hot={machine.hot} />
        <VideoBadge count={machine.referenceVideos.length} />
      </h3>
      <p className="section-note">{machine.spec.overview}</p>
    </Link>
  );
}
