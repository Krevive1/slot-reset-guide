import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import { InfoTone, ToneLabel, toneSectionClassName } from "./InfoHighlight";

export default function QuitTiming({
  quitTiming,
  tone = "action",
}: {
  quitTiming: Machine["quitTiming"];
  tone?: InfoTone;
}) {
  return (
    <section className={toneSectionClassName(tone)} aria-labelledby="quit-timing-heading">
      <ToneLabel tone={tone} />
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
