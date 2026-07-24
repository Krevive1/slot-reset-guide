export default function VideoBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  return (
    <span className="video-badge" aria-label="検証動画掲載あり">
      ▶ 検証動画あり
    </span>
  );
}
