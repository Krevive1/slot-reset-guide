import { Machine } from "@/lib/content/schema";
import { InfoTone, ToneLabel, toneSectionClassName } from "./InfoHighlight";

export default function ResetInfo({
  resetInfo,
  tone = "important",
}: {
  resetInfo: Machine["resetInfo"];
  tone?: InfoTone;
}) {
  return (
    <section className={toneSectionClassName(tone)} aria-labelledby="reset-info-heading">
      <ToneLabel tone={tone} />
      <h2 id="reset-info-heading">リセット恩恵</h2>
      <ul>
        {resetInfo.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      {resetInfo.notes && <p className="section-note">{resetInfo.notes}</p>}
    </section>
  );
}
