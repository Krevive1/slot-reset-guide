// Shared "meaningful color" treatment for machine detail page sections.
// Tone is always derived from existing structured data (e.g. machine.status)
// by the caller -- never from matching words inside the section's own text,
// which would risk mislabeling unconfirmed info as confirmed.
export type InfoTone = "important" | "basic" | "action" | "caution" | "pending" | "neutral";

const TONE_LABELS: Record<InfoTone, string | null> = {
  important: "重要",
  basic: "基本情報",
  action: "行動",
  caution: "注意",
  pending: "解析待ち",
  neutral: null,
};

export function toneSectionClassName(tone: InfoTone): string {
  return tone === "neutral" ? "card" : `card info-highlight info-highlight--${tone}`;
}

export function ToneLabel({ tone }: { tone: InfoTone }) {
  const label = TONE_LABELS[tone];
  if (!label) return null;
  return <span className={`info-highlight-label info-highlight-label--${tone}`}>{label}</span>;
}
