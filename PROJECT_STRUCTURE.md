# Project Structure: Ecovodalife

## 1. Routing (i18n)
- Default Locale: `sr` (Serbian) -> Root path `/`
- Prefixed Locales:
  - `/en` (English)
  - `/ru` (Russian)

## 2. Content Layer (src/content/config.ts)
Collections use the Translation-Object pattern for multi-language support.

### Collections:
- `products`:
  - Fields: `id`, `slug`, `title`, `description`, `price`, `category`, `images[]`, `specs{}`
- `articles`:
  - Fields: `id`, `slug`, `title`, `content`, `excerpt`, `date`, `author`, `coverImage`
- `locations`:
  - Fields: `id`, `slug`, `name`, `address`, `coords{lat, lng}`, `phone`, `email`, `description`

## 3. Folder Hierarchy
```text
/
├── public/
│   └── fonts/             # Self-hosted fonts
├── src/
│   ├── components/        # Shared UI components
│   │   ├── layout/        # Header, Footer, BaseLayout
│   │   └── ui/            # ProductCard, Button, etc.
│   ├── content/           # Content Layer
│   │   ├── products/      # product-1.md, product-2.md...
│   │   ├── articles/      # article-1.md...
│   │   └── locations/     # location-1.md...
│   ├── pages/             # Routing
│   │   ├── index.astro    # sr Home
│   │   ├── en/
│   │   │   └── index.astro # en Home
│   │   └── ru/
│   │       └── index.astro # ru Home
│   └── styles/            # Global CSS / UnoCSS configuration
├── astro.config.mjs       # Astro config (SSR, i18n)
├── keystatic.config.ts    # CMS configuration
└── package.json
```
