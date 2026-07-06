export default function HotBadge({ hot }: { hot?: boolean }) {
  if (!hot) return null;
  return (
    <span className="hot-badge" aria-label="注目の熱い機種">
      熱
    </span>
  );
}
