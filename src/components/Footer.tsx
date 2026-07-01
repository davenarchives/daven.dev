"use client";

import { CalendarClock } from "lucide-react";
import { Linkedin02Icon, Github01Icon, MailAtSign01Icon, Csv02Icon } from "hugeicons-react";

function FooterSocialLink({
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
      className={`group relative flex items-center justify-center transition-transform hover:-translate-y-1 ${colorClass}`}
    >
      <span className="pointer-events-none absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 scale-95 rounded-md bg-sky-300 px-3 py-1.5 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 dark:bg-violet-400 whitespace-nowrap">
        {label}
        <span className="absolute left-1/2 top-full h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-sky-300 dark:bg-violet-400" />
      </span>
      {children}
    </a>
  );
}

export function Footer() {
  const iconClass = "w-6 h-6";
  
  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 py-12 flex flex-col items-center justify-center gap-6 z-10 relative">
      <div className="flex gap-6 items-center">
        <FooterSocialLink 
          href="https://www.linkedin.com/in/daven-austhine-sumagang-368817339/" 
          label="LinkedIn"
          colorClass="text-[#93c5fd] hover:text-[#bae6fd]"
        >
          <Linkedin02Icon className={iconClass} />
        </FooterSocialLink>
        
        <FooterSocialLink 
          href="https://github.com/davenarchives" 
          label="GitHub"
          colorClass="text-black dark:text-white hover:opacity-70 transition-opacity"
        >
          <Github01Icon className={iconClass} />
        </FooterSocialLink>

        <FooterSocialLink 
          href="mailto:sumagang.austhine@gmail.com"
          label="Email"
          colorClass="text-[#fb923c] hover:text-[#fdba74]"
        >
          <MailAtSign01Icon className={iconClass} />
        </FooterSocialLink>

        <FooterSocialLink 
          href="#"
          label="Calendar"
          colorClass="text-[#c084fc] hover:text-[#d8b4fe]"
        >
          <CalendarClock className={iconClass} />
        </FooterSocialLink>

        <FooterSocialLink 
          href="/assets/docs/resume.pdf" 
          label="Resume"
          colorClass="text-[#f472b6] hover:text-[#fbcfe8]"
        >
          <Csv02Icon className={iconClass} />
        </FooterSocialLink>
      </div>
      
      <p className="font-medium text-sm tracking-wide mt-2">
        <span className="text-violet-500 dark:text-[#c4b5fd]">vibe coding </span>
        <span className="text-gray-500 dark:text-gray-400">with </span>
        <span className="text-black dark:text-white font-bold">daven</span>
        <span className="text-[#facc15] font-bold">.dev</span>
      </p>
    </footer>
  );
}
