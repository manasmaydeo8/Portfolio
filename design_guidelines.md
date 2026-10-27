# Design guidelines

SOURCE OF TRUTH for this project's look. Implement every screen from this file and follow it over generic taste and template defaults; new screens reuse this shell, these components and this spacing. Change the look only through design_agent (a redesign), never by editing index.css tokens. Keep data and actions connected to the real backend.

## Visual signature
"Numbered editorial monograph" — the portfolio reads like a printed studio monograph: warm off-white paper, near-black ink, hairline rules, and every major section opens with a small terracotta section number ("01 — Selected Work") beside a large Playfair Display headline. Signature element: oversized ghosted section numerals (Playfair, ~160px, 8% opacity ink) that sit behind each section head and echo in the case-study index rows. Hierarchy rule: serif narrates (display + body), sans structures (labels, nav, buttons, metadata). Spatial rule: 12-column grid, max 1200px content, asymmetric splits (7/5 or 5/7), 96–128px section rhythm, 1px hairlines instead of cards. One useful interaction: case-study index rows reveal a small floating image preview that follows the cursor on hover (desktop only), with a keyboard-accessible fallback — the row's thumbnail is always visible on focus and on mobile.

## Applied theme
<theme>
The project theme is LOCKED in frontend/src/index.css (brand skill: Wired, editorial-magazine).
Never write --primary/--background/--font-* or Google-Fonts imports yourself and never pick a different color story or font pair — build on these tokens with semantic classes (bg-primary, text-muted-foreground, border-border, --shadow-md). To change the look, call design_agent instead of editing tokens.
Tokens (HSL): primary 30 12% 11% · background 36 25% 97% · foreground 30 12% 11% · accent 16 58% 42% · card 36 25% 99% · radius 0rem · dark background 0 0% 3.9%
Mode: light — the `:root` tokens are live; `.dark` exists only for an optional toggle. Do not add a toggle unless the user asks.
Fonts (already imported in index.css): sans Inter, sans-serif · display/headings Playfair Display, serif — apply with `font-family: var(--font-display)` (append a `.font-display` utility to index.css once, then use that class) · serif Lora, serif (`font-serif`) · mono JetBrains Mono, monospace (`font-mono`).
Composition, components and spacing come from design_guidelines.md (this product's own design), not from the reference brand's stock layout.
</theme>

## Shell and navigation
Light mode only. Sticky 56px masthead on bg-background: left = wordmark "Mara Ellison" in Playfair 20px; center/right nav = uppercase 13px/700 sans links (Work, About, Experience, Contact) with 0.4px tracking, active link gets 2px terracotta underline; right = "Get in touch" black rectangular button (h-10 px-5, radius 0). Masthead bottom border 1px border-border. Content max-width 1200px centered, px-24. Footer is the single black surface (bg-foreground, text-background): contact repeat, social links, © line. No sidebar.

## Screens
### / — Entry: establish the person, the craft, and route visitors into case studies within one scroll.
- Layout: Hero (not full-viewport): eyebrow 'Product Designer & Frontend Engineer — Berlin', Playfair 64px headline 'Design that ships, code that holds.', one serif 20px intro sentence, black button 'View selected work' + text link 'Download CV'. Below, Section 01 — Selected Work: vertical index of 4 case-study rows split by hairlines; each row = ghost numeral, Playfair 32px project title, sans 14px metadata (year, role, company), small terracotta arrow. Row hover: bg-muted tint + cursor-following image preview (200×140).
- States: Rows are static content from MongoDB `projects` (featured: true); loading shows 4 hairline skeleton rows; empty shows bg-muted block with serif line 'Case studies coming soon.'
- Responsive: Under 768px: nav collapses to a full-width overlay menu opened by a 44px hamburger (aria-expanded, Escape closes); case rows stack title above metadata, preview image becomes a static 16:9 thumbnail above each title; hero type drops to 40px.

### /work/:slug — Deep-dive narrative proving craft: problem, process, outcome.
- Layout: Back link '← All work'. Header: eyebrow (client · year · role), Playfair 48px title, serif 20px summary. Full-width hero image (3:2). Body in a 720px reading column: numbered sub-sections (The brief, Approach, Decisions, Outcome) in serif 18px/1.7 with sans uppercase sub-heads; pull-quote in Playfair 28px italic with terracotta left rule; inline '2-col' image pairs breaking the column at full 1200px width. Outcome stats row: 3 hairline-separated figures (e.g. '−38% task time') with tabular-numeral sans 32px.
- States: Data from GET /api/projects/:slug; 404 renders serif 'This case study doesn't exist (yet).' with link home; images lazy-load with 1px border-border placeholder.
- Responsive: Column becomes full-width px-16; image pairs stack; stats stack vertically with hairlines between.

### /about — Credibility: who the person is, what they've done, what others say.
- Layout: Section 02 — About: asymmetric 7/5 split — left serif 18px bio paragraphs, right portrait image (4:5, 1px border) with sans caption. Skills as a two-column hairline list (no progress bars): sans 15px items grouped under uppercase heads (Design / Engineering / Tools). Section 03 — Experience: vertical timeline rows split by hairlines: role in Playfair 24px, company + dates in sans 14px, one serif line of scope. Section 04 — Testimonials: single-column serif 22px quotes with sans attribution, separated by hairlines, no cards, no avatars grid.
- States: Static content from MongoDB collections `profile`, `experience`, `testimonials`; skeleton rows while loading.
- Responsive: About split stacks (portrait first); experience rows keep structure; skills columns collapse to one.

### /contact — Conversion: a working contact form plus direct channels.
- Layout: Playfair 48px 'Let's talk.' Serif 18px line stating availability ('Currently open to staff/senior product design roles from Q3 2025.'). Two-column 7/5: left = form (Name, Email, Subject select: Full-time role / Freelance project / Other, Message textarea), black submit button h-11 full-width; right = hairline-separated direct details (email, LinkedIn, GitHub, location, local time) in sans 14px with uppercase labels.
- States: POST /api/contact → MongoDB `messages`; inline zod validation with terracotta error text under fields; submitting = disabled button 'Sending…'; success replaces form with serif confirmation 'Thank you — I'll reply within two working days.'; server error shows retry line above button. All states announced via aria-live.
- Responsive: Columns stack; direct details move below the form.

## Components
- Masthead: 56px, bg-background, 1px border-b border-border; wordmark Playfair 20px; nav links uppercase 13px/700 sans, 0.4px tracking, active = 2px terracotta underline; mobile = 44px hamburger opening full-screen overlay (bg-background, Playfair 32px links).
- SectionHeader: eyebrow row 'NN — LABEL' (terracotta number, sans 13px/700 uppercase) + Playfair 32–48px headline + optional ghost numeral behind (Playfair 160px, ink at 8% opacity); bottom 1px hairline.
- CaseIndexRow: 88px min-height, py-6, hairline-divided; title Playfair 32px, metadata sans 14px text-muted-foreground, terracotta ArrowRight 20px; hover bg-muted (120ms); cursor-following 200×140 preview on desktop, static thumbnail on focus/mobile.
- Button primary: bg-primary text-primary-foreground h-11 px-5 radius-0, sans 16px/700, 0.3px tracking; hover inverts to white with 1px border-foreground; focus 2px terracotta outline.
- Button secondary/text link: sans 15px/700 with 1px underline; hover underline 2px terracotta.
- Input/Textarea/Select: h-11 (textarea 140px), radius 0, 1px border-input, bg-background, sans 15px; label uppercase 13px/700 above; focus 2px terracotta outline; error text terracotta 14px.
- PullQuote: Playfair 28px italic, 3px terracotta left rule, pl-6, my-12.
- StatFigure: sans 32px tabular numerals + uppercase 13px label, hairline-separated 3-up row.
- Footer: bg-foreground text-background, py-16, Playfair 32px sign-off, sans 14px links, hairline (white 20%) above legal line.

## Typography and spacing
Fonts (typographyBrandId wired): Playfair Display for display serif (hero 64/1.05/-0.5px, page titles 48/1.1/-0.4px, section 32/1.2, pull-quote 28 italic); Lora serif for body narration (18px/1.7, intro 20px/1.6); Inter for all structural text — nav/labels/buttons 13–16px/700 uppercase 0.3–0.4px tracking, metadata 14px/400, stats 32px tabular-nums. Spacing: 4px base; section rhythm 96px desktop / 64px mobile; row padding 24px vertical; grid gap 24px; content max 1200px, reading column 720px. Breakpoints: 768px and 1024px. Radius 0 everywhere; depth from 1px border-border hairlines only, no shadows.

## Imagery
Typography and hairlines carry the identity; photography is limited to case-study evidence and the portrait. Selected one fitting asset (design work on a monitor — warm wood desk) for a case-study hero; the other returned candidates were rejected (dark neon/moody lighting clashes with the warm off-white paper canvas). Case-study heroes may also be the designer's own exported UI shots; specify 3:2 crop, 1px border-border, subtle hover scale 1.02 (200ms ease-out, disabled under prefers-reduced-motion).
- No selected image assets.

## Accessibility and states
- Verify ink-on-paper contrast (#1F1B16 on #FAF7F2) and terracotta link contrast before release; darken terracotta for small text if needed.
- Focus: 2px terracotta outline on all interactive elements, never removed.
- Cursor-following preview is decorative (aria-hidden); the row itself is a real link with visible focus state and always-visible thumbnail on focus.
- Mobile menu: aria-expanded on trigger, Escape closes, focus moves into overlay.
- Form errors: aria-describedby per field, aria-live polite for submit status.
- All images get descriptive alt text naming the project, not 'screenshot'.
- prefers-reduced-motion disables hover scale, preview follow, and fade-ins.

## Avoid
- No purple gradients, glassmorphism, or drop shadows — hairlines and the black footer carry all depth.
- No rounded-pill SaaS buttons or inputs; radius is 0 everywhere.
- No four-card dashboard grids or boxed testimonial cards; lists are hairline-divided rows.
- No dark-mode or tinted section bands; the paper canvas stays warm off-white.
- No emoji icons; icons are lucide-react at 20px, ink or terracotta only.
- No stock 'team meeting' photography; imagery is the person's own work and portrait.
- No animated staggered entrances; a single 200ms fade is the only load motion.

## Build order
- Set up theme tokens: apply warm-paper palette (background 36 25% 97%, foreground 30 12% 11%, primary 30 12% 11%, accent terracotta 16 58% 42%), radius 0, fonts Playfair Display / Lora / Inter; light mode only.
- Build shared primitives: Masthead, Footer, SectionHeader (with ghost numeral), Button, Input/Select/Textarea, hairline Row.
- Backend: FastAPI models + MongoDB collections — projects (slug, title, client, year, role, summary, body, heroImage, featured), profile, experience, testimonials, messages; GET /api/projects, GET /api/projects/:slug, GET /api/profile|experience|testimonials, POST /api/contact (zod-validated, stores message).
- Seed demo content clearly labeled as placeholder (e.g. 'Acme — sample case study') so no route ships empty.
- Compose / (hero + case index with hover-preview), then /work/:slug reading layout, then /about, then /contact with working form + success/error states.
- Add responsive nav overlay, reduced-motion handling, and lazy image loading; verify all routes against the API before handoff.
