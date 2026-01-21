# AGENTS.md - NAIKORE 開発ワークフロー

## プロジェクト概要

**NAIKORE** - 開発者向けの課題発見・マッチングアプリ
- Tinder スタイルのスワイプ UI で課題を発見
- 「I'LL BUILD IT」で課題にコミット
- XP ポイントでゲーミフィケーション

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 14 (App Router) |
| スタイリング | Tailwind CSS v4 + shadcn/ui |
| アニメーション | Framer Motion |
| アイコン | Lucide React |
| 言語 | TypeScript |
| デプロイ | Vercel |

## 開発フロー（Solo モード）

```
1. Plans.md でタスクを確認
2. 実装を進める
3. 完了したらマーカーを更新
4. 次のタスクへ
```

## ディレクトリ構成

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # ルートレイアウト
│   ├── page.tsx        # ホームページ
│   └── globals.css     # グローバルスタイル（サイバーパンクテーマ）
├── components/          # React コンポーネント
│   ├── ui/             # shadcn/ui コンポーネント
│   └── ...             # カスタムコンポーネント
├── lib/                # ユーティリティ
└── types/              # 型定義
```

## デザインシステム

### カラーパレット

| 名前 | 用途 | CSS 変数 |
|------|------|----------|
| Jet Black | 背景 | `--background` |
| Neon Lime | アクセント | `--primary`, `--neon` |
| White | テキスト | `--foreground` |
| Charcoal | カード背景 | `--card` |
| Gray | サブテキスト | `--muted-foreground` |

### ネオングロー効果

```tsx
// 使用例
<div className="neon-glow">...</div>      // 標準グロー
<div className="neon-glow-sm">...</div>   // 小さめ
<div className="neon-glow-lg">...</div>   // 大きめ
<div className="neon-border">...</div>    // ボーダーグロー
<span className="text-neon-glow">...</span> // テキストグロー
```

## コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run lint` | ESLint 実行 |

## 参考リンク

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
