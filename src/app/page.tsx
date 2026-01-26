"use client";

import { MobileHeader } from "@/components/mobile/MobileHeader";
import { SwipeableCardStack } from "@/components/mobile/SwipeableCardStack";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] w-full bg-background overflow-hidden font-sans text-white selection:bg-primary/30">
      
      {/* --- Ambient Background Layers --- */}
      
      {/* 1. Cyber Grid Pattern */}
      <div className="absolute inset-0 cyber-grid-bg opacity-30 pointer-events-none" />

      {/* 2. Animated Glow Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      
      {/* 3. Floating Particles (Simulated with CSS) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />

      {/* --- Main Content --- */}
      
      <MobileHeader />

      <main className="relative flex flex-col items-center justify-center w-full h-[100dvh] pt-20 pb-24 px-4 overflow-hidden">
        {/* Card Stack Container */}
        <div className="w-full h-full max-w-md flex flex-col justify-center">
             <SwipeableCardStack />
        </div>
      </main>

      <MobileFooter />
    </div>
  );
}
