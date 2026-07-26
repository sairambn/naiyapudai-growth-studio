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
  hero: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=2400&q=85",
  neon: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85",
  gym: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1800&q=85",
  code: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=85",
  city: "https://images.unsplash.com/photo-1570168007204-be84a88e3f54?auto=format&fit=crop&w=1800&q=85",
  maps: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85",
  desk: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85",
  abstract: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=85",
  phone: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=85",
  night: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=85",
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
  const { sectionRef, register } = useScrollLayers({ lerp: 0.1 });

  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(Math.min(1, p / 0.5));
        const scale = 1.45 - t * 0.45;
        return { transform: `scale3d(${scale},${scale},1)` };
      });
    },
    [register],
  );

  const veilRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(Math.min(1, p / 0.55));
        return { opacity: 0.25 + t * 0.55 };
      });
    },
    [register],
  );

  const copyRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(Math.min(1, p / 0.5));
        const y = t * 120;
        return {
          transform: `translate3d(0,${y}px,0)`,
          opacity: 1 - t * 0.85,
        };
      });
    },
    [register],
  );

  const hintRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        opacity: Math.max(0, 1 - p * 4),
      }));
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative h-[180vh] bg-background" aria-label="Hero">
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        <div ref={imgRef} className="absolute inset-0 will-change-transform" style={{ transformOrigin: "50% 38%" }}>
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
          className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none"
          aria-hidden
        />

        <div
          ref={copyRef}
          className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24 container-page will-change-transform"
        >
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            Growth studio · Tamil Nadu
          </p>
          <h1 className="h-display max-w-4xl text-cream drop-shadow-[0_4px_40px_rgba(0,0,0,0.65)]">
            ZERO FRICTION.
            <br />
            <span className="text-gold-shine">100 ON RESULTS.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-cream/70 leading-relaxed">
            Websites. Local SEO. Google Maps. Built so traffic becomes calls — not vanity metrics.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> Free audit
            </a>
            <Link to="/work" className="btn-ghost backdrop-blur-md bg-background/30">
              See the work <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>

        <div
          ref={hintRef}
          className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.3em] text-cream/45 will-change-[opacity]"
          aria-hidden
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}

function PinnedStrip() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.12 });

  const trackRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep(p);
        const x = -t * 55;
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
    <section ref={sectionRef} className="relative h-[220vh] bg-background" aria-label="Gallery">
      <div className="sticky top-0 h-[100svh] flex flex-col justify-center overflow-hidden">
        <div className="container-page mb-6 md:mb-8">
          <p className="protocol-num">Visual language</p>
          <h2 className="h-section mt-2 text-cream">Scroll the film</h2>
        </div>
        <div ref={trackRef} className="flex gap-4 md:gap-5 will-change-transform px-[5vw]">
          {shots.map((s) => (
            <figure
              key={s.label + s.src}
              className="relative shrink-0 w-[68vw] sm:w-[40vw] md:w-[26vw] aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 group"
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-[1.08]"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/85 via-black/30 to-transparent text-[0.7rem] uppercase tracking-[0.22em] text-cream/90">
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
  const { sectionRef, register } = useScrollLayers({ lerp: 0.11 });

  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(p);
        const scale = 1.28 - t * 0.32;
        const opacity = 0.4 + Math.sin(smoothstep(p) * Math.PI) * 0.5;
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
        const enter = smoothstep((p - 0.12) / 0.35);
        const exit = smoothstep((p - 0.72) / 0.28);
        const opacity = enter * (1 - exit * 0.85);
        const y = (1 - enter) * 56 + exit * -40;
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
      {cta} <ArrowUpRight size={16} aria-hidden />
    </Link>
  ) : (
    <Link to={to ?? "/services"} className="btn-accent">
      {cta} <ArrowUpRight size={16} aria-hidden />
    </Link>
  );

  return (
    <section ref={sectionRef} className="relative h-[160vh] bg-background">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div
            ref={imgRef}
            className="absolute inset-0 will-change-transform"
            style={{ transformOrigin: reverse ? "28% 50%" : "72% 50%" }}
          >
            <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <div
            className={`absolute inset-0 ${
              reverse
                ? "bg-gradient-to-l from-background via-background/75 to-background/15"
                : "bg-gradient-to-r from-background via-background/75 to-background/15"
            }`}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40"
            aria-hidden
          />
        </div>

        <div
          ref={copyRef}
          className={`relative z-10 container-page will-change-transform ${reverse ? "md:ml-auto md:text-right" : ""}`}
        >
          <p className="protocol-num mb-4">{eyebrow}</p>
          <h2 className="h-section max-w-xl text-cream md:inline-block">{title}</h2>
          <p className={`mt-5 max-w-md text-cream/65 leading-relaxed ${reverse ? "md:ml-auto" : ""}`}>
            {body}
          </p>
          <div className={`mt-8 ${reverse ? "md:flex md:justify-end" : ""}`}>{ctaEl}</div>
        </div>
      </div>
    </section>
  );
}

function ParallaxBand() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.13 });
  const aRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        transform: `translate3d(0,${(p - 0.5) * -18}%,0)`,
      }));
    },
    [register],
  );
  const bRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => ({
        transform: `translate3d(0,${(p - 0.5) * 22}%,0)`,
      }));
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative py-28 md:py-40 overflow-hidden">
      <div className="container-page grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        <div ref={aRef} className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform border border-white/10">
          <img src={IMG.neon} alt="" className="absolute inset-0 h-[130%] w-full object-cover -top-[15%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl md:text-3xl font-bold text-cream">
            Performance is the brand.
          </p>
        </div>
        <div
          ref={bRef}
          className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform border border-white/10 md:mt-20"
        >
          <img src={IMG.city} alt="" className="absolute inset-0 h-[130%] w-full object-cover -top-[15%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl md:text-3xl font-bold text-cream">
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
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container-page">
        <p className="protocol-num">Capabilities</p>
        <h2 className="h-section mt-4 max-w-2xl">Everything that moves the needle</h2>
        <div ref={ref} className="reveal mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <article
              key={it.title}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={it.img}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl font-bold text-cream">{it.title}</h3>
                <p className="mt-1 text-sm text-cream/60">{it.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="btn-ghost">
            Full services <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  const { sectionRef, register } = useScrollLayers({ lerp: 0.1 });
  const imgRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = easeOutCubic(p);
        const scale = 1.2 - t * 0.2;
        return { transform: `scale3d(${scale},${scale},1)` };
      });
    },
    [register],
  );
  const copyRef = useCallback(
    (el: HTMLDivElement | null) => {
      register(el, (p) => {
        const t = smoothstep((p - 0.2) / 0.4);
        return {
          opacity: t,
          transform: `translate3d(0,${(1 - t) * 48}px,0)`,
        };
      });
    },
    [register],
  );

  return (
    <section ref={sectionRef} className="relative h-[140vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center">
        <div ref={imgRef} className="absolute inset-0 will-change-transform">
          <img src={IMG.night} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/70" />
        </div>
        <div ref={copyRef} className="relative z-10 container-page text-center max-w-2xl will-change-transform">
          <h2 className="h-section text-cream">Ready to grow without the noise?</h2>
          <p className="mt-5 text-cream/60 leading-relaxed">
            One short call. Site, search, Maps — we tell you what to fix first.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> WhatsApp us
            </a>
            <Link to="/contact" className="btn-ghost backdrop-blur-md bg-background/30">
              Contact form <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
