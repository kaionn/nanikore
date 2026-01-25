# Plans.md - NAIKORE 開発計画

> **プロジェクト**: nanikore (NAIKORE)
> **更新日**: 2025-01-22
> **コンセプト**: 不満の共感プラットフォーム

---

## 本番 URL

**https://nanikore-zeta.vercel.app**

---

## コンセプト

- **キャッチコピー**: 「その不満、みんなで背負えばコンテンツ。」
- **コアバリュー**: 解決しなくていい。ただ「わかる」と言い合って、バグだらけの世界を笑い飛ばすデジタル・シェルター。

### スワイプアクション
| 方向 | アクション | スタンプ | カラー |
|------|------------|----------|--------|
| 右スワイプ | わかる (WAKARU) | 🤝 | ネオンライムグリーン (#CCFF00) |
| 左スワイプ | スルー (THROUGH) | 👋 | ネオンシアン (cyan-400) |

---

## 未着手 (TODO)

### フェーズ5: バックエンド構築

- [ ] Supabase プロジェクト作成 `cc:TODO`
- [ ] データベース設計 `cc:TODO`
  - ideas テーブル（id, title, tags, xp, created_at, user_id）
  - swipes テーブル（id, idea_id, user_id, direction, created_at）
  - users テーブル（Supabase Auth）
- [ ] Supabase クライアント設定 `cc:TODO`
- [ ] API ルート作成 `cc:TODO`
  - GET /api/ideas - アイデア一覧取得
  - POST /api/swipe - スワイプ記録

### フェーズ6: 認証機能

- [ ] Supabase Auth 設定 `cc:TODO`
- [ ] ログイン/サインアップ UI `cc:TODO`
- [ ] 匿名ユーザーでもスワイプ可能に `cc:TODO`

### フェーズ7: 投稿機能

- [ ] 投稿フォーム UI `cc:TODO`
- [ ] 140文字制限 `cc:TODO`
- [ ] タグ自動付与（AI or 手動選択） `cc:TODO`

### PC版 3カラムレイアウト

- [ ] 左サイドバー（ユーザーステータス/メニュー） `cc:TODO`
- [ ] 右サイドバー（ライブアクティビティ） `cc:TODO`
- [ ] キーボードショートカット（← NO / → YES） `cc:TODO`

---

## 進行中 (WIP)

（現在なし）

---

## 完了 (DONE)

### 共感プラットフォームへのピボット (2025-01-22)

- [x] I'LL BUILD IT ボタンの削除 `cc:完了`
  - フッターをクリーンに（ナビゲーションのみ）
- [x] スワイプスタンプの変更 `cc:完了`
  - LIKE → 「わかる (WAKARU)」🤝（ライムグリーン）
  - NOPE → 「スルー (THROUGH)」👋（シアン）
- [x] キャッチコピーの追加 `cc:完了`
  - 「その不満、みんなで背負えばコンテンツ。」

### UI/UX Refinement (2025-01-22)

- [x] スワイプアニメーションの調整 `cc:完了`
- [x] PC/デスクトップ表示の最適化 `cc:完了`
- [x] 不要なアクションテキストの削除・非表示化 `cc:完了`

### Design System & Theming

- [x] カラーパレットの完全適用 `cc:完了`
  - Background: Jet Black (#121212)
  - Card Background: Dark Gray (#1E1E1E)
  - Accent: Neon Lime Green (#CCFF00)
- [x] タイポグラフィの適用 `cc:完了`
  - 日本語: Noto Sans JP
  - 数字/XP: JetBrains Mono

### 基盤構築

- [x] Next.js プロジェクト初期化
- [x] shadcn/ui セットアップ
- [x] Framer Motion インストール
- [x] Vercel へデプロイ

---

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| Frontend | Next.js 16 (App Router), TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Backend | Supabase (予定) |
| Deploy | Vercel |

---

## マーカー凡例

| マーカー     | 状態       |
| ------------ | ---------- |
| `cc:TODO`    | 未着手     |
| `cc:WIP`     | 作業中     |
| `cc:完了`    | 完了       |
