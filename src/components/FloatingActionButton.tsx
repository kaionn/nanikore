"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface FloatingActionButtonProps {
  onClick?: () => void;
}

export function FloatingActionButton({ onClick }: FloatingActionButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className="hidden md:flex fixed bottom-24 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full items-center justify-center shadow-lg neon-pulse"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      aria-label="新しいアイデアを投稿"
    >
      <Plus className="h-6 w-6" />
    </motion.button>
  );
}
