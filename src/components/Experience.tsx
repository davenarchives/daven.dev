"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: "academic",
    year: "2025-Present",
    title: "Academic",
    roles: [
      {
        subtitle: "UI/UX & Frontend Lead for Anonywall",
        bullet: "Engineered a minimalist, secure interface using modern web frameworks to provide a safe space for student expression."
      },
      {
        subtitle: "UI/UX & Frontend Lead for SerbiSure (CAPSTONE)",
        bullet: "Prototyped a high-fidelity frontend architecture in Figma to optimize user onboarding for the recruitment platform."
      }
    ],
    card: {
      color: "bg-[#91BEE6] dark:bg-[#aec5df]", // Pastel blue like reference
      items: [
        {
          desc: "Post your unsaid thoughts embedded with music",
          image: "/assets/anonywall-1.png"
        },
        {
          desc: "Discover specialized boards for any topic",
          image: "/assets/anonywall-2.png"
        },
        {
          desc: "Prototyped onboarding for recruitment platform",
          image: "/assets/serbisure.png"
        }
      ]
    }
  },
  {
    id: "progvar",
    year: "2025-Present",
    title: "Programmer’s Varsity (ProgVar) Frontend Dev @ SITE",
    roles: [
      {
        subtitle: "SITE Website Project Head",
        bullet: "Designed and developed the official web platform using Astro and TinaCMS to deliver an easily maintainable, lightweight portal for the IT student body."
      },
      {
        subtitle: "Served as part of the event committee for the HACK-IT-ON 2026",
        bullet: "Coordinated technical logistics and layouts under the \"CyberCity\" theme to execute a seamless multi-day hackathon."
      }
    ],
    card: {
      color: "bg-[#C4B5FD] dark:bg-[#b5adc6]", // Pastel purple
      items: [
        {
          desc: "Leading the development of the official IT portal",
          image: "/assets/site-hero.png"
        },
        {
          desc: "Building dynamic news and announcement hubs",
          image: "/assets/site-news.png"
        },
        {
          desc: "Coordinating the HACK-IT-ON 2026 tech event",
          image: "/assets/site-hackathon.png",
          hotspots: [
            { name: "James", left: "19%", top: "35%", color: "bg-[#FFB3BA]", border: "border-t-[#FFB3BA]" },
            { name: "Me", left: "29%", top: "32%", color: "bg-[#BAE1FF]", border: "border-t-[#BAE1FF]" },
            { name: "Gerald", left: "40%", top: "34%", color: "bg-[#BAFFC9]", border: "border-t-[#BAFFC9]" },
            { name: "Krylle", left: "47%", top: "42%", color: "bg-[#FFDFBA]", border: "border-t-[#FFDFBA]" },
            { name: "Xan", left: "53%", top: "40%", color: "bg-[#E6B3FF]", border: "border-t-[#E6B3FF]" },
            { name: "Rhoi", left: "61%", top: "36%", color: "bg-[#A7F3D0]", border: "border-t-[#A7F3D0]" },
            { name: "Boyles", left: "68%", top: "35%", color: "bg-[#FDE047]", border: "border-t-[#FDE047]" },
            { name: "Lemar", left: "77%", top: "37%", color: "bg-[#FFC6FF]", border: "border-t-[#FFC6FF]" }
          ]
        }
      ]
    }
  },
  {
    id: "freelance",
    year: "2025",
    title: "Freelance (UI/UX & Frontend Design)",
    roles: [
      {
        subtitle: "UI/UX Designer for Barangay Connect",
        bullet: "Designed a commissioned UI/UX prototype for Barangay Connect, a barangay management system in Figma."
      },
      {
        subtitle: "Frontend UI Developer for eDiary",
        bullet: "Programmed a responsive mobile frontend using React Native and Expo to deliver an interactive personal logging app."
      }
    ],
    card: {
      color: "bg-[#A7F3D0] dark:bg-[#b0c8bd]", // Pastel green
      items: [
        {
          desc: "Designed Barangay Connect announcement portals",
          image: "/assets/barangay-announcements.png"
        },
        {
          desc: "Prototyped Local Business Listing directories",
          image: "/assets/barangay-listings.png"
        },
        {
          desc: "Developed the eDiary mobile frontend with Expo",
          image: "/assets/ediary.png"
        }
      ]
    }
  }
];

export function Experience() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Set up intersection observer for scroll spy
  useEffect(() => {
    // Keep track of the intersection ratio of all sections
    const visibilityRatios = new Map<number, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
          visibilityRatios.set(index, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        
        let maxVisible = 0;
        let mostVisibleIndex = activeSection;

        // Find the currently most visible section overall
        visibilityRatios.forEach((ratio, index) => {
          // If a section is significantly visible, prefer the first one that appears or the one taking up most space
          if (ratio > maxVisible) {
            maxVisible = ratio;
            mostVisibleIndex = index;
          }
        });
        
        if (maxVisible > 0 && mostVisibleIndex !== activeSection) {
          setActiveSection(mostVisibleIndex);
        }
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    document.querySelectorAll(".experience-item").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeSection]);

  // Reset carousel index on section change
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeSection]);

  const isDarkMode = !mounted || theme === "dark";
  const activeData = experiences[activeSection];
  const hasImages = activeData.card.items.some(item => item.image !== "");

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = offset.x;
    if (swipe < -50 && currentImageIndex < activeData.card.items.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    } else if (swipe > 50 && currentImageIndex > 0) {
      setCurrentImageIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="max-w-[1300px] mx-auto w-full">
      {/* Global Centered Header */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-palanquin text-[32px] md:text-[40px] font-bold mb-12 text-center leading-none text-black dark:text-white"
      >
        Experience
      </motion.h2>

      <div className="grid lg:grid-cols-2 justify-center gap-12 lg:gap-0">
        
        {/* Left Column: Sticky Card (Desktop Only) */}
        <div className="hidden lg:flex flex-col items-start relative lg:pl-4">
          <div className="sticky top-[calc(50svh-240px)] z-10 w-[480px] h-[480px]">
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`w-full h-full rounded-3xl p-8 flex flex-col justify-between ${activeData.card.color} transition-colors duration-500 overflow-hidden`}
          >
            {hasImages ? (
              <div className="relative w-full h-full flex flex-col justify-between pb-4">
                {/* Title Area - Aligned to top */}
                <div className="mb-4 flex justify-start px-2 text-left">
                  <motion.h4 
                    key={currentImageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-palanquin font-bold text-[28px] leading-[1.1] text-black dark:text-white"
                  >
                    {activeData.card.items[currentImageIndex]?.desc}
                  </motion.h4>
                </div>

                {/* Carousel Area - Stacked Effect */}
                <div className="relative w-full flex-1 px-2 flex items-center justify-center">
                  <div className="relative w-full aspect-video">
                    {activeData.card.items.map((item, i) => {
                      const numItems = activeData.card.items.length;
                      // Calculate distance from active index (0 is active, 1 is next, etc.)
                      const diff = (i - currentImageIndex + numItems) % numItems;
                      const isActive = diff === 0;

                      return (
                        <motion.div
                          key={i}
                          drag={isActive ? "x" : false}
                          dragConstraints={{ left: 0, right: 0 }}
                          onDragEnd={(e, { offset }) => {
                            if (offset.x < -50) setCurrentImageIndex((prev) => (prev + 1) % numItems);
                            if (offset.x > 50) setCurrentImageIndex((prev) => (prev - 1 + numItems) % numItems);
                          }}
                          animate={{
                            zIndex: numItems - diff,
                            scale: 1 - diff * 0.05,
                            x: 0,
                            y: diff * 15,
                            opacity: 1 - diff * 0.15,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={`absolute inset-0 rounded-xl overflow-hidden ${isActive ? 'cursor-grab active:cursor-grabbing' : 'pointer-events-none'}`}
                        >
                          {item.image ? (
                            <>
                              <Image 
                                src={item.image} 
                                alt="Project Highlight"
                                fill
                                className="object-cover object-top"
                                draggable={false}
                              />
                              {(item as any).hotspots && (item as any).hotspots.map((spot: any, idx: number) => (
                                <div 
                                  key={idx}
                                  className="absolute w-[8%] h-[15%] group cursor-crosshair z-20"
                                  style={{ left: `calc(${spot.left} - 4%)`, top: `calc(${spot.top} - 7.5%)` }}
                                >
                                  <div className={`absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 ${spot.color} text-black text-[12px] font-extrabold px-3 py-1.5 rounded-xl shadow-lg pointer-events-none whitespace-nowrap transform group-hover:-translate-y-1 scale-95 group-hover:scale-100 origin-bottom tracking-wide`}>
                                    {spot.name}
                                    {/* Speech Bubble Triangle Pointer */}
                                    <div className={`absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent ${spot.border}`} />
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="opacity-50 font-bold">Image soon</span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

                {/* Dots indicator - Moved below the stack */}
                <div className="mt-12 flex justify-center gap-2">
                  {activeData.card.items.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => setCurrentImageIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-6 bg-black dark:bg-white" : "w-2 bg-black/30 dark:bg-white/30 hover:bg-black/50"}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col">
                <h4 className="font-palanquin font-bold text-[28px] leading-[1.1] text-black dark:text-white mb-6">
                  {activeData.card.items[0].desc}
                </h4>
                <div className="w-full flex-1 rounded-xl bg-black/10 dark:bg-black/20 flex items-center justify-center">
                  <span className="text-sm font-bold opacity-50 text-black dark:text-white">More previews soon</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Column: Experience Timeline */}
      <div className="w-full max-w-[680px] relative flex flex-col justify-start px-0">
        <div className="relative lg:pl-[40px] pb-[30vh]">
          {/* The Vertical Line */}
          <div className="absolute top-[8px] bottom-0 left-[16px] lg:left-[40px] w-[2px] bg-gray-300" />

          {experiences.map((exp, index) => {
            const isActive = index === activeSection;

            return (
              <motion.div 
                key={index}
                data-index={index}
                className={`experience-item relative mb-20 pl-[40px] lg:pl-[40px] transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30 grayscale blur-[1px]"}`}
              >
                {/* The Year (Left aligned on Desktop) */}
                <div className="hidden lg:block absolute left-[-110px] w-[90px] text-right top-1">
                  <span className={`font-bold text-[12px] leading-tight transition-colors ${isActive ? "text-black dark:text-white" : "text-gray-500"}`}>
                    {exp.year}
                  </span>
                </div>

                {/* The Dot */}
                <div className={`absolute left-[-21px] lg:left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full z-10 transition-colors duration-500 ${isActive ? "bg-yellow-400" : "bg-gray-300"}`} />
                
                {/* The Mobile Year */}
                <div className="lg:hidden mb-2">
                  <span className={`font-bold text-[12px] ${isActive ? "text-black dark:text-white" : "text-gray-500"}`}>
                    {exp.year}
                  </span>
                </div>

                {/* The Content */}
                <div className="flex-1">
                  <h3 className={`font-palanquin text-[24px] lg:text-[28px] font-bold mb-3 leading-tight transition-colors ${isActive ? (isDarkMode ? "text-yellow-400" : "text-cyan-400") : "text-gray-400 dark:text-gray-600"}`}>
                    {exp.title}
                  </h3>
                  
                  <div className="space-y-6">
                    {exp.roles.map((role, rIndex) => (
                      <div key={rIndex}>
                        <h4 className={`font-roboto text-[16px] lg:text-[18px] font-bold mb-2 italic ${isActive ? "text-black dark:text-white" : "text-gray-500 dark:text-gray-500"}`}>
                          {role.subtitle}
                        </h4>
                        <p className={`font-roboto text-[14px] lg:text-[15px] font-medium leading-relaxed ${isActive ? "text-gray-700 dark:text-gray-300" : "text-gray-500 dark:text-gray-600"}`}>
                          • {role.bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Card Fallback */}
                {isActive && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className={`lg:hidden mt-8 w-full rounded-2xl p-5 shadow-md ${exp.card.color}`}
                  >
                    <p className="font-palanquin font-bold text-lg mb-4 text-black dark:text-white">
                      {exp.card.items[currentImageIndex]?.desc}
                    </p>
                    {exp.card.items[currentImageIndex]?.image && (
                      <div className="relative w-full h-[180px] rounded-xl overflow-hidden bg-black/5 dark:bg-black/10 border border-black/10 dark:border-white/10">
                         <div className="absolute inset-0 bg-[#FDE047] dark:bg-[#CA8A04] translate-x-2 translate-y-2 rounded-xl" />
                         <div className="absolute inset-0 rounded-xl overflow-hidden">
                          <Image 
                            src={exp.card.items[currentImageIndex].image} 
                            alt="Project Highlight"
                            fill
                            className="object-contain object-center scale-[0.98]"
                          />
                         </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
      </div>
    </div>
  );
}
