import { SITE_URL } from '$lib/config';

export const prerender = true;

const routes = [
	'/',
	'/about-us/',
	'/our-work/ai-academy/',
	'/our-work/innovation-ecosystem/',
	'/our-work/career-care/',
	'/events/',
	'/corporate-training/',
	'/news/',
	'/contact-us/',
	'/terms/',
	'/privacy/',
	'/cookies/'
];

export function GET() {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `\t<url><loc>${SITE_URL}${r}</loc></url>`).join('\n')}
</urlset>`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
}
