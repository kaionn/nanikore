"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Calendar,
  Flame,
  Mic,
  Moon,
  BookOpen,
  Film,
  Star,
} from "lucide-react";
import { Idea } from "@/types/idea";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  smartphone: Smartphone,
  code: Code,
  calendar: Calendar,
  flame: Flame,
  mic: Mic,
  moon: Moon,
  book: BookOpen,
  film: Film,
};

interface IdeaCardProps {
  idea: Idea;
  className?: string;
  isTop?: boolean;
  onAgree?: (idea: Idea) => void;
}

export function IdeaCard({ idea, className, isTop = false, onAgree }: IdeaCardProps) {
  const [agreeCount, setAgreeCount] = useState(0);
  const [hasAgreed, setHasAgreed] = useState(false);
  const IconComponent = iconMap[idea.icon] || Smartphone;

  const formatXP = (xp: number): string => {
    return xp.toLocaleString();
  };

  const handleAgree = () => {
    if (!hasAgreed) {
      setAgreeCount((prev) => prev + 1);
      setHasAgreed(true);
      onAgree?.(idea);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "relative w-[calc(100vw-2rem)] max-w-md md:w-[400px] rounded-2xl bg-card p-5",
        isTop && "neon-border border-2",
        className
      )}
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {idea.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mb-3">
        <IconComponent className="h-5 w-5 text-primary" />
      </div>

      <h2 className="text-lg font-bold text-white leading-tight mb-2">
        {idea.title}
      </h2>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {idea.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 font-mono text-primary">
          <Star className="h-4 w-4 fill-primary" />
          <span className="text-sm font-semibold">{formatXP(idea.xp)} XP</span>
          {idea.isTrending && <span className="ml-1">🔥</span>}
        </div>

        <motion.button
          onClick={handleAgree}
          disabled={hasAgreed}
          className={cn(
            "px-3 py-1.5 text-sm font-medium rounded-full transition-colors",
            hasAgreed
              ? "bg-primary text-primary-foreground"
              : "bg-primary/20 text-primary hover:bg-primary/30"
          )}
          whileTap={{ scale: 0.95 }}
        >
          わかる 👋 {agreeCount > 0 && `+${agreeCount}`}
        </motion.button>
      </div>
    </motion.div>
  );
}
