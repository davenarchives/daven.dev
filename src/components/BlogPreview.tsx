"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "The Philosophy of Vibe Coding",
    excerpt: "Why feeling the code is sometimes more important than strictly typing it. A deep dive into creative engineering.",
    date: "2026-06-12",
    tags: ["Philosophy", "Engineering"],
  },
  {
    id: 2,
    title: "Building Futuristic UIs with Framer Motion",
    excerpt: "Learn how to craft micro-interactions and cinematic animations that make your web apps feel alive.",
    date: "2026-05-28",
    tags: ["React", "Animation"],
  },
  {
    id: 3,
    title: "Embracing the Void: Dark Mode by Default",
    excerpt: "An exploration of color theory in modern developer tools and why dark navy/charcoal is the new black.",
    date: "2026-04-15",
    tags: ["Design", "CSS"],
  }
];

export function BlogPreview() {
  return (
    <section id="blogs" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              LATEST <span className="text-brand-orange">THOUGHTS.</span>
            </h2>
            <p className="text-foreground/70 font-mono">Writing about design, code, and aesthetics.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 font-mono text-sm text-brand-cyan hover:text-brand-orange transition-colors">
            View All Posts <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={post.id}
              className="group cursor-pointer"
            >
              <div className="glass p-8 rounded-2xl h-full border border-white/5 hover:border-brand-orange/30 transition-all hover:shadow-[0_10px_30px_rgba(245,158,11,0.1)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-cyan/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-brand-orange/20 transition-colors" />
                
                <div className="flex items-center gap-2 text-xs font-mono text-foreground/50 mb-4">
                  <Calendar className="w-3 h-3" />
                  <time>{post.date}</time>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-foreground/70 mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-surface-hover rounded-full text-xs font-mono text-foreground/60">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        
        <button className="md:hidden mt-8 w-full flex items-center justify-center gap-2 font-mono text-sm py-4 glass rounded-xl text-brand-cyan hover:text-brand-orange transition-colors">
          View All Posts <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
