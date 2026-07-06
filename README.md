# slot-reset-guide

パチスロの「朝イチリセット情報」特化型SEOメディアです。Next.js（App Router）+ TypeScriptで構築しています。

## サイト概要

- 機種別に、リセット恩恵・判別方法・朝イチの狙い目・天井/ゾーン情報・やめどき・参考動画（出典明記）・実践データ（自社一次情報）を整理して掲載します
- コンテンツはYouTube公式埋め込み＋出典明記、自社実践データとの分離表示など、AdSenseポリシー・E-E-A-Tを考慮したテンプレート構造になっています
- 現在はフェーズ1（機種詳細ページのデータモデル・テンプレート）のみ実装済みです。ランキング/ホール別/動画一覧/広告実配信等は今後のフェーズで追加予定です

## ディレクトリ構成

- `app/`：ページ（トップ、`/beginner`、`/disclaimer`、`/privacy`、`/machines/[slug]`）
- `components/`：サイト共通レイアウト（`site/`）、機種ページ用セクション（`machine/`）、SEO用JSON-LD（`seo/`）、広告枠プレースホルダー（`ads/`）
- `content/`：機種データ（`machines/*.json`）、メーカー/シリーズのマスタデータ（`makers.json` / `series.json`）
- `lib/content/`：コンテンツのZodスキーマとデータアクセス層（将来ヘッドレスCMSに差し替え可能な設計）
- `lib/seo/`：構造化データ（JSON-LD）のビルダー
- `scripts/check-compliance.mjs`：禁止ワード（「必勝」「絶対勝てる」等）を機種データから検出するビルド前チェック
- `styles/globals.css`：共通スタイル

## ローカル開発

```bash
npm install
npm run dev
```

http://localhost:3000 で確認できます。

## ビルド

```bash
npm run build
```

`next build` の前に `npm run check:compliance` が自動実行され、機種データに禁止ワードが含まれていないか検証します。

## 機種コンテンツの追加

`content/machines/` に1機種1ファイルのJSONを追加します（`lib/content/schema.ts` のZodスキーマに従います）。`referenceVideos` の `channelName` / `channelUrl` / `originalAnalysis` は必須項目で、出典明記と自社考察の付加を構造的に強制しています。

## デプロイ（Vercel）

1. [Vercel](https://vercel.com/) にログインし、このGitHubリポジトリをインポートする
2. Framework Presetは自動的に `Next.js` が検出されます（追加設定は不要）
3. デプロイ後、`main` ブランチへのpushで自動的に再デプロイされます
4. 本番ドメインが決まったら、`lib/site.ts` の `SITE_URL`（または環境変数 `NEXT_PUBLIC_SITE_URL`）を更新してください（構造化データの `mainEntityOfPage` 等に使用）

※ GitHub Pagesでの静的公開は廃止し、Vercelでのホスティングに移行しました。
