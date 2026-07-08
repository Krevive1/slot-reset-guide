import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "ワンチャンくんへのお問い合わせ案内です。",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <div className="article">
      <h1 className="page-title">お問い合わせ</h1>

      <p>
        ワンチャンくんへのご連絡は、掲載内容の確認依頼、広告掲載、その他サイト運営に関する内容を対象としています。
      </p>
      <p>
        お問い合わせは運営者確認後、必要に応じて対応します。内容によっては返信や対応をお約束できない場合があります。
      </p>

      <h2>お問い合わせ前のお願い</h2>
      <ul>
        <li>機種情報は公開情報、実践動画、独自考察をもとに整理しています。</li>
        <li>掲載内容に誤りがある場合は、該当ページ名と確認できる情報を添えてご連絡ください。</li>
        <li>遊技結果や収支に関する個別相談には対応できません。</li>
      </ul>

      <h2>今後の対応予定</h2>
      <p>
        現在は問い合わせ案内のみを掲載しています。今後、必要に応じて専用フォームを設置する予定です。
      </p>
    </div>
  );
}
