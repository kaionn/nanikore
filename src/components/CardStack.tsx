"use client";

import { useState, useImperativeHandle, forwardRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate, PanInfo } from "framer-motion";
import { IdeaCard } from "./IdeaCard";
import { Idea } from "@/types/idea";

export interface CardStackRef {
  swipe: (direction: "left" | "right") => void;
  undo: () => boolean;
  canUndo: boolean;
}

interface CardStackProps {
  ideas: Idea[];
  onSwipe?: (idea: Idea, direction: "left" | "right") => void;
  onUndo?: (idea: Idea) => void;
  onEmpty?: () => void;
}

interface SwipeHistory {
  idea: Idea;
  direction: "left" | "right";
}

export const CardStack = forwardRef<CardStackRef, CardStackProps>(
  function CardStack({ ideas, onSwipe, onUndo, onEmpty }, ref) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [history, setHistory] = useState<SwipeHistory[]>([]);
    const x = useMotionValue(0);

    // 「紙のカード」のような重さ: 回転を控えめに、透明度は維持
    const rotate = useTransform(x, [-300, 0, 300], [-15, 0, 15]);
    const opacity = useTransform(x, [-300, -150, 0, 150, 300], [0.7, 1, 1, 1, 0.7]);

    const likeOpacity = useTransform(x, [50, 150], [0, 1]);
    const nopeOpacity = useTransform(x, [-150, -50], [1, 0]);

    const currentIdeas = ideas.slice(currentIndex, currentIndex + 3);
    const canUndo = history.length > 0;

    const triggerSwipe = useCallback((direction: "left" | "right") => {
      if (isAnimating || currentIdeas.length === 0) return;

      setIsAnimating(true);
      const targetX = direction === "right" ? 400 : -400;
      const currentIdea = ideas[currentIndex];

      animate(x, targetX, {
        type: "spring",
        stiffness: 400,
        damping: 40,
        velocity: 800,
        onComplete: () => {
          if (currentIdea) {
            setHistory((prev) => [...prev, { idea: currentIdea, direction }]);
            onSwipe?.(currentIdea, direction);
          }
          setCurrentIndex((prev) => {
            const newIndex = prev + 1;
            if (newIndex >= ideas.length) {
              onEmpty?.();
            }
            return newIndex;
          });
          x.set(0);
          setIsAnimating(false);
        },
      });
    }, [isAnimating, currentIdeas.length, ideas, currentIndex, x, onSwipe, onEmpty]);

    const undo = useCallback(() => {
      if (history.length === 0 || isAnimating) return false;

      const lastSwipe = history[history.length - 1];
      setHistory((prev) => prev.slice(0, -1));
      setCurrentIndex((prev) => Math.max(0, prev - 1));
      onUndo?.(lastSwipe.idea);
      return true;
    }, [history, isAnimating, onUndo]);

    useImperativeHandle(ref, () => ({
      swipe: triggerSwipe,
      undo,
      canUndo,
    }), [triggerSwipe, undo, canUndo]);

    function determineSwipeDirection(
      offsetX: number,
      velocityX: number
    ): "left" | "right" | null {
      const OFFSET_THRESHOLD = 100;
      const VELOCITY_THRESHOLD = 500;

      const isSwipe =
        Math.abs(offsetX) > OFFSET_THRESHOLD ||
        Math.abs(velocityX) > VELOCITY_THRESHOLD;

      if (!isSwipe) return null;

      return offsetX > 0 ? "right" : "left";
    }

    const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      if (isAnimating) return;

      const direction = determineSwipeDirection(info.offset.x, info.velocity.x);

      if (direction) {
        triggerSwipe(direction);
      }
    };

    if (currentIdeas.length === 0) {
      return (
        <div className="flex flex-col items-center justify-center h-[60vh] min-h-[350px] max-h-[500px] gap-4">
          <p className="text-muted-foreground">もうカードがありません</p>
        </div>
      );
    }

    return (
      <div className="relative h-[60vh] min-h-[350px] max-h-[500px] w-full flex items-center justify-center">
        {currentIdeas
          .slice()
          .reverse()
          .map((idea, reversedIndex) => {
            const index = currentIdeas.length - 1 - reversedIndex;
            const isTop = index === 0;

            return (
              <motion.div
                key={idea.id}
                className="absolute"
                animate={{
                  scale: 1 - index * 0.05,
                  y: index * 8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                style={{
                  zIndex: currentIdeas.length - index,
                  ...(isTop ? { x, rotate, opacity } : {}),
                }}
                drag={isTop && !isAnimating ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.6}
                dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
                onDragEnd={isTop ? handleDragEnd : undefined}
                whileDrag={{ cursor: "grabbing", scale: 1.02 }}
              >
                {isTop && (
                  <>
                    <motion.div
                      className="absolute -top-2 -right-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-lg z-10 rotate-12"
                      style={{ opacity: likeOpacity }}
                    >
                      LIKE
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -left-2 bg-destructive text-white px-4 py-2 rounded-lg font-bold text-lg z-10 -rotate-12"
                      style={{ opacity: nopeOpacity }}
                    >
                      NOPE
                    </motion.div>
                  </>
                )}
                <IdeaCard idea={idea} isTop={isTop} />
              </motion.div>
            );
          })}
      </div>
    );
  }
);
