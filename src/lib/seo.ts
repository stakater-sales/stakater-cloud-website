export const siteConfig = {
  name: 'Stakater Cloud',
  url: 'https://www.stakater.cloud',
  description: 'Managed OpenShift hosted in Europe. Production-ready in under 15 minutes. Operated by Red Hat Premier Partners. GDPR, DORA & NIS2 compliant.',
  ogImage: '/og-default.png',
  twitter: '@stakater',
};

export function buildTitle(title: string): string {
  if (!title) return siteConfig.name;
  return `${title} | ${siteConfig.name}`;
}

export function buildCanonical(path: string): string {
  return `${siteConfig.url}${path}`;
}
