import Link from "next/link";

// Slug-specific extra reading links, layered onto the default link below.
// Keyed by machine slug so this stays a small lookup table rather than a
// per-machine schema field.
const SLUG_SPECIFIC_LINKS: Record<string, { href: string; label: string }> = {
  "monkey-turn-v": {
    href: "/articles/kachikachi-kun",
    label: "カチカチくん（小役カウンター）とは？使う場面と選び方",
  },
};

export default function RelatedReading({ slug }: { slug?: string }) {
  const extra = slug ? SLUG_SPECIFIC_LINKS[slug] : undefined;
  return (
    <section className="article-link-box" aria-label="合わせて読みたい">
      <p>
        合わせて読みたい：<Link href="/articles/ie-suro-erabikata">家スロ（家庭用実機）の選び方</Link>
        {extra && (
          <>
            {" "}／ <Link href={extra.href}>{extra.label}</Link>
          </>
        )}
      </p>
    </section>
  );
}
