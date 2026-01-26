"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useTransform, PanInfo, animate } from "framer-motion";
import { Handshake, Hand, ArrowLeft, ArrowRight, Zap, Trophy, Tag } from "lucide-react";

interface CardData {
  id: string;
  title: string;
  tags: string[];
  xp: string;
  color: string;
}

const MOCK_CARDS: CardData[] = [
  {
    id: "1",
    title: "全ファンクラブの更新期限を一元管理して通知してくれ",
    tags: ["#推し活", "#管理", "#一元化"],
    xp: "8,900",
    color: "from-[#1a1a1a] to-[#0f0f0f]",
  },
  {
    id: "2",
    title: "ライブのチケット当選確率を可視化して分析したい",
    tags: ["#ライブ", "#分析", "#運"],
    xp: "5,400",
    color: "from-[#1f1f1f] to-[#121212]",
  },
  {
    id: "3",
    title: "推しのメディア出演情報をカレンダーに自動登録",
    tags: ["#スケジュール", "#自動化"],
    xp: "12,000",
    color: "from-[#1a1a1a] to-[#0f0f0f]",
  },
];

export function SwipeableCardStack() {
  const [cards, setCards] = useState(MOCK_CARDS);
  const [isAnimating, setIsAnimating] = useState(false);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Overlay Opacity
  const stampOpacity = useTransform(x, [20, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, -20], [1, 0]);
  
  // Background scale for the card behind
  const scale = useTransform(x, [-200, 0, 200], [1.02, 0.95, 1.02]);

  const removeCard = useCallback((id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    x.set(0);
    setIsAnimating(false);
  }, [x]);

  const triggerSwipe = useCallback((direction: "left" | "right") => {
    if (isAnimating || cards.length === 0) return;
    
    setIsAnimating(true);
    const targetX = direction === "right" ? 500 : -500;
    const currentCardId = cards[0].id;

    animate(x, targetX, {
      type: "spring",
      stiffness: 400,
      damping: 40,
      onComplete: () => {
        removeCard(currentCardId);
      },
    });
  }, [isAnimating, cards, x, removeCard]);

  // Keyboard support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        triggerSwipe("left");
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        triggerSwipe("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerSwipe]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (isAnimating) return;
    
    const swipeThreshold = 100;
    if (info.offset.x > swipeThreshold) {
      triggerSwipe("right");
    } else if (info.offset.x < -swipeThreshold) {
      triggerSwipe("left");
    }
  };

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-muted-foreground w-full">
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="glass-panel p-8 rounded-3xl flex flex-col items-center gap-4 text-center"
         >
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-2">
              <Zap className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">All Caught Up!</h3>
            <p className="text-sm max-w-[200px]">新しいアイデアが投稿されるのを待つか、自分で投稿してみましょう。</p>
            <button 
              onClick={() => setCards(MOCK_CARDS)} 
              className="mt-4 px-6 py-3 bg-primary text-black font-bold rounded-full hover:bg-white transition-colors"
            >
              もう一度見る
            </button>
         </motion.div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full max-w-sm mx-auto h-full justify-center relative">
      {/* Card Stack Container */}
      <div className="relative w-full aspect-[3/4.2] max-h-[60vh] perspective-1000">
        {cards.map((card, index) => {
          const isFront = index === 0;
          
          // Render only the first 3 cards for performance
          if (index > 2) return null;

          return (
            <Card
              key={card.id}
              data={card}
              index={index}
              isFront={isFront}
              x={isFront ? x : undefined}
              rotate={isFront ? rotate : undefined}
              opacity={isFront ? opacity : undefined}
              scale={isFront ? scale : undefined}
              onDragEnd={isFront ? handleDragEnd : undefined}
              stampOpacity={isFront ? stampOpacity : undefined}
              nopeOpacity={isFront ? nopeOpacity : undefined}
              isAnimating={isAnimating}
            />
          );
        })}
      </div>

      {/* Floating Action Buttons - Removed as per user request */}
    </div>
  );
}

interface CardProps {
  data: CardData;
  index: number;
  isFront: boolean;
  x?: any;
  rotate?: any;
  opacity?: any;
  scale?: any;
  onDragEnd?: (event: any, info: PanInfo) => void;
  stampOpacity?: any;
  nopeOpacity?: any;
  isAnimating?: boolean;
}

function Card({ data, index, isFront, x, rotate, opacity, onDragEnd, stampOpacity, nopeOpacity, isAnimating }: CardProps) {
    // Stack effect logic refined for smoother depth
    const yOffset = index * 12;
    const scaleOffset = 1 - index * 0.04;
    const brightness = 1 - index * 0.3;
    const zIndex = 50 - index;

    return (
      <motion.div
        style={{
          x: isFront ? x : 0,
          rotate: isFront ? rotate : 0,
          opacity: isFront ? opacity : 1, // Keep back cards visible but dimmed
          scale: isFront ? 1 : scaleOffset, // Controlled by parent for front card animation
          y: yOffset,
          zIndex,
          filter: `brightness(${brightness})`,
        }}
        drag={isFront && !isAnimating ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.7} // More resistance
        onDragEnd={onDragEnd}
        className={`absolute inset-0 rounded-[2rem] p-1 bg-gradient-to-br border border-white/5 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing origin-bottom`}
      >
        {/* Inner Card Content */}
        <div className={`w-full h-full rounded-[1.8rem] bg-gradient-to-b ${data.color} p-6 flex flex-col justify-between relative overflow-hidden`}>
           {/* Abstract Pattern Overlay */}
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none" />
           
           {/* Header */}
           <div className="relative w-full z-10">
               <div className="flex justify-between items-start mb-4">
                   <div className="flex gap-1.5 flex-wrap max-w-[70%]">
                       {data.tags.map(tag => (
                           <span key={tag} className="text-[10px] font-bold text-white/90 bg-white/10 px-2.5 py-1 rounded-md border border-white/5 backdrop-blur-sm">
                               {tag}
                           </span>
                       ))}
                   </div>
                   <div className="flex items-center gap-1.5 text-black bg-primary px-2.5 py-1 rounded-full font-mono font-bold text-xs shadow-[0_0_10px_var(--primary)]">
                       <Trophy className="w-3 h-3" />
                       <span>{data.xp}</span>
                   </div>
               </div>
           </div>

           {/* Main Content */}
           <div className="relative z-10 flex-1 flex flex-col justify-center">
              <h2 className="text-3xl font-black leading-tight text-white drop-shadow-md pb-4">
                  {data.title}
              </h2>
           </div>

           {/* Footer / Meta */}
           <div className="relative z-10 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 border border-white/20" />
                   <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground">Proposed by</span>
                      <span className="text-xs font-bold text-white tracking-wide">Anonymous dev</span>
                   </div>
                </div>
           </div>

           {/* Interaction Stamps */}
           {isFront && (
             <>
                 {/* WAKARU Stamp (Right Swipe) */}
                 <motion.div 
                     style={{ opacity: stampOpacity }}
                     className="absolute top-12 left-8 border-4 border-primary rounded-xl px-4 py-2 rotate-[-12deg] bg-black/50 backdrop-blur-md pointer-events-none z-20 shadow-[0_0_20px_var(--primary)]"
                 >
                     <span className="text-4xl font-black text-primary tracking-tighter uppercase italic drop-shadow-[0_2px_0_black]">WAKARU</span>
                 </motion.div>
                 
                 {/* THROUGH Stamp (Left Swipe) */}
                 <motion.div 
                     style={{ opacity: nopeOpacity }}
                     className="absolute top-12 right-8 border-4 border-red-500 rounded-xl px-4 py-2 rotate-[12deg] bg-black/50 backdrop-blur-md pointer-events-none z-20 shadow-[0_0_20px_var(--destructive)]"
                 >
                     <span className="text-4xl font-black text-red-500 tracking-tighter uppercase italic drop-shadow-[0_2px_0_black]">NOPE</span>
                 </motion.div>
             </>
           )}
        </div>
      </motion.div>
    );
}
