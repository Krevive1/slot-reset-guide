import { FaqItem, Machine } from "@/lib/content/schema";
import { SITE_URL, X_OFFICIAL_URL } from "@/lib/site";

export function buildArticleJsonLd(machine: Machine, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${machine.name}のリセット恩恵・朝イチ狙い目情報`,
    datePublished: machine.publishedAt,
    dateModified: machine.updatedAt,
    author: { "@type": "Organization", name: "ワンチャンくん" },
    mainEntityOfPage: url,
    ...(machine.heroImage && { image: [`${SITE_URL}${machine.heroImage}`] }),
  };
}

export function buildGenericArticleJsonLd({
  headline,
  description,
  url,
}: {
  headline: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    author: { "@type": "Organization", name: "ワンチャンくん" },
    publisher: { "@type": "Organization", name: "ワンチャンくん" },
    mainEntityOfPage: url,
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildAboutPageJsonLd({
  url,
  name,
  description,
}: {
  url: string;
  name: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    url,
    mainEntity: {
      "@type": "Organization",
      name,
      description,
      url: SITE_URL,
      sameAs: [X_OFFICIAL_URL],
    },
  };
}

export function buildFaqJsonLd(faq: FaqItem[]) {
  if (faq.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
