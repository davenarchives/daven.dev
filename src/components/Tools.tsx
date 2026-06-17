"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Tools() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = !mounted || theme === "dark";

  const categories = [
    {
      title: "Frontend",
      desc: "I enjoy building clean and interactive user interfaces. My main goal is always to create fast websites with solid user experiences.",
      icons: ["react", "svelte", "typescript", "astro", "html5", "tailwindcss", "figma"],
      borderColor: isDarkMode ? "border-cyan-400" : "border-yellow-400"
    },
    {
      title: "Backend",
      desc: "I love problem-solving and handling data behind the scenes. I strive to build efficient, reliable, and secure backend systems.",
      icons: ["nodedotjs", "express", "firebase", "redis", "graphql", "puppeteer", "axios"],
      borderColor: isDarkMode ? "border-cyan-400" : "border-yellow-400"
    },
    {
      title: "DevOps",
      desc: "I manage development workflows and version control, using modern tooling to ensure smooth and reliable deployments.",
      icons: ["github", "git", "vercel", "docker", "postman"],
      borderColor: isDarkMode ? "border-cyan-400" : "border-yellow-400"
    }
  ];

  return (
    <section id="tools" className="py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`text-4xl md:text-5xl font-bold mb-16 text-center md:text-left ${isDarkMode ? "text-cyan-400" : "text-yellow-400"}`}
      >
        Tools
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`p-8 rounded-xl border-2 ${cat.borderColor} ${isDarkMode ? "bg-slate-800" : "bg-gray-100"} shadow-[8px_8px_0_0_rgba(0,0,0,0.1)] dark:shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] flex flex-col h-full`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? "text-yellow-400" : "text-black"}`}>
              {cat.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-8 flex-grow">
              {cat.desc}
            </p>
            <div className="flex flex-wrap gap-4 mt-auto">
              {cat.icons.map((icon, i) => (
                 <img 
                   key={i} 
                   src={`https://cdn.simpleicons.org/${icon}/${isDarkMode ? "ffffff" : "000000"}`} 
                   alt={icon} 
                   className="w-8 h-8 md:w-10 md:h-10 transition-transform hover:scale-110" 
                 />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
