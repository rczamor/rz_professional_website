import { footerContent } from "@/content/footer";

export default function Footer() {
  return (
    <footer className="border-t border-card-border py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm font-bold tracking-tight">
          {footerContent.brand}
        </div>

        <div className="flex items-center gap-8 text-xs tracking-[0.15em] uppercase text-muted">
          {footerContent.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
              aria-label={`Visit ${link.label} profile`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="text-xs text-muted flex items-center gap-2">
          <span>{footerContent.copyright}</span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent text-[10px] uppercase tracking-widest">
              {footerContent.statusLabel}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
