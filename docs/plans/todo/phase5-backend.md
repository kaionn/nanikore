# フェーズ5: バックエンド構築

> **ステータス**: 未着手
> **優先度**: 高
> **依存**: なし

---

## 概要

Supabase を使用したバックエンド基盤の構築。データベース設計から API ルートの作成まで。

---

## タスク

- [ ] Supabase プロジェクト作成 `cc:TODO`
- [ ] データベース設計 `cc:TODO`
  - ideas テーブル（id, title, tags, xp, created_at, user_id）
  - swipes テーブル（id, idea_id, user_id, direction, created_at）
  - users テーブル（Supabase Auth）
- [ ] Supabase クライアント設定 `cc:TODO`
- [ ] API ルート作成 `cc:TODO`
  - GET /api/ideas - アイデア一覧取得
  - POST /api/swipe - スワイプ記録

---

## 技術メモ

- Supabase は PostgreSQL ベース
- Row Level Security (RLS) でセキュリティ確保
- Next.js App Router の Route Handlers を使用
