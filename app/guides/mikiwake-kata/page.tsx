import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import ShareButtons from "@/components/site/ShareButtons";

const title = "朝一リセットの見分け方（基本の考え方）";
const url = `${SITE_URL}/guides/mikiwake-kata`;

export const metadata: Metadata = {
  title,
  description: "パチスロの朝一リセットを見分けるための基本的な考え方を解説します。機種ごとの判別方法を読む前に押さえておきたいポイントをまとめました。",
  alternates: { canonical: url },
};

export default function MikiwakeKataPage() {
  return (
    <div className="article">
      <h1 className="page-title">{title}</h1>

      <h2>何を比較すればいいのか</h2>
      <ul>
        <li>ゲーム数表示：電源投入直後に低い数値へ戻っていれば、設定変更・リセットの可能性がある</li>
        <li>差枚表示・持ちメダル表示：前日の記憶が引き継がれているかどうか</li>
        <li>設定変更時専用の演出・音：一部機種は設定変更時に専用の導入画面や音が出る</li>
      </ul>

      <h2>機種ごとに確認すべき項目が違う理由</h2>
      <p>
        リセット時の挙動はメーカー・機種によって異なります。
        一般論だけで全ての機種を判別することはできません。
        具体的な確認ポイントは、各<Link href="/machines">機種ページ</Link>の「判別方法」欄にまとめています。
      </p>

      <h2>見分け方だけに頼らない</h2>
      <p>
        リセットの有無だけで期待値が決まるわけではありません。
        ホールの営業方針（全台リセットか、設定変更のみか）も影響します。
        確信が持てない状態で投資を増やすのは避けてください。
        店舗ごとの傾向を調べる方法は
        <Link href="/guides/how-to-check-hall-reset-pattern">こちらの記事</Link>
        でまとめています。
      </p>

      <p className="section-note">
        朝一リセットの基本を先に知りたい方は
        <Link href="/beginner">初心者向け解説</Link>
        もあわせてご覧ください。
      </p>

      <ShareButtons url={url} title={title} />
    </div>
  );
}
