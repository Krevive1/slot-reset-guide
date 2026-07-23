import Image from "next/image";

// Optional, per-machine mascot comment shown as a speech bubble after the
// quit-timing section. Opt-in per machine (like quickFacts) -- machines
// without a comment render nothing and the page looks exactly as before.
export default function WanchankunComment({ comment }: { comment?: string }) {
  if (!comment) return null;

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
        <p className="wanchankun-comment-text">{comment}</p>
      </div>
    </section>
  );
}
