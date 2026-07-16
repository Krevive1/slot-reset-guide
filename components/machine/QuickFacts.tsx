import { Machine } from "@/lib/content/schema";

// Optional, per-machine "check in 30 seconds" summary. Most machines don't
// set quickFacts, in which case this renders nothing and the page looks
// exactly as before -- this is deliberately opt-in per machine rather than
// auto-generated for all 94 files.
export default function QuickFacts({ quickFacts }: { quickFacts?: Machine["quickFacts"] }) {
  if (!quickFacts || quickFacts.items.length === 0) return null;

  return (
    <section className="card quick-facts" aria-labelledby="quick-facts-heading">
      <h2 id="quick-facts-heading">{quickFacts.title}</h2>
      <ul>
        {quickFacts.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
