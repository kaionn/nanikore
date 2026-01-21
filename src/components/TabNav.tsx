"use client";

import { motion } from "framer-motion";
import { TABS, TabType } from "@/types/idea";
import { cn } from "@/lib/utils";

interface TabNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export function TabNav({ activeTab, onTabChange }: TabNavProps) {
  return (
    <nav className="flex gap-6 px-4 border-b border-white/10 md:max-w-2xl md:mx-auto md:w-full">
      {TABS.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative py-3 text-sm font-medium transition-colors",
            activeTab === tab.id
              ? "text-primary text-neon-glow"
              : "text-muted-foreground hover:text-white"
          )}
        >
          {tab.label}
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary neon-glow-sm"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
        </button>
      ))}
    </nav>
  );
}
