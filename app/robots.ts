import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers, and AI search/citation bots (ChatGPT, Claude,
      // Perplexity, Google AI Overviews). Explicitly allowed so this
      // content can be cited, not just training-scraped.
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "GPTBot", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "ClaudeBot", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "anthropic-ai", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "PerplexityBot", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "Google-Extended", allow: "/", disallow: ["/admin", "/api"] },
      { userAgent: "Bingbot", allow: "/", disallow: ["/admin", "/api"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
