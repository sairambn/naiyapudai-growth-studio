import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Search, Code2, Megaphone, Sparkles, Check } from "lucide-react";
import { useReveal } from "../lib/use-reveal";
import { WhatsAppIcon } from "../components/site-nav";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Naiyapudai · நையப்புடை — Zero friction. 100 on results.",
      },
      {
        name: "description",
        content:
          "Tamil Nadu digital growth studio. We build high-performance websites, rank them on Google Search & Maps, and run marketing that converts — for SMBs and local brands. First client: Total Fitness Studio Chromepet.",
      },
      {
        property: "og:title",
        content:
          "Naiyapudai · நையப்புடை — Zero friction. 100 on results.",
      },
      {
        property: "og:description",
        content:
          "Web development, local SEO, Google Maps, and performance marketing for Tamil Nadu businesses.",
      },
      { property: "og:url", content: "https://naiyapudai.vercel.app/" },
      { property: "og:locale", content: "en_IN" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://naiyapudai.vercel.app/" }],
  }),
  component: HomePage,
});

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

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto">
      <div
        className="absolute inset-[-8%] rounded-[2rem] bg-[radial-gradient(ellipse_at_center,oklch(0.93_0.2_120_/_0.22),transparent_70%)] animate-ambient-glow"
        aria-hidden
      />

      <div className="relative h-full rounded-[1.75rem] border border-gold/25 bg-gradient-to-br from-surface-2 via-surface to-background overflow-hidden shadow-[0_40px_80px_-30px_oklch(0_0_0_/_0.8),0_0_60px_-20px_color-mix(in_oklab,var(--gold)_30%,transparent)]">
        <div className="absolute inset-0 mesh-bg opacity-80" aria-hidden />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 15%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 15%) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        <div className="absolute top-[12%] left-[14%] h-24 w-24 rounded-full bg-gold/25 blur-2xl animate-float-slow" aria-hidden />
        <div className="absolute bottom-[18%] right-[10%] h-32 w-32 rounded-full bg-gold-dark/20 blur-3xl animate-float-delayed" aria-hidden />

        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="font-display text-[clamp(4rem,12vw,6.5rem)] leading-none text-gold-shine tracking-tight font-extrabold">
            90+
          </div>
          <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Lighthouse target
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 w-full max-w-[240px]">
            {["SEO", "Maps", "Ads"].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-gold/20 bg-gold/10 py-3 text-center text-xs font-medium tracking-wide text-gold-light"
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-4 left-4 h-8 w-8 border-t border-l border-gold/40 rounded-tl-lg" aria-hidden />
        <div className="absolute top-4 right-4 h-8 w-8 border-t border-r border-gold/40 rounded-tr-lg" aria-hidden />
        <div className="absolute bottom-4 left-4 h-8 w-8 border-b border-l border-gold/40 rounded-bl-lg" aria-hidden />
        <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold/40 rounded-br-lg" aria-hidden />
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 glass-stat px-5 py-2.5 flex items-center gap-2 whitespace-nowrap">
        <span className="h-2 w-2 rounded-full bg-gold animate-pulse" aria-hidden />
        <span className="text-xs font-medium tracking-wide text-cream">Core Web Vitals · green</span>
      </div>
    </div>
  );
}

function Hero() {
  const revealRef = useReveal<HTMLDivElement>();
  return (
    <section className="grain-bg relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-32">
      <div
        className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[100vw] h-[70vh] bg-[radial-gradient(ellipse_at_center,oklch(0.93_0.2_120_/_0.14),transparent_65%)] animate-ambient-glow"
        aria-hidden
      />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div ref={revealRef} className="reveal lg:col-span-7 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="inline-flex items-center rounded-full border border-gold/25 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
                Growth studio · Tamil Nadu
              </span>
              <span className="eyebrow !normal-case tracking-normal font-tamil text-[0.8rem] text-gold-light">
                தமிழ்நாட்டின் டிஜிட்டல் ஸ்டூடியோ
              </span>
            </div>

            <h1 className="h-display">
              ZERO FRICTION.
              <br />
              <span className="text-gold-shine">100 ON RESULTS.</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              High-performance websites. Local SEO that ranks. Google Maps that convert.
              Built for SMBs who want traffic that turns into calls — not vanity metrics.
            </p>

            <div className="mt-12 flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
                className="btn-accent animate-glow-pulse"
                aria-label="Chat with Naiyapudai on WhatsApp for a free growth audit"
              >
                <WhatsAppIcon /> Chat with us — free audit
              </a>
              <Link to="/work" className="btn-ghost" aria-label="View our selected work and case studies">
                See the work <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 reveal" style={{ transitionDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>

        <div className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { value: "1+", label: "Live client engagement" },
            { value: "SSR", label: "Modern production stack" },
            { value: "4.9★", label: "Client public rating" },
            { value: "Maps", label: "+ Schema local SEO" },
          ].map((k) => (
            <div key={k.label} className="glass-stat p-5 md:p-6 group">
              <div className="font-display text-3xl md:text-4xl text-cream tracking-tight group-hover:text-gold-shine transition-colors duration-500 tabular-nums font-bold">
                {k.value}
              </div>
              <p className="mt-2 text-[0.65rem] md:text-xs uppercase tracking-widest text-muted-foreground leading-snug">
                {k.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    "React 19",
    "TanStack Start",
    "Tailwind v4",
    "Schema.org",
    "Google Maps",
    "Core Web Vitals",
    "Vercel",
    "Local SEO",
  ];
  return (
    <section aria-label="Credibility signals" className="border-y border-border bg-surface/70">
      <div className="container-page py-5 overflow-hidden">
        <div className="flex gap-14 whitespace-nowrap animate-marquee will-change-transform">
          {[...items, ...items].map((t, i) => (
            <span
              key={i}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-3"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" aria-hidden /> {t}
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
    body: "Fast, beautiful, SEO-ready sites built for conversion — with Core Web Vitals green on day one.",
    bullets: ["Design + build + copy", "Core Web Vitals 90+", "SSR / modern stack"],
  },
  {
    icon: Search,
    num: "02",
    title: "SEO & Google Maps",
    tamil: "SEO மற்றும் Google Maps",
    body: "Technical SEO, local ranking, and Google Business Profile work that wins the searches your customers actually type.",
    bullets: ["Local SEO / GBP", "Technical + on-page", "Schema.org markup"],
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Performance Marketing",
    tamil: "விளம்பர மேலாண்மை",
    body: "Meta and Google ads with one question in mind: what's the CAC, and is it lower than last month?",
    bullets: ["Meta + Google Ads", "Landing pages that convert", "Clear reporting"],
  },
  {
    icon: Sparkles,
    num: "04",
    title: "Branding & Social",
    tamil: "பிராண்டிங் & சமூக ஊடகங்கள்",
    body: "Identity systems and always-on short-form content that keep your brand top of mind.",
    bullets: ["Brand systems", "Identity & design", "Reels & Shorts"],
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
              Sites that convert.
              <br />
              <span className="text-muted-foreground">Maps that get found.</span>
            </h2>
          </div>
          <Link to="/services" className="btn-ghost self-start" aria-label="View all services">
            All services <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <div ref={ref} className="reveal grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title} className="card-elite p-8 md:p-10 group">
              <div
                className="sweep-light pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-gold/10 to-transparent"
                aria-hidden
              />
              <div className="flex items-start justify-between gap-4 relative">
                <div className="flex items-center gap-4">
                  <div className="icon-well">
                    <s.icon className="text-gold" size={22} strokeWidth={1.5} aria-hidden />
                  </div>
                  <span className="protocol-num">{s.num}</span>
                </div>
                <span className="font-tamil text-sm text-gold-light">{s.tamil}</span>
              </div>
              <h3 className="mt-8 text-2xl md:text-3xl font-display relative">{s.title}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed relative">{s.body}</p>
              <ul className="mt-8 space-y-2.5 relative">
                {s.bullets.map((b) => (
                  <li key={b} className="text-sm flex items-center gap-3 text-cream/90">
                    <Check size={14} className="text-gold shrink-0" aria-hidden /> {b}
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
    slug: "total-fitness-studio",
    client: "Total Fitness Studio",
    industry: "Unisex gym · Chromepet / Hasthinapuram",
    metric: "4.9★",
    metricLabel: "~798 reviews · web + Maps",
  },
];

function FeaturedWork() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-surface/40 border-y border-border relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh-bg opacity-40" aria-hidden />
      <div className="container-page relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="protocol-num">02 — SELECTED WORK</span>
            <h2 className="h-section mt-5 max-w-2xl">Live client work</h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Total Fitness Studio — conversion website, local SEO, and Google Maps optimization.
              Our first order, shipped end-to-end.
            </p>
          </div>
          <Link to="/work" className="btn-ghost self-start" aria-label="Read the Total Fitness Studio case study">
            Case study <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>

        <div ref={ref} className="reveal max-w-4xl">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group block card-elite overflow-hidden"
              aria-label={`${c.client} case study — ${c.metric} ${c.metricLabel}`}
            >
              <div className="browser-chrome">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" aria-hidden />
                <div className="ml-3 flex-1 rounded-md bg-background/50 border border-border/50 px-3 py-1 text-[0.65rem] text-muted-foreground truncate">
                  total-fitness-studio-livid.vercel.app
                </div>
              </div>

              <div className="aspect-[16/9] relative bg-gradient-to-br from-surface-2 via-background to-surface overflow-hidden">
                <div className="absolute inset-0 mesh-bg" aria-hidden />
                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(oklch(1 0 0 / 20%) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 20%) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                  aria-hidden
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="font-display text-6xl md:text-8xl leading-none text-cream group-hover:text-gold-shine transition-colors duration-500 font-extrabold">
                    {c.metric}
                  </div>
                  <div className="mt-3 text-sm md:text-base text-muted-foreground">{c.metricLabel}</div>
                  <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {["Website", "Local SEO", "Google Maps", "Schema.org"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[0.65rem] uppercase tracking-wider text-gold-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  className="absolute top-5 right-5 h-11 w-11 rounded-full border border-cream/20 bg-cream/5 backdrop-blur grid place-items-center text-cream group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-400"
                  aria-hidden
                >
                  <ArrowUpRight size={18} />
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-border/60">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.industry}</div>
                  <div className="mt-1 text-xl font-display font-bold">{c.client}</div>
                </div>
                <span className="text-sm text-gold inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  View case study <ArrowUpRight size={14} aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "Deep-dive on your business, market, and local competitive landscape.",
  },
  {
    n: "02",
    title: "Design",
    body: "Positioning, IA, and design system — signed off before a line of code ships.",
  },
  {
    n: "03",
    title: "Build & Launch",
    body: "Development, SEO groundwork, analytics, Maps alignment, clean indexation.",
  },
  {
    n: "04",
    title: "Grow",
    body: "SEO, ads, and content on retainer. Clear reporting, continuous improvement.",
  },
];

function Process() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36">
      <div className="container-page">
        <span className="protocol-num">03 — OPERATING SYSTEM</span>
        <h2 className="h-section mt-5 max-w-2xl">A process built for accountability, not surprises.</h2>

        <div ref={ref} className="reveal mt-16 grid gap-10 md:grid-cols-4 relative">
          <div
            className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, color-mix(in oklab, var(--gold) 45%, transparent), transparent)",
            }}
            aria-hidden
          />
          {steps.map((s) => (
            <div key={s.n} className="relative group">
              <div className="h-16 w-16 rounded-2xl border border-gold/40 bg-gradient-to-br from-gold/20 to-gold/5 text-gold grid place-items-center font-mono text-sm relative z-10 shadow-[0_0_28px_-4px_var(--gold)] group-hover:scale-105 transition-transform duration-400">
                {s.n}
              </div>
              <h3 className="mt-7 text-xl font-display font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        <Link to="/process" className="btn-ghost mt-14" aria-label="See the full operating process">
          See the full process <ArrowUpRight size={16} aria-hidden />
        </Link>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "Naiyapudai built our conversion-focused site, wired Schema.org for the gym, and aligned our Google Maps presence so Chromepet searchers can find us and call or WhatsApp in one tap.",
    name: "Total Fitness Studio",
    role: "Chromepet / Hasthinapuram · First Naiyapudai client",
  },
];

function Testimonials() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="py-28 md:py-36 bg-surface border-y border-border grain-bg relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gold/10 blur-3xl" aria-hidden />
      <div className="container-page relative">
        <span className="protocol-num">04 — CLIENT SIGNAL</span>
        <h2 className="h-section mt-5 max-w-3xl">
          One engagement. Full ownership of web, SEO, and Maps.
        </h2>

        <div ref={ref} className="reveal mt-16 grid gap-6 md:grid-cols-1 max-w-3xl">
          {testimonials.map((t, i) => (
            <figure key={i} className="card-elite p-8 md:p-12 relative">
              <div
                className="absolute top-6 left-8 font-display text-7xl md:text-8xl leading-none text-gold/20 select-none"
                aria-hidden
              >
                “
              </div>
              <blockquote className="relative font-display text-xl md:text-2xl leading-snug text-cream/95 pt-8">
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 text-sm">
                <div className="h-12 w-12 rounded-full border border-gold/30 bg-gold/15 grid place-items-center font-display text-lg text-gold font-bold">
                  TF
                </div>
                <div>
                  <div className="text-cream font-medium">{t.name}</div>
                  <div className="text-muted-foreground mt-0.5">{t.role}</div>
                </div>
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
          <div className="absolute inset-0 mesh-bg opacity-60" aria-hidden />
          <div
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.93_0.2_120_/_0.15),transparent_55%)]"
            aria-hidden
          />
          <div className="max-w-3xl relative z-10">
            <span className="protocol-num">05 — INITIATE</span>
            <h2 className="h-section mt-5">
              Ready to grow without the noise?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              One 30-minute call. We look at your site, your search presence, and your Maps listing
              — and tell you exactly what to fix first. No slides, no pitch. Free.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
                className="btn-accent"
                aria-label="WhatsApp Naiyapudai for a free growth audit"
              >
                <WhatsAppIcon /> WhatsApp us now
              </a>
              <Link to="/contact" className="btn-ghost" aria-label="Send a message via the contact form">
                Or send a message <ArrowUpRight size={16} aria-hidden />
              </Link>
            </div>
            <p className="mt-6 text-xs text-muted-foreground tracking-wide">
              We reply within 4 working hours.
            </p>
          </div>
          <div
            className="pointer-events-none absolute -right-20 -bottom-20 w-[28rem] h-[28rem] rounded-full bg-gold/15 blur-3xl animate-ambient-glow"
            aria-hidden
          />
        </div>
      </div>
    </section>
  );
}
