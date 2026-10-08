import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "朝一リセットとは？初心者向けに「何を見て、どう判断するか」を解説";
const description =
  "パチスロの朝一リセット（設定変更）とは何か、機種によって恩恵がどう違うか、初心者が朝イチに確認する3つのポイントと失敗しやすい考え方を、実際の機種例つきで解説します。";
const url = `${SITE_URL}/beginner`;
const updatedAt = "2026-10-09";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
};

const faq = [
  {
    question: "朝一リセットとは何ですか？",
    answer:
      "ホールが営業前に台の設定を変更、またはリセットすることです。前日の状態（ゲーム数や内部状態）が引き継がれず、機種によっては天井が短縮されるなど、通常と違う挙動になることがあります。",
  },
  {
    question: "朝一リセットなら必ず勝てますか？",
    answer:
      "いいえ。リセット恩恵は機種ごとに異なり、恩恵があっても結果が保証されるわけではありません。ホールがリセットしているとも限らないため、期待値の話と実際の結果は分けて考える必要があります。",
  },
  {
    question: "リセットされているかどうかは、どう見分けますか？",
    answer:
      "電源投入直後にゲーム数表示が低い数値に戻っているか、差枚・持ちメダル表示が引き継がれていないか、設定変更時専用の演出や音が出るか、などで確認します。具体的な判別方法は機種ごとに違うため、各機種ページの判別方法欄で確認してください。",
  },
  {
    question: "リセット恩恵がない機種は朝一に打たないほうがいいですか？",
    answer:
      "恩恵や天井が公開されていない機種は、朝一0Gから狙い打つ根拠が薄いため、据え置き前提で通常の立ち回りをするのが基本です。打つかどうかは、期待値だけでなく、遊技を楽しめるかと資金計画で判断してください。",
  },
  {
    question: "初心者は何から確認すればいいですか？",
    answer:
      "まず、狙いたい機種に設定変更時の恩恵があるかを機種ページで確認します。次に、そのホールがリセットする傾向があるかを調べ、最後に投資上限を決めてから座ります。",
  },
];

export default function BeginnerPage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);
  const faqJsonLd = buildFaqJsonLd(faq);

  return (
    <div className="article">
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      {faqJsonLd && <JsonLd data={faqJsonLd} />}
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "朝一リセットとは？初心者向け解説", href: "/beginner" }]} />

      <h1 className="page-title">{title}</h1>
      <p className="updated-at">更新日：{updatedAt}</p>

      <p>
        「朝イチは狙い目」と聞くけれど、何をどう見ればいいのか分からない。このページは、そんな初心者の方に向けて、
        朝一リセットの基本と、座る前に確認したい3つのポイントを整理した入口ページです。
        ここを読んだあとは、気になる機種のページへ進めば、具体的な恩恵や判別方法を確認できます。
      </p>

      <h2>朝一リセットとは？</h2>
      <p>
        朝一リセットとは、ホールが営業前に台の設定変更やリセットを行うことです。
        前日の状態は引き継がれず、新しい状態から始まります。
        この「リセット後の状態」が通常と異なる機種では、朝イチの1ゲーム目から立ち回りの前提が変わります。
      </p>

      <h2>なぜ朝イチが注目されるのか</h2>
      <p>
        一部の機種は、設定変更後に天井が短縮されたり、内部状態の引き継ぎ方が変わったりするとされています。
        その分、通常時より少ないゲーム数から狙える可能性があるため、朝イチの立ち回りが話題になります。
        ただし、どの機種でも同じ恩恵があるわけではありません。
      </p>

      <h2>機種によって恩恵はこれだけ違う</h2>
      <p>
        同じ「朝イチ」でも、機種ごとにリセット時の扱いは大きく異なります。当サイトで扱っている機種から、違いが分かりやすい例を挙げます。
      </p>
      <div className="article-table-wrap">
        <table>
          <thead>
            <tr>
              <th>機種</th>
              <th>設定変更時の扱い（掲載情報）</th>
              <th>初心者向けの見方</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link href="/machines/monkey-turn-v">スマスロ モンキーターンV</Link>
              </td>
              <td>AT間天井が795G+αから495G+α、周期天井も6周期から4周期へ短縮されるとされる</td>
              <td>朝一リセット狙いの代表例。リセット有無の確認が重要</td>
            </tr>
            <tr>
              <td>
                <Link href="/machines/juoh">スマスロ 獣王</Link>
              </td>
              <td>設定変更時は天井が999G+αから599G+αへ短縮され、サバ連に入るまで継続するとされる</td>
              <td>短縮がいつまで続くかまで確認する</td>
            </tr>
            <tr>
              <td>
                <Link href="/machines/mieruko-chan">パチスロ 見える子ちゃん</Link>
              </td>
              <td>現時点でリセット恩恵・天井ゲーム数は未公開</td>
              <td>朝一0Gからの狙い打ちは推奨せず、据え置き前提で考える</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="section-note">
        上表は各機種ページに掲載している情報の要約で、攻略サイト等の公開情報に基づきます。数値は更新されることがあるため、実戦前は必ず各機種ページの最新内容と更新日を確認してください。
      </p>

      <h2>座る前に確認したい3つのポイント</h2>
      <ol>
        <li>
          <strong>① その機種に設定変更時の恩恵があるか。</strong>
          まず機種ページで、天井短縮や内部状態の変化など、リセット時に何が変わるかを確認します。恩恵が未公開の機種は、朝一を理由に追わないのが基本です。
        </li>
        <li>
          <strong>② 今日、その台は本当にリセットされていそうか。</strong>
          ゲーム数表示や差枚・持ちメダル表示、設定変更時の専用演出などで確認します。判別方法は機種ごとに違うため、機種ページの「判別方法」欄を使います。
        </li>
        <li>
          <strong>③ そのホールはリセットする傾向があるか。</strong>
          同じ機種でも、ホールによって設定変更や全台リセットの運用は異なります。調べ方は
          <Link href="/guides/how-to-check-hall-reset-pattern">その店はリセットしている？ホールの傾向を調べる5つの方法</Link>
          で整理しています。
        </li>
      </ol>

      <h2>ただし、必ず有利ではない</h2>
      <p>
        リセット恩恵があっても、出玉や結果が保証されるわけではありません。
        ホールが必ずリセットしているとも限らず、リセット後の状態が当たりやすいとは限りません。
        「朝イチなら結果が安定する」という考え方は危険です。恩恵は、あくまで期待値の目安の一つとして捉えてください。
      </p>

      <h2>初心者がやりがちな失敗</h2>
      <ul>
        <li>リセット恩恵の有無を確認せず、「朝イチだから」という理由だけで座る</li>
        <li>SNSの投稿や噂だけで判断し、公開情報や根拠を見ない</li>
        <li>天井までのゲーム数だけを見て、投資上限を決めずに追い続ける</li>
        <li>「次で当たるはず」と考え、やめどきを逃す</li>
        <li>確信が持てない状態で投資を増やす</li>
      </ul>
      <p>
        やめどきの考え方は<Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link>、
        用語が分からない場合は<Link href="/guides/yougo-shu">パチスロ用語集</Link>で確認できます。
      </p>

      <h2>次に読むページ</h2>
      <ul>
        <li>
          <Link href="/guides/mikiwake-kata">朝一リセットの見分け方（基本の考え方）</Link>：電源投入直後に何を比べるか
        </li>
        <li>
          <Link href="/guides/how-to-check-hall-reset-pattern">その店はリセットしている？ホールの傾向を調べる5つの方法</Link>
        </li>
        <li>
          <Link href="/machines">機種一覧</Link>：気になる機種の恩恵・判別方法・やめどきを確認
        </li>
        <li>
          <Link href="/articles/petit-news">プチニュース</Link>：SNSで話題の仕様や検証を、確認できていること・できていないことに分けて整理
        </li>
        <li>
          <Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link>
        </li>
      </ul>

      <h2>よくある質問（FAQ）</h2>
      <dl>
        {faq.map((item) => (
          <div key={item.question}>
            <dt>
              <strong>{item.question}</strong>
            </dt>
            <dd>{item.answer}</dd>
          </div>
        ))}
      </dl>

      <h2>このサイトの考え方</h2>
      <p>
        このサイトは、射幸心をあおる表現を避け、初心者が仕組みを理解して無理な遊技を避けるための情報を整理します。
        掲載している数値や仕様は、メーカー公式・攻略サイト・実戦報告など公開情報をもとにしており、結果を保証するものではありません。
        遊技は無理のない範囲で、資金と時間の上限を決めて楽しんでください。
      </p>

      <ShareButtons url={url} title={title} />
      <LineCta />
    </div>
  );
}
