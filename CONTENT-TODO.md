# Content TODO

Every `{{TOKEN}}` in the codebase marks a fact only the AI Forum
Bangladesh team can supply. Tokens render on the site with a visible
dashed amber marker, so nothing fake ships silently. Replace the value
in the file listed, rebuild, and the marker disappears.

**Rule the build follows: no statistic, quote, winner, or client name
was invented. If it is not documented in the newsletter, the Links doc,
the redesign brief, or the old site's data files, it is a token.**

## Numbers

| Token | Where | What is needed |
|---|---|---|
| `{{PROFESSIONALS_TRAINED}}` | `src/lib/data/stats.ts` | Total professionals trained across all programmes. Replace `value: null, token: ...` with `value: <number>`. |

The other four impact numbers (clients, events, university partners,
media features) are **derived automatically** from the datasets and
grow as you add events/press items. Review that the derived counts feel
right; adjust labels in `stats.ts` if needed.

## Dates

| Token | Where | What is needed |
|---|---|---|
| `{{OGSB_EVENT_DATE}}` | `src/lib/data/events.ts` | Date of the OGSB Hospital & IRCH training. |
| `{{BSP_EVENT_DATE}}` | `src/lib/data/events.ts` | Date of the BSP full-day workshop. |
| `{{BUSINESS_EXCELLENCE_DATE}}` | `src/lib/data/events.ts`, `src/lib/data/press.ts` | Date of the AI for Business Excellence seminar. |
| `{{BEPRC_EVENT_DATE}}` | `src/lib/data/events.ts` | Date of the BEPRC training. |
| `{{UNICEF_EVENT_DATE}}` | `src/lib/data/events.ts` | Date of the UNICEF crash course. |
| `{{AIMS_EVENT_DATE}}` | `src/lib/data/events.ts` | Date of the AIMS Lab training. |

Also set each event's `sortKey` (YYYYMMDD) once its date is known so
the archive sorts correctly.

## About page

| Token | Where | What is needed |
|---|---|---|
| `{{FOUNDING_YEAR}}` | `src/lib/data/team.ts` | Year the organisation was founded. |
| `{{FOUNDERS}}` | `src/routes/about-us/+page.svelte` | Who founded the organisation (names or a short phrase). |
| `{{FIRST_TRAINING_YEAR}}` | `src/lib/data/team.ts` | Year of the first corporate training. |
| `{{MAMUN_MISSION_QUOTE}}` | `src/lib/data/team.ts` | A short mission quote from Prof. Khondaker A. Mamun. |
| `{{MAMUN_PHOTO}}` | `src/lib/data/team.ts` | A portrait photo. Drop it at `static/images/about/mamun.webp` and set `image: 'about/mamun'`. |

## Hackathon recaps

| Token | Where | What is needed |
|---|---|---|
| `{{CODECURE_2025_TEAMS}}` / `_WINNER` / `_PROBLEMS` | `src/lib/data/hackathons.ts` | Teams participated, winning team, problems solved. Also confirm CodeCure 2025 actually ran on 18 May 2025. |
| `{{CODECURE_2024_TEAMS}}` / `_WINNER` / `_PROBLEMS` | same | As above for the DU edition. |
| `{{AGROHACK_TEAMS}}` / `_WINNER` | same | As above. |
| `{{EDUTECH_TEAMS}}` / `_WINNER` | same | As above. |
| `{{FINHACK_TEAMS}}` / `_WINNER` | same | As above. |

Note: the old site listed dollar prize pools ($5,000 etc.) and outside
organisers for these events. Those could not be verified, so they were
not carried over. If they were real, add them back to `hackathons.ts`.

## Forms (required before launch)

| Item | Where | What is needed |
|---|---|---|
| `{{WEB3FORMS_ACCESS_KEY}}` | `src/lib/config.ts` | Create a free key at web3forms.com pointing at the org inbox, then **enable domain restriction** in the Web3Forms dashboard so the key only works from your domain. Until this is set, form submissions show their error state (they never pretend to succeed). |

## Other content to supply when available

- **Partner/client logos.** Everything renders as text lockups from
  `src/lib/data/partners.ts`. Drop SVG/PNG logos into
  `static/images/partners/` and extend the partner entries with a
  `logo` field plus rendering support (or just ask for the swap).
- **Publication wordmarks** for the News & Media page, same approach.
- **Course statuses.** All institutional courses currently say
  "Available on Request" and startup-track courses say "Upcoming",
  in `src/lib/data/courses.ts`. Correct any that are actually enrolling.
- **Testimonials** in `src/lib/data/testimonials.ts` were ported from
  the previous site. Verify they are real people who consented before
  a public launch.
- **AI Roadshow photos** for the Innovation Ecosystem spotlight
  (currently uses an old programme banner).
- **Grameenphone and DSE**: both engagements are cited across the site
  from the brief. If either client requires approval for public naming,
  confirm it.
- **SITE_URL** in `src/lib/config.ts` and the sitemap URL in
  `static/robots.txt`: switch to `https://aiforumbd.org` when the
  domain is pointed at this build.
