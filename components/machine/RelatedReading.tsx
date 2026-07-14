import Link from "next/link";

// Slug-specific extra reading links, layered onto the default link below.
// Keyed by machine slug so this stays a small lookup table rather than a
// per-machine schema field.
const SLUG_SPECIFIC_LINKS: Record<string, { href: string; label: string }> = {
  "monkey-turn-v": {
    href: "/articles/monkey-turn-v-5mai-yaku",
    label: "モンキーターンVの5枚役とは？設定差・数え方・計算方法",
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
