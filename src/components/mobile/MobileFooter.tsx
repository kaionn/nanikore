import { Home, Search, User } from "lucide-react";

export function MobileFooter() {
  return (
    <nav className="w-full px-6 py-6 pb-8 flex justify-between items-center bg-transparent z-10">
      <button className="p-3 rounded-full hover:bg-white/5 transition-colors group">
        <Home className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
      </button>
      <button className="p-3 rounded-full hover:bg-white/5 transition-colors group">
        <Search className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
      </button>
      <button className="p-3 rounded-full hover:bg-white/5 transition-colors group">
        <User className="w-6 h-6 text-muted-foreground group-hover:text-white transition-colors" />
      </button>
    </nav>
  );
}
