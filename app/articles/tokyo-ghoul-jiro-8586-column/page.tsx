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

const title = "二郎系ラーメンを食べに遠征したら、東京喰種で8586枚出た話";
const description =
  "ジャグラーで少し勝って帰るはずが、東京喰種の周りをグールグール5周。乗り打ちで最終8586枚となった二郎系ラーメン遠征の実践記録です。";
const url = `${SITE_URL}/articles/tokyo-ghoul-jiro-8586-column`;
const heroImage = "/images/articles/tokyo-ghoul-jiro-8586-column.jpg";
const publishedAt = "2026-08-03";

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

function ArticlePhoto({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}) {
  return (
    <figure style={{ margin: "24px 0" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 720px) 100vw, 720px"
        style={{ display: "block", width: "100%", height: "auto", borderRadius: "12px" }}
      />
      <figcaption className="section-note" style={{ marginTop: "8px" }}>
        {caption}
      </figcaption>
    </figure>
  );
}

export default function TokyoGhoulJiro8586ColumnPage() {
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/tokyo-ghoul-jiro-8586-column" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="二郎系ラーメンを食べに遠征したら東京喰種で8586枚出た実践記録"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>先日、友達と二人で<strong>二郎系ラーメン旅</strong>へ行ってきました。</p>
        <p>今回の目的は、あくまでラーメンです。</p>
        <p>パチスロではありません。</p>
        <p>まず最初に、ここだけは強く申し上げておきます。</p>
        <p><strong>目的はラーメンです。</strong></p>
        <p>なぜなら、このあと書く内容だけを読むと、誰も信じてくれないからです。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-01-ramen.jpg"
          alt="二郎系ラーメン旅で食べたラーメン"
          caption="この時点では、まだラーメン旅でした。"
          width={1600}
          height={1200}
        />

        <p>二郎系ラーメンをたらふく食べて、大満足。</p>
        <p>胃袋は満席。<br />ニンニクは増し増し。<br />口臭は即戦力。</p>
        <p>時刻は15時でした。</p>
        <p>このまま帰っても、十分にいい一日です。</p>
        <p>しかし、まだ時間はあります。</p>
        <p>そして、入ったばかりの少ないお小遣いもあります。</p>
        <p>つまり、条件はそろいました。</p>
        <p><strong>パチ屋へ向かいます。</strong></p>

        <h2>「ジャグラーで少し勝って帰ろう」</h2>
        <p>ホールへ向かう車内で、友達と話していました。</p>
        <p>「ジャグラー打って、ちょっと勝てるぐらいで帰ろうか」</p>
        <p>なんと穏やかな会話でしょう。</p>
        <p>高望みはしない。<br />深追いもしない。<br />少し勝ったら帰る。</p>
        <p>この時点では、まだ二人とも人間でした。</p>
        <p>理性もありました。<br />金銭感覚もありました。</p>
        <p>そして何より、まさか数時間後に私が、</p>
        <p><strong>「万枚出すから任せて！」</strong></p>
        <p>などと発言するとは、誰も思っていませんでした。</p>
        <p>本人以外は。</p>

        <h2>優良店の空き台には、空いている理由がある</h2>
        <p>ホールに到着し、二人で向かったのはジャグラーの島。</p>
        <p>ただ、この店はかなりの優良店です。</p>
        <p>当然、稼働率も高い。</p>
        <p>空き台自体は少しありますが、データを見ると、</p>
        <p><strong>鬼のような凹み台ばかり。</strong></p>
        <p>どれも見事な右肩下がり。</p>
        <p>グラフだけ見れば、スキー場として営業できそうです。</p>
        <p>「ジャグラーで少し勝って帰ろう」</p>
        <p>そう言って入店した我々でしたが、少し勝つ以前に、座る台がありません。</p>
        <p>そんな中、ようやく空いたのが、合算<strong>1/129のマイジャグラー</strong>。</p>
        <p>悪くない。</p>
        <p>ただし、BIG先行です。</p>
        <p>ん〜、怖い。</p>
        <p>数字だけ見れば悪くない。<br />内訳を見ると少し怖い。</p>
        <p>でも、他に座れる台もありません。</p>
        <p>「とりあえず打ってみよう」</p>
        <p>ということで、友達が打ち始めました。</p>
        <p>私はお金を渡し、店内をうろうろすることにしました。</p>

        <h2>店内をうろうろ。というより、グールグール</h2>
        <p>店内を巡回していたというより、<br />完全に<Link href="/machines/tokyo-ghoul">東京喰種</Link>の周りを回っていました。</p>
        <p>1周。</p>
        <p>2周。</p>
        <p>3周。</p>
        <p>4周。</p>
        <p>5周。</p>
        <p>5周なので、</p>
        <p><strong>グールグールグールグールグールです。</strong></p>
        <p>腹の中は二郎。<br />目は赫眼。<br />口からはニンニク。</p>
        <p><strong>ホールに入れていい生き物ではありません。</strong></p>
        <p>そして間違いなく、私の目は<strong>赫眼状態</strong>でした。</p>
        <p>真っ赤っかです。</p>
        <p>空き台を探しているというより、獲物が弱るのを待っていました。</p>
        <p>店員さんから見れば、同じ島を何度も通過するニンニク臭い男。</p>
        <p>不審者です。</p>
        <p>しかし本人の中では、立派な台選びです。</p>
        <p>すると、ついにその時が来ました。</p>
        <p><strong>4000枚出た後の550Gハマり台</strong>が空いたのです。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-02-before-play.jpg"
          alt="AT間550Gを確認して着席した東京喰種"
          caption="筐体表示は193G。詳細画面ではAT間550Gを確認して着席。"
          width={1600}
          height={2133}
        />

        <p>しかも、</p>
        <ul>
          <li>リゼが1回だけ</li>
          <li>CZは浅め</li>
          <li>グラフは右肩上がり</li>
        </ul>
        <p>悪くない。</p>
        <p>むしろ、ちょっと気になる。</p>
        <p>正確に言えば、</p>
        <p><strong>赫眼状態の私には、すべてが好材料に見えていました。</strong></p>
        <p>「AT間天井の期待値ラインまでもう少しか……」</p>
        <p>そんなことを考えながら眺めていたはずなんですが、気づけば座っていました。</p>
        <p>理由は分かっています。</p>
        <p><strong>赫眼状態です。</strong></p>
        <p>理性は友達と一緒に、ジャグラーの島へ置いてきました。</p>
        <p>そして、さらに気づけば、</p>
        <p><strong>乗り打ちなのに貸付ボタンを連打していました。</strong></p>
        <p>乗り打ちの資金管理？</p>
        <p>それは人間社会の決まりです。</p>
        <p>この時の私は、もう喰種側でした。</p>
        <p>頭の中では、うっすらこう考えていました。</p>
        <p><strong>「このままATを駆け抜けたら、投資分は黙っておこう……」</strong></p>
        <p>喰種になった影響でしょうか。</p>
        <p>人間性まで失い始めています。</p>

        <h2>友達は5連。私は天井</h2>
        <p>一度、友達のマイジャグラーを見に行くと、なんと下皿いっぱい。</p>
        <p>さらに、5連チャン中でした。</p>
        <p>あざす！</p>
        <p>さっそく少しメダルをもらいます。</p>
        <p>そして私は、友達に一言残しました。</p>
        <p><strong>「大丈夫。万枚出すから任せて！」</strong></p>
        <p>この時点で出ていたのは、</p>
        <p><strong>出玉ではなく大口だけです。</strong></p>
        <p>友達がどう思ったかは分かりません。</p>
        <p>おそらく、二郎系ラーメンを食べ過ぎて脳までニンニクに侵されたと思ったことでしょう。</p>
        <p>それでも私は、自信満々で東京喰種へ戻りました。</p>
        <p>結果、</p>
        <p><strong>もちろんAT間天井です。</strong></p>
        <p>追加投資は、さらに<strong>16,000円</strong>。</p>
        <p>ジャグラーで少し勝って帰る話は、すでに天井の彼方へ消えていました。</p>
        <p>「あ〜、やっちまったな〜！」</p>
        <p>言葉とは裏腹に、貸付ボタンを押したのは私です。</p>
        <p>誰にも強要されていません。</p>
        <p>完全な自作自演です。</p>

        <h2>最初の相手は絢斗。テーブルBがひりつく</h2>
        <p>ようやくATが始まり、最初の相手は<strong>絢斗</strong>。</p>
        <p>なんとか1回目のバトルへ突入し、リプレイを1回引いて勝利。</p>
        <p>BITESへ入ります。</p>
        <p>テーブルはB。</p>
        <p><strong>50→50→500→500→1000</strong></p>
        <p>うん。</p>
        <p>嫌いじゃないです、このテーブル。</p>
        <p>50枚で終わる可能性を二度見せてから、500枚と1000枚をぶら下げてくる。</p>
        <p><strong>飴とムチの配分がおかしい。</strong></p>
        <p>でも、ひりつく。</p>
        <p>こういうのでいいんです。</p>
        <p>ここは<strong>500枚</strong>取れました。</p>

        <h2>次は厄介なおじさん、シャチさん</h2>
        <p>続いて登場したのは、シャチさん。</p>
        <p>厄介なおじさんです。</p>
        <p>本当に厄介です。</p>
        <p>できれば、町内会でも同じ班になりたくありません。</p>
        <p>ただ、今回は割と早い段階でバトルへ行き、リプレイを2回引いて勝利。</p>
        <p>バイツはテーブルAで<strong>200枚</strong>でした。</p>
        <p>その後、3戦目、4戦目も難なく突破。</p>
        <p>バトル中に何も引かず勝つ場面もありました。</p>
        <p>これはもう、</p>
        <p><strong>対決レベルの高さを感じざるを得ません。</strong></p>

        <h2>5戦目、有馬乱入</h2>
        <p>そして5戦目。</p>
        <p>第一停止で、有馬のカットインが入りました。</p>
        <p>「まあ、奇数戦目なら振り分けが10％ぐらいあるけど……」</p>
        <p>そう思っていると、</p>
        <p><strong>まさかの有馬乱入。</strong></p>
        <p>10％を引きました。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-03-arima-entry.jpg"
          alt="東京喰種のAT中に発生した有馬乱入"
          caption="5戦目で有馬乱入。こりゃもろたで工藤！"
          width={1535}
          height={2729}
        />

        <p>嬉しい。</p>
        <p>これは嬉しい。</p>
        <p><strong>汁出る〜。</strong></p>
        <p>残り枚数は1000枚。</p>
        <p>これまでの展開を見る限り、対決レベルも高そうです。</p>
        <p>これはもう、</p>
        <p><strong>こりゃもろたで工藤！</strong></p>
        <p>もちろん、ここは勝利。</p>
        <p>楽勝でした。</p>

        <h2>リゼさん爆誕から、初めての隻眼の梟</h2>
        <p>次のバトルでは、緑の喰種狙えカットイン。</p>
        <p>トーカちゃんです。</p>
        <p>右リールが下段まで滑り落ち、画面が赤く染まります。</p>
        <p><strong>リゼさん爆誕。</strong></p>
        <p>おめでとうございます。</p>
        <p>「ムカデ覚醒じゃ〜ん」</p>
        <p>そう思いながらレバーを叩くと、まさかのリールロック。</p>
        <p>キタッ！</p>
        <p><strong>梟きたっ！</strong></p>
        <p>初めて引きました。</p>
        <p><strong>隻眼の梟。</strong></p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-04-owl.jpg"
          alt="初めて当選した隻眼の梟"
          caption="初めての隻眼の梟。初対面の支給額は300枚でした。"
          width={1600}
          height={2133}
        />

        <p>念願の初対面です。</p>
        <p>こちらはニンニク臭い赫眼状態の男。</p>
        <p>向こうは隻眼の梟。</p>
        <p>ホールの治安が終わっています。</p>
        <p>ここは<strong>300枚</strong>でした。</p>
        <p>300枚。</p>
        <p>初めて引いた喜びはあります。</p>
        <p>ただ、枚数を見た瞬間、喜びの中に小さな曇りが発生しました。</p>
        <p>初対面で300枚。</p>
        <p>梟さん、少し人見知りだったのかもしれません。</p>

        <h2>私、有馬ジャッジメントは得意なのでございます</h2>
        <p>ATは<strong>2513枚</strong>で終了。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-05-2513.jpg"
          alt="最初のAT終了時に獲得した2513枚"
          caption="最初のATは2513枚。ここから有馬ジャッジメントへ。"
          width={1600}
          height={2133}
        />

        <p>そして、有馬ジャッジメントへ。</p>
        <p>ここで説明しておきます。</p>
        <p>私、有馬ジャッジメントは得意なのでございます。</p>
        <p>ええ。</p>
        <p>突破率は60％と言われていますが、私の実戦上は90％ぐらい通しています。</p>
        <p>正確な記録を取ったわけではありません。</p>
        <p><strong>体感です。</strong></p>
        <p>パチスロ打ちが最も信用してはいけない数字です。</p>
        <p>しかし、この時の私には自信しかありませんでした。</p>
        <p>5。</p>
        <p>4。</p>
        <p>3。</p>
        <p>2。</p>
        <p>……あかんやん。</p>
        <p>引けやん。</p>
        <p>急に60％が本気を出してきました。</p>
        <p>そして最終ゲーム。</p>
        <p>左リールの黒BARが枠下へ落ち、スイカが剥けました。</p>
        <p><strong>1確です。</strong></p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-06-arima-judgement.jpg"
          alt="有馬ジャッジメント最終ゲームのスイカ"
          caption="最終ゲームでスイカ。私、有馬ジャッジメントは得意なのでございます。"
          width={1600}
          height={2133}
        />

        <p>きもてぇいいいい！</p>
        <p>汁出る〜！</p>
        <p>しかも、レア役なので裏ATも確定。</p>
        <p>ただ、ここでの獲得は<strong>300枚</strong>。</p>
        <p>嬉しい。</p>
        <p>裏ATも取れた。</p>
        <p>でも300枚。</p>
        <p>厳しい。</p>
        <p>非常に厳しい。</p>
        <p>梟さんに続き、有馬さんも初回の支給額は控えめでした。</p>

        <h2>不利益を通して、超BITESへ</h2>
        <p>1戦目の相手は亜門さん。</p>
        <p>「裏ATだし、300枚あるし、一度バトルへ行けば大丈夫かな」</p>
        <p>そんなことを考えながら打っていると、レア役を引きまくります。</p>
        <p>そして、リゼナビ。</p>
        <p><strong>不利益確定です。</strong></p>
        <p>名前がもう怖い。</p>
        <p>普通の台なら「チャンス」「超高確」「激熱」など、景気のいい名前が付きそうな場面です。</p>
        <p>東京喰種は正面から、</p>
        <p><strong>不利益</strong></p>
        <p>と言ってきます。</p>
        <p>会社から届く封筒でも、もう少し言葉を選びます。</p>
        <p>ただし、この不利益をリプレイで通し、超BITES確定。</p>
        <p>ここは<strong>1000枚</strong>でした。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-07-super-bites.jpg"
          alt="不利益を成功させて突入した超BITES"
          caption="不利益を通して超BITESへ。名前は不利益、結果は利益。"
          width={1179}
          height={1882}
        />

        <p>裏AT中で残り1000枚。</p>
        <p>さらに、3000枚付近がエンディング。</p>
        <p>これはもう、</p>
        <p><strong>よっぽど下手じゃない限り、有利区間を切るところまで出ます。</strong></p>
        <p>この時の私は、まだ知りません。</p>
        <p>この記事の後半で、この発言が自分の首を締めることを。</p>

        <h2>4915枚。そして再び有馬ジャッジメント</h2>
        <p>途中で有馬乱入もありつつ、勝利を重ねてエンディングへ。</p>
        <p>いったん<strong>4915枚</strong>で、有馬ジャッジメントに入ります。</p>
        <p>再び私の得意科目です。</p>
        <p><strong>有馬ジャッジメントのお時間です。</strong></p>
        <p>しかも今回は、準備中の画面ですでにスイカが剥けています。</p>
        <p>もう先に剥いて、待ってくれていました。</p>
        <p>『火垂るの墓』で、清太と節子が海で遊んでいる時に、お母さんがこう言いました。</p>
        <p><strong>「カルピスも冷えてるで〜」</strong></p>
        <p>そうなんです。</p>
        <p><strong>これ、全く同じ状況なんです。</strong></p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-08-watermelon.jpg"
          alt="有馬ジャッジメント準備中に停止したスイカ"
          caption="有馬さんが、スイカを剥いて待ってくれていました。"
          width={1600}
          height={2133}
        />

        <p>有馬さんが、スイカを剥いて待ってくれていました。</p>
        <p>1確です。</p>
        <p>ちなみに、成立役は強チャンス目でした。</p>
        <p>ここでも裏ATを獲得。</p>
        <p>ただし、またしても<strong>300枚</strong>。</p>
        <p>有馬さん。</p>
        <p>カルピスはありませんか。</p>

        <h2>残り20枚から、確定チェリー</h2>
        <p>その300枚も順調に喰われ、獲得は<strong>5321枚</strong>。</p>
        <p>残り20枚です。</p>
        <p>「あ〜、もう終わりか……」</p>
        <p>そう思った瞬間でした。</p>
        <p>レバーオンは無演出。</p>
        <p>左リールにチェリーが止まり、リゼさんが登場。</p>
        <p><strong>＋500枚。</strong></p>
        <p>確定チェリーでした。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-09-confirmed-cherry.jpg"
          alt="残り枚数が少ない場面で成立した確定チェリー"
          caption="終了寸前の確定チェリー。ドラマティックパッスロ。"
          width={1600}
          height={2133}
        />

        <p>ドラマティックパッスロ。</p>
        <p>まだ終わらせないのね。</p>
        <p>終わらせてくれないのね。</p>
        <p>東京喰種から、</p>
        <p><strong>「帰ってニンニク臭い車に乗るのは、まだ早い」</strong></p>
        <p>と言われているようでした。</p>

        <h2>本日3回目の不利益</h2>
        <p>その後も有馬乱入などを挟みながら継続。</p>
        <p>そして有馬とのバトル中、またリゼナビが発生します。</p>
        <p>不利益です。</p>
        <p><strong>今日3回目やん……。</strong></p>
        <p>人生で「不利益」という言葉を1日に3回も見たことがありますか。</p>
        <p>私はあります。</p>
        <p>全部パチスロです。</p>
        <p>ただし、ここは通せませんでした。</p>
        <p>難しい。</p>
        <p>やはり不利益は、不利益です。</p>
        <p>しかし大丈夫。</p>
        <p>まだ裏AT中です。</p>
        <p>さらに、初めてスイカから<strong>500枚</strong>を獲得するなどして、再びエンディングへ。</p>
        <p>獲得枚数は<strong>7321枚</strong>。</p>

        <h2>また有馬ジャッジメント。またチェリー</h2>
        <p>そして、また来ました。</p>
        <p>有馬ジャッジメントです。</p>
        <p>もはや有馬ジャッジメント側も、私に会いたがっているとしか思えません。</p>
        <p>私、有馬ジャッジメントは得意なのでございます。</p>
        <p>ええ。</p>
        <p>はい。</p>
        <p><strong>またチェリーで通します。</strong></p>
        <p>簡単ですね。</p>
        <p><strong>EASYです。</strong></p>
        <p>なお、英語のつづりに自信がなかったので念のため調べたくなりましたが、今はパチスロ中です。</p>
        <p>そんなことをしている場合ではありません。</p>
        <p>ここは、リプレイで<strong>1000枚</strong>。</p>
        <p>裏ATで1000枚あります。</p>
        <p>これは強い。</p>
        <p>「もう1周、有利区間を切るな……」</p>
        <p>「これ、万枚が見えてきたな……」</p>
        <p>確かに見えていました。</p>
        <p><strong>見えていただけでした。</strong></p>
        <p>蜃気楼です。</p>

        <h2>下手じゃない限り終わらない</h2>
        <p>4戦目ぐらいまでは進みました。</p>
        <p>ただし、バイツはすべて50枚。</p>
        <p>全部50枚。</p>
        <p>東京喰種側も、急に節約を始めました。</p>
        <p>でも大丈夫です。</p>
        <p>裏ATで1000枚あります。</p>
        <p>よっぽど下手じゃない限り、終わりません。</p>
        <p>……。</p>
        <p>気づけば画面は、エンディングではなく、</p>
        <p><strong>リザルト画面でした。</strong></p>
        <p><strong>下手でした。</strong></p>
        <p>よっぽどの方でした。</p>

        <h2>最終8586枚。脳汁は枯れました</h2>
        <p>最終結果は、<strong>8586枚</strong>。</p>

        <ArticlePhoto
          src="/images/articles/tokyo-ghoul-jiro-8586-10-result.jpg"
          alt="東京喰種の最終獲得枚数8586枚"
          caption="万枚は見えました。見えていただけでした。最終8586枚。"
          width={1600}
          height={2133}
        />

        <p>引き戻しを確認して、即ヤメしました。</p>
        <p>最終的には、脳汁が出過ぎて枯れていました。</p>
        <p>有馬ジャッジメントを何度も通し、梟を引き、確定チェリーを引き、不利益を3回見て、エンディングを繰り返す。</p>
        <p>感情が忙しすぎます。</p>
        <p>喜んだり、焦ったり、汁を出したり、枯れたり。</p>
        <p>人体の水分管理として正しいのかは分かりません。</p>

        <h2>車内に残っていたのは、ニンニク臭と清算タイム</h2>
        <p>友達と車へ戻り、ドアを開けます。</p>
        <p>すると、車内に残っていた強烈なニンニク臭が、我々を出迎えてくれました。</p>
        <p>出発前より濃くなっている気さえします。</p>
        <p>腹の中は二郎。<br />目は赫眼。<br />口からはニンニク。<br />獲得枚数は8586枚。</p>
        <p><strong>情報量の多い一日です。</strong></p>
        <p>しかし、この時ばかりは、ニンニク臭など一切気になりません。</p>
        <p>なぜなら、これから始まるのは、</p>
        <p><strong>乗り打ちの清算タイム。</strong></p>
        <p>この時間が最高ですね。</p>
        <p>入店前、二人で話していました。</p>
        <p>「ジャグラー打って、ちょっと勝てるぐらいで帰ろうか」</p>
        <p>ジャグラーで少し勝って帰る予定が、東京喰種で8586枚。</p>
        <p>予定とは、立てた瞬間が最も美しいものです。</p>
        <p>そして我々は、車内を満たすニンニク臭とともに帰路へ着きました。</p>
        <p>今回の遠征で分かったことは、ひとつです。</p>
        <p><strong>二郎系ラーメンを食べたあとに東京喰種の周りを5周すると、たまに喰種側へ行けます。</strong></p>
        <p>再現性はありません。</p>

        <ShareButtons url={url} title={title} />
        <Comments slug="tokyo-ghoul-jiro-8586-column" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
