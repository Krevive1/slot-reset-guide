// Placeholder ad slot. Real AdSense/affiliate integration is a later phase;
// this only reserves layout position so templates don't need reshaping later.
export default function AdSlot({ slot }: { slot: string }) {
  return (
    <div className="ad-slot" data-slot={slot}>
      広告枠（{slot}）— 未実装
    </div>
  );
}
