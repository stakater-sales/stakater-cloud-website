# Stakater Cloud — Website

Public-facing marketing website for [Stakater Cloud](https://www.stakater.cloud) — Managed OpenShift hosted in Europe.

Built with Astro 4 + Tailwind CSS 3, deployed on Cloudflare Pages.

## Quick start

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deployed automatically via Cloudflare Pages on push to `main`. See `wrangler.toml` for configuration.

## Documentation

| Doc | What it covers |
|-----|---------------|
| [CLAUDE.md](./CLAUDE.md) | AI assistant context: products, positioning, conventions |
| [docs/DESIGN.md](./docs/DESIGN.md) | Full design system: colours, typography, spacing, components |
| [docs/PLAN.md](./docs/PLAN.md) | Product decisions, sitemap, pricing, next steps |

## Structure

```
src/
├── components/layout/   Header, Footer
├── components/sections/ Page sections (Hero, Products, HowItWorks, etc.)
├── components/ui/       Primitives (Button, Badge, CheckItem, SEO, etc.)
├── content/             Blog posts, case studies, author data
├── data/navigation.ts   Single source of truth for all nav/footer links
├── layouts/             BaseLayout, BlogLayout, ProductLayout
├── lib/                 seo.ts, utils.ts
├── pages/               All routes
└── styles/global.css    Tailwind + component classes
```

## Adding content

### Blog post
Create `src/content/blog/my-post.md`:
```yaml
---
title: "My Post Title"
description: "One sentence description"
publishedAt: 2025-04-01
author: "stakater-team"
tags: ["OpenShift", "GDPR"]
featured: false
---
Post content here...
```

### Case study
Create `src/content/case-studies/company.md`:
```yaml
---
company: "Company Name"
industry: "Industry"
challenge: "What problem did they have?"
outcome: "What did Stakater Cloud solve?"
metrics:
  - { value: "30 days", label: "Time to launch" }
services: ["Managed OpenShift"]
featured: true
---
Full story here...
```
