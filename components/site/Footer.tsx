import Link from "next/link";
import { X_OFFICIAL_URL } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <nav className="footer-nav" aria-label="フッターメニュー">
          <Link href="/operator">運営者情報</Link>
          <Link href="/contact">お問い合わせ</Link>
          <Link href="/advertising-policy">広告・アフィリエイトポリシー</Link>
          <Link href="/line">LINE公式アカウント</Link>
          <a href={X_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
            X（旧Twitter）
          </a>
          <Link href="/disclaimer">免責事項</Link>
          <Link href="/privacy">プライバシーポリシー</Link>
        </nav>
        <small>&copy; 2026 ワンチャンくん🐶</small>
      </div>
    </footer>
  );
}
