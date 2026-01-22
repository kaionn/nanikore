# Plans.md - NAIKORE 開発計画

> **プロジェクト**: nanikore (NAIKORE)
> **更新日**: 2026-01-22
> **ハーネスバージョン**: 2.5.25

---

## 本番 URL

**https://nanikore-zeta.vercel.app**

---

## 未着手 (TODO)

### UI/UX Refinement

- [x] スワイプアニメーションの調整 `cc:完了`
  - ドラッグ時の rotate/opacity を調整し「紙のカード」のような重さを表現
  - AnimatePresence で次のカードがポップアップするトランジション実装
  - dragElastic=0.6、whileDrag scale=1.02 で重厚感を追加

### Design System & Theming

- [x] カラーパレットの完全適用 `cc:完了`
  - Background: Jet Black (#121212) - globals.css で適用済み
  - Card Background: Dark Gray (#1E1E1E) - globals.css で適用済み
  - Accent: Neon Lime Green (#CCFF00) - globals.css で適用済み

- [x] タイポグラフィの適用 `cc:完了`
  - 日本語: Noto Sans JP (400, 700)
  - 数字/XP: JetBrains Mono（等幅）

- [x] ヘッダーロゴデザインの実装 `cc:完了`
  - NAI: アウトライン（-webkit-text-stroke）
  - KORE: 塗りつぶし + ネオングロー
  - チケットアイコン（Lucide）をライムグリーンで配置

### Micro-Interactions

- [x] "I'LL BUILD IT" ボタンのエフェクト `cc:完了`
  - ホバー時に neon-glow → neon-glow-lg で輝き増加
  - whileHover/whileTap で scale アニメーション

- [x] XP 表示の可視化強化 `cc:完了`
  - 高 XP（10,000+）時は text-neon-glow で発光
  - Star アイコンに animate-pulse を追加

### Content Structure

- [x] 長いテキストの省略処理 `cc:完了`
  - Description に line-clamp-3 を適用

---

## 進行中 (WIP)

（現在なし）

---

## 完了 (DONE)

### UI/UX Refinement (2026-01-22)

- [x] PC/デスクトップ表示の最適化 `cc:完了`
  - カードスタックを中央配置（400px 固定幅）
  - 背後にネオンライムのグロー効果（デスクトップのみ）
  - `card-stack-glow` クラスを `globals.css` に追加

- [x] 不要なアクションテキストの削除・非表示化 `cc:完了`
  - LIKE/NOPE テキストをスワイプ中のインタラクションとしてのみ表示
  - 戻るボタン（Undo）を削除し、ジェスチャー操作に統一

- [x] スワイプUIでの戻るボタンの削除 `cc:完了`
  - SwipeControls から Undo ボタンを削除
  - CardStack の空状態から「↩ 戻る」を削除
  - page.tsx から Undo 関連の状態管理を削除

- [x] スワイプUIで、画面半分の右にずらすときにはうっすらLIKEを表示・画面半分の左にずらすときにはうっすらNOPEを表示 `cc:完了`
  - 閾値を 50〜150px に調整（従来は 0〜100px）
  - 最大 opacity を 0.9 に抑えて「うっすら」感を表現

### フェーズ1: 基盤構築

- [x] Next.js プロジェクト初期化
- [x] shadcn/ui セットアップ
- [x] Framer Motion インストール
- [x] サイバーパンクテーマ設定
- [x] 型定義の作成 (`types/idea.ts`)
- [x] ダミーデータの作成 (`data/mockIdeas.ts`)

### フェーズ2: UI コンポーネント

- [x] Header コンポーネント（ロゴ + 検索）
- [x] TabNav コンポーネント（トレンド/新着/解決済み）
- [x] IdeaCard コンポーネント（カード単体）
- [x] CardStack コンポーネント（スワイプ機能付き）
- [x] ActionButton コンポーネント（I'LL BUILD IT）
- [x] メインページ組み立て

### フェーズ3: インタラクション

- [x] カード投げ飛ばしエフェクト（スワイプ成功時）
- [x] スワイプ方向インジケーター（LIKE/NOPE オーバーレイ）
- [x] カード復活機能（戻るボタン）
- [x] デスクトップ用 Nope/Like/Undo ボタン

### フェーズ4: 仕上げ

- [x] レスポンシブ対応（モバイル/タブレット/デスクトップ）
- [x] ネオングロー効果の調整
- [x] ネオンパルスアニメーション追加
- [x] Vercel へデプロイ

---

## マーカー凡例

| マーカー     | 状態       |
| ------------ | ---------- |
| `cc:TODO`    | 未着手     |
| `cc:WIP`     | 作業中     |
| `cc:blocked` | ブロック中 |

---

## 備考

- UI モックアップのため、バックエンド連携は対象外
- デザイン仕様は最初のメッセージで共有済み
