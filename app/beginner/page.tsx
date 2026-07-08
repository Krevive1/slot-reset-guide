import type { Metadata } from "next";
import Link from "next/link";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import { SITE_URL } from "@/lib/site";

const title = "朝一リセットとは？初心者向け解説";
const url = `${SITE_URL}/beginner`;

export const metadata: Metadata = {
  title,
  description: "パチスロ初心者向けに、朝一リセットの意味、リセット恩恵、注意点をわかりやすく解説します。",
  alternates: { canonical: url },
};

export default function BeginnerPage() {
  return (
    <div className="article">
      <h1 className="page-title">{title}</h1>

      <h2>朝一リセットとは？</h2>
      <p>
        朝一リセットとは、ホールが営業前に台の設定変更やリセットを行うこと。
        前日の状態は引き継がれず、新しい状態から始まります。
      </p>

      <h2>なぜ注目されるのか</h2>
      <p>
        一部の機種は、リセット後に天井が短くなったり初当たりが軽くなったりします。
        だからこそ朝一の立ち回りが注目されるのです。
      </p>

      <h2>ただし、必ず有利ではない</h2>
      <p>
        リセットの挙動は機種によって異なります。
        ホールが必ずリセットしているとも限りません。
        「朝一なら結果が安定する」という考え方は危険です。
      </p>

      <h2>初心者が注意すべきこと</h2>
      <ul>
        <li>機種ごとのリセット恩恵を確認する</li>
        <li>投資上限を決めておく</li>
        <li>根拠のない台を追い続けない</li>
        <li>SNSや噂だけで判断しない</li>
      </ul>

      <h2>このサイトの考え方</h2>
      <p>
        このサイトは、射幸心をあおる表現を避け、
        初心者が仕組みを理解して無理な遊技を避けるための情報を整理します。
      </p>

      <h2>関連ガイド</h2>
      <ul>
        <li><Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link></li>
        <li><Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link></li>
        <li><Link href="/machines">機種一覧から個別の恩恵・判別方法を見る</Link></li>
      </ul>

      <ShareButtons url={url} title={title} />
      <LineCta />
    </div>
  );
}
