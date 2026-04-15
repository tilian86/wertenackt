# Lebensfunken

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

Cloudflare Pages ist mit diesem Repo verbunden. Jeder Push auf `main` → Auto-Deploy.
