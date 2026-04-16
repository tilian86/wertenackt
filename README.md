# Wertenackt

Strukturierte Themenabende für kleine Gruppen. Kein Moderator nötig — nur ihr und ein gutes Gespräch.

## Struktur

```
.
├── index.html       Landing
├── themen.html      Themen-Übersicht
├── thema.html       Themenabend-Detailseite (dynamisch via ?id=)
├── abend.html       Geführter Abend-Flow (dynamisch via ?thema=)
├── login.html       (deaktiviert, steht als Platzhalter)
└── themes.js        Zentrale Theme-Daten (alle Themen hier anpassen)
```

## Ein neues Thema anlegen

1. `themes.js` öffnen
2. Neues Objekt im `window.THEMES` hinzufügen — siehe bestehende Einträge als Vorlage
3. Optional: Eigene `stations[]` definieren für volle Kontrolle (siehe `bindung`), sonst generische 5-Stationen-Struktur
4. Karte in `index.html` und `themen.html` ergänzen
5. `git push` → Cloudflare Pages deployt automatisch

## Deployment

GitHub Pages ist auf `main` aktiviert. Jeder Push auf `main` löst einen automatischen Build aus.

- **Live:** https://wertenackt.de (sobald DNS konfiguriert)
- **GitHub-URL:** https://tilian86.github.io/wertenackt/
- **Build-Status:** `gh api repos/tilian86/wertenackt/pages --jq .status`
- **Deploy-Workflow:** `git add . && git commit -m "…" && git push`

## Custom Domain wertenackt.de

Die `CNAME`-Datei im Repo legt die gewünschte Domain fest. DNS muss beim Registrar (INWX) gesetzt werden:

**A-Records für `@` (wertenackt.de):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME für `www`:**
```
tilian86.github.io
```

Nach DNS-Propagation (5 Min – 24 h): in GitHub-Repo-Settings unter Pages auf „Enforce HTTPS" klicken.
