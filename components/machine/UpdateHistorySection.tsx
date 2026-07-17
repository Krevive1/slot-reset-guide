import { Machine } from "@/lib/content/schema";

export default function UpdateHistorySection({
  updateHistory,
}: {
  updateHistory: Machine["comingSoon"];
}) {
  if (!updateHistory || updateHistory.updateHistory.length === 0) return null;
  return (
    <section className="card" aria-labelledby="update-history-heading">
      <h2 id="update-history-heading">更新履歴</h2>
      <ul className="update-history-list">
        {updateHistory.updateHistory.map((entry) => (
          <li key={`${entry.date}-${entry.note}`}>
            <span className="update-history-date">{entry.date}</span>
            {entry.note}
          </li>
        ))}
      </ul>
    </section>
  );
}
