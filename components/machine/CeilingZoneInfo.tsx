import { Machine } from "@/lib/content/schema";
import { InfoTone, ToneLabel, toneSectionClassName } from "./InfoHighlight";

export default function CeilingZoneInfo({
  ceilingZoneInfo,
  tone = "basic",
}: {
  ceilingZoneInfo: Machine["ceilingZoneInfo"];
  tone?: InfoTone;
}) {
  return (
    <section className={toneSectionClassName(tone)} aria-labelledby="ceiling-zone-heading">
      <ToneLabel tone={tone} />
      <h2 id="ceiling-zone-heading">天井・ゾーン情報</h2>
      {ceilingZoneInfo.ceilingGames && <p>天井：<strong>{ceilingZoneInfo.ceilingGames}</strong></p>}
      {ceilingZoneInfo.zones.length > 0 && (
        <ul>
          {ceilingZoneInfo.zones.map((zone) => (
            <li key={zone}>{zone}</li>
          ))}
        </ul>
      )}
    </section>
  );
}
