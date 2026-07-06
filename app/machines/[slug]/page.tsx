import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMachineSlugs, getMachine } from "@/lib/content/machines";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import AdSlot from "@/components/ads/AdSlot";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import NewBadge from "@/components/machine/NewBadge";
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

  const title = `${machine.name} リセット恩恵・朝イチ狙い目`;
  const description = `${machine.name}のリセット恩恵・判別方法・朝イチの狙い目を解説。${machine.spec.overview}`;
  const url = `${SITE_URL}/machines/${machine.slug}`;
  const images = machine.heroImage ? [{ url: machine.heroImage }] : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
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
  const machinesUrl = `${SITE_URL}/machines`;
  const articleJsonLd = buildArticleJsonLd(machine, url);
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: "機種一覧", url: machinesUrl },
    { name: machine.name, url },
  ]);
  const faqJsonLd = buildFaqJsonLd(machine.faq);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}

      <Breadcrumbs
        items={[
          { name: "トップ", href: "/" },
          { name: "機種一覧", href: "/machines" },
          { name: machine.name, href: `/machines/${machine.slug}` },
        ]}
      />
      <h1>
        {machine.name}
        <NewBadge releaseDate={machine.spec.releaseDate} />
      </h1>
      <p className="updated-at">更新日：{machine.updatedAt.slice(0, 10)}</p>
      <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />

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
