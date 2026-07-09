import Link from "next/link";

export default function RelatedReading() {
  return (
    <section className="article-link-box" aria-label="合わせて読みたい">
      <p>
        合わせて読みたい：<Link href="/articles/ie-suro-erabikata">家スロ（家庭用実機）の選び方</Link>
      </p>
    </section>
  );
}
