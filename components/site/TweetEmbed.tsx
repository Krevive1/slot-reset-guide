"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: (el?: HTMLElement) => void;
      };
    };
  }
}

/**
 * Renders an X (Twitter) post using X's official embed widget.
 * Falls back to a plain link to the post if widgets.js fails to load
 * (blocked script, offline, etc.) since the blockquote content below
 * already includes the author and a link to the original post.
 */
export default function TweetEmbed({
  tweetUrl,
  authorName,
}: {
  tweetUrl: string;
  authorName: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // App Router client-side navigation can land on this page after
    // widgets.js already ran once elsewhere in the session, in which case
    // it won't auto-scan new blockquotes — ask it to convert this one.
    if (window.twttr?.widgets && containerRef.current) {
      window.twttr.widgets.load(containerRef.current);
    }
  }, []);

  return (
    <div className="tweet-embed" ref={containerRef}>
      <Script src="https://platform.twitter.com/widgets.js" strategy="lazyOnload" />
      <blockquote className="twitter-tweet">
        <a href={tweetUrl} target="_blank" rel="noopener noreferrer nofollow">
          {authorName}のポストを見る（X）
        </a>
      </blockquote>
    </div>
  );
}
