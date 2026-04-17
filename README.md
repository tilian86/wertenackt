# KlarKreis

Strukturierte Themenabende für kleine Gruppen oder zu zweit. Kein Moderator nötig — nur ehrliche Gespräche.

**Live:** https://klarkreis.de

## Struktur

```
.
├── index.html          Landing
├── themen.html         Themen-Übersicht (dynamisch aus themes.js)
├── thema.html          Themenabend-Detailseite (?id=…)
├── abend.html          Geführter Abend-Flow (?thema=…)
├── funken.html         Zitat-Sammlung
├── gastgeber.html      Gastgeber:innen-Anleitung
├── ueber.html          Über KlarKreis
├── impressum.html      Pflichtangaben
├── datenschutz.html    DSGVO-Hinweise
├── login.html          (deaktiviert, Platzhalter)
├── themes.js           Zentrale Theme-Daten
├── quotes.js           Zitate für Funken-Seite
├── logo.svg            Vollständiges Logo (Symbol + Wortmarke)
├── logo-mark.svg       Symbol allein (für Social/OG)
├── favicon.svg         Favicon
└── images/             Bilder (siehe image-prompts.md)
```

## Ein neues Thema anlegen

1. `themes.js` öffnen
2. Neues Objekt im `window.THEMES` hinzufügen — siehe bestehende Einträge als Vorlage
3. `formats.group` und/oder `formats.pair` mit Stationen befüllen
4. Karte in `index.html` ergänzen + neuen Eintrag in `TITLE_TO_ID` (script am Ende)
5. Bild in `images/` ablegen (4:5 vertikal, ≤500 KB) — Prompts siehe [image-prompts.md](image-prompts.md)
6. `git push` → GitHub Pages deployt automatisch

## Deployment

GitHub Pages auf `main`. Jeder Push → automatischer Build.

- **Live:** https://klarkreis.de
- **GitHub URL (Fallback):** https://tilian86.github.io/klarkreis/
- **Build-Status:** `gh api repos/tilian86/klarkreis/pages --jq .status`
- **Deploy:** `git add . && git commit -m "…" && git push`

## DNS / Domain

Domain bei **INWX**, DNS bei **Cloudflare** (NS: `junade.ns.cloudflare.com`, `meilani.ns.cloudflare.com`).

Cloudflare-Records (importiert):
```
@   A   185.199.108.153  (+ 109/110/111)
www CNAME tilian86.github.io
```

E-Mail `kontakt@klarkreis.de` läuft über **Cloudflare Email Routing** → `florian.s.thiel@gmail.com`.

## Lokal anschauen

```
cd ~/Projects/websites/klarkreis && python3 -m http.server 8000
# → http://localhost:8000
```

Tailwind kommt per CDN, kein Build nötig.
