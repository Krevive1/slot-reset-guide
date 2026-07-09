import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "広告・アフィリエイトポリシー",
  description: "ワンチャンくんの広告掲載とアフィリエイトに関する方針です。",
  alternates: { canonical: `${SITE_URL}/advertising-policy` },
};

export default function AdvertisingPolicyPage() {
  return (
    <div className="article">
      <h1 className="page-title">広告・アフィリエイトポリシー</h1>

      <h2>広告掲載について</h2>
      <p>
        当サイトは、Amazon.co.jpを宣伝しリンクすることによって収入を得ることができる手段を提供することを目的に設定された、
        アフィリエイトプログラムであるAmazonアソシエイト・プログラムの参加者です。
      </p>
      <p>
        また、A8.net等のアフィリエイトサービスや、将来的にGoogle AdSense等の広告サービスを掲載する可能性があります。
      </p>
      <p>
        広告リンク経由で商品やサービスの申込み・購入が行われた場合、当サイトが成果報酬を受け取る場合があります。
      </p>

      <h2>本文の中立性について</h2>
      <p>
        広告掲載の有無に関わらず、本文は中立性を意識して作成します。掲載情報は、読者が内容を確認しやすいように、
        公開情報や実践動画、独自考察をもとに整理します。
      </p>

      <h2>掲載しない広告</h2>
      <p>
        当サイトでは、オンラインカジノ、海外スロット、登録ボーナス系広告は掲載しない方針です。
        パチスロに関する情報を扱う場合も、射幸心を過度にあおる表現は避けます。
      </p>

      <h2>クリック誘導について</h2>
      <p>
        当サイトでは、「クリックお願いします」「応援クリック」など、広告クリックを直接促す表現は行いません。
      </p>
    </div>
  );
}
