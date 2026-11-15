import Link from "next/link";

export type ArticleRelatedLink = { href: string; label: string };

export default function ArticleRelatedLinks({
  heading = "あわせて読みたい",
  links,
}: {
  heading?: string;
  links: ArticleRelatedLink[];
}) {
  if (links.length === 0) return null;
  return (
    <section className="article-link-box" aria-label={heading}>
      <p>{heading}</p>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
