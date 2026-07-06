import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "免責事項",
  description: "ワンチャンくんの免責事項です。",
  alternates: { canonical: `${SITE_URL}/disclaimer` },
};

export default function DisclaimerPage() {
  return (
    <div className="article">
      <h1 className="page-title">免責事項</h1>

      <h2>情報の正確性について</h2>
      <p>
        当サイトでは、できる限り正確な情報を掲載するよう努めていますが、
        内容の正確性や最新性を保証するものではありません。
      </p>

      <h2>遊技結果について</h2>
      <p>
        当サイトの情報を参考にしたことによる損失やトラブルについて、
        当サイトは一切の責任を負いません。
      </p>

      <h2>ギャンブルへの注意</h2>
      <p>
        パチスロには金銭的リスクがあります。
        遊技は余裕資金の範囲内で行い、過度な投資や依存につながる行為は避けてください。
      </p>
    </div>
  );
}
