import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Case Studies | Naiyapudai" },
      { name: "description", content: "Selected case studies: websites, SEO campaigns, and performance marketing for Tamil Nadu businesses and D2C brands." },
      { property: "og:title", content: "Work — Naiyapudai" },
      { property: "og:description", content: "Real clients. Real numbers. Real growth." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

export const CASES = [
  {
    slug: "kovai-textiles",
    client: "Kovai Textile Co.",
    industry: "D2C Handloom · Coimbatore",
    metric: "+186%",
    metricLabel: "organic traffic in 5 months",
    challenge: "A 3rd-generation handloom brand with zero direct online sales — everything came through resellers.",
    approach: "New Shopify build, bilingual product content, technical SEO overhaul, and a Meta ads engine targeting the diaspora.",
    tint: "from-primary/90 to-primary",
  },
  {
    slug: "chennai-dental",
    client: "Marina Dental Care",
    industry: "Multi-clinic · Chennai",
    metric: "3.4×",
    metricLabel: "Google Maps leads / month",
    challenge: "Four clinics competing with hundreds of listings on Google Maps and losing to less-qualified operators.",
    approach: "Full GBP overhaul, review acquisition system, local SEO landing pages per neighbourhood, and WhatsApp booking flow.",
    tint: "from-terracotta to-terracotta/70",
  },
  {
    slug: "madurai-realty",
    client: "Madurai Realty Group",
    industry: "Real estate · Tamil Nadu",
    metric: "₹12.4 Cr",
    metricLabel: "attributed pipeline in 9 months",
    challenge: "Enquiries came in via broker networks — high commission, low margin, no brand equity.",
    approach: "Brand repositioning, project microsites, Google + Meta lead-gen, and a WhatsApp-first sales pipeline for site visits.",
    tint: "from-ink to-primary",
  },
] as const;

function WorkPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">Selected work</span>
          <h1 className="h-display mt-4">
            Numbers over adjectives.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every project below is a live client with tracked results.{" "}
            <span className="text-terracotta">{"{{TODO: replace placeholder metrics with signed-off client data}}"}</span>
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {CASES.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group card-soft overflow-hidden flex flex-col"
            >
              <div className={`aspect-[16/10] bg-gradient-to-br ${c.tint} relative grain-bg`}>
                <div className="absolute inset-0 flex items-end p-8">
                  <div className="text-cream">
                    <div className="font-display text-6xl leading-none">{c.metric}</div>
                    <div className="mt-2 opacity-90">{c.metricLabel}</div>
                  </div>
                </div>
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-cream/10 backdrop-blur grid place-items-center text-cream group-hover:bg-cream group-hover:text-primary transition">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-8">
                <div className="text-xs text-muted-foreground">{c.industry}</div>
                <div className="mt-1 text-2xl">{c.client}</div>
                <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{c.challenge}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
