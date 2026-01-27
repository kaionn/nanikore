# AGENTS.md - NAIKORE 開発ワークフロー

> **プロジェクト**: nanikore (NAIKORE)
> **作成日**: 2025-01-21
> **運用モード**: Solo

---


---

## 0. プロジェクト概要

**NAIKORE** - 開発者向けの課題発見・マッチングアプリ
- Tinder スタイルのスワイプ UI で課題を発見
- 「I'LL BUILD IT」で課題にコミット
- XP ポイントでゲーミフィケーション

## 0.1 開発ルール (必須)
- **言語**: エージェントとのやり取り、コメント、ドキュメントは全て **日本語** で行うこと。


---

## 1. 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | Next.js 14 (App Router) |
| スタイリング | Tailwind CSS v4 + shadcn/ui |
| アニメーション | Framer Motion |
| アイコン | Lucide React |
| 言語 | TypeScript |
| デプロイ | Vercel |

---

## 2. ファイル構成

| ファイル | 用途 | 説明 |
|---------|------|------|
| `AGENTS.md` | 開発フロー概要（このファイル） | プロジェクト固有の設定とワークフロー |
| `CLAUDE.md` | Claude Code 固有設定 | 技術スタック、コマンド、スタイルガイド |
| `docs/Plans.md` | タスク管理（インデックス） | 進行状況サマリー |
| `docs/plans/` | タスク詳細 | todo/wip/done にステータス別配置 |

---

## 3. 開発フロー（Solo モード）

```
1. docs/Plans.md でタスクを確認
2. 対象タスクファイルを docs/plans/wip/ に移動
3. 実装を進める（cc:WIP に変更）
4. 完了したら docs/plans/done/ に移動（cc:完了）
5. 次のタスクへ
```

---

## 4. タスク管理（docs/Plans.md）

### マーカー一覧

| マーカー | 意味 | 用途 |
|---------|------|------|
| `cc:TODO` | 未着手 | これから実装するタスク |
| `cc:WIP` | 作業中 | 現在実装中のタスク |
| `cc:完了` | 完了 | 実装が完了したタスク |
| `cc:blocked` | ブロック中 | 依存タスク待ちなど |

### 状態遷移

```
cc:TODO → cc:WIP → cc:完了
```

---

## 5. ディレクトリ構成

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

---

## 6. デザインシステム

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

---

## 7. コミットメッセージ規約

```
feat: 新機能
fix: バグ修正
docs: ドキュメント
refactor: リファクタリング
test: テスト
chore: その他
```

例: `feat: ユーザー認証機能を追加`

---

## 8. コマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | プロダクションビルド |
| `npm run lint` | ESLint 実行 |

---

## 9. 参考リンク

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)

---

*このドキュメントはハーネス v2.5.25 で更新されました。*
