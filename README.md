# Naiyapudai

**நையப்புடை** — Digital growth studio for Tamil Nadu.

We design and develop high-performance websites, rank them on Google Search and Maps, and run performance marketing that converts traffic into customers for SMBs and D2C brands.

---

## Overview

| Capability | Focus |
|------------|--------|
| Web design & development | Fast, SEO-ready sites with strong Core Web Vitals |
| SEO & Google Maps | Technical SEO, local ranking, bilingual content |
| Performance marketing | Meta and Google Ads with clear CAC accountability |
| Branding & social | Identity systems and always-on short-form content |

The site is bilingual-ready (English + Tamil), mobile-first, and built with production-grade SEO, accessibility, and error handling.

---

## Tech stack

| Layer | Technology |
|-------|------------|
| Framework | [TanStack Start](https://tanstack.com/start) (React, file-based routing, SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 with custom design tokens |
| Components | Radix UI (shadcn-style) |
| Build | Vite 8 |
| Runtime / Deploy | Nitro · Vercel |

---

## Getting started

```bash
git clone https://github.com/sairambn/naiyapudai-growth-studio.git
cd naiyapudai-growth-studio
npm install
npm run dev
```

The development server runs at `http://localhost:3000`.

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |
| `npm run format` | Format with Prettier |

Bun is also supported (`bun install` / `bun run dev`).

---

## Project structure

```text
src/
├── components/          # Navigation, footer, WhatsApp FAB, UI primitives
├── hooks/               # Shared React hooks
├── lib/                 # Utilities, error handling, reveal animations
├── routes/              # File-based routes (TanStack Router)
│   ├── __root.tsx       # Root layout and SEO shell
│   ├── index.tsx        # Home
│   ├── about.tsx
│   ├── services.tsx
│   ├── work.tsx
│   ├── work.$slug.tsx   # Case study detail
│   ├── process.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   └── sitemap[.]xml.ts
├── styles.css           # Design tokens and global styles
├── server.ts            # SSR entry
└── start.ts             # Application middleware
```

---

## Design system

The interface uses a dark elite palette with a refined gold accent scale:

- **Background** — deep near-black  
- **Accent** — gold / champagne / antique gold  
- **Typography** — Instrument Serif (display), Inter (body), Noto Sans Tamil  

Core utilities are defined in `src/styles.css` (`btn-accent`, `card-elite`, `text-gold-shine`, `protocol-num`, and related tokens).

---

## Routes

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/services` | Services |
| `/work` | Case studies |
| `/work/$slug` | Case study detail |
| `/process` | Methodology |
| `/about` | About the studio |
| `/blog` | Insights |
| `/contact` | Contact |

---

## Deployment

### Vercel (recommended)

1. Import the repository at [vercel.com/new](https://vercel.com/new)  
2. Framework preset: **TanStack Start** (configured in `vercel.json`)  
3. Deploy  

One-click clone:  
[https://vercel.com/new/clone?repository-url=https://github.com/sairambn/naiyapudai-growth-studio](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/naiyapudai-growth-studio)

### Local production check

```bash
npm run build && npm run preview
```

---

## Quality & accessibility

- SEO: JSON-LD, meta tags, sitemap, canonical URLs  
- Accessibility: skip link, focus management, semantic markup  
- Error handling: production boundaries and SSR fallback pages  
- Motion: reduced-motion support  

---

## License

Private. All rights reserved © Naiyapudai.

Maintained by [@sairambn](https://github.com/sairambn).
