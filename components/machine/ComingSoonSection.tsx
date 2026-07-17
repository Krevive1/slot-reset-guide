import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import ComingSoonCard from "./ComingSoonCard";

export default function ComingSoonSection({
  machines,
  heading = "導入予定・Coming Soon",
  description = "まだ導入前の機種です。掲載中の機種とは分けて表示しています。情報は導入前の速報・解析情報をもとにしており、 導入後に内容が変更・更新される場合があります。",
  footerLink,
}: {
  machines: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "resetInfo" | "comingSoon">[];
  heading?: string;
  description?: string;
  footerLink?: { href: string; label: string };
}) {
  if (machines.length === 0) return null;

  return (
    <section id="coming-soon" className="coming-soon-section" aria-labelledby="coming-soon-heading">
      <h2 id="coming-soon-heading">{heading}</h2>
      <p className="section-note">{description}</p>
      <div className="cards">
        {machines.map((machine) => (
          <ComingSoonCard key={machine.slug} machine={machine} />
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
