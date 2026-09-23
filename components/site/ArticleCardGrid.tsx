import Link from "next/link";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import type { ArticleMeta } from "@/lib/content/articles";

export default function ArticleCardGrid({
  articles,
  showDescription = false,
}: {
  articles: ArticleMeta[];
  showDescription?: boolean;
}) {
  return (
    <div className="cards top-news-cards">
      {articles.map((article) => (
        <Link key={article.slug} href={`/articles/${article.slug}`} className="card machine-card">
          <MachineThumbnail heroImage={article.heroImage} name={article.title} />
          <h3>{article.title}</h3>
          <p className="updated-at">
            公開日：{article.publishedAt}
            {article.updatedAt && article.updatedAt !== article.publishedAt
              ? `　更新日：${article.updatedAt}`
              : ""}
          </p>
          {showDescription && <p className="section-note">{article.description}</p>}
        </Link>
      ))}
    </div>
  );
}
