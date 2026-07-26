<div align="center">

# Naiyapudai Growth Studio

**நையப்புடை** — Digital growth studio for Tamil Nadu

[![Live Demo](https://img.shields.io/badge/Live_Demo-naiyapudai.vercel.app-black?style=for-the-badge&logo=vercel)](https://naiyapudai.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?style=flat-square)](https://tanstack.com/start)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square)](LICENSE)

**Live** → [naiyapudai.vercel.app](https://naiyapudai.vercel.app/)  
**First client** → [Total Fitness Studio](https://github.com/sairambn/TotalFitnessStudio)

</div>

---

## What Naiyapudai does

We design and develop high-performance websites, rank them on Google Search and Maps, and run performance marketing that converts traffic into customers for SMBs and local brands.

| Capability | Focus |
|------------|--------|
| **Web design & development** | Fast, SEO-ready sites with strong Core Web Vitals |
| **SEO & Google Maps** | Technical SEO, GBP / local ranking, Schema.org |
| **Performance marketing** | Meta and Google Ads with clear CAC accountability |
| **Branding & social** | Identity systems and short-form content |

The site is bilingual-ready (English + Tamil), mobile-first, and built with production-grade SEO, accessibility, and error handling.

> **Company property of Naiyapudai** (Sairam BN). Not open source.

---

## Featured client

### Total Fitness Studio — Unisex gym, Chromepet / Hasthinapuram

**Deliverables:** SSR marketing site · Schema.org `GymAndFitnessClub` · geo meta · tel/WhatsApp CTAs · Google Business Profile & Maps alignment

| | |
|---|---|
| **Live site** | https://total-fitness-studio-livid.vercel.app/ |
| **Maps** | https://maps.app.goo.gl/M1VcPF2LMbexLFuE9 |
| **Case study** | [/work/total-fitness-studio](https://naiyapudai.vercel.app/work/total-fitness-studio) |
| **Source** | [github.com/sairambn/TotalFitnessStudio](https://github.com/sairambn/TotalFitnessStudio) |

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
bun install          # or: npm install
bun run dev          # http://localhost:3000
```

| Script | Description |
|--------|-------------|
| `bun run dev` | Start development server |
| `bun run build` | Create production build |
| `bun run preview` | Preview production build locally |
| `bun run start` | Run production server |
| `bun run lint` | Run ESLint |
| `bun run format` | Format with Prettier |
| `bun run typecheck` | TypeScript check |

> Requires [Bun](https://bun.sh) or Node 20+.

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
│   ├── work.tsx         # Case studies (Total Fitness)
│   ├── work.$slug.tsx
│   ├── process.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   └── sitemap[.]xml.ts
├── styles.css
├── server.ts
└── start.ts
```

---

## Deployment

### Vercel (recommended)

1. Import at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **TanStack Start** (`vercel.json`)
3. Deploy

**Live:** https://naiyapudai.vercel.app/

---

## Quality & SEO

- JSON-LD, meta tags, sitemap, canonical URLs
- Accessibility: skip link, focus management, semantic markup
- Error handling: production boundaries and SSR fallbacks
- Motion: reduced-motion support
- Client work emphasizes local SEO + Google Maps (see Total Fitness case study)

---

## License

**Proprietary.** All rights reserved © Naiyapudai / Sairam BN.  
See [LICENSE](./LICENSE). Unauthorized use or redistribution is prohibited.

Maintained by [@sairambn](https://github.com/sairambn).
