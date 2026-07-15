# Content TODO

The site never renders a placeholder to visitors. When a fact is
unconfirmed, the page simply omits that clause or element. This file
lists everything the team can supply to make the site say more; add
the value in the file shown, rebuild, and the content appears.

**Standing rule: no statistic, quote, winner, date, or client name is
invented. If it is not documented in the newsletter, the Links doc,
the redesign brief, or the old site's data, it is omitted until you
supply it.**

## Required before launch

| Item | Where | What to do |
|---|---|---|
| Web3Forms access key | `src/lib/config.ts` → `WEB3FORMS_ACCESS_KEY` | Create a free key at web3forms.com pointing at the org inbox, replace the placeholder, and **enable domain restriction** in the Web3Forms dashboard. Until set, forms show their error state (they never pretend to succeed). |

## Numbers

| Item | Where | What to do |
|---|---|---|
| Professionals trained | `src/lib/config.ts` → `PROFESSIONALS_TRAINED` | Set to the real total (e.g. `500`). It then appears in the homepage hero sentence and as a fifth impact stat. While `null` it is omitted, never shown as 0. |

The three impact-bar figures that do show (documented programmes, client
organisations, and press features)
are derived automatically from the datasets and grow as entries are
added.

## Dates (currently omitted from display)

Add a `dateLabel` (and correct the `sortKey`, format YYYYMMDD) in
`src/lib/data/events.ts` for: OGSB Hospital & IRCH training, BSP
workshop, AI for Business Excellence seminar, BEPRC training, UNICEF
crash course, AIMS Lab training. Same for the matching press items in
`src/lib/data/press.ts` (the three Business Excellence articles).

## About page

| Item | Where | What to do |
|---|---|---|
| Founding year + first-training year | `src/lib/data/team.ts` → `milestones` | The first and third timeline entries use phase labels ("The beginning", "Early growth"); replace `dateLabel` with real years. |
| Mamun mission quote | `src/lib/data/team.ts` → `leadTrainer.quote` | Set to a real quote; the About page renders the pull-quote block only when present. |
| Mamun portrait | `src/lib/data/team.ts` → `leadTrainer.image` | Drop a photo at `static/images/about/mamun.webp` and set `image: 'about/mamun'`. A monogram mark shows until then. |

## Nice to have

- **Partner/client logos**: everything renders as text lockups from
  `src/lib/data/partners.ts`; supply SVG/PNG files to upgrade.
- **Publication wordmarks** for News & Media, same approach.
- **Course statuses** in `src/lib/data/courses.ts`: institutional
  courses say "Available on Request", startup track says "Upcoming";
  correct any that are actually enrolling.
- **Testimonials** in `src/lib/data/testimonials.ts` were ported from
  the previous site; verify the people consented before wide use.
- **AI Roadshow photos** for the Innovation Ecosystem spotlight (it
  currently uses a typographic treatment; a real classroom photo from a
  divisional visit would be stronger).
- **SITE_URL** in `src/lib/config.ts` + `static/robots.txt`: switch to
  `https://aiforumbd.org` when the domain points at this build.
