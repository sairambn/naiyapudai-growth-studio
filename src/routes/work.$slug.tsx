import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ExternalLink, MapPin } from "lucide-react";
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
      return {
        meta: [
          { title: "Case study not found — Naiyapudai" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const c = loaderData;
    const title = `${c.client} — Website, Local SEO & Google Maps | Naiyapudai`;
    return {
      meta: [
        { title },
        { name: "description", content: `${c.client}: ${c.challenge}` },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `${c.metric} ${c.metricLabel}. How Naiyapudai delivered website + SEO + Maps.`,
        },
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
          <Link
            to="/work"
            className="text-sm text-muted-foreground hover:text-cream inline-flex items-center gap-2 transition-colors"
          >
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
          <div className="mt-8 flex flex-wrap gap-3">
            {"liveUrl" in c && c.liveUrl && (
              <a href={c.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Live website <ExternalLink size={14} />
              </a>
            )}
            {"mapsUrl" in c && c.mapsUrl && (
              <a href={c.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <MapPin size={14} /> Google Maps
              </a>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container-page">
          <div className="aspect-[21/9] rounded-2xl bg-gradient-to-br from-surface-2 to-background grain-bg relative overflow-hidden border border-border">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground text-sm p-6 text-center">
              <span className="font-display text-3xl text-cream/80">Total Fitness Studio</span>
              <span>Chromepet · Hasthinapuram · Conversion site + local SEO + Maps</span>
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
            <span className="protocol-num">WHAT WE SHIPPED</span>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {("results" in c && c.results ? c.results : []).map((m) => (
                <div key={m.v} className="card-elite p-6">
                  <div className="font-display text-3xl text-gold">{m.k}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{m.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="protocol-num">SEO & MAPS FOCUS</span>
            <ul className="mt-5 space-y-3 text-lg text-cream/90 leading-relaxed">
              <li>Schema.org <code className="text-gold text-base">GymAndFitnessClub</code> + geo coordinates</li>
              <li>Local keywords: Chromepet, Hasthinapuram, Chitlapakkam, unisex gym</li>
              <li>Google Business Profile alignment (address, hours, categories, Maps link)</li>
              <li>Mobile-first CTAs: <code className="text-gold text-base">tel:</code> and WhatsApp deep links</li>
              <li>Core Web Vitals–oriented SSR stack (TanStack Start + Nitro on Vercel)</li>
            </ul>
          </div>

          <figure className="border-l-2 border-gold pl-6">
            <blockquote className="font-display text-2xl leading-snug text-cream">
              "First client engagement for Naiyapudai — website, local SEO, and Google Maps under one
              roof so the gym can convert searchers into calls and trials."
            </blockquote>
            <figcaption className="mt-4 text-sm text-muted-foreground">
              Naiyapudai · Total Fitness Studio engagement
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="card-elite p-10 md:p-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="h-section">Want the same for your business?</h2>
              <p className="mt-3 text-muted-foreground">
                Free 30-minute audit — site, Search, and Maps.
              </p>
            </div>
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> Start on WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
