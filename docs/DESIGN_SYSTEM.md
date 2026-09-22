# RudraNāda Design System

This document translates the brand rules into implementation constraints for the website.

## Principles

1. **Reading before decoration.**
2. **White editorial canvas for long-form content.**
3. **Gold is an accent, never ambient wallpaper.**
4. **Different content surfaces use different type scales.**
5. **One grid system, not page-by-page improvisation.**
6. **Mobile navigation must remain functional.**
7. **Components should encode the brand rules so errors are hard to introduce.**

## Tokens

Machine-readable source:
`data/brand-tokens.json`

### Colours

```css
--bg: #fbfaf7;
--surface: #ffffff;
--article-bg: #ffffff;
--text: #211d18;
--muted: #74695e;
--gold: #a66b16;
--gold-soft: #81500f;
--footer-bg: #f3efe8;
--line: rgba(33,29,24,.12);
```

### Reading surfaces

Article detail pages:
- page background: `#FFFFFF`;
- answer blocks: white;
- FAQ background: white;
- reference sections: white;
- internal-link modules: white;
- no gold gradients;
- no radial glow.

Hub pages may use extremely restrained accent surfaces, but text readability always wins.

## Containers

- Global shell: 1120 px.
- Wide ceiling: 1180 px.
- Research article wrapper: 920 px.
- Reading column: 760 px.

## Typography

### Homepage hero
`clamp(3.25rem, 6.5vw, 6rem)`

### Page/hub hero
`clamp(2.75rem, 5vw, 4.65rem)`

### Research article H1
`clamp(2.5rem, 4vw, 3.65rem)`

### Article H2
`clamp(1.8rem, 3vw, 2.35rem)`

### Long-form body
Approx. 1.13rem with ~1.78 line height.

Do not apply global H1 sizing blindly to article pages.

## Grid

Default split section:
```css
grid-template-columns: minmax(0,1.15fr) minmax(260px,.65fr);
align-items: start;
```

Supporting copy should align from the top, not the bottom of a multi-line heading.

## Spacing

Use:
`4, 8, 12, 16, 24, 32, 48, 64, 80, 96`

Use larger spacing for section rhythm, smaller spacing for component internals.

## Border radius

- Small UI: 9–12 px
- Standard cards: 18–20 px
- Images: 14–18 px
- Pills/buttons: 999 px only when intentionally pill-shaped

Do not make every element a pill.

## Shadows

Use subtle shadows only to separate white surfaces from white/ivory backgrounds.

No dramatic glow.

## Header

Desktop:
- logo 108–132 px;
- nav is readable, not oversized;
- YouTube CTA remains separate.

Tablet/mobile:
- desktop nav hidden;
- actual menu visible;
- menu must remain keyboard accessible.

## Footer

Three conceptual columns:
1. Brand
2. Explore
3. Follow

Follow:
- YouTube
- Instagram
- X

Do not place YouTube in Explore while Instagram/X sit separately.

## Article page

Required anatomy:

```
Article page
├── Breadcrumb
├── Category eyebrow
├── H1
├── Dek
├── Metadata/byline
├── Featured image
├── In brief / key takeaways
├── Body
│   ├── H2
│   ├── paragraphs
│   └── inline imagery
├── FAQ
├── Internal journey
├── Research references
└── Tags
```

### Article visual rule

The article canvas must stay **pure white**.

Allowed colour:
- gold eyebrow;
- link state;
- small border/accent;
- button.

Not allowed:
- gold gradient answer card;
- radiant section background;
- gold-tinted body background;
- glowing quote card.

## Cards

Cards:
- white surface;
- 1 px subtle border;
- consistent padding;
- only minimal shadow;
- avoid forced equal-height emptiness when not useful.

## Accessibility

- Maintain readable contrast.
- All keyboard-interactive elements need visible focus states.
- Images need meaningful alt text when content-bearing.
- Decorative images should use empty alt text.
- Avoid text embedded only inside images when it carries important information.
- Tap targets should be comfortably usable on mobile.

## Responsive QA checklist

At 1440 / 1024 / 768 / 390 widths verify:
- H1 does not dominate first viewport;
- no horizontal overflow;
- section descriptions do not drift vertically;
- CTAs do not break awkwardly;
- cards stack cleanly;
- navigation remains usable;
- images crop intentionally;
- footer groups remain understandable;
- article line length remains comfortable.

## Change checklist

Any UI PR should answer:
- Which token/component changed?
- Is this reusable or page-specific?
- Does it preserve article white backgrounds?
- Does it preserve gold as accent only?
- Was mobile checked?
- Was the long-form title checked with a deliberately long headline?
