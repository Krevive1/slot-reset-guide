import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "運営者情報",
  description: "ワンチャンくんの運営者情報とサイト運営方針です。",
  alternates: { canonical: `${SITE_URL}/operator` },
};

export default function OperatorPage() {
  return (
    <div className="article">
      <h1 className="page-title">運営者情報</h1>

      <h2>運営者</h2>
      <p>ワンチャンくん運営</p>

      <h2>サイトの目的</h2>
      <p>
        当サイトは、パチスロ初心者向けに、朝一リセット・リセット恩恵・判別方法・注意点を整理する情報サイトです。
      </p>

      <h2>掲載情報について</h2>
      <p>
        掲載情報は、公開情報・実践動画・独自考察をもとに整理しています。できる限り確認したうえで掲載していますが、
        内容の正確性や最新性を保証するものではありません。
      </p>

      <h2>遊技に関する注意</h2>
      <p>
        当サイトは、収支・勝利・利益を保証するものではありません。パチスロには金銭的リスクがあるため、
        遊技は余裕資金の範囲内で行い、無理な投資や借入につながる行為は避けてください。
      </p>
    </div>
  );
}
