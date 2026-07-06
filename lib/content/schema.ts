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
  releaseDate: z.string(),
  maker: MakerRefSchema,
  series: SeriesRefSchema.optional(),
  overview: z.string(),
  baseProbability: z.string(),
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
