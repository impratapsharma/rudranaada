# RudraNāda

Content-first home for RudraNāda: Indian epics, devotional traditions, philosophy, mantras, stories and original music.

Built with Next.js and deployed on Vercel.

## YouTube catalogue

The music collection contains a verified snapshot of the public videos and Shorts from
`UCm0nm2PjdBv5-2OVwEYtu4g`. This is a metadata import, not an audio/video download.

- `data/youtube-catalogue.json`: exact YouTube titles, descriptions, dates, IDs, thumbnails and format.
- `data/video-editorial.json`: stable page slugs, short summaries, theme labels and related-video links.
- `scripts/import-youtube.py`: repeatable metadata importer; its header contains the commands.

The importer verifies channel ownership and public visibility, and writes only after
all entries have succeeded. To add new releases, rerun the import, add their editorial
mappings, and run `npm run build`. Existing slugs should stay unchanged.

Full video pages are indexable and included in the sitemap. Shorts remain noindex,
follow, with separate catalogue filtering. Empty YouTube descriptions stay empty in
the source data; the page displays an editorial summary instead. Imported descriptions
are preserved as published and are not independent verification of their claims.


## Brand system

RudraNāda's brand and editorial rules live in the repository and should be treated as source-of-truth documentation before changing the website, editorial system, artwork or social identity.

- `docs/BRAND_GUIDELINES.md` — human-facing brand and editorial bible.
- `docs/DESIGN_SYSTEM.md` — implementation rules for product/UI work.
- `data/brand-tokens.json` — machine-readable design tokens and guardrails.

Core principle: **ancient in spirit, contemporary in execution.**


### Evergreen festival URL rule

Festival guides use permanent URLs without a year, for example:

- `/festivals/diwali`
- `/festivals/dhanteras`
- `/festivals/navratri`

The current year belongs in the page title, date module, SEO title, meta description and date-related FAQ, not in the permanent URL.

Yearly calendars remain year-specific:
- `/festivals/2026`
- `/festivals/2027`

When a new year approaches, update the existing festival guide in place and preserve its URL. Do not create a new year-based festival URL unless there is a genuinely separate archive or editorial need.
