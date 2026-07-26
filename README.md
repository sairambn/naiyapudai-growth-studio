# Naiyapudai · நையப்புடை — Growth Studio

**Websites that rank. Marketing that pays for itself.**

Naiyapudai is a Tamil Nadu digital growth studio that builds beautiful, high-performance websites, ranks them on Google Search & Maps, and runs the paid + social work that turns traffic into paying customers — for local SMBs and D2C brands across India.

Live site: [naiyapudai-growth-studio.vercel.app](https://naiyapudai-growth-studio.vercel.app)

## Tech stack

- **Framework**: [TanStack Start](https://tanstack.com/start) (React + file-based routing + SSR)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + custom design system
- **UI primitives**: Radix UI + shadcn-style components
- **Build tool**: Vite 8
- **Runtime / deploy**: Nitro (Cloudflare-compatible)

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

## Deployment

The project is set up for Vercel (or any Nitro-compatible target). Push to `main` and connect the repo in your hosting dashboard.

```bash
npm run build
```

## License

Private — All rights reserved © Naiyapudai
