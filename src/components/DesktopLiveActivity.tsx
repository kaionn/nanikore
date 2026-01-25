import { useEffect, useState } from "react";
import { Zap, ThumbsUp, Flame, MessageSquare } from "lucide-react";

type ActivityType = "commit" | "vote" | "trend" | "new";

interface Activity {
  id: string;
  type: ActivityType;
  user?: string;
  desc: string;
  time: string;
  xp?: string;
}

const MOCK_ACTIVITIES: Activity[] = [
  { id: "1", type: "commit", user: "@Kenta_JS", desc: "が『深夜の美容室』の解決に着手!", time: "Just Now" },
  { id: "2", type: "vote", user: "@Miku39", desc: "が『詰め替え問題』に投票", time: "2m ago", xp: "+10 XP" },
  { id: "3", type: "trend", desc: "#AI開発 の投稿が急増中!", time: "5m ago" },
  { id: "4", type: "new", desc: "新着の不満が投稿されました", time: "10m ago" },
  { id: "5", type: "vote", user: "@Taro_Dev", desc: "が『満員電車』に投票", time: "12m ago", xp: "+10 XP" },
  { id: "6", type: "commit", user: "@Sakura_UI", desc: "が『UI改善』の解決に着手!", time: "15m ago" },
];

export function DesktopLiveActivity() {
  return (
    <aside className="w-80 h-screen fixed right-0 top-0 border-l border-sidebar-border bg-sidebar/80 backdrop-blur-md z-40 flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-border bg-sidebar-accent/20">
        <div className="flex items-center gap-2">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-destructive"></span>
            </div>
            <h2 className="text-sm font-bold tracking-wider text-destructive uppercase">LIVE TICKER (活動ログ)</h2>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="flex-1 overflow-hidden relative">
          {/* Fade gradients */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-sidebar to-transparent z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-sidebar to-transparent z-10" />
          
          <div className="p-4 space-y-4 overflow-y-auto h-full pb-20 scrollbar-hide">
            {MOCK_ACTIVITIES.map((activity) => (
                <ActivityItem key={activity.id} item={activity} />
            ))}
             {/* Duplicate for visual length */}
             {MOCK_ACTIVITIES.map((activity) => (
                <ActivityItem key={`dup-${activity.id}`} item={activity} />
            ))}
          </div>
      </div>
    </aside>
  );
}

function ActivityItem({ item }: { item: Activity }) {
    const getIcon = () => {
        switch (item.type) {
            case "commit": return <Zap className="w-4 h-4 text-neon" />;
            case "vote": return <ThumbsUp className="w-3 h-3 text-secondary-foreground" />;
            case "trend": return <Flame className="w-4 h-4 text-orange-500" />;
            case "new": return <MessageSquare className="w-3 h-3 text-blue-400" />;
        }
    };

    return (
        <div className="flex gap-3 p-3 rounded-lg border border-border/50 bg-card/20 hover:bg-card/40 transition-colors">
            <div className="mt-1 shrink-0">
                <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center border border-border
                    ${item.type === 'commit' ? 'bg-neon/10 border-neon/30' : 'bg-secondary'}
                `}>
                    {getIcon()}
                </div>
            </div>
            <div className="flex-1 min-w-0">
                <div className="text-xs text-muted-foreground mb-0.5 font-mono">{item.time}</div>
                <div className="text-sm leading-snug">
                    {item.user && <span className="font-bold text-foreground mr-1">{item.user}</span>}
                    <span className="text-muted-foreground">{item.desc}</span>
                    {item.xp && <span className="ml-1 text-neon text-xs font-mono">{item.xp}</span>}
                </div>
            </div>
        </div>
    )
}
