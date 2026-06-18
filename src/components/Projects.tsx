"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Yorumi CLI",
      desc: "watch animes directly from your terminal",
      cover: "/assets/projects/yorumicli-bg.png",
      icon: "/assets/projects/yorumicli-icon.png",
      link: "#"
    },
    {
      title: "Yorumi",
      desc: "watch/read anime and manga",
      cover: "/assets/projects/yorumi-bg.png",
      icon: "/assets/projects/yorumi-app-icon.png",
      link: "#"
    },
    {
      title: "AniSauce",
      desc: "find anime source from a screenshot",
      cover: "/assets/projects/anisauce-bg.png",
      icon: "/assets/projects/anisauce-icon.png",
      link: "#"
    }
  ];

  return (
    <div className="w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-palanquin text-[32px] md:text-[40px] font-bold mb-12 text-center leading-none text-black dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-white dark:bg-[#111111] rounded-2xl overflow-hidden transition-colors cursor-pointer shadow-sm dark:shadow-none hover:bg-gray-50 dark:hover:bg-[#161616]"
          >
            {/* Cover Image Area */}
            <div className="w-full aspect-[1920/1024] relative overflow-hidden">
              <Image 
                src={project.cover} 
                alt={project.title} 
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom Content Area */}
            <div className="flex items-center gap-4 p-4 bg-transparent">
              {/* Icon in Circle Frame */}
              <div className="relative w-11 h-11 flex-shrink-0 rounded-full overflow-hidden bg-gray-50 dark:bg-black">
                <Image 
                  src={project.icon} 
                  alt={`${project.title} icon`} 
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-black dark:text-white font-bold text-[17px] mb-0.5">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-snug">{project.desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
