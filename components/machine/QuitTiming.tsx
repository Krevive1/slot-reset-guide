import Link from "next/link";
import { Machine } from "@/lib/content/schema";

export default function QuitTiming({ quitTiming }: { quitTiming: Machine["quitTiming"] }) {
  return (
    <section className="card warning" aria-labelledby="quit-timing-heading">
      <h2 id="quit-timing-heading">やめどき</h2>
      <ul>
        {quitTiming.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <p className="section-note">
        <Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点はこちら →</Link>
      </p>
    </section>
  );
}
