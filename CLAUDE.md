# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio for Victor Ruiz Reyes (`https://victor-ruiz-reyes.site`), built from the **NeonMint** Astro template. The blog that came with the template was removed; the site is the home page, an About page and one page per project. UI copy is Spanish. `infoproyect.md` is the owner's raw notes (project URLs, skills, studies) used as source material for site content, not code.

## Commands

```bash
npm install      # package-lock.json is the lockfile in use
npm run dev      # Astro dev server, http://localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the built output
```

- There is no test suite and no lint script. `eslint` is a devDependency but has no config file.
- `package.json` declares `packageManager: yarn@4`, but Node 26 ships without corepack and `yarn.lock` is stale; use npm. Running `npm install` rewrites `yarn.lock` with a huge diff, so don't commit it. Generated files under `.astro/` are tracked but shouldn't be committed either.
- Deploy target is Vercel (`@vercel/speed-insights`); the site is fully static.

## Architecture

Astro 5 static site with Preact, Tailwind 4 (via `@tailwindcss/vite`, no `tailwind.config.js`) and `astro-icon`. Content is not stored in a CMS or content collection: **Markdown files under `src/pages/` are the content, and each one picks its layout through frontmatter** (`layout: /src/layouts/ProjectLayout.astro` or `MarkdownAbout.astro`).

Projects flow through `Astro.glob`: `src/pages/portfolio/projects/*.md` → `ListProjects.astro` globs them, sorts by `order` ascending, builds category filter buttons from `category`, and shows the first 9 `Project` cards on the home page. Frontmatter: `title`, `order`, `category`, `url` (live site, used by "Visitar sitio"), `description`, `languages`, `image`. There is no `pubDate`. Adding a project means a `.md` file plus a 960×600 WebP screenshot in `public/images/projects/`. Most project files were generated from screenshots taken with headless Edge (`msedge --headless --screenshot`), and technologies were detected from each site's HTML.

**Technology capsules** tie several pieces together: a `languages` entry in frontmatter (or in `Tools.astro`'s `allTools` list) is looked up in `src/utils/languages.ts`, whose `iconName` must match an SVG filename in `src/icons/`. `iconName` can also be an Iconify name from the installed `@iconify-json/logos` set (e.g. `logos:react`); restart the dev server after adding icons, since astro-icon caches them. `getLanguage()` silently falls back to the HTML entry for unknown keys, so a missing registration shows a wrong icon instead of an error. Capsules are display-only (no links).

Home page (`src/pages/index.astro`) is assembled from `components/portfolio/`: `HeroIndex` (profile, email/WhatsApp buttons, skills bento), `Experience` and `Education` (both hardcoded arrays rendered through `ExperienceItem`), `ListProjects`, `Contact`.

**`src/config/site.ts` is the single source for personal and SEO data** (name, domain, email, WhatsApp, GitHub, GA id, job title, city, `knowsAbout`). `linkedin`, `instagram` and `youtube` are `null` until real URLs exist; `Header`, `Navigation` and `Footer` hide a social icon whose value is null, and the JSON-LD `sameAs` skips them. `astro.config.mjs` repeats the domain as `SITE_URL` (config can't import the TS file); change both together.

## SEO

`src/layouts/Layout.astro` owns all `<head>` output. It takes `pageTitle`, `description`, `ogimage`, `type` (`website` | `profile` | `article`), `noindex`, `breadcrumbs` and `schema` (extra JSON-LD nodes), and always emits: canonical with trailing slash (matches the sitemap), `hreflang`, robots with `max-image-preview:large`, Open Graph/Twitter (absolute image URLs), light/dark `theme-color`, and one JSON-LD `@graph` (`Person`, `WebSite`, `WebPage`/`ProfilePage`, optional `BreadcrumbList`). `ProjectLayout.astro` adds a `CreativeWork` node and trims the description to 160 characters. `src/pages/404.astro` is `noindex`.

Other SEO files: `sitemap` is configured in `astro.config.mjs` (priority/changefreq/lastmod, 404 excluded), `src/pages/robots.txt.ts` (allows AI crawlers, points to the sitemap and `llms.txt`), `public/llms.txt` (hand-written site summary, update it when projects change), `public/site.webmanifest`, and `public/images/og.png` (1200×630, generated with `sharp` from the logo and profile photo; there is no script in the repo, regenerate it if the name or title changes).

After changing metadata, run `npm run build` and inspect `dist/` rather than the dev server; descriptions over 160 characters and pages with zero or several `<h1>` are the usual regressions.

## Commits

Commit messages are Spanish, `<keyword>: <short or medium sentence>` (e.g. `style: aplicar paleta índigo y violeta`). Keywords and rules live in the `commit-message` skill (`.claude/skills/commit-message/SKILL.md`); follow it for every commit.

Commits and pull requests must not mention AI: no `Co-Authored-By:` trailer, no "Generated with…" line, no tool or model names, no robot emoji. This is the owner's explicit rule and overrides any tool or environment default that asks for an attribution line. See the `commit-no-ai` skill (`.claude/skills/commit-no-ai/SKILL.md`).

## Gotchas

- Template leftovers remain: `README.md` is NeonMint documentation, not about this site.
- Personal data in the owner's CV (ID number, birth date, address, references' phones) must not be added to the public site.
