"use client";

import { motion } from "framer-motion";
import { X, Heart } from "lucide-react";

interface SwipeControlsProps {
  onNope: () => void;
  onLike: () => void;
  disabled?: boolean;
}

export function SwipeControls({ onNope, onLike, disabled }: SwipeControlsProps) {
  return (
    <div className="hidden md:flex items-center justify-center gap-6 py-4">
      <motion.button
        onClick={onNope}
        disabled={disabled}
        className="w-16 h-16 rounded-full border-2 border-destructive text-destructive flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-destructive/10 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Nope"
      >
        <X className="h-8 w-8" />
      </motion.button>

      <motion.button
        onClick={onLike}
        disabled={disabled}
        className="w-16 h-16 rounded-full border-2 border-primary text-primary flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-primary/10 transition-colors neon-glow-sm"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Like"
      >
        <Heart className="h-8 w-8" />
      </motion.button>
    </div>
  );
}
