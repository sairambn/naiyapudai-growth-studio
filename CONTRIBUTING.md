# Contributing to Naiyapudai Growth Studio

Thanks for your interest in contributing. This is a production multi-page growth studio site — keep changes focused, typed, bilingual-aware, and accessible.

## Development setup

```bash
git clone https://github.com/sairambn/naiyapudai-growth-studio.git
cd naiyapudai-growth-studio
bun install
bun run dev
```

## Workflow

1. Create a branch from `main`
2. Make focused changes
3. Run checks locally:
   ```bash
   bun run lint
   bunx tsc --noEmit
   bun run build
   ```
4. Open a Pull Request using the template

## Code guidelines

- **TypeScript** — prefer strict types; avoid `any`
- **Accessibility** — keyboard support, focus states, reduced-motion, semantic markup
- **SEO** — preserve JSON-LD, meta, sitemap, and canonicals
- **Bilingual readiness** — respect Tamil + English typography paths
- **Design system** — use existing tokens (`btn-accent`, `card-elite`, etc.) before inventing new ones
- **Commits** — clear, imperative messages (`fix: …`, `feat: …`, `docs: …`)

## Pull requests

- Keep PRs small and reviewable
- Include a short summary + test plan
- UI changes: add before/after screenshots when helpful

## Questions

Open an issue or reach out via the contact details in the profile README.
