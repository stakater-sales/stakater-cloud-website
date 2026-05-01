---
company: "Exelient"
industry: "AI-Assisted Accounting Software"
challenge: "Exelient built an AI platform that sits between accountants, their clients, and legacy accounting software — but had only developers on the team. They needed a fully managed, full-stack EU platform that handled everything from infrastructure to observability so their engineers could focus entirely on product."
outcome: "Exelient shipped to production on a single multi-environment OpenShift cluster with the full KubeStack+ platform layer, managed PostgreSQL, S3-compatible object storage, and Temporal workflow orchestration — all managed by Stakater. Their developers focus on AI and product. Nothing else."
metrics:
  - value: "1"
    label: "Cluster running dev, staging and production"
    icon: "server"
  - value: "Zero"
    label: "Platform or ops engineers needed"
    icon: "users"
  - value: "100% EU"
    label: "Data residency — critical for Swedish financial data"
    icon: "globe"
  - value: "Full stack"
    label: "Managed platform from day one"
    icon: "layers"
services:
  - "Managed OpenShift"
  - "KubeStack+"
featured: false
---

## Accounting is Broken. Exelient is Fixing It.

Accounting has not fundamentally changed in decades. Clients send documents. Accountants manually re-enter data into software. Errors happen. Time is wasted. Everyone is frustrated.

Exelient, based in Sweden, is changing that. They have built an AI-assisted platform that sits in the middle of the accounting workflow — between the client, the accountant, and the accounting software itself. Documents are ingested and understood automatically. Routine tasks are handled by the AI layer. The accountant stays in the loop for review and judgment. The result is dramatically less manual work with the same human accountability that financial services require.

It is a genuinely complex piece of software: microservices architecture, AI inference pipelines, long-running workflows, document processing, real-time collaboration between clients and accountants. And Exelient built all of it with a team of developers — no platform engineers, no DevOps specialists, no dedicated ops function.

That was always the plan. But it meant the infrastructure had to work without anyone managing it.

---

## The Requirements: Uncompromising on EU, Uncompromising on Full Stack

Before evaluating any vendor, Exelient had three non-negotiable requirements.

**EU data residency.** Swedish financial data is subject to GDPR and carries the expectations of the Nordic financial services industry. A US-headquartered cloud provider — regardless of which region they deployed to — was simply not an option. The infrastructure needed to be operated by a European entity, on European soil, with no data routing through US jurisdiction.

**Fully managed, full stack.** Exelient's team are developers. They are not Kubernetes administrators. They did not want to hire platform engineers, and they did not want to learn to operate a cluster. They needed a vendor who would handle everything: the cluster, the upgrades, the observability stack, the secrets management, the CI/CD integration, the databases, the object storage — all of it.

**One cluster, multiple environments.** Rather than provisioning separate clusters for development, staging, and production, Exelient wanted a single cluster with proper namespace-level isolation between environments. Simpler to operate, cheaper to run, and sufficient for their scale.

Stakater Cloud met all three without compromise.

---

## The Stack: Everything Managed, Nothing Left to the Team

The deployment gave Exelient a complete, production-ready platform without a single infrastructure hire.

**The cluster layer** — A single OpenShift cluster in Stakater's EU data center, with isolated namespaces for development, staging, and production. Upgrades, certificate rotation, node health, and capacity management handled entirely by Stakater.

**GitOps delivery** — ArgoCD wired to Exelient's GitHub repositories. Every environment is declared in Git. Deployments are consistent, auditable, and reversible. The team pushes code; ArgoCD handles the rest.

**CI/CD** — Exelient's engineers use GitHub Actions for their build and test pipelines, integrated directly with ArgoCD for deployment. No migration of tooling required — the workflow they already knew, now deploying to a managed platform.

**Secrets management** — OpenBao manages all application secrets. No credentials in environment variables, no secrets in config maps, no manual rotation. The AI platform handles sensitive financial document data; secrets hygiene is not optional.

**Observability** — Prometheus, Grafana, and Loki provide full metrics, dashboards, and log aggregation across all environments. When something behaves unexpectedly, the team has immediate visibility without configuring anything themselves.

**Temporal** — Exelient's AI workflows are long-running and stateful: a document ingestion job might span minutes of AI processing, human review steps, and downstream accounting system writes. Temporal handles workflow orchestration, state persistence, and retry logic. Stakater supported the Temporal deployment as part of the platform setup.

**PostgreSQL** — The primary application database, provisioned and managed by Stakater. Backups, failover, and maintenance handled without customer involvement.

**S3-compatible object storage** — Financial documents, AI model artifacts, and processed outputs stored in managed S3-compatible object storage, co-located in the EU data center alongside the cluster.

---

## What EU Data Residency Actually Means for Financial Software

For a Swedish company processing financial documents on behalf of accountants and their clients, data residency is not a checkbox. It is a commercial and legal necessity.

Every document that passes through Exelient's platform — invoices, receipts, bank statements, payroll records — belongs to someone's business. Their clients and accountants need to know that data never leaves the EU, is never processed by infrastructure owned by a non-EU entity, and is protected by European data law.

Stakater's Netherlands data center, operated by Stakater AB under Swedish and EU jurisdiction, satisfied that requirement cleanly. No legal gymnastics, no jurisdictional carve-outs, no data processing agreements that required reading by external counsel.

It was simply the right infrastructure for a European financial software company.

---

## Developers Who Build, Not Operate

The most direct measure of whether a managed platform is actually working is how much time developers spend thinking about it.

At Exelient, the answer is: almost none. The team writes product code — AI pipelines, accountant workflows, client-facing interfaces, integrations with accounting software. They deploy via GitHub Actions and ArgoCD. They check Grafana when something looks slow. That is the full extent of their infrastructure interaction.

Stakater monitors the cluster proactively. Before a resource constraint becomes an incident, Stakater flags it. Before an OpenShift update has implications for the customer's configuration, Stakater communicates it. The team's Slack is not full of cluster alerts.

This is what "fully managed" should mean — not just that Stakater is responsible for the infrastructure, but that the customer genuinely does not need to think about it.

---

## Built to Scale With the Business

Exelient is at an early but critical point in their growth: the platform is in production, accountancy firms are onboarding, and the AI capabilities are compounding with each new workflow added. The infrastructure needs to grow with the business, not become a bottleneck to it.

The single-cluster, multi-environment model they chose today can expand as the customer base grows — additional node capacity, larger database instances, additional storage — without an architectural migration. Stakater handles the scaling; Exelient focuses on winning the next firm.

For a team that is redefining how accounting works across Sweden and beyond, that is exactly the arrangement they need.
