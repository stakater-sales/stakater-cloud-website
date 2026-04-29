---
company: "European MSP"
industry: "Managed Services / IBM Maximo"
challenge: "Delivering a fully managed IBM Maximo service to enterprise clients without operating underlying Kubernetes infrastructure."
outcome: "Launched a managed Maximo-as-a-Service offering on Stakater Cloud within 30 days. Zero internal platform team required."
metrics:
  - { value: "30 days", label: "Time to launch managed service" }
  - { value: "0", label: "Internal platform engineers needed" }
  - { value: "100%", label: "EU data residency maintained" }
services: ["Managed OpenShift", "SAAP"]
featured: true
---

## The Challenge

Our customer is a European MSP specialising in IBM Maximo deployments for asset-heavy industries — utilities, manufacturing, and transport. They had won several contracts to deliver Maximo as a fully managed service to enterprise clients, but faced an immediate problem: they had no infrastructure team capable of running a production Kubernetes platform.

Their options were stark. Hire a platform engineering team (6–12 months, significant cost), use a hyperscaler like AWS or Azure (complex, expensive, data residency concerns for EU clients), or find a managed platform that could take that burden entirely off their plate.

## Why Stakater Cloud

The MSP evaluated several options including ROSA on AWS and a self-managed OKD cluster. The decision came down to three factors:

**EU data residency.** Their enterprise clients — particularly in utilities and critical infrastructure — required that data stay within the EU. Hyperscaler defaults didn't meet that bar without significant configuration overhead.

**Platform completeness.** IBM Maximo's deployment involves persistent storage, message queuing, and complex RBAC across multiple customer namespaces. They needed GitOps, multi-tenancy, and monitoring out of the box — not as a DIY project on top of bare Kubernetes.

**No platform team required.** With Stakater Cloud's SAAP tier, the MSP got ArgoCD, Tekton, OpenBao, MTO (for tenant isolation), Prometheus, Grafana, and Loki — all pre-configured and managed by Stakater SRE. They could focus their engineers entirely on the Maximo application layer.

## The Implementation

The MSP's first client deployment was running within 30 days of signing with Stakater Cloud.

Stakater provisioned a dedicated OpenShift cluster in the Netherlands data center. MTO (Multi-Tenant OpenShift) handled namespace isolation between the MSP's clients — each client gets their own namespace with quota enforcement, network policies, and RBAC configured automatically.

ArgoCD managed all Maximo deployments via GitOps. The MSP's team defined their Maximo Helm charts in a central Git repository; promotions to staging and production were automated through Tekton pipelines, with OpenBao handling all secrets securely.

Observability was handled entirely by Stakater. Prometheus scraped Maximo application metrics, Grafana surfaced custom dashboards per client, and Loki aggregated logs — all without the MSP writing a single line of observability configuration.

## The Results

The MSP launched their Maximo-as-a-Service offering three months ahead of their original internal-build timeline, and at a fraction of the cost.

With zero internal platform engineers required, the entire operational burden shifted to Stakater's SRE team. Cluster upgrades, security patches, incident response, and capacity planning are all handled by Stakater — the MSP's team focuses exclusively on Maximo.

Their EU clients receive a written commitment on data residency: all data processed and stored within the Netherlands, with GDPR-compliant data processing agreements in place.

The MSP has since onboarded two additional enterprise Maximo clients onto the same Stakater Cloud cluster, using MTO to maintain full isolation between tenants — with no additional infrastructure work required on their end.
