import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import Comments from "@/components/machine/Comments";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "スマスロ東京喰種 実践記録｜トロフィーを確認せず5万円使い切った7月7日";
const description =
  "2026年7月7日、大型イベントでスマスロ東京喰種に着席。左隣の設定6確定演出とトロフィー出現がありながら、色を確認しないまま消化してしまい、お小遣い5万円を使い切った実践記録です。反省点を正直にまとめています。";
const url = `${SITE_URL}/articles/tokyo-ghoul-trophy-misugoshi`;
const heroImage = "/images/articles/tokyo-ghoul-trophy-misugoshi.jpg";
const publishedAt = "2026-07-19";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
    images: [{ url: heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

export default function TokyoGhoulTrophyMisugoshiArticlePage() {
  const articleJsonLd = buildGenericArticleJsonLd({ headline: title, description, url });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: title, url },
  ]);

  return (
    <article>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/tokyo-ghoul-trophy-misugoshi" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image src={heroImage} alt="東京喰種の台に噛みつくワンチャンくん" fill sizes="(max-width: 720px) 100vw, 720px" style={{ objectFit: "cover" }} />
        </div>

        <h2>抽選70番、朝一から並んだ7月7日</h2>
        <p>
          2026年7月7日、大型イベントの開催日でした。朝一から並び、抽選の結果は70番。お世辞にも早い数字ではありません。
          「東京喰種はもう無理かもしれない」と半分あきらめながら入店しましたが、ギリギリのタイミングでスマスロ東京喰種に着席できました。
        </p>
        <p>このときはまだ、この日のうちにお小遣い5万円をすべて使い切ることになるとは、想像もしていませんでした。</p>

        <h2>左隣で設定6確定、そして自分の台にもトロフィー</h2>
        <p>
          しばらく経った14時ごろ、左隣の台で設定6確定演出が出ました。「隣が高設定なら、自分の台にも期待できるのでは」と、その場では単純に喜んでしまいました。
        </p>
        <p>
          実際には、隣の台の設定と自分の台の設定には、何の関係もありません。頭では分かっているはずなのに、その場の雰囲気に流されて、都合よく期待値を上乗せしてしまう。今振り返ると、これが最初の判断ミスだったように思います。
        </p>
        <p>
          ちょうどそのタイミングで、自分の台にもトロフィーが出現しました。「隣が設定6、自分にもトロフィー」という並びに、当時の私はすっかり浮かれていました。
        </p>

        <h2>最大の失敗：トロフィーの色を確認しなかった</h2>
        <p>そして今回、最大の失敗がここで起こります。</p>
        <p>トロフィーが出現した瞬間、私は写真を撮りませんでした。色も、きちんと確認しませんでした。</p>
        <p>
          「確認できなかった」のではありません。確認する時間は、間違いなくありました。それなのに、なぜかクールにチャチャっと消化してしまったのです。
          台を止めて画面を見返すことも、スクリーンショットを撮ることも、この日の私はしませんでした。なぜなら、私の目は間違いなく赫眼（かくがん）状態になっていたのです。
        </p>
        <p>
          後から思い出そうとしても、グール柄だったのか、金トロフィーだったのか、銅トロフィーだったのか、まったく分かりません。今この記事を書いている時点でも、答えは出ていません。
          赫眼男として、自身が喰種になっていた事実だけが残りました。
        </p>

        <h2>分からないから、やめられなくなった</h2>
        <p>トロフィーの色が分からない。これは地味に見えて、実はかなり厄介な状態です。</p>
        <p>
          「高設定だった」という確定情報はどこにもありません。あるのは「もしかしたら高設定だったかもしれない」という、ただの可能性だけ。それなのに私は、この可能性のほうを都合よく育てていきました。
          高設定を追ったのではありません。高設定だったかもしれないという幻を、追いかけてしまったのです。
        </p>
        <p>
          左隣の設定6確定と、色の分からないトロフィー。材料はたったそれだけなのに、私はいつの間にか、判断の軸をすっかり失っていました。
        </p>

        <h2>お小遣い5万円が、東京喰種に喰われた</h2>
        <p>結果として、ボーナスでもらった自分用のお小遣い5万円を、私はすべて使い切りました。</p>
        <p>
          生活費でも借金でもありません。あくまで、自分の裁量で使えるお小遣いの範囲での話です。ただ、5万円が丸ごと東京喰種に喰われていった感覚は、なかなかのものでした。お小遣いの最終ゲームは、思っていたより静かに終わりました。
        </p>

        <h2>最後は東京上空で</h2>
        <p>資金が底をついた瞬間、台はCZ間天井300Gを目指している途中でした。状態表示は「東京上空」。</p>
        <p>
          続けたい気持ちはありましたが、財布の方が先に天井へ到達してしまった以上、続けるという選択肢はありませんでした。私は台を東京上空に残したまま、自分だけ静かに地上へ帰還しました。あの台がその後どうなったのか、それを知る術は私にはありません。
        </p>

        <h2>7月7日以降の近況</h2>
        <p>7月7日以降、私は一度も遊技へ行けていません。理由は単純で、次のお小遣いがまだ導入されていないからです。</p>
        <p>
          今は家で、次のお小遣い導入日をComing Soon状態で待ちながら、奥歯をバイツする日々を送っています。自分自身が解析待ちになるとは思っていませんでした。
        </p>

        <h2>今回の反省</h2>
        <p>今回の一件で、いくつかの反省点が見えてきました。</p>
        <ul>
          <li>トロフィーや重要な示唆は、必ず写真を撮る</li>
          <li>出現した示唆は、その場で確認する（あとで確認しよう、は大体できない）</li>
          <li>隣の台の高設定と、自分の台の設定は別物と考える</li>
          <li>遊技を始める前に、投資上限を決めておく</li>
          <li>不明な示唆を、自分に都合よく高設定寄りに解釈しない</li>
          <li>天井まで追いきれない資金状況になる前に、撤退を判断する</li>
        </ul>
        <p className="section-note">・この世のすべての不利益は当人の能力不足</p>
        <p>次から絶対に勝てる、とは思っていません。ただ、同じ理由で同じ後悔をしないようにだけは、していきたいと思います。</p>

        <h2>読者のみなさんへ</h2>
        <p>最後に、読んでくださった方にいくつか聞いてみたいことがあります。</p>
        <ul>
          <li>示唆画面が出たとき、きちんと写真を撮っていますか？</li>
          <li>あとで確認しようと思って、結局確認しそびれた経験はありますか？</li>
          <li>遊技前に、投資上限を決めていますか？</li>
        </ul>
        <p>似たような経験がある方も、ない方も、よければ下記のコメント欄で教えてください。</p>

        <section className="card" aria-labelledby="support-heading">
          <h2 id="support-heading">ワンチャンくんの運営を応援する</h2>
          <p>
            正直に言うと、7月7日にお小遣い5万円を使い切ってしまい、今は家で奥歯をバイツしながら次のお小遣いを待っている状態です。
          </p>
          <p>
            それでも、今回のような失敗談も含めて、朝一情報や実践記録はこれからも隠さず更新していくつもりです。サイト内に掲載している広告リンクは、ご利用いただくとサイト運営の支援につながる場合があります。無理のない範囲で、よろしければ力を貸していただけると嬉しいです。
          </p>
          <ul>
            <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link>（モバイルバッテリー・メモ用品など）</li>
            <li><Link href="/articles/kachikachi-kun">カチカチくん（小役カウンター）とは？</Link></li>
          </ul>
        </section>

        <h2>責任ある遊技について</h2>
        <p>
          今回の話はあくまで実践記録であり、遊技を強くおすすめするものではありません。示唆が出たからといって高設定が確定するわけではありませんし、資金状況に応じてやめどきを判断することが何より大切です。無理のない範囲で、楽しく続けられる形を大事にしていきたいと思います。
        </p>

        <div className="article-link-box">
          <p>
            東京喰種のリセット恩恵・判別方法は、
            <Link href="/machines/tokyo-ghoul">L東京喰種（スマスロ東京グール）の機種ページ</Link>で詳しく解説しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/guides/yamedoki-chuiten">失敗しやすいパターンと注意点</Link></li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <Comments slug="tokyo-ghoul-trophy-misugoshi" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
