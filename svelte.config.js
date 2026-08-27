import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// When deploying to GitHub Pages under a project path, CI sets
// BASE_PATH="/AI_Forum_Website_v3". Local dev and root-domain deploys
// (Vercel/Netlify/custom domain) leave it empty.
const base = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			strict: true
		}),
		// relative: false makes every URL absolute (with base), so the
		// GitHub Pages 404.html works when served from any missing path.
		paths: { base, relative: false },
		prerender: {
			handleHttpError: 'fail',
			handleMissingId: 'fail'
		},
		// Injected as a <meta http-equiv> tag on every prerendered page.
		// Script hashes are generated automatically for SvelteKit's inline
		// hydration script.
		csp: {
			mode: 'hash',
			directives: {
				'default-src': ['self'],
				'script-src': ['self'],
				'style-src': ['self', 'unsafe-inline'],
				'img-src': ['self', 'data:'],
				'font-src': ['self'],
				'connect-src': ['self', 'https://api.emailjs.com'],
				// Every form is submitted with fetch(), never a native POST,
				// so no destination needs to be allowed here.
				'form-action': ['none'],
				// frame-ancestors is header-only and GitHub Pages cannot set
				// headers; vercel.json carries X-Frame-Options for that host.
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
};

export default config;
