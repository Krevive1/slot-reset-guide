// Placeholder ad slot. Real AdSense/affiliate integration is a later phase;
// this only reserves layout position so templates don't need reshaping later.
// The "未実装" placeholder is a dev-only visual aid -- production renders
// nothing rather than showing visitors an unfinished-looking dashed box.
export default function AdSlot({ slot }: { slot: string }) {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="ad-slot" data-slot={slot}>
      広告枠（{slot}）— 未実装
    </div>
  );
}
