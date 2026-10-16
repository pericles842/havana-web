import type { APIRoute } from 'astro';

// robots.txt generado con la dirección de src/data/site.ts (la misma del sitemap)
export const GET: APIRoute = ({ site }) =>
	new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap-index.xml', site).href}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
