import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — How we work | Naiyapudai" },
      { name: "description", content: "Discover, Design, Build & Launch, Grow. A transparent process built for accountability, not surprises." },
      { property: "og:title", content: "Process — Naiyapudai" },
      { property: "og:description", content: "How Naiyapudai engagements run — timelines, deliverables, pricing philosophy." },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const phases = [
  { n: "01", title: "Discover", weeks: "Week 1–2", body: "Stakeholder interviews, competitor and keyword research, analytics deep-dive, and a written strategy doc you sign off on." },
  { n: "02", title: "Design", weeks: "Week 2–5", body: "Positioning, IA, wireframes, and full visual design system. Two rounds of revisions. Nothing goes to build without your sign-off." },
  { n: "03", title: "Build & Launch", weeks: "Week 4–10", body: "Development, technical SEO, analytics, and pre-launch QA. We launch on a Tuesday, monitor for 72 hours, and hand over docs your team can actually use." },
  { n: "04", title: "Grow", weeks: "Ongoing", body: "SEO, ads, and content retainer. Weekly numbers in your inbox, monthly review calls, quarterly strategy resets. Cancel any time with 30 days' notice." },
];

function ProcessPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">Process</span>
          <h1 className="h-display mt-4">Transparent by design.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Every Naiyapudai engagement runs through the same four phases. You know what
            you're getting, when you're getting it, and what it costs — before you sign.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-6">
          {phases.map((p) => (
            <div key={p.n} className="card-soft p-8 md:p-12 grid md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-3">
                <div className="font-display text-5xl text-terracotta">{p.n}</div>
                <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{p.weeks}</div>
              </div>
              <div className="md:col-span-9">
                <h2 className="text-2xl md:text-3xl">{p.title}</h2>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">Pricing philosophy</span>
          <h2 className="h-section mt-4">Custom quotes, transparent structure.</h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Websites are one-time project fees based on scope. SEO, ads, and content are
            monthly retainers with a clear scope of deliverables. No lock-ins beyond 90
            days, no hidden add-ons, no surprise invoices. We share ballpark ranges on
            the first call so you know if we're in your zone before you spend an hour.
          </p>
          <Link to="/contact" className="btn-primary mt-8">
            Get a quote <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
