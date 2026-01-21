# NAIKORE（ナイコレ）

> 開発者向け課題発見・マッチングアプリの UI モックアップ

サイバーパンク/ダークモードの美学で、Tinder スタイルのカードスワイプ UI を特徴としています。

## デモ

**https://nanikore-zeta.vercel.app**

## スクリーンショット

<!-- TODO: スクリーンショットを追加 -->

## 特徴

- **スワイプ UI** - Tinder 風のカードスワイプで課題をブラウズ
- **サイバーパンクテーマ** - ネオンライム × ダークモードの美学
- **レスポンシブ対応** - モバイル/タブレット/デスクトップに最適化
- **Framer Motion アニメーション** - スムーズなカード投げ飛ばしエフェクト

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 16 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS 4 |
| アニメーション | Framer Motion |
| アイコン | Lucide React |
| デプロイ | Vercel |

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーを起動
npm run dev
```

http://localhost:3000 でアプリが起動します。

## プロジェクト構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   └── globals.css     # テーマ定義
├── components/
│   ├── Header.tsx      # ヘッダー
│   ├── TabNav.tsx      # タブナビゲーション
│   ├── CardStack.tsx   # スワイプカードスタック
│   ├── IdeaCard.tsx    # アイデアカード
│   └── ActionButton.tsx # CTA ボタン
├── types/
│   └── idea.ts         # 型定義
└── data/
    └── mockIdeas.ts    # ダミーデータ
```

## 主な機能

### カードスワイプ

- 右スワイプ → LIKE（興味あり）
- 左スワイプ → NOPE（スキップ）
- ドラッグ中に回転・不透明度が変化

### カテゴリ

課題は以下のカテゴリで分類されます：

- 推し活
- 管理
- 効率化
- エンタメ
- 学習
- 健康

### タブ切り替え

- トレンド - 人気の課題
- 新着 - 最近投稿された課題
- 解決済み - 誰かが解決した課題

## コマンド

```bash
npm run dev     # 開発サーバー起動
npm run build   # プロダクションビルド
npm run start   # プロダクションサーバー起動
npm run lint    # ESLint 実行
```

## ライセンス

MIT
