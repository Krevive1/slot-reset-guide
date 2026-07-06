import { Machine } from "@/lib/content/schema";

export default function DetectionMethod({
  detectionMethod,
}: {
  detectionMethod: Machine["detectionMethod"];
}) {
  return (
    <section className="card" aria-labelledby="detection-method-heading">
      <h2 id="detection-method-heading">判別方法</h2>
      <ul>
        {detectionMethod.methods.map((method) => (
          <li key={method}>{method}</li>
        ))}
      </ul>
    </section>
  );
}
