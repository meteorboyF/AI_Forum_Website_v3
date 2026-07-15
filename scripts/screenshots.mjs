/**
 * Visual QA: capture full-page screenshots of every primary page at
 * desktop (1440px) and mobile (390px) widths using the system Chrome.
 *
 * Usage: node scripts/screenshots.mjs <outDir> [baseUrl]
 * Serve the production build first (npx vite preview).
 */
import puppeteer from 'puppeteer-core';
import { mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const OUT = process.argv[2] ?? 'shots';
const BASE = process.argv[3] ?? 'http://localhost:4174';

const CHROME_PATHS = [
	'C:/Program Files/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
	'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
	'C:/Program Files/Microsoft/Edge/Application/msedge.exe'
];
const chrome = CHROME_PATHS.find((p) => existsSync(p));
if (!chrome) throw new Error('A Chrome or Edge executable was not found');

const pages = [
	['home', '/'],
	['about', '/about-us/'],
	['events', '/events/'],
	['academy', '/our-work/ai-academy/'],
	['hackathon', '/hackathon/'],
	['innovation', '/our-work/innovation-ecosystem/'],
	['career', '/our-work/career-care/'],
	['news', '/news/'],
	['corporate', '/corporate-training/'],
	['contact', '/contact-us/']
];

const widths = [
	['1440', { width: 1440, height: 900 }],
	['390', { width: 390, height: 844 }]
];

mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({ executablePath: chrome, headless: true });
const page = await browser.newPage();

for (const [wname, viewport] of widths) {
	await page.setViewport({ ...viewport, deviceScaleFactor: 1 });
	for (const [name, path] of pages) {
		await page.goto(BASE + path, { waitUntil: 'networkidle0', timeout: 60000 });
		// let entrance animations finish
		await page.evaluate(() => new Promise((r) => setTimeout(r, 1400)));
		await page.evaluate(async () => {
			// deterministic capture: force reveals visible (headless teleport
			// scrolling under-triggers IntersectionObserver), freeze the
			// marquee, and walk the page so lazy images load
			document.querySelectorAll('.reveal').forEach((e) => e.classList.add('is-visible'));
			document.querySelectorAll('.marquee-track').forEach((t) => (t.style.animationPlayState = 'paused'));
			for (let y = 0; y < document.body.scrollHeight; y += 700) {
				window.scrollTo(0, y);
				await new Promise((r) => setTimeout(r, 80));
			}
			window.scrollTo(0, 0);
			// wait until every image has actually decoded
			await Promise.all(
				[...document.images].map((i) => (i.loading = 'eager', i.decode().catch(() => {})))
			);
			await new Promise((r) => setTimeout(r, 400));
		});
		const file = join(OUT, `${name}-${wname}.png`);
		await page.screenshot({ path: file, fullPage: true });
		console.log('shot', file);
	}
}

await browser.close();
