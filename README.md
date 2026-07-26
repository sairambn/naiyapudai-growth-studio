# Naiyapudai · நையப்புடை

### Websites that rank. Marketing that pays for itself.

[![TanStack Start](https://img.shields.io/badge/TanStack_Start-SSR-black?style=flat-square)](https://tanstack.com/start)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)

**Naiyapudai** is a digital growth studio for Tamil Nadu — building high-performance websites, ranking them on Google Search & Maps, and running paid + social systems that turn traffic into customers for SMBs and D2C brands.

> Elite dark + gold design system · Bilingual (English + Tamil) · SEO-first · Conversion-focused

---

## Features

| Area | Details |
|------|---------|
| **Websites** | Fast, SEO-ready sites (TanStack Start / Next-style SSR) with Core Web Vitals in the green |
| **SEO & Maps** | Technical SEO, local ranking, bilingual content, Google Business Profile |
| **Performance marketing** | Meta + Google ads with clear CAC focus and weekly reporting |
| **Branding & social** | Identity systems, repositioning, always-on Reels / Shorts |
| **Experience** | Mobile-first, polished motion, WhatsApp CTAs, production error boundaries |

**Built-in quality**

- SEO foundation — JSON-LD, meta tags, sitemap, canonicals  
- Accessibility — skip link, focus management, semantic HTML  
- Bilingual typography — English + Tamil (Noto Sans Tamil)  
- Luxury dark/gold design system with animated gold shine & ambient glows  

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | [TanStack Start](https://tanstack.com/start) (React + file-based routing + SSR) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom design tokens |
| UI | Radix UI + shadcn-style components |
| Build | Vite 8 |
| Deploy | Nitro + Vercel (`framework: tanstack-start`) |
| Package manager | npm or [Bun](https://bun.sh) |

---

## Quick start

```bash
git clone https://github.com/sairambn/naiyapudai-growth-studio.git
cd naiyapudai-growth-studio
npm install          # or: bun install
npm run dev          # → http://localhost:3000
```

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

---

## Project structure

```text
src/
├── components/           # Nav, footer, WhatsApp FAB, UI primitives
│   ├── site-nav.tsx
│   ├── site-footer.tsx
│   ├── whatsapp-fab.tsx
│   └── ui/               # Radix / shadcn components
├── hooks/                # Custom React hooks
├── lib/                  # Utils, error handling, reveal animations
├── routes/               # File-based routes (TanStack Router)
│   ├── __root.tsx        # Root layout + SEO shell
│   ├── index.tsx         # Home
│   ├── about.tsx
│   ├── services.tsx
│   ├── work.tsx
│   ├── work.$slug.tsx    # Case study detail
│   ├── process.tsx
│   ├── blog.tsx
│   ├── contact.tsx
│   └── sitemap[.]xml.ts
├── styles.css            # Design tokens, gold system, utilities
├── server.ts             # SSR entry + error fallback
└── start.ts              # Middleware (CSRF + error handling)
```

---

## Design system (Grand Goldy)

The site uses a refined **dark elite + gold** palette:

- **Background** — deep near-black  
- **Gold scale** — `--gold`, `--gold-light` (champagne), `--gold-dark` (antique)  
- **Typography** — Instrument Serif (display) + Inter + Noto Sans Tamil  
- **Effects** — animated gold text shine, ambient radial glows, elite card hover states, glow-pulse CTAs  

Key utilities live in `src/styles.css` (`btn-accent`, `card-elite`, `text-gold-shine`, `protocol-num`, etc.).

---

## Deploy to Vercel

1. Go to [vercel.com/new](https://vercel.com/new)  
2. Import **`sairambn/naiyapudai-growth-studio`**  
3. Framework preset = **TanStack Start** (already set in `vercel.json`)  
4. Deploy  

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sairambn/naiyapudai-growth-studio)

```bash
npm run build && npm run preview
```

---

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home — hero, services, work, process, testimonials, CTA |
| `/services` | Full service breakdown |
| `/work` | Case studies overview |
| `/work/$slug` | Individual case study |
| `/process` | Operating system / methodology |
| `/about` | Studio story |
| `/blog` | Insights |
| `/contact` | Contact form + WhatsApp |

---

## License

Private · All rights reserved © Naiyapudai  
Built by [@sairambn](https://github.com/sairambn)
