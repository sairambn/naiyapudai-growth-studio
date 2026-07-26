import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, Megaphone, Sparkles, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../lib/use-reveal";
import { WhatsAppIcon } from "../components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naiyapudai · நையப்புடை — Websites that rank. Marketing that pays for itself." },
      { name: "description", content: "Tamil Nadu's elite build+SEO+growth studio. We ship websites, rank them on Google & Maps, and run the ads and social that fill your pipeline." },
      { property: "og:title", content: "Naiyapudai · நையப்புடை — Websites that rank. Marketing that pays for itself." },
      { property: "og:description", content: "Web development, SEO, Google Maps and performance marketing built for Tamil Nadu SMB and D2C brands." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function AnimatedCounter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          setN(Math.round(eased * to));
          if (t < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to, duration]);
  return <span ref={ref}>{n}{suffix}</span>;
}

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <FeaturedWork />
      <Process />
      <Testimonials />
      <FinalCta />
    </>
  );
}

function Hero() {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <section className="grain-bg relative overflow-hidden pt-16 md:pt-28 pb-28 md:pb-40">
      {/* Grand ambient gold glows */}
      <div className="pointer-events-none absolute top-[-10%] left-1/2 -translate-x-1/2 w-[90vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,oklch(0.84_0.145_85_/_0.14),transparent_65%)] animate-ambient-glow" aria-hidden />
      <div className="pointer-events-none absolute top-[20%] right-[-5%] w-[40vw] h-[40vh] bg-[radial-gradient(ellipse_at_center,oklch(0.84_0.145_85_/_0.06),transparent_70%)]" aria-hidden />
      <div className="pointer-events-none absolute bottom-[10%] left-[-10%] w-[35vw] h-[35vh] bg-[radial-gradient(ellipse_at_center,oklch(0.68_0.12_75_/_0.05),transparent_70%)]" aria-hidden />

      <div className="container-page relative">
        <div ref={revealRef} className="reveal max-w-5xl">
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="protocol-num">00 — SYSTEM PROTOCOL // MMXXVI</span>
            <span className="h-px w-10 bg-gradient-to-r from-gold/60 to-transparent" />
            <span className="eyebrow !normal-case tracking-normal font-tamil text-[0.8rem] text-gold-light/90">தமிழ்நாட்டின் டிஜிட்டல் ஸ்டூடியோ</span>
          </div>

          <h1 className="h-display">
            Websites that <em className="text-gold-shine not-italic">rank</em>.
            <br />
            Marketing that <em className="italic text-cream/95">pays for itself.</em>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Naiyapudai is the Tamil Nadu studio that ships elite websites, ranks them on
            Google Search & Maps, and runs the paid, social, and brand systems that turn
            traffic into paying customers — for serious SMBs and D2C brands.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
               className="btn-accent animate-glow-pulse">
              <WhatsAppIcon /> Chat with us — free audit
            </a>
            <Link to="/work" className="btn-ghost">
              See the work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stat ticker — elevated */}
        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-12">
          {[
            { n: 40, s: "+", label: "Sites shipped" },
            { n: 3, s: ".2×", label: "Avg. organic growth" },
            { n: 12, s: "+", label: "Industries served" },
            { n: 98, s: "/100", label: "Avg. Lighthouse" },
          ].map((k) => (
            <div key={k.label} className="group">
              <div className="font-display text-4xl md:text-5xl text-cream tracking-tight group-hover:text-gold-shine transition-all duration-500">
                <AnimatedCounter to={k.n} suffix={k.s} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{k.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "Google Business Profile Certified",
    "Meta Business Partner",
    "Shopify Experts",
    "Next.js & TanStack",
    "Semrush-audited",
    "WhatsApp Business API",
  ];
  return (
    <section aria-label="Credibility" className="border-y border-border bg-surface/70">
      <div className="container-page py-5 overflow-hidden">
        <div className="flex gap-14 whitespace-nowrap animate-marquee">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: Code2,
    num: "01",
    title: "Web Design & Development",
    tamil: "வலைத்தள வடிவமைப்பு",
    body: "Fast, beautiful, SEO-ready sites built on Next.js, Shopify, or WordPress — with Core Web Vitals green on day one.",
    bullets: ["Design + build + copy", "Core Web Vitals 90+", "CMS your team can run"],
  },
  {
    icon: Search,
    num: "02",
    title: "SEO & Google Maps",
    tamil: "SEO மற்றும் Google Maps",
    body: "Technical SEO, local ranking, and content that wins the searches your customers actually type — in English and Tamil.",
    bullets: ["Local SEO / GBP", "Technical + on-page", "Bilingual content"],
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Performance Marketing",
    tamil: "விளம்பர மேலாண்மை",
    body: "Meta and Google ads with a single question in mind: what's the CAC, and is it lower than last month?",
    bullets: ["Meta + Google Ads", "Landing pages that convert", "Weekly reporting"],
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Branding & Social",
    tamil: "பிராண்டிங் & சமூக ஊடகங்கள்",
    body: "Repositioning, identity systems, and always-on Instagram / YouTube Shorts that keep your brand top of mind.",
    bullets: ["Brand repositioning", "Identity systems", "Reels & Shorts engine"],
  },
];

function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="protocol-num">01 — CAPABILITIES</span>
            <h2 className="h-section mt-5 max-w-2xl">
              One studio for the site, the ranking, and the growth.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost self-start">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div ref={ref} className="reveal grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card-elite p-8 md:p-10 group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="protocol-num">{s.num}</span>
                  <s.icon className="text-gold" size={24} strokeWidth={1.4} />
                </div>
                <span className="font-tamil text-sm text-gold-light/70">{s.tamil}</span>
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl font-display">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-8 space-y-2.5">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-3 text-cream/90">
                    <Check size={14} className="text-gold shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    slug: "kovai-textiles",
    client: "Kovai Textile Co.",
    industry: "D2C Handloom · Coimbatore",
    metric: "+186%",
    metricLabel: "organic traffic in 5 months",
  },
  {
    slug: "chennai-dental",
    client: "Marina Dental Care",
    industry: "Multi-clinic · Chennai",
    metric: "3.4×",
    metricLabel: "Google Maps leads / month",
  },
  {
    slug: "madurai-realty",
    client: "Madurai Realty Group",
    industry: "Real estate · Tamil Nadu",
    metric: "₹12.4 Cr",
    metricLabel: "attributed pipeline in 9 months",
  },
];

function FeaturedWork() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-surface/50 border-y border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="protocol-num">02 — SELECTED WORK</span>
            <h2 className="h-section mt-5 max-w-2xl">
              Proof, not adjectives.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Every project below is a live client with tracked, reported numbers.
            </p>
          </div>
          <Link to="/work" className="btn-ghost self-start">
            All case studies <ArrowUpRight size={16} />
          </Link>
        </div>

        <div ref={ref} className="reveal grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group card-elite overflow-hidden flex flex-col"
            >
              <div className="aspect-[4/3] relative grain-bg bg-gradient-to-br from-surface-2 to-background overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.84_0.145_85_/_0.12),transparent_60%)]" />
                <div className="absolute inset-0 flex items-end p-7">
                  <div>
                    <div className="font-display text-5xl md:text-6xl leading-none text-cream group-hover:text-gold-shine transition-all duration-500">{c.metric}</div>
                    <div className="mt-2 text-sm text-muted-foreground">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full border border-cream/20 bg-cream/5 backdrop-blur grid place-items-center text-cream group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-400">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.industry}</div>
                <div className="mt-2 text-lg font-display">{c.client}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Discover", body: "Deep-dive on your business, market, and Tamil Nadu / India competitive landscape." },
  { n: "02", title: "Design", body: "Positioning, IA, and design system — signed off before a line of code ships." },
  { n: "03", title: "Build & Launch", body: "Development, SEO groundwork, analytics, and a launch that Google indexes cleanly." },
  { n: "04", title: "Grow", body: "SEO, ads, and content on a monthly retainer. Weekly reporting, monthly reviews." },
];

function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <span className="protocol-num">03 — OPERATING SYSTEM</span>
        <h2 className="h-section mt-5 max-w-2xl">A process built for accountability, not surprises.</h2>

        <div ref={ref} className="reveal mt-16 grid gap-10 md:grid-cols-4 relative">
          <div className="hidden md:block absolute top-7 left-10 right-10 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="h-14 w-14 rounded-full border border-gold/50 bg-gold/10 text-gold grid place-items-center font-mono text-sm relative z-10 shadow-[0_0_20px_-4px_var(--gold)]">
                {s.n}
              </div>
              <h3 className="mt-7 text-xl font-display">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <Link to="/process" className="btn-ghost mt-14">
          See the full process <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Naiyapudai rebuilt our site and had us ranking for 'handloom sarees Coimbatore' inside four months. Direct sales from Google now match our Instagram revenue.",
    name: "{{TODO: real client}}",
    role: "Founder, Kovai Textile Co.",
  },
  {
    quote: "The team understood our clinic business, wrote in Tamil and English, and doubled our Maps enquiries in the first quarter. They act like partners, not vendors.",
    name: "{{TODO: real client}}",
    role: "MD, Marina Dental Care",
  },
  {
    quote: "The most transparent agency we've worked with. Weekly numbers, honest tradeoffs, real strategy — not a monthly PDF full of vanity metrics.",
    name: "{{TODO: real client}}",
    role: "CMO, Madurai Realty Group",
  },
];

function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-surface border-y border-border grain-bg">
      <div className="container-page">
        <span className="protocol-num">04 — CLIENT SIGNALS</span>
        <h2 className="h-section mt-5 max-w-3xl">
          The kind of partner Tamil Nadu businesses have been waiting for.
        </h2>

        <div ref={ref} className="reveal mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="card-elite p-8 md:p-9">
              <blockquote className="font-display text-xl leading-snug text-cream/95">"{t.quote}"</blockquote>
              <figcaption className="mt-8 text-sm">
                <div className="text-cream">{t.name}</div>
                <div className="text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <div className="card-elite p-10 md:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.84_0.145_85_/_0.12),transparent_55%)]" aria-hidden />
          <div className="max-w-3xl relative z-10">
            <span className="protocol-num">05 — INITIATE</span>
            <h2 className="h-section mt-5">
              Ready to make your business impossible to ignore online?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              One 30-minute call. We look at your site, your search presence, and your ads —
              and tell you exactly what to fix first. No slides, no pitch. Free.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
                 className="btn-accent">
                <WhatsAppIcon /> WhatsApp us now
              </a>
              <Link to="/contact" className="btn-ghost">
                Or send a message <ArrowUpRight size={16} />
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground tracking-wide">We reply within 4 working hours.</p>
          </div>
          <div className="pointer-events-none absolute -right-20 -bottom-20 w-[28rem] h-[28rem] rounded-full bg-gold/15 blur-3xl animate-ambient-glow" aria-hidden />
        </div>
      </div>
    </section>
  );
}
