import { Machine } from "@/lib/content/schema";

export default function MorningTarget({
  morningTarget,
}: {
  morningTarget: Machine["morningTarget"];
}) {
  return (
    <section className="card" aria-labelledby="morning-target-heading">
      <h2 id="morning-target-heading">朝イチの狙い目</h2>
      <ul>
        {morningTarget.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
