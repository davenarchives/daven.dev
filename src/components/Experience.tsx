"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experiences = [
  {
    id: "academic",
    year: "2025-Present",
    title: "Academic",
    roles: [
      {
        subtitle: (
          <>
            UI/UX & Frontend Lead for{" "}
            <a
              href="https://anonywall-ph.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-4 hover:text-[#91BEE6] dark:hover:text-[#aec5df] transition-colors duration-300"
            >
              Anonywall
            </a>
          </>
        ),
        bullet: "Engineered a minimalist, secure interface using modern web frameworks to provide a safe space for student expression."
      },
      {
        subtitle: (
          <>
            UI/UX & Frontend Lead for{" "}
            <a
              href="https://www.figma.com/design/sEKkWrxy95dqjIMffPbYnq/SERBISURE-MOBILE?node-id=0-1&t=Ah4jNUSDAcPVA7kT-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-4 hover:text-[#91BEE6] dark:hover:text-[#aec5df] transition-colors duration-300"
            >
              SerbiSure
            </a>{" "}
            (CAPSTONE)
          </>
        ),
        bullet: "Prototyped a high-fidelity frontend architecture in Figma to optimize user onboarding for the recruitment platform."
      }
    ],
    card: {
      color: "bg-[#91BEE6] dark:bg-[#aec5df]", // Pastel blue like reference
      items: [
        {
          desc: "Post your unsaid thoughts embedded with music",
          image: "/assets/experience/anonywall-1.png"
        },
        {
          desc: "Discover specialized boards for any topic",
          image: "/assets/experience/anonywall-2.png"
        },
        {
          desc: "Prototyped onboarding for recruitment platform",
          image: "/assets/experience/serbisure.png"
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
        subtitle: (
          <>
            <a
              href="https://siteustp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-4 hover:text-[#C4B5FD] dark:hover:text-[#b5adc6] transition-colors duration-300"
            >
              SITE Website
            </a>{" "}
            Project Head
          </>
        ),
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
          image: "/assets/experience/site-hero.png"
        },
        {
          desc: "Building dynamic news and announcement hubs",
          image: "/assets/experience/site-news.png"
        },
        {
          desc: "Coordinating the HACK-IT-ON 2026 tech event",
          image: "/assets/experience/site-hackathon.png",
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
        subtitle: (
          <>
            UI/UX Designer for{" "}
            <a
              href="https://www.figma.com/design/OBjPk2uhfaCAXh0T4X2bE5/Barangay-Connect?node-id=0-1&t=jB9cJKsWJtxRfdp6-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-4 hover:text-[#A7F3D0] dark:hover:text-[#b0c8bd] transition-colors duration-300"
            >
              Barangay Connect
            </a>
          </>
        ),
        bullet: "Designed a commissioned UI/UX prototype for Barangay Connect, a barangay management system in Figma."
      },
      {
        subtitle: (
          <>
            Frontend UI Developer for{" "}
            <a
              href="https://www.figma.com/design/71PZkiXe8DhfrhFMd1XrAC/EDIARY?node-id=309-2&t=pnkbD9WrtLMEfFqc-1"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-dashed underline-offset-4 hover:text-[#A7F3D0] dark:hover:text-[#b0c8bd] transition-colors duration-300"
            >
              eDiary
            </a>
          </>
        ),
        bullet: "Programmed a responsive mobile frontend using React Native and Expo to deliver an interactive personal logging app."
      }
    ],
    card: {
      color: "bg-[#A7F3D0] dark:bg-[#b0c8bd]", // Pastel green
      items: [
        {
          desc: "Designed Barangay Connect announcement portals",
          image: "/assets/experience/barangay-announcements.png"
        },
        {
          desc: "Prototyped Local Business Listing directories",
          image: "/assets/experience/barangay-listings.png"
        },
        {
          desc: "Developed the eDiary mobile frontend with Expo",
          image: "/assets/experience/ediary.png"
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
    <div className="max-w-[1300px] mx-auto w-full px-6 lg:px-0">
      {/* Global Centered Header (Left on Mobile) */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-palanquin text-[32px] md:text-[40px] font-bold mb-8 lg:mb-12 text-left lg:text-center leading-none text-black dark:text-white"
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
                          onClick={() => {
                            if (isActive && (item as any).link) {
                              window.open((item as any).link, '_blank');
                            }
                          }}
                          animate={{
                            zIndex: numItems - diff,
                            scale: 1 - diff * 0.05,
                            x: 0,
                            y: diff * 15,
                            opacity: 1 - diff * 0.15,
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          className={`absolute inset-0 rounded-xl overflow-hidden ${isActive ? ((item as any).link ? 'cursor-pointer active:cursor-grabbing' : 'cursor-grab active:cursor-grabbing') : 'pointer-events-none'}`}
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
        <div className="w-full max-w-[680px] relative flex flex-col justify-start px-0 text-left">
          <div className="relative max-lg:[&_.vertical-timeline::before]:hidden max-lg:[&_.vertical-timeline-element-icon]:hidden max-lg:[&_.vertical-timeline-element-content]:!ml-0 max-lg:[&_.vertical-timeline-element-content]:!px-0 max-lg:[&_.vertical-timeline]:!px-0">
            <VerticalTimeline layout="1-column-left" lineColor={isDarkMode ? "#374151" : "#d1d5db"}>
              {experiences.map((exp, index) => {
                const isActive = index === activeSection;
                const theme = [
                  { hex: "#91BEE6", darkHex: "#aec5df", textClass: "text-[#91BEE6] dark:text-[#aec5df]" },
                  { hex: "#C4B5FD", darkHex: "#b5adc6", textClass: "text-[#C4B5FD] dark:text-[#b5adc6]" },
                  { hex: "#A7F3D0", darkHex: "#b0c8bd", textClass: "text-[#A7F3D0] dark:text-[#b0c8bd]" }
                ][index];
                const activeColor = isDarkMode ? theme.darkHex : theme.hex;

                return (
                  <div key={index} data-index={index} className="experience-item">
                    <VerticalTimelineElement
                      className={`transition-all duration-500 ${isActive ? "opacity-100" : "opacity-30 grayscale blur-[1px]"}`}
                      contentStyle={{ 
                        background: 'transparent', 
                        boxShadow: 'none',
                        padding: '0 0 2rem 0'
                      }}
                      contentArrowStyle={{ display: 'none' }}
                      iconStyle={{ 
                        background: isActive ? activeColor : '#d1d5db',
                        boxShadow: isActive ? `0 0 0 4px ${activeColor}33` : '0 0 0 4px rgba(209, 213, 219, 0.2)',
                        width: '16px',
                        height: '16px',
                        left: '12px',
                        marginLeft: '0',
                        marginTop: '16px'
                      }}
                      icon={<div />}
                    >
                      <div className="flex-1 relative">
                        {/* Desktop Year */}
                        <div className="hidden lg:block absolute right-[calc(100%+80px)] w-[120px] text-right top-[16px]">
                          {exp.year.split("-").map((part, i) => (
                            <span key={i} className={`block font-bold text-[12px] leading-tight transition-colors ${isActive ? "text-black dark:text-white" : "text-gray-500"}`}>
                              {i > 0 ? `- ${part}` : part}
                            </span>
                          ))}
                        </div>
                        
                        {/* Mobile Year */}
                        <div className="lg:hidden mb-2">
                          <span className={`font-bold text-[12px] ${isActive ? "text-black dark:text-white" : "text-gray-500"}`}>
                            {exp.year.replace("-", " - ")}
                          </span>
                        </div>

                        <h3 className={`font-palanquin text-[24px] lg:text-[28px] font-bold mb-3 leading-tight transition-colors ${isActive ? theme.textClass : "text-gray-400 dark:text-gray-600"}`}>
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

                      {/* Mobile Card (Matching Web Design) */}
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className={`lg:hidden mt-8 w-full aspect-[4/5] sm:aspect-square rounded-3xl p-5 flex flex-col justify-between shadow-sm overflow-hidden ${exp.card.color}`}
                        >
                          {exp.card.items.length > 0 ? (
                            <div className="relative w-full h-full flex flex-col justify-between pb-2">
                              {/* Title Area */}
                              <div className="mb-4 flex justify-start px-1 text-left">
                                <motion.h4 
                                  key={currentImageIndex}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="font-palanquin font-bold text-[16px] sm:text-[24px] leading-[1.2] text-black dark:text-white line-clamp-2"
                                >
                                  {exp.card.items[currentImageIndex]?.desc}
                                </motion.h4>
                              </div>

                              {/* Carousel Area */}
                              <div className="relative w-full flex-1 px-1 flex items-center justify-center min-h-[220px]">
                                <div className="relative w-full aspect-video">
                                  {exp.card.items.map((item, i) => {
                                    const numItems = exp.card.items.length;
                                    const diff = (i - currentImageIndex + numItems) % numItems;
                                    const isActiveCard = diff === 0;

                                    return (
                                      <motion.div
                                        key={i}
                                        drag={isActiveCard ? "x" : false}
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragEnd={(e, { offset }) => {
                                          if (offset.x < -40) setCurrentImageIndex((prev) => (prev + 1) % numItems);
                                          if (offset.x > 40) setCurrentImageIndex((prev) => (prev - 1 + numItems) % numItems);
                                        }}
                                        onClick={() => {
                                          if (isActiveCard && (item as any).link) {
                                            window.open((item as any).link, '_blank');
                                          }
                                        }}
                                        animate={{
                                          zIndex: numItems - diff,
                                          scale: 1 - diff * 0.05,
                                          x: 0,
                                          y: diff * 10,
                                          opacity: 1 - diff * 0.15,
                                        }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className={`absolute inset-0 rounded-xl overflow-hidden ${isActiveCard ? ((item as any).link ? 'cursor-pointer active:cursor-grabbing' : 'cursor-grab active:cursor-grabbing') : 'pointer-events-none'}`}
                                      >
                                        {item.image ? (
                                          <Image 
                                            src={item.image} 
                                            alt="Project Highlight"
                                            fill
                                            className="object-cover object-top"
                                            draggable={false}
                                          />
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

                              {/* Dots indicator */}
                              <div className="mt-6 flex justify-center gap-2">
                                {exp.card.items.map((_, i) => (
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
                              <h4 className="font-palanquin font-bold text-[20px] sm:text-[24px] leading-[1.1] text-black dark:text-white mb-6">
                                {exp.card.items[0]?.desc}
                              </h4>
                              <div className="w-full flex-1 rounded-xl bg-black/10 dark:bg-black/20 flex items-center justify-center">
                                <span className="text-sm font-bold opacity-50 text-black dark:text-white">More previews soon</span>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </VerticalTimelineElement>
                  </div>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
}
