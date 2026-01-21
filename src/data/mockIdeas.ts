import { Idea } from "@/types/idea";

export const mockIdeas: Idea[] = [
  {
    id: "1",
    title: "全ファンクラブの更新期限を一元管理して通知してくれ",
    description: "数が多すぎて管理不能。メールだと見逃すから通知が欲しい。",
    tags: ["推し活", "管理"],
    xp: 8900,
    isTrending: true,
    status: "trend",
    icon: "smartphone",
    createdAt: new Date("2025-01-15"),
  },
  {
    id: "2",
    title: "コードレビューのコメントを自動でタスク化してくれ",
    description: "PRのコメントをいちいちコピペしてIssue作るの面倒。自動化したい。",
    tags: ["効率化", "管理"],
    xp: 7200,
    isTrending: true,
    status: "trend",
    icon: "code",
    createdAt: new Date("2025-01-18"),
  },
  {
    id: "3",
    title: "推しの出演情報を全メディアから収集してカレンダーに入れて",
    description: "TV、ラジオ、配信、雑誌...散らばりすぎ。見逃したくない。",
    tags: ["推し活", "効率化"],
    xp: 6500,
    isTrending: true,
    status: "trend",
    icon: "calendar",
    createdAt: new Date("2025-01-20"),
  },
  {
    id: "4",
    title: "毎日の学習記録をStreakで可視化してモチベ維持したい",
    description: "Duolingoみたいな連続記録機能。途切れると悔しくなるやつ。",
    tags: ["学習", "管理"],
    xp: 5800,
    isTrending: false,
    status: "new",
    icon: "flame",
    createdAt: new Date("2025-01-21"),
  },
  {
    id: "5",
    title: "オンライン会議の発言量を可視化して振り返りたい",
    description: "自分がどれだけ話したか、誰が話しすぎてるか知りたい。",
    tags: ["効率化", "管理"],
    xp: 4200,
    isTrending: false,
    status: "new",
    icon: "mic",
    createdAt: new Date("2025-01-21"),
  },
  {
    id: "6",
    title: "睡眠の質をスマートウォッチから取得して朝の行動を最適化",
    description: "睡眠スコアに応じてその日のスケジュールを調整してほしい。",
    tags: ["健康", "効率化"],
    xp: 3900,
    isTrending: false,
    status: "new",
    icon: "moon",
    createdAt: new Date("2025-01-20"),
  },
  {
    id: "7",
    title: "積読本をスキャンして読了予測を出してくれ",
    description: "この山、いつ消化できるのか現実を知りたい（知りたくない）。",
    tags: ["学習", "管理"],
    xp: 12500,
    isTrending: false,
    status: "solved",
    icon: "book",
    createdAt: new Date("2025-01-10"),
  },
  {
    id: "8",
    title: "映画のエンドロール中に次の予定を表示してくれ",
    description: "映画終わった瞬間に「次の電車は○分後」って出てほしい。",
    tags: ["エンタメ", "効率化"],
    xp: 9800,
    isTrending: false,
    status: "solved",
    icon: "film",
    createdAt: new Date("2025-01-05"),
  },
];

export function getIdeasByStatus(status: Idea["status"]): Idea[] {
  return mockIdeas.filter((idea) => idea.status === status);
}

export function getTrendingIdeas(): Idea[] {
  return mockIdeas.filter((idea) => idea.isTrending);
}
