export function Footer() {
  return (
    <footer className="border-t border-white/10 glass py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono font-bold tracking-tight">Daven<span className="text-brand-orange">Archives</span></span>
        </div>
        
        <p className="text-sm font-mono text-foreground/50 text-center">
          &copy; {new Date().getFullYear()} Daven Austhine Sumagang. All rights reserved. <br className="md:hidden" />
          <span className="hidden md:inline"> | </span> Built with Vibe Coding.
        </p>
        
        <div className="flex gap-4">
          <a href="#" className="text-foreground/50 hover:text-brand-cyan transition-colors font-mono text-sm">Terms</a>
          <a href="#" className="text-foreground/50 hover:text-brand-cyan transition-colors font-mono text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
