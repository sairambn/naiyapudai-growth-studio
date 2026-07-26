import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { CASES } from "./work";
import { WhatsAppIcon } from "../components/site-nav";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = CASES.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Case study not found — Naiyapudai" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData;
    const title = `${c.client} — ${c.metric} ${c.metricLabel} | Naiyapudai`;
    return {
      meta: [
        { title },
        { name: "description", content: `${c.client}: ${c.challenge}` },
        { property: "og:title", content: title },
        { property: "og:description", content: `${c.metric} ${c.metricLabel}. How Naiyapudai delivered it.` },
        { property: "og:url", content: `/work/${c.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/work/${c.slug}` }],
    };
  },
  component: CaseStudy,
});

function CaseStudy() {
  const c = Route.useLoaderData();
  return (
    <>
      <section className="pt-12 pb-8">
        <div className="container-page">
          <Link to="/work" className="text-sm text-muted-foreground hover:text-cream inline-flex items-center gap-2 transition-colors">
            <ArrowLeft size={14} /> All case studies
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page max-w-4xl">
          <span className="protocol-num">{c.industry}</span>
          <h1 className="h-display mt-5">{c.client}</h1>
          <p className="mt-6 text-xl md:text-2xl font-display leading-tight text-muted-foreground">
            {c.metric} <span className="text-cream">{c.metricLabel}</span>.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page">
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-surface-2 to-background grain-bg relative overflow-hidden border border-border">
            <div className="absolute inset-0 grid place-items-center text-muted-foreground text-sm">
              Case study visual
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page max-w-4xl grid gap-16">
          <div>
            <span className="protocol-num">THE CHALLENGE</span>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-cream/90">{c.challenge}</p>
          </div>
          <div>
            <span className="protocol-num">THE APPROACH</span>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-cream/90">{c.approach}</p>
          </div>

          <div>
            <span className="protocol-num">THE NUMBERS</span>
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { k: c.metric, v: c.metricLabel },
                { k: "Top 3", v: "Google rank for target keywords" },
                { k: "< 1.8s", v: "LCP on mobile 4G" },
              ].map((m) => (
                <div key={m.v} className="card-elite p-6">
                  <div className="font-display text-4xl text-gold">{m.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <figure className="border-l-2 border-gold pl-6">
            <blockquote className="font-display text-2xl leading-snug text-cream">
              "The most transparent agency we've worked with. They act like partners, not vendors."
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Client — {c.client}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="card-elite p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="h-section">Want a story like this?</h2>
              <p className="mt-3 text-muted-foreground">Start with a free 30-minute audit on WhatsApp.</p>
            </div>
            <a href="https://wa.me/919999999999" className="btn-accent">
              <WhatsAppIcon /> Start on WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
