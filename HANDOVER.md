# Handover — website v3

This branch is a **complete rewrite**, not an increment on `main`. The
previous site is Next.js; this one is SvelteKit prerendered to static
files by `@sveltejs/adapter-static`. The two share no files and no git
history.

## Merging

`website_v3` has **no common ancestor** with `main`, so an ordinary
merge would union two unrelated applications and leave the repository
with both stacks side by side. Replace rather than merge:

```bash
git checkout main
git reset --hard origin/website_v3   # main now matches v3 exactly
git push --force-with-lease origin main
```

Keep the old site reachable first if you want a rollback point:

```bash
git branch nextjs-archive origin/main
git push origin nextjs-archive
```

## What runs

Everything is static: no server, no database, no runtime secrets.

| Target | How |
|---|---|
| GitHub Pages | `.github/workflows/deploy.yml`, builds with `BASE_PATH=/<repo>` |
| Vercel / Netlify | build `npm run build`, output `build`, no `BASE_PATH` |
| Self-host | `docker compose up -d --build` (nginx, non-root, read-only) |

`npm run check` (types + a11y), `npm run build`, and
`npm run check:links` (dead-link scan) all pass on this branch.

## Forms

Contact and training requests go to `aiforumbd@gmail.com` through
**EmailJS**, called from the browser — there is no backend. The
service, template, and public key are in `src/lib/config.ts`; they are
public-by-design and are the same account the previous site used.
Override them with `VITE_EMAILJS_*` build variables if you move to
another account.

**One action is outstanding, and it is a real security control:** in
the EmailJS dashboard, under **Account → Security → Allowed origins**,
add the production domains. That allowlist is empty by default, and it
is the only thing stopping a third party from sending mail through the
account with the credentials visible in any bundle. Also confirm the
template's *To* field is a literal address rather than `{{to_email}}`,
so the account cannot be used as an open relay.

## Before going live on a custom domain

Update `SITE_URL` in `src/lib/config.ts` and the sitemap URL in
`static/robots.txt`; both currently point at the GitHub Pages address
and feed the canonical tags, Open Graph URLs, and `sitemap.xml`.

`CONTENT-TODO.md` lists the content the team can still supply (dates,
the professionals-trained figure, a portrait). Nothing there blocks a
deploy — the UI omits whatever is missing instead of showing a
placeholder.
