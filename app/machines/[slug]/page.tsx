import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMachineSlugs, getMachine } from "@/lib/content/machines";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import AdSlot from "@/components/ads/AdSlot";
import MachineSpec from "@/components/machine/MachineSpec";
import ResetInfo from "@/components/machine/ResetInfo";
import DetectionMethod from "@/components/machine/DetectionMethod";
import MorningTarget from "@/components/machine/MorningTarget";
import CeilingZoneInfo from "@/components/machine/CeilingZoneInfo";
import QuitTiming from "@/components/machine/QuitTiming";
import ReferenceVideoSection from "@/components/machine/ReferenceVideoSection";
import PracticeRecordSection from "@/components/machine/PracticeRecordSection";
import RelatedMachinesSection from "@/components/machine/RelatedMachinesSection";

export async function generateStaticParams() {
  const slugs = await getAllMachineSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const machine = await getMachine(slug);
  if (!machine) return {};
  return {
    title: machine.name,
    description: machine.spec.overview,
  };
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const machine = await getMachine(slug);
  if (!machine) notFound();

  const url = `${SITE_URL}/machines/${machine.slug}`;
  const articleJsonLd = buildArticleJsonLd(machine, url);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: machine.name, url },
  ]);
  const faqJsonLd = buildFaqJsonLd(machine.faq);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <h1>{machine.name}</h1>
      <p className="updated-at">更新日：{machine.updatedAt.slice(0, 10)}</p>

      <MachineSpec spec={machine.spec} />
      <ResetInfo resetInfo={machine.resetInfo} />
      <DetectionMethod detectionMethod={machine.detectionMethod} />
      <MorningTarget morningTarget={machine.morningTarget} />
      <CeilingZoneInfo ceilingZoneInfo={machine.ceilingZoneInfo} />
      <QuitTiming quitTiming={machine.quitTiming} />
      <AdSlot slot="in-article" />
      <ReferenceVideoSection videos={machine.referenceVideos} />
      <PracticeRecordSection records={machine.practiceRecords} />
      <RelatedMachinesSection
        relatedMachines={machine.relatedMachines}
        maker={machine.spec.maker}
        series={machine.spec.series}
      />
    </article>
  );
}
