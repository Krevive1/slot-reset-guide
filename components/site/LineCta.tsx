import Link from "next/link";
import { LINE_OFFICIAL_URL } from "@/lib/site";
import LineFollowLink from "./LineFollowLink";

export default function LineCta() {
  return (
    <aside className="line-cta" aria-label="初心者向けチェックリスト">
      <div>
        <h2>朝一で何を見ればいいか迷う人へ</h2>
        <p>初心者向けチェックリストを用意しました</p>
      </div>
      <div className="line-cta-actions">
        <Link href="/line/checklist" className="button">
          無料チェックリストを見る
        </Link>
        <LineFollowLink href={LINE_OFFICIAL_URL} className="button button-secondary" ctaLabel="line_cta_home">
          LINEで更新情報を受け取る
        </LineFollowLink>
      </div>
    </aside>
  );
}
