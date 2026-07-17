import { Machine } from "@/lib/content/schema";
import ComingSoonCard from "./ComingSoonCard";

export default function ComingSoonSection({
  machines,
}: {
  machines: Pick<Machine, "slug" | "name" | "heroImage" | "spec" | "resetInfo" | "comingSoon">[];
}) {
  if (machines.length === 0) return null;

  return (
    <section className="coming-soon-section" aria-labelledby="coming-soon-heading">
      <h2 id="coming-soon-heading">導入予定・Coming Soon</h2>
      <p className="section-note">
        まだ導入前の機種です。掲載中の機種とは分けて表示しています。情報は導入前の速報・解析情報をもとにしており、
        導入後に内容が変更・更新される場合があります。
      </p>
      <div className="cards">
        {machines.map((machine) => (
          <ComingSoonCard key={machine.slug} machine={machine} />
        ))}
      </div>
    </section>
  );
}
