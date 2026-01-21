"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

interface ActionButtonProps {
  onClick?: () => void;
  disabled?: boolean;
}

export function ActionButton({ onClick, disabled }: ActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-4 px-6 bg-primary text-primary-foreground font-bold text-lg rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed neon-glow hover:neon-glow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Zap className="h-5 w-5 fill-current" />
      <span>I&apos;LL BUILD IT</span>
    </motion.button>
  );
}
