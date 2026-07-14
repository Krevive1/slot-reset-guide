import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import Breadcrumbs from "@/components/site/Breadcrumbs";
import LineCta from "@/components/site/LineCta";
import ShareButtons from "@/components/site/ShareButtons";
import AffiliateProductBox from "@/components/site/AffiliateProductBox";
import GomaiYakuCalculator from "@/components/articles/GomaiYakuCalculator";
import { buildBreadcrumbJsonLd, buildGenericArticleJsonLd } from "@/lib/seo/jsonld";
import { SITE_URL, buildAmazonSearchUrl } from "@/lib/site";

const title = "モンキーターンVの5枚役とは？設定差・数え方・計算方法を初心者向けに解説";
const description =
  "スマスロモンキーターンVの5枚役について、何を数える役なのか、通常時・AT中の数え方、サブ液晶での総ゲーム数の確認手順、出現率の計算方法を初心者向けに解説します。";
const url = `${SITE_URL}/articles/monkey-turn-v-5mai-yaku`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    type: "article",
  },
};

const rateTable: { setting: string; rate: string }[] = [
  { setting: "設定1", rate: "1/38.15" },
  { setting: "設定2", rate: "1/36.86" },
  { setting: "設定4", rate: "1/30.27" },
  { setting: "設定5", rate: "1/24.51" },
  { setting: "設定6", rate: "1/22.53" },
];

const averageTable: { setting: string; g500: string; g1000: string; g2000: string }[] = [
  { setting: "設定1", g500: "約13.1回", g1000: "約26.2回", g2000: "約52.4回" },
  { setting: "設定2", g500: "約13.6回", g1000: "約27.1回", g2000: "約54.3回" },
  { setting: "設定4", g500: "約16.5回", g1000: "約33.0回", g2000: "約66.1回" },
  { setting: "設定5", g500: "約20.4回", g1000: "約40.8回", g2000: "約81.6回" },
  { setting: "設定6", g500: "約22.2回", g1000: "約44.4回", g2000: "約88.8回" },
];

export default function MonkeyTurnVGomaiYakuArticlePage() {
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
        items={[{ name: "トップ", href: "/" }, { name: title, href: "/articles/monkey-turn-v-5mai-yaku" }]}
      />

      <div className="article">
        <h1 className="page-title">{title}</h1>

        <h2>5枚役とは何か</h2>
        <p>
          5枚役とは、スマスロモンキーターンVで成立する、払い出し5枚の小役のことです。中段リプ・リプ・ベルなど複数の停止形があり、
          払い出し音が鳴らないため、リールの停止形やサブ液晶のセグ表示（払い出し枚数「5」）で確認する必要があります。
        </p>

        <h2>なぜ設定推測の参考になるのか</h2>
        <p>
          5枚役は、設定（設定1〜6）によって出現率が異なるとされる役です。高設定ほど出現しやすいとする情報が複数の解析サイトで共有されており、
          自分で成立回数を数えることで、設定推測の材料の一つとして活用されています。
        </p>
        <p>
          ただし、この機種には設定3が存在しません（設定1・2・4・5・6の5段階）。数値の詳しい確度や注意点は、後述の「設定別確率との比較」で説明します。
        </p>

        <h2>通常時とAT中の両方で数えること</h2>
        <p>
          5枚役は、通常時・AT中を問わず同じ確率で成立するとされています。そのため、通常時だけでなくAT消化中に成立した分もあわせてカウントします。
          AT中だからといって数え忘れると、実際の出現率より少なく見積もってしまうため注意してください。
        </p>

        <h2>朝イチから数える意味</h2>
        <p>
          5枚役の成立回数は、自分で数えて記録しておかない限り、あとから振り返ることはできません。朝イチ0Gから数え始めておけば、
          その日の総ゲーム数と成立回数をそのまま計算に使えます。
        </p>
        <p>
          途中の台に座った場合でも数えること自体はできますが、その場合は計算方法が変わります。詳しくは後述の「途中からカウントした場合の計算」で説明します。
        </p>

        <h2>5枚役成立回数の記録方法</h2>
        <p>
          5枚役が成立するたびに、自分で回数を1つずつ記録します。スマートフォンのメモやカウントアプリでも記録できますし、
          画面を見ずに操作したい場合は、カチカチくんのような手持ちの小役カウンターを使う方法もあります（後述）。
        </p>

        <h2>サブ液晶で総ゲーム数を確認する手順</h2>
        <p>
          5枚役の出現率を計算するには、自分で数えた成立回数に加えて「総ゲーム数」が必要です。サブ液晶の遊技データメニューから確認できます。
        </p>
        <div className="gomaiyaku-flow" aria-label="サブ液晶の操作手順">
          <div className="gomaiyaku-flow-step">1. サブ液晶上部の「MENU」を押す</div>
          <span className="gomaiyaku-flow-arrow" aria-hidden="true">↓</span>
          <div className="gomaiyaku-flow-step">2. 「遊技データ」を押す</div>
          <span className="gomaiyaku-flow-arrow" aria-hidden="true">↓</span>
          <div className="gomaiyaku-flow-step">3. 「総ゲーム数」を確認する</div>
          <span className="gomaiyaku-flow-arrow" aria-hidden="true">↓</span>
          <div className="gomaiyaku-flow-step">4. 自分で記録した5枚役回数と組み合わせて計算する</div>
        </div>
        <p className="section-note">
          上記は目安の操作手順です。表示メニューの名称や階層は、台の設定やホールの仕様によって多少異なる場合があります。
        </p>

        <h2>5枚役出現率の計算方法</h2>
        <p>
          5枚役の出現率は、分母を「通常ゲーム数」ではなく「総ゲーム数（通常時＋AT中の合計）」として計算します。計算式は次のとおりです。
        </p>
        <p>
          <strong>総ゲーム数 ÷ 5枚役回数 ＝ 5枚役出現率の分母</strong>
        </p>
        <p>
          例：総ゲーム数1000G、5枚役40回の場合<br />
          1000 ÷ 40 ＝ 25<br />
          5枚役出現率：約1/25
        </p>

        <h3>計算フォーム</h3>
        <p className="section-note">
          総ゲーム数と5枚役回数を入力すると、出現率を自動で計算します。入力内容は送信・保存されず、この画面の中だけで計算されます。
        </p>
        <GomaiYakuCalculator />

        <h2>途中からカウントした場合の計算</h2>
        <p>
          朝イチ0Gから数えた場合は、確認時点の総ゲーム数をそのまま計算に使えます。一方、途中の台に座って数え始めた場合は、
          カウントを開始した時点の総ゲーム数を確認しておき、次の計算で自分がカウントした区間のゲーム数を求めます。
        </p>
        <p>
          <strong>確認時の総ゲーム数－カウント開始時の総ゲーム数 ＝ 自分がカウントした区間のゲーム数</strong>
        </p>
        <p>
          例：カウント開始時1200G、確認時2200G、その間の5枚役35回の場合<br />
          2200－1200＝1000G<br />
          1000÷35＝約28.6<br />
          5枚役出現率：約1/28.6
        </p>
        <div className="article-link-box">
          <p>
            <strong>注意：</strong>
            前任者が回したゲーム数と、自分が数えた5枚役の回数を組み合わせて計算しないでください。
            自分がカウントを開始した時点より前の総ゲーム数・成立回数は、正確に把握できないためです。
            必ず「自分がカウントを開始した時点の総ゲーム数」を基準にしてください。
          </p>
        </div>

        <h2>設定別確率との比較</h2>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>設定</th>
                <th>5枚役出現率</th>
              </tr>
            </thead>
            <tbody>
              {rateTable.map((row) => (
                <tr key={row.setting}>
                  <td>{row.setting}</td>
                  <td>{row.rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="section-note">
          以下の数値はメーカー公式の公表値として確認できたものではなく、SNSや解析情報サイトで共有されている非公式情報です。設定推測の参考値としてご覧ください。
        </p>
        <p>
          この数値は複数のサイトで同じ形式で共有されていますが、元の情報がどこから出たのかを明記しているサイトは見つかっておらず、
          「情報のソースが不明」と明記した上でこの数値を紹介しているサイトもあります。
          また、別の実戦データをもとにした推定値（設定1で約1/40、設定4で約1/29、設定5で約1/25、設定6で約1/23など）も存在し、
          細部は上記の数値と一致していません。いずれも公式値ではなく、参考情報の一つとしてご覧ください。
        </p>
        <p>
          また、5枚役は解析サイトが公開しているこの機種の公式形式の小役確率表（全設定共通と明記された表）には掲載されておらず、
          設定差の情報はいずれも非公式な形で共有されているものです。
        </p>

        <h3>理論上の平均回数</h3>
        <div className="article-table-wrap">
          <table>
            <thead>
              <tr>
                <th>設定</th>
                <th>500G</th>
                <th>1,000G</th>
                <th>2,000G</th>
              </tr>
            </thead>
            <tbody>
              {averageTable.map((row) => (
                <tr key={row.setting}>
                  <td>{row.setting}</td>
                  <td>{row.g500}</td>
                  <td>{row.g1000}</td>
                  <td>{row.g2000}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="section-note">
          上記は各確率から算出した理論上の平均回数です。実際の出現回数は短時間では大きく上下し、この回数だけで設定を確定できるものではありません。
        </p>

        <h2>5枚役だけで設定を断定しない注意点</h2>
        <ul>
          <li>短時間・少ないゲーム数では、出現率が理論値から大きく偏ることがあります。</li>
          <li>上記の設定別確率は非公式情報であり、数値そのものの確度が確認できていません。</li>
          <li>5枚役の回数だけで設定を断定せず、終了画面・初当たり・直撃などの他の情報とあわせて判断してください。</li>
          <li>5枚役は設定推測の要素であり、リセット（設定変更）そのものを判別する要素ではありません。</li>
        </ul>

        <h2>自分でも5枚役を数えてみたい人へ</h2>
        <p>
          5枚役の成立回数は、誰かが自動で記録してくれるものではなく、自分で数える必要があります。スマートフォンのカウントアプリでも記録できますが、
          画面操作を減らしたい場合は、カチカチくんのような手持ちの小役カウンターを使う方法もあります。
        </p>
        <p>
          カチカチくんは必須の道具ではありません。また、使用したからといって高設定や勝利が保証されるわけでもない点にご注意ください。
        </p>
        <p>
          <Link href="/articles/kachikachi-kun">カチカチくん（小役カウンター）の使い方と選び方</Link>
        </p>

        <div className="product-box-grid">
          <AffiliateProductBox
            provider="Amazon"
            name="カチカチくん（小役カウンター）"
            note="スマートフォンではなく、ボタン操作で5枚役を記録したい人向けです。価格や在庫は変動するため、商品ページで最新情報をご確認ください。"
            ctaLabel="カチカチくんをAmazonで探す"
            ctaHref={buildAmazonSearchUrl("カチカチくん")}
          />
        </div>

        <div className="article-link-box">
          <p>
            モンキーターンVの朝イチリセット恩恵や天井については、
            <Link href="/machines/monkey-turn-v">スマスロモンキーターンVの機種ページ</Link>
            で整理しています。
          </p>
          <ul>
            <li><Link href="/beginner">朝一リセットとは？初心者向け解説</Link></li>
            <li><Link href="/articles/asaichi-benri-guzzu">朝一待ち・実戦に便利な持ち物まとめ</Link></li>
          </ul>
        </div>

        <ShareButtons url={url} title={title} />
        <LineCta />
      </div>
    </article>
  );
}
