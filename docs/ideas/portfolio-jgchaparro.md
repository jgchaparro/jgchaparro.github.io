# Portfolio jgchaparro.com

## Problem Statement
How might we build a personal portfolio that makes Jaime Garcia Chaparro instantly
memorable to recruiters, collaborators, and the Tsakonian community — without
shipping a 3-week project that never launches?

## Recommended Direction

**Lead with the unusual combo, prove it with the work.**

The hero copy should front-load the Tsakonian angle — it's the only thing that makes
this portfolio unmistakably distinct. Something like: *"I build AI systems. I'm also
using them to save a language that fewer than 200 people still speak."* Then the
Career page proves the engineering depth, and the Research page expands the mission.

Technically: implement Plan.md largely as written, with three adjustments:
1. Replace the Research carousel with a responsive CSS grid of cards — simpler to
   build, better on mobile, easier to maintain.
2. Treat the blog migration scraper as a post-launch task, not a launch blocker.
   Stub the Blog page with 2–3 manually written .md posts as placeholders.
3. Wire up i18n routing now (so URLs are clean from day one) but only populate EN.
   ES/EL content slots can be empty strings or redirect to EN until translations exist.

## Key Assumptions to Validate
- [ ] jgchaparro.github.io scrapes cleanly → **test the scraper before committing to it as a launch dependency**; fall back to manual copy-paste for first 5 posts
- [ ] Tsakonian projects are in a state worth showcasing → **audit each project card before building the carousel**; show 3 real ones rather than 8 with placeholders
- [ ] Resume PDF exists at /public/resume.pdf → **confirm file before wiring the CTA button**
- [ ] Profile photo is available → **confirm before building the hero circular frame**

## MVP Scope
**In (launch blockers):**
- Hero section with revised copy (Tsakonian angle front and center)
- Career timeline (all experience + education from Plan.md)
- Research grid (3–5 real project cards, no carousel)
- Contact footer with email, LinkedIn, GitHub
- Dark mode toggle
- SEO + OG tags in base layout
- 2–3 manually created blog posts (not scraped) to populate the Blog grid

**Out (post-launch):**
- Blog migration scraper (run it after launch, import posts iteratively)
- ES and EL translations (i18n routes wired, content deferred)
- Analytics integration beyond placeholder script
- Interactive demos or live Tsakonian tools

## Not Doing (and Why)
- **Research carousel** — carousels are poor UX on mobile and add JS complexity;
  a CSS grid of cards with hover states achieves the same visual richness at half the cost
- **Full i18n content on day one** — translations don't exist yet; shipping EN now
  and adding ES/EL incrementally is lower risk than launching with half-translated pages
- **Scraper as launch dependency** — the scraper might not work cleanly; decoupling
  it from launch means a broken scraper doesn't delay going live
- **Two-sided navigation** (recruiter path vs. Tsakonian path) — adds routing
  complexity and the single narrative ("AI engineer who preserves languages") covers
  both audiences from one entry point

## Open Questions
- Is the Tsakonian Digital Dictionary publicly accessible? If yes, link it directly
  from the Research card — a live link is dramatically more convincing than a description.
- What's the target launch date? If < 2 weeks, the scraper and i18n scaffolding
  should be cut entirely for v1.
- Are there any published papers, conference talks, or press mentions around the
  Tsakonian work? These would be high-value additions to the Research section.
