import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights — SEO & marketing for Tamil Nadu businesses | Naiyapudai" },
      { name: "description", content: "Practical guides on local SEO, Google Maps, website performance, and digital marketing for Tamil Nadu SMBs and D2C brands." },
      { property: "og:title", content: "Insights — Naiyapudai" },
      { property: "og:description", content: "Local SEO, website performance, and marketing playbooks for Indian SMBs." },
      { property: "og:url", content: "https://naiyapudai.vercel.app/blog" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://naiyapudai.vercel.app/blog" }],
  }),
  component: BlogIndex,
});

const posts = [
  {
    slug: "local-seo-tamil-nadu",
    title: "The Local SEO checklist for Tamil Nadu businesses in 2026",
    excerpt: "The 27 things every Coimbatore, Chennai, Madurai and Tirupur business should have set up on Google before spending a rupee on ads.",
    tag: "SEO",
  },
  {
    slug: "website-cost-india",
    title: "How much does a website actually cost in India in 2026?",
    excerpt: "A transparent breakdown of what's fair for a small-business site, a D2C brand, and a serious growth engine — with real numbers.",
    tag: "Web",
  },
  {
    slug: "google-maps-more-leads",
    title: "Google Maps: the highest-ROI channel most Indian businesses ignore",
    excerpt: "Why Maps is a bigger lever than Instagram for most local businesses — and the exact playbook to rank in the top 3.",
    tag: "Local SEO",
  },
  {
    slug: "meta-ads-tamil-nadu",
    title: "Meta ads that actually convert Tamil Nadu customers",
    excerpt: "Creative, targeting, and landing-page patterns we've tested across 40+ Tamil Nadu clients — what works, what doesn't.",
    tag: "Ads",
  },
  {
    slug: "core-web-vitals-shopify",
    title: "Making Shopify fast: a Core Web Vitals playbook for Indian D2C",
    excerpt: "The theme tweaks, app audits, and image strategies that move Shopify LCP from 4s+ to under 1.8s on 4G.",
    tag: "Web",
  },
];

function BlogIndex() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-8 grain-bg">
        <div className="container-page max-w-4xl">
          <span className="protocol-num">INSIGHTS</span>
          <h1 className="h-display mt-5">Playbooks, not think-pieces.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Practical guides on SEO, Google Maps, web performance, and paid marketing —
            written for Tamil Nadu and Indian business owners who want to understand what
            they're paying for.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article key={p.slug} className="card-elite p-8 flex flex-col group">
              <div className="protocol-num">{p.tag}</div>
              <h2 className="mt-4 font-display text-2xl md:text-3xl leading-tight">{p.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.excerpt}</p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm text-gold hover:gap-2.5 transition-all"
                aria-label={`${p.title} — coming soon, talk to us`}
              >
                Coming soon — talk to us <ArrowUpRight size={14} aria-hidden />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
