import { Machine } from "@/lib/content/schema";

// Renders the same question/answer pairs used to build the FAQPage JSON-LD
// (see lib/seo/jsonld.ts buildFaqJsonLd), so structured data always matches
// visible content. <details>/<summary> is native HTML: the full question and
// answer text is present in the server-rendered markup regardless of
// JavaScript, only the open/closed visual state depends on JS.
export default function MachineFaq({ faq }: { faq: Machine["faq"] }) {
  if (faq.length === 0) return null;

  return (
    <section className="card" aria-labelledby="machine-faq-heading">
      <h2 id="machine-faq-heading">よくある質問</h2>
      <div className="machine-faq-list">
        {faq.map((item) => (
          <details key={item.question} className="machine-faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
