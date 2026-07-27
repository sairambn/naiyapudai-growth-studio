import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useCallback } from "react";
import { useReveal } from "../lib/use-reveal";
import {
  useScrollLayers,
  easeOutCubic,
  smoothstep,
} from "../lib/use-scroll-progress";
import { WhatsAppIcon } from "../components/site-nav";

const IMG = {
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2400&q=90",
  neon: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=90",
  code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=90",
  city: "https://images.unsplash.com/photo-1570168007204-be84a88e3f54?auto=format&fit=crop&w=1800&q=90",
  maps: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=90",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=90",
  abstract: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=90",
  phone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=90",
  night: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=90",
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naiyapudai · Zero friction. 100 on results." },
      {
        name: "description",
        content:
          "Tamil Nadu growth studio. High-performance websites, local SEO, Google Maps — built so search turns into calls.",
      },
      { property: "og:title", content: "Naiyapudai · Zero friction. 100 on results." },
      { property: "og:url", content: "https://naiyapudai.vercel.app/" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://naiyapudai.vercel.app/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <CinematicHero />
      <HighlightsStrip />
      <PinnedStrip />
      <ZoomChapter
        image={IMG.gym}
        eyebrow="01 — Live work"
        title="Total Fitness Studio"
        body="Chromepet gym. 4.9★ · ~798 reviews. Conversion site + Schema + Maps — first client, shipped end to end."
        toWork
        cta="Open case study"
      />
      <ZoomChapter
        image={IMG.code}
        eyebrow="02 — Build"
        title="Sites that load like products"
        body="React 19 · TanStack Start · Tailwind v4 · Nitro. SSR, typed routes, Core Web Vitals — not templates."
        to="/services"
        cta="See services"
        reverse
      />
      <ZoomChapter
        image={IMG.maps}
        eyebrow="03 — Rank"
        title="Maps + Schema that convert"
        body="Google finds you. The page closes the call. Local SEO wired to the same source of truth as the site."
        to="/services"
        cta="How we rank"
      />
      <ParallaxBand />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}

function CinematicHero() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.09 });

  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(Math.min(1, p / 0.48));
        const scale = 1.42 - t * 0.42;
        return { transform: `scale3d(${scale},${scale},1)` };
      });
    },
    [register],
  );

  const veilRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(Math.min(1, p / 0.52));
        return { opacity: 0.2 + t * 0.6 };
      });
    },
    [register],
  );

  const copyRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(Math.min(1, p / 0.48));
        const y = t * 100;
        return {
          transform: `translate3d(0,${y}px,0)`,
          opacity: 1 - t * 0.9,
        };
      });
    },
    [register],
  );

  const hintRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        opacity: Math.max(0, 1 - p * 3.5),
      }));
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative h-[190vh] bg-background" aria-label="Hero">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div
          ref={imgRef}
          className="absolute inset-0 will-change-transform"
          style={{ transformOrigin: "50% 36%" }}
        >
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div ref={veilRef} className="absolute inset-0 bg-background will-change-[opacity]" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent pointer-events-none"
          aria-hidden
        />

        <div
          ref={copyRef}
          className="relative z-10 flex h-full flex-col justify-end pb-20 md:pb-28 container-page will-change-transform"
        >
          <p className="mb-6 inline-flex w-fit items-center rounded-full border border-gold/25 bg-gold/8 px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.28em] text-gold backdrop-blur-md">
            Growth studio · Tamil Nadu
          </p>
          <h1 className="h-display max-w-5xl text-cream drop-shadow-[0_4px_48px_rgba(0,0,0,0.7)]">
            ZERO FRICTION.
            <br />
            <span className="text-gold-shine">100 ON RESULTS.</span>
          </h1>
          <p className="mt-7 max-w-md text-base md:text-lg text-cream/65 leading-relaxed tracking-[-0.01em]">
            Websites. Local SEO. Google Maps.
            <br className="hidden sm:block" />
            Built so traffic becomes calls — not vanity metrics.
          </p>
          <div className="mt-11 flex flex-wrap gap-3.5">
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> Free audit
            </a>
            <Link to="/work" className="btn-ghost backdrop-blur-md bg-background/25">
              See the work <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
        </div>

        <div
          ref={hintRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 text-[0.6rem] uppercase tracking-[0.35em] text-cream/40 will-change-[opacity]"
          aria-hidden
        >
          <span>Scroll</span>
          <span className="h-12 w-px bg-gradient-to-b from-gold/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

function HighlightsStrip() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { label: "Active Noise Cancellation", value: "World’s best in-ear" },
    { label: "Core Web Vitals", value: "90+ on day one" },
    { label: "Local ranking", value: "Maps + Schema" },
    { label: "Accountability", value: "CAC, not vanity" },
  ];

  // Apple-style sparse highlight row — adapted for studio
  const studioItems = [
    { k: "Web", v: "SSR that ranks" },
    { k: "SEO", v: "Technical + local" },
    { k: "Maps", v: "GBP that converts" },
    { k: "Growth", v: "Ads with CAC" },
  ];

  return (
    <section className="border-y border-border/60 bg-surface/40">
      <div ref={ref} className="reveal container-page py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {studioItems.map((it) => (
            <div key={it.k} className="text-center md:text-left">
              <p className="protocol-num mb-2">{it.k}</p>
              <p className="font-display text-lg md:text-xl text-cream tracking-tight">{it.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PinnedStrip() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.11 });

  const trackRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(p);
        const x = -t * 52;
        return { transform: `translate3d(${x}%,0,0)` };
      });
    },
    [register],
  );

  const shots = [
    { src: IMG.neon, label: "Systems" },
    { src: IMG.desk, label: "Craft" },
    { src: IMG.phone, label: "Mobile" },
    { src: IMG.city, label: "Local" },
    { src: IMG.abstract, label: "Signal" },
    { src: IMG.night, label: "Night" },
    { src: IMG.gym, label: "Work" },
    { src: IMG.code, label: "Build" },
  ];

  return (
    <section ref={sectionRef} className="relative h-[210vh] bg-background" aria-label="Gallery">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="container-page mb-8 md:mb-10">
          <p className="protocol-num">Visual language</p>
          <h2 className="h-section mt-3 text-cream">Scroll the film</h2>
        </div>
        <div ref={trackRef} className="flex gap-4 md:gap-5 will-change-transform px-[4vw]">
          {shots.map((s) => (
            <figure
              key={s.label + s.src}
              className="relative shrink-0 w-[72vw] sm:w-[42vw] md:w-[28vw] aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.08] group"
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/35 to-transparent text-[0.65rem] uppercase tracking-[0.26em] text-cream/90">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ZoomChapter({
  image,
  eyebrow,
  title,
  body,
  to,
  toWork,
  cta,
  reverse,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  to?: "/services" | "/work" | "/contact";
  toWork?: boolean;
  cta: string;
  reverse?: boolean;
}) {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.1 });

  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(p);
        const scale = 1.32 - t * 0.34;
        const opacity = 0.35 + Math.sin(smoothstep(p) * Math.PI) * 0.55;
        return {
          transform: `scale3d(${scale},${scale},1)`,
          opacity,
        };
      });
    },
    [register],
  );

  const copyRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const enter = smoothstep((p - 0.1) / 0.32);
        const exit = smoothstep((p - 0.7) / 0.3);
        const opacity = enter * (1 - exit * 0.88);
        const y = (1 - enter) * 48 + exit * -36;
        return {
          opacity,
          transform: `translate3d(0,${y}px,0)`,
        };
      });
    },
    [register],
  );

  const ctaEl = toWork ? (
    <Link to="/work/$slug" params={{ slug: "total-fitness-studio" }} className="btn-accent">
      {cta} <ArrowUpRight size={15} aria-hidden />
    </Link>
  ) : (
    <Link to={to ?? "/services"} className="btn-accent">
      {cta} <ArrowUpRight size={15} aria-hidden />
    </Link>
  );

  return (
    <section ref={sectionRef} className="relative h-[165vh] bg-background">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div
            ref={imgRef}
            className="absolute inset-0 will-change-transform"
            style={{ transformOrigin: reverse ? "26% 50%" : "74% 50%" }}
          >
            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div
            className={`absolute inset-0 ${
              reverse
                ? "bg-gradient-to-l from-background via-background/80 to-background/10"
                : "bg-gradient-to-r from-background via-background/80 to-background/10"
            }`}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-background/35"
            aria-hidden
          />
        </div>

        <div
          ref={copyRef}
          className={`relative z-10 container-page will-change-transform ${reverse ? "md:ml-auto md:text-right" : ""}`}
        >
          <p className="protocol-num mb-5">{eyebrow}</p>
          <h2 className="h-section max-w-xl text-cream md:inline-block">{title}</h2>
          <p className={`mt-6 max-w-md text-cream/60 leading-relaxed text-[1.05rem] ${reverse ? "md:ml-auto" : ""}`}>
            {body}
          </p>
          <div className={`mt-9 ${reverse ? "md:flex md:justify-end" : ""}`}>{ctaEl}</div>
        </div>
      </div>
    </section>
  );
}

function ParallaxBand() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.12 });
  const aRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        transform: `translate3d(0,${(p - 0.5) * -16}%,0)`,
      }));
    },
    [register],
  );
  const bRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        transform: `translate3d(0,${(p - 0.5) * 20}%,0)`,
      }));
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative py-32 md:py-44 overflow-hidden">
      <div className="container-page grid md:grid-cols-2 gap-7 md:gap-12 items-stretch">
        <div
          ref={aRef}
          className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform border border-white/[0.08]"
        >
          <img
            src={IMG.neon}
            alt=""
            className="absolute inset-0 h-[130%] w-full object-cover -top-[15%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
          <p className="absolute bottom-7 left-7 right-7 font-display text-2xl md:text-3xl font-bold text-cream tracking-tight">
            Performance is the brand.
          </p>
        </div>
        <div
          ref={bRef}
          className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform border border-white/[0.08] md:mt-24"
        >
          <img
            src={IMG.city}
            alt=""
            className="absolute inset-0 h-[130%] w-full object-cover -top-[15%]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
          <p className="absolute bottom-7 left-7 right-7 font-display text-2xl md:text-3xl font-bold text-cream tracking-tight">
            Built for Tamil Nadu search.
          </p>
        </div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const ref = useReveal<HTMLDivElement>();
  const items = [
    { title: "Web", body: "SSR apps & conversion sites", img: IMG.code },
    { title: "SEO", body: "Technical + local ranking", img: IMG.desk },
    { title: "Maps", body: "GBP aligned to the site", img: IMG.maps },
    { title: "Growth", body: "Ads that respect CAC", img: IMG.phone },
  ];

  return (
    <section className="py-28 md:py-36 border-t border-border">
      <div className="container-page">
        <p className="protocol-num">Capabilities</p>
        <h2 className="h-section mt-4 max-w-2xl">Everything that moves the needle</h2>
        <div ref={ref} className="reveal mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.08]"
            >
              <img
                src={it.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-800 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-bold text-cream tracking-tight">{it.title}</h3>
                <p className="mt-1.5 text-sm text-cream/55">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link to="/services" className="btn-ghost">
            Full services <ArrowUpRight size={15} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.09 });
  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(p);
        const scale = 1.22 - t * 0.22;
        return { transform: `scale3d(${scale},${scale},1)` };
      });
    },
    [register],
  );
  const copyRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep((p - 0.18) / 0.38);
        return {
          opacity: t,
          transform: `translate3d(0,${(1 - t) * 40}px,0)`,
        };
      });
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative h-[145vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center">
        <div ref={imgRef} className="absolute inset-0 will-change-transform">
          <img src={IMG.night} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/72" />
        </div>
        <div
          ref={copyRef}
          className="relative z-10 container-page text-center max-w-2xl will-change-transform"
        >
          <h2 className="h-section text-cream">Ready to grow without the noise?</h2>
          <p className="mt-6 text-cream/55 leading-relaxed text-lg">
            One short call. Site, search, Maps — we tell you what to fix first.
          </p>
          <div className="mt-11 flex flex-wrap justify-center gap-3.5">
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> WhatsApp us
            </a>
            <Link to="/contact" className="btn-ghost backdrop-blur-md bg-background/25">
              Contact form <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
