import Link from "next/link";
import MachineThumbnail from "./MachineThumbnail";
import { Machine } from "@/lib/content/schema";

export default function MachineCard({
  machine,
}: {
  machine: Pick<Machine, "slug" | "name" | "heroImage" | "spec">;
}) {
  return (
    <Link href={`/machines/${machine.slug}`} className="card machine-card">
      <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />
      <h3>{machine.name}</h3>
      <p className="section-note">{machine.spec.overview}</p>
    </Link>
  );
}
