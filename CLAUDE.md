# Claude Context - Ferienhaus Bela

## Project Overview
This is a React SPA for **Ferienhaus Bela**, a dog-friendly vacation rental in Carinthia, Austria.

**Live URL:** https://ferienhaus-bela.at

## Tech Stack
- **Frontend:** React 18 + TypeScript + Vite
- **Styling:** CSS (no framework)
- **i18n:** react-i18next (DE, EN, IT, SL)
- **SEO:** react-helmet-async
- **Hosting:** Docker + nginx behind Cloudflare Tunnel

## Project Structure
```
src/
├── components/
│   ├── Breadcrumbs/      # SEO breadcrumb navigation
│   ├── Contact/          # Contact section
│   ├── CookieConsent/    # GDPR cookie banner
│   ├── Footer/           # Site footer
│   ├── Gallery/          # Image gallery with lightbox
│   ├── Header/           # Navigation header
│   ├── Hero/             # Hero section (h1 per page)
│   ├── LanguageSwitcher/ # i18n language selector
│   ├── SEO/              # Dynamic meta tags component
│   └── TranslationDisclaimer/
├── i18n/
│   ├── index.ts
│   └── locales/
│       ├── de.json       # German (primary)
│       ├── en.json       # English
│       ├── it.json       # Italian
│       └── sl.json       # Slovenian
├── pages/
│   ├── Home.tsx
│   ├── Ferienhaus.tsx
│   ├── Hundeurlaub.tsx
│   ├── Umgebung.tsx
│   ├── Preise.tsx
│   ├── Impressum.tsx
│   ├── AGB.tsx
│   └── Hausordnung.tsx
└── styles/
    ├── global.css
    └── App.css

public/
├── images/               # All images including og-image.jpg
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Crawler rules
├── llms.txt             # AI assistant info file
├── .well-known/
│   └── llms.txt         # Copy for .well-known path
└── calendar.html        # Booking calendar iframe
```

## Deployment

### Production (Synology NAS)

The site runs on a Synology NAS via Docker with Cloudflare Tunnel.

```bash
# Deploy to production
./deploy-production.sh
```

**Requirements:**
- Copy `.env.production.example` to `.env.production` and configure
- SSH access to Synology configured

**Infrastructure:**
- **Host**: Synology NAS
- **Container**: `ferienhaus-bela` on port 3333
- **Tunnel**: `cloudflared-ferienhaus` (Cloudflare Tunnel)
- **URL**: https://ferienhaus-bela.at

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## SEO Implementation

### Per-Page Meta Tags
Each page uses the `<SEO>` component with unique:
- Title (50-70 chars with keyword)
- Meta description (max 160 chars)
- Canonical URL
- OG image (optional, defaults to og-image.jpg)

### Page SEO Overview
| Page | URL | Title |
|------|-----|-------|
| Home | `/` | Ferienhaus Bela - Urlaub mit Hund in Kärnten, Österreich |
| Ferienhaus | `/ferienhaus` | Ferienhaus Kärnten - 84m² mit Garten \| Ferienhaus Bela |
| Hundeurlaub | `/hundeurlaub` | Hundeurlaub Kärnten - Urlaub mit Hund \| Ferienhaus Bela |
| Umgebung | `/umgebung` | Umgebung Bad Eisenkappel - Aktivitäten Kärnten \| Ferienhaus Bela |
| Preise | `/preise` | Preise Ferienhaus Kärnten - ab €136/Nacht \| Ferienhaus Bela |

### Target Keywords
- Ferienhaus Kärnten
- Urlaub mit Hund Kärnten
- hundefreundliches Ferienhaus
- Ferienhaus Bad Eisenkappel
- Hundeurlaub Österreich

### Structured Data (JSON-LD)
Located in `index.html`:
- LodgingBusiness
- House
- BreadcrumbList
- FAQPage

### Assets
- **OG Image:** `/public/images/og-image.jpg` (1200x630)
- **Logo:** `/public/images/logo.png`
- **Favicon:** `/public/favicon.svg`

## Key Files Modified (Last Session)

### SEO Optimizations
- `src/components/SEO/SEO.tsx` - Dynamic meta tags
- `src/components/Breadcrumbs/` - Schema.org breadcrumbs
- `src/main.tsx` - Added HelmetProvider
- `index.html` - Structured data, preload hints
- `public/sitemap.xml` - Cleaned for Google (no XML comments)
- All page components - Added SEO component with unique meta

### Image Alt Tags Fixed
- `src/pages/Hundeurlaub.tsx` - 15 dog images
- `src/pages/Ferienhaus.tsx` - 8 house images
- `src/pages/Home.tsx` - 5 preview images

## Common Tasks

### Add new translation
1. Add key to `src/i18n/locales/de.json`
2. Add translations to en.json, it.json, sl.json
3. Use with `t('key.path')`

### Update SEO for a page
```tsx
<SEO
  title="Page Title | Ferienhaus Bela"
  description="Max 160 chars description with keyword"
  canonical="/page-slug"
  ogImage="/images/specific-image.jpg"  // optional
/>
```

### Check deployment
```bash
curl -s -o /dev/null -w "%{http_code}" https://ferienhaus-bela.at/
```

## Notes
- Search Console verified via Cloudflare DNS
- Sitemap submitted: https://ferienhaus-bela.at/sitemap.xml
- No XML comments in sitemap (Google requirement)
- All images have lazy loading in Gallery component
- Feature cards on Home link to subpages for internal linking
