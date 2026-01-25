"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo, AnimatePresence } from "framer-motion";
import { Handshake, Hand } from "lucide-react";

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
    xp: "8,900 XP",
    color: "bg-[#1a1a1a]",
  },
  {
    id: "2",
    title: "ライブのチケット当選確率を可視化してほしい",
    tags: ["#ライブ", "#分析", "#運"],
    xp: "5,400 XP",
    color: "bg-[#1f1f1f]",
  },
  {
    id: "3",
    title: "推しのメディア出演情報をカレンダーに自動登録",
    tags: ["#スケジュール", "#自動化"],
    xp: "12,000 XP",
    color: "bg-[#1a1a1a]",
  },
];

export function SwipeableCardStack() {
  const [cards, setCards] = useState(MOCK_CARDS);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Overlay Opacity
  const stampOpacity = useTransform(x, [0, 100], [0, 1]);
  const nopeOpacity = useTransform(x, [-100, 0], [1, 0]);
  
  // Background scale for the card behind
  const scale = useTransform(x, [-200, 0, 200], [1.05, 1, 1.05]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x > 100) {
      // Swiped Right
      removeCard(cards[0].id);
    } else if (info.offset.x < -100) {
      // Swiped Left
      removeCard(cards[0].id);
    }
  };

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
    x.set(0); 
  };

  if (cards.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
         <p>No more contents.</p>
         <button onClick={() => setCards(MOCK_CARDS)} className="mt-4 text-primary underline">Reload</button>
      </div>
    );
  }

  return (
    <div className="relative w-full max-w-[340px] aspect-[3/4] mx-auto flex items-center justify-center">
      {cards.map((card, index) => {
        const isFront = index === 0;
        
        // Render only the first 3 cards for performance/visuals
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
          />
        );
      })}
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
}

function Card({ data, index, isFront, x, rotate, opacity, onDragEnd, stampOpacity, nopeOpacity }: CardProps) {
    // Stack effect: cards behind are smaller and lower
    const baseScale = 1 - index * 0.05;
    const translateY = index * 15;
    const zIndex = 50 - index;

    return (
      <motion.div
        style={{
          x: isFront ? x : 0,
          rotate: isFront ? rotate : 0,
          opacity: isFront ? opacity : 1 - index * 0.2,
          scale: baseScale,
          y: translateY,
          zIndex,
        }}
        drag={isFront ? "x" : false}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.6}
        onDragEnd={onDragEnd}
        className={`absolute inset-0 rounded-3xl p-6 flex flex-col justify-between border border-white/5 shadow-2xl ${data.color} cursor-grab active:cursor-grabbing backdrop-blur-sm`}
      >
        {/* Content */}
        <div className="flex flex-col gap-4">
           {/* Header / Meta */}
           <div className="flex justify-between items-center w-full">
               <div className="flex gap-2 flex-wrap">
                   {data.tags.map(tag => (
                       <span key={tag} className="text-[10px] text-white/60 bg-white/5 px-2 py-1 rounded-full border border-white/5">
                           {tag}
                       </span>
                   ))}
               </div>
               <div className="flex items-center gap-1 text-primary text-xs font-bold font-mono">
                   <span>★</span>
                   <span>{data.xp}</span>
               </div>
           </div>

           {/* Title */}
           <h2 className="text-2xl font-bold leading-relaxed text-white mt-4">
               {data.title}
           </h2>
        </div>

        {/* Bottom Decoration */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

        {/* Interaction Overlays */}
        {isFront && (
            <>
                {/* WAKARU Stamp (Right Swipe) */}
                <motion.div 
                    style={{ opacity: stampOpacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-primary rounded-full p-6 rotate-[-15deg] bg-black/80 backdrop-blur-md pointer-events-none"
                >
                    <div className="flex flex-col items-center justify-center">
                        <Handshake className="w-12 h-12 text-primary mb-1" />
                        <span className="text-xl font-black text-primary tracking-widest uppercase">WAKARU</span>
                    </div>
                </motion.div>
                
                {/* THROUGH Stamp (Left Swipe) */}
                <motion.div 
                    style={{ opacity: nopeOpacity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-cyan-400 rounded-full p-6 rotate-[15deg] bg-black/80 backdrop-blur-md pointer-events-none"
                >
                    <div className="flex flex-col items-center justify-center">
                        <Hand className="w-12 h-12 text-cyan-400 mb-1" />
                        <span className="text-xl font-black text-cyan-400 tracking-widest uppercase">スルー</span>
                    </div>
                </motion.div>
            </>
        )}
      </motion.div>
    );
}
