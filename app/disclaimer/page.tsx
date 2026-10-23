import Link from "next/link";
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

      <h2>情報の更新について</h2>
      <p>
        機種の仕様や解析値は、メーカーの発表や解析の更新で変わる場合があります。
        最新の情報は、メーカー公式サイトもあわせてご確認ください。情報の確認と書き分けの方針は、
        <Link href="/editorial-policy">情報確認・記事作成ポリシー</Link>
        をご覧ください。
      </p>

      <h2>著作権・商標について</h2>
      <p>
        当サイトに掲載している商品名・機種名・作品名・商標等の権利は、各権利者に帰属します。
      </p>
      <p>
        掲載内容や画像等について権利上の問題がある場合は、
        <Link href="/contact">お問い合わせページ</Link>
        よりご連絡ください。内容を確認のうえ、必要に応じて修正・削除等の対応を行います。
      </p>

      <h2>外部サイトへのリンクについて</h2>
      <p>
        当サイトからリンクしている外部サイトの内容や安全性について、当サイトは責任を負いません。
      </p>
    </div>
  );
}
