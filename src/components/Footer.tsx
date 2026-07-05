"use client";

import { CalendarClock, Mail, FileText } from "lucide-react";
import { Linkedin02Icon, Github01Icon, MailAtSign01Icon, Csv02Icon } from "hugeicons-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const isPortfolio = pathname === '/portfolio';
  const iconClass = "w-6 h-6";
  
  const monotoneClass = "text-black dark:text-white hover:opacity-70 transition-opacity";

  return (
    <footer className="w-full border-t border-black/10 dark:border-white/10 py-12 flex flex-col items-center justify-center gap-6 z-10 relative">
      <div className="flex gap-6 items-center">
        {isPortfolio ? (
          <>
            <FooterSocialLink href="https://github.com/davenarchives" label="GitHub" colorClass={monotoneClass}>
              <GithubIcon className={iconClass} />
            </FooterSocialLink>
            <FooterSocialLink href="#" label="Facebook" colorClass={monotoneClass}>
              <FacebookIcon className={iconClass} />
            </FooterSocialLink>
            <FooterSocialLink href="https://www.linkedin.com/in/daven-austhine-sumagang-368817339/" label="LinkedIn" colorClass={monotoneClass}>
              <LinkedinIcon className={iconClass} />
            </FooterSocialLink>
            <FooterSocialLink href="mailto:sumagang.austhine@gmail.com" label="Email" colorClass={monotoneClass}>
              <Mail className={iconClass} />
            </FooterSocialLink>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
      
      {isPortfolio ? (
        <p className="font-medium text-[15px] tracking-wide mt-2 text-black dark:text-white">
          vibe coding with daven.dev
        </p>
      ) : (
        <p className="font-medium text-sm tracking-wide mt-2">
          <span className="text-violet-500 dark:text-[#c4b5fd]">vibe coding </span>
          <span className="text-gray-500 dark:text-gray-400">with </span>
          <span className="text-black dark:text-white font-bold">daven</span>
          <span className="text-[#facc15] font-bold">.dev</span>
        </p>
      )}
    </footer>
  );
}

function GithubIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
}
function FacebookIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
}
function LinkedinIcon(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
}
