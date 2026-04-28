# CLAUDE.md — Stakater Cloud Website

This file gives Claude (or any AI coding assistant) the context needed to work effectively on this codebase. Read this before making any changes.

---

## What this project is

**stakater.cloud** is the public-facing marketing and product website for Stakater Cloud — a managed OpenShift hosting service hosted in Europe (Netherlands), operated by Stakater AB (Sweden), a Red Hat Premier Partner.

This website is separate from:
- **stakater.com** — the main Stakater company site (different repo)
- **docs.stakater.com** — product documentation (different repo)

---

## What Stakater Cloud sells

**Two products, clearly separated:**

### 1. Managed OpenShift
A dedicated OpenShift cluster provisioned in Stakater's Netherlands data center. Stakater manages all upgrades, lifecycle operations and SRE. The customer just uses the cluster.
- Starting price: €888/month (3 × Standard nodes + Standard support)
- Add-ons: PostgreSQL (+€400), RabbitMQ (+€600), Redis (+€300)
- Support: Standard (included) or Premium (+€2,000/mo)

### 2. SAAP — Stakater App Agility Platform
Everything in Managed OpenShift, plus a full pre-wired developer platform: ArgoCD, Tekton, Vault, MTO, Prometheus, Grafana, Loki, Velero, Backstage, Nexus OSS, SonarQube, RHACS, Reloader, IngressMonitorController, cert-manager.
- Starting price: €1,500/month

---

## Core positioning (do not dilute)

- We start at the PaaS layer. AWS/Azure/GCP start at infrastructure.
- Production-ready OpenShift in under 15 minutes.
- 100% EU data residency — Netherlands data center.
- Red Hat Premier Partner + Container Management Specialist.
- No internal platform team needed.
- GDPR, DORA, NIS2 compliant out of the box.
- ISO 27001:2022 and ISO 9001:2015 certified.

---

## Target customers

1. **European MSPs & ISVs** — delivering managed software (e.g. IBM Maximo) on OpenShift without running the platform themselves.
2. **European SaaS companies** — who want to ship product, not manage Kubernetes.
3. **European regulated enterprises** — finance, healthcare, critical infrastructure needing EU data residency.

---

## Tech stack

| Layer       | Choice                                |
|-------------|---------------------------------------|
| Framework   | Astro 4.16 (hybrid output mode)       |
| Adapter     | @astrojs/cloudflare (Cloudflare Pages)|
| Styling     | Tailwind CSS 3 + @tailwindcss/typography |
| Content     | Astro Content Collections (Zod schemas)|
| Deployment  | Cloudflare Pages (wrangler.toml)      |
| Fonts       | Plus Jakarta Sans (Google Fonts)      |

---

## Design system

**Colours:**
- Primary Orange: `#FF5623` (CTAs, highlights, accents, icons)
- Secondary Orange: `#CC451C` (hover states)
- Primary Purple: `#1A0D32` (dark sections, headings)
- Secondary Purple: `#0A0614` (deepest dark sections)
- BG Main: `#F5F5F5`
- BG Alt: `#E8E8E8`
- BG Card: `#D1CFD6`
- Border: `#D9D9D9`
- Muted text: `#5a5668`

**Typography (Plus Jakarta Sans):**
- H1: 56px Bold (mobile: 32px)
- H2: 48px Bold (mobile: 28px)
- H3: 32px Bold
- H4: 24px SemiBold
- H5: 20px SemiBold
- H6: 18px SemiBold
- P1: 24px Regular
- P2: 18px Regular
- P3: 16px Regular
- P4: 14px Regular

**Layout:**
- Container max-width: 1200px
- Desktop margins: 120px left/right → `.container-site`
- Tablet margins: 40px
- Mobile margins: 16px
- Section padding: 144px top/bottom (mobile: 72px) → `.section-pad`
- Card gap: 32px between cards
- Gutter: 32px desktop, 24px tablet, 16px mobile

**Rules:**
- Orange ONLY for CTAs, highlights, icons, key accents — never large backgrounds
- Purple for dark section backgrounds
- BG Main/Alt for light section separation
- Single CTA across the site: `Book a Call`

---

## Directory structure

```
src/
├── components/
│   ├── layout/       Header.astro, Footer.astro
│   ├── sections/     Hero, TrustBar, Products, HowItWorks, WhyUs,
│   │                 Comparison, WhoItsFor, Testimonials, ComplianceBar, CTA
│   └── ui/           Button, Badge, CheckItem, SectionLabel, Tag, SEO
├── content/
│   ├── blog/         Markdown blog posts
│   ├── case-studies/ Markdown case studies
│   ├── authors/      JSON author data
│   └── config.ts     Zod schemas
├── data/
│   └── navigation.ts Nav + footer links (single source of truth)
├── layouts/
│   ├── BaseLayout.astro
│   ├── BlogLayout.astro
│   └── ProductLayout.astro
├── lib/
│   ├── seo.ts        siteConfig, buildTitle, buildCanonical
│   └── utils.ts      formatDate, readingTime, slugify
├── pages/
│   ├── index.astro
│   ├── contact.astro
│   ├── faq.astro
│   ├── pricing.astro
│   ├── referral.astro
│   ├── why-stakater-cloud.astro
│   ├── blog/         index.astro, [slug].astro
│   ├── case-studies/ index.astro, [slug].astro
│   ├── compare/      rosa-alternative.astro, eks-alternative.astro, etc.
│   ├── products/     managed-openshift.astro, saap.astro
│   └── solutions/    msps-isvs.astro, saas.astro, regulated.astro
└── styles/
    └── global.css
```

---

## Key conventions

- All pages use `export const prerender = true` (hybrid mode; only the OG image route is server-rendered)
- Navigation is defined in `src/data/navigation.ts` — update nav there, not in Header.astro directly
- All SEO meta is in `src/components/ui/SEO.astro` via `BaseLayout`
- `buildTitle(title)` → `"Page Title | Stakater Cloud"`
- `buildCanonical(path)` → `"https://www.stakater.cloud/path"`
- Section label: use `<SectionLabel>` component for all eyebrow labels
- Animate on scroll: add class `animate-on-scroll` to elements — JS observer adds `visible` class
- Buttons: always use `<Button>` component with `variant` prop — never inline button styles
- Check lists: use `<CheckItem>` component, not inline list styling

---

## Content guidelines

- **Tone:** Clear, direct, confident. No jargon. No filler words. Never say "seamlessly", "robust", "cutting-edge", "leverage", or "utilize".
- **Headlines:** Specific over vague. "Production-ready OpenShift in 15 minutes" beats "Fast and reliable Kubernetes".
- **CTAs:** Single CTA throughout: `Book a Call`. Pricing page secondary CTA: `View Pricing`.
- **Never:** Fake free trial buttons that go to contact forms. Keep all CTAs honest.

---

## Adding new content

### New blog post
Create `src/content/blog/my-post.md` with frontmatter matching the schema in `config.ts`.

### New case study
Create `src/content/case-studies/company-name.md` with frontmatter matching the schema.

### New product page
1. Create `src/pages/products/new-product.astro` using `ProductLayout`
2. Add to `src/data/navigation.ts` under `Products` in the nav array
3. Add to `footerLinks.Products` in navigation.ts
4. Add a card to the pricing page

### New solution page
1. Create `src/pages/solutions/new-solution.astro` using `BaseLayout`
2. Add to `src/data/navigation.ts` under `Solutions`

---

## Do not

- Do not change the core positioning or messaging without reviewing DESIGN.md
- Do not add new nav items without updating `src/data/navigation.ts`
- Do not add inline Tailwind classes that duplicate component classes (use `.btn-primary`, `.card`, etc.)
- Do not change pricing without confirming with the team
- Do not use emojis in production headings or body copy (UI labels only)
- Do not add `position: fixed` elements (breaks Cloudflare Pages iframe sizing)
