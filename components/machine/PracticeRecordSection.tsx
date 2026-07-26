import { PracticeRecord } from "@/lib/content/schema";
import { hasPracticeRecords, TOC_IDS } from "@/lib/content/toc";

export default function PracticeRecordSection({ records }: { records: PracticeRecord[] }) {
  if (!hasPracticeRecords(records)) return null;
  return (
    <section id={TOC_IDS.practiceData} className="card practice-record" aria-labelledby="practice-record-heading">
      <h2 id="practice-record-heading">実践データ</h2>
      <p className="section-note">
        当サイトが実際に実践した記録です。上記の参考動画とは別の一次情報です。
      </p>
      <table>
        <thead>
          <tr>
            <th>実践日</th>
            <th>ホール・エリア</th>
            <th>台番号</th>
            <th>差枚</th>
            <th>メモ</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={`${record.date}-${record.machineNumber}`}>
              <td>{record.date}</td>
              <td>{record.hallArea}</td>
              <td>{record.machineNumber}</td>
              <td className={record.coinCount >= 0 ? "positive" : "negative"}>
                {record.coinCount > 0 ? `+${record.coinCount}` : record.coinCount}
              </td>
              <td>{record.note ?? ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
