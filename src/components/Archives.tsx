"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, GitBranch, ExternalLink, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  updated_at: string;
  language: string;
  topics: string[];
}

export function Archives() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"recent" | "stars">("recent");

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/davenarchives/repos?per_page=100");
        if (res.ok) {
          const data = await res.json();
          setRepos(data);
        }
      } catch (error) {
        console.error("Failed to fetch repos", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const getCategory = (repo: Repo) => {
    const topics = repo.topics || [];
    const lang = (repo.language || "").toLowerCase();
    
    if (topics.includes("frontend") || lang === "css" || lang === "html") return "Frontend";
    if (topics.includes("backend") || lang === "python" || lang === "go") return "Backend";
    if (topics.includes("fullstack")) return "Fullstack";
    if (topics.includes("experimental") || topics.includes("fun")) return "Experimental";
    
    // Inferred fallback
    if (lang === "typescript" || lang === "javascript") return "Frontend";
    return "Experimental";
  };

  const filteredRepos = repos
    .filter((repo) => {
      if (filter !== "All" && getCategory(repo) !== filter && !repo.topics?.includes(filter.toLowerCase())) {
        return false;
      }
      if (search && !repo.name.toLowerCase().includes(search.toLowerCase()) && !repo.description?.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "stars") return b.stargazers_count - a.stargazers_count;
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    });

  const filters = ["All", "Frontend", "Backend", "Fullstack", "Experimental"];

  return (
    <section id="archives" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            THE <span className="text-brand-orange">ARCHIVES.</span>
          </h2>
          <p className="text-foreground/70 font-mono">Exploring experimental code and past projects.</p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-mono transition-all",
                  filter === f 
                    ? "bg-brand-orange text-brand-navy shadow-[0_0_15px_rgba(245,158,11,0.4)]" 
                    : "glass hover:bg-surface-hover text-foreground"
                )}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50 group-focus-within:text-brand-cyan transition-colors" />
              <input
                type="text"
                placeholder="Search archives..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 rounded-full glass bg-transparent border-white/10 focus:border-brand-cyan focus:outline-none focus:ring-1 focus:ring-brand-cyan text-sm font-mono w-full md:w-64 transition-all"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-4 py-2 rounded-full glass bg-transparent border-white/10 focus:outline-none focus:border-brand-orange text-sm font-mono appearance-none"
            >
              <option value="recent">Recent</option>
              <option value="stars">Stars</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="w-12 h-12 border-4 border-brand-orange/30 border-t-brand-orange rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredRepos.map((repo, i) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  key={repo.id}
                  className="group relative glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full border border-white/5 hover:border-brand-orange/30 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold font-mono group-hover:text-brand-orange transition-colors truncate pr-4">
                        {repo.name}
                      </h3>
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-foreground/50 hover:text-brand-cyan transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                    
                    <p className="text-sm text-foreground/70 mb-6 flex-grow line-clamp-3">
                      {repo.description || "No description provided."}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4 text-xs font-mono text-foreground/60">
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
                            {repo.language}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          {repo.stargazers_count}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-foreground/40">
                        {new Date(repo.updated_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
