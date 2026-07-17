// Mandatory disclosure shown near the top of every Coming Soon machine page.
// Text is intentionally fixed (not per-machine-customizable) per site policy
// -- every pre-release page must carry the exact same disclaimer.
export default function ComingSoonNotice() {
  return (
    <section className="card coming-soon-notice" aria-label="導入前情報に関する注意">
      <p>
        本ページは導入前に公開されている情報をもとに作成しています。
        実際の導入後に解析情報が変更・追加される場合があります。
        0Gからの金額期待値は確認できていません。
      </p>
    </section>
  );
}
