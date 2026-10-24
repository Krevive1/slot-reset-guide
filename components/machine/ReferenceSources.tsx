import Link from "next/link";
import { Machine } from "@/lib/content/schema";
import { TOC_IDS } from "@/lib/content/toc";

const SOURCES = [
  { name: "なな徹", url: "https://nana-press.com/" },
  { name: "ちょんぼりすた", url: "https://chonborista.com/" },
  { name: "スロベース", url: "https://slobase.jp/" },
  { name: "パチーモ", url: "https://altema.jp/pachimo/" },
];

export default function ReferenceSources({
  additionalReferences,
}: {
  additionalReferences?: Machine["additionalReferences"];
}) {
  const extra = additionalReferences ?? [];

  return (
    <section id={TOC_IDS.sources} className="card reference-sources" aria-labelledby="reference-sources-heading">
      <h2 id="reference-sources-heading">参考情報</h2>
      {extra.length > 0 && (
        <>
          <h3>この機種で確認した参考ページ</h3>
          <ul>
            {extra.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      {extra.length === 0 && (
        <>
          <h3>確認している主な媒体（全機種共通）</h3>
          <ul>
            {SOURCES.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer">
                  {source.name}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
      <p className="section-note">
        各情報を確認し、当サイト用に要約・整理しています。
        確認の方針は
        <Link href="/editorial-policy">情報確認・記事作成ポリシー</Link>
        をご覧ください。
      </p>
    </section>
  );
}
