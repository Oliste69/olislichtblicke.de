# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projekt

Fotografen-Portfolio und Blog für **Oliver** unter der Domain **olislichtblicke.de**.
Ziel: Darstellung als Fotograf mit Portfolio-Galerien, Blog-Beiträgen und einer modernen Landingpage.

## Tech-Stack

- **Framework**: Astro
- **CMS**: Sanity (Headless)
- **Deployment**: Vercel
- **Sprache**: Deutsch (nur)
- **Styling**: Tailwind CSS
- **Animationen**: Framer Motion oder CSS Transitions

## Seitenstruktur

| Seite | Beschreibung |
|---|---|
| `/` | Landingpage mit Hero-Sektion |
| `/portfolio` | Fotogalerie, filterbar nach Kategorie |
| `/blog` | Blog-Übersicht und Einzelbeiträge |
| `/ueber-mich` | Vorstellung als Fotograf |
| `/kontakt` | Kontaktformular (noch offen) |

## Design-Richtlinien

- **Stil**: Hell, clean, minimalistisch
- **Typografie**: Moderne serifenlose Schrift
- **Bildsprache**: Großformatig, strukturiert
- **Animationen**: Dezente Page-Transitions und Scroll-Animationen
- **Portfolio**: Filterbar nach Kategorie (Lightbox erwünscht)

## Besondere Anforderungen

- **DSGVO**: Cookie-Banner ist Pflicht
- **Performance**: Bilder über Astro `<Image />` oder Sanity-CDN optimiert ausliefern
- **SEO**: Metadaten pro Seite, Open Graph für Blog und Portfolio

## Skills

Bei Design- und UI-Aufgaben den **frontend-design** Skill verwenden.

## Context-Ordner

Unter `Context/` liegen projektbezogene Materialien:

- `Context/design/` – Wireframes, Mockups
- `Context/brand/` – Logo, Farben, Fonts
- `Context/content/` – Texte, SEO-Inhalte
- `Context/references/` – Referenz-Seiten, Inspirationen
- `Context/specs/` – Anforderungen, Feature-Listen
- `Context/assets/` – Rohdaten (Bilder, Icons)

Vor Design- oder Inhaltsentscheidungen diese Ordner auf vorhandenes Material prüfen.

## Sanity

- Content-Typen: `post` (Blog), `photo` (Portfolio), `category`, `author`
- Portfolio-Fotos haben eine `category`-Referenz für die Filterung
- Bilder immer über das Sanity-CDN mit `@sanity/image-url` ausliefern

## Entwicklung

```bash
npm run dev        # Lokaler Dev-Server (Astro)
npm run build      # Production Build
npm run preview    # Build lokal vorschauen
```

Sanity Studio läuft separat:
```bash
cd studio && npm run dev   # Sanity Studio starten
```
