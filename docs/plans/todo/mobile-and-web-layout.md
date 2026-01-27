# Role & Context

あなたは、共感型不満共有サービス「NAIKORE（ナイコレ）」のリードフロントエンドエンジニア兼UIデザイナーです。
現在、プロトタイプ（機能検証版）から、Project Bible v2.0に基づく「製品版UI」へのメジャーアップデートを行おうとしています。

# 1. Project Intent & Philosophy (改修の意図)

我々の目的は、単なる機能的なアプリを作ることではなく、現代人のための**「デジタル・シェルター（避難所）」**を構築することです。

- **コンセプト:** 「共感の避難所」。深夜のストリートや開発環境（VS Code）のような、落ち着くダークモードの世界観。
- **UXの課題:** 現在のレイアウトはモバイルファーストすぎて、PCの大画面で見るとスカスカで没入感が足りません。

# 2. Critical Constraint (最重要制約)

**既存の「スワイプカード機能」は聖域です。**

- 現在 `app/page.tsx` (またはメインファイル) で動いているスワイプカードのコンポーネント（およびそのロジック）は、すでに完成されています。
- **絶対に**そのコンポーネントの中身（ファイルそのもの）を書き換えたり、複雑なPropsを追加して壊したりしないでください。
- あなたの任務は、そのコンポーネントを「ブラックボックス」として扱い、その**「外側のレイアウト（Shell）」**を構築することです。

# 3. Layout Specification (デバイス別レイアウト定義)

Project Bibleに基づき、以下の仕様を厳守してください。

## A. Desktop/PC: 「デジタル・コックピット」 (3カラム構成)

- **Left Column:** 「パイロット・ステータス」。プロフィール（ランク・XP）、メニュー、投稿ボタンを配置。
- **Center Column:** 「ザ・コア」。カードスタックを配置。
  - **重要:** 背景に**「パースの効いたネオングリッド床」**や「呼吸するような光」を配置し、空間的広がりを持たせる。
  - 下部にキーボード操作ガイド（←NO / YES→）を表示。
- **Right Column:** 「Live Ticker (活動ログ)」。リアルタイムでログが流れるターミナル風エリア。

## B. Mobile: 「没入型スタック」 (シングルカラム)

- **Header:** ハンバーガーメニュー（左）と、簡易ログ表示（右）。
- **Center:** 全画面カードスタック。親指一本で操作完結。余計な情報は隠す。
- **Action:** 右下にフローティング投稿ボタン（FAB）。

# 4. Implementation Plan (実装手順)

まず、現在のディレクトリ構造と `app/page.tsx` を読み込み、スワイプ機能を担っているコンポーネント名を特定してください。
その後、以下の手順で実装してください。

## Step 1: Component Creation (新規パーツの作成)

既存コードと分離するため、`components/layout` ディレクトリ等を作成し、以下を実装してください。

1.  **`DesktopSidebar.tsx` (PC左カラム)**
    - 内容: ユーザー情報（アイコン、XPバー）、メニュー、投稿ボタン。
    - デザイン: VS Codeのサイドバーのような機能美。
2.  **`DesktopTicker.tsx` (PC右カラム)**
    - 内容: モックデータで良いので、リスト形式のログを表示。
    - デザイン: ターミナル風。
3.  **`MobileShell.tsx` (スマホ用ヘッダー/メニュー)**
    - 内容:
      - ハンバーガーメニュー（タップで `DesktopSidebar` の内容をドロワー表示）。
      - 「Ticker Pill」（1行だけのログ表示。タップで `DesktopTicker` の内容を下からシート表示）。
      - FAB（浮き出し投稿ボタン）。

## Step 2: Page Integration (レイアウト統合)

`app/page.tsx` をレスポンシブなラッパーとして書き換えてください。

**構造イメージ:**

```tsx
<div className="bg-[#121212] text-white h-screen w-full flex overflow-hidden font-sans">
  {/* Left: PCならSidebar表示 / MobileならHidden (Drawerで呼ぶ) */}
  <aside className="hidden md:flex w-[300px] border-r border-white/10 flex-col z-10 bg-[#121212]">
    <DesktopSidebar />
  </aside>

  {/* Center: メインステージ */}
  <main className="flex-1 relative flex flex-col items-center justify-center">
    {/* 背景演出（Neon Grid Floor） */}
    <div className="absolute inset-0 pointer-events-none ...">
      {/* ここにCSSまたはSVGでグリッドを描画 */}
    </div>

    {/* ここに「既存のスワイプコンポーネント」を配置 */}
    <div className="relative z-20">
      <ExistingSwipeComponent />
    </div>

    {/* PCのみ: キーボード操作ガイド */}
    <div className="hidden md:flex absolute bottom-10 gap-8 text-gray-500 font-mono text-sm">
      <span>[←] NO (Through)</span>
      <span>[→] YES (Wakarue)</span>
    </div>
  </main>

  {/* Right: PCならTicker表示 / MobileならHidden (Sheetで呼ぶ) */}
  <aside className="hidden lg:flex w-[300px] border-l border-white/10 flex-col z-10 bg-[#0f0f0f]">
    <DesktopTicker />
  </aside>

  {/* Mobile Parts: Header, FAB, Drawers overlay */}
  <MobileShell />
</div>
```

# 5. Design System Settings

- **Colors:**
  - Background: `#121212` (Jet Black)
  - Accent: `#CCFF00` (Neon Lime) - 共感/肯定
  - Sub: `#00FFFF` (Cyan) - スルー/静寂
- **Typography:**
  - メイン: Noto Sans JP
  - データ/XP: JetBrains Mono (システム・スペック感)

以上の方針に従い、既存機能を守りつつ、Project Bibleの世界観を忠実に再現するコードを書いてください。
