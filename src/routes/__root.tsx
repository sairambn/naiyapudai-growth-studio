import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";
import { WhatsAppFab } from "../components/whatsapp-fab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="h-display text-gold">404</h1>
        <h2 className="mt-4 text-xl text-cream">This page has gone quiet.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The link is broken or the page has moved. Let's get you back on track.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Return home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl text-cream">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try again or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="btn-primary"
          >
            Try again
          </button>
          <a href="/" className="btn-ghost">Go home</a>
        </div>
      </div>
    </div>
  );
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Naiyapudai",
  "alternateName": "நையப்புடை",
  "description": "Digital marketing, SEO, Google Maps optimisation and web development studio serving Tamil Nadu and India.",
  "url": "https://naiyapudai.vercel.app/",
  "areaServed": ["Tamil Nadu", "India"],
  "address": { "@type": "PostalAddress", "addressRegion": "Tamil Nadu", "addressCountry": "IN" },
  "sameAs": [] as string[],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0a0a0a" },
      { name: "author", content: "Naiyapudai" },
      { property: "og:site_name", content: "Naiyapudai · நையப்புடை" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&family=Syne:wght@600;700;800&family=JetBrains+Mono:wght@400;500&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(orgJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-gold focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <SiteNav />
        <main id="main" className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
