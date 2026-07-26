import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-4">
        <Link to="/" className="flex items-baseline gap-2.5 group" aria-label="Naiyapudai home">
          <span className="font-display text-2xl tracking-tight text-cream">Naiyapudai</span>
          <span className="font-tamil text-base text-gold/80 group-hover:text-gold transition-colors">
            நையப்புடை
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3.5 py-2 text-sm text-muted-foreground hover:text-cream transition-colors"
              activeProps={{ className: "text-cream" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="https://wa.me/919999999999" className="btn-accent text-sm !py-2.5 !px-5" aria-label="Chat with us on WhatsApp">
            <WhatsAppIcon /> WhatsApp us
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-border text-cream"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-page py-5 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3.5 px-2 text-base border-b border-border/50 text-cream"
              >
                {l.label}
              </Link>
            ))}
            <a href="https://wa.me/919999999999" className="btn-accent mt-5 justify-center">
              <WhatsAppIcon /> WhatsApp us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.09.55 4.13 1.6 5.93L2 22l4.28-1.12a9.9 9.9 0 004.76 1.22h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.79 14.09c-.24.67-1.39 1.28-1.94 1.36-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.8-4.17-4.94-4.36-.15-.19-1.19-1.58-1.19-3.01 0-1.43.75-2.14 1.02-2.43.27-.29.59-.36.78-.36h.56c.18 0 .43-.07.67.51.24.59.83 2.02.9 2.17.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.29.7 1.16 1.5 1.87 1.03.92 1.9 1.2 2.19 1.34.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.64-.14.26.09 1.65.78 1.94.92.29.14.48.22.55.34.07.12.07.69-.17 1.36z"/>
    </svg>
  );
}
