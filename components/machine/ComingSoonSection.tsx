import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import ComingSoonCard from "./ComingSoonCard";

export default function ComingSoonSection({
  machines,
  heading = "導入予定・Coming Soon",
  description = "まだ導入前の機種です。掲載中の機種とは分けて表示しています。情報は導入前の速報・解析情報をもとにしており、 導入後に内容が変更・更新される場合があります。",
  footerLink,
  variant = "default",
  sectionId = "coming-soon",
}: {
  machines: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "resetInfo" | "comingSoon">[];
  heading?: string;
  description?: string;
  footerLink?: { href: string; label: string };
  variant?: "default" | "compact";
  sectionId?: string;
}) {
  if (machines.length === 0) return null;

  const isCompact = variant === "compact";

  return (
    <section
      id={sectionId}
      className={`coming-soon-section${isCompact ? " coming-soon-section--compact" : ""}`}
      aria-labelledby={`${sectionId}-heading`}
    >
      <h2 id={`${sectionId}-heading`}>{heading}</h2>
      <p className="section-note">{description}</p>
      <div className="cards">
        {machines.map((machine) => (
          <ComingSoonCard key={machine.slug} machine={machine} variant={variant} />
        ))}
      </div>
      {footerLink && (
        <p>
          <Link href={footerLink.href}>{footerLink.label} →</Link>
        </p>
      )}
    </section>
  );
}
