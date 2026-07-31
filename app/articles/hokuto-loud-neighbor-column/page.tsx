import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import Comments from "@/components/machine/Comments";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL, X_OFFICIAL_URL } from "@/lib/site";

const title = "スマスロ北斗の拳で隣に音量MAXの男が座った話｜収支は負けたが謎の勝負には勝った";
const description =
  "スマスロ北斗の拳で音量MAXと大きな貧乏ゆすりの隣人に遭遇し、自分も奇妙な方法で対抗してしまった実体験コラムです。";
const url = `${SITE_URL}/articles/hokuto-loud-neighbor-column`;
const heroImage = "/images/articles/hokuto-loud-neighbor-column.jpg";
const publishedAt = "2026-07-21";

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

export default function HokutoLoudNeighborColumnPage() {
  const earphonesOffer = getActiveAffiliateOffer("noiseCancellingEarphones");
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/hokuto-loud-neighbor-column" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="スロット台を挟んで貧乏ゆすりと両足バタバタで対抗する2人のイラスト"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <h2>それは突然、右隣へやってきた</h2>
        <p>
          かなり前の話です。スマスロ北斗の拳を打っていると、右隣の空席に一人の男性がやってきました。
        </p>
        <p>
          年齢は30代後半くらいでしょうか。スポーツ刈りで、少し小柄。それでいて、肩で風を切るような歩き方だけは妙に堂々としていました。
        </p>
        <p>
          嫌な予感、というほどではありません。ただ、座った瞬間に台の音量がMAXだったのを見て、「これは少し濃い時間になりそうだ」とだけ思いました。
        </p>

        <h2>パラマウントベッド北斗</h2>
        <p>
          打ち始めてすぐ、男性はシートへ大きくのけ反りました。まるでスロットの椅子ではなく、電動ベッドのリクライニングを試しているかのような角度です。北斗の島に、突然パラマウントベッドが導入されたのかと思いました。
        </p>
        <p>貧乏ゆすりも、けっして控えめではありませんでした。私は横目で「かなりの実力者が来たな」と、謎の緊張感を覚えていました。</p>

        <h2>ホールへ響く「アタァ、アタァ、ホアタァ」</h2>
        <p>男性は、比較的早く当たりました。</p>
        <p>
          そしてボーナス中の音声が、音量MAXのままホール全体へ響き渡ります。「アタァ！　アタァ！　ホアタァ！」——ケンシロウの気合いが、島の隅々まで届いていました。
        </p>
        <p>あまりの音圧に、私は一度トイレへ避難することにしました。</p>

        <h2>トイレまで追いかけてくる北斗神拳</h2>
        <p>
          しかし、北斗神拳に逃げ場はありませんでした。個室に入っている間も、壁越しにアタァが聞こえてきます。台へ戻る道中では、今度は「愛をとりもどせ!!」が聞こえてきました。
        </p>

        <h2>帰り道の「愛をとりもどせ!!」</h2>
        <p>
          自分の席へ戻ると、男性の貧乏ゆすりはさらに勢いを増していました。それだけならまだよかったのですが、曲の奥から、聞き覚えのないダミ声のボーカルが混ざっているのに気づきました。
        </p>
        <p>
          恐る恐る右を見ると——歌っていたのは、男性本人でした。正規音源に、副音声として本人の熱唱が実装されていたのです。この日、私の中で一番笑いのピークが来た瞬間でした。
        </p>

        <h2>ピアノ親子動画を思い出す</h2>
        <p>
          このとき、なぜか以前SNSで見た親子の動画を思い出しました。5歳くらいの女の子がピアノの練習を嫌がってぐずると、母親がそれを上回る勢いでぐずって見せる、という動画です。
        </p>
        <p>
          私はその動画から、なぜか「ヤバい行動には、さらに上を行くヤバい行動を見せれば止まる」という、謎の対人戦術を学び取っていました。今思えば、教育的な動画では一切ありません。
        </p>

        <h2>天に帰る時が来た</h2>
        <p>「それを実践する時が来たのです。天に帰る時が来たのです」</p>
        <p>心の中で、勝手に北斗の拳っぽい決意をしました。相手は何も聞いていません。始まったのは、私による一方的な宣戦布告でした。</p>

        <h2>両足バタバタ、座位の有酸素運動</h2>
        <p>
          男性の貧乏ゆすりを超えるべく、私は両足を激しく動かし始めました。もはや貧乏ゆすりではなく、座ったまま行う足上げ運動です。上半身は無表情のまま、下半身だけが世紀末と化していました。
        </p>
        <p>視線は正面の台に固定。台を見ているというより、羞恥心から目をそらしていた、というのが正しいかもしれません。</p>

        <h2>集まる視線</h2>
        <p>気づけば、右隣だけでなく周囲からも視線を感じるようになっていました。</p>
        <p>
          隣を黙らせるつもりが、気づけば島全体へ自分の異常性を告知していたのです。この瞬間、島でもっとも避けたい人物の座は、静かに入れ替わっていたと思います。
        </p>

        <h2>隣の連チャン終了</h2>
        <p>しばらくして、男性の連チャンが終了しました。そしてほどなくして、男性は遊技をやめ、席を立って去っていきました。</p>
        <p>私の行動が理由だったのかは分かりません。単に区切りがついただけかもしれません。それでも当時の私は、勝手に一つの結論を出していました。</p>

        <h2>勝った。何にかは分からない</h2>
        <p>「勝った」</p>
        <p>心の中で、そう確信しました。ただし、その日のパチスロ収支自体は、しっかり負けていました。</p>
        <p>
          収支には負け、謎の対人戦には勝った気がした——そもそもその勝負は、相手にはまったく伝わっていなかった可能性が高いです。相手が参加すらしていない試合で、一人だけ優勝旗を掲げていました。勝者は私。賞金はゼロ。収支はマイナス。
        </p>

        <h2>今になって思うこと</h2>
        <p>今になって振り返ると、当時の自分はかなり仕上がっていたと思います。</p>
        <p>
          隣の音量や行動がつらいと感じたときは、無理に対抗せず、空いている台があれば移動を検討するのが一番です。状況によっては、店員に相談するという手段もあります。一度席を離れて、頭を冷やすだけでも違います。
        </p>
        <p>
          そして何より、自分自身も周囲へ迷惑をかける行動はしない。正面から奇妙さで対抗しても、島全体が平和になるとは限りません。当時の私が証明してしまいました。
        </p>

        <h2>最後に</h2>
        <p>みなさんにも聞いてみたいことがあります。</p>
        <ul>
          <li>隣の音量や行動に困った経験はありますか？</li>
          <li>そのとき、席を移動しましたか？それとも我慢しましたか？</li>
          <li>自分も対抗してしまい、あとで冷静になった経験はありますか？</li>
        </ul>
        <p>
          似たような経験がある方は、下記のコメント欄や、ワンチャンくんの
          <a href={X_OFFICIAL_URL} target="_blank" rel="noopener noreferrer">
            X（旧Twitter）
          </a>
          で教えてください。
        </p>

        <section className="card" aria-labelledby="noise-heading">
          <h2 id="noise-heading">音量が気になる方へ</h2>
          <p>
            余談ですが、ホールの音量がどうしても気になる場合は、ノイズキャンセリング機能付きのイヤホンを使っている方も多いようです。ただし、店内放送や店員からの呼びかけが聞こえなくなるほど遮音してしまうと本末転倒なので、外音取り込みモードなどを併用し、周囲の様子が分かる範囲で使うのがおすすめです（座位の足上げ運動より確実に静かです）。
          </p>
          {earphonesOffer && (
            <div className="product-box-grid">
              <AffiliateProductBox
                provider={earphonesOffer.provider}
                name={earphonesOffer.serviceName}
                note="周囲の音量が気になる場面で使われることが多いアイテムです。外音取り込みモードの有無も選ぶ際の参考にしてください。"
                ctaLabel={earphonesOffer.ctaLabel}
                ctaHref={earphonesOffer.href}
                disclosure={earphonesOffer.disclosure}
                offerType={earphonesOffer.offerType}
                serviceName={earphonesOffer.serviceName}
                placement="mid_article"
                affiliateProgram={earphonesOffer.programName}
              />
            </div>
          )}
        </section>

        <div className="article-link-box">
          <p>
            スマスロ北斗の拳のリセット恩恵・判別方法は、
            <Link href="/machines/hokuto-no-ken-smart-slot">スマスロ北斗の拳の機種ページ</Link>で詳しく解説しています。
          </p>
          <ul>
            <li><Link href="/articles/tokyo-ghoul-trophy-misugoshi">実践記録：トロフィーを確認せず5万円使い切った7月7日</Link></li>
            <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link></li>
            <li><Link href="/articles/soundcore-liberty-4-hall-noise-column">ホールでSoundcore Liberty 4を使ってみた話</Link></li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <Comments slug="hokuto-loud-neighbor-column" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
