import { Machine } from "@/lib/content/schema";

export default function CeilingZoneInfo({
  ceilingZoneInfo,
}: {
  ceilingZoneInfo: Machine["ceilingZoneInfo"];
}) {
  return (
    <section className="card" aria-labelledby="ceiling-zone-heading">
      <h2 id="ceiling-zone-heading">天井・ゾーン情報</h2>
      {ceilingZoneInfo.ceilingGames && <p>天井：{ceilingZoneInfo.ceilingGames}</p>}
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
