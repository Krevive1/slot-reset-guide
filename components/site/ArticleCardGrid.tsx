import Link from "next/link";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import type { ArticleMeta } from "@/lib/content/articles";

export default function ArticleCardGrid({
  articles,
  showDescription = false,
  wide = false,
}: {
  articles: ArticleMeta[];
  showDescription?: boolean;
  /** 新台NEWS相当の大きめ2列表示にする場合はtrue。省略時は通常の4列表示。 */
  wide?: boolean;
}) {
  return (
    <div className={wide ? "cards top-news-cards" : "cards"}>
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
