# Architecture

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Astro 4.16 | Static-first, zero JS by default, great for content sites |
| Output mode | `hybrid` | Most pages prerendered; OG image endpoint is server-side |
| Adapter | `@astrojs/cloudflare` | Deployed on Cloudflare Pages with edge functions |
| Styling | Tailwind CSS 3 + `@tailwindcss/typography` | Utility-first; typography plugin for blog prose |
| Content | Astro Content Collections | Type-safe frontmatter via Zod schemas |
| Deployment | Cloudflare Pages | `wrangler.toml` configures the project |

## Output Mode: Hybrid

The site is `output: "hybrid"` — all pages are prerendered (static HTML) at build time except:

- `src/pages/og/[...slug].ts` — `export const prerender = false` makes this a Cloudflare edge function that generates OpenGraph SVG images on demand.

Every other page has `export const prerender = true` (or inherits hybrid default).

## Directory Structure

```
src/
├── components/
│   ├── layout/        Header, Footer
│   ├── sections/      Page-level sections (Hero, TrustBar, Products, HowItWorks,
│   │                  WhyUs, Comparison, WhoItsFor, Testimonials, ComplianceBar, CTA)
│   └── ui/            Reusable primitives (Button, Badge, CheckItem, SEO,
│                      SectionLabel, Tag)
├── content/
│   ├── blog/          Markdown blog posts
│   ├── case-studies/  Markdown case study pages
│   ├── authors/       JSON author profiles
│   └── config.ts      Zod schemas for all collections
├── data/
│   └── navigation.ts  Nav + footer link definitions (single source of truth)
├── layouts/
│   ├── BaseLayout.astro      HTML shell + SEO head + scroll animations
│   ├── BlogLayout.astro      Blog post wrapper
│   └── ProductLayout.astro   Product page wrapper
├── lib/
│   ├── seo.ts         siteConfig, buildTitle, buildCanonical
│   └── utils.ts       formatDate, readingTime, slugify
├── pages/
│   ├── index.astro
│   ├── contact.astro
│   ├── faq.astro
│   ├── pricing.astro
│   ├── referral.astro
│   ├── why-stakater-cloud.astro
│   ├── blog/[slug].astro
│   ├── case-studies/index.astro
│   ├── compare/       rosa-alternative, eks-alternative, aks-alternative, gke-alternative
│   ├── products/      managed-openshift.astro, saap.astro
│   ├── solutions/     msps-isvs.astro, saas.astro, regulated.astro
│   └── og/[...slug].ts  Server-side OG image generator
└── styles/
    └── global.css     Tailwind directives + component classes
```

## Content Collections

| Collection | Type | Key Fields |
|---|---|---|
| `blog` | Markdown | title, description, publishedAt, author, tags, image?, featured, draft |
| `case-studies` | Markdown | company, industry, outcome, challenge, metrics[], services[] |
| `authors` | JSON data | name, role, bio, avatar?, linkedin?, github?, twitter? |

## OG Image Generation

Route: `GET /og/[any-slug].svg?title=...&sub=...`

- Server-side Cloudflare edge function (`prerender = false`)
- Returns `image/svg+xml` — a branded 1200×630 SVG
- No canvas, no sharp, no fonts required — pure SVG with system fonts

## SEO

`SEO.astro` handles all meta tags: Open Graph, Twitter Card, JSON-LD structured data. Called from `BaseLayout` with props passed from every page.

- `buildTitle(title)` → `"Page Title | Stakater Cloud"`
- `buildCanonical(path)` → `"https://www.stakater.cloud/path"`

## CSS

`global.css` order matters:
1. `@import` for Google Fonts — must be first (CSS spec)
2. `@tailwind base/components/utilities`
3. `@layer base` — html/body/heading defaults
4. `@layer components` — `.container-site`, `.section-pad`, `.btn-*`, `.card`, `.section-label`, `.check-item`, `.animate-on-scroll`

## Known Dependency Pins

`@astrojs/sitemap` is pinned to exactly `3.1.6` (no `^`) because `3.7.2+` targets Astro 6 and uses the `astro:routes:resolved` hook which does not exist in Astro 4.x, causing builds to fail.
