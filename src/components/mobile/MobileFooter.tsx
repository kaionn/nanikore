import { Home, Search, User, Zap } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function MobileFooter() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", icon: Home, label: "Home" },
    { id: "search", icon: Search, label: "Search" },
    { id: "actions", icon: Zap, label: "Actions", isMain: true },
    { id: "profile", icon: User, label: "Profile" },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[320px]">
      <nav className="glass-panel rounded-full p-2 flex justify-between items-center relative ring-1 ring-white/10 ring-offset-0">
         {/* Background Glow */}
        <div className="absolute inset-x-0 -bottom-4 h-10 bg-primary/20 blur-xl rounded-[50%]" />

        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const Icon = tab.icon;
          
          if (tab.isMain) {
             return (
               <button
                 key={tab.id}
                 onClick={() => setActiveTab(tab.id)}
                 className="relative group p-1" 
               >
                 <div className="absolute inset-0 bg-primary/20 blur-md rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                 <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/50 flex items-center justify-center relative z-10 group-active:scale-95 transition-transform">
                   <Icon className="w-6 h-6 text-primary" fill="currentColor" />
                 </div>
               </button>
             );
          }

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative p-3 rounded-full transition-all duration-300 w-12 h-12 flex items-center justify-center ${
                isActive ? "text-primary bg-white/5" : "text-muted-foreground hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : "scale-100"}`} />
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-1 w-1 h-1 bg-primary rounded-full neon-glow-sm"
                />
              )}
            </button>
           );
        })}
      </nav>
    </div>
  );
}
