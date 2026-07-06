import { Machine } from "@/lib/content/schema";

export default function ResetInfo({ resetInfo }: { resetInfo: Machine["resetInfo"] }) {
  return (
    <section className="card" aria-labelledby="reset-info-heading">
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
