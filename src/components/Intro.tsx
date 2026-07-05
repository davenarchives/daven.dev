"use client";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { MapPin } from "lucide-react";
import { Github01Icon, Facebook02Icon, Linkedin02Icon, MailAtSign01Icon, Csv02Icon } from "hugeicons-react";

function SocialLink({
  href,
  label,
  colorClass,
  children,
}: {
  href: string;
  label: string;
  colorClass: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex h-[32px] w-[32px] items-center justify-center transition-transform hover:-translate-y-1 ${colorClass}`}
    >
      <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 scale-95 rounded-md bg-sky-300 px-4 py-2 text-base font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 dark:bg-violet-400">
        {label}
        <span className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-sky-300 dark:bg-violet-400" />
      </span>
      {children}
    </a>
  );
}

export function Intro() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  function handleMouseMove(event: React.MouseEvent<HTMLSpanElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX);
    y.set(mouseY);
  }

  const scrollToExperience = () => {
    const target = document.getElementById("experience");
    if (!target) return;
    
    const offsetTop = target.getBoundingClientRect().top + window.scrollY;
    
    animate(window.scrollY, offsetTop, {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  const scrollToProjects = () => {
    const target = document.getElementById("projects");
    if (!target) return;
    
    const offsetTop = target.getBoundingClientRect().top + window.scrollY;
    
    animate(window.scrollY, offsetTop, {
      duration: 0.6,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => window.scrollTo(0, value),
    });
  };

  return (
    <section id="intro" className="w-full lg:w-[650px] relative flex flex-col text-left px-6 lg:px-0">
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex flex-col items-center lg:items-start text-center lg:text-left"
      >
        <div className="mb-[24px] lg:mb-[32px] flex flex-col items-center lg:items-start">
          <p className="font-palanquin text-[15px] sm:text-[20px] font-semibold text-gray-500 dark:text-slate-300 leading-none mb-2">
            I'm Daven Austhine Sumagang,
          </p>
          <h1 className="font-roboto italic text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-black dark:text-white leading-[1.1] mb-2 text-center lg:text-left">
            UI/UX & Front-end Developer
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-1.5 mb-4 lg:mb-6 text-gray-500 dark:text-gray-400">
            <MapPin className="w-4 h-4" />
            <p className="font-mono text-[13px] uppercase tracking-widest mt-0.5">
              Cagayan de Oro, Philippines
            </p>
          </div>
          <p className="text-base lg:text-[18px] text-gray-700 dark:text-gray-300 max-w-[500px] mx-auto lg:mx-0">
            Just a front-end developer who designs minimalist interfaces and loves{" "}
            <span 
              className="group relative inline-block cursor-crosshair font-bold transition-colors text-violet-500 dark:text-[#c4b5fd]"
              onMouseMove={handleMouseMove}
            >
              vibing with code
              <motion.img
                src="/assets/gifs/cattyping.gif"
                alt="typing cat"
                style={{ 
                  x: springX, 
                  y: springY,
                  translateX: "-50%",
                  translateY: "calc(-100% + 15px)"
                }}
                className="pointer-events-none absolute left-1/2 lg:left-0 top-0 z-50 w-[120px] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />
            </span>
          </p>
        </div>

        <div className="flex gap-[16px] justify-center lg:justify-start items-center mb-[24px] lg:mb-[40px]">
          <SocialLink href="https://github.com/davenarchives" label="GitHub" colorClass="text-zinc-900 dark:text-zinc-100">
            <Github01Icon className="w-[32px] h-[32px]" />
          </SocialLink>
          <SocialLink href="https://www.facebook.com/daven2004" label="Facebook" colorClass="text-blue-600 dark:text-blue-400">
            <Facebook02Icon className="w-[32px] h-[32px]" />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/daven-austhine-sumagang-368817339/" label="LinkedIn" colorClass="text-sky-600 dark:text-sky-300">
            <Linkedin02Icon className="w-[32px] h-[32px]" />
          </SocialLink>
          <SocialLink href="mailto:sumagang.austhine@gmail.com" label="Email" colorClass="text-orange-600 dark:text-orange-300">
            <MailAtSign01Icon className="w-[32px] h-[32px]" />
          </SocialLink>
          <SocialLink href="/assets/docs/resume.pdf" label="Resume" colorClass="text-rose-600 dark:text-rose-300">
            <Csv02Icon className="w-[32px] h-[32px]" />
          </SocialLink>
        </div>

        <div className="flex flex-row justify-center lg:justify-start gap-[12px] sm:gap-[24px] font-bold w-full sm:w-auto">
          <button 
             onClick={scrollToExperience}
             className="flex-1 sm:flex-none sm:w-[144px] h-[50px] bg-yellow-400 text-black border-2 border-black dark:border-[#d4d4d4] shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_#d4d4d4] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_#d4d4d4] transition-all flex items-center justify-center text-[14px] sm:text-[16px]"
          >
            Experience
          </button>
          <button 
             onClick={scrollToProjects}
             className="flex-1 sm:flex-none sm:w-[144px] h-[50px] border-2 border-black dark:border-[#d4d4d4] bg-transparent text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_#d4d4d4] transition-all flex items-center justify-center text-[14px] sm:text-[16px] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0_0_#d4d4d4] dark:text-white"
          >
            Projects
          </button>
        </div>
      </motion.div>
    </section>
  );
}
