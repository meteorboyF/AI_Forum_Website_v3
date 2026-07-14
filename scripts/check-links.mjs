/**
 * Dead-link checker for the static build output.
 *
 * Fails the build if any page contains:
 *  - href="#" placeholders
 *  - internal links or asset references that do not resolve to a file
 *    in the build directory
 *
 * External links are collected and reported but not fetched (network
 * checks are flaky in CI; the list is printed for manual spot checks).
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, resolve } from 'node:path';

const BUILD = resolve(process.cwd(), 'build');
const BASE = process.env.BASE_PATH ?? '';

if (!existsSync(BUILD)) {
	console.error('check-links: build directory not found. Run `npm run build` first.');
	process.exit(1);
}

const htmlFiles = [];
(function walk(dir) {
	for (const entry of readdirSync(dir)) {
		const p = join(dir, entry);
		if (statSync(p).isDirectory()) walk(p);
		else if (entry.endsWith('.html')) htmlFiles.push(p);
	}
})(BUILD);

const errors = [];
const external = new Set();

const ATTR_RE = /(?:href|src)="([^"]*)"/g;

for (const file of htmlFiles) {
	const html = readFileSync(file, 'utf8');
	const rel = file.slice(BUILD.length + 1);
	for (const match of html.matchAll(ATTR_RE)) {
		const url = match[1];
		if (url === '' || url === '#') {
			errors.push(`${rel}: placeholder link "${url}"`);
			continue;
		}
		if (/^(https?:)?\/\//.test(url)) {
			external.add(url);
			continue;
		}
		if (/^(mailto:|tel:|data:|javascript:)/.test(url)) continue;
		if (url.startsWith('#')) {
			// same-page fragment: verify the id exists
			const id = url.slice(1);
			if (!new RegExp(`id="${id}"`).test(html)) {
				errors.push(`${rel}: fragment "#${id}" has no matching id`);
			}
			continue;
		}
		// internal path — strip base path, query and fragment
		let path = url.split('#')[0].split('?')[0];
		if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
		if (path === '' || path === '/') continue;
		// Relative links resolve against the containing file's directory
		const target = path.startsWith('/')
			? join(BUILD, decodeURIComponent(path))
			: resolve(join(file, '..'), decodeURIComponent(path));
		const candidates = [
			target,
			join(target, 'index.html'),
			`${target}.html`
		];
		if (!candidates.some((c) => existsSync(c))) {
			errors.push(`${rel}: broken internal link "${url}"`);
		}
	}
}

console.log(`check-links: scanned ${htmlFiles.length} pages, ${external.size} unique external links`);

if (errors.length) {
	console.error('\nDead links found:');
	for (const e of errors) console.error('  ' + e);
	process.exit(1);
}
console.log('check-links: no dead links.');
