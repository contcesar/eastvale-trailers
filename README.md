# Eastvale Trailers

A fast, light-themed static website for **Eastvale Trailers**, a trailer rental
business in Eastvale, California. Built with [Astro](https://astro.build) and
[Tailwind CSS](https://tailwindcss.com), ready to host on GitHub + Netlify.

- Static output to `dist/`
- Prominent, sticky, click-to-call phone number on every page
- Trailer type pages and city pages generated from data files
- Netlify Forms quote request with redirect to a thank-you page
- Local SEO: per-page titles/descriptions, LocalBusiness JSON-LD, sitemap, Open Graph

## Requirements

- Node.js 18+ (this project is set up for Node 22)
- npm

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Then open the URL Astro prints (usually `http://localhost:4321`).

## Build

```bash
npm run build
```

The static site is generated into `dist/`. Preview the production build with:

```bash
npm run preview
```

## Deploy to Netlify (from GitHub)

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new site → Import an existing project** and pick the repo.
3. Netlify reads `netlify.toml`, so the settings are filled in automatically:
   - **Build command:** `astro build`
   - **Publish directory:** `dist`
4. Deploy. Netlify auto-detects the quote form (see below).
5. (Optional) Add your custom domain in **Site settings → Domain management**, then
   update `site` in `astro.config.mjs` and the sitemap URL in `public/robots.txt`.

### Netlify Forms

The quote form uses [Netlify Forms](https://docs.netlify.com/forms/setup/). The form
markup includes `data-netlify="true"`, a hidden `form-name`, and a honeypot field, and
it redirects to `/thank-you` on success. Submissions appear under
**Site → Forms** in the Netlify dashboard. No extra configuration is needed.

## Where to add real content

Everything below is marked `TODO` in the code so it's easy to find.

| What | Where |
| --- | --- |
| **Phone number** | `src/data/business.js` (`phone` and `phoneHref`); replace `(951) 555-0123` |
| **Business name, hours** | `src/data/business.js` |
| **Production URL** | `site` in `astro.config.mjs`, `url` in `src/data/business.js`, and `public/robots.txt` |
| **Logo** | `public/images/eastvale-trailers-logo.webp` (used in `src/components/Header.astro`) and `public/favicon.svg` |
| **Hero photo** | `public/images/hero.webp`, referenced in `src/pages/index.astro` |
| **Trailer photos** | `public/images/trailers/*.webp` (paths set in `src/data/trailers.js`) |
| **Trailer rates** | `starterRate` in `src/data/trailers.js` and the rates table in `src/pages/trailers/[type].astro` |
| **Trailer copy** | `src/data/trailers.js` |
| **City intros** | `src/data/cities.js` |
| **Map embeds** | `src/pages/contact.astro` and `src/pages/service-area/[city].astro` |
| **Social share image** | `public/images/og.jpg` |
| **Reviews / trust badges** | Add to `src/pages/index.astro` or `src/pages/about.astro` |

## Project structure

```
src/
  components/    # Button, Header, Footer, TrailerCard, CityCard, QuoteForm, CTASection
  data/          # business.js, trailers.js, cities.js (edit these to update the site)
  layouts/       # BaseLayout.astro (head, fonts, meta, JSON-LD, header, footer)
  pages/         # routes; [type] and [city] are generated from the data files
public/          # static assets (favicon, images, robots.txt)
```

### Add or change a trailer type or city

Edit `src/data/trailers.js` or `src/data/cities.js`. Cards, pages, navigation
links, and the footer all read from these files, so they stay in sync.

## Tech notes

- **Design tokens** live in `src/styles/global.css` inside the Tailwind v4 `@theme`
  block (colors, fonts, radius, shadows).
- The only client-side JavaScript is the mobile nav toggle in `Header.astro`.
- Images below the fold are lazy-loaded; the site is otherwise fully static.
