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
/tools/index.html               Tools — showcases the Rocket Tools project
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

One shared look across every page. When adding a page, copy the `:root` block and
nav markup from an existing page — there is no shared CSS file (each page is
standalone by design; keep it that way for zero-dependency portability).

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
- **Tools (`/tools/index.html`)** — showcases the **Rocket Tools** project (see
  below): an orange hero card (description, feature badges, GitHub CTAs) plus a
  responsive grid of the 16 tools, each with an emoji tile + one-liner.
- **Blog (`/blog/index.html`)** — post-listing cards (date, read time, tags,
  animated arrow). The arrow is absolutely positioned; post `h2`/`.meta` carry
  `padding-right` on desktop so long titles don't run under it (reset to 0 on
  mobile where the arrow is hidden).
- **Post (`/blog/problems-with-pubnub.html`)** — full article, neo-brutalist
  treatment: bold header, byline pills, lime section headers, orange `.callout`
  boxes for key gotchas, and a fixed scroll **reading-progress bar**.

## Rocket Tools (the featured project)

Lives in a **separate repo**, `https://github.com/mitulp236/Rocket-tools`
(local: `~/Desktop/Projects/rocket-tools`). It is Mitul's main project: a suite
of ~16 tiny, fully client-side tools (PeerDrop, Meet, Whiteboard, JSON/CSV/Color
studios, PDF toolkit, QR, etc.). Same philosophy as this site — **no backend
ever, no build step, data never leaves the browser.** The Tools page here only
*links out* to that repo; it does not vendor its code. No live demo URL yet
(the project uses a placeholder domain), so CTAs point at GitHub.

## Conventions when editing

- **Adding a blog post:** create `/blog/<slug>.html` (copy the PubNub post as a
  template), then add a `<a class="post">` card to `/blog/index.html`. Use the
  same nav, palette, and progress-bar script.
- **Adding a page/tab:** create `/<name>/index.html`, copy an existing page's
  `:root` + nav, and add the tab link to the `.nav .tabs` of **all** pages
  (Home, Tools, Blog, and every post) so navigation stays consistent.
- **Keep pages self-contained** (inline CSS/JS, root-relative asset links). This
  is intentional — it keeps the site dependency-free and trivially portable.
- **Preserve** `CNAME`, `.nojekyll`, and `static/`. Deploy = push to `master`.
