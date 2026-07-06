import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import AffiliateDisclosure from "@/components/site/AffiliateDisclosure";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

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
      <body>
        <Header />
        <AffiliateDisclosure />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
