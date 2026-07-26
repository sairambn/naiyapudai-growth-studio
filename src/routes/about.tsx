import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Naiyapudai · நையப்புடை" },
      { name: "description", content: "A Tamil Nadu digital studio building the sites, SEO, and marketing engines behind local SMBs and D2C brands across India." },
      { property: "og:title", content: "About — Naiyapudai" },
      { property: "og:description", content: "Why the name நையப்புடை, who we are, and who we build for." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-16 md:pt-24 pb-8">
        <div className="container-page max-w-4xl">
          <span className="eyebrow">About</span>
          <h1 className="h-display mt-4">
            We're the studio Tamil Nadu businesses{" "}
            <em className="text-terracotta not-italic">actually needed</em>.
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-page grid md:grid-cols-12 gap-12 max-w-6xl">
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              Most agencies pitching Tamil Nadu SMBs are either a Bangalore or Mumbai
              shop who's never sat across a shopfront in Coimbatore or Madurai, or a
              freelancer with a Canva template and a WhatsApp status.
            </p>
            <p>
              Naiyapudai sits in the middle: a small, senior studio that ships real
              product-grade websites, ranks them on Google Search and Maps, and runs
              the ads that turn traffic into paying customers — in English and Tamil,
              for local businesses who deserve better than either extreme.
            </p>
            <p>
              We are opinionated. We say no to bad briefs. We refuse work we can't
              measure. And we build the internet presence we'd want if we ran your
              business ourselves.
            </p>
          </div>

          <aside className="md:col-span-5">
            <div className="card-soft p-8 sticky top-24">
              <div className="font-tamil text-3xl text-primary">நையப்புடை</div>
              <p className="mt-4 text-sm text-muted-foreground">
                <em>Naiyapudai</em> — literally "to beat / to thrash" in Tamil. Colloquially,
                to <strong className="text-foreground">work something relentlessly until it delivers</strong>.
                That's the standard we hold ourselves to for every client site, every
                keyword, every campaign.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page max-w-5xl">
          <span className="eyebrow">Values</span>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { t: "Numbers over adjectives", b: "If we can't measure it, we don't sell it. Weekly reporting isn't a nice-to-have — it's the product." },
              { t: "Local first, national ready", b: "Built for Tamil Nadu, structured for pan-India. Bilingual by default." },
              { t: "Small on purpose", b: "Senior operators only. No juniors on your account. No account-manager theatre." },
            ].map((v) => (
              <div key={v.t} className="card-soft p-6">
                <h3 className="text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-page">
          <div className="card-soft p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-2xl">Want to work with us?</h2>
            <Link to="/contact" className="btn-primary">
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
