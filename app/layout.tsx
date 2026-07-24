import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import AffiliateDisclosure from "@/components/site/AffiliateDisclosure";
import { ADSENSE_CLIENT_ID, GA_MEASUREMENT_ID, SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

// Production-only, and only when a measurement ID is actually configured.
const shouldLoadGoogleAnalytics = process.env.VERCEL_ENV === "production" && Boolean(GA_MEASUREMENT_ID);

// Site verification snippet for the pending AdSense review (submitted
// 2026-07-24). Loads site-wide so Google's crawler can find it on any page.
const shouldLoadAdsense = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ワンチャンくん",
    template: "%s｜ワンチャンくん",
  },
  description: "パチスロの朝イチリセット恩恵・判別方法・実践データを機種別に整理する情報サイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {shouldLoadAdsense && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body>
        <Header />
        <AffiliateDisclosure />
        <main className="container">{children}</main>
        <Footer />
      </body>
      {shouldLoadGoogleAnalytics && <GoogleAnalytics gaId={GA_MEASUREMENT_ID as string} />}
    </html>
  );
}
