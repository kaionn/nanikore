import { Ticket } from "lucide-react";

export function MobileHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pl-16 pr-6 pt-14 pb-4 flex flex-col items-start transition-all duration-300 pointer-events-none">
      {/* Dynamic Header Background (Glass) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px] -z-10" />

      <div className="flex items-center gap-3 mb-1 pointer-events-auto">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
          <Ticket className="w-9 h-9 text-primary -rotate-12 group-hover:rotate-0 transition-transform duration-500 ease-out" strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic leading-none drop-shadow-lg">
            NAIKORE
          </h1>
          <div className="h-0.5 w-full bg-primary/50 rounded-full mt-1 neon-glow-sm" />
        </div>
      </div>
      <p className="text-[11px] text-muted-foreground/80 font-medium tracking-widest pl-1 uppercase border-l-2 border-primary/30 ml-1 mt-1 leading-none py-1 pointer-events-auto backdrop-blur-sm rounded-r-md bg-white/5 pr-2">
        その不満、みんなで背負えば<span className="text-white font-bold ml-1">コンテンツ。</span>
      </p>
    </header>
  );
}
