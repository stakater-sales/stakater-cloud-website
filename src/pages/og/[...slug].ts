export const prerender = false;

export async function GET({ request }: { request: Request }) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title') || 'Stakater Cloud';
  const sub = url.searchParams.get('sub') || 'Managed OpenShift, hosted in Europe';

  const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#1A0D32"/>
  <rect x="0" y="0" width="6" height="630" fill="#FF5623"/>
  <circle cx="1100" cy="100" r="300" fill="rgba(255,86,35,0.08)"/>
  <text x="80" y="260" font-family="system-ui,sans-serif" font-size="56" font-weight="700" fill="white">${title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>
  <text x="80" y="330" font-family="system-ui,sans-serif" font-size="24" fill="rgba(255,255,255,0.6)">${sub.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>
  <text x="80" y="540" font-family="system-ui,sans-serif" font-size="20" font-weight="700" fill="#FF5623">stakater.cloud</text>
  <text x="80" y="570" font-family="system-ui,sans-serif" font-size="16" fill="rgba(255,255,255,0.4)">Managed OpenShift · Netherlands · Red Hat Premier Partner</text>
</svg>`;

  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml', 'Cache-Control': 'public, max-age=31536000' },
  });
}
