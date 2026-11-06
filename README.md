# Cinema Noir — an editorial, film-festival skin for Video.js v10

**Cinema Noir** treats the Video.js v10 player like the opening of a film-festival
screening: a serif title card over the picture, a thin ivory ring for a play
button, hairline rules instead of boxes, and a single red-carpet accent spent
like a scarce resource. Everything is painted onto the standard v10 components,
so every control, menu, hotkey and announcement keeps working exactly as the
framework intends.

Built for the **Video.js Skins Design Challenge** (Contra × Mux). It is one of
three fully-built directions explored for this challenge — a retro pixel-arcade
skin and a frosted-glass skin were prototyped alongside it before the final
entry was chosen.
Design file: [Video.js v10 Skin (Figma)](https://www.figma.com/design/sNC6EfwTYauoRLs92zVwbi) — see the “Variation 3 — Cinema Noir” page.

## Run it locally

```sh
npm install
npm run dev        # workbench: test sizes, aspect ratios, colour schemes, RTL, languages
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

The workbench plays real video (NASA's *Cosmic Dawn* trailer, hosted on Mux) —
no placeholder media. Change the preview media in `apps/preview/src/frame/player`.

## The design system

- **Two colours, one accent:** near-black `#0A0A0A` and warm ivory `#F2EDE4`,
  with hairline borders at ivory/22% instead of solid panels and shadows.
- **The red discipline:** `#C8102E` appears in exactly a few places — the rule
  under the title card, the centre-play hover, the rule under **FIN.**, the
  live dot, the menu cursor bar and checked check, the captions-on underline,
  and the error dialog's title rule. Nowhere else.
- **Type:** *Playfair Display* for the title-card moments (player title, time
  readout, FIN. card, dialog headings); the system sans in letterspaced small
  caps for micro-labels, menu headings, tooltips and badges.
- **Geometry:** square corners throughout; the timeline is a 2px ivory line
  with a 12px square thumb; the deck is one solid strip closed by a 1px
  hairline top border.
- **Icons:** 24 hairline glyphs drawn on a 24×24 grid with 1.5-unit strokes,
  square caps and mitred joins, in `src/video/icons.ts`. Play and pause are
  slender solids so they still read at small sizes.

## Signature moments

- **FEATURE PRESENTATION** — the title is set as a film title card: a
  letterspaced small-caps kicker, the serif title, and the one red rule.
- **The ivory ring** — the centre play button is a 72px thin ring on a
  translucent dark disc; on hover its border and glyph take the red.
- **FIN.** — the ended state replaces the picture's centre with a letterspaced
  serif **FIN.** card, closed by the red rule, with the restart ring beneath.
- **LOADING** — buffering is a rotating hairline arc with a letterspaced
  small-caps caption beneath it.
- **Menus as programmes** — near-black hairline panels; the highlighted row
  carries a red left cursor bar, and the checked row's check is red.
- **Error dialog** — bad news delivered as a title card: serif heading, red
  rule, hairline panel, fully keyboard-reachable.

## Accessibility

- Touch targets are 44px even though the glyphs are hairlines; controls are
  bare glyphs on the solid deck strip, never floating on bare video.
- Focus is always visible (2px ivory outline; ink on the light scheme), and
  the deck returns and stays while anything inside it has keyboard focus.
- Works in **light and dark colour schemes** — the light scheme is the same
  film printed on ivory paper: pale panels, ink type, ink hairlines. Elements
  that sit over the footage itself (title card, ring, FIN.) stay ivory in
  both schemes, so they never wash out over bright frames.
- `prefers-reduced-motion` stops the spinner arc and every transition.
- **Forced-colors** fallbacks: fills and highlights move to system Highlight,
  the buffer becomes a hatched run, and the red rules become Highlight.
- Captions render on a solid near-black chip in both schemes, and the
  captions-on state is a red underline as well as a colour change.
- Scaffold's hotkeys (`Space`, `M`, `F`, arrow keys), status announcer and
  error dialog are all kept; tab order matches visual order because layout
  follows source order.

## Project structure

```
src/video/skin.html   – component markup (unchanged from the Scaffold skin)
src/video/skin.ts     – registers the hairline icon set + colour-scheme sync
src/video/skin.css    – the Cinema Noir layer: tokens, title card, deck, states, responsive & a11y blocks
src/video/icons.ts    – the 24-icon hairline set (24×24 grid)
src/skin.css          – font import (Playfair Display)
apps/preview/         – the Video.js workbench used for testing and the live demo
```

The skin is a paint layer over fully working controls — no behaviour is forked,
which is what keeps every menu, gesture and keyboard path intact.

## How it was built

Designed in Figma (palette and type tokens, desktop and mobile players) and
implemented with an AI coding agent against the version-matched Video.js
v10.3.0 docs: scaffold project, hairline icon set, CSS layer, then state-by-state
checks in the running workbench — paused, playing, light and dark schemes,
mobile width, ended, buffering, menus, error dialog, keyboard-only navigation,
reduced motion and forced colours. Screenshots from those checks live in
`checks/`.

## License

Submitted under the challenge terms: Apache License 2.0.

## Credits

Designed & built by **Haseeb P.** — CEO, [The Hitek Agency](https://www.thehitekagency.com) (Houston, USA).
