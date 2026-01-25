"use client";

import { MobileHeader } from "@/components/mobile/MobileHeader";
import { SwipeableCardStack } from "@/components/mobile/SwipeableCardStack";
import { MobileFooter } from "@/components/mobile/MobileFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center relative overflow-hidden font-sans text-white">
      {/* Background Ambience */}
      <div className="absolute top-[-20%] left-[-20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      />

      <MobileHeader />

      <main className="flex-1 w-full flex flex-col items-center justify-center p-4 z-10">
        <SwipeableCardStack />
      </main>

      <MobileFooter />
    </div>
  );
}
