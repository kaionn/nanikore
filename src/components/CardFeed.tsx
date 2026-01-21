"use client";

import { IdeaCard } from "./IdeaCard";
import { Idea } from "@/types/idea";

interface CardFeedProps {
  ideas: Idea[];
  onAgree?: (idea: Idea) => void;
}

export function CardFeed({ ideas, onAgree }: CardFeedProps) {
  if (ideas.length === 0) {
    return (
      <div className="flex items-center justify-center h-48">
        <p className="text-muted-foreground">アイデアがありません</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {ideas.map((idea, index) => (
        <IdeaCard
          key={idea.id}
          idea={idea}
          isTop={index === 0}
          onAgree={onAgree}
        />
      ))}
    </div>
  );
}
