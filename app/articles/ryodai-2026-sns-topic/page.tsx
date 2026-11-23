import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import TweetEmbed from "@/components/site/TweetEmbed";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import StickyBottomBanner from "@/components/site/StickyBottomBanner";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { getActiveAffiliateOffer } from "@/lib/affiliate/offers";
import { SITE_URL } from "@/lib/site";
import WanchankunComment from "@/components/machine/WanchankunComment";

const title =
  "「2026年の良台は？」がXで話題｜戦国乙女5・SAO2・真打吉宗など、挙がった機種と賛否を整理";
const description =
  "パチンコ・パチスロ.comの「2026年に出た良台は？」という投稿に、返信で多くの機種名が挙がっています。どの機種がよく名前を挙げられ、どんな賛否があったかを、特定の機種を評価・断定しない形で整理しました。";
const url = `${SITE_URL}/articles/ryodai-2026-sns-topic`;
const heroImage = "/images/articles/ryodai-2026-sns-topic.png";
const publishedAt = "2026-11-23";

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

export default function Ryodai2026SnsTopicPage() {
  const foodOffer = getActiveAffiliateOffer("amazonFoodDrink");
  const vodOffer = getActiveAffiliateOffer("abemaPremium");
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
        items={[
          { name: "トップ", href: "/" },
          { name: title, href: "/articles/ryodai-2026-sns-topic" },
        ]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>
        <p className="updated-at">公開日：{publishedAt}</p>

        <div className="thumbnail">
          <Image
            src={heroImage}
            alt="2026年の良台は？という話題でスロット台とトロフィーが並ぶイメージ"
            fill
            sizes="(max-width: 720px) 100vw, 720px"
            style={{ objectFit: "cover" }}
          />
        </div>

        <p>
          2026年11月22日、業界情報アカウントの「パチンコ・パチスロ.com」が「あなたにとっての2026年に出た良台は？」とXに投稿し、約16万回表示されています（11月23日確認時点）。
          返信には、ユーザーが挙げた機種名が数多く並んでいます。
          同じ日には、「パーラーフルスロットル」も5ちゃんねるの書き込みをまとめた記事「今年の良台は真打吉宗とSAO2？」を紹介し、約10万回表示されました。
        </p>
        <p>
          この記事では、どんな機種がよく名前を挙げられていたか、どんな賛否があったかを、特定の機種を評価・断定しない形で整理します。
        </p>

        <h2>何が話題になっているのか</h2>
        <p>
          「パチンコ・パチスロ.com」の投稿は、2026年のパチスロ業界について厳しい見方があることに触れたうえで、「逆に良台は何だったか」と意見を募る内容です。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/pachicom777/status/2124428421505953856"
          authorName="パチンコ・パチスロ.com"
        />
        <p>
          パーラーフルスロットルは、5ちゃんねるの書き込みをもとに、真打吉宗とSAO2を軸に、戦コレ6・乙女5・ゴジエヴァ2なども候補に挙がったと紹介しています。
          一方で「スマスロは基本的にヒット台が少ない」という辛口の意見もあわせて載せています。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/parlourful/status/2124246472489410652"
          authorName="パーラーフルスロットル"
        />

        <h2>返信でよく名前が挙がった機種</h2>
        <p>
          筆者が確認できた返信（表示された約40件）の範囲では、次の機種が複数の投稿で名前を挙げられていました。
          全返信を集計したものではなく、順位づけでもありません。件数は、あくまで確認できた範囲での目安です。
        </p>
        <ul>
          <li><Link href="/machines/sengoku-otome-5">L戦国乙女5</Link>：確認できた範囲で最も多く名前が挙がっていました。</li>
          <li><Link href="/machines/maho-akogarete">L魔法少女にあこがれて</Link>：ゾーンやリーチ目などの作りを挙げる声がありました。</li>
          <li><Link href="/machines/world-dai-star">スロット ワールドダイスター</Link>：「世間的には微妙でも個人的には」と、好みで挙げる声がありました。</li>
          <li><Link href="/machines/jashin-chan-dropkick">L邪神ちゃんドロップキック</Link>：「面白い」という声と、導入店の少なさに触れる声がありました。</li>
          <li><Link href="/machines/sword-art-online-2">スロット ソードアート・オンラインII</Link>：肯定的な声がある一方、筐体の役物には評価が分かれていました。</li>
          <li><Link href="/machines/shinuchi-yoshimune">L真打吉宗</Link>：「引けば当たる」という評価がある一方、通常時の面白さには意見が分かれていました。</li>
          <li><Link href="/machines/toaru-majutsu-no-index-2">スマスロ とある魔術の禁書目録2</Link>：「大好き」という声がありました。</li>
        </ul>
        <p>
          このほか、うみねこ2、青ブタ、ガンゲイル、マイジャグラー6、サンブレイクなども、それぞれ複数の返信で挙がっていました。
        </p>

        <h2>実際の返信の例</h2>
        <p>
          複数の機種を並べて挙げる返信や、機種ごとに評価を書き分ける返信が目立ちました。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/BIVvtP30pQqsWqO/status/2124633074910781814"
          authorName="ラーゴム"
        />
        <TweetEmbed
          tweetUrl="https://x.com/harappa_man/status/2124456977397059729"
          authorName="原っぱ♂"
        />
        <TweetEmbed
          tweetUrl="https://x.com/777_777zzz/status/2124497400945660235"
          authorName="ぬるま湯につかりたい"
        />
        <TweetEmbed
          tweetUrl="https://x.com/SPKslotschool/status/2124433295274598435"
          authorName="札幌回胴式遊戯専門学校"
        />
        <TweetEmbed
          tweetUrl="https://x.com/mujyou0000/status/2124584258719322497"
          authorName="め　アホスロ日記"
        />

        <h2>賛否が分かれた点</h2>
        <p>
          同じ機種でも、評価が分かれる投稿がありました。たとえば真打吉宗には、「引けば当たる」という評価がある一方、「面白いのは真高確のときで、それ以外は微妙」という声もあります。
        </p>
        <TweetEmbed
          tweetUrl="https://x.com/3x4farm/status/2124513142218924524"
          authorName="3×4牧場"
        />
        <p>
          「良台」の基準は、出玉の出やすさ、演出の面白さ、遊びやすさ、稼働の良さなど、人によって異なります。
          記事内の機種名は、あくまでXの投稿で名前が挙がったものです。機種の優劣を決めるものではありません。
        </p>
        <p className="section-note">
          上記はXの投稿と、それを紹介する記事に基づく整理です。評価は投稿者個人の感想であり、本記事の見解ではありません。
        </p>

        <WanchankunComment>
          <span className="wanchankun-comment-para">
            同じ「良台」でも、出玉を重視する人と、遊びやすさや演出を重視する人で、挙げる機種が変わるんだね🐶
            気になった機種は、機種ページで朝イチや天井の情報もチェックしてみてワン。
          </span>
          <span className="wanchankun-comment-para">
            みんなの「2026年の1台」は何かな？ 理由もあわせて、ぜひ教えてほしいワン！
          </span>
        </WanchankunComment>
        <div className="product-box-grid product-box-grid--single">
          {foodOffer && (
            <AffiliateProductBox
              provider={foodOffer.provider}
              name={foodOffer.serviceName}
              note={foodOffer.description ?? "詳細はリンク先でご確認ください。"}
              ctaLabel={foodOffer.ctaLabel}
              ctaHref={foodOffer.href}
              disclosure={foodOffer.disclosure}
              offerType={foodOffer.offerType}
              serviceName={foodOffer.serviceName}
              imageSrc={foodOffer.imageSrc}
              placement="mid_article"
              affiliateProgram={foodOffer.programName}
            />
          )}
        </div>
        <StickyBottomBanner offer={vodOffer} />

        <div className="article-link-box">
          <p>
            朝一リセット・リセット恩恵の基礎については、
            <Link href="/beginner">朝一リセットとは？初心者向け解説</Link>
            で整理しています。
          </p>
        </div>

        <h2>この記事で挙がった機種のページ</h2>
        <p className="section-note">
          朝イチのリセット情報や天井・設定変更の情報は、各機種ページにまとめています。
        </p>
        <ul>
          <li><Link href="/machines/sengoku-otome-5">L戦国乙女5</Link></li>
          <li><Link href="/machines/maho-akogarete">L魔法少女にあこがれて</Link></li>
          <li><Link href="/machines/world-dai-star">スロット ワールドダイスター</Link></li>
          <li><Link href="/machines/jashin-chan-dropkick">L邪神ちゃんドロップキック</Link></li>
          <li><Link href="/machines/sword-art-online-2">スロット ソードアート・オンラインII</Link></li>
          <li><Link href="/machines/shinuchi-yoshimune">L真打吉宗</Link></li>
          <li><Link href="/machines/toaru-majutsu-no-index-2">スマスロ とある魔術の禁書目録2</Link></li>
        </ul>

        <h2>参考情報</h2>
        <p className="section-note">
          本記事は、以下のXポスト・紹介記事を参考に作成しました。埋め込みポストの内容は各投稿者・アカウント自身の発言であり、本記事の見解ではありません。
        </p>
        <ul>
          <li>
            <a
              href="https://x.com/pachicom777/status/2124428421505953856"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・パチスロ.com（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/parlourful/status/2124246472489410652"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/BIVvtP30pQqsWqO/status/2124633074910781814"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ラーゴム（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/harappa_man/status/2124456977397059729"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              原っぱ♂（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/777_777zzz/status/2124497400945660235"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              ぬるま湯につかりたい（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/SPKslotschool/status/2124433295274598435"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              札幌回胴式遊戯専門学校（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/mujyou0000/status/2124584258719322497"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              め　アホスロ日記（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://x.com/3x4farm/status/2124513142218924524"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              3×4牧場（Xの投稿）
            </a>
          </li>
          <li>
            <a
              href="https://parlourfullslotl.com/archives/201483"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パーラーフルスロットル：今年の良台は真打吉宗とSAO2？
            </a>
          </li>
          <li>
            <a
              href="https://pachinkopachisro.com/archives/11571/"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              パチンコ・パチスロ.com：あなたにとっての2026年に出た良台は？
            </a>
          </li>
        </ul>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
