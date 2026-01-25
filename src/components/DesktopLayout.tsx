"use client";

import { DesktopSidebar } from "./DesktopSidebar";
import { DesktopLiveActivity } from "./DesktopLiveActivity";
import { FloatingActionButton } from "./FloatingActionButton";
import { Zap, CornerDownLeft, ArrowRight, ArrowLeft } from "lucide-react";

interface DesktopLayoutProps {
    children: React.ReactNode;
    onBuildIt?: () => void;
    hasLikedIdea?: boolean;
}

export function DesktopLayout({ children, onBuildIt, hasLikedIdea }: DesktopLayoutProps) {
    return (
        <div className="min-h-screen w-full relative">
            {/* Desktop Only: Sidebars */}
            <div className="hidden md:block">
                <DesktopSidebar />
                <DesktopLiveActivity />
            </div>

            {/* Main Content Area */}
            <main className="
                w-full min-h-screen 
                md:pl-80 md:pr-80 
                flex flex-col items-center justify-center
                relative z-0
            ">
                
                {/* Center Stage Content */}
                <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl px-4 py-8 flex flex-col items-center relative z-10">
                    {children}
                </div>

                {/* Desktop Footer Content (Keyboard shortcuts & FAB) */}
                <div className="hidden md:flex flex-col items-center gap-8 mt-8 relative z-20">
                     {/* Keyboard Shortcuts */}
                     <div className="flex items-center gap-8 text-muted-foreground">
                        <Keycap label="NO" icon={<ArrowLeft className="w-4 h-4" />} />
                        <Keycap label="YES" icon={<ArrowRight className="w-4 h-4" />} />
                        <Keycap label="BUILD" sub="SPACE" className="w-24" />
                     </div>

                     {/* Giant FAB */}
                     <button
                        onClick={onBuildIt}
                        disabled={!hasLikedIdea}
                        className={`
                            group relative overflow-hidden rounded-full py-4 px-12
                            flex items-center gap-3 transition-all duration-300 transform
                            ${hasLikedIdea 
                                ? "bg-neon hover:scale-105 active:scale-95 shadow-[0_0_30px_var(--neon)] hover:shadow-[0_0_50px_var(--neon)] cursor-pointer text-neon-foreground" 
                                : "bg-secondary text-muted-foreground cursor-not-allowed opacity-50 border border-border"}
                        `}
                    >
                        <Zap className={`w-6 h-6 ${hasLikedIdea ? "fill-current" : ""}`} />
                        <span className="font-black text-xl tracking-wider">I'LL BUILD IT</span>
                        
                        {/* Shimmer effect when active */}
                        {hasLikedIdea && (
                            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                        )}
                     </button>
                </div>
            </main>
        </div>
    );
}

function Keycap({ label, sub, icon, className = "" }: { label: string, sub?: string, icon?: React.ReactNode, className?: string }) {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className={`
                h-12 min-w-12 px-3 rounded-lg border-2 border-border bg-card/50 
                flex items-center justify-center shadow-[0_4px_0_0_rgba(255,255,255,0.1)] 
                transform active:translate-y-1 active:shadow-none transition-all
                text-foreground font-mono font-bold text-sm
                ${className}
            `}>
                {icon ? icon : sub}
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">{label}</span>
        </div>
    )
}
