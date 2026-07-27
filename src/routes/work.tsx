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
      <section className="pt-20 md:pt-28 pb-10 grain-bg">
        <div className="container-page max-w-3xl">
          <span className="protocol-num">02 — Selected work</span>
          <h1 className="h-display mt-6">Proof over placeholders.</h1>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Our first client engagement — Total Fitness Studio, Chromepet. Website, local SEO, and
            Google Maps under one roof.
          </p>
        </div>
      </section>

      <section className="pb-28">
        <div className="container-page grid gap-6 max-w-3xl">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group card-elite overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/9] relative grain-bg bg-gradient-to-br from-surface-2 to-background">
                <div className="absolute inset-0 flex items-end p-8 md:p-10">
                  <div>
                    <div className="font-display text-5xl md:text-6xl leading-none text-cream tracking-tight">
                      {c.metric}
                    </div>
                    <div className="mt-2.5 text-muted-foreground text-sm">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full border border-cream/15 bg-cream/5 backdrop-blur grid place-items-center text-cream group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-300">
                  <ArrowUpRight size={17} />
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {c.industry}
                </div>
                <div className="mt-2.5 text-2xl font-display tracking-tight">{c.client}</div>
                <p className="mt-3.5 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {c.challenge}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
