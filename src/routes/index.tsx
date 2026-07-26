import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, Megaphone, Sparkles, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useReveal } from "../lib/use-reveal";
import { WhatsAppIcon } from "../components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naiyapudai · நையப்புடை — Websites that rank. Marketing that pays for itself." },
      { name: "description", content: "Tamil Nadu's build+SEO+growth studio. We ship websites, rank them on Google & Maps, and run the ads and social that fill your pipeline." },
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
    <section className="grain-bg relative overflow-hidden pt-14 md:pt-24 pb-24 md:pb-32">
      <div className="container-page relative">
        <div ref={revealRef} className="reveal max-w-5xl">
          <span className="eyebrow inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
            <span className="font-tamil not-italic tracking-normal text-[0.85rem]">தமிழ்நாட்டின் டிஜிட்டல் ஸ்டூடியோ</span>
            <span aria-hidden>·</span> Tamil Nadu digital studio
          </span>
          <h1 className="h-display mt-6">
            Websites that <em className="text-terracotta not-italic">rank</em>.
            <br />
            Marketing that <em className="text-primary italic">pays for itself.</em>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl">
            Naiyapudai is a Tamil Nadu studio that ships beautiful websites, ranks them on
            Google Search & Maps, and runs the paid, social, and brand work that turns
            traffic into paying customers — for local SMBs and D2C brands across India.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="https://wa.me/919999999999?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
               className="btn-accent">
              <WhatsAppIcon /> Chat with us — free audit
            </a>
            <Link to="/work" className="btn-ghost">
              See our work <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Stat ticker */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
          {[
            { n: 40, s: "+", label: "Sites shipped" },
            { n: 3, s: ".2×", label: "Avg. organic traffic growth" },
            { n: 12, s: "+ industries", label: "Textile, retail, F&B, clinics, real-estate" },
            { n: 98, s: "/100", label: "Avg. Lighthouse score" },
          ].map((k) => (
            <div key={k.label}>
              <div className="font-display text-4xl md:text-5xl text-foreground">
                <AnimatedCounter to={k.n} suffix={k.s} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{k.label}</p>
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
    <section aria-label="Credibility" className="border-y border-border bg-surface-2/40">
      <div className="container-page py-6 overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap animate-marquee">
          {[...items, ...items].map((t, i) => (
            <span key={i} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-terracotta" /> {t}
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
    title: "Web Design & Development",
    tamil: "வலைத்தள வடிவமைப்பு",
    body: "Fast, beautiful, SEO-ready sites built on Next.js, Shopify, or WordPress — with Core Web Vitals green on day one.",
    bullets: ["Design + build + copy", "Core Web Vitals 90+", "CMS your team can run"],
  },
  {
    icon: Search,
    title: "SEO & Google Maps",
    tamil: "SEO மற்றும் Google Maps",
    body: "Technical SEO, local ranking, and content that wins the searches your customers actually type — in English and Tamil.",
    bullets: ["Local SEO / GBP", "Technical + on-page", "Bilingual content"],
  },
  {
    icon: Megaphone,
    title: "Performance Marketing",
    tamil: "விளம்பர மேலாண்மை",
    body: "Meta and Google ads with a single question in mind: what's the CAC, and is it lower than last month?",
    bullets: ["Meta + Google Ads", "Landing pages that convert", "Weekly reporting"],
  },
  {
    icon: Sparkles,
    title: "Branding & Social",
    tamil: "பிராண்டிங் & சமூக ஊடகங்கள்",
    body: "Repositioning, identity systems, and always-on Instagram / YouTube Shorts that keep your brand top of mind.",
    bullets: ["Brand repositioning", "Identity systems", "Reels & Shorts engine"],
  },
];

function Services() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="h-section mt-4 max-w-2xl">
              One studio for the site, the ranking, and the growth.
            </h2>
          </div>
          <Link to="/services" className="btn-ghost self-start">
            All services <ArrowUpRight size={16} />
          </Link>
        </div>
        <div ref={ref} className="reveal grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card-soft p-8 group transition-transform duration-500 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-4">
                <s.icon className="text-primary" size={28} strokeWidth={1.5} />
                <span className="font-tamil text-sm text-muted-foreground">{s.tamil}</span>
              </div>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-2">
                    <Check size={14} className="text-terracotta" /> {b}
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
    tint: "from-primary/90 to-primary",
  },
  {
    slug: "chennai-dental",
    client: "Marina Dental Care",
    industry: "Multi-clinic · Chennai",
    metric: "3.4×",
    metricLabel: "Google Maps leads / month",
    tint: "from-terracotta to-terracotta/70",
  },
  {
    slug: "madurai-realty",
    client: "Madurai Realty Group",
    industry: "Real estate · Tamil Nadu",
    metric: "₹12.4 Cr",
    metricLabel: "attributed pipeline in 9 months",
    tint: "from-ink to-primary",
  },
];

function FeaturedWork() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-surface-2/40 border-y border-border">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="h-section mt-4 max-w-2xl">
              Proof, not adjectives.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl">
              Every project below is a live client with tracked, reported numbers.
              {" "}<span className="text-terracotta">{"{{"}TODO: swap placeholders for signed-off metrics{"}}"}</span>
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
              className="group card-soft overflow-hidden flex flex-col"
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${c.tint} relative grain-bg overflow-hidden`}>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-cream">
                    <div className="font-display text-5xl md:text-6xl leading-none">{c.metric}</div>
                    <div className="mt-2 text-sm opacity-90">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-cream/10 backdrop-blur grid place-items-center text-cream group-hover:bg-cream group-hover:text-primary transition">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-muted-foreground">{c.industry}</div>
                <div className="mt-1 text-lg">{c.client}</div>
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
    <section className="py-24 md:py-32">
      <div className="container-page">
        <span className="eyebrow">How we work</span>
        <h2 className="h-section mt-4 max-w-2xl">A process built for accountability, not surprises.</h2>

        <div ref={ref} className="reveal mt-14 grid gap-8 md:grid-cols-4 relative">
          <div className="hidden md:block absolute top-6 left-8 right-8 h-px bg-border" aria-hidden />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground grid place-items-center font-display text-lg relative z-10">
                {s.n}
              </div>
              <h3 className="mt-6 text-xl">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <Link to="/process" className="btn-ghost mt-12">
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
    <section className="py-24 md:py-32 bg-primary text-primary-foreground grain-bg">
      <div className="container-page">
        <span className="eyebrow text-primary-foreground/70">What clients say</span>
        <h2 className="h-section mt-4 max-w-3xl text-primary-foreground">
          <span className="font-tamil text-primary-foreground/80">"</span>
          The kind of partner Tamil Nadu businesses have been waiting for.
        </h2>

        <div ref={ref} className="reveal mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur p-8">
              <blockquote className="font-display text-xl leading-snug">"{t.quote}"</blockquote>
              <figcaption className="mt-6 text-sm text-primary-foreground/80">
                <div className="text-primary-foreground">{t.name}</div>
                <div>{t.role}</div>
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
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="card-soft p-10 md:p-16 relative overflow-hidden">
          <div className="max-w-3xl relative">
            <span className="eyebrow">Let's talk</span>
            <h2 className="h-section mt-4">
              Ready to make your business impossible to ignore online?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              One 30-minute call. We look at your site, your search presence, and your ads —
              and tell you exactly what to fix first. No slides, no pitch. Free.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://wa.me/919999999999?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
                 className="btn-accent">
                <WhatsAppIcon /> WhatsApp us now
              </a>
              <Link to="/contact" className="btn-ghost">
                Or send a message <ArrowUpRight size={16} />
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground">We reply within 4 working hours.</p>
          </div>
          <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-terracotta/20 blur-3xl" aria-hidden />
        </div>
      </div>
    </section>
  );
}
