import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <h1>あさイチワンちゃんくん🐶</h1>
        <p>朝イチリセットの仕組みを理解するための情報サイトです。</p>
        <nav aria-label="メインメニュー">
          <Link href="/">トップ</Link>
          <Link href="/beginner">初心者向け解説</Link>
          <Link href="/disclaimer">免責事項</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
      </div>
    </header>
  );
}
