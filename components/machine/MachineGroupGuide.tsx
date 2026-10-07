import Link from "next/link";
import { Machine } from "@/lib/content/schema";

const GROUP_INTROS: Record<string, string> = {
  "maker:yamasa":
    "山佐のパチスロ機種をまとめたページです。モンキーターンV、パリピ孔明、ミリオンライブなど、設定変更時に天井が短縮される機種を中心に、朝イチで確認したいポイントを各機種ページで確認できます。",
  "maker:sammy":
    "サミーのパチスロ機種をまとめたページです。新台のスマスロ獣王やリコリス・リコイル、回胴黙示録カイジ 狂宴、北斗の拳シリーズ、化物語、攻殻機動隊など、設定変更後の天井短縮やモード優遇といった朝イチ狙いのポイントを機種ごとに整理しています。",
  "maker:daito":
    "大都技研のパチスロ機種をまとめたページです。押忍!番長3、押忍!サラリーマン番長2、Lいざ!番長などの番長シリーズのほか、吉宗、秘宝伝、リゼロ2など、設定変更後の天井短縮やモード優遇といった朝イチ狙いのポイントを機種ごとに整理しています。",
  "maker:enta":
    "エンターライズのパチスロ機種をまとめたページです。スマスロ モンスターハンターライズ（サンブレイクを含む）、バイオハザード、デビル メイ クライ5、鬼武者3など、天井や設定変更時の挙動を機種ごとに整理しています。",
  "maker:konami":
    "コナミアミューズメントのパチスロ機種をまとめたページです。戦国コレクション6、麻雀格闘倶楽部 覚醒、マジカルハロウィン8、転生したら剣でした、七つの魔剣が支配するなどの朝イチ・天井情報を機種ごとに整理しています。",
  "maker:newgin":
    "ニューギンのパチスロ機種をまとめたページです。L無職転生、Lゴジラ、スマスロワンパンマンなど、設定変更後の天井短縮やモード優遇といった朝イチ狙いのポイントを機種ごとに整理しています。",
  "maker:spiky":
    "スパイキーのパチスロ機種をまとめたページです。L東京喰種、Lダーリン・イン・ザ・フランキス、L絶対衝激Ⅳなど、設定変更後の天井短縮やモード優遇といった朝イチ狙いのポイントを機種ごとに整理しています。",
  "series:banchou":
    "番長シリーズの機種をまとめたページです。押忍!番長3、押忍!サラリーマン番長2、Lいざ!番長を、設定変更後の天井短縮や朝イチの挙動で見比べられます。機種ごとに天井・仕様が大きく異なるため、混同しないよう各機種ページの注意書きも確認してください。",
};

function firstSentence(text: string, max = 120): string {
  const end = text.indexOf("。");
  const s = end === -1 ? text : text.slice(0, end + 1);
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

export default function MachineGroupGuide({
  kind,
  slug,
  name,
  machines,
}: {
  kind: "maker" | "series";
  slug: string;
  name: string;
  machines: Machine[];
}) {
  if (machines.length === 0) return null;
  const intro =
    GROUP_INTROS[`${kind}:${slug}`] ??
    `${name}の機種ごとに、朝イチのリセット恩恵・天井・やめどきを確認できるページです。`;
  const picks = machines.filter((m) => m.asaichiCheck).slice(0, 5);

  return (
    <>
      <p className="section-note">{intro}</p>
      {picks.length > 0 && (
        <section>
          <h2>朝イチで確認したいポイント</h2>
          <ul>
            {picks.map((m) => (
              <li key={m.slug}>
                <Link href={`/machines/${m.slug}`}>{m.name}</Link>
                ：{firstSentence(m.asaichiCheck as string)}
              </li>
            ))}
          </ul>
        </section>
      )}
      <h2>{name}の機種（{machines.length}機種）</h2>
    </>
  );
}

export function MachineGroupFooter() {
  return (
    <section>
      <h2>この一覧の使い方</h2>
      <p>
        各機種ページでは、設定変更（リセット）時の天井・モード・ゾーンの変化、朝イチに確認できる情報、やめどきを整理しています。
        情報は公開されている解析や実戦報告をもとにしており、確認できていない内容は「未確認」と明記しています。
        ほかの機種は<Link href="/machines">機種一覧</Link>、導入直後の話題は<Link href="/articles/petit-news">プチニュース</Link>から探せます。
      </p>
    </section>
  );
}
