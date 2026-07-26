import { Machine } from "@/lib/content/schema";
import { InfoTone, ToneLabel, toneSectionClassName } from "./InfoHighlight";
import { TOC_IDS } from "@/lib/content/toc";

export default function MorningTarget({
  morningTarget,
  tone = "action",
}: {
  morningTarget: Machine["morningTarget"];
  tone?: InfoTone;
}) {
  return (
    <section id={TOC_IDS.morningStrategy} className={toneSectionClassName(tone)} aria-labelledby="morning-target-heading">
      <ToneLabel tone={tone} />
      <h2 id="morning-target-heading">朝イチの狙い目</h2>
      <ul>
        {morningTarget.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
