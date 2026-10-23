# Eeri Hyppänen — Portfolio

A personal portfolio with a quiet Nordic palette, real project imagery, topic filters, and accessible screenshot previews.

**[Visit the portfolio](https://eerihyppanen.github.io/portfolio/)**

## Stack

React, TypeScript, Vite, and plain CSS. The portfolio is a static site: it needs no backend, database, API key, or runtime third-party requests. React handles filtering and screenshot dialogs; Vite builds assets for GitHub Pages.

## Run locally

Use Node.js 24 LTS (or Node.js 22.12+).

```sh
npm ci
npm run dev
```

Open the printed URL ending in `/portfolio/`.

```sh
npm run check     # Strict TypeScript checking
npm run build     # TypeScript check and production build
npm run preview   # Serve the production build
```

## Update the content

- `src/projects.ts`: descriptions, contributions, topic assignments, technologies, screenshot captions, and external links.
- `src/App.tsx`: introduction, skills, contact links, and reusable components.
- `src/styles.css`: colors, typography, and responsive layouts.
- `public/images/`: self-hosted project captures. [Image provenance](docs/content-sources.md) records where each came from.

The six projects are Training Log, Distributed Chat, Discord Bot, Statistics Portal, Forum, and Campus Food (which has a live demo). Training Log's source remains private; its public documentation is linked instead. Campus Food's private repository is not exposed.

Topics are single-selection filters. A URL such as `?topic=AI-assisted#work` opens that selection directly. Back/forward navigation restores the selected topic. Projects can belong to several topics. AI-assisted means confirmed use of AI during development; an AI API integration alone is not labeled as AI-assisted authorship.

## Automatic deployment

The workflow in `.github/workflows/deploy.yml` builds and deploys every push to `main`, using one runner from installation through publication. It can also be triggered manually on `main`. GitHub Pages must use **GitHub Actions** as its source. No personal access token or additional deployment secret is needed by the workflow. Run `npm run build` before proposing changes.

`vite.config.ts` sets `base: '/portfolio/'`, matching the deployment URL. If the repository name changes, update this base, the canonical/Open Graph URLs, `robots.txt`, and `sitemap.xml`.

## Image and content limitations

- Training Log uses the author's original Android screenshots.
- Campus Food uses a capture of the live public website.
- Forum shows the original registration screen served locally, without a connected database.
- Discord Bot uses a labeled capture of its actual reminder command source. A runtime Discord screenshot can replace it later.
- Statistics Portal shows its original interface/manual. Its upstream data endpoints failed during capture, so this is clearly noted in the card and preview. The original project has not been changed.

## Original implementation and dependencies

The portfolio layout, components, and styling were written anew. No code or visual assets from Microsoft's Codespaces portfolio template were copied. The old portfolio supplied personal facts and links only. No repository-level MIT license has been added.

Third-party package licenses remain applicable to those packages. Vite emits `dist/THIRD_PARTY_LICENSES.md` with the deployed build. Screenshot sources are recorded separately; they do not import the old portfolio's template code.

## Accessibility and verification

Semantic landmarks, a skip link, visible focus indicators, native buttons and details, `aria-pressed` topic state, polite result announcements, reduced-motion support, and a native modal dialog with Escape dismissal and focus return. Check desktop and mobile layouts, filters, query-string restoration, contribution disclosures, and screenshot dialogs after UI changes.
