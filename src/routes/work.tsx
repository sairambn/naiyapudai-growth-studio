import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Case Studies | Naiyapudai" },
      {
        name: "description",
        content:
          "Selected work by Naiyapudai: Total Fitness Studio Chromepet — high-conversion website, local SEO, and Google Maps optimization for a 4.9★ gym.",
      },
      { property: "og:title", content: "Work — Naiyapudai" },
      {
        property: "og:description",
        content: "Real client. Real deliverables. Total Fitness Studio — Chromepet.",
      },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

/** Only live client work. Total Fitness Studio is Naiyapudai’s first order. */
export const CASES = [
  {
    slug: "total-fitness-studio",
    client: "Total Fitness Studio",
    industry: "Unisex gym · Chromepet / Hasthinapuram",
    metric: "4.9★",
    metricLabel: "~798 public reviews · Maps + web",
    challenge:
      "A strong local gym with excellent reviews still lost discovery and calls to competitors with weaker listings but stronger web + Maps presence.",
    approach:
      "Built a conversion-first SSR site (TanStack Start), Schema.org GymAndFitnessClub, geo meta, and deep tel/WhatsApp CTAs. Optimized Google Business Profile and local SEO signals for Chromepet, Hasthinapuram, and nearby areas.",
    results: [
      { k: "4.9★", v: "~798 reviews (public listings)" },
      { k: "SSR + Schema", v: "Local GymAndFitnessClub structured data" },
      { k: "Maps", v: "Google Business Profile + local SEO overhaul" },
      { k: "CTAs", v: "Call & WhatsApp paths on every key screen" },
    ],
    liveUrl: "https://total-fitness-studio-livid.vercel.app/",
    mapsUrl: "https://maps.app.goo.gl/M1VcPF2LMbexLFuE9",
  },
] as const;

function WorkPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-8 grain-bg">
        <div className="container-page max-w-4xl">
          <span className="protocol-num">02 — SELECTED WORK</span>
          <h1 className="h-display mt-5">Proof over placeholders.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Our first client engagement — Total Fitness Studio, Chromepet. Website, local SEO,
            and Google Maps optimization under one roof.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-6 md:grid-cols-1 max-w-3xl">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group card-elite overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] relative grain-bg bg-gradient-to-br from-surface-2 to-background">
                <div className="absolute inset-0 flex items-end p-8">
                  <div>
                    <div className="font-display text-6xl leading-none text-cream">{c.metric}</div>
                    <div className="mt-2 text-muted-foreground">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full border border-cream/20 bg-cream/5 backdrop-blur grid place-items-center text-cream group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-400">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.industry}</div>
                <div className="mt-2 text-2xl font-display">{c.client}</div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{c.challenge}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
