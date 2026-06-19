# jgchaparro.com

Personal portfolio website for Jaime Garcia Chaparro — Senior AI Engineer & Tsakonian Researcher.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and multilingual support (English, Spanish, Greek).

## Features

- **Multilingual:** English (EN) at root, Spanish (/es/), Greek (/el/)
- **Dark mode toggle:** System preference or manual toggle with localStorage persistence
- **Responsive design:** Mobile-first, tested at 375px, 768px, 1280px
- **Career timeline:** Interactive career and education history
- **Research grid:** Project showcase with YAML-based data structure
- **Blog ready:** Astro Content Collections setup for blog posts (coming soon)
- **Fast:** Astro static generation, minimal JavaScript, no external CDNs (fonts & icons self-hosted)

## Quickstart

### Prerequisites

- Node.js 18+ and npm

### Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd jgchaparro.com
npm install
```

### Local Development

Launch the development server:

```bash
npm run dev
# or
npm start
```

The site will be available at `http://localhost:4321`

The dev server watches for file changes and hot-reloads automatically.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

Output is generated in the `dist/` directory.

### Preview Production Build

To test the production build locally before deploying:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── pages/               # Route files (Astro file-based routing)
│   │   ├── index.astro      # EN home (redirects to /en/)
│   │   ├── en/              # English pages
│   │   ├── es/              # Spanish pages
│   │   └── el/              # Greek pages
│   ├── layouts/             # BaseLayout.astro (shared wrapper)
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Card.astro       # Project/blog card component
│   │   ├── TimelineItem.astro
│   │   └── ...
│   ├── data/
│   │   └── projects.yaml    # Research projects data (trilingual)
│   ├── content/
│   │   └── blog/            # Blog posts (Content Collection)
│   └── styles/
│       └── global.css       # Tailwind directives + custom styles
├── public/                  # Static assets (favicon, images, resume PDF)
├── astro.config.mjs         # Astro configuration
├── tailwind.config.mjs       # Tailwind CSS configuration
└── package.json             # Dependencies & scripts
```

## Localization

- **EN** (English): Root paths (`/`, `/career`, `/research`, etc.)
- **ES** (Spanish): `/es/` prefix (`/es/`, `/es/carrera`, `/es/investigacion`, etc.)
- **EL** (Greek): `/el/` prefix (`/el/`, `/el/sxolia`, `/el/ereyna`, etc.)

Locale detection is URL-based. The `LanguageToggle` component generates locale-prefixed links.

### Translating Content

- **Pages:** Each language has its own route file (e.g., `src/pages/es/index.astro`)
- **Project descriptions:** `src/data/projects.yaml` supports `description_es` and `description_el` fields (fallback to `description` if missing)
- **Component strings:** Use translations objects inside components (e.g., in `Navbar.astro`)

## Styling

The site uses Tailwind CSS with:

- **Brand color:** `#003366` (custom CSS variable `--color-brand`)
- **Dark mode:** Enabled via `class` strategy (toggle persisted to localStorage)
- **Typography:** Inter font (self-hosted via `@fontsource/inter`)
- **Icons:** Heroicons + Lucide icons (via `astro-icon`)

## Browser Support

Targets modern browsers with ES2020+ support. No polyfills for older browsers.

## Deployment

The site is a static Astro build. Deploy the `dist/` directory to any static host:

- **Vercel:** Push to GitHub, Vercel auto-deploys
- **Netlify:** Connect repo, build command: `npm run build`, publish: `dist/`
- **GitHub Pages:** Use `gh-pages` action or similar
- **Any static host:** Upload the `dist/` folder

## Development Notes

- **No React/Vue:** Astro renders to static HTML. Interactive elements use vanilla JavaScript or Astro island components (currently none).
- **Type safety:** TypeScript enabled. Run `npx astro check` to validate frontmatter.
- **Icons:** All icons from `astro-icon` — check `node_modules/@iconify-json/` for available icons.

## License

Personal portfolio. See LICENSE file (if applicable).

## Contact

- **Email:** jgchaparro@outlook.com

<!-- Last updated: 2026-06-19 -->
- **LinkedIn:** [jgchaparro](https://linkedin.com/in/jgchaparro)
- **GitHub:** [jgchaparro](https://github.com/jgchaparro)
- **Tsakonian Digital:** [tsakoniandigital.com](https://tsakoniandigital.com)
