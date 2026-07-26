import { Machine } from "@/lib/content/schema";
import { hasQuickFacts, TOC_IDS } from "@/lib/content/toc";

// Optional, per-machine "check in 30 seconds" summary. Most machines don't
// set quickFacts, in which case this renders nothing and the page looks
// exactly as before -- this is deliberately opt-in per machine rather than
// auto-generated for all 94 files.
export default function QuickFacts({ quickFacts }: { quickFacts?: Machine["quickFacts"] }) {
  if (!hasQuickFacts(quickFacts)) return null;

  return (
    <section id={TOC_IDS.summary} className="card quick-facts" aria-labelledby="quick-facts-heading">
      <h2 id="quick-facts-heading">{quickFacts.title}</h2>
      <ul>
        {quickFacts.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
