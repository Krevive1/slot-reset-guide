import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        {/* The banner image carries the brand name/description/tagline
            visually — its alt text is the accessible equivalent, so no
            separate <h1>/<p> duplicating that text belongs here. Each
            page still provides its own page-specific h1. */}
        <Link href="/">
          <Image
            src="/images/hero-banner.png"
            alt="ワンチャンくん｜あさイチリセット情報ガイド｜あさイチを制する者は、スロットを制する"
            width={1916}
            height={821}
            className="hero-banner"
            priority
          />
        </Link>
        <nav aria-label="メインメニュー">
          <Link href="/">トップ</Link>
          <Link href="/machines">機種一覧</Link>
          <Link href="/beginner">初心者向け解説</Link>
          <Link href="/disclaimer">免責事項</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
        <form action="/search" method="get" className="search-form" role="search">
          <label htmlFor="search-q" className="sr-only">
            機種名で検索
          </label>
          <input
            id="search-q"
            type="search"
            name="q"
            placeholder="機種名で検索（例：北斗の拳）"
            autoComplete="off"
          />
          <button type="submit">検索</button>
        </form>
      </div>
    </header>
  );
}
