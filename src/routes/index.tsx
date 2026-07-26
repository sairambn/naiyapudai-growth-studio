import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useReveal } from "../lib/use-reveal";
import { useScrollProgress } from "../lib/use-scroll-progress";
import { WhatsAppIcon } from "../components/site-nav";

/* High-res Unsplash — dark, cinematic, no stock-cliché smiles */
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
      <ImageStrip />
      <ZoomChapter
        image={IMG.gym}
        eyebrow="01 — Live work"
        title="Total Fitness Studio"
        body="Chromepet gym. 4.9★ · ~798 reviews. Conversion site + Schema + Maps — our first client, shipped end to end."
        href="/work/total-fitness-studio"
        cta="Open case study"
      />
      <ZoomChapter
        image={IMG.code}
        eyebrow="02 — Build"
        title="Sites that load like products"
        body="React 19 · TanStack Start · Tailwind v4 · Nitro. SSR, typed routes, Core Web Vitals — not templates."
        href="/services"
        cta="See services"
        reverse
      />
      <ZoomChapter
        image={IMG.maps}
        eyebrow="03 — Rank"
        title="Maps + Schema that convert"
        body="Google finds you. The page closes the call. Local SEO wired to the same source of truth as the site."
        href="/services"
        cta="How we rank"
      />
      <ParallaxBand />
      <ServicesGrid />
      <FinalCta />
    </>
  );
}

/* ─── HERO: full-bleed image that ZOOM-OUT on scroll ─── */
function CinematicHero() {
  const [ref, progress] = useScrollProgress<HTMLElement>({ offsetStart: 0, offsetEnd: 0.45 });
  // start zoomed in (1.35), ease out to 1.0 as user scrolls
  const scale = 1.35 - progress * 0.35;
  const opacity = 1 - progress * 0.55;
  const textY = progress * 80;
  const vignette = 0.35 + progress * 0.35;

  return (
    <section
      ref={ref}
      className="relative h-[165vh] bg-background"
      aria-label="Hero"
    >
      <div className="sticky top-0 h-[100svh] overflow-hidden">
        {/* Image layer — GPU transform */}
        <div
          className="absolute inset-0 will-change-transform"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: "50% 40%",
          }}
        >
          <img
            src={IMG.hero}
            alt=""
            className="h-full w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-background"
            style={{ opacity: vignette }}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent"
            aria-hidden
          />
        </div>

        {/* Copy */}
        <div
          className="relative z-10 flex h-full flex-col justify-end pb-16 md:pb-24 container-page will-change-transform"
          style={{
            opacity,
            transform: `translate3d(0, ${textY}px, 0)`,
          }}
        >
          <p className="mb-5 inline-flex w-fit items-center rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            Growth studio · Tamil Nadu
          </p>
          <h1 className="h-display max-w-4xl text-cream drop-shadow-[0_4px_40px_rgba(0,0,0,0.6)]">
            ZERO FRICTION.
            <br />
            <span className="text-gold-shine">100 ON RESULTS.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base md:text-lg text-cream/70 leading-relaxed">
            Websites. Local SEO. Google Maps. Built so traffic becomes calls —
            not vanity metrics.
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

        {/* Scroll hint */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-cream/40"
          style={{ opacity: Math.max(0, 1 - progress * 3) }}
          aria-hidden
        >
          <span>Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-gold/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

/* ─── Horizontal image strip that drifts opposite to scroll ─── */
function ImageStrip() {
  const [ref, progress] = useScrollProgress<HTMLElement>();
  const x = -progress * 30; // %

  const shots = [
    { src: IMG.neon, label: "Systems" },
    { src: IMG.desk, label: "Craft" },
    { src: IMG.phone, label: "Mobile-first" },
    { src: IMG.city, label: "Local" },
    { src: IMG.abstract, label: "Signal" },
    { src: IMG.night, label: "After dark" },
  ];

  return (
    <section ref={ref} className="relative py-8 md:py-12 overflow-hidden border-y border-border bg-background" aria-label="Visual strip">
      <div
        className="flex gap-3 md:gap-5 will-change-transform px-4"
        style={{ transform: `translate3d(${x}%, 0, 0)` }}
      >
        {shots.map((s) => (
          <figure
            key={s.label}
            className="relative shrink-0 w-[70vw] sm:w-[42vw] md:w-[28vw] aspect-[4/5] overflow-hidden rounded-2xl group"
          >
            <img
              src={s.src}
              alt={s.label}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-xs uppercase tracking-widest text-cream/90">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

/* ─── Zoom chapter: image scales OUT as section scrolls through ─── */
function ZoomChapter({
  image,
  eyebrow,
  title,
  body,
  href,
  cta,
  reverse,
}: {
  image: string;
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  reverse?: boolean;
}) {
  const [ref, progress] = useScrollProgress<HTMLElement>({ offsetStart: 0.1, offsetEnd: 0.75 });
  // cross into zoomed (1.2) → settle (1.0) → slight drift
  const scale = 1.22 - progress * 0.28;
  const imgOpacity = 0.55 + Math.sin(progress * Math.PI) * 0.35;
  const textOpacity = Math.min(1, Math.max(0, (progress - 0.15) * 2.2));
  const textY = (1 - textOpacity) * 40;

  return (
    <section ref={ref} className="relative h-[140vh] bg-background">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: `scale(${scale})`,
              opacity: imgOpacity,
              transformOrigin: reverse ? "30% 50%" : "70% 50%",
            }}
          >
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" aria-hidden />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50" aria-hidden />
        </div>

        <div
          className={`relative z-10 container-page will-change-transform ${reverse ? "md:ml-auto md:text-right" : ""}`}
          style={{
            opacity: textOpacity,
            transform: `translate3d(0, ${textY}px, 0)`,
          }}
        >
          <p className="protocol-num mb-4">{eyebrow}</p>
          <h2 className="h-section max-w-xl text-cream md:inline-block">{title}</h2>
          <p className={`mt-5 max-w-md text-cream/65 leading-relaxed ${reverse ? "md:ml-auto" : ""}`}>
            {body}
          </p>
          <div className={`mt-8 ${reverse ? "md:flex md:justify-end" : ""}`}>
            <Link
              to={href.startsWith("/work/") ? "/work/$slug" : (href as "/services" | "/work")}
              params={href.startsWith("/work/") ? { slug: "total-fitness-studio" } : undefined}
              className="btn-accent"
            >
              {cta} <ArrowUpRight size={16} aria-hidden />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Tall parallax band with dual images ─── */
function ParallaxBand() {
  const [ref, progress] = useScrollProgress<HTMLElement>();
  const yA = progress * -12;
  const yB = progress * 18;

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-page grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform" style={{ transform: `translate3d(0, ${yA}%, 0)` }}>
          <img src={IMG.neon} alt="" className="absolute inset-0 h-[120%] w-full object-cover -top-[10%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl md:text-3xl font-bold text-cream">
            Performance is the brand.
          </p>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl will-change-transform md:mt-16" style={{ transform: `translate3d(0, ${yB}%, 0)` }}>
          <img src={IMG.city} alt="" className="absolute inset-0 h-[120%] w-full object-cover -top-[10%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <p className="absolute bottom-6 left-6 right-6 font-display text-2xl md:text-3xl font-bold text-cream">
            Built for Tamil Nadu search.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Service cards with image backs ─── */
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
  const [ref, progress] = useScrollProgress<HTMLElement>({ offsetStart: 0.2, offsetEnd: 0.9 });
  const scale = 1.15 - progress * 0.15;

  return (
    <section ref={ref} className="relative h-[120vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 will-change-transform"
          style={{ transform: `scale(${scale})` }}
        >
          <img src={IMG.night} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative z-10 container-page text-center max-w-2xl">
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
