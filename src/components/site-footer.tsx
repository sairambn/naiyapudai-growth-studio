import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-surface-2/50">
      <div className="container-page py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-3">
            <span className="font-display text-3xl">Naiyapudai</span>
            <span className="font-tamil text-xl text-primary">நையப்புடை</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-sm">
            The Tamil Nadu agency that ships the site, ranks it on Google & Maps, and runs the marketing that fills your pipeline.
          </p>
          <a href="https://wa.me/919999999999" className="btn-primary mt-6">
            Start on WhatsApp
          </a>
        </div>

        <div className="md:col-span-2">
          <h4 className="eyebrow mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary">Web development</Link></li>
            <li><Link to="/services" className="hover:text-primary">SEO & Google Maps</Link></li>
            <li><Link to="/services" className="hover:text-primary">Performance ads</Link></li>
            <li><Link to="/services" className="hover:text-primary">Social & branding</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="eyebrow mb-4">Studio</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-primary">Work</Link></li>
            <li><Link to="/process" className="hover:text-primary">Process</Link></li>
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/blog" className="hover:text-primary">Insights</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-4">Reach us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://wa.me/919999999999" className="hover:text-primary">WhatsApp: +91 99999 99999</a></li>
            <li><a href="mailto:hello@naiyapudai.com" className="hover:text-primary">hello@naiyapudai.com</a></li>
            <li className="text-muted-foreground">Tamil Nadu, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Naiyapudai · நையப்புடை. All rights reserved.</p>
          <p className="font-tamil">உங்கள் வணிகத்தை இணையத்தில் நையப்புடை</p>
        </div>
      </div>
    </footer>
  );
}
