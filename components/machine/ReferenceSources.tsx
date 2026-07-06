const SOURCES = [
  { name: "なな徹", url: "https://nana-press.com/" },
  { name: "ちょんぼりすた", url: "https://chonborista.com/" },
  { name: "スロベース", url: "https://slobase.jp/" },
  { name: "パチーモ", url: "https://altema.jp/pachimo/" },
];

export default function ReferenceSources() {
  return (
    <section className="card reference-sources" aria-labelledby="reference-sources-heading">
      <h2 id="reference-sources-heading">参考情報</h2>
      <ul>
        {SOURCES.map((source) => (
          <li key={source.url}>
            <a href={source.url} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>
          </li>
        ))}
      </ul>
      <p className="section-note">
        各情報を確認し、当サイト用に要約・整理しています。
      </p>
    </section>
  );
}
