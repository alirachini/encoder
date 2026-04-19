# Handoff: Encoder Marketing Website

## Overview

A single-page marketing website for **Encoder** — a small, independent software studio that builds web apps, mobile apps, and the production infrastructure underneath. The design positions Encoder as a precision engineering practice: no account managers, no middlemen, direct line to the people writing the code.

The aesthetic is **precision-automotive / technical catalog** — think high-end industrial equipment brochure crossed with an engineering spec sheet. Heavy reliance on monospace typography for metadata, large uppercase display type, thin hairline rules, and a single accent color (default **electric blue**) used sparingly for emphasis.

Everything lives on one long-scrolling page with in-page anchors (`#services`, `#stack`, `#about`, `#contact`).

---

## About the Design Files

The files in this bundle are **design references created in HTML** — prototypes showing the intended look, layout, typography, copy, and interaction behavior. They are **not production code to copy directly**.

Your task is to **recreate these HTML designs in the target codebase's environment**:
- If the codebase is React / Next.js / Vue / SvelteKit / Astro / etc., use the existing component patterns, styling system (Tailwind, CSS modules, styled-components, vanilla-extract, etc.), and conventions that already exist there.
- If there is no target framework yet, pick the most appropriate one for a static marketing site. **Next.js (App Router)** or **Astro** are both excellent fits — Astro in particular will produce a very small, fast bundle that matches the minimal-JS nature of this design.

Do not just dump the HTML file into the project. Break it into real components, tokenize the colors / type / spacing, and match the surrounding codebase's code style.

---

## Fidelity

**High-fidelity (hifi).** This is a pixel-perfect mockup with final colors, typography, spacing, copy, and interaction behavior. Recreate it as-is unless the team explicitly wants to change something.

Everything below (colors, spacing, type scale, copy) should be lifted exactly from the source file. Approximations or "close enough" values will change the feel — the design leans on tight, technical precision.

---

## Screens / Views

The site is a single page. Each "screen" below is a section.

### 1. Navigation (sticky top bar)

- **Purpose:** Persistent navigation across the page.
- **Layout:** 3-column CSS grid — `auto 1fr auto` — at ≥860px. Below 860px, the link bar and CTA collapse into a hamburger-triggered drawer.
- **Components:**
  - **Brand mark (left):** Inline SVG — two right-pointing chevrons, the first in `--ink` (#0A0A0A), the second in `--accent`. Width/height 26px. Right of the mark: wordmark `ENCODER` in display font, weight 800, 13px, letter-spacing `.18em`, uppercase.
  - **Links (center):** `Services / Stack / Studio / Contact` in mono font, 11px, `.14em` letter-spacing, uppercase. Hover → full opacity.
  - **CTA (right):** `Start a project` button — inverted pill (ink background, bg foreground), 10/16 padding, mono 11px. Hover → accent background.
  - **Burger (mobile):** 36×36px square with a 1px ink border. Three 1.5px hairlines. Animates to an X when `.is-open` is toggled on the nav.
  - **Drawer (mobile):** `position: fixed; inset: 64px 0 0 0;` full-width overlay, opens on burger click. Each link is 28px display / 14px padding / 1px bottom rule. Closes on any link click. Adds `body.is-locked { overflow: hidden }` while open.
- **Scroll behavior:** Nav gains `.is-scrolled` class after scrollY > 20, which adds a `border-bottom: 1px solid var(--rule)`.

### 2. Hero

Three stacked parts inside a single `.hero` section:

#### 2a. Meta bar (top of hero)
- 4-column grid (`1fr 1fr 1fr 1fr`), single top and bottom rule (1px `--rule`), vertical dividers between columns.
- Each cell: a small mono label above (`color: --muted`) and an ink value below (`--ink`, weight 500, 12px, display font).
- Columns: `Model / Encoder / 2026`, `Discipline / Software Studio`, `Origin / Remote Studio`, `Status / • Accepting projects 2026` — status has a pulsing accent dot.
- **Mobile (≤720px):** Collapses to 2 columns; cells 3 and 4 gain a top rule.

#### 2b. Hero stage
- **Eyebrow:** Mono 11px label `"The Engineering Studio · Series 01"` prefixed with a 40px × 1px accent rule. 32px bottom margin.
- **Headline:** The word-animated display piece. Default copy: `"We make your ideas come true."` Set via JS: each word is wrapped in `<span class="word">` with an inner `<span>` that slides in from below (`translateY(110%)` → `0`) with a 0.75s cubic-bezier, staggered by 0.06s per word starting at 0.2s. **Accent words** (`ideas`, `true.`) are wrapped in `<em>` (non-italic, color `--accent`). Animation end handler adds `.is-done` to the outer `.word` so the `overflow: hidden` clip can be released — this prevents letters with descenders (y, g, p) being clipped after the animation.
  - Font: display, weight 800, `clamp(56px, 11vw, 180px)`, line-height 0.88, letter-spacing -0.04em, uppercase. Mobile floor: 44px.
- **Sub-row:** Flex/grid row beneath the headline, separated by a 1px top rule, 40px top margin.
  - **Lead paragraph:** 1.1fr column. Display font, weight 400, `clamp(18px, 1.7vw, 22px)`, line-height 1.35. Bolded phrase `"precision software studio"`.
  - **Spec `<dl>`:** 1fr column, 2-column inner grid. Mono 11px labels (muted), display 15px values. Entries:
    - Cycle length → 4–8 weeks
    - First response → ≤ 24 hours
    - Engagement → Fixed-price
    - Ownership → Yours, day one
  - **CTA column:** Stacked buttons, `Start a project →` (primary, ink fill) and `View services ↓` (ghost, border only). Buttons are `min-width: 220px` on desktop, full-width on mobile.

#### 2c. Billboard (showroom pane)
- 21:9 dark panel (`background: #0A0A0A`, 1px `#1f1f1f` border), 56px top margin.
- **Center:** Two animated SVG chevrons (stroke-dashoffset draw-in, 2s ease-out, staggered by 0.35s). Stroke is 50% white / 50% accent.
- **HUD corners:** Mono 10px labels in the four corners:
  - TL: `MARK 02 · SERIES 01`
  - TR: `SIGNAL /​ 00:00:42`
  - BL: `● LIVE` (accent pulsing dot)
  - BR: `FRAME 00124`
- **Mobile (≤720px):** Aspect changes to 4:3, HUD padding tightens to 14/16.

### 3. Marquee
- Full-width horizontal scroller, 44px vertical padding, `--bg-2` background.
- Content: service names separated by small muted dots and one accent-italic tagline (`"ideas, encoded."`). Duplicated twice in the track so the CSS `slide` animation (40s linear infinite) loops seamlessly.
- Font: display 22px, weight 600.

### 4. Services (section 01)
- **Section head:** 2-column grid on ≥820px (`1fr 2fr`). Left: mono label `"01 — Services"` prefixed with a 28px accent hairline. Right: giant display headline `"What we build. End to end."` — `clamp(34px, 5vw, 64px)`, weight 700, uppercase, `em` accent for the second phrase.
- **Rows:** Four `.service` articles in a bordered table. Each row:
  - Grid: `80px 120px 1fr auto` (index / tag / body / meta).
  - Top & bottom 1px `--rule` dividers, 48px vertical padding, transition `padding-left .3s` — hover pushes the row 16px right and reveals a 3px accent left-bar (`::before`).
  - **Index:** Mono 11px muted, e.g. `01 / 04`.
  - **Tag:** Mono 10px, uppercase, inside a 1px currentColor pill (5/10 padding).
  - **Body:** Display title `clamp(24px, 3vw, 38px)`, weight 700, + 15px muted paragraph beneath.
  - **Meta:** Mono 10px muted column, right-aligned tech stack.
- **Mobile (≤720px):** Collapses to a single column; hover expansion disabled.
- **Entries (exact copy):**
  1. `01 / 04` · `Web` — **Web Applications** — Full-stack products — from first wireframe to a live URL. Authentication, payments, dashboards, admin tools. We write the code, pick the stack, own the outcome. — *React · Next / Node · Postgres / Stripe*
  2. `02 / 04` · `Mobile` — **Mobile Applications** — Native-quality apps for iOS and Android from a single codebase. Push, offline, deep-linking, store submissions handled end-to-end. — *React Native / Expo · Swift / App Store · Play*
  3. `03 / 04` · `Infra` — **Server Configuration** — Boringly reliable infrastructure. VPS hardening, reverse proxies, databases, backups, monitoring, CI/CD pipelines — set up to keep running when you're asleep. — *Linux · Docker / Nginx · Caddy / Redis*
  4. `04 / 04` · `Deploy` — **Full Deployment** — From DNS to domain to production release. SSL, CDN, staging flows, observability — the unglamorous last mile handled end to end. — *AWS · Cloudflare / Fly · Railway / GitHub Actions*

### 5. Stack (section 02, dark)
- Full-bleed dark section (`background: --bg-3 = #0A0A0A`, white text, borders `#1f1f1f`).
- Section head: `"02 — Stack"` label + headline `"Technical specifications."` (accent `em` on "specifications.").
- **Spec table:** Each row is a 3-col grid `240px 1fr auto`, hairline-bordered:
  - **Key** (left): Mono 10px, uppercase, muted.
  - **Val** (center): Display 20px, weight 500, white.
  - **Note** (right): Mono 10px, accent-colored, prefixed with a 6px accent dot.
- **Entries (exact):**
  - Languages → TypeScript · JavaScript · Python · Swift · Go — *Typed by default*
  - Frontend → React · Next.js · Vite · Tailwind — *Stack 2026*
  - Mobile → React Native · Expo · Swift interop — *iOS · Android*
  - Backend → Node · Fastify · Postgres · Redis — *Production grade*
  - Infrastructure → Docker · Nginx · Caddy · Linux (Debian / Alpine) — *Hardened*
  - Cloud → AWS · Cloudflare · Fly.io · Railway · Hetzner — *Region-flexible*
  - Payments → Stripe · Paddle — *PCI-safe*
  - Observability → Sentry · Grafana · Uptime Kuma — *Always-on*
- **Mobile (≤720px):** Single column, key row gets a bottom hairline, note becomes inline.

### 6. Studio / About (section 03)
- Section head: `"03 — Studio"` + headline `"Small studio. Direct line."` (accent on "Direct line.").
- **Body:**
  - Small display title `"Built by engineers, for people with ideas."` (`clamp(24px, 2.8vw, 36px)`, weight 700).
  - Three paragraphs, 60ch max-width:
    1. "Encoder is an independent software studio. No account managers, no slide-deck middlemen — you talk to the person writing the code."
    2. "We work with founders shipping a first product and with established teams who need a sharp pair of hands for a specific, well-scoped problem. Short cycles. Tight feedback loops. Everything checked into a repo you own on day one."
    3. "If the idea is clear enough to describe in a paragraph, it's usually clear enough to prototype in a week."
  - **Stats strip** (4 cols, 1px ruling between): Founded `2024` / Shipped `12+` / Avg. cycle `6 wks` / Response `24 hr`. Display 700 value, mono 10px label. On mobile collapses to 2×2.

### 7. Contact (section 04)
- Two-column layout at ≥960px (`5fr 7fr`, 72px gap).
- **Left column:**
  - Big display headline `"Have an idea? We'd like to hear it."` — `clamp(36px, 5vw, 64px)`.
  - Ink-filled mail button: `info@encoder.click ↗` — mono 13px, 14/18 padding, hover → accent background.
  - **Info `<dl>`** (100px label / 1fr value): Hours `Mon–Fri · 09:00–18:00` / Reply `Within one business day` / NDA `Signed before first call` / Billing `Fixed-price or weekly`. Top hairline rule.
- **Right column — form:**
  - 2-column grid, hairline divider between columns (right padding on odd fields, left padding on even).
  - Fields: `Name`, `Email`, `Company / role`, `Budget band` (`<select>` with options: Not sure yet / < $10k / $10k – $30k / $30k – $80k / $80k+), `Tell us about the idea` (full-width textarea).
  - Each field: mono 10px label over a transparent input, 24/0 padding, 1px `--rule-strong` bottom border. No traditional field chrome — inputs look like catalog entries.
  - **Actions row:** Left: `Encrypted · never shared` mono note. Right: `Send →` primary button. Mobile: stacks to a single column, button becomes full-width.

### 8. Footer (dark)
- `background: --bg-3`, white text. 80px/28px vertical padding.
- **Top grid (`2fr 1fr 1fr 1fr` ≥860px, stacked below):**
  - **Brand column:** 36×36 chevron SVG, wordmark `ENCODER`, short paragraph tagline.
  - **Studio:** Services / Stack / About / Contact
  - **Direct:** info@encoder.click / Book a call / GitHub / LinkedIn
  - **Legal:** Imprint / Privacy / Terms
  - List items: display 15px, opacity .8, hover → opacity 1 + accent color.
- **Bottom strip:** 1px top rule, mono 10px, three items: `© 2026 Encoder — All rights reserved` / `info@encoder.click` / `Built with precision · No frameworks harmed`. Stacks vertically on mobile.

### 9. Tweaks panel (design-only; do NOT port to production)
The floating `Tweaks` panel in the bottom-right is a design-time control surface used during iteration. It is gated behind a host-supplied toggle and should **not** ship to production — drop it entirely when implementing.

---

## Interactions & Behavior

- **Word-by-word headline reveal:** See §2b. The `is-done` class on completion is load-bearing — without it, the `overflow: hidden` clip stays on permanently and clips descenders. Port this carefully.
- **Scroll-reveal:** Elements with `.reveal` fade + translate-up (20px) when scrolled into view. Uses an `IntersectionObserver` with a 10% threshold; `rootMargin: "0px 0px -60px 0px"`. Once revealed, observation is disconnected (one-shot).
- **Nav sticky state:** On `scroll`, toggle `.is-scrolled` on `#nav` above 20px scroll.
- **Mobile nav drawer:** Burger toggles `nav.is-open` + `body.is-locked`. Drawer link click closes drawer. See §1.
- **Marquee:** CSS-only `translateX(0) → translateX(-50%)` over 40s, infinite linear. Track contains two identical `<span>` blocks so the wrap is seamless.
- **Billboard chevron draw:** SVG `stroke-dasharray: <length>; stroke-dashoffset: <length>;` animated to `0` over 2s ease-out. Second chevron delayed by 0.35s.
- **Pulsing dots** (status, HUD live, specs note): 2s infinite — scale 1→1.4 and opacity .3→1.
- **Service row hover:** `padding-left` transitions from 0 → 16px and a 3px accent `::before` bar appears on the left edge (0 → 3px width).
- **Form submit:** Prevent default, set the `.form__note` text to `"Message queued. We'll reply within 24h."`. No actual transport in the mock — wire to whatever backend the project uses (likely a Formspree-like endpoint, a Next.js API route, or a Resend/SendGrid integration).
- **Reduced motion:** Respect `@media (prefers-reduced-motion: reduce)` — disable the headline reveal, marquee, chevron draw, and pulse animations. (Not in the current mock — **add this when porting.**)

---

## State Management

This is a static marketing page — no real app state is needed.

- **Nav drawer open/close:** Local boolean in the Nav component.
- **Form state:** Standard controlled form (name, email, company, budget, message, submission status). On submit, POST to whatever endpoint the project uses; show a success note in place of the "Encrypted · never shared" line.
- **Scroll-reveal state:** Handled via IntersectionObserver, not framework state. If using React, a single `useEffect` setting up the observer is fine; for each element, toggle a `data-visible` attribute (or just add `.is-visible` as in the mock).

No data fetching is required unless you wire the contact form to a backend.

---

## Design Tokens

Lift these exactly. Define them as CSS variables (or Tailwind theme extensions, or whatever the codebase uses).

### Colors
| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--bg-2` | `#F4F4F4` | Marquee strip |
| `--bg-3` | `#0A0A0A` | Dark sections (stack, billboard, footer) |
| `--ink` | `#0A0A0A` | Primary text, CTAs |
| `--ink-2` | `#1C1C1C` | Secondary ink (rarely used) |
| `--muted` | `#6E6E6E` | Meta text, labels, hints |
| `--rule` | `#D9D9D9` | Hairline dividers on light |
| `--rule-strong` | `#0A0A0A` | Strong dividers (form top rule, catalog) |
| `--accent` | `#2563EB` | Accent — links, highlights, dots, hovers |
| Dark-mode rule | `#1F1F1F` | Dividers inside dark sections |
| White with alpha | `rgba(255,255,255,.5)` / `.55` / `.7` / `.8` | Muted text in dark sections |

The accent is tweakable at design time — in production, keep it as a single variable so it can be themed later.

### Typography
| Token | Stack | Purpose |
|---|---|---|
| `--ff-display` | `"Archivo", ui-sans-serif, system-ui, sans-serif` | Display (headlines, CTAs, values) — heavy weights (500/600/700/800) |
| `--ff-body` | `"Inter Tight", ui-sans-serif, system-ui, sans-serif` | Body copy |
| `--ff-mono` | `"JetBrains Mono", ui-monospace, Menlo, monospace` | Labels, meta, mono tags |

Weights in use: 400, 500, 600, 700, 800. Self-host these (next/font, fontsource, or a local /fonts directory) rather than pulling from Google Fonts in production.

**Type scale (clamp-based):**
- Hero headline: `clamp(56px, 11vw, 180px)` / lh 0.88 / ls -0.04em
- Section headline: `clamp(34px, 5vw, 64px)` / lh 1 / ls -0.035em
- Service title: `clamp(24px, 3vw, 38px)` / lh 1.02 / ls -0.028em
- Contact headline: `clamp(36px, 5vw, 64px)` / lh 1 / ls -0.035em
- About subhead: `clamp(24px, 2.8vw, 36px)` / lh 1.05 / ls -0.03em
- Stat value: `clamp(28px, 3vw, 42px)` / lh 1 / ls -0.02em
- Lead paragraph: `clamp(18px, 1.7vw, 22px)` / lh 1.35
- Marquee: 22px display / ls -0.01em
- Spec value: 20px display / ls -0.01em
- Body: 16px Inter Tight / lh 1.5
- Small body (service p): 15px
- Meta / labels: 10–11px mono / ls `.08em – .16em` / uppercase

### Spacing
- `--gutter: clamp(20px, 3.5vw, 64px)` — horizontal page padding (20px on mobile).
- `--max: 1600px` — max content width.
- Section vertical padding: 120px desktop, 64px mobile.
- Field vertical padding inside form: 24px.
- Service row vertical padding: 48px.
- Spec row vertical padding: 22px.
- Footer top padding: 80px; bottom: 24–28px.

### Borders / Rules
- Standard hairline: `1px solid var(--rule)` (#D9D9D9) — light sections.
- Dark hairline: `1px solid #1F1F1F` — dark sections.
- Strong: `1px solid var(--rule-strong)` — form top rule.
- Border radius: **0px everywhere** — this design uses zero rounded corners. Maintain that.

### Shadows
- Only the Tweaks panel uses a shadow (`0 20px 60px rgba(0,0,0,.15)`) and it's design-only.
- Production site: **no shadows.** The design is flat by choice.

### Motion
- Standard easing: `cubic-bezier(.2, .7, .2, 1)` (the custom curve used on service rows, reveals).
- Word reveal: `cubic-bezier(.2, .7, .2, 1)`, 0.75s, staggered 0.06s per word.
- Scroll reveal: 0.6s ease.
- Chevron draw: 2s ease-out.
- Pulse: 2s ease-in-out infinite.
- Marquee: 40s linear infinite.

---

## Assets

- **`encoder-logo.svg`** — The chevron mark, two 10-stroke paths. Copied into the bundle. In production, inline it (don't `<img>` it) so `currentColor` / CSS variables can recolor the accent half.
- **Fonts** — Archivo, Inter Tight, JetBrains Mono. The mock loads these from Google Fonts; in production, self-host via `next/font`, `fontsource`, or a vendored `/fonts` directory. Pull weights 400/500/600/700/800 for Archivo; 400/500/600 for Inter Tight; 400/500 for JetBrains Mono.
- No photography. No illustrations. No icons except the chevron mark and inline SVG arrows (`→`, `↓`, `↗`) which are typographic.

If the team wants to add imagery later (e.g. case studies), it would slot into the billboard area or between Services and Stack.

---

## Files

- **`index.html`** — The full, current mockup. This is the source of truth for layout, copy, and interactions.
- **`Encoder Website v1.html`** — An earlier iteration, kept for reference. The aesthetic pivoted between v1 and index.html, so **use index.html** as your target unless the team specifically asks otherwise.
- **`assets/encoder-logo.svg`** — Logo mark.

---

## Notes for the implementing engineer

1. **Break it into components.** Suggested component split for a React/Next/Astro project:
   - `<SiteNav />` (with mobile drawer state)
   - `<HeroMeta />`, `<HeroStage />` (with the word-reveal headline), `<Billboard />`
   - `<Marquee />`
   - `<SectionHead label title />` (reused 4× — parameterize)
   - `<ServiceRow idx tag title body meta />`
   - `<SpecRow k v note />`
   - `<AboutSection />`
   - `<ContactForm />` (with real submission wiring)
   - `<SiteFooter />`
2. **Drop the Tweaks panel entirely.** It's a design-tool surface, not product UI.
3. **Keep the design tokens centralized.** A single `tokens.css` / `theme.ts` / Tailwind `extend` block with all colors, type, spacing will make future theming (e.g. a new accent per campaign) trivial.
4. **Add `prefers-reduced-motion` support.** The current mock does not — wire it up in the port.
5. **Accessibility:**
   - Nav drawer needs focus trap + `aria-expanded` + escape-to-close (partially implemented; tighten in port).
   - Form fields have labels but could use richer `aria-describedby` for the "Encrypted · never shared" hint.
   - Pulsing dots are decorative — mark them `aria-hidden="true"`.
   - Marquee should pause on hover/focus for motion-sensitive users.
6. **SEO:** Add real `<title>`, meta description, OG tags, and a favicon when porting.
7. **Contact form:** The mock fakes submission. Replace with a real backend — a Next.js API route or edge function that forwards to Resend / SendGrid / Postmark is a clean fit.
