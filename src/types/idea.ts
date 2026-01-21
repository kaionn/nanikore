export type IdeaCategory = "推し活" | "管理" | "効率化" | "エンタメ" | "学習" | "健康";

export type IdeaStatus = "trend" | "new" | "solved";

export interface Idea {
  id: string;
  title: string;
  description: string;
  tags: IdeaCategory[];
  xp: number;
  isTrending: boolean;
  status: IdeaStatus;
  icon: string;
  createdAt: Date;
}

export type TabType = "trend" | "new" | "solved";

export interface Tab {
  id: TabType;
  label: string;
}

export const TABS: Tab[] = [
  { id: "trend", label: "トレンド" },
  { id: "new", label: "新着" },
  { id: "solved", label: "解決済み" },
];
