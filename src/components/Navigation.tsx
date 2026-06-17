"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { Monitor, Moon, Sun, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Vibe Coding", href: "#start" },
  { name: "Projects", href: "#projects" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "home";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id") || "home";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(nextTheme);
      return;
    }

    const { clientX, clientY } = e;
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY)
    );
    const clipPath = [
      `circle(0px at ${clientX}px ${clientY}px)`,
      `circle(${radius}px at ${clientX}px ${clientY}px)`,
    ];

    const transition = document.startViewTransition(() => {
      setTheme(nextTheme);
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: nextTheme === "dark" ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 300,
          easing: "ease-in",
          pseudoElement: `::view-transition-${nextTheme === "dark" ? "old" : "new"}(root)`,
        }
      );
    });
  };

  const getThemeIcon = () => {
    if (!mounted) return <Moon className="w-5 h-5" />;
    if (theme === "dark") return <Moon className="w-5 h-5 text-brand-cyan" />;
    if (theme === "light") return <Sun className="w-5 h-5 text-brand-orange" />;
    return <Monitor className="w-5 h-5 text-brand-gray" />;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="w-6 h-6 text-brand-orange" />
          <span className="font-mono font-bold text-lg tracking-tight">Daven<span className="text-brand-orange">Archives</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = (() => {
              const name = item.name.toLowerCase();
              if (name === "home") return activeSection === "home";
              if (name === "vibe coding") {
                return ["start", "solution", "stop-watching", "start-building", "have-fun"].includes(activeSection);
              }
              return activeSection === name;
            })();

            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors hover:text-brand-orange",
                  isActive ? "text-brand-orange" : "text-foreground/70"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-surface-hover transition-colors"
            aria-label="Toggle Theme"
          >
            {getThemeIcon()}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
