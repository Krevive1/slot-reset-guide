import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import ShareButtons from "@/components/site/ShareButtons";
import LineCta from "@/components/site/LineCta";
import WanchankunComment from "@/components/machine/WanchankunComment";
import { buildAboutPageJsonLd, buildBreadcrumbJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL } from "@/lib/site";

const title = "運営者情報｜ワンチャンくんについて";
const description =
  "パチスロ歴20年近くの運営者が、ワンチャンくんを作った理由と、期待値・やめどきに対する考え方、実体験をまとめています。";
const url = `${SITE_URL}/operator`;
const heroImage = "/images/profile-illustration.png";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "profile",
    images: [{ url: heroImage }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [heroImage],
  },
};

export default function OperatorPage() {
  const aboutPageJsonLd = buildAboutPageJsonLd({
    url,
    name: "ワンチャンくん",
    description,
  });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "トップ", url: SITE_URL },
    { name: "運営者情報", url },
  ]);

  return (
    <div className="article">
      <JsonLd data={aboutPageJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />
      <Breadcrumbs items={[{ name: "トップ", href: "/" }, { name: "運営者情報", href: "/operator" }]} />

      <h1 className="page-title">ワンチャンくんについて</h1>
      <p className="updated-at">更新日：2026-07-24</p>

      <div className="profile-hero">
        <div className="profile-hero-image">
          <Image src={heroImage} alt="ワンチャンくん｜朝イチリセットガイド" width={140} height={140} priority />
        </div>
        <div className="profile-hero-body">
          <div className="profile-quote">
            <p>勝ち方を断言する犬ではありません。</p>
            <p>迷ったときの判断材料を、動画と一緒にまとめる犬です。</p>
          </div>
          <p>犬のキャラクターですが、レバーを叩いているのは人間です。</p>
          <p>
            20年近くパチスロを打ってきた一人のユーザーとして、「自分がホールで本当に欲しかった情報」をまとめるために、ワンチャンくんを運営しています。
          </p>
        </div>
      </div>

      <h2>ワンチャンくんを作った理由</h2>
      <p>パチスロを打っていると、解析情報だけでは判断しにくい場面があります。</p>
      <p>
        特に朝イチのリセット判別では、実際に台を回して挙動を確かめている検証動画が、とても参考になります。
      </p>
      <p>しかし、ホールで急いで調べたいときに、こういったことが何度もありました。</p>
      <ul>
        <li>どの動画で検証していたのか分からない</li>
        <li>欲しい場面を探すのに時間がかかる</li>
        <li>リセット恩恵や狙い目は別のページを見なければならない</li>
        <li>答えにたどり着く前に、数ゲーム回してしまう</li>
      </ul>
      <p>調べている間にも、ゲーム数とお金は待ってくれません。</p>
      <p>
        そこで、朝イチに必要な情報と、参考になるリセット検証動画を機種ごとにまとめたサイトを作りたいと思い、「ワンチャンくん」を始めました。
      </p>

      <h2>解析情報と検証動画を一つのページに</h2>
      <p>各機種のページでは、主に次の情報を掲載しています。</p>
      <div className="cards">
        <div className="card">
          <h3>解析情報</h3>
          <p>リセット恩恵・リセット判別ポイント・朝イチの挙動・狙い目・やめ時を機種ごとに整理しています。</p>
        </div>
        <div className="card">
          <h3>検証動画</h3>
          <p>実際の挙動を確認できる検証動画をあわせて掲載し、文章だけでは伝わりにくい部分を補っています。</p>
        </div>
      </div>
      <p>
        解析情報を読んで終わりではなく、動画でも実際の挙動を確かめられる。これが、ワンチャンくんの一番の強みです。
      </p>
      <p>
        ホールで迷ったときに、「文章を読む」「検証動画を見る」を一つのページで完結できるサイトを目指しています。
      </p>

      <h2>「期待値を追い続けること」が、いちばん難しい必勝法</h2>
      <p>パチスロに、毎回必ず勝てる魔法のような必勝法はありません。</p>
      <p>
        ただ、私が必勝法に最も近いと思っているのは、余計な感情を挟まず、期待値のある行動を積み重ねることです。
      </p>
      <p>
        期待値がプラスの条件は、同じ条件で十分な試行を重ねたとき、平均的には投入額より回収額が上回ると見込める状態です。
      </p>
      <p>
        もちろん、期待値がプラスの台を打ったからといって、その日に必ず勝てるわけではありません。大きく上振れることもあれば、正しい立ち回りを続けていても下振れすることがあります。
      </p>
      <p>だからこそ難しいのは、負けているときです。</p>
      <div className="profile-callout">
        <ul>
          <li>負けを取り返そうとして、根拠のない台を打たない</li>
          <li>予定していたやめ時を、感情で延ばさない</li>
          <li>下振れしても、狙い方そのものを簡単に曲げない</li>
          <li>一度の勝ち負けではなく、長い目で判断する</li>
        </ul>
      </div>
      <p>
        下振れしたときほど無駄打ちをせず、機械のように淡々と期待値を追い続ける。それこそが、私の考える「必勝法」です。
      </p>
      <p>……とはいえ、人間なので、機械のように打つのが一番難しいのですが。</p>

      <h2>勝つことより、根拠のない負けを減らす</h2>
      <p>
        私が大切にしているのは、一撃で大きく勝つことよりも、根拠のない負けを少なくすることです。
      </p>
      <p>ただし、今の収支がプラスかマイナスかだけで判断するわけではありません。</p>
      <p>
        たとえ勝っていても、この先に期待値が残っているなら続ける。反対に、大きく負けていても、続ける根拠がなくなればやめる。
      </p>
      <div className="profile-quote">
        <p>今、勝っているか負けているかではなく、この先に期待値が残っているか。</p>
      </div>
      <p>
        そして、期待値がなくなったなら、やめる勇気を持つ。大事なことなので、もう一度言います。
        <span className="profile-emphasis">やめる勇気を持つ。</span>
      </p>

      <h2>やめた台が8,000枚出ても、判断は別の話</h2>
      <p>もちろん、自分がやめた台が、その後に爆発することもあります。</p>
      <p>私も、やめた台を別の人に3,000枚、5,000枚、さらには8,000枚出されたことがあります。</p>
      <WanchankunComment comment="さすがに8,000枚のときは、声が出ました（笑）" />
      <p>
        それでも、後から出たという結果だけを見て、「続けていればよかった」と考えるのは危険です。自分がやめた時点で、持っていた情報から根拠のある判断ができていたなら、その後の展開は別の話です。
      </p>
      <p>
        「もし続けていたら」「あのときやめなければ」という“たられば”は、判断から切り離すようにしています。
      </p>
      <p>
        見るべきなのは、やめた後に何枚出たかではありません。
        <span className="profile-emphasis">その時点の情報から、合理的な判断ができたかどうかです。</span>
      </p>
      <p>
        期待値を追うとは、出るまで打ち続けることではありません。根拠のある台を打ち、その根拠がなくなればやめる。その判断を感情に左右されず繰り返すことだと考えています。
      </p>

      <h2>収支表は、都合のよい記憶を防ぐために付ける</h2>
      <p>期待値を追うなら、収支表を付ける習慣も欠かせません。</p>
      <p>勝った日や大きく出た日は、よく覚えています。</p>
      <p>
        反対に、細かな負けや無駄打ちは、なぜか記憶から消えがちです。人間の記憶は、収支に関しては少し都合よくできています（笑）。
      </p>
      <p>だからこそ、次のような内容を記録します。</p>
      <div className="profile-callout">
        <ul>
          <li>投資額</li>
          <li>回収額</li>
          <li>打った機種</li>
          <li>その台を狙った根拠</li>
          <li>やめた理由</li>
        </ul>
      </div>
      <p>
        収支表は、単に勝ち負けを眺めるためのものではありません。本当に期待値のある行動を続けられているか、感情に流されて無駄打ちしていないかを振り返るためのものです。
      </p>
      <p>「期待値を追っているつもり」にならないためにも、立ち回りと収支を記録することが大切だと考えています。</p>

      <h2>ワンチャンくんが目指すもの</h2>
      <p>ワンチャンくんは、勝利や利益を保証するサイトではありません。</p>
      <p>
        掲載している情報も、実戦結果を保証するものではなく、台選びややめ時を考えるための判断材料です。
      </p>
      <p>一度の勝ち負けや派手な出玉に振り回されるのではなく、</p>
      <ul>
        <li>無駄打ちを減らす</li>
        <li>根拠のある台を選ぶ</li>
        <li>続ける理由がなくなればやめる</li>
        <li>長期的な視点で立ち回りを振り返る</li>
      </ul>
      <p>そのために役立つ情報を、できるだけ分かりやすくまとめていきます。</p>
      <p>ホールで「この台、どうだったかな」と迷ったときに、そっと開いてもらえるサイトを目指しています。</p>

      <h2>掲載情報について</h2>
      <p>
        掲載内容は、メーカーやホールなどの公式情報、公開されている解析情報、実戦・検証動画などを確認したうえで整理しています。
      </p>
      <p>
        ただし、機種の仕様、解析値、ホールの運用状況などは変更・更新される場合があります。実戦前には、最新情報もあわせてご確認ください。
      </p>
      <p>誤りや更新が必要な情報を見つけた場合は、お問い合わせページからお知らせいただけると助かります。</p>
      <p>
        なお、当サイトは収支・勝利・利益を保証するものではありません。パチスロには金銭的リスクがあるため、遊技は余裕資金の範囲内で行い、無理な投資や借入につながる行為は避けてください。詳しくは
        <Link href="/disclaimer">免責事項</Link>
        をご確認ください。
      </p>

      <div className="article-link-box">
        <p>
          掲載内容についてのご確認・ご連絡は、
          <Link href="/contact">お問い合わせページ</Link>
          からお願いします。
        </p>
      </div>

      <ShareButtons url={url} title={title} />
      <LineCta />
    </div>
  );
}
