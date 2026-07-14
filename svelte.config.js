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
		paths: { base },
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
				'connect-src': ['self', 'https://api.web3forms.com'],
				'form-action': ['self', 'https://api.web3forms.com'],
				'object-src': ['none'],
				'base-uri': ['self']
			}
		}
	}
};

export default config;
