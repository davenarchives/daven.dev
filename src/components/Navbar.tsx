"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 h-[80px] bg-[#fafafa] dark:bg-[#171717] transition-colors">
      <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-6 lg:px-12">
        <Link href="/" className="font-bold text-lg lg:text-xl tracking-tight flex items-baseline">
          <span className="text-yellow-400 text-sm lg:text-base mr-1.5">{">_"}</span>
          <span className="text-black dark:text-white transition-colors">daven</span>
          <span className="text-yellow-400">.dev</span>
        </Link>

        <div className="hidden lg:flex items-center gap-12">

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted && theme === "dark" ? (
              <Moon className="w-5 h-5 text-cyan-400" />
            ) : mounted ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu fallback */}
        <div className="lg:hidden flex items-center gap-4">
           <button onClick={toggleTheme} className="p-2">
             {mounted && theme === "dark" ? <Moon className="w-5 h-5 text-cyan-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
           </button>
        </div>
      </div>
    </nav>
  );
}
