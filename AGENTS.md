# AGENTS.md — Pete McPherson Portfolio

Guide for AI agents and contributors working in this repository.

## Project overview

Static personal portfolio for **Pete McPherson**. Minimal, editorial design: black/white/red only, generous whitespace, no client-side frameworks.

| Item | Value |
|------|--------|
| Framework | [Astro](https://astro.build) 6.x (`output: 'static'`) |
| Styling | Tailwind CSS **v3** via PostCSS (not `@astrojs/tailwind` — Astro 6 peer dep gap) |
| Deploy target | [Cloudflare Pages](https://pages.cloudflare.com) (static `dist/`) |
| JS policy | Zero client JS unless strictly necessary. No React, Vue, or UI libraries. |

## Commands

```bash
npm install      # install dependencies
npm run dev      # dev server (default http://localhost:4321)
npm run build    # production build → dist/
npm run preview  # serve dist/ locally
```

**Node:** `>=22.12.0` (see `package.json` `engines`).

**Verify changes:** run `npm run build` before finishing. All routes must prerender without errors.

## Repository layout

```
/
├── astro.config.mjs       # static output only
├── postcss.config.mjs     # tailwindcss + autoprefixer
├── tailwind.config.mjs    # theme tokens (colors, fonts, max-width)
├── AGENTS.md              # this file
├── public/
│   └── images/            # static assets (e.g. placeholder-profile.svg)
└── src/
    ├── components/
    │   ├── Layout.astro         # HTML shell, fonts, meta, global CSS import
    │   ├── Navigation.astro     # sticky nav, active link via Astro.url.pathname
    │   ├── Footer.astro         # copyright, nav repeat, newsletter
    │   ├── NewsletterForm.astro # reusable email form (POST action="#")
    │   └── ProjectCard.astro    # teaser | full variants
    ├── pages/
    │   ├── index.astro          # Home
    │   ├── about.astro          # About
    │   └── projects.astro       # Projects
    └── styles/
        └── global.css           # CSS variables, @layer base/components
```

Do **not** add SSR, API routes, or server adapters unless the product requirements change explicitly.

## Pages

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Hero, newsletter, latest-projects teaser (3 cards) |
| `/about` | `src/pages/about.astro` | Bio placeholders, profile image, “What I Do” list |
| `/projects` | `src/pages/projects.astro` | 6 project cards in responsive grid |

Every page must use `Layout.astro` (which includes `Navigation` and `Footer`).

## Design system (strict)

### Colors — only these three

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|--------|
| `--color-white` | `#FFFFFF` | `white`, `bg-white`, `text-white` | Backgrounds, text on red |
| `--color-black` | `#000000` | `black`, `bg-black`, `text-black` | Body text, borders |
| `--color-red` | `#FF1A1A` | `red`, `bg-red`, `text-red` | CTAs, hovers, active nav, accents |

**No grays, off-whites, or Tailwind default red.** Extend the theme in `tailwind.config.mjs`; do not use arbitrary hex in markup when a token exists.

### Typography

Loaded in `Layout.astro` from Fontshare:

```html
<link href="https://api.fontshare.com/v2/css?f[]=switzer@400&f[]=khand@700&display=swap" rel="stylesheet">
```

| Role | Font | Weight | Classes / notes |
|------|------|--------|------------------|
| Body | Switzer | 400 | `font-body` |
| Headlines, nav, CTAs | Khand | 700 | `font-display`, `headline`, uppercase, `tracking-display` (-0.02em) |

### Layout

- Max content width: **1200px** (`max-w-content` / `.container-content`)
- Section padding: `.section-padding` — min ~80px vertical; `px-6` mobile, `md:px-12` desktop
- Borders: `1px solid #000000` only. **No shadows, gradients, or parallax.**

### Shared CSS classes (`src/styles/global.css`)

| Class | Purpose |
|-------|---------|
| `.headline` | Khand, bold, uppercase, display tracking |
| `.section-padding` | Standard section spacing |
| `.container-content` | Centered 1200px wrapper |
| `.btn-primary` | Red CTA; hover → black |
| `.link-red` | Red accent link; hover → black |
| `.border-divider` | 1px black border |

Focus rings: `outline: 2px solid #FF1A1A` (see `global.css` `:focus-visible`).

### Behavior constraints

- No custom cursor, scroll animations, parallax, or dark mode toggle
- `scroll-behavior: smooth` on `html` is allowed
- Semantic HTML: `header`, `main`, `section`, `footer`, `nav`, `article`
- All images need meaningful `alt` text

## Components

### `Layout.astro`

Props: `title`, `description` (default meta: `Pete McPherson — [placeholder]`).

Imports `../styles/global.css`. Sets `lang="en"` and `id="top"` on `<html>` for footer “Back to top”.

### `Navigation.astro`

Links: Home, About, Projects. Active route: `text-red` via `Astro.url.pathname`. Sticky header, `border-b border-black`. Mobile: stacked links (no hamburger JS).

### `Footer.astro`

Includes `NewsletterForm`, repeated nav links, `© 2026 Pete McPherson`, link to `#top`.

### `NewsletterForm.astro`

Prop: `label` (default: “Join my weekly newsletter.”).

- `<form method="POST" action="#">` — backend not wired; user will connect later
- Email input: `required`, `type="email"`, `name="email"`
- Submit: “Join”, `.btn-primary`
- Status line placeholder: `[FORM STATUS MESSAGE PLACEHOLDER]` — do not add client state machines

### `ProjectCard.astro`

Props:

| Prop | Type | Default | Notes |
|------|------|---------|--------|
| `title` | string | — | Khand headline |
| `description` | string | — | Switzer body |
| `tags` | `string[]` | `[]` | Red text; projects page only |
| `href` | string | `#` | Project link |
| `variant` | `'teaser' \| 'full'` | `'full'` | `teaser`: no image, “View →”; `full`: image block, “View Project →” |

Full variant image area: 300×200 placeholder `div`, `border-black`, `group-hover:border-red`.

## Content placeholders

Copy and project data are intentionally bracketed, e.g. `[PROJECT TITLE PLACEHOLDER]`. Replace in page frontmatter or inline when real content is available.

Profile image: `public/images/placeholder-profile.svg` (swap path in `about.astro` when final asset exists).

## Cloudflare Pages deployment

| Setting | Value |
|---------|--------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Framework preset | None / Astro (static) |

Output is plain HTML/CSS. No Workers, D1, or SSR required for current scope.

## Agent guidelines

**Do**

- Keep the 3-color palette and typography rules
- Reuse `Layout`, shared components, and `global.css` utilities
- Prefer Tailwind config / `@apply` over repeated arbitrary values
- Run `npm run build` after structural or style changes
- Stay static: prerendered pages only

**Do not**

- Add React, Vue, Svelte islands, or animation libraries
- Introduce grays, extra accent colors, shadows, or gradients
- Add client-side JS for nav, forms, or theme toggles without explicit approval
- Use `@astrojs/tailwind` until it supports Astro 6 (use existing PostCSS setup)
- Create commits or push unless the user asks

## Common tasks

| Task | Where to edit |
|------|----------------|
| Update hero / home sections | `src/pages/index.astro` |
| Bio and skills | `src/pages/about.astro` |
| Project grid | `src/pages/projects.astro` + `ProjectCard.astro` |
| Global styles / tokens | `src/styles/global.css`, `tailwind.config.mjs` |
| Site title / meta | `Layout.astro` props per page |
| Newsletter endpoint | `NewsletterForm.astro` `action` attribute |
| New static asset | `public/` (reference as `/path/from/public`) |

## Adding a new page

1. Create `src/pages/your-page.astro`.
2. Wrap content in `<Layout title="..." description="...">`.
3. Use `.section-padding` and `.container-content` for layout consistency.
4. Add link in `Navigation.astro` and `Footer.astro` `links` arrays.
5. Confirm `npm run build` includes the new route in `dist/`.
