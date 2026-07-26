import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Development, SEO, Ads & Branding | Naiyapudai" },
      { name: "description", content: "Web design & development, SEO, Google Maps, performance marketing, and branding for Tamil Nadu and India-based businesses." },
      { property: "og:title", content: "Services — Naiyapudai" },
      { property: "og:description", content: "The build+SEO+growth trifecta, from one Tamil Nadu studio." },
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
      <section className="pt-16 md:pt-24 pb-12">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">Services</span>
          <h1 className="h-display mt-4">
            One studio. The whole <em className="text-terracotta not-italic">growth stack</em>.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Most agencies do one thing. We do the four things that move the needle for
            Tamil Nadu SMBs and D2C brands: the website, the search rankings, the ads,
            and the brand — all under one roof, one team, one point of accountability.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6">
          {services.map((s, i) => (
            <article key={s.title} className="card-soft p-8 md:p-12 grid md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <div className="font-display text-4xl text-terracotta">{String(i + 1).padStart(2, "0")}</div>
                <h2 className="mt-3 text-2xl md:text-3xl">{s.title}</h2>
                <p className="mt-2 font-tamil text-muted-foreground">{s.tamil}</p>
              </div>
              <div className="md:col-span-8">
                <p className="text-lg">{s.lead}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="mt-0.5 text-primary shrink-0" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="container-page">
          <div className="card-soft p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl">Not sure where to start?</h2>
              <p className="mt-2 text-muted-foreground">Book a free 30-minute audit and we'll tell you exactly what to fix first.</p>
            </div>
            <Link to="/contact" className="btn-primary">
              Book a call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
