# CLAUDE.md - NAIKORE プロジェクト設定

## プロジェクト概要

NAIKORE は開発者向けの課題発見・マッチングアプリの UI モックアップです。
サイバーパンク/ダークモードの美学で、Tinder スタイルのカードスワイプ UI を特徴としています。

## 技術スタック

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS v4 + shadcn/ui
- Framer Motion（アニメーション）
- Lucide React（アイコン）

## 開発ルール

### コーディング規約

- TypeScript の厳格な型チェックを維持
- コンポーネントは関数コンポーネント + hooks を使用
- 命名: PascalCase（コンポーネント）、camelCase（関数/変数）

### スタイリング

- Tailwind CSS のユーティリティクラスを優先
- カスタムクラスは `globals.css` に追加
- サイバーパンクテーマを維持（ネオンライム + ダークモード）

### ネオングロー効果

```tsx
// 利用可能なユーティリティ
className="neon-glow"      // 標準グロー
className="neon-glow-sm"   // 小さめ
className="neon-glow-lg"   // 大きめ
className="neon-border"    // ボーダーグロー
className="text-neon-glow" // テキストグロー
```

### カラー

```tsx
// 主要な色
className="text-primary"     // ネオンライム
className="bg-primary"       // ネオンライム背景
className="bg-card"          // カード背景
className="text-muted-foreground" // サブテキスト
```

## ファイル構成

```
src/
├── app/
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # メインページ
│   └── globals.css     # テーマ定義
├── components/
│   ├── ui/            # shadcn/ui（自動生成）
│   ├── Header.tsx     # ヘッダー
│   ├── TabNav.tsx     # タブナビゲーション
│   ├── CardStack.tsx  # スワイプカードスタック
│   ├── IdeaCard.tsx   # アイデアカード
│   └── ActionButton.tsx # CTA ボタン
├── lib/
│   └── utils.ts       # ユーティリティ
├── types/
│   └── idea.ts        # 型定義
└── data/
    └── mockIdeas.ts   # ダミーデータ
```

## コマンド

```bash
npm run dev     # 開発サーバー (http://localhost:3000)
npm run build   # ビルド
npm run lint    # Lint チェック
```

## 注意事項

- UI はモバイルファースト（レスポンシブ対応）
- 言語はミックス（日本語 UI + 英語 CTA）
- ダミーデータで動作確認（バックエンドなし）
