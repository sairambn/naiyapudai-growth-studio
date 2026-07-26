import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { WhatsAppIcon } from "../components/site-nav";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Start a project | Naiyapudai" },
      { name: "description", content: "Book a free 30-minute growth audit on WhatsApp, or send us a brief. We reply within 4 working hours." },
      { property: "og:title", content: "Contact Naiyapudai" },
      { property: "og:description", content: "WhatsApp us or send a brief. Free 30-minute growth audit." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  business: z.string().trim().min(1, "What's your business?").max(120),
  phone: z.string().trim().min(6, "Include a WhatsApp / phone number").max(30),
  email: z.string().trim().email("Enter a valid email").max(160),
  budget: z.string(),
  message: z.string().trim().min(10, "A sentence or two helps").max(1500),
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  return (
    <>
      <section className="pt-16 md:pt-24 pb-8 grain-bg">
        <div className="container-page max-w-4xl">
          <span className="protocol-num">05 — INITIATE</span>
          <h1 className="h-display mt-5">Let's talk.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Fastest path: WhatsApp us. Or send the form below and we'll reply within
            4 working hours (usually much sooner).
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/917603976686?text=Hi%20Naiyapudai%2C%20I'd%20like%20a%20free%20growth%20audit."
              className="btn-accent"
            >
              <WhatsAppIcon /> WhatsApp: +91 76039 76686
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-page grid md:grid-cols-12 gap-12 max-w-6xl">
          <div className="md:col-span-7">
            <form
              className="card-elite p-8 md:p-10 grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                const fd = new FormData(e.currentTarget);
                const data = Object.fromEntries(fd.entries());
                const parsed = schema.safeParse(data);
                if (!parsed.success) {
                  const errs: Record<string, string> = {};
                  for (const iss of parsed.error.issues) errs[iss.path[0] as string] = iss.message;
                  setErrors(errs);
                  return;
                }
                setErrors({});
                console.log("contact submission", parsed.data);
                setStatus("sent");
              }}
            >
              <Field label="Your name" name="name" error={errors.name} />
              <Field label="Business name" name="business" error={errors.business} />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="WhatsApp / phone" name="phone" type="tel" error={errors.phone} />
                <Field label="Email" name="email" type="email" error={errors.email} />
              </div>
              <div>
                <label className="text-sm block mb-2 text-muted-foreground" htmlFor="budget">Budget range</label>
                <select
                  id="budget"
                  name="budget"
                  defaultValue="₹50k – ₹1L / month"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-cream"
                >
                  <option>Under ₹50k / month</option>
                  <option>₹50k – ₹1L / month</option>
                  <option>₹1L – ₹3L / month</option>
                  <option>₹3L+ / month</option>
                  <option>One-time website project</option>
                </select>
              </div>
              <div>
                <label className="text-sm block mb-2 text-muted-foreground" htmlFor="message">What are you trying to solve?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-cream"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-err" : undefined}
                />
                {errors.message && <p id="message-err" className="mt-1 text-xs text-destructive">{errors.message}</p>}
              </div>
              <button type="submit" className="btn-primary justify-center">
                Send message
              </button>
              {status === "sent" && (
                <p className="text-sm text-gold">
                  Got it — we'll be in touch within 4 working hours. For faster response, WhatsApp us.
                </p>
              )}
              <p className="text-xs text-muted-foreground">
                By sending this you agree to be contacted about your enquiry. We never share your details.
              </p>
            </form>
          </div>

          <aside className="md:col-span-5 space-y-6">
            <div className="card-elite p-6">
              <h3 className="text-lg font-display">Reach us directly</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li><a className="hover:text-cream transition-colors" href="https://wa.me/917603976686">WhatsApp: +91 76039 76686</a></li>
                <li><a className="hover:text-cream transition-colors" href="mailto:contactnayyapudai@gmail.com">contactnayyapudai@gmail.com</a></li>
                <li>Tamil Nadu, India</li>
              </ul>
            </div>
            <div className="card-elite p-6">
              <h3 className="text-lg font-display">Response time</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We reply within 4 working hours, Mon–Sat, 9am–7pm IST. WhatsApp is fastest.
              </p>
            </div>
            <div className="card-elite p-6">
              <h3 className="text-lg font-tamil text-gold">தமிழில் பேசலாம்</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Prefer Tamil? Message us in Tamil — the whole team is fluent.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) {
  const id = `f-${name}`;
  return (
    <div>
      <label className="text-sm block mb-2 text-muted-foreground" htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        className="w-full px-4 py-3 rounded-lg border border-border bg-surface text-cream"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
      />
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
