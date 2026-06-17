"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const sequenceConfig = [
  {
    id: "start",
    eyebrow: "STUCK IN TUTORIAL HELL?",
    eyebrowClass: "bg-[#bc2424] text-white dark:text-[#141f36]",
    body: [
      { content: "You've watched 999 hours of JavaScript tutorials..." },
      { content: "but still can't ", accent: "CENTER A DIV.", modifier: "text-[#bc2424]", gif: "/assets/centerdiv.gif" }
    ],
    footer: { href: "#solution", content: "oh no. 😢" }
  },
  {
    id: "solution",
    eyebrow: "SOLUTION",
    eyebrowClass: "bg-[#1fd46b] text-white dark:text-[#04140d]",
    body: [
      { content: "Embrace the chaos." },
      { content: "Welcome to ", accent: "VIBE CODING.", modifier: "text-[#1fd46b]", gif: "/assets/vibe.gif" }
    ],
    footer: { href: "#stop-watching", content: "but like how? 🤔" }
  },
  {
    id: "stop-watching",
    eyebrow: "STOP WATCHING",
    eyebrowClass: "bg-[#b646f5] text-white dark:text-[#1a0634]",
    body: [
      { content: "Tutorials you'll forget ", accent: "TOMORROW.", modifier: "text-[#b646f5]", gif: "/assets/tomorrow.gif" }
    ],
    footer: { href: "#start-building", content: "what? why? 🤨" }
  },
  {
    id: "start-building",
    eyebrow: "START BUILDING",
    eyebrowClass: "bg-[#2c9eed] text-white dark:text-[#04233a]",
    body: [
      { content: "Stuff that ", accent: "BARELY WORKS", modifier: "text-[#2c9eed]", gif: "/assets/barelyworks.gif", suffix: " — and fix it live." },
      { content: "Learn coding fundamentals by ", accent: "BREAKING THEM.", modifier: "text-[#2c9eed]", gif: "/assets/breakingthem.gif" }
    ],
    footer: { href: "#have-fun", content: "is that possible? 😳" }
  },
  {
    id: "have-fun",
    eyebrow: "HAVE FUN",
    eyebrowClass: "bg-[#f29e24] text-white dark:text-[#2a1402]",
    body: [
      { content: "Stop learning. ", accent: "START DOING.", modifier: "text-[#f29e24]", gif: "/assets/havefun.gif" },
      { content: "Make weird stuff that works!" }
    ],
    footer: { href: "#projects", content: "hell yeah! 😎" }
  }
];

export function VibeSequence() {
  const [activeGif, setActiveGif] = useState<string | null>(null);
  const [lastActiveGif, setLastActiveGif] = useState<string | null>(null);

  useEffect(() => {
    if (activeGif) {
      setLastActiveGif(activeGif);
    }
  }, [activeGif]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 250, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full bg-background font-sans text-muted-foreground transition-colors duration-300">
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[99999]"
        style={{ x: cursorX, y: cursorY }}
      >
        <div style={{ transform: "translate(-50%, calc(-100% - 15px))" }}>
          <motion.div
            animate={{
              opacity: activeGif ? 1 : 0,
              scale: activeGif ? 1 : 0.8,
              y: activeGif ? 0 : 20,
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            style={{
              width: "240px",
              pointerEvents: "none",
            }}
          >
            {lastActiveGif && (
              <img
                src={lastActiveGif}
                alt="Hover GIF"
                className="w-full h-auto drop-shadow-[0_12px_22px_rgba(0,0,0,0.35)] object-cover rounded-xl"
              />
            )}
          </motion.div>
        </div>
      </motion.div>

      {sequenceConfig.map((item) => (
        <section
          key={item.id}
          id={item.id}
          className="min-h-screen flex items-center justify-center text-center px-6 py-24"
        >
          <div className="max-w-[760px] flex flex-col items-center gap-8 md:gap-12 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={cn(
                "inline-block px-8 py-4 font-black tracking-[0.23em] text-2xl md:text-3xl lg:text-4xl uppercase whitespace-nowrap",
                item.eyebrowClass
              )}
              style={{ fontFamily: "var(--font-lilita), system-ui, sans-serif" }}
            >
              {item.eyebrow}
            </motion.div>

            <div className="flex flex-col gap-2 w-full">
              {item.body.map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * (idx + 1), ease: "easeOut" }}
                  className="m-0 text-xl md:text-3xl font-medium leading-relaxed max-w-[40ch] mx-auto text-foreground/80"
                >
                  {line.content}
                  {line.accent && (
                    <span
                      className={cn(
                        "cursor-pointer tracking-[0.15em] font-black uppercase transition-opacity hover:opacity-80",
                        line.modifier
                      )}
                      style={{ fontFamily: "var(--font-lilita), system-ui, sans-serif" }}
                      onMouseEnter={() => setActiveGif(line.gif || null)}
                      onMouseLeave={() => setActiveGif(null)}
                    >
                      {line.accent}
                    </span>
                  )}
                  {(line as any).suffix && <span>{(line as any).suffix}</span>}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
              className="mt-4"
            >
              <a
                href={item.footer.href}
                onClick={(e) => {
                  if (item.footer.href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(item.footer.href);
                    if (target) {
                      target.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="inline-flex text-lg md:text-xl font-bold text-foreground transition-transform"
              >
                <motion.span
                  animate={{ y: [0, -8, -3, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                  className="hover:opacity-80 transition-opacity"
                >
                  {item.footer.content}
                </motion.span>
              </a>
            </motion.div>
          </div>
        </section>
      ))}
    </div>
  );
}
