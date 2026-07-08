import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import ShareButtons from "@/components/site/ShareButtons";

const title = "朝一リセット狙いで失敗しやすいパターンと注意点";
const url = `${SITE_URL}/guides/yamedoki-chuiten`;

export const metadata: Metadata = {
  title,
  description: "パチスロの朝一リセット狙いでよくある失敗パターンと、やめどきの基本的な考え方をまとめました。",
  alternates: { canonical: url },
};

export default function YamedokiChuitenPage() {
  return (
    <div className="article">
      <h1 className="page-title">{title}</h1>

      <h2>よくある失敗パターン</h2>
      <ul>
        <li>天井が近いという理由だけで座り続ける</li>
        <li>リセットの根拠が薄いのに「昨日勝ったから今日も」と座る</li>
        <li>投資上限を決めずに増資を繰り返す</li>
        <li>SNSの未確認情報（「今日は全台リセット」等）を鵜呑みにする</li>
      </ul>

      <h2>やめどきの基本的な考え方</h2>
      <ul>
        <li>事前に決めた投資上限に達したら終了する</li>
        <li>期待した挙動（短縮天井到達など）が出ない場合は早めに見切る</li>
        <li>「あと少しで当たりそう」という感覚だけで居座らない</li>
      </ul>

      <h2>迷ったときの判断基準</h2>
      <p>
        機種ごとのやめどきの目安は、各<Link href="/machines">機種ページ</Link>の「やめどき」欄にまとめています。
        判断に迷う状態が続くなら、その日は撤退するのが無難です。
      </p>

      <p className="section-note">
        朝一リセットの基本を先に知りたい方は
        <Link href="/beginner">初心者向け解説</Link>
        もあわせてご覧ください。
      </p>

      <ShareButtons url={url} title={title} />
    </div>
  );
}
