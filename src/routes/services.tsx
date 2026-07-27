import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development, SEO, Ads & Branding | Naiyapudai" },
      {
        name: "description",
        content:
          "Web design & development, SEO, Google Maps, performance marketing, and branding for Tamil Nadu and India-based businesses.",
      },
      { property: "og:title", content: "Services — Naiyapudai" },
      {
        property: "og:description",
        content: "The build+SEO+growth trifecta, from one Tamil Nadu studio.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Web Design & Development",
    tamil: "வலைத்தள வடிவமைப்பு & மேம்பாடு",
    lead: "Fast, beautiful, SEO-clean websites your team can actually run.",
    deliverables: [
      "Discovery, IA, wireframes, design system",
      "Next.js / Shopify / WordPress build",
      "Core Web Vitals 90+ (LCP < 1.8s)",
      "Analytics, SEO, and search-console setup",
      "Training + 30 days post-launch support",
    ],
  },
  {
    title: "SEO & Google Maps",
    tamil: "SEO & Google Maps",
    lead: "Rank for the searches your customers actually type — in English and Tamil.",
    deliverables: [
      "Technical SEO audit and fixes",
      "Google Business Profile / Maps optimisation",
      "Local citation cleanup",
      "Bilingual content strategy (EN + தமிழ்)",
      "Monthly ranking + traffic reporting",
    ],
  },
  {
    title: "Performance Marketing",
    tamil: "செயல்திறன் சந்தைப்படுத்தல்",
    lead: "Meta + Google ads run against a single metric: profitable CAC.",
    deliverables: [
      "Full-funnel Meta + Google Ads",
      "Conversion-optimised landing pages",
      "Creative rotation (static + video)",
      "Attribution + weekly reporting",
      "WhatsApp lead-flow integration",
    ],
  },
  {
    title: "Branding & Social",
    tamil: "பிராண்டிங் & சமூக ஊடகங்கள்",
    lead: "Reposition, redesign identity, and stay top-of-mind with always-on content.",
    deliverables: [
      "Brand strategy & repositioning",
      "Identity system (logo, type, colour, voice)",
      "Instagram & YouTube Shorts engine",
      "Photography / videography direction",
      "Monthly content calendar",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-14 grain-bg">
        <div className="container-page max-w-3xl">
          <span className="protocol-num">01 — Capabilities</span>
          <h1 className="h-display mt-6">
            One studio.
            <br />
            The whole <span className="text-gold-shine">growth stack</span>.
          </h1>
          <p className="mt-7 text-lg text-muted-foreground leading-relaxed max-w-xl">
            Most agencies do one thing. We do the four that move the needle for Tamil Nadu SMBs and
            D2C brands — under one roof, one team, one point of accountability.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container-page grid gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="card-elite p-8 md:p-12 grid md:grid-cols-12 gap-8 md:gap-10"
            >
              <div className="md:col-span-4">
                <div className="protocol-num text-xl opacity-80">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="mt-4 text-2xl md:text-[1.75rem] font-display tracking-tight">
                  {s.title}
                </h2>
                <p className="mt-2 font-tamil text-sm text-muted-foreground">{s.tamil}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg text-cream/90 leading-snug">{s.lead}</p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-3.5">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground leading-snug"
                    >
                      <Check size={15} className="mt-0.5 text-gold shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="card-elite p-10 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="h-feature">Not sure where to start?</h2>
              <p className="mt-3 text-muted-foreground max-w-md">
                Book a free 30-minute audit. We’ll tell you exactly what to fix first.
              </p>
            </div>
            <Link to="/contact" className="btn-primary shrink-0">
              Book a call <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
