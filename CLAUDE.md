# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal portfolio + blog for Victor Ruiz Reyes (`https://victor-ruiz-reyes.site`), built from the **NeonMint** Astro template. UI copy on the portfolio is Spanish; the blog and README are still mostly the template's English. `infoproyect.md` is the owner's raw notes (project URLs, skills, studies) used as source material for site content, not code.

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

Astro 5 static site with Preact, Tailwind 4 (via `@tailwindcss/vite`, no `tailwind.config.js`) and `astro-icon`. Content is not stored in a CMS or content collection: **Markdown files under `src/pages/` are the content, and each one picks its layout through frontmatter** (`layout: /src/layouts/ProjectLayout.astro`, `MarkdownPostLayout.astro`, `MarkdownAbout.astro`).

Content flows through `Astro.glob` rather than collections:
- `src/pages/portfolio/projects/*.md` → `ListProjects.astro` globs them, sorts by `pubDate` descending, and renders `Project` cards on the home page. Frontmatter fields used: `title`, `description`, `pubDate`, `languages`, `image`. Adding a project means adding a `.md` file plus an image in `public/images/projects/`.
- `src/pages/blog/posts/*.md` → blog index, `all-posts`, and the dynamic routes `blog/tags/[tag].astro` and `blog/techs/[category].astro`, which derive their paths from the `tags` and `languages` frontmatter of all posts.

**Technology capsules** tie several pieces together: a `languages` entry in frontmatter (or in `Tools.astro`'s `allTools` list) is looked up in `src/utils/languages.ts`, whose `iconName` must match an SVG filename in `src/icons/`. `getLanguage()` silently falls back to the HTML entry for unknown keys, so a missing registration shows a wrong icon instead of an error. `Capsule` also links to `/blog/techs/<key>` and logs each key to the console.

Home page (`src/pages/index.astro`) is assembled from `components/portfolio/`: `HeroIndex` (profile, email/WhatsApp buttons, skills bento), `Experience` and `Education` (both hardcoded arrays rendered through `ExperienceItem`), `ListProjects`, `Contact`. Personal data (email, phone link, social URLs) is hardcoded in these components, `Header.astro`, `Navigation.astro` and `Footer.astro` rather than in one config.

`src/layouts/Layout.astro` owns all `<head>` metadata (OG/Twitter, canonical built from `Astro.site`, gtag with a hardcoded GA id, manifest). The site URL lives in `astro.config.mjs` (`site`) and is also hardcoded in `MarkdownPostLayout.astro` and `blog/all-posts.astro`; change all three together.

## Commits

Commit messages are Spanish, `<keyword>: <short or medium sentence>` (e.g. `style: aplicar paleta índigo y violeta`). Keywords and rules live in the `commit-message` skill (`.claude/skills/commit-message/SKILL.md`); follow it for every commit.

## Gotchas

- Template leftovers remain: the `neonmint` project, the `readme-neonmint` blog post, and `README.md` are NeonMint documentation, not about this site. The LinkedIn URLs in `Header.astro` and `Navigation.astro` still point to the template author.
- Personal data in the owner's CV (ID number, birth date, address, references' phones) must not be added to the public site.
