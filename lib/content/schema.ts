import { z } from "zod";

export const MakerRefSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export const SeriesRefSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export const SpecSchema = z.object({
  // releaseDate/maker/baseProbability are optional: much of our reset-info
  // research is sourced from third-party analysis sites that document
  // ceiling/mode behavior but not official spec-sheet data. Never guess
  // these values — omit rather than fabricate.
  releaseDate: z.string().optional(),
  maker: MakerRefSchema.optional(),
  series: SeriesRefSchema.optional(),
  overview: z.string(),
  baseProbability: z.string().optional(),
  bonusProbability: z.string().optional(),
  atProbability: z.string().optional(),
});

export const ResetInfoSchema = z.object({
  benefits: z.array(z.string()).min(1),
  notes: z.string().optional(),
});

export const DetectionMethodSchema = z.object({
  methods: z.array(z.string()).min(1),
});

export const MorningTargetSchema = z.object({
  points: z.array(z.string()).min(1),
});

export const CeilingZoneInfoSchema = z.object({
  ceilingGames: z.string().optional(),
  zones: z.array(z.string()).default([]),
});

export const QuitTimingSchema = z.object({
  points: z.array(z.string()).min(1),
});

// Compliance-critical: attribution + original analysis are required so a
// reference-video entry can never be saved without them (spec 2.2).
export const ReferenceVideoSchema = z.object({
  youtubeVideoId: z.string().min(1),
  channelName: z.string().min(1),
  channelUrl: z.string().url(),
  title: z.string().min(1),
  summary: z.string().min(1),
  originalAnalysis: z.string().min(1),
  publishedAt: z.string().optional(),
});

export const PracticeRecordSchema = z.object({
  date: z.string(),
  hallArea: z.string(),
  machineNumber: z.string(),
  coinCount: z.number(),
  note: z.string().optional(),
});

export const RelatedMachineRefSchema = z.object({
  slug: z.string(),
  name: z.string(),
});

export const FaqItemSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

export const UpdateHistoryEntrySchema = z.object({
  date: z.string(),
  note: z.string(),
});

// Extra fields shown only on pre-release "Coming Soon" pages (status ===
// "coming-soon"). releaseDate itself stays on spec.releaseDate (single
// source of truth, no duplication) -- this block only carries the
// provisional-info-specific metadata that published machines don't need.
export const ComingSoonInfoSchema = z.object({
  infoStatus: z.string(),
  lastConfirmedAt: z.string(),
  updateHistory: z.array(UpdateHistoryEntrySchema).min(1),
});

// "maker" and "series" are reserved path segments (/machines/maker/[maker],
// /machines/series/[series]) and must never collide with a machine slug.
const RESERVED_MACHINE_SLUGS = new Set(["maker", "series"]);

export const MachineSchema = z.object({
  slug: z.string().refine((slug) => !RESERVED_MACHINE_SLUGS.has(slug), {
    message: '"maker" and "series" are reserved and cannot be used as a machine slug',
  }),
  name: z.string(),
  nameKana: z.string().optional(),
  heroImage: z.string().optional(),
  // Manual popularity/hall-contribution ranking (lower = more popular).
  // Drives display order on machine listing pages; omitted machines sort last.
  popularityRank: z.number().optional(),
  // Manual "熱" (hot/trending) flag, editorially assigned rather than computed.
  hot: z.boolean().optional(),
  // "published" is the default so all existing content (which predates this
  // field) keeps working with zero changes. "coming-soon" machines are kept
  // out of the main listing/count/search/related-machines pools and shown in
  // a separate section instead (see lib/content/machines.ts
  // getPublishedMachines/getComingSoonMachines). "draft" is reserved for
  // future unpublished-work-in-progress content; no current tooling reads it
  // yet beyond being excluded from getPublishedMachines.
  status: z.enum(["published", "coming-soon", "draft"]).default("published"),
  comingSoon: ComingSoonInfoSchema.optional(),
  // Optional "30秒で確認" summary shown near the top of the page, above the
  // hero image. Opt-in per machine (not auto-generated) -- omitted machines
  // render nothing here and look exactly as before this field existed.
  quickFacts: z
    .object({
      title: z.string(),
      items: z.array(z.string()).min(1),
    })
    .optional(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  spec: SpecSchema,
  resetInfo: ResetInfoSchema,
  detectionMethod: DetectionMethodSchema,
  morningTarget: MorningTargetSchema,
  ceilingZoneInfo: CeilingZoneInfoSchema,
  quitTiming: QuitTimingSchema,
  referenceVideos: z.array(ReferenceVideoSchema).default([]),
  practiceRecords: z.array(PracticeRecordSchema).default([]),
  relatedMachines: z.array(RelatedMachineRefSchema).default([]),
  faq: z.array(FaqItemSchema).default([]),
});

export type MakerRef = z.infer<typeof MakerRefSchema>;
export type SeriesRef = z.infer<typeof SeriesRefSchema>;
export type Machine = z.infer<typeof MachineSchema>;
export type ReferenceVideo = z.infer<typeof ReferenceVideoSchema>;
export type PracticeRecord = z.infer<typeof PracticeRecordSchema>;
export type FaqItem = z.infer<typeof FaqItemSchema>;
