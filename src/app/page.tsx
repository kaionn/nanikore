"use client";

import { useState, useRef } from "react";
import { Header } from "@/components/Header";
import { TabNav } from "@/components/TabNav";
import { CardStack, CardStackRef } from "@/components/CardStack";
import { SwipeControls } from "@/components/SwipeControls";
import { ActionButton } from "@/components/ActionButton";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { getIdeasByStatus } from "@/data/mockIdeas";
import { TabType, Idea } from "@/types/idea";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("trend");
  const [likedIdea, setLikedIdea] = useState<Idea | null>(null);
  const [hasCards, setHasCards] = useState(true);
  const cardStackRef = useRef<CardStackRef>(null);

  const ideas = getIdeasByStatus(activeTab);

  const handleSwipe = (idea: Idea, direction: "left" | "right") => {
    if (direction === "right") {
      setLikedIdea(idea);
    }
  };

  const handleNope = () => {
    cardStackRef.current?.swipe("left");
  };

  const handleLike = () => {
    cardStackRef.current?.swipe("right");
  };

  const handleBuildIt = () => {
    if (likedIdea) {
      alert(`「${likedIdea.title}」にコミットしました！🚀`);
      setLikedIdea(null);
    }
  };

  const handleAddIdea = () => {
    alert("新しいアイデアを投稿する機能は準備中です 🚧");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col max-w-md mx-auto border-x border-gray-800">
      <Header />
      <TabNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 pb-24">
        <div className="card-stack-glow">
          <CardStack ref={cardStackRef} ideas={ideas} onSwipe={handleSwipe} />
        </div>
        <SwipeControls
          onNope={handleNope}
          onLike={handleLike}
          disabled={!hasCards}
        />
      </main>

      <FloatingActionButton onClick={handleAddIdea} />

      <footer className="p-4 pb-8 max-w-md mx-auto w-full fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background/90 to-transparent">
        <ActionButton onClick={handleBuildIt} disabled={!likedIdea} />
      </footer>
    </div>
  );
}
