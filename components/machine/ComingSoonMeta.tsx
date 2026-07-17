import { Machine } from "@/lib/content/schema";

export default function ComingSoonMeta({ comingSoon }: { comingSoon: Machine["comingSoon"] }) {
  if (!comingSoon) return null;
  return (
    <p className="coming-soon-meta">
      <span className="coming-soon-info-status">{comingSoon.infoStatus}</span>
      <span className="coming-soon-last-confirmed">最終確認日：{comingSoon.lastConfirmedAt}</span>
    </p>
  );
}
