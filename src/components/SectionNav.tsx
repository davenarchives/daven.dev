"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";

const sections = [
  { id: "hero", label: "Intro" },
  { id: "experience", label: "Experience" },
  { id: "tools-section", label: "Tools" },
  { id: "projects", label: "Projects" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [direction, setDirection] = useState(1);
  const prevIndexRef = useRef(0);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isScrollingRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          let maxVisibleHeight = 0;
          let mostVisibleId = "";

          sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
              const rect = element.getBoundingClientRect();
              
              // Calculate exactly how many vertical pixels of this section are currently visible on screen
              const topVisible = Math.max(0, rect.top);
              const bottomVisible = Math.min(window.innerHeight, rect.bottom);
              const visibleHeight = Math.max(0, bottomVisible - topVisible);

              if (visibleHeight > maxVisibleHeight) {
                maxVisibleHeight = visibleHeight;
                mostVisibleId = id;
              }
            }
          });

          if (mostVisibleId) {
            const newIndex = sections.findIndex(s => s.id === mostVisibleId);
            if (newIndex !== prevIndexRef.current && newIndex !== -1) {
              setDirection(newIndex > prevIndexRef.current ? 1 : -1);
              prevIndexRef.current = newIndex;
              setActiveSection(mostVisibleId);
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Attach passive scroll listener for perfect 60fps tracking
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const newIndex = sections.findIndex(s => s.id === id);
    if (newIndex !== prevIndexRef.current) {
      setDirection(newIndex > prevIndexRef.current ? 1 : -1);
      prevIndexRef.current = newIndex;
      setActiveSection(id);
    }
    
    isScrollingRef.current = true;
    const offsetTop = id === "hero" ? 0 : element.getBoundingClientRect().top + window.scrollY;

    // Fast, snappy scroll matching Legwork's 400-600ms feel
    animate(window.scrollY, offsetTop, {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => window.scrollTo(0, value),
      onComplete: () => {
        setTimeout(() => { isScrollingRef.current = false; }, 50);
      }
    });
  };

  const activeIndex = sections.findIndex(s => s.id === activeSection);

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col items-center gap-6">
      
      {/* Animated Top Number Track */}
      <div className="relative h-[20px] w-[20px] overflow-hidden">
        <motion.div
          initial={false}
          animate={{ y: -(activeIndex >= 0 ? activeIndex : 0) * 20 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="flex flex-col items-center absolute top-0 left-0 w-full"
        >
          {sections.map((_, i) => (
            <span 
              key={i} 
              className="flex h-[20px] items-center justify-center text-[14px] font-mono font-medium text-black dark:text-white"
            >
              0{i + 1}
            </span>
          ))}
        </motion.div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center justify-center w-6 h-6 outline-none"
              aria-label={`Scroll to ${section.label}`}
            >
              {/* Tooltip on the Left Side */}
              <span className="absolute right-8 px-2 py-1 bg-black text-white dark:bg-white dark:text-black text-[11px] rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap font-mono font-bold shadow-sm">
                {section.label}
              </span>

              {/* Dot Wrapper */}
              <div 
                className={`relative flex items-center justify-center transition-all duration-400 rounded-full ${
                  isActive 
                    ? 'w-4 h-4 border-[1.5px] border-black dark:border-white bg-transparent' 
                    : 'w-1.5 h-1.5'
                }`}
              >
                {/* Inner Dot */}
                <div 
                  className={`rounded-full bg-black dark:bg-white transition-all duration-400 ${
                    isActive ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5 group-hover:scale-[1.7]'
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      <span className="text-[14px] font-mono font-medium text-black dark:text-white">04</span>
    </div>
  );
}
