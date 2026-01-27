# Design System & Theming

> **ステータス**: 完了
> **完了日**: -

---

## 概要

サイバーパンク/ダークモードのデザインシステム構築。

---

## 完了タスク

- [x] カラーパレットの完全適用 `cc:完了`
  - Background: Jet Black (#121212)
  - Card Background: Dark Gray (#1E1E1E)
  - Accent: Neon Lime Green (#CCFF00)
- [x] タイポグラフィの適用 `cc:完了`
  - 日本語: Noto Sans JP
  - 数字/XP: JetBrains Mono

---

## カラーパレット

| 名前 | カラーコード | 用途 |
|------|-------------|------|
| Jet Black | #121212 | 背景 |
| Dark Gray | #1E1E1E | カード背景 |
| Neon Lime | #CCFF00 | アクセント/CTA |
| Cyan | cyan-400 | セカンダリアクセント |

## ネオングロー効果

```css
.neon-glow { /* 標準グロー */ }
.neon-glow-sm { /* 小さめ */ }
.neon-glow-lg { /* 大きめ */ }
.neon-border { /* ボーダーグロー */ }
.text-neon-glow { /* テキストグロー */ }
```
