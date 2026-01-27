"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap, ChevronUp } from "lucide-react";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopLiveActivity } from "@/components/DesktopLiveActivity";

export function MobileShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTickerOpen, setIsTickerOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button (Top Left) */}
      <button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed top-14 left-4 z-50 w-10 h-10 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
        aria-label="メニューを開く"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Ticker Pill (Top Right) */}
      <button
        onClick={() => setIsTickerOpen(true)}
        className="md:hidden fixed top-14 right-4 z-50 h-10 px-4 rounded-full bg-card/80 backdrop-blur-md border border-border flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
        aria-label="アクティビティを表示"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
        </span>
        <span className="truncate max-w-[120px]">@Kenta_JS が着手!</span>
        <ChevronUp className="w-3 h-3" />
      </button>

      {/* FAB - 削除（MobileFooter に Actions ボタンがあるため重複） */}

      {/* Menu Drawer (Left) */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            {/* Drawer Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-y-0 left-0 w-[85%] max-w-[320px] z-[70] bg-sidebar border-r border-border overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="メニューを閉じる"
              >
                <X className="w-5 h-5" />
              </button>
              {/* Reuse Sidebar Content */}
              <div className="pt-16">
                <MobileSidebarContent />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Ticker Sheet (Bottom) */}
      <AnimatePresence>
        {isTickerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsTickerOpen(false)}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            {/* Sheet Content */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-x-0 bottom-0 h-[70vh] z-[70] bg-sidebar border-t border-border rounded-t-3xl overflow-hidden"
            >
              {/* Handle Bar */}
              <div className="flex justify-center pt-3 pb-2">
                <div className="w-10 h-1 rounded-full bg-border" />
              </div>
              {/* Close Button */}
              <button
                onClick={() => setIsTickerOpen(false)}
                className="absolute top-3 right-4 w-8 h-8 rounded-full bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                aria-label="閉じる"
              >
                <X className="w-4 h-4" />
              </button>
              {/* Ticker Content */}
              <MobileTickerContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

// Mobile-optimized sidebar content (extracted from DesktopSidebar style)
function MobileSidebarContent() {
  return (
    <div className="p-6 space-y-6">
      {/* User Profile */}
      <div className="bg-card/50 border border-border p-4 rounded-xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
        <div className="flex items-center gap-3 mb-3">
          <div className="h-12 w-12 rounded-full bg-secondary overflow-hidden border border-border flex items-center justify-center text-sm font-bold">
            YD
          </div>
          <div>
            <div className="font-bold">Yukio.Dev</div>
            <div className="text-xs text-muted-foreground">LV.15 Builder</div>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
            <span>Total XP</span>
            <span className="font-mono text-primary">45,200 XP</span>
          </div>
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[75%] shadow-[0_0_10px_var(--primary)]" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        <MobileNavItem label="ホーム" active />
        <MobileNavItem label="ランキング" />
        <MobileNavItem label="マイプロジェクト" />
        <MobileNavItem label="設定" />
      </nav>
    </div>
  );
}

function MobileNavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <button
      className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-colors ${
        active
          ? "text-primary bg-primary/10 border border-primary/20"
          : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
      }`}
    >
      {label}
    </button>
  );
}

// Mobile-optimized ticker content
function MobileTickerContent() {
  const activities = [
    { user: "@Kenta_JS", action: "が『深夜の美容室』の解決に着手!", time: "Just Now" },
    { user: "@Miku39", action: "が『詰め替え問題』に投票", time: "2m ago", xp: "+10 XP" },
    { user: null, action: "#AI開発 の投稿が急増中!", time: "5m ago" },
    { user: null, action: "新着の不満が投稿されました", time: "10m ago" },
    { user: "@Taro_Dev", action: "が『満員電車』に投票", time: "12m ago", xp: "+10 XP" },
  ];

  return (
    <div className="p-4 space-y-3 overflow-y-auto h-full pb-20">
      <h3 className="text-sm font-bold text-destructive uppercase tracking-wider flex items-center gap-2 mb-4">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-destructive" />
        </span>
        LIVE ACTIVITY
      </h3>
      {activities.map((item, i) => (
        <div key={i} className="flex gap-3 p-3 rounded-lg border border-border/50 bg-card/20">
          <div className="flex-1">
            <div className="text-[10px] text-muted-foreground font-mono mb-1">{item.time}</div>
            <div className="text-sm">
              {item.user && <span className="font-bold text-foreground mr-1">{item.user}</span>}
              <span className="text-muted-foreground">{item.action}</span>
              {item.xp && <span className="ml-1 text-primary text-xs font-mono">{item.xp}</span>}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
