import type { Metadata } from "next";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import ArticleList from "@/components/site/ArticleList";
import { getArticlesByCategory, ARTICLE_CATEGORY_INFO } from "@/lib/content/articles";
import { SITE_URL } from "@/lib/site";

const info = ARTICLE_CATEGORY_INFO["petit-news"];
const url = `${SITE_URL}${info.path}`;

export const metadata: Metadata = {
  title: info.label,
  description: info.description,
  alternates: { canonical: url },
};

export default function PetitNewsIndexPage() {
  const articles = getArticlesByCategory("petit-news");

  return (
    <>
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: info.label, href: info.path }]} />
      <h1 className="page-title">{info.label}</h1>
      <p className="section-note">{info.description}</p>
      {articles.length > 0 ? (
        <ArticleList articles={articles} />
      ) : (
        <p>現在公開中のプチニュースはありません。</p>
      )}
    </>
  );
}
