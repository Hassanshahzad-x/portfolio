# Hassan Shahzad, portfolio

Next.js 16 (App Router, fully static) + Tailwind v4. No animation library: motion is native CSS
(scroll-driven animations, transitions) with `prefers-reduced-motion` fallbacks.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Editing content

All copy lives in `lib/content.ts` (projects, experience, capabilities, links). Every number there
comes from the resume. Keep it that way: no metric goes in without a source.

- Project screenshots: `public/work/*.png` (captured from the live sites, 1440x900).
- Résumé: `public/hassan-shahzad-resume.pdf`. Note it includes a phone number.
- Canonical URL: set `NEXT_PUBLIC_SITE_URL` (defaults to the current Netlify portfolio URL).

## Structure

```
app/                 routes, metadata, sitemap, robots, OG image
  work/[slug]/       case studies (statically generated, unknown slugs 404)
components/          one folder per section: navigation, hero, projects, capabilities,
                     experience, about, contact, footer
lib/content.ts       single source of truth for copy
app/globals.css      design tokens (color, type, motion, layout) and motion utilities
```

## Deploy

Works on Vercel or Netlify with zero config. Set `NEXT_PUBLIC_SITE_URL` to the final domain.
