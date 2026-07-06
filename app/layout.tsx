import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "あさイチワンちゃんくん",
    template: "%s｜あさイチワンちゃんくん",
  },
  description: "パチスロの朝イチリセット恩恵・判別方法・実践データを機種別に整理する情報サイトです。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
