# Micropower Circuits Laboratory

A static Next.js replica of the Micropower Circuits Laboratory website for
Professor Shiuh-hua Wood Chiang at Brigham Young University.

## Local development

```bash
npm install
npm run dev
```

Local development runs at `http://localhost:3000` without a URL prefix. The
production build is exported beneath `/microcl-lab` for GitHub Pages.

## Editing content

Routine site content lives in `data/`:

- `site.ts` — title, description, social account, and navigation
- `pages.ts` — About, Biography, Teaching, Links, and Contact content
- `students.ts` — current and former student groups
- `publications.ts` — journals, conferences, patents, and news

Images live in `public/images/`. Presentation components live in `components/`,
while route files under `app/` map the data into pages.

## Validation and export

```bash
npm run lint
npm run typecheck
npm run build
```

The production build writes the static site to `out/`. Pushes to `main` run the
GitHub Pages deployment workflow in `.github/workflows/deploy-pages.yml`.
