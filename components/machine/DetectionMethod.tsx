import Link from "next/link";
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
      <p className="section-note">
        <Link href="/guides/mikiwake-kata">見分け方の基本的な考え方はこちら →</Link>
      </p>
    </section>
  );
}
