import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="footer-nav" aria-label="フッターメニュー">
          <Link href="/operator">運営者情報</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/advertising-policy">広告・アフィリエイトポリシー</Link>
          <Link href="/line">LINE公式アカウント</Link>
          <Link href="/disclaimer">免責事項</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
        <small>&copy; 2026 ワンチャンくん🐶</small>
      </div>
    </footer>
  );
}
