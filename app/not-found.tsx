import Link from "next/link";

export default function NotFound() {
  return (
    <div className="article">
      <h1 className="page-title">ページが見つかりません</h1>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <p><Link href="/">トップページへ戻る</Link></p>
    </div>
  );
}
