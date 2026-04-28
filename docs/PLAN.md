# PLAN.md — Stakater Cloud Website Rebuild Plan

## Overview

This document captures the full product, messaging and technical decisions made during the Stakater Cloud website rebuild (April 2026). It serves as the reference for anyone working on the site — developer, designer, or AI assistant.

---

## Background

The previous stakater.cloud website (built on Wix) was:
- Unclear on what Stakater Cloud actually sells
- Organised around use-case scenarios rather than products
- Not generating inbound leads (0 from website in 2 years)
- Filled with dead pages (Cloud Orchestrator, Validate on OpenShift, etc.)
- Using CTAs that led nowhere (fake "Free Trial" → Contact Us)

The rebuild goal: a website that clearly explains the two products, targets the right customers, and drives `Book a Call` conversions.

---

## Positioning (locked)

### What we offer
**Two products:**

1. **Managed OpenShift** — Dedicated OpenShift cluster, hosted in Stakater's Netherlands data center. Stakater handles all upgrades, lifecycle management and SRE operations. Starting from €888/month.

2. **SAAP (Stakater App Agility Platform)** — Everything in Managed OpenShift, plus a complete pre-wired developer platform (ArgoCD, Tekton, Vault, MTO, Prometheus, Grafana, Loki, Velero, Backstage, Nexus, SonarQube, RHACS, Reloader, IMC, cert-manager). Starting from €1,500/month.

### Core message
> "Stop assembling infrastructure from scratch. Stakater Cloud delivers a fully managed, production-ready OpenShift platform — with everything pre-wired and operated by experts. Production-ready in under 15 minutes. Hosted in Europe."

### Key differentiators
- Start at the PaaS layer (not infrastructure like AWS/Azure/GCP)
- 100% EU data residency — Netherlands data center
- Red Hat Premier Partner + Container Management Specialist
- GDPR, DORA, NIS2 compliant out of the box
- ISO 27001:2022 + ISO 9001:2015 certified
- No internal platform team needed
- Up to 40% lower cost than hyperscalers

### Target customers
1. **European MSPs & ISVs** — delivering managed software on OpenShift (e.g., IBM Maximo MSP)
2. **European SaaS companies** — shipping product, not managing infrastructure
3. **European regulated enterprises** — financial services, healthcare, critical infrastructure

### Single CTA
`Book a Call` — everywhere. No fake free trials.

---

## What we killed from the old site

| Old page / feature      | Reason killed                         |
|-------------------------|---------------------------------------|
| Validate on OpenShift   | Not a product — buried into SAAP page |
| Dev & Testing Clusters  | Not a product — covered by Managed OCP|
| Application Deployment  | Not a product                         |
| Cloud Orchestrator/SCO  | Not relevant to stakater.cloud         |
| "Free Trial" CTA        | Was going to Contact Us — dishonest   |
| Solutions nav structure | Reorganised around products first     |

---

## Sitemap (final)

### Primary Nav
- Home
- Products
  - Managed OpenShift (`/products/managed-openshift`)
  - SAAP (`/products/saap`)
- Solutions
  - For MSPs & ISVs (`/solutions/msps-isvs`)
  - For SaaS Companies (`/solutions/saas`)
  - For Regulated Industries (`/solutions/regulated`)
- Why Stakater Cloud (`/why-stakater-cloud`)
- Pricing (`/pricing`)
- Resources
  - Documentation (→ docs.stakater.com)
  - Blog (`/blog`)
  - Case Studies (`/case-studies`)
  - FAQ (`/faq`)
  - Referral Program (`/referral`)
- **Book a Call** (always-visible CTA button)

### Footer only
- Compare: vs ROSA, vs EKS, vs AKS, vs GKE (`/compare/*`)

---

## Pricing (from current site)

| Item                        | Price      |
|-----------------------------|------------|
| Standard nodes (4c/16g/120) | Base       |
| Performance nodes (8c/32g)  | On request |
| Starting cluster (3 nodes)  | €888/mo    |
| SAAP add-on                 | €1,500/mo  |
| Premium Support             | €2,000/mo  |
| PostgreSQL (3 node)         | €400/mo    |
| RabbitMQ (3 node)           | €600/mo    |
| Redis (3 node)              | €300/mo    |

---

## Tech decisions

| Decision                  | Choice                  | Reason                                         |
|---------------------------|-------------------------|------------------------------------------------|
| Framework                 | Astro 4.16 hybrid       | Same as main stakater.com rebuild              |
| Styling                   | Tailwind CSS 3          | Same as main stakater.com rebuild              |
| Hosting                   | Cloudflare Pages        | Fast, global CDN, edge functions               |
| Font                      | Plus Jakarta Sans       | Stakater brand design system                   |
| Output mode               | hybrid                  | All pages static; future OG image endpoint     |
| Pricing pages             | Per-product + overview  | Expandable as new products are added           |
| Content management        | Astro Content Collections | Type-safe, Zod-validated                      |

---

## Pages built

| Page                          | Status  | Notes                          |
|-------------------------------|---------|--------------------------------|
| Home                          | ✅ Done  | Full 10-section page           |
| Managed OpenShift             | ✅ Done  | Hero, features, pricing, CTA   |
| SAAP                          | ✅ Done  | Hero, component grid, compare  |
| Why Stakater Cloud            | ✅ Done  | EU, RH partner, compliance     |
| Pricing                       | ✅ Done  | Two products + add-ons + FAQ   |
| For MSPs & ISVs               | ✅ Done  |                                |
| For SaaS Companies            | ✅ Done  |                                |
| For Regulated Industries      | ✅ Done  |                                |
| Contact / Book a Call         | ✅ Done  | Form + contact info            |
| FAQ                           | ✅ Done  | 4 categories, 16 questions     |
| Blog index                    | ✅ Done  | Dynamic from content           |
| Blog [slug]                   | ✅ Done  | Dynamic from content           |
| Case Studies index            | ✅ Done  | Dynamic from content           |
| Referral Program              | ✅ Done  | Form                           |
| vs ROSA / EKS / AKS / GKE    | ✅ Done  | SEO comparison pages           |
| Blog post (sample)            | ✅ Done  | Seed content                   |
| Case study (sample)           | ✅ Done  | Managed Maximo MSP story       |

---

## Next steps for the team

### Immediate (before launch)
- [ ] Add real company logo assets to `/public/`
- [ ] Add Red Hat Premier Partner badge image to `/public/`
- [ ] Add ISO certificate badge images to `/public/`
- [ ] Replace sample case study with real customer story (with permission)
- [ ] Connect contact form to email/CRM (currently action="/api/contact")
- [ ] Connect referral form (currently action="/api/referral")
- [ ] Set up real OG image generation (currently placeholder)
- [ ] Add favicon.svg to `/public/`
- [ ] Add Google Analytics or Plausible tracking to BaseLayout.astro
- [ ] Write 3–5 real blog posts (see suggested topics below)
- [ ] Get real customer logos (even 2–3) for trust bar
- [ ] Add SAAP rename once decided

### Short term (0–3 months)
- [ ] Add About / Team page
- [ ] Add case study [slug] dynamic page
- [ ] Write proper comparison pages (vs ROSA, EKS, AKS, GKE) with real content
- [ ] Add structured data / JSON-LD for product pages
- [ ] Set up Plausible or equivalent analytics
- [ ] Set up blog post workflow

### Future (3–6 months)
- [ ] Add pricing calculator to Pricing page (interactive node configurator)
- [ ] Add new managed services product pages (Postgres, Redis etc.) as products launch
- [ ] Add webinar/demo recording section
- [ ] Add status page link in footer

---

## Suggested blog post topics (SEO + credibility)

1. "Why we chose the Netherlands for our EU data center" — data residency, GDPR, connectivity
2. "OpenShift vs Kubernetes: what actually differs for platform teams"
3. "How to comply with DORA using managed OpenShift"
4. "The platform team you never had to hire: why Managed OpenShift makes sense for SaaS"
5. "Managed IBM Maximo on OpenShift: a practical deployment guide"
6. "GitOps from day one: how ArgoCD is configured in SAAP"
7. "NIS2 and container platforms: what you need to know"

---

## Key contacts (internal)

- Website: update `src/data/navigation.ts` for nav/footer links
- Pricing: update product pages and `pricing.astro` together
- Content: add to `src/content/blog/` or `src/content/case-studies/`
- Brand: design system documented in `docs/DESIGN.md`
