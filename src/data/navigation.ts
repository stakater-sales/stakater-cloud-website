export const nav = [
  {
    label: 'Products',
    children: [
      { label: 'Managed OpenShift', href: '/products/managed-openshift', description: 'Dedicated cluster, fully managed by Stakater' },
      { label: 'SAAP', href: '/products/saap', description: 'Full developer platform on managed OpenShift' },
    ],
  },
  {
    label: 'Solutions',
    children: [
      { label: 'For MSPs & ISVs', href: '/solutions/msps-isvs', description: 'Deliver managed services without running the platform' },
      { label: 'For SaaS Companies', href: '/solutions/saas', description: 'Ship product faster, stop managing infrastructure' },
      { label: 'For Regulated Industries', href: '/solutions/regulated', description: 'EU data residency and compliance out of the box' },
    ],
  },
  { label: 'Why Stakater Cloud', href: '/why-stakater-cloud' },
  { label: 'Pricing', href: '/pricing' },
  {
    label: 'Resources',
    children: [
      { label: 'Documentation', href: 'https://docs.stakater.com', external: true },
      { label: 'Blog', href: '/blog' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'FAQ', href: '/faq' },
      { label: 'Referral Program', href: '/referral' },
    ],
  },
];

export const footerLinks = {
  Products: [
    { label: 'Managed OpenShift', href: '/products/managed-openshift' },
    { label: 'SAAP', href: '/products/saap' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Solutions: [
    { label: 'For MSPs & ISVs', href: '/solutions/msps-isvs' },
    { label: 'For SaaS Companies', href: '/solutions/saas' },
    { label: 'For Regulated Industries', href: '/solutions/regulated' },
  ],
  Resources: [
    { label: 'Documentation', href: 'https://docs.stakater.com' },
    { label: 'Blog', href: '/blog' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Referral Program', href: '/referral' },
  ],
  Company: [
    { label: 'Why Stakater Cloud', href: '/why-stakater-cloud' },
    { label: 'About', href: 'https://stakater.com/about' },
    { label: 'Contact Us', href: '/contact' },
  ],
};

export const compareLinks = [
  { label: 'vs ROSA', href: '/compare/rosa-alternative' },
  { label: 'vs EKS', href: '/compare/eks-alternative' },
  { label: 'vs AKS', href: '/compare/aks-alternative' },
  { label: 'vs GKE', href: '/compare/gke-alternative' },
];
