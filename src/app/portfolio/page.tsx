"use client";

import { useTheme } from "next-themes";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background text-foreground pt-20 px-6 max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 pb-20">
        
        {/* LEFT COLUMN - Sticky Profile Sidebar */}
        <div className="lg:sticky lg:top-24 lg:w-[400px] lg:h-[calc(100vh-8rem)] overflow-y-auto hidden-scrollbar flex flex-col gap-8">
          
          {/* Profile Card */}
          <div className="glass rounded-2xl p-6 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-border shrink-0">
                {mounted ? (
                  theme === 'dark' ? (
                    <img src="/assets/theme/darkmode.png" alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <img src="/assets/theme/lightmode.png" alt="Profile" className="w-full h-full object-cover" />
                  )
                ) : (
                  <div className="w-full h-full bg-surface-hover animate-pulse" />
                )}
              </div>
              <div>
                <h1 className="text-xl font-bold font-sans">Daven Austhine Sumagang</h1>
                <p className="text-sm text-foreground/70 font-mono">student developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <MapPin className="w-4 h-4" />
              <span>Cagayan de Oro City, Philippines</span>
            </div>
            
            <div className="flex gap-4 pt-2">
              <a href="https://github.com/davenarchives" target="_blank" rel="noopener noreferrer" className="p-2 bg-surface-hover rounded-full hover:text-brand-orange transition-colors"><GithubIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-surface-hover rounded-full hover:text-brand-cyan transition-colors"><FacebookIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-surface-hover rounded-full hover:text-brand-orange transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-surface-hover rounded-full hover:text-brand-cyan transition-colors"><Mail className="w-5 h-5" /></a>
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold font-sans">About</h2>
            <p className="text-sm text-foreground/80 leading-relaxed">
              I'm a 21-year-old web developer and student at the University of Science and Technology of Southern Philippines (USTP). I specialize in web development with a strong interest in both front-end and back-end technologies. I love building modern, high-performance applications with tools like React, Next.js, Astro, and Firebase.
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold font-sans">Skills</h2>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground/90">Web Development</h3>
              <div className="flex flex-wrap gap-2">
                {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Astro', 'Tailwind CSS'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full glass border border-border">{skill}</span>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-foreground/90">Backend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Firebase', 'GraphQL', 'Git', 'Vercel', 'Figma'].map(skill => (
                  <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full glass border border-border">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* RIGHT COLUMN - Scrollable Content */}
        <div className="flex-1 flex flex-col gap-12 lg:pt-8">
          
          {/* Experience Section */}
          <section id="experience" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold font-sans sticky top-20 bg-background/90 backdrop-blur-md py-4 z-10">Experience & Education</h2>
            <div className="flex flex-col gap-8">
              
              <div className="relative pl-8 border-l border-border group">
                <div className="absolute w-3 h-3 bg-brand-orange rounded-full -left-[6.5px] top-2 group-hover:scale-150 transition-transform"></div>
                <div className="text-xs text-brand-orange font-mono mb-2">2023 — Present</div>
                <h3 className="text-lg font-bold">Web Developer</h3>
                <p className="text-sm text-foreground/60 mb-2">Freelance / Personal Projects</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  Building full-stack web applications, custom CLIs, and scalable open-source projects using React, Next.js, and external API integrations.
                </p>
              </div>

              <div className="relative pl-8 border-l border-border group">
                <div className="absolute w-3 h-3 bg-brand-cyan rounded-full -left-[6.5px] top-2 group-hover:scale-150 transition-transform"></div>
                <div className="text-xs text-brand-cyan font-mono mb-2">Present</div>
                <h3 className="text-lg font-bold">Student</h3>
                <p className="text-sm text-foreground/60 mb-2">University of Science and Technology of Southern Philippines (USTP)</p>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">
                  Currently pursuing studies in technology, focusing on software development and systems design.
                </p>
              </div>

            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="flex flex-col gap-6">
            <h2 className="text-3xl font-bold font-sans sticky top-20 bg-background/90 backdrop-blur-md py-4 z-10">Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Yorumi', desc: 'A feature-rich web platform for seamlessly streaming anime and reading manga online.', tags: ['Next.js', 'TypeScript', 'GraphQL'], link: 'https://github.com/davenarchives/yorumi' },
                { title: 'Yorumi CLI', desc: 'A robust command-line tool for discovering, searching, and streaming anime directly from the terminal.', tags: ['Node.js', 'CLI', 'TypeScript'], link: 'https://github.com/davenarchives' },
                { title: 'Freedom Wall', desc: 'An anonymous, interactive platform for users to share thoughts and messages securely.', tags: ['React', 'Firebase'], link: 'https://github.com/davenarchives' },
                { title: 'AniSauce', desc: 'A powerful web application for anime reverse image searching to find source material.', tags: ['Next.js', 'API Integration'], link: 'https://github.com/davenarchives' },
                { title: 'Background Remover', desc: 'A handy tool utilizing the remove.bg API to instantly isolate subjects in images.', tags: ['React', 'API'], link: 'https://github.com/davenarchives' },
                { title: 'Happy Bird', desc: 'A fun, web-based game inspired by classic arcade mechanics built from scratch.', tags: ['JavaScript', 'HTML5 Canvas'], link: 'https://github.com/davenarchives' },
              ].map((project, i) => (
                <a key={i} href={project.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <div className="glass rounded-xl p-6 h-full flex flex-col gap-3 hover:border-brand-orange transition-colors">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold group-hover:text-brand-orange transition-colors flex items-center gap-2">
                        <Terminal className="w-4 h-4" />
                        {project.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-foreground/40 group-hover:text-brand-orange transition-colors" />
                    </div>
                    <p className="text-sm text-foreground/70 flex-grow">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 bg-surface-hover rounded-md">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
}

// Dummy icon components since I don't know if they are imported
function Terminal(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>
}
function ExternalLink(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
