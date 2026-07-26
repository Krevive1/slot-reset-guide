import { FaqItem, Machine, PracticeRecord, ReferenceVideo } from "./schema";

// Shared presence predicates. Each conditionally-rendered section component
// (QuickFacts/PracticeRecordSection/ReferenceVideoSection/MachineFaq) calls
// the matching function below for its own early-return check, and
// getAvailableTocSections calls the same functions to decide what to link.
// Neither side re-derives the rule -- change the condition once, here, and
// both the section and its TOC entry stay in sync.
// Type predicate (not just `boolean`) so callers that guard on this get
// `quickFacts` narrowed to defined afterwards, same as the old inline check did.
export function hasQuickFacts(
  quickFacts?: Machine["quickFacts"]
): quickFacts is NonNullable<Machine["quickFacts"]> {
  return Boolean(quickFacts && quickFacts.items.length > 0);
}

export function hasPracticeRecords(records: PracticeRecord[]): boolean {
  return records.length > 0;
}

export function hasReferenceVideos(videos: ReferenceVideo[]): boolean {
  return videos.length > 0;
}

export function hasFaq(faq: FaqItem[]): boolean {
  return faq.length > 0;
}

// Single source of truth for machine-detail-page section anchors: both the
// section elements' `id` attribute and the table-of-contents links are built
// from these constants, so the two can never silently drift apart.
export const TOC_IDS = {
  summary: "summary",
  specs: "specs",
  resetBenefits: "reset-benefits",
  resetCheck: "reset-check",
  morningStrategy: "morning-strategy",
  ceilingZones: "ceiling-zones",
  quitTiming: "quit-timing",
  practiceData: "practice-data",
  videos: "videos",
  faq: "faq",
  sources: "sources",
} as const;

type TocSectionId = (typeof TOC_IDS)[keyof typeof TOC_IDS];

export interface TocSectionDef {
  id: TocSectionId;
  label: string;
  priority: "primary" | "secondary";
}

// Display order is curated for "what am I trying to do" navigation rather
// than document order -- the 3 most-searched-for items always come first,
// regardless of where they actually sit in the rendered page.
const TOC_SECTIONS: TocSectionDef[] = [
  { id: TOC_IDS.summary, label: "30秒で概要", priority: "primary" },
  { id: TOC_IDS.morningStrategy, label: "朝イチの狙い目", priority: "primary" },
  { id: TOC_IDS.quitTiming, label: "やめどき", priority: "primary" },
  { id: TOC_IDS.specs, label: "スペック", priority: "secondary" },
  { id: TOC_IDS.resetBenefits, label: "リセット恩恵", priority: "secondary" },
  { id: TOC_IDS.resetCheck, label: "判別方法", priority: "secondary" },
  { id: TOC_IDS.ceilingZones, label: "天井・ゾーン情報", priority: "secondary" },
  { id: TOC_IDS.practiceData, label: "実践データ", priority: "secondary" },
  { id: TOC_IDS.videos, label: "参考動画", priority: "secondary" },
  { id: TOC_IDS.faq, label: "よくある質問", priority: "secondary" },
  { id: TOC_IDS.sources, label: "参考情報", priority: "secondary" },
];

// Calls the exact same hasX() functions the section components themselves
// call to early-return -- see the comment above those functions. This is the
// one place both the page and the TOC read from, so "section exists in the
// DOM" and "section is linked from the TOC" can't disagree.
export function getAvailableTocSections(machine: Machine): TocSectionDef[] {
  const present: Record<TocSectionId, boolean> = {
    [TOC_IDS.summary]: hasQuickFacts(machine.quickFacts),
    [TOC_IDS.specs]: true,
    [TOC_IDS.resetBenefits]: true,
    [TOC_IDS.resetCheck]: true,
    [TOC_IDS.morningStrategy]: true,
    [TOC_IDS.ceilingZones]: true,
    [TOC_IDS.quitTiming]: true,
    [TOC_IDS.practiceData]: hasPracticeRecords(machine.practiceRecords),
    [TOC_IDS.videos]: hasReferenceVideos(machine.referenceVideos),
    [TOC_IDS.faq]: hasFaq(machine.faq),
    [TOC_IDS.sources]: true,
  };
  return TOC_SECTIONS.filter((section) => present[section.id]);
}
