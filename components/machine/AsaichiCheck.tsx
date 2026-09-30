import { Machine } from "@/lib/content/schema";

// Optional, per-machine "so what should I actually do this morning" verdict.
// Distinct from quickFacts (raw facts) and wanchankunComment (short aside):
// this is the site's own synthesized judgment, opt-in per machine like
// quickFacts -- omitted machines render nothing and look exactly as before.
export default function AsaichiCheck({ asaichiCheck }: { asaichiCheck?: Machine["asaichiCheck"] }) {
  if (!asaichiCheck) return null;

  return (
    <section className="card asaichi-check" aria-labelledby="asaichi-check-heading">
      <h2 id="asaichi-check-heading">ワンチャンくんの朝一チェック</h2>
      <p>{asaichiCheck}</p>
    </section>
  );
}
