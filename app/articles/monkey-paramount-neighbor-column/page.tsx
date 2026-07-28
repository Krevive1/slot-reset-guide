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

const title = "隣のパラマウント打ちに「表出ろ」と言われた結果、まさかの正体が判明した";
const description =
  "スマスロモンキーターンVを打っていたら、右隣で「パラマウントベッド打ち」をしていた男に「表出ろ」と言われた実体験コラムです。もめた相手の正体が判明するまでの顛末をまとめました。";
const url = `${SITE_URL}/articles/monkey-paramount-neighbor-column`;
const heroImage = "/images/articles/monkey-paramount-neighbor-column.jpg";
const publishedAt = "2026-07-28";

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

export default function MonkeyParamountNeighborColumnPage() {
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monkey-paramount-neighbor-column" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="ワンチャンくんコラム「隣のパラマウント打ちに『表出ろ』と言われた結果、まさかの正体が判明した」のアイキャッチ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>パチンコ店では、何が起きるか分かりません。</p>
        <p>フリーズを引くこともあれば、天井目前で当たることもある。</p>
        <p>そして、ときには——</p>
        <p>
          <strong>小学生の頃によく遊んでいた後輩と、店の外で言い争うこともあります。</strong>
        </p>
        <p>しかも、また右隣です。</p>
        <p>
          <Link href="/articles/hokuto-loud-neighbor-column">前回のコラム</Link>
          でも問題が起きたのは右隣でした。
        </p>
        <p>どうやら私の右隣には、何かしらのエネルギー波が渦を巻いているようです。</p>
        <p>今回は、約1年前にマイホールで起きた、少し怖くて、かなり気まずくて、最後だけ妙に平和だった話です🐶ワンワン</p>

        <h2>右隣に現れた、短髪ジャージの男</h2>
        <p>その日、私はスマスロ モンキーターンVを打っていました。</p>
        <p>しばらくすると、右隣に一人の男が着席。</p>
        <p>短髪。ジャージ。少しガラが悪そう。</p>
        <p>ここまではホールで珍しくありません。</p>
        <p>問題は、その打ち方です。</p>
        <p>背もたれを限界まで倒し、ふんぞり返って打つ。</p>
        <p>いわゆるリクライニング打ち。</p>
        <p>いや、あれはもうリクライニングではありません。</p>
        <p>
          <strong>パラマウントベッド打ちです。</strong>
        </p>
        <p>ホールの椅子を、完全に介護用ベッドとして使っています。</p>
        <p>しかも、MAXベットとレバーの扱いが荒い。</p>
        <p>台の性能ではなく、物理的な衝撃でATへ入れようとしているようでした。</p>
        <p>私はなるべく気にしないよう、目の前のモンキーターンVへ集中します。</p>

        <h2>シナリオは最強のB2</h2>
        <p>そんななか、SGラッシュへ突入。</p>
        <p>シナリオを確認すると、なんと最強のB2。</p>
        <p>B2は、1セット目を継続できれば、グランドスラムが確定する激アツシナリオです。</p>
        <p>最初からグランドスラムが確定する「艇王」とは違い、まずは1セット目を継続させなければなりません。</p>
        <p>ここから私のレバーオンも、急に重くなります。</p>
        <p>ただし隣の男と違い、台を壊す気はありません。</p>
        <p>祈りを込めているだけです。</p>
        <p>レア役を何も引けないまま、SGレースへ。</p>
        <p>オッズ表を見ると、1番人気は榎木さん。</p>
        <p>波多野は4番人気。</p>
        <p>見た瞬間に分かりました。</p>
        <p>
          <strong>はい、死亡オッズです。</strong>
        </p>
        <p>最強のB2という大チャンスを持ちながら、開始早々に終わる未来が見えます。</p>
        <p>「これ、やったな……」</p>
        <p>そう思いながらレバーを叩いた、次の瞬間。</p>

        <h2>3リールブルからの強チェリー</h2>
        <p>ブブブッ！</p>
        <p>突然の3リールブル。</p>
        <p>そして止まったのは、強チェリー。</p>
        <p>勝利書き換えです。</p>
        <p>1セット目の継続が確定し、その時点でグランドスラムまで確定。</p>
        <p>先ほどまで死亡オッズを見ていた私の頭の中では、急にウイニングランが始まりました。</p>
        <p>もう気分はルンルンです。</p>
        <p>隣のMAXベット音も、さっきまでほど気になりません。</p>
        <p>人間、出ているときは寛容になれるものです。</p>
        <p>そのままグランドスラムを達成し、エンディングへ。</p>
        <p>続く青島バトルには敗れましたが、十分満足できる結果でした。</p>
        <p>一度気持ちを落ち着かせようと、トイレへ向かいます。</p>
        <p>このときの私は知りませんでした。</p>
        <p>本当のバトルは、青島バトルのあとに待っていたことを。</p>

        <h2>戻る途中、パラマウントベッドへ強打</h2>
        <p>青島バトル後は天井短縮があるため、席へ戻って続きを打つことにしました。</p>
        <p>自分の席へ入ろうとした、そのときです。</p>
        <p>狭い通路で身体が当たり、右隣の男が限界まで倒していた背もたれ——</p>
        <p>つまり、パラマウントベッドへ強くぶつかってしまいました。</p>
        <p>これは完全に私が悪い。</p>
        <p>すぐ謝ればよかったのですが、一瞬固まってしまいます。</p>
        <p>隣を見る。</p>
        <p>見ています。</p>
        <p>ものすごくこちらを見ています。</p>
        <p>あまりにしっかり見ているので、</p>
        <p>「もしかして、知り合いかな？」</p>
        <p>と思うほどです。</p>
        <p>もちろん、その時点では知り合いだと気づいていません。</p>
        <p>すると男が一言。</p>
        <p>
          <strong>「表出ろ」</strong>
        </p>
        <p>ヒエエエエエエエ。</p>
        <p>令和のパチンコ店で、こんなに昭和のセリフを聞くとは思いませんでした。</p>

        <h2>なぜか素直についていく私</h2>
        <p>普通なら、店員さんを呼ぶべき場面です。</p>
        <p>絶対に外へついていく必要はありません。</p>
        <p>しかし、そのときの私は何を思ったのか、男のあとをついて外へ出ました。</p>
        <p>グランドスラム達成直後で、気が大きくなっていたのかもしれません。</p>
        <p>外へ出ると、男は罵詈雑言でまくしたててきます。</p>
        <p>こちらも、ずっと言われっぱなしではつらい。</p>
        <p>ぶつかったことについては謝りつつ、言われた内容には言い返し、口論になりました。</p>
        <p>ところが不思議なことに、私はあまり怖くありませんでした。</p>
        <p>相手は見た目も言葉も怖い。</p>
        <p>なのに、なぜか恐怖心が薄い。</p>
        <p>「この人、本当に知らない人か？」</p>
        <p>そんな違和感が、頭のどこかに残っていました。</p>
        <p>しばらくして、お互い言いたいことを言い終えます。</p>
        <p>すると、どちらからともなく店内へ戻りました。</p>
        <p>まるでコントの一幕が終わったかのように。</p>
        <p>そして再び並んで着席。</p>
        <p>右隣は、当然のようにパラマウントベッドへ戻ります。</p>
        <p>さっきまで外で口論していた二人が、また隣同士でスロットを打つ。</p>
        <p>かなり異様な光景です。</p>

        <h2>ひょっとして、あいつでは？</h2>
        <p>しばらくすると、右隣の男は遊技をやめて帰っていきました。</p>
        <p>私は打ちながら、先ほどから感じていた違和感を考えます。</p>
        <p>顔つき。</p>
        <p>声。</p>
        <p>言葉の癖。</p>
        <p>そして、なぜか恐怖心がなかったこと。</p>
        <p>「ひょっとすると……」</p>
        <p>私は同級生の友人へLINEしました。</p>
        <blockquote>
          <p>たくや（仮名）に、今日パチンコ屋で誰かともめたか聞いてみてくれやん？</p>
        </blockquote>
        <p>返事はすぐに来ました。</p>
        <blockquote>
          <p>「すいませんでした」って言うてる</p>
        </blockquote>
        <p>やっぱり。</p>
        <p>隣に座っていた男は、小学生の頃によく遊んでいた後輩だったのです。</p>
        <p>長い年月が、少年を短髪ジャージのパラマウント打ちへ変えていました。</p>
        <p>向こうも、口論している途中では私だと気づいていなかったようです。</p>
        <p>私も友人へ、</p>
        <blockquote>
          <p>俺もぶつかったのに、すぐ謝らんかったから悪かった。ごめんって言うといて</p>
        </blockquote>
        <p>と伝えました。</p>

        <h2>翌日、コーヒーで和解</h2>
        <p>翌日、再びそのホールへ行くと、彼がいました。</p>
        <p>昨日は外で言い争った相手。</p>
        <p>今日は昔よく遊んだ後輩。</p>
        <p>改めて顔を見ると、確かに面影があります。</p>
        <p>私はコーヒーを一本渡し、お互いに謝って和解しました。</p>
        <p>昨日の「表出ろ」から、翌日の「コーヒーどうぞ」。</p>
        <p>感情の高低差が、モンキーターンVのシナリオ表より激しい。</p>
        <p>これで一件落着です。</p>
        <p>——と言いたいところですが、後日談があります。</p>
        <p>ほどなくして彼は、かくかくしかじかな事情により、そのホールを出禁になりました。</p>
        <p>理由の詳細は伏せます。</p>
        <p>ただ、パラマウント打ちだけが原因ではなかったことは確かです。</p>

        <h2>ホールで揉めたときに必要なもの</h2>
        <p>皆さんもホールで揉め事が起きた際は、メリケンサックを——</p>
        <p>
          <strong>おすすめしません。絶対に。</strong>
        </p>
        <p>外へついていくのもおすすめしません。</p>
        <p>今回、結果的には知り合いで和解できましたが、相手が誰か分からない状況で店外へ出るのは危険です。</p>
        <p>本来なら、</p>
        <ul>
          <li>相手と距離を取る</li>
          <li>店員へ相談する</li>
          <li>自分だけで解決しようとしない</li>
          <li>危険を感じたら、その場から離れる</li>
        </ul>
        <p>これが正解です。</p>
        <p>そして、そもそも隣の強打や爆音へ意識を持っていかれないために、私が今使っているのがノイズキャンセリングイヤホンです。</p>
        <p>イヤホンを着けると、隣台の音や周囲の雑音がかなり軽減されます。</p>
        <p>もちろん、完全に外の音が消えるわけではありません。</p>
        <p>店内アナウンスや周囲の状況へ注意する必要もあります。</p>
        <p>それでも、隣のMAXベット音へ意識を奪われにくくなるだけで、実戦中のストレスはかなり違います。</p>
        <p>外界との間に、薄い結界を張るような感覚です。</p>
        <p>パラマウント打ちが隣に現れても、心の距離だけは確保できます。</p>
        <p>実際にホールで使った感想は、こちらの記事にまとめています。</p>
        <p>
          <Link href="/articles/soundcore-liberty-4-hall-noise-column">ホールでSoundcore Liberty 4を使ってみた</Link>
        </p>

        <h2>まとめ</h2>
        <p>今回の教訓です。</p>
        <ul>
          <li>私の右隣には、何かしらのエネルギー波が渦を巻いている</li>
          <li>ホールでは、隣に誰が座るか分からない</li>
          <li>「表出ろ」と言われても、ついていかない</li>
          <li>揉めたら店員へ相談する</li>
          <li>昔の後輩は、見た目が大きく変わることがある</li>
          <li>グランドスラム達成後でも冷静さを失わない</li>
          <li>パラマウント打ちには、物理的にも精神的にも距離を取る</li>
        </ul>
        <p>そして何より、</p>
        <p>
          <strong>ホールでの本当の強敵は、榎木さんでも青島バトルでもなく、右隣に座る人かもしれません。</strong>
        </p>
        <p>皆さんも、ホールで思わぬ再会やトラブルに遭遇した経験はありますか？</p>
        <p>危険のない範囲で、コメントから教えてください🐶ワンワン</p>

        <div className="article-link-box">
          <p>
            スマスロモンキーターンVのリセット恩恵・判別方法は、
            <Link href="/machines/monkey-turn-v">スマスロモンキーターンVの機種ページ</Link>で詳しく解説しています。
          </p>
          <ul>
            <li><Link href="/articles/monkey-turn-v-5mai-yaku">モンキーターンVの5枚役とは？設定差・数え方・計算方法</Link></li>
            <li><Link href="/articles/hokuto-loud-neighbor-column">隣に音量MAXの男が座った話｜収支は負けたが謎の勝負には勝った</Link></li>
            <li><Link href="/articles/soundcore-liberty-4-hall-noise-column">ホールでSoundcore Liberty 4を使ってみた話</Link></li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <Comments slug="monkey-paramount-neighbor-column" title={title} />
        <LineCta />
      </div>
    </article>
  );
}
