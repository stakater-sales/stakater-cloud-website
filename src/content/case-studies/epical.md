---
company: "Epical"
industry: "IBM Maximo Managed Services"
challenge: "IBM mandated that Maximo Application Suite move to OpenShift. Epical had zero OpenShift expertise, a September 2025 hard deadline, and needed to launch a production Maximo-as-a-Service offering — without building an internal platform team."
outcome: "Epical launched production Maximo-as-a-Service in time, beat ten competing vendors including IBM itself, came in 35% cheaper, and now runs multiple enterprise Maximo clients in production — all on Stakater Cloud in the EU."
metrics:
  - value: "35%"
    label: "Cost saving vs competing vendors"
  - value: "10"
    label: "Vendors evaluated — Stakater won"
  - value: "< 5 days"
    label: "Time to production infrastructure"
  - value: "Multiple"
    label: "Enterprise Maximo clients in production"
services:
  - "Managed OpenShift"
featured: true
---

## From Zero OpenShift Expertise to Market Leader in One Engagement

Epical is a 400-person Nordic data consultancy and IBM Premium Partner, widely regarded as one of the leading Maximo specialists in EMEA. They help large enterprises deploy and run IBM Maximo Application Suite — asset management software used in manufacturing, utilities, and regulated industries across the Nordics and beyond.

In 2024, IBM made a decision that changed everything: Maximo would no longer run on traditional infrastructure. From this point forward, MAS required OpenShift. Every Maximo customer would eventually need to migrate. And every Maximo partner — including Epical — would need to be able to deliver on OpenShift or risk losing their position in the market.

Epical had one problem: they had never run OpenShift before.

---

## The Mandate: OpenShift or Irrelevance

Olof Hermansson, the architect behind Epical's Maximo-as-a-Service vision, understood the stakes immediately. Epical's clients were asking about OpenShift. IBM was pushing it. The September 2025 deadline for Maximo-as-a-Service availability was non-negotiable.

Building an internal OpenShift team from scratch was not a realistic option. It would take 12–18 months, cost significant recruitment and infrastructure investment, and introduce operational risk on a platform none of their engineers had experience with. The smarter path was to find a managed OpenShift partner who could be the platform — while Epical focused on the Maximo layer where they had real expertise.

Olof evaluated ten vendors. The list included major cloud providers, boutique OpenShift shops, and IBM itself.

---

## Beating IBM at Its Own Game

The competitive evaluation was rigorous. Ten vendors were assessed on flexibility, pricing, data residency, technical depth, and — critically — their willingness to build a genuine partnership rather than just sell a contract.

IBM competed directly. They lost.

Stakater won on four dimensions:

**Flexibility.** Stakater was willing to adapt the engagement to Epical's exact requirements — including a custom NFS storage configuration to satisfy Maximo's ReadWriteMany volume requirements, which most OpenShift environments don't support out of the box.

**Customer-first approach.** In Olof's words: *"Stakater is flexible, he wants what's best for the customer."* Every other vendor tried to fit Epical into their standard offering. Stakater started from the use case.

**EU data residency.** Epical's Maximo clients are Nordic enterprises with strict data sovereignty requirements. Stakater's Netherlands data center — operated by a Swedish company under EU jurisdiction — was the only option that met compliance requirements cleanly. US-headquartered cloud providers were immediately disqualified.

**Pricing.** When all was said and done, Stakater came in 35% cheaper than the next best alternative.

---

## The Build: Three Days to Scope, Five Days to Production

Once selected, Stakater moved fast. The engagement followed a structured but agile process:

**Day 1–3: Assessment.** Stakater's team ran a three-day technical assessment to understand the Maximo architecture, storage requirements, cluster sizing, and integration points. No assumptions. No generic templates.

**Day 3–5: Infrastructure.** Two hyperconverged OpenShift clusters were provisioned in Stakater's EU data center — a non-production environment for development and testing, and a production cluster sized for enterprise Maximo workloads. From kickoff to running clusters: under five days.

**Month 1–3: Getting Epical to market.** With the clusters running, Stakater worked alongside Epical to configure and validate the OpenShift environment for their Maximo-as-a-Service offering. The goal was simple: make it as easy and fast as possible for Epical to onboard enterprise Maximo clients without needing OpenShift expertise of their own.

The storage configuration required special attention. Maximo uses ReadWriteMany volumes — a requirement that ruled out standard storage classes on most managed OpenShift offerings. Stakater built a custom NFS-backed storage solution that satisfied Maximo's requirements without compromising cluster performance or security posture.

Throughout the engagement, Stakater maintained a live Slack channel with Epical's team. Daily calls during implementation. Escalation paths with actual humans. When something needed to change, it changed the same day.

---

## The Result: Maximo-as-a-Service, Live in the EU

Epical launched production Maximo-as-a-Service before the September 2025 deadline. Their offering runs on Stakater Cloud's EU infrastructure, fully compliant with GDPR and Nordic data residency requirements.

The commercial outcome exceeded expectations:

- **35% cheaper** than competing managed OpenShift solutions, giving Epical a structural pricing advantage when selling to enterprise clients
- **EU-sovereign** infrastructure — a meaningful differentiator with Nordic regulated industries
- **Live demo environment** that Epical can spin up from their website for prospect calls, without provisioning new infrastructure for each evaluation
- **Multiple enterprise Maximo clients** running in production on Epical's Maximo-as-a-Service offering, built on Stakater Managed OpenShift

Epical now goes to market as the only Nordic Maximo partner with a fully managed, EU-sovereign OpenShift platform behind their service — a position that would have taken years to build independently.

---

## What Comes Next

The relationship does not stop at infrastructure. Epical and Stakater are building a go-to-market partnership: sharing pipeline, co-selling into regulated enterprises, and expanding together as the Maximo-on-OpenShift mandate spreads across Europe.

*"GTM together. Expand together. Help each other."* — Olof Hermansson, Epical

For any IBM Maximo partner facing the OpenShift mandate, Epical's path is instructive: don't build the platform yourself. Find the right managed OpenShift partner, run a real evaluation, and start the PoC immediately. The competitive advantage for those who move first is real.
