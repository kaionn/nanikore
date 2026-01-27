# Plans.md - NAIKORE 開発計画

> **プロジェクト**: nanikore (NAIKORE)
> **更新日**: 2025-01-27
> **コンセプト**: 不満の共感プラットフォーム

---

## 本番 URL

**https://nanikore-zeta.vercel.app**

---

## コンセプト

- **キャッチコピー**: 「その不満、みんなで背負えばコンテンツ。」
- **コアバリュー**: 解決しなくていい。ただ「わかる」と言い合って、バグだらけの世界を笑い飛ばすデジタル・シェルター。

### スワイプアクション

| 方向       | アクション       | スタンプ | カラー                         |
| ---------- | ---------------- | -------- | ------------------------------ |
| 右スワイプ | わかる (WAKARU)  | 🤝       | ネオンライムグリーン (#CCFF00) |
| 左スワイプ | スルー (THROUGH) | 👋       | ネオンシアン (cyan-400)        |

---

## 進行状況サマリー

### 🔴 進行中 (WIP)

現在なし

### 🟡 未着手 (TODO)

| ファイル                                                        | フェーズ/機能                 | タスク数 |
| --------------------------------------------------------------- | ----------------------------- | -------- |
| [phase5-backend.md](plans/todo/phase5-backend.md)               | バックエンド構築              | 4        |
| [phase6-auth.md](plans/todo/phase6-auth.md)                     | 認証機能                      | 3        |
| [phase7-post.md](plans/todo/phase7-post.md)                     | 投稿機能                      | 3        |
| [pc-3column-layout.md](plans/todo/pc-3column-layout.md)         | PC版3カラム                   | 3        |

### 🟢 完了 (DONE)

| ファイル                                                          | フェーズ/機能                    | 完了日     |
| ----------------------------------------------------------------- | -------------------------------- | ---------- |
| [mobile-and-web-layout.md](plans/done/mobile-and-web-layout.md)   | Webとモバイルレイアウトの構築    | 2026-01-27 |
| [pivot-empathy-platform.md](plans/done/pivot-empathy-platform.md) | 共感プラットフォームへのピボット | 2025-01-22 |
| [ui-ux-refinement.md](plans/done/ui-ux-refinement.md)             | UI/UX Refinement                 | 2025-01-22 |
| [design-system.md](plans/done/design-system.md)                   | Design System & Theming          | -          |
| [foundation.md](plans/done/foundation.md)                         | 基盤構築                         | -          |

---

## 技術スタック

| カテゴリ  | 技術                                |
| --------- | ----------------------------------- |
| Frontend  | Next.js 16 (App Router), TypeScript |
| Styling   | Tailwind CSS 4                      |
| Animation | Framer Motion                       |
| Backend   | Supabase (予定)                     |
| Deploy    | Vercel                              |

---

## マーカー凡例

| マーカー  | 状態   |
| --------- | ------ |
| `cc:TODO` | 未着手 |
| `cc:WIP`  | 作業中 |
| `cc:完了` | 完了   |

---

## ディレクトリ構造

```
docs/
├── Plans.md              # このファイル（インデックス）
└── plans/
    ├── todo/             # 未着手タスク
    ├── wip/              # 進行中タスク
    └── done/             # 完了タスク
```

タスクのステータスが変わったら、該当ファイルを適切なディレクトリに移動してください。
