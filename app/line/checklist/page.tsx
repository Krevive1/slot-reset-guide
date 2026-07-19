import Link from "next/link";
import type { Metadata } from "next";
import { LINE_OFFICIAL_URL, SITE_URL } from "@/lib/site";
import LineFollowLink from "@/components/site/LineFollowLink";

export const metadata: Metadata = {
  title: "朝一リセット狙い 初心者チェックリスト",
  description: "朝一で確認したいポイントを初心者向けに整理したチェックリストです。",
  alternates: { canonical: `${SITE_URL}/line/checklist` },
};

export default function LineChecklistPage() {
  return (
    <div className="article">
      <h1 className="page-title">朝一リセット狙い 初心者チェックリスト</h1>

      <h2>はじめに</h2>
      <p>
        このページは、朝一で何を確認すればよいかを整理するためのチェックリストです。
        遊技結果や収支を保証するものではありません。無理な投資を避けるための参考情報として利用してください。
      </p>

      <h2>1. 朝一で最初に見るポイント</h2>
      <ul>
        <li>前日最終ゲーム数</li>
        <li>当日ゲーム数</li>
        <li>液晶表示やステージ</li>
        <li>有利区間ランプやメニュー表示など、機種ごとの確認ポイント</li>
        <li>ホールの傾向を決めつけないこと</li>
      </ul>

      <h2>2. リセットと据え置きの違い</h2>
      <ul>
        <li>リセットは前日の状態が変更される可能性がある</li>
        <li>据え置きは前日の状態を引き継ぐ可能性がある</li>
        <li>見た目だけで断定できない機種も多い</li>
      </ul>

      <h2>3. リセット恩恵がある台の見方</h2>
      <ul>
        <li>天井短縮</li>
        <li>モード優遇</li>
        <li>高確スタート</li>
        <li>初回当たり優遇</li>
        <li>機種ごとに内容が異なるため、個別ページで確認する</li>
      </ul>

      <h2>4. 初心者が避けるべき危険パターン</h2>
      <ul>
        <li>「朝一だから何でも良い」と考える</li>
        <li>根拠なく深追いする</li>
        <li>SNSや噂だけで判断する</li>
        <li>投資上限を決めずに打つ</li>
        <li>リセット恩恵が弱い機種を無理に追う</li>
      </ul>

      <h2>5. 無理な投資を防ぐためのルール</h2>
      <ul>
        <li>事前に上限金額を決める</li>
        <li>根拠が薄い台は触らない</li>
        <li>やめどきを先に決める</li>
        <li>負けを取り返そうとしない</li>
        <li>生活費や借入で遊技しない</li>
      </ul>

      <h2>最後に</h2>
      <p>
        詳細は各機種ページでも確認できます。機種ごとのリセット恩恵や判別方法は、
        <Link href="/machines">機種一覧</Link>から確認してください。
      </p>
      <p>
        LINE公式では、更新情報や初心者向けチェック情報を案内予定です。
        <Link href="/line">LINE公式アカウント案内</Link>もあわせてご確認ください。
      </p>
      <div className="line-actions">
        <LineFollowLink href={LINE_OFFICIAL_URL} className="button button-secondary" ctaLabel="line_checklist_page">
          LINEで更新情報を受け取る
        </LineFollowLink>
      </div>
    </div>
  );
}
