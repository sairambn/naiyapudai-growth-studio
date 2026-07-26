# Naiyapudai · நையப்புடை — Growth Studio

**Websites that rank. Marketing that pays for itself.**

Naiyapudai is a Tamil Nadu digital growth studio that builds beautiful, high-performance websites, ranks them on Google Search & Maps, and runs the paid + social work that turns traffic into paying customers — for local SMBs and D2C brands across India.

> **Current status (July 2026):** Source is complete and ready to run locally. Production Vercel deployment needs a fresh import / redeploy (previous production URL returned 404). Follow the deploy steps below to get a live demo URL.

## Tech stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + file-based routing + SSR)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + custom design system
- **UI primitives**: Radix UI + shadcn-style components
- **Build tool**: Vite 8
- **Deploy**: Nitro + Vercel (`framework: tanstack-start`)

## Getting started

### Prerequisites

- Node.js 20+ (or Bun 1.1+)
- Git

### Install & run

```bash
git clone https://github.com/sairambn/naiyapudai-growth-studio.git
cd naiyapudai-growth-studio
npm install          # or: bun install
npm run dev          # http://localhost:3000
```

### Scripts

| Command            | Description                          |
|--------------------|--------------------------------------|
| `npm run dev`      | Start development server             |
| `npm run build`    | Production build                     |
| `npm run preview`  | Preview production build locally     |
| `npm run lint`     | Run ESLint                           |
| `npm run format`   | Format with Prettier                 |

## Project structure

```
src/
├── components/          # Shared UI (nav, footer, WhatsApp FAB, shadcn components)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities, error handling, reveal animations
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout + SEO shell
│   ├── index.tsx        # Home
│   ├── about.tsx
│   ├── services.tsx
│   ├── work.tsx
│   ├── work.$slug.tsx   # Case study detail
│   ├── process.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   └── sitemap[.]xml.ts
├── styles.css           # Global design tokens & Tailwind
├── server.ts            # Custom SSR entry with error page fallback
└── start.ts             # TanStack Start middleware (CSRF + error handling)
```

## Features

- Fully bilingual-ready (English + Tamil typography)
- Strong SEO foundation (JSON-LD, meta, sitemap, canonicals)
- Accessibility: skip link, focus management, semantic HTML
- Mobile-first responsive design with polished motion
- WhatsApp CTA integration throughout
- Production-grade error boundaries and SSR error pages

## Deploy to Vercel (get a live demo)

1. Open [vercel.com/new](https://vercel.com/new)
2. Import **`sairambn/naiyapudai-growth-studio`**
3. Confirm **Framework Preset = TanStack Start** (set via `vercel.json`)
4. Click **Deploy**

One-click: [Import on Vercel](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/naiyapudai-growth-studio)

Local production check:

```bash
npm run build && npm run preview
```

## License

Private — All rights reserved © Naiyapudai
