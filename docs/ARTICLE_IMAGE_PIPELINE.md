# RudraNāda publishing repair (November 2026)

## Why articles were missed

The scheduled Research Blog task had no repeatable way to turn generated artwork into actual binary image files in GitHub. Changing its instructions did not solve image upload. The webhook deployment also needs time to reach READY before live verification.

## New workflow (repository code)

1. Write and source-check an article in lib/<name>-article.ts and register it in lib/content.ts.
2. Add a reviewed data/article-visuals/<slug>.json with one featured and 2–4 inline images. Inline sectionHeading must match the article's actual heading, and each prompt must respect scriptures and traditional iconography.
3. Run node scripts/generate-article-images.mjs data/article-visuals/<slug>.json to preflight without spending.
4. Run with --generate only with an authorized OPENAI_API_KEY. It calls the paid OpenAI Images API, writes WebP files into public/images/articles/<slug>/ and attaches featuredImage and body[].image references to the article. Files are reused on retry so already-created images do not cost more.
5. Validate all real image files with npm run articles:check-images (or use --slug for one article), run npm run build, and visually review the generated art.
6. Commit only the verified article, assets and metadata. Poll the Vercel production deployment, real article URL and sitemap. Never infer success from a READY deployment or a Git commit alone.

## Enable paid image generation

The GitHub Actions workflow RudraNāda article images currently supports manual workflow_dispatch for one slug. It requires the repository Actions secret OPENAI_API_KEY, to be configured directly in GitHub by the account owner. This is separate API billing from ChatGPT. Do not paste a secret into chat.

**No API usage is triggered just by installing the workflow.** To make future manifest commits auto-trigger paid image generation, first set an explicit usage/budget limit and then set GitHub repository variable ENABLE_AUTO_ARTICLE_IMAGES=true. The default is off; no automatic expense has been authorized by this change. The workflow only handles art, not autonomous scripture research.

The job creates binary assets, validates metadata and file signatures, runs the site build, commits images with GITHUB_TOKEN, and checks the live article for up to six minutes. The GitHub repository must permit Actions write access for this workflow. The production deployment must accept its push, otherwise the workflow will fail visibly.

## Current backlog

Backfill and independently verify missing visuals for Gajendra Moksha (11 Nov), Vighneshwara (17 Nov), Bhagavad Gita 2.47 (19 Nov), and Hanuman ocean crossing (21 Nov). The validator intentionally gates *new* articles dated 23 Nov onward by default, so existing live pages are not retroactively broken during setup. Run node scripts/verify-article-images.mjs --all to audit the backlog. Remove this date exception once backfill is complete.

The scheduler should not claim a successful publication until an article and its real images are live. The watchdog remains read-only. The API key, budget approval, one manual end-to-end generation test, and visual editorial review are still prerequisites. This repository change alone does not prove that billed generation or the live pipeline works.
