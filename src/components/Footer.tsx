export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold tracking-tight">
          RICH&Eacute; ZAMOR
        </div>

        <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted">
          <a
            href="https://www.linkedin.com/in/richezamorjr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/rczamor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            Github
          </a>
          <a
            href="https://x.com/richezamor"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            X
          </a>
        </div>

        <div className="text-xs text-muted flex items-center gap-2">
          <span>&copy; 2025 Rich&eacute; Zamor. All rights reserved.</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[10px] uppercase tracking-widest">
              System Online
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
