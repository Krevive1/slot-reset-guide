import Link from "next/link";
import type { Metadata } from "next";
import { LINE_OFFICIAL_URL, SITE_URL } from "@/lib/site";
import LineFollowLink from "@/components/site/LineFollowLink";

export const metadata: Metadata = {
  title: "LINE公式アカウント案内",
  description: "ワンチャンくんのLINE公式アカウント案内ページです。",
  alternates: { canonical: `${SITE_URL}/line` },
};

export default function LinePage() {
  return (
    <div className="article">
      <h1 className="page-title">LINE公式アカウント案内</h1>

      <p>
        ワンチャンくんでは、朝一リセットの確認ポイントや、初心者向けの更新情報を受け取れるLINE公式アカウントを案内しています。
        まずは無料特典として、朝一で確認したい項目をまとめたチェックリストを公開しています。
      </p>

      <div className="line-actions">
        <Link href="/line/checklist" className="button">
          チェックリストを見る
        </Link>
        <LineFollowLink href={LINE_OFFICIAL_URL} className="button button-secondary" ctaLabel="line_page_main">
          LINEで更新情報を受け取る
        </LineFollowLink>
      </div>

      <h2>無料配布予定</h2>
      <p>朝一リセット狙い 初心者チェックリスト</p>
      <ul>
        <li>朝一で見るべきポイント</li>
        <li>据え置きとリセットの違い</li>
        <li>狙ってはいけない危険パターン</li>
        <li>機種ページの見方</li>
        <li>無理な投資を避けるための注意点</li>
      </ul>

      <h2>運営方針</h2>
      <p>
        配信内容は、初心者が情報を確認しやすくするための補助を目的とします。
        過度な投資を促す内容や、遊技結果を保証する表現は扱いません。
      </p>
    </div>
  );
}
