import Link from "next/link";
import ComingSoonBadge from "./ComingSoonBadge";
import MachineThumbnail from "./MachineThumbnail";
import { Machine } from "@/lib/content/schema";

export default function ComingSoonCard({
  machine,
}: {
  machine: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "resetInfo" | "comingSoon">;
}) {
  return (
    <Link href={`/machines/${machine.slug}`} className="card machine-card coming-soon-card">
      <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />
      <ComingSoonBadge />
      <h3>{machine.name}</h3>
      <p className="section-note">
        {machine.spec.releaseDate ?? "導入予定日未定"}導入予定
        {machine.spec.maker && `／${machine.spec.maker.name}`}
      </p>
      <p>{machine.resetInfo.benefits[0]}</p>
      {machine.comingSoon && (
        <p className="coming-soon-meta">
          <span className="coming-soon-info-status">{machine.comingSoon.infoStatus}</span>
          <span className="coming-soon-last-confirmed">最終確認日：{machine.comingSoon.lastConfirmedAt}</span>
        </p>
      )}
    </Link>
  );
}
