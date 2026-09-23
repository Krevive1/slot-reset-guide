import Link from "next/link";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import type { ArticleMeta } from "@/lib/content/articles";

export default function ArticleList({ articles }: { articles: ArticleMeta[] }) {
  return (
    <ul className="latest-list">
      {articles.map((article) => (
        <li key={article.slug} className="latest-list-item">
          <Link href={`/articles/${article.slug}`} className="latest-list-thumb">
            <MachineThumbnail heroImage={article.heroImage} name={article.title} sizes="64px" />
          </Link>
          <div className="latest-list-body">
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
            <p className="latest-list-date">{article.updatedAt ?? article.publishedAt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
