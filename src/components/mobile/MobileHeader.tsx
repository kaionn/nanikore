import { Ticket } from "lucide-react";

export function MobileHeader() {
  return (
    <header className="w-full px-6 pt-12 pb-4 flex flex-col items-start z-10">
      <div className="flex items-center gap-2 mb-2">
        <div className="relative">
          <Ticket className="w-8 h-8 text-primary -rotate-12" strokeWidth={2.5} />
          <div className="absolute inset-0 bg-primary/20 blur-md rounded-full" />
        </div>
        <h1 className="text-3xl font-black tracking-tighter text-white uppercase italic">
          NAIKORE
        </h1>
      </div>
      <p className="text-[10px] text-muted-foreground font-medium tracking-wide">
        その不満、みんなで背負えばコンテンツ。
      </p>
    </header>
  );
}
