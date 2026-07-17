import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllMachineSlugs, getPublishedMachines, getMachine, getRandomMachines } from "@/lib/content/machines";
import { buildArticleJsonLd, buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import AdSlot from "@/components/ads/AdSlot";
import MachineThumbnail from "@/components/machine/MachineThumbnail";
import NewBadge from "@/components/machine/NewBadge";
import HotBadge from "@/components/machine/HotBadge";
import QuickFacts from "@/components/machine/QuickFacts";
import ComingSoonBadge from "@/components/machine/ComingSoonBadge";
import ComingSoonNotice from "@/components/machine/ComingSoonNotice";
import ComingSoonMeta from "@/components/machine/ComingSoonMeta";
import UpdateHistorySection from "@/components/machine/UpdateHistorySection";
import MachineSpec from "@/components/machine/MachineSpec";
import ResetInfo from "@/components/machine/ResetInfo";
import DetectionMethod from "@/components/machine/DetectionMethod";
import MorningTarget from "@/components/machine/MorningTarget";
import CeilingZoneInfo from "@/components/machine/CeilingZoneInfo";
import QuitTiming from "@/components/machine/QuitTiming";
import MachineFaq from "@/components/machine/MachineFaq";
import RelatedReading from "@/components/machine/RelatedReading";
import ReferenceVideoSection from "@/components/machine/ReferenceVideoSection";
import PracticeRecordSection from "@/components/machine/PracticeRecordSection";
import RelatedMachinesSection from "@/components/machine/RelatedMachinesSection";
import ReferenceSources from "@/components/machine/ReferenceSources";
import Comments from "@/components/machine/Comments";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";

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

  const isComingSoon = machine.status === "coming-soon";
  const title = isComingSoon
    ? `${machine.name} 朝一・リセット恩恵【導入前暫定】`
    : `${machine.name} リセット恩恵・朝イチ狙い目`;
  const description = isComingSoon
    ? `${machine.name}は${machine.spec.releaseDate ?? "導入予定"}導入予定の機種です。導入前情報をもとにしたリセット恩恵の暫定情報をまとめています。解析情報は導入後に更新予定で、0Gからの金額期待値は確認できていません。`
    : `${machine.name}のリセット恩恵・判別方法・朝イチの狙い目を解説。${machine.spec.overview}`;
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

  const publishedMachines = await getPublishedMachines();
  const randomMachines = getRandomMachines(publishedMachines, machine.slug, 5);

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
        {machine.status === "coming-soon" ? (
          <ComingSoonBadge />
        ) : (
          <>
            <NewBadge releaseDate={machine.spec.releaseDate} />
            <HotBadge hot={machine.hot} />
          </>
        )}
      </h1>
      <p className="updated-at">更新日：{machine.updatedAt.slice(0, 10)}</p>
      {machine.status === "coming-soon" && (
        <>
          <ComingSoonNotice />
          <ComingSoonMeta comingSoon={machine.comingSoon} />
        </>
      )}
      <QuickFacts quickFacts={machine.quickFacts} />
      <MachineThumbnail heroImage={machine.heroImage} name={machine.name} />

      <MachineSpec spec={machine.spec} />
      <ResetInfo resetInfo={machine.resetInfo} />
      <DetectionMethod detectionMethod={machine.detectionMethod} />
      <MorningTarget morningTarget={machine.morningTarget} />
      <CeilingZoneInfo ceilingZoneInfo={machine.ceilingZoneInfo} />
      <QuitTiming quitTiming={machine.quitTiming} />
      <MachineFaq faq={machine.faq} />
      {machine.status === "coming-soon" && <UpdateHistorySection updateHistory={machine.comingSoon} />}
      <RelatedReading slug={machine.slug} />
      <AdSlot slot="in-article" />
      <ReferenceVideoSection videos={machine.referenceVideos} />
      <PracticeRecordSection records={machine.practiceRecords} />
      <Comments slug={machine.slug} title={machine.name} />
      <ShareButtons url={url} title={machine.name} />
      <RelatedMachinesSection randomMachines={randomMachines} />
      <LineCta />
      <ReferenceSources />
    </article>
  );
}
