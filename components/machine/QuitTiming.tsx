import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import { InfoTone, ToneLabel, toneSectionClassName } from "./InfoHighlight";
import { TOC_IDS } from "@/lib/content/toc";

export default function QuitTiming({
  quitTiming,
  tone = "action",
}: {
  quitTiming: Machine["quitTiming"];
  tone?: InfoTone;
}) {
  return (
    <section id={TOC_IDS.quitTiming} className={toneSectionClassName(tone)} aria-labelledby="quit-timing-heading">
      <ToneLabel tone={tone} />
      <h2 id="quit-timing-heading">やめどき</h2>
      <ul>
        {quitTiming.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {quitTiming.groups && quitTiming.groups.length > 0 && (
        <div className="quit-timing-groups">
          {quitTiming.groups.map((group) => (
            <div className="quit-timing-group" key={group.heading}>
              <h3>{group.heading}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <p className="section-note">
        <Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点はこちら →</Link>
      </p>
    </section>
  );
}
