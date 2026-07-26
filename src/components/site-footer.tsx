import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/60 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,oklch(0.84_0.145_85_/_0.04),transparent_60%)]" aria-hidden />
      <div className="container-page py-16 grid gap-12 md:grid-cols-12 relative">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl text-cream">Naiyapudai</span>
            <span className="font-tamil text-xl text-gold">நையப்புடை</span>
          </div>
          <p className="mt-5 text-muted-foreground max-w-sm leading-relaxed">
            The Tamil Nadu studio that ships the site, ranks it on Google & Maps, and runs the marketing that fills your pipeline.
          </p>
          <a href="https://wa.me/917603976686" className="btn-accent mt-7">
            Start on WhatsApp
          </a>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow mb-5 text-gold/80">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-cream transition-colors">Web development</Link></li>
            <li><Link to="/services" className="hover:text-cream transition-colors">SEO & Google Maps</Link></li>
            <li><Link to="/services" className="hover:text-cream transition-colors">Performance ads</Link></li>
            <li><Link to="/services" className="hover:text-cream transition-colors">Social & branding</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="eyebrow mb-5 text-gold/80">Studio</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/work" className="hover:text-cream transition-colors">Work</Link></li>
            <li><Link to="/process" className="hover:text-cream transition-colors">Process</Link></li>
            <li><Link to="/about" className="hover:text-cream transition-colors">About</Link></li>
            <li><Link to="/blog" className="hover:text-cream transition-colors">Insights</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5 text-gold/80">Reach us</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><a href="https://wa.me/917603976686" className="hover:text-cream transition-colors">WhatsApp: +91 76039 76686</a></li>
            <li><a href="mailto:contactnayyapudai@gmail.com" className="hover:text-cream transition-colors">contactnayyapudai@gmail.com</a></li>
            <li>Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border relative">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Naiyapudai · நையப்புடை. All rights reserved.</p>
          <p className="font-tamil text-gold/60">உங்கள் வணிகத்தை இணையத்தில் நையப்புடை</p>
        </div>
      </div>
    </footer>
  );
}
