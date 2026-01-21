# Plans.md - NAIKORE 開発計画

## 本番 URL

**https://nanikore-zeta.vercel.app**

---

## 未着手 (TODO)

### UI/UX Refinement

- [ ] 不要なアクションテキストの削除・非表示化 `cc:TODO`
  - LIKE/NOPE テキストをスワイプ中のインタラクションとしてのみ表示
  - 常時表示のボタンを削除し、ジェスチャー操作に統一

- [ ] スワイプアニメーションの調整 `cc:TODO`
  - ドラッグ時の rotate/opacity を調整し「紙のカード」のような重さを表現
  - カードが画面外へ消え、次のカードがポップアップするトランジション改善

- [ ] PC/デスクトップ表示の最適化 `cc:TODO`
  - 中央集中レイアウトに変更（スマホサイズのカードスタックを中央配置）
  - 背後にライムグリーンの淡いグロー効果を追加

### Design System & Theming

- [ ] カラーパレットの完全適用 `cc:TODO`
  - Background: Jet Black (#121212)
  - Card Background: Dark Gray (#1E1E1E)
  - Accent: Neon Lime Green (#CCFF00)

- [ ] タイポグラフィの適用 `cc:TODO`
  - 日本語: Noto Sans JP (400, 700)
  - 数字/XP: JetBrains Mono（等幅）

- [ ] ヘッダーロゴデザインの実装 `cc:TODO`
  - NAI: アウトライン / KORE: 塗りつぶし
  - チケットアイコン（SVG）をライムグリーンで配置

### Micro-Interactions

- [ ] "I'LL BUILD IT" ボタンのエフェクト `cc:TODO`
  - ホバー/タップ時にライムグリーンの輝き増加
  - 紙吹雪（Confetti）エフェクトの検討

- [ ] XP 表示の可視化強化 `cc:TODO`
  - 炎アイコンや上昇矢印の追加
  - 高 XP（10,000+）時はライムグリーン + 発光

### Content Structure

- [ ] 長いテキストの省略処理 `cc:TODO`
  - Description に line-clamp-3 を適用

---

## 進行中 (WIP)

（現在なし）

---

## 完了 (DONE)

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

| マーカー | 状態 |
|----------|------|
| `cc:TODO` | 未着手 |
| `cc:WIP` | 作業中 |
| `cc:blocked` | ブロック中 |

---

## 備考

- UI モックアップのため、バックエンド連携は対象外
- デザイン仕様は最初のメッセージで共有済み
