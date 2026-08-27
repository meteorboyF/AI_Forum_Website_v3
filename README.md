# AI Forum Bangladesh — Website

The AI Forum Bangladesh website (aiforumbd.org), rebuilt as a fully
static site: **SvelteKit** (adapter-static, everything prerendered) +
**Tailwind CSS v4** + **TypeScript**. No database, no backend server.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & checks

```bash
npm run build        # static output in build/
npm run check        # svelte-check (types)
npm run check:links  # fails on any dead internal link or href="#"
npm run preview      # serve the production build locally
```

## Deployment

### GitHub Pages (configured)

Push to `main`. The workflow in `.github/workflows/deploy.yml` builds
with `BASE_PATH=/<repo-name>`, runs the link check, and deploys to
Pages. One-time setup: repository **Settings → Pages → Source: GitHub
Actions**.

### Vercel / Netlify / custom domain

Build command `npm run build`, output directory `build`, no BASE_PATH.
Security headers ship via `vercel.json` (Vercel) or `static/_headers`
(Netlify). When moving to `aiforumbd.org`, update `SITE_URL` in
`src/lib/config.ts` and the sitemap URL in `static/robots.txt`.

### Docker (self-hosting)

```bash
docker compose up -d --build
```

Serves on `http://127.0.0.1:8080`; override with `HOST_PORT=9000 docker
compose up -d`. The port is bound to loopback deliberately — put a
TLS-terminating reverse proxy in front rather than exposing the
container directly.

The image is two-stage: Node builds the site, then
`nginx-unprivileged` serves the prerendered files as uid 101. Nothing
executes at runtime, so the container runs read-only with all
capabilities dropped. Unlike GitHub Pages, nginx sets the security
headers in `static/_headers` as real response headers, including
`X-Frame-Options: DENY`.

Caching is set per asset type: hashed bundles in `/_app/immutable/`
for a year, images for a day, HTML always revalidated so a redeploy is
visible immediately.

Build arguments (all optional): `BASE_PATH` to serve under a sub-path,
and `VITE_EMAILJS_SERVICE_ID` / `VITE_EMAILJS_TEMPLATE_ID` /
`VITE_EMAILJS_PUBLIC_KEY` to send form mail through a different
EmailJS account than the default in `src/lib/config.ts`.

## Where things live

| Path | What |
|---|---|
| `src/lib/data/` | All site content as typed modules: events, press, courses, advisors, team, and partners. Edit content here, not in pages. |
| `src/lib/components/` | Shared UI: nav, footer, SEO tags, forms, motion primitives (Reveal, CountUp, Marquee, HeroCanvas). |
| `src/routes/` | One folder per page. |
| `static/images/` | Optimised WebP assets (originals were converted at ~80 quality, capped widths). |
| `CONTENT-TODO.md` | Every `{{PLACEHOLDER}}` awaiting a real fact from the team. |

## Content rules

- British spelling, no em dashes.
- Never invent statistics, quotes, winners, or client names. Unknown
  facts are `{{TOKEN}}` placeholders which render with a visible amber
  marker (see `CONTENT-TODO.md`).
- Derived statistics (client counts, media mentions) are computed from
  the datasets in `src/lib/data/stats.ts`.

## Security posture

- No secrets in the repo. The only third-party call is the Web3Forms
  form endpoint; its access key is public-by-design and must be
  domain-restricted in the Web3Forms dashboard.
- Content-Security-Policy is injected into every prerendered page by
  SvelteKit (`svelte.config.js`, hash mode); additional headers via
  `vercel.json` / `static/_headers` on hosts that support them.
- Fonts are self-hosted (`@fontsource`), no CDN origins.
- All outbound links use `rel="noopener noreferrer"`.
- No `{@html}` anywhere; all text goes through Svelte's auto-escaping.
- Forms validate client-side, cap lengths, and carry a honeypot field.

## Accessibility & motion

- `prefers-reduced-motion` disables the hero canvas animation, count-up,
  reveals, and the logo marquee (which falls back to a wrapped list).
- Keyboard navigable, visible focus states, alt text on every image,
  skip-to-content link.
