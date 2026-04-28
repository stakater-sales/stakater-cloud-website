---
title: "Why European Companies Are Moving to Managed OpenShift"
description: "GDPR, DORA, NIS2 — regulatory pressure is accelerating the shift to EU-hosted managed Kubernetes platforms. Here's what you need to know."
publishedAt: 2025-03-15
author: "stakater-team"
tags: ["OpenShift", "GDPR", "Europe", "Managed Kubernetes"]
featured: true
---

European organisations running workloads on US hyperscalers face increasing regulatory scrutiny. With GDPR enforcement tightening, DORA in full effect, and NIS2 expanding its scope, EU data residency is no longer optional — and managed OpenShift in Europe is one of the clearest paths to compliance.

## The regulatory landscape in 2025

Three regulations are driving platform decisions across European enterprises right now.

**GDPR** remains the baseline. Personal data processed by EU organisations must not be transferred outside the EU without adequate safeguards — and the definition of "transfer" has expanded significantly since Schrems II. US hyperscaler defaults (S3 in us-east-1, EC2 in us-west-2) don't meet the bar. Organisations are having to architect around data residency requirements that their platform wasn't built for.

**DORA** — the Digital Operational Resilience Act — came into full effect in January 2025. Financial services firms and their critical ICT providers must demonstrate operational resilience, including geographic redundancy, incident reporting within four hours, and documented supply chain risk management. For firms running on a single hyperscaler region, DORA is forcing a rethink.

**NIS2** expanded the scope of critical infrastructure to include digital infrastructure, managed service providers, and a much broader set of sectors than its predecessor. NIS2 mandates security risk management, incident reporting to national authorities within 24 hours, and demonstrable supply chain oversight — including ICT vendors.

Running on a US hyperscaler with default configurations doesn't address any of these cleanly. It can be done, but it requires significant custom configuration, legal review, and ongoing compliance monitoring.

## Why OpenShift specifically

Kubernetes is the de facto platform for containerised workloads — but raw Kubernetes is not a platform. It is infrastructure. The gap between a running Kubernetes cluster and a production-ready developer platform is 12–18 months of engineering work: GitOps, CI/CD, secrets management, multi-tenancy, monitoring, logging, security hardening, and day-2 operations.

OpenShift closes most of that gap by default. It ships with integrated container registry, route-based ingress, stricter security contexts, built-in monitoring, and a console that development teams can actually use. For regulated organisations, OpenShift's security posture — non-root containers by default, SCCs, integrated audit logging — is significantly ahead of vanilla Kubernetes.

Red Hat also maintains long-term support for OpenShift versions, which matters for regulated industries where upgrade cycles are controlled and tested rather than automatic.

## The platform team problem

The bigger problem is not the technology — it is the people. Building and operating a production OpenShift platform requires specialists: OpenShift architects, SRE engineers with Kubernetes expertise, security engineers who understand OPA/Gatekeeper, and on-call rotation. For most organisations, that is a team of four to eight people dedicated to platform work before a single line of product code ships.

That is the cost hyperscalers don't advertise. AWS will rent you EC2 instances. Azure will rent you AKS. Google will rent you GKE. None of them will staff your platform team.

## What managed OpenShift in the EU actually looks like

A managed OpenShift offering in the EU should provide:

- A dedicated cluster — your workloads are not co-tenanted with other customers at the infrastructure layer
- EU data residency — the control plane and data plane both operate within EU jurisdiction
- Day-2 operations — upgrades, patches, and incident response handled by the provider's SRE team
- Compliance tooling — GDPR-ready data processing agreements, audit logging, and security hardening configured by default
- Platform completeness — GitOps, CI/CD, secrets management, and observability either included or available, not left as an exercise for the customer

The alternative — running OpenShift yourself on a hyperscaler — gives you control at the cost of operational burden. You own every upgrade, every incident, every compliance audit response. For most product organisations, that trade is not worth it.

## The business case

The cost comparison is often the first question, and the answer is generally favourable to managed OpenShift in the EU when total cost is calculated honestly.

Hyperscaler Kubernetes pricing is seductive on paper — node compute costs are transparent and comparable. What the bill doesn't show upfront: egress costs (significant at scale), persistent volume costs, load balancer hours, data transfer between availability zones, and the fully-loaded cost of the platform team required to make it production-ready.

A managed OpenShift offering with a fixed monthly price covering compute, storage, operations, and compliance tooling is typically 30–40% cheaper than the equivalent self-managed setup on a hyperscaler when those hidden costs are included.

For European companies in regulated sectors — financial services, healthcare, utilities, public sector — the compliance simplification alone often justifies the move, before the cost comparison is even completed.

## Getting started

The practical path for most organisations is a proof of concept scoped to a non-production workload. A managed OpenShift cluster can be provisioned in under 15 minutes. Migrating an existing workload typically takes days, not weeks, for teams already running containerised applications.

The questions worth answering before starting: which workloads have explicit EU data residency requirements? Which regulatory frameworks apply to your organisation? What is the current cost of your platform team or the cost of building one?

The answers usually make the case clearly.
