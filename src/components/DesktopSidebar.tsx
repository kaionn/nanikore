import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Home, Trophy, Folder, Settings, Ticket, Zap } from "lucide-react";

export function DesktopSidebar() {
  return (
    <aside className="w-80 h-screen fixed left-0 top-0 border-r border-sidebar-border bg-sidebar/80 backdrop-blur-md z-40 flex flex-col p-6">
      {/* Logo Area */}
      <div className="flex items-center gap-2 mb-10">
        <div className="relative">
          <Ticket className="w-8 h-8 text-neon -rotate-12" />
          <div className="absolute inset-0 blur-sm bg-neon/50 -z-10" />
        </div>
        <h1 className="text-2xl font-bold tracking-wider">
          <span className="text-foreground border-text">NAI</span>
          <span className="text-foreground">KORE</span>
        </h1>
      </div>

      {/* User Profile Card */}
      <div className="bg-card/50 border border-border p-4 rounded-xl mb-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-neon" />
        <div className="flex items-center gap-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-secondary overflow-hidden border border-border flex items-center justify-center text-xs">
                YD
            </div>
          <div>
            <div className="font-bold text-sm">Yukio.Dev</div>
            <div className="text-xs text-muted-foreground">LV.15 Builder</div>
          </div>
        </div>
        
        <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-muted-foreground uppercase tracking-widest">
                <span>Total XP</span>
                <span className="font-mono text-neon">45,200 XP</span>
            </div>
            {/* Custom Progress Bar manually styled for cyberpunk look */}
            <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-neon w-[75%] shadow-[0_0_10px_var(--neon)]" />
            </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 space-y-2">
        <NavItem icon={<Home className="w-5 h-5" />} label="ホーム (Home)" active />
        <NavItem icon={<Trophy className="w-5 h-5" />} label="ランキング (Ranking)" />
        <NavItem icon={<Folder className="w-5 h-5" />} label="マイプロジェクト (My Projects)" />
        <NavItem icon={<Settings className="w-5 h-5" />} label="設定 (Settings)" />
      </nav>

      {/* Bottom Status */}
      <div className="mt-auto pt-6 border-t border-border">
        <div className="flex items-center gap-2 text-xs font-mono text-neon">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon"></span>
            </span>
            SYSTEM ONLINE
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <button
      className={`
        w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all duration-200 group relative overflow-hidden
        ${active 
            ? "text-neon bg-neon/10 border border-neon/20 shadow-[0_0_15px_rgba(204,255,0,0.1)]" 
            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
        }
      `}
    >
        {active && <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-neon shadow-[0_0_5px_var(--neon)]" />}
        <span className={`${active ? "text-neon drop-shadow-[0_0_5px_rgba(204,255,0,0.5)]" : ""}`}>
            {icon}
        </span>
        <span className="font-medium tracking-wide">{label}</span>
    </button>
  );
}
