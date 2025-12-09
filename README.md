# Web komorního orchestru

Statický web pro komorní orchestr vytvořený pomocí [11ty (Eleventy)](https://www.11ty.dev/) a [Tailwind CSS](https://tailwindcss.com/).

## Instalace

```bash
npm install
```

## Vývoj

Spuštění vývojového serveru s automatickým reloadem:

```bash
npm run dev
```

Web bude dostupný na `http://localhost:8080`

## Build

Vytvoření produkční verze:

```bash
npm run build
```

Výstup bude v adresáři `_site/`

## Struktura projektu

```
src/
├── _data/          # Globální data (site.json, navigation.json)
├── _includes/      # Komponenty (header.njk, footer.njk)
├── _layouts/       # Layouty (base.njk, concert.njk)
├── concerts/       # Koncerty (markdown soubory)
├── pages/          # Stránky (o-nas.njk, kontakt.njk, koncerty.njk)
├── css/            # CSS soubory (main.css)
├── js/             # JavaScript soubory
├── images/         # Obrázky
└── fonts/          # Fonty
```

## Přidání nového koncertu

Vytvořte nový markdown soubor v `src/concerts/` s front matter:

```markdown
---
layout: concert.njk
title: Název koncertu
date: 2024-12-15
place: Místo konání
invitation: /pdf/pozvanka.pdf
description: |
  Krátký popis koncertu v markdown formátu.
---

Dlouhý popis koncertu v markdown formátu...
```

## Přidání nové stránky

Vytvořte nový soubor v `src/pages/` s front matter:

```njk
---
layout: base.njk
title: Název stránky
description: Popis stránky pro SEO
---

Obsah stránky...
```

## Deployment

Projekt je připraven pro nasazení na GitHub Pages nebo Netlify.

### GitHub Pages

1. **Povolte GitHub Pages v nastavení repozitáře:**
   - Přejděte do Settings → Pages
   - V sekci "Source" vyberte "GitHub Actions"

2. **Workflow se automaticky spustí:**
   - Při push do `main` nebo `master` větve
   - Nebo manuálně přes Actions → "Deploy to GitHub Pages" → "Run workflow"

3. **Web bude dostupný na:**
   - `https://[username].github.io/[repository-name]`
   - Nebo na vlastní doméně (nastavení v Settings → Pages)

### Netlify

1. **Připojte repozitář k Netlify:**
   - Přihlaste se na [Netlify](https://www.netlify.com/)
   - Klikněte na "Add new site" → "Import an existing project"
   - Připojte GitHub repozitář

2. **Nastavení build:**
   - Build command: `npm run build`
   - Publish directory: `_site`
   - (Tyto hodnoty jsou již nastavené v `netlify.toml`)

3. **Deploy:**
   - Netlify automaticky nasadí při každém push do hlavní větve
   - Preview deployy se vytvoří pro každý pull request

### Vercel (alternativa)

Pro nasazení na Vercel:

1. Nainstalujte Vercel CLI: `npm i -g vercel`
2. Spusťte: `vercel`
3. Nebo připojte repozitář přes Vercel dashboard

## Technologie

- **11ty (Eleventy)** - Statický generátor webu
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processing
- **Markdown-it** - Markdown parser

## License

MIT
