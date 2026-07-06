import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        {/* Not an <h1> — each page provides its own page-specific h1
            (machine name, page title, etc). Only one h1 per page. */}
        <p className="site-title">あさイチワンちゃんくん🐶</p>
        <p>朝イチの一手に迷ったら、ワンちゃんと一緒に。</p>
        <nav aria-label="メインメニュー">
          <Link href="/">トップ</Link>
          <Link href="/machines">機種一覧</Link>
          <Link href="/beginner">初心者向け解説</Link>
          <Link href="/disclaimer">免責事項</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
      </div>
    </header>
  );
}
