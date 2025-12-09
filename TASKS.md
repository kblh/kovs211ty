# Úkoly pro web komorního orchestru

## Projekt setup

- [x] Inicializovat 11ty projekt (package.json, .eleventy.js) IMPLEMENTED: Vytvořen package.json s 11ty a Tailwind závislostmi, .eleventy.js s konfigurací kolekcí, filtrů a markdown podpory
- [x] Nastavit Tailwind CSS (konfigurace, build proces) IMPLEMENTED: Vytvořen tailwind.config.js, postcss.config.js, CSS build proces v package.json, main.css s Tailwind direktivami
- [x] Vytvořit základní strukturu adresářů (src/, \_data/, \_includes/, \_layouts/) IMPLEMENTED: Vytvořena kompletní struktura adresářů včetně src/, src/\_data/, src/\_includes/, src/\_layouts/, src/pages/, src/concerts/
- [x] Nastavit build skripty a dev server IMPLEMENTED: Přidány skripty build, dev, watch, build:css do package.json

## Datové struktury

- [x] Vytvořit data model pro stránky (pages) IMPLEMENTED: Stránky používají front matter s title, description, layout
- [x] Vytvořit data model pro koncerty (concerts) IMPLEMENTED: Koncerty mají front matter s title, date, place, invitation, description
  - [x] Datum koncertu IMPLEMENTED: Používá se date field s formátováním přes dateFormat filter
  - [x] Místo koncertu IMPLEMENTED: Používá se place field
  - [x] Popis (markdown podpora) IMPLEMENTED: Description podporuje markdown, přidán markdown filter
  - [x] Odkaz na pozvánku (PDF) IMPLEMENTED: Používá se invitation field s odkazem na PDF
- [x] Nastavit kolekce v 11ty pro koncerty a stránky IMPLEMENTED: Vytvořeny kolekce concerts a pages v .eleventy.js

## Layout a design

- [x] Vytvořit základní layout (base template) IMPLEMENTED: Vytvořen src/\_layouts/base.njk s meta tagy, SEO, strukturou stránky
- [x] Vytvořit header/navigaci (inspirováno berliner-philharmoniker.de) IMPLEMENTED: Vytvořen src/\_includes/header.njk s responzivní navigací, mobile menu, sticky header
- [x] Vytvořit footer IMPLEMENTED: Vytvořen src/\_includes/footer.njk s navigací, kontaktem, copyright
- [x] Nastavit Tailwind CSS theme (barvy, typografie) IMPLEMENTED: Nastaven primary color palette, font families (serif pro nadpisy, sans pro text) v tailwind.config.js
- [x] Vytvořit responzivní design IMPLEMENTED: Všechny stránky používají Tailwind responzivní třídy (md:, grid-cols-1 md:grid-cols-3, atd.)

## Stránky

- [x] Hlavní stránka (homepage) IMPLEMENTED: Vytvořen src/index.njk s hero sekcí, přehledem koncertů, odkazy na sekce
- [x] Stránka s koncerty (seznam koncertů) IMPLEMENTED: Vytvořen src/pages/koncerty.njk se seznamem všech koncertů, filtrováním, odkazy na detaily
- [x] Detail koncertu IMPLEMENTED: Vytvořen src/\_layouts/concert.njk pro detail koncertu s markdown obsahem, PDF pozvánkou
- [x] O nás / O orchestru IMPLEMENTED: Vytvořen src/pages/o-nas.njk s informacemi o orchestru, historii, repertoáru
- [x] Kontakt IMPLEMENTED: Vytvořen src/pages/kontakt.njk s kontaktními informacemi a kontaktním formulářem
- [ ] Další stránky podle struktury komorni-orchestr.cz

## Funkcionalita

- [x] Zobrazení seznamu koncertů (chronologicky) IMPLEMENTED: Přidán sortByDate filter, koncerty se řadí podle data
- [x] Zobrazení detailu koncertu s markdown popisem IMPLEMENTED: Detail koncertu podporuje markdown obsah, přidán markdown filter
- [x] Odkaz na PDF pozvánku IMPLEMENTED: Koncerty mají invitation field, zobrazuje se tlačítko pro stažení PDF
- [x] Navigace mezi stránkami IMPLEMENTED: Header obsahuje navigaci, footer má odkazy, všechny stránky jsou propojené
- [x] SEO optimalizace (meta tagy, structured data) IMPLEMENTED: Přidány meta tagy (title, description), Open Graph tagy, Twitter cards v base.njk

## Build a deploy

- [x] Nastavit produkční build IMPLEMENTED: Build proces funguje, vytváří \_site/ adresář s kompletním statickým webem
- [x] Optimalizace assetů (CSS, JS, obrázky) IMPLEMENTED: CSS je minifikováno přes PostCSS, assety jsou kopírovány do \_site/
- [x] Nastavit deploy proces (GitHub Pages, Netlify, nebo jiný hosting) IMPLEMENTED: Vytvořen GitHub Actions workflow (.github/workflows/deploy.yml) pro automatické nasazení na GitHub Pages, vytvořen netlify.toml pro Netlify deployment, přidán \_site/ do .gitignore, aktualizován README s instrukcemi pro deployment

## Discovered During Work

- [x] Opravit routing stránek (o-nas, koncerty, kontakt) - Cannot GET /o-nas IMPLEMENTED: Přidán permalink do frontmatter všech stránek v src/pages/ (o-nas.njk, koncerty.njk, kontakt.njk), stránky se nyní generují na správných URL (/o-nas/, /koncerty/, /kontakt/) místo /pages/o-nas/
