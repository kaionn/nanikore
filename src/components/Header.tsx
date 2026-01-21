"use client";

import { Search, Ticket } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:max-w-2xl md:mx-auto md:w-full">
      <div className="flex items-center gap-2">
        <Ticket className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/60 [-webkit-text-stroke:1px_white]">
            NAI
          </span>
          <span className="text-primary text-neon-glow">KORE</span>
        </h1>
      </div>
      <button
        className="p-2 rounded-full hover:bg-white/10 transition-colors"
        aria-label="検索"
      >
        <Search className="h-5 w-5 text-white" />
      </button>
    </header>
  );
}
