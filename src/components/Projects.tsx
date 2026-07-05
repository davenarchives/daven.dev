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
      link: "https://yorumi-cli.vercel.app"
    },
    {
      title: "Yorumi",
      desc: "watch anime & read manga all in one place",
      cover: "/assets/projects/yorumi-bg-2.png",
      icon: "/assets/projects/yorumi-app-icon.png",
      link: "https://yorumi.vercel.app"
    },
    {
      title: "AniSauce",
      desc: "find anime source from a screenshot",
      cover: "/assets/projects/anisauce-bg.png",
      icon: "/assets/projects/anisauce-icon.png",
      link: "https://anisauce.vercel.app"
    },
    {
      title: "SITE Website",
      desc: "the official website for SITE",
      cover: "/assets/projects/sitewebsite-bg.png",
      icon: "/assets/projects/sitewebsite-icon-colored.png",
      link: "https://siteustp.vercel.app"
    },
    {
      title: "AnonyWall",
      desc: "share your thoughts anonymously",
      cover: "/assets/projects/anonywall-bg-v2.png",
      icon: "/assets/projects/anonywall-icon-colored.png",
      link: "https://anonywall-ph.vercel.app"
    },
    {
      title: "HappyBird",
      desc: "just a normal flappy bird clone web app",
      cover: "/assets/projects/happybird-bg.png",
      icon: "/assets/projects/happybird-icon.png",
      link: "https://happybird.vercel.app"
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1200px] mx-auto px-4 lg:px-0">
        {projects.map((project, i) => (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col w-full bg-white dark:bg-[#111111] rounded-2xl overflow-hidden transition-colors cursor-pointer shadow-sm dark:shadow-none border border-black/5 dark:border-white/5 hover:bg-gray-50 dark:hover:bg-[#161616]"
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
            <div className="flex items-center gap-4 p-5 bg-transparent">
              {/* Icon in Circle Frame */}
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden bg-gray-50 dark:bg-black ring-1 ring-black/5 dark:ring-white/10">
                <Image 
                  src={project.icon} 
                  alt={`${project.title} icon`} 
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col">
                <h3 className="text-black dark:text-white font-bold text-[18px] mb-1">{project.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-[14px] leading-snug">{project.desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
