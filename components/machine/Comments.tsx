"use client";

import { useEffect } from "react";
import { DISQUS_SHORTNAME, SITE_URL } from "@/lib/site";

declare global {
  interface Window {
    disqus_config?: () => void;
    DISQUS?: { reset: (options: unknown) => void };
  }
}

export default function Comments({ slug, title }: { slug: string; title: string }) {
  const pageUrl = `${SITE_URL}/machines/${slug}`;

  useEffect(() => {
    if (!DISQUS_SHORTNAME) return;

    window.disqus_config = function (this: { page: { url: string; identifier: string; title: string } }) {
      this.page.url = pageUrl;
      this.page.identifier = slug;
      this.page.title = title;
    };

    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: window.disqus_config,
      });
      return;
    }

    const script = document.createElement("script");
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", String(+new Date()));
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [pageUrl, slug, title]);

  if (!DISQUS_SHORTNAME) {
    return (
      <section className="card" aria-labelledby="comments-heading">
        <h2 id="comments-heading">コメント</h2>
        <p className="section-note">コメント機能は準備中です。</p>
      </section>
    );
  }

  return (
    <section className="card" aria-labelledby="comments-heading">
      <h2 id="comments-heading">コメント</h2>
      <div id="disqus_thread" />
    </section>
  );
}
