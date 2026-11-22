import Image from "next/image";
import type { ReactNode } from "react";

// Mascot comment shown as a speech bubble ("ワンチャンくんから一言").
// - Machine pages / news articles: pass a plain string via `comment`.
// - Petit-news articles: pass the paragraphs as `children`, using
//   <span className="wanchankun-comment-para"> for each paragraph.
// Machines/articles without a comment render nothing.
//
// IMPORTANT: the bubble body must NOT use <p>/<div> block paragraphs.
// Google Auto ads inserts ads between paragraph-like block elements, which
// put an ad *inside* the bubble (seen on 2026-11-22). Spans styled with
// display:block avoid those insertion points.
export default function WanchankunComment({
  comment,
  children,
}: {
  comment?: string;
  children?: ReactNode;
}) {
  if (!comment && !children) return null;

  return (
    <section className="wanchankun-comment" aria-label="ワンチャンくんから一言">
      <div className="wanchankun-comment-avatar">
        <Image
          src="/images/wanchankun-comment.png"
          alt="ワンチャンくん"
          width={72}
          height={72}
        />
      </div>
      <div className="wanchankun-comment-bubble">
        <span className="wanchankun-comment-label">ワンチャンくんから一言</span>
        <span className="wanchankun-comment-text">{comment ?? children}</span>
      </div>
    </section>
  );
}
