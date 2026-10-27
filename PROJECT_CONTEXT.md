# Project context — Manas Maydeo portfolio

## What this is
Full-stack personal portfolio (FARM): React + Vite + JS frontend.
Positioning: product designer & frontend engineer in Berlin, "numbered editorial monograph" design language.

## Design system
- Source of truth: `design_guidelines.md` (design_agent, brand skill `wired`, light mode only).
- Locked tokens in `src/index.css`: warm paper background, ink foreground, terracotta `--accent`, radius 0.
- Fonts: Playfair Display (`font-display`), Lora (`font-serif`), Inter (`font-sans`).
- Helpers added at end of index.css: `.font-display`, `.text-balance`, `.text-pretty`, `.link-underline`, `.tap-target`.
- No shadows, no rounded corners, no gradients, hairlines only. Ghost section numerals behind `SectionHeader`.

## Routes
| Route | File | Notes |
|---|---|---|
| `/` | `pages/Index.tsx` | Hero + `01 — Selected Work` index (hover preview) + closing CTA |
| `/about` | `pages/About.tsx` | Bio/portrait split, capabilities, `03 — Experience` (`#experience`), `04 — Testimonials` |
| `/contact` | `pages/Contact.tsx` | Validated form → `POST /api/contact`, direct details + live Berlin clock |
| `/work/:slug` | `pages/ProjectDetail.tsx` | Case-study reading column, pull quote, stats, gallery, 404 state |
| `*` | `pages/NotFound.tsx` | Starter page, unchanged |

Shell: `components/site/SiteLayout.tsx` (skip link, masthead, main, black footer) + `Masthead.tsx` (mobile overlay menu, Escape close), `Footer.tsx`, `SectionHeader.tsx`, `CaseIndexRow.tsx`.

## Backend
`backend/server.py` (only module). Collections seeded on startup when empty:
`profile`, `projects`, `experience`, `testimonials`; `messages` written by the contact form.
Routes: `/api/` health, `/api/profile`, `/api/projects`, `/api/projects/{slug}`, `/api/experience`, `/api/testimonials`, `POST /api/contact`.
Tests: `backend/tests/test_api.py` (11 tests, all passing) + `conftest.py` harness.

## SEO
- `index.html`: title, description, canonical, OG/Twitter, Person + WebSite JSON-LD, noscript fallback.
- `public/robots.txt`, `public/sitemap.xml` (static routes + 4 case studies).
- `hooks/use-seo.ts`: per-route title/description/canonical/OG + per-page JSON-LD (ProfilePage, CreativeWork).
- Semantic landmarks, one `h1` per page, `time` element, descriptive alt text, lazy images.

## Data note
All copy lives in the seed constants in `backend/server.py` (placeholder persona). Editing there re-seeds a fresh database only — existing DBs keep old docs; change via Mongo update or drop the collections.

## Integration status
Complete: content API, contact persistence, all four routes wired to the API. No auth (not requested).
