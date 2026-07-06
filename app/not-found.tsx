import Link from "next/link";

export default function NotFound() {
  return (
    <div className="article">
      <h2>ページが見つかりません</h2>
      <p>お探しのページは存在しないか、移動した可能性があります。</p>
      <p><Link href="/">トップページへ戻る</Link></p>
    </div>
  );
}
