import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "あさイチワンちゃんくんのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="article">
      <h2>個人情報について</h2>
      <p>
        当サイトでは、お問い合わせ等で取得した個人情報を、
        必要な範囲を超えて利用することはありません。
      </p>

      <h2>アクセス解析について</h2>
      <p>
        当サイトでは、サイト改善のためにアクセス解析ツールを利用する場合があります。
        取得される情報は匿名の統計情報であり、個人を特定するものではありません。
      </p>

      <h2>広告について</h2>
      <p>
        当サイトでは、今後広告配信サービスを利用する場合があります。
        広告配信にCookieが使用されることがあります。
      </p>

      <h2>ポリシーの変更</h2>
      <p>
        本ポリシーは、必要に応じて内容を変更する場合があります。
      </p>
    </div>
  );
}
