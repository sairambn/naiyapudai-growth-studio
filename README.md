# Naiyapudai · நையப்புடை — Growth Studio

**Websites that rank. Marketing that pays for itself.**

Digital growth studio for Tamil Nadu — high-performance websites, Google Search & Maps ranking, and paid + social work that turns traffic into customers for local SMBs and D2C brands.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [TanStack Start](https://tanstack.com/start) (React + file-based routing + SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom design system |
| UI | Radix UI + shadcn-style components |
| Build | Vite 8 |
| Deploy | Nitro + Vercel (`framework: tanstack-start`) |

---

## Quick start

```bash
git clone https://github.com/sairambn/naiyapudai-growth-studio.git
cd naiyapudai-growth-studio
npm install          # or: bun install
npm run dev          # http://localhost:3000
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Project structure

```
src/
├── components/          # Nav, footer, WhatsApp FAB, UI primitives
├── hooks/               # Custom React hooks
├── lib/                 # Utils, error handling, reveal animations
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
├── styles.css           # Design tokens & Tailwind
├── server.ts            # SSR entry + error fallback
└── start.ts             # Middleware (CSRF + error handling)
```

---

## Features

- Bilingual-ready (English + Tamil typography)
- SEO foundation: JSON-LD, meta, sitemap, canonicals
- Accessibility: skip link, focus management, semantic HTML
- Mobile-first layout with polished motion
- WhatsApp CTAs throughout
- Production error boundaries and SSR error pages

---

## Deploy to Vercel

1. [vercel.com/new](https://vercel.com/new)
2. Import **`sairambn/naiyapudai-growth-studio`**
3. Framework Preset = **TanStack Start** (set in `vercel.json`)
4. Deploy

[One-click import](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/naiyapudai-growth-studio)

```bash
npm run build && npm run preview
```

---

**[@sairambn](https://github.com/sairambn)** · Private — All rights reserved © Naiyapudai
