Role: You are an expert frontend developer and automation engineer specializing in Astro, Tailwind CSS, and data migration.
Task: Build a fully responsive (Desktop + Mobile) personal portfolio website for Jaime Garcia Chaparro, a Senior AI Engineer, and migrate existing blog content via a web scraping script.

1. Tech Stack & Architecture
Framework: Astro (for static site generation).

Styling: Tailwind CSS (utilizing dark: classes for dark mode support).

Content Management: * .md files for Blog entries (using Astro Content Collections).

.yaml or .json for mapping Research/Project data.

Migration Scripting: Write a one-time script (e.g., Node.js with cheerio + turndown, or Python with BeautifulSoup + markdownify) to scrape existing articles from https://jgchaparro.github.io/ and convert them into .md files.

Icons: Use standard icon libraries (e.g., Lucide-react, Heroicons, or FontAwesome).

i18n (Multilingual): Implement Astro's native i18n routing to support English (/en/), Spanish (/es/), and Greek (/el/). Default to English.

SEO & Metadata: Implement dynamic <head> tags for SEO, including Open Graph (OG) tags for link previews.

Analytics: Add a placeholder script in the base layout for a privacy-friendly analytics tool.

2. Design System & Aesthetics (Tsakonian Digital Theme + Dark Mode)
Light Mode (Default): Crisp, academic, and highly contrasted.

Background: #F8FAFC (slate-50) or White.

Text: #0F172A (slate-900).

Accents/Buttons: Deep Blue #003366 (blue-900).

Dark Mode: Sleek, developer-focused.

Background: #0A0A0A or slate-950.

Text: #F8FAFC (slate-50).

Accents/Buttons: Bright Blue (blue-500) or Cyan gradients.

Card UI: bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm.

Interactive States: transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-800 dark:hover:border-blue-400.

Typography: Clean, geometric sans-serif (e.g., Inter). Headings should be bold with tight tracking (font-bold tracking-tight).

3. Website Structure & Routes
Implement a sticky navigation bar with the developer's name ("Jaime Garcia Chaparro") on the left. On the right, include: a Theme Toggle (Sun/Moon icon), a Language Toggle (EN/ES/EL), and the links: Career | Research | Blog | Contact.

A. Home / Hero Section
Create a prominent landing section above the fold containing:

A brief, punchy intro: "Hi, I'm Jaime. Born in Malaga, based in Madrid, open to the World. I am a Senior AI Engineer specializing in NLP, modern infrastructure, and building digital tools to preserve the critically endangered Tsakonian language."

A circular profile picture placeholder.

A primary Call-To-Action button: "Download Resume (PDF)" linking to /resume.pdf.

B. Career (CV) Page
Create a vertical timeline or structured layout containing:

Professional Experience:

AI Engineer | Devoteam (Google Cloud Partner) (Mar 2026 – Present, Madrid) - Improving ticketing helping systems and Kubeflow pipelines using the GCP stack.

AI Development Engineer | Comunidad de Madrid (Nov 2025 – Mar 2026, Hybrid) - Design and integration of AI tools (chatbots, RAG, Agent systems) within institutional websites and internal processes.

Global Data Scientist (Senior & Junior) | Havas Media Network (Sept 2022 – Nov 2025, Madrid) - Design/implementation in Python of digital products for audience activation using NLP. Revamped products incorporating LLMs, RAG, and Agent systems (LangGraph + LangSmith). Industrialization on Databricks, BigQuery, GCP. Structural equation modeling (SEM).

Associate Professor | Universidad Alfonso X el Sabio (UAX) (Jan 2025 – Jul 2025, Madrid) - Professor of Neural Networks and AI.

Education:

Master's Degree in AI | UAX (Oct 2023 – Jul 2024)

Specialization Master in Deep Learning, Data Science | KSchool (Nov 2022 – May 2023)

Data Science and AI Bootcamp | Ironhack (Mar 2022 – Jun 2022)

Bachelor's Degree in International Relations | UAX (Jan 2016 – Jun 2022)

Bachelor's Degree in Business Administration | UAX (2016 – 2021)

High School Diploma | Colegio Novaschool Añoreta (2014 – 2016)

C. Research Page
Data Source: Create a src/data/projects.yaml file.

Layout: A responsive CSS Grid card system (reusing the global card UI).

Tsakonian Projects: Tsakonian Digital Dictionary (Greek/English/Spanish), Tsakonian Digital Vault, Simple Kostakis orthography, Tsakonian AI translation models, Garcia Chaparro's Tsakonian transliteration system.

Other Projects: Hellas DB, Cypris DB, "Impacto de la libertad económica..."

D. Blog Page & Content Migration
Data Source: Read from src/content/blog/ containing .md files.

Migration: Create and run a script to scrape https://jgchaparro.github.io/, extract the article titles, dates, and body content, convert the HTML to Markdown, generate Astro-compatible YAML frontmatter, and save them automatically to src/content/blog/.

Layout: CSS Grid reusing the card UI. Cards must contain an image placeholder, Title, and Description extracted from frontmatter. Routes to the full markdown article.

E. Contact Page / Footer
Clean, minimalist footer with icon-based links:

Email: mailto:Jgchaparro@outlook.com

LinkedIn: /in/jgchaparro

GitHub: /jgchaparro

4. Execution Steps for Agent
Initialize the Astro project with Tailwind CSS. Configure i18n and a global Dark Mode toggle script.

Set up the Base Layout (Navbar, Footer, global CSS, SEO tags).

Build reusable UI components (Cards, Timeline).

Build the Hero Section.

Create the YAML data file for Research and implement the carousel.

Write and execute the scraping script to pull blog posts from https://jgchaparro.github.io/, convert them to markdown with frontmatter, and populate the src/content/blog/ directory.

Setup Astro Content Collections to read the newly scraped Markdown files and build the Blog grid UI.

Populate the Career page.

Ensure strict mobile responsiveness. Use placeholder images (/placeholders/) for missing assets.