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
      title: "Frontend & Design",
      desc: "I enjoy building clean and interactive user interfaces. My main goal is always to create fast websites with solid user experiences.",
      type: "icons",
      items: [
        { name: "react", label: "React", color: "61DAFB" },
        { name: "nextdotjs", label: "Next.js", color: isDarkMode ? "ffffff" : "000000" },
        { name: "svelte", label: "Svelte", color: "FF3E00" },
        { name: "typescript", label: "TypeScript", color: "3178C6" },
        { name: "astro", label: "Astro", color: "FF5D01" },
        { name: "html5", label: "HTML5", color: "E34F26" },
        { name: "tailwindcss", label: "Tailwind", color: "06B6D4" },
        { name: "figma", label: "Figma", color: "F24E1E" }
      ]
    },
    {
      title: "Backend",
      desc: "I love problem-solving and handling data behind the scenes. I strive to build efficient, reliable, and secure backend systems.",
      type: "icons",
      items: [
        { name: "nodedotjs", label: "Node.js", color: "339939" },
        { name: "express", label: "Express", color: isDarkMode ? "ffffff" : "000000" },
        { name: "mongodb", label: "MongoDB", color: "47A248" },
        { name: "firebase", label: "Firebase", color: "FFCA28" },
        { name: "redis", label: "Redis", color: "DC382D" },
        { name: "graphql", label: "GraphQL", color: "E10098" },
        { name: "convex", label: "Convex", color: isDarkMode ? "ffffff" : "000000" },
        { name: "puppeteer", label: "Puppeteer", color: "40B5A4" }
      ]
    },
    {
      title: "Cloud & DevOps",
      desc: "I manage development workflows and version control, using modern tooling to ensure smooth and reliable deployments.",
      type: "icons",
      items: [
        { name: "github", label: "GitHub", color: isDarkMode ? "ffffff" : "181717" },
        { name: "git", label: "Git", color: "F05032" },
        { name: "vercel", label: "Vercel", color: isDarkMode ? "ffffff" : "000000" },
        { name: "docker", label: "Docker", color: "2496ED" },
        { name: "postman", label: "Postman", color: "FF6C37" }
      ]
    },
    {
      title: "Management",
      desc: "I primarily utilize these management frameworks and tools to successfully lead and coordinate academic projects, ensuring my team stays organized and delivers on time.",
      type: "tags",
      items: [
        "Agile", "Scrum", "Jira"
      ]
    }
  ];

  return (
    <div className="w-full overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-palanquin text-[32px] md:text-[40px] font-bold mb-12 text-center leading-none text-black dark:text-white"
      >
        Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-[1024px] mx-auto items-start">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`p-6 md:p-8 rounded-2xl border border-yellow-400 dark:border-cyan-400 bg-black/5 dark:bg-white/5 backdrop-blur-md flex flex-col transition-colors ${index % 2 !== 0 ? 'md:mt-6' : ''}`}
          >
            <h3 className="text-[22px] font-bold mb-3 text-black dark:text-white">
              {cat.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-[15px] leading-relaxed mb-6">
              {cat.desc}
            </p>
            
            {cat.type === "icons" ? (
              <div className="flex flex-wrap gap-5 mt-auto">
                {cat.items.map((item: any, i) => (
                   <div key={i} className="relative group/icon cursor-pointer flex items-center justify-center">

                     <img 
                       src={`https://cdn.simpleicons.org/${item.name}/${item.color}`} 
                       alt={item.label} 
                       className="relative w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover/icon:scale-110 z-10" 
                     />
                     
                     {/* The Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-1.5 bg-[#a78bfa] text-white text-[12px] font-bold rounded-lg opacity-0 group-hover/icon:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-20 translate-y-2 group-hover/icon:translate-y-0 shadow-lg">
                       {item.label}
                       <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#a78bfa]" />
                     </div>
                   </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.items.map((tag: any, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-1.5 rounded-full text-[13px] font-semibold bg-[#a78bfa] text-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
