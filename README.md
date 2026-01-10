# Ferienhaus Bela

Website for Ferienhaus Bela - a dog-friendly vacation rental in Carinthia, Austria.

**Live:** https://ferienhaus-bela.at

## About

Ferienhaus Bela is a holiday home located in Vellach, near Bad Eisenkappel in Carinthia, Austria. The property features:

- 84m² living space on two floors
- 1,300m² fenced garden
- Direct access to the Vellach river
- Up to 3 dogs welcome (free of charge)
- Near the Slovenian border

## Tech Stack

- **React 18** with TypeScript
- **Vite** for build tooling
- **react-router-dom** for routing
- **react-i18next** for internationalization (DE, EN, IT, SL)
- **react-helmet-async** for SEO meta tags
- **Docker** + **nginx** for deployment
- **Cloudflare Tunnel** for hosting

## Development

### Prerequisites

- Node.js 20+
- npm

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

### Docker Build & Deploy

```bash
# Build Docker image
docker build -t ferienhaus-bela .

# Run container
docker run -d --name ferienhaus-bela -p 3333:80 ferienhaus-bela
```

### Quick Deploy Script

```bash
docker build -t ferienhaus-bela . && \
docker stop ferienhaus-bela 2>/dev/null; \
docker rm ferienhaus-bela 2>/dev/null; \
docker run -d --name ferienhaus-bela -p 3333:80 ferienhaus-bela
```

## Project Structure

```
ferienhaus-bela/
├── public/
│   ├── images/           # All images
│   ├── sitemap.xml       # SEO sitemap
│   ├── robots.txt        # Crawler rules
│   ├── llms.txt          # AI assistant info
│   └── calendar.html     # Booking calendar
├── src/
│   ├── components/       # React components
│   ├── i18n/             # Translations
│   ├── pages/            # Page components
│   └── styles/           # CSS files
├── index.html            # Entry point with SEO meta
├── Dockerfile            # Multi-stage Docker build
├── nginx.conf            # Nginx configuration
└── vite.config.ts        # Vite configuration
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/ferienhaus` | House details & amenities |
| `/hundeurlaub` | Dog-friendly features |
| `/umgebung` | Surroundings & activities |
| `/preise` | Pricing & availability |
| `/impressum` | Legal notice & privacy |
| `/agb` | Terms & conditions |
| `/hausordnung` | House rules |

## Internationalization

The website supports 4 languages:

- **German (de)** - Primary language
- **English (en)**
- **Italian (it)**
- **Slovenian (sl)**

Translations are stored in `src/i18n/locales/`.

## SEO Features

- Dynamic meta tags per page (react-helmet-async)
- Structured data (JSON-LD): LodgingBusiness, House, FAQ, Breadcrumbs
- XML sitemap with hreflang
- Open Graph & Twitter Card meta tags
- Breadcrumb navigation with Schema.org markup
- Optimized image alt tags
- llms.txt for AI assistants

## Environment

The site runs behind Cloudflare Tunnel:

- **Domain:** ferienhaus-bela.at
- **Local Port:** 3333
- **Tunnel Config:** `~/.cloudflared/ferienhaus-bela.yml`

## Contact

- **Email:** office@ferienhaus-bela.at
- **Phone:** +43 664 73529351
- **Address:** Vellach 77, 9135 Bad Eisenkappel, Austria

## License

All rights reserved. This is a private project for Ferienhaus Bela.

---

Website by [Strali Solutions](https://strali.solutions)
