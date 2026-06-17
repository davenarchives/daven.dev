"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left Column: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center md:justify-end order-2 md:order-1"
        >
          <div className={`relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-[8px] ${isDarkMode ? "border-cyan-400" : "border-yellow-400"} transition-colors duration-300`}>
             <Image 
                src={isDarkMode ? "/assets/darkmode.png" : "/assets/lightmode.png"} 
                alt="Daven Austhine Sumagang"
                fill
                className="object-cover"
                priority
              />
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 order-1 md:order-2"
        >
          <div>
            <p className="text-sm md:text-base font-semibold text-black dark:text-white mb-2">
              Hi Im,
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-2">
              Daven Austhine Sumagang
            </h1>
            <h2 className="text-xl md:text-2xl italic text-gray-500 dark:text-slate-400">
              UI/UX & Front-end Developer
            </h2>
          </div>

          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-md">
            Just a front-end developer who designs minimalist interfaces and loves vibing with code
          </p>

          <div className="flex gap-4 items-center">
            <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
              <img src={`https://cdn.simpleicons.org/github/${isDarkMode ? "ffffff" : "000000"}`} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
              <img src={`https://cdn.simpleicons.org/facebook/${isDarkMode ? "ffffff" : "000000"}`} alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
              <img src={`https://cdn.simpleicons.org/linkedin/${isDarkMode ? "ffffff" : "000000"}`} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors">
              <Mail className="w-6 h-6 text-black dark:text-white" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 font-bold w-full sm:w-auto">
            <button className="px-8 py-3 bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all">
              Experience
            </button>
            <button className={`px-8 py-3 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all ${isDarkMode ? "bg-slate-700 text-white" : "bg-gray-200 text-black"}`}>
              Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
