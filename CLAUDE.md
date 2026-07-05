# CLAUDE.md — mitulp236.github.io

Personal site of **Mitul Patel**, served at **https://mitulpatel.in** via GitHub
Pages (custom domain in `CNAME`). This is a **hand-written, no-build static
site** — there is no framework, bundler, package manager, or build step. It
replaced an earlier Next.js/Hugo export (all of which was deleted). Every page
is a single self-contained `.html` file with inline `<style>` and `<script>`.

## How it deploys

- **Repo type:** GitHub Pages *user site* (`<username>.github.io`), so it
  publishes from the **`master`** branch root. Just commit + push to `master`.
- `CNAME` → `mitulpatel.in` (custom domain). **Never delete or rename it** or the
  domain mapping breaks.
- `.nojekyll` (empty file) disables Jekyll processing. **Keep it.**
- A stale `gh-pages` branch also exists on the remote; it is unused — ignore it.
- No CI. Pushing to `master` is the deploy. Allow a minute or two for Pages to
  rebuild, then hard-refresh.

## Structure

```
/index.html                     Home — the "about" card (bio + stack)
/tools/index.html               Tools hub — neo-brutalist grid, links to each tool
/tools/<tool>.html              17 tool apps (whatsapp, vault, meet, peerdrop, …)
/tools/theme.css                Shared tool styling (locked to the neo theme)
/tools/theme.js                 Locks all tools to data-theme="neo" (no switcher)
/tools/sw.js                    Service worker (offline cache, scoped to /tools/)
/tools/icon.svg, manifest…      Tool suite assets
/blog/index.html                Blog — post listing
/blog/problems-with-pubnub.html First (and currently only) blog post
/CNAME                          mitulpatel.in  (do not remove)
/.nojekyll                      disables Jekyll (do not remove)
/static/images/                 mitul.png (avatar) + legacy images
/static/favicons/               favicon set from the old site (kept)
```

Absolute, root-relative links throughout (`/`, `/tools/`, `/blog/`,
`/static/...`) — they resolve correctly under the custom domain. Do **not** use
relative `../` paths.

## Design system — neo-brutalist orange

One shared look across every page. The **top-level pages** (home, blog) are each
fully standalone — copy the `:root` block and nav markup from an existing one
when adding a page. The **`/tools/` suite** is the exception: those 17 pages
share `/tools/theme.css` + `/tools/theme.js`, which are **locked to the `neo`
theme** whose palette was tuned to match this exact portfolio (orange `#ff5c00`,
cream `#fff4e6`, ink `#1a0f06`, paper `#fff9f2`, Archivo Black / Space Grotesk /
Space Mono, hard offset shadows, squared corners, dotted backdrop). Re-theme all
tools at once by editing `/tools/theme.css` `html[data-theme="neo"]`.

- **Palette (CSS vars in every `:root`):**
  `--orange:#ff5c00` (primary accent), `--cream:#fff4e6` (page bg),
  `--ink:#1a0f06` (text + all borders), `--paper:#fff9f2` (cards),
  `--lime:#c8ff2e`, `--sky:#3fd0ff`, `--pink:#ff6ba6` (accents).
- **Neo-brutalism rules:** thick `4px solid var(--ink)` borders, **hard offset
  drop-shadows** (`--shadow: 7px 7px 0 ink`, `--shadow-lg: 11px 11px 0 ink`) —
  never blurred; square corners; bold flat color; slight rotations on
  stickers/tags for the "pasted-on" feel.
- **Fonts (Google Fonts):** `Archivo Black` = display/headings,
  `Space Grotesk` = body, `Space Mono` = labels/meta/code.
- **Shared motifs on each page:** an animated dotted background (`body::before`),
  a JS follow-cursor (`.cursor`, grows on `[data-hover]` elements), floating
  geometric `.shape`s with mouse parallax, and the nav bar (`MP.` brand +
  `Home / Tools / Blog` tabs; current tab gets `.active`).
- **Responsive:** each page has `@media(max-width:760px)` (single column, cursor
  + shapes hidden, nav stacks) and `@media(max-width:420px)` (smaller shadows &
  type). Anything interactive must add `data-hover` and degrade on mobile.

## The pages

- **Home (`/index.html`)** — a single compact two-column card (kept short,
  no long scroll, like the original mitulpatel.in/about). Left: avatar with
  wobble stickers, name, typewriter role cycler, social links. Right: rewritten
  bio (unique copy, same facts — teenage start, IT Engineering degree, now into
  AI) and the tech stack split into `// web & cloud` and a lime `// ai & ml` row.
- **Tools (`/tools/index.html`)** — the **Rocket Tools** hub: an orange hero card
  plus a responsive grid of 17 tool cards, each a link that launches the real,
  working tool at `/tools/<tool>.html`.
- **Blog (`/blog/index.html`)** — post-listing cards (date, read time, tags,
  animated arrow). The arrow is absolutely positioned; post `h2`/`.meta` carry
  `padding-right` on desktop so long titles don't run under it (reset to 0 on
  mobile where the arrow is hidden).
- **Post (`/blog/problems-with-pubnub.html`)** — full article, neo-brutalist
  treatment: bold header, byline pills, lime section headers, orange `.callout`
  boxes for key gotchas, and a fixed scroll **reading-progress bar**.

## Rocket Tools (now vendored in `/tools/`)

Rocket Tools is a suite of 17 tiny, fully client-side tools (WhatsApp Quick,
Card Vault, Meet, PeerDrop, Whiteboard, Notes, Todo, JSON/CSV/Color studios,
Markdown, Image, PDF, QR, Screen Recorder, Code Sandbox, Diagram). Same
philosophy as this site — **no backend ever, no build step, data never leaves
the browser.**

**As of the migration, the tools live here, in `/tools/`** — copied out of the
old standalone repo (`github.com/mitulp236/Rocket-tools`,
`~/Desktop/Projects/rocket-tools`), which Mitul plans to **retire**. Continue the
project *here*, not there. Each tool now runs live at
`https://mitulpatel.in/tools/<tool>.html`. During the copy the pages were
re-themed to this site's look (locked `neo` theme in `theme.css`, switcher
removed in `theme.js`) and their canonical/OG/JSON-LD URLs were repointed from
the old `rocket-tools.app` placeholder to `https://mitulpatel.in/tools/…`.

Tool pages use **relative** asset links (`theme.css`, `./`, `sw.js`) — this is
the one place `../`-style relative paths are correct, because the whole suite is
self-contained under `/tools/`. Colors must stay `var(--…)` (hardcoded hex only
inside SVG logos) so the shared theme keeps cascading.

## Conventions when editing

- **Adding a blog post:** create `/blog/<slug>.html` (copy the PubNub post as a
  template), then add a `<a class="post">` card to `/blog/index.html`. Use the
  same nav, palette, and progress-bar script.
- **Adding a page/tab:** create `/<name>/index.html`, copy an existing page's
  `:root` + nav, and add the tab link to the `.nav .tabs` of **all** pages
  (Home, Tools, Blog, and every post) so navigation stays consistent.
- **Keep top-level pages self-contained** (inline CSS/JS, root-relative asset
  links) — dependency-free and portable. The `/tools/` suite is the deliberate
  exception: it shares `theme.css`/`theme.js` and uses relative links.
- **Adding a tool:** drop `/tools/<name>.html` in (copy an existing tool), link
  `theme.css`/`theme.js`, keep the pre-paint `<head>` snippet set to `'neo'`, and
  add a card `<a class="tool" href="/tools/<name>.html">` to `/tools/index.html`.
- **Preserve** `CNAME`, `.nojekyll`, and `static/`. Deploy = push to `master`.
