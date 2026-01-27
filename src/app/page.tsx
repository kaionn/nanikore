"use client";

import { MobileHeader } from "@/components/mobile/MobileHeader";
import { SwipeableCardStack } from "@/components/mobile/SwipeableCardStack";
import { MobileFooter } from "@/components/mobile/MobileFooter";
import { MobileShell } from "@/components/mobile/MobileShell";
import { DesktopSidebar } from "@/components/DesktopSidebar";
import { DesktopLiveActivity } from "@/components/DesktopLiveActivity";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-background overflow-hidden font-sans text-white selection:bg-primary/30">

      {/* === Desktop Layout (3-Column) === */}

      {/* Left Column: Sidebar (PC Only) */}
      <div className="hidden md:block">
        <DesktopSidebar />
      </div>

      {/* Right Column: Live Activity Ticker (PC Only) */}
      <div className="hidden lg:block">
        <DesktopLiveActivity />
      </div>

      {/* === Center Column: Main Stage === */}
      <div className="md:ml-80 lg:mr-80 min-h-[100dvh] relative">

        {/* --- Ambient Background Layers --- */}

        {/* 1. Perspective Neon Grid Floor (PC Enhanced) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grid with perspective */}
          <div
            className="absolute inset-x-0 bottom-0 h-[60%] opacity-30"
            style={{
              background: `
                linear-gradient(to bottom, transparent 0%, rgba(204,255,0,0.03) 100%),
                repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 60px,
                  rgba(204,255,0,0.1) 60px,
                  rgba(204,255,0,0.1) 61px
                ),
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 60px,
                  rgba(204,255,0,0.1) 60px,
                  rgba(204,255,0,0.1) 61px
                )
              `,
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'bottom center',
            }}
          />
          {/* Horizon glow line */}
          <div className="absolute inset-x-0 top-[40%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </div>

        {/* 2. Cyber Grid Pattern (Mobile) */}
        <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none md:opacity-10" />

        {/* 3. Animated Glow Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        {/* 4. Floating Particles (Noise Texture) */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />

        {/* --- Mobile Header (Mobile Only) --- */}
        <div className="md:hidden">
          <MobileHeader />
        </div>

        {/* --- Main Content Area --- */}
        <main className="relative flex flex-col items-center justify-center w-full h-[100dvh] pt-20 pb-24 px-4 md:pt-8 md:pb-8 overflow-hidden">

          {/* Card Stack Container */}
          <div className="w-full h-full max-w-md flex flex-col justify-center relative z-20">
            <SwipeableCardStack />
          </div>

          {/* Keyboard Shortcut Guide (PC Only) */}
          <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 gap-8 text-muted-foreground font-mono text-sm">
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border text-xs">←</kbd>
              <span>THROUGH (スルー)</span>
            </span>
            <span className="flex items-center gap-2">
              <kbd className="px-2 py-1 rounded bg-card border border-border text-xs">→</kbd>
              <span>WAKARU (わかる)</span>
            </span>
          </div>
        </main>

        {/* --- Mobile Footer (Mobile Only) --- */}
        <div className="md:hidden">
          <MobileFooter />
        </div>
      </div>

      {/* === Mobile Shell (Hamburger Menu, Ticker Pill, FAB) === */}
      <MobileShell />
    </div>
  );
}
