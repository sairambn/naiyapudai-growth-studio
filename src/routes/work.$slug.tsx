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
          <Link to="/work" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2">
            <ArrowLeft size={14} /> All case studies
          </Link>
        </div>
      </section>

      <section className="pb-12">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">{c.industry}</span>
          <h1 className="h-display mt-4">{c.client}</h1>
          <p className="mt-6 text-xl md:text-2xl font-display leading-tight text-muted-foreground">
            {c.metric} <span className="text-foreground">{c.metricLabel}</span>.
          </p>
        </div>
      </section>

      <section>
        <div className="container-page">
          <div className={`aspect-[21/9] rounded-2xl bg-gradient-to-br ${c.tint} grain-bg relative overflow-hidden`}>
            <div className="absolute inset-0 grid place-items-center text-cream/30 text-sm">
              {"{{TODO: hero mockup / screenshot}}"}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-page max-w-4xl grid gap-16">
          <div>
            <span className="eyebrow">The challenge</span>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">{c.challenge}</p>
          </div>
          <div>
            <span className="eyebrow">The approach</span>
            <p className="mt-4 text-lg md:text-xl leading-relaxed">{c.approach}</p>
          </div>

          <div>
            <span className="eyebrow">The numbers</span>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {[
                { k: c.metric, v: c.metricLabel },
                { k: "Top 3", v: "Google rank for target keywords" },
                { k: "< 1.8s", v: "LCP on mobile 4G" },
              ].map((m) => (
                <div key={m.v} className="card-soft p-6">
                  <div className="font-display text-4xl text-primary">{m.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-terracotta">{"{{TODO: replace with signed-off client metrics}}"}</p>
          </div>

          <figure className="border-l-4 border-terracotta pl-6">
            <blockquote className="font-display text-2xl leading-snug">
              "The most transparent agency we've worked with. They act like partners, not vendors."
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              {"{{TODO: real client name}}"} — {c.client}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="card-soft p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
