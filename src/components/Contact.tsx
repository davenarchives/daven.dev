"use client";

import { motion } from "framer-motion";
import { Mail, Terminal, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-brand-navy/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              LET'S <span className="text-brand-cyan">CONNECT.</span>
            </h2>
            <p className="text-xl text-foreground/70 mb-10 max-w-md font-mono">
              Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:hello@davenarchives.com" 
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-surface-hover hover:border-brand-cyan/50 transition-all group w-full max-w-sm"
              >
                <div className="w-12 h-12 bg-brand-cyan/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-brand-cyan" />
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-bold group-hover:text-brand-cyan transition-colors">hello@davenarchives.com</div>
                </div>
              </a>
              
              <a 
                href="https://github.com/davenarchives" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-surface-hover hover:border-brand-orange/50 transition-all group w-full max-w-sm"
              >
                <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-brand-orange" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">Github</div>
                  <div className="font-bold group-hover:text-brand-orange transition-colors">github.com/davenarchives</div>
                </div>
              </a>
              
              <a 
                href="#" 
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-surface-hover hover:border-[#0A66C2]/50 transition-all group w-full max-w-sm opacity-80"
              >
                <div className="w-12 h-12 bg-[#0A66C2]/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </div>
                <div>
                  <div className="text-xs font-mono text-foreground/50 uppercase tracking-wider mb-1">LinkedIn</div>
                  <div className="font-bold group-hover:text-[#0A66C2] transition-colors">Connect on LinkedIn</div>
                </div>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 crt-overlay overflow-hidden">
              <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                <Terminal className="w-5 h-5 text-brand-orange" />
                <span className="font-mono text-sm tracking-wider">message.exe</span>
              </div>
              
              <form className="space-y-4 font-mono relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs text-brand-cyan mb-2">{">"} INPUT_NAME</label>
                  <input 
                    type="text" 
                    className="w-full bg-surface-hover/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="_"
                  />
                </div>
                <div>
                  <label className="block text-xs text-brand-cyan mb-2">{">"} INPUT_EMAIL</label>
                  <input 
                    type="email" 
                    className="w-full bg-surface-hover/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors"
                    placeholder="_"
                  />
                </div>
                <div>
                  <label className="block text-xs text-brand-cyan mb-2">{">"} SYSTEM_MESSAGE</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-surface-hover/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-cyan transition-colors resize-none"
                    placeholder="Type your message here..."
                  />
                </div>
                
                <button className="w-full py-4 bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 rounded-lg hover:bg-brand-cyan hover:text-brand-navy transition-all flex items-center justify-center gap-2 font-bold tracking-widest mt-6">
                  EXECUTE_SEND <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
            
            {/* Background glowing blur for terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-cyan/20 blur-[100px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
