import Image from "next/image";
import type { ReactNode } from "react";

// Mascot comment shown as a speech bubble ("ワンチャンくんから一言").
// - Machine pages / news articles: pass a plain string via `comment`.
// - Petit-news articles: pass the paragraphs as `children`.
// Machines/articles without a comment render nothing.
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
        <p className="wanchankun-comment-label">ワンチャンくんから一言</p>
        {comment ? (
          <p className="wanchankun-comment-text">{comment}</p>
        ) : (
          <div className="wanchankun-comment-text">{children}</div>
        )}
      </div>
    </section>
  );
}
