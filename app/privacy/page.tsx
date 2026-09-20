import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "ワンチャンくんのプライバシーポリシーです。",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="article">
      <h1 className="page-title">プライバシーポリシー</h1>

      <h2>個人情報について</h2>
      <p>
        当サイトでは、お問い合わせ等で取得した個人情報を、
        必要な範囲を超えて利用することはありません。
      </p>

      <h2>アクセス解析について</h2>
      <p>
        当サイトでは、Google アナリティクスを利用してアクセス状況を解析しています。
        Google アナリティクスは、Cookie を利用してユーザーの情報を収集しますが、
        匿名の統計情報であり、個人を特定するものではありません。
        この機能は Cookie を無効にすることで収集を拒否することが可能ですので、
        お使いのブラウザの設定をご確認ください。
        この規約に関して、詳しくは
        <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer">
          Google アナリティクス利用規約
        </a>
        のページをご覧ください。
      </p>

      <h2>広告について</h2>
      <p>
        当サイトは、第三者配信の広告サービス（Google アドセンス）を利用しています。
        このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、
        当サイトや他サイトへのアクセスに関する情報「Cookie」（氏名、住所、メールアドレス、
        電話番号は含まれません）を使用することがあります。
        Google 広告に関するこのプロセスの詳細や、このような情報が広告配信事業者に
        使用されないようにする方法については、
        <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer">
          Google の広告ポリシー
        </a>
        をご確認ください。
      </p>

      <h2>ポリシーの変更</h2>
      <p>
        本ポリシーは、必要に応じて内容を変更する場合があります。
      </p>
    </div>
  );
}
