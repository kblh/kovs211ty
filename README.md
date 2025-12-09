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

## Technologie

- **11ty (Eleventy)** - Statický generátor webu
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS post-processing
- **Markdown-it** - Markdown parser

## License

MIT
