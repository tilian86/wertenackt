# KlarKreis · Supabase-Setup

Projekt: **klarkreis** (Org: tilian86's Org · FREE)
- Dashboard: https://supabase.com/dashboard/project/liqnavdghqhhavgkhgpx
- Project Ref: `liqnavdghqhhavgkhgpx`
- Region: Central EU (Frankfurt)
- URL: `https://liqnavdghqhhavgkhgpx.supabase.co`

## Schritte im Dashboard (einmalig, ca. 5 Min)

### 1. SQL-Schema einspielen
1. Dashboard → SQL Editor → New query
2. Inhalt von `supabase/schema.sql` einfügen, Run klicken
3. Tabellen prüfen: Table Editor → sollte zeigen: `profiles`, `seen_questions`, `question_favorites`, `completed_abende`

### 2. Auth-Settings konfigurieren
Dashboard → Authentication → URL Configuration
- **Site URL:** `https://klarkreis.de`
- **Redirect URLs (Allow List):**
  - `https://klarkreis.de/**`
  - `http://localhost:3000/**` (für lokale Tests)

Dashboard → Authentication → Providers → Email
- **Enable Email provider:** ja
- **Confirm email:** an (Magic-Link-Flow)
- **Enable password:** aus (wir wollen nur Magic-Link)
- **Secure email change:** an

Dashboard → Authentication → Email Templates → Magic Link
- Subject: `Dein KlarKreis-Login`
- Body anpassen auf Deutsch (siehe `email-templates/magic-link.html`)

### 3. API-Keys holen
Dashboard → Project Settings → API Keys
- **URL:** `https://liqnavdghqhhavgkhgpx.supabase.co` (ist fix)
- **Anon/Publishable Key** kopieren → in `config.js` einsetzen
  (anon-Key ist öffentlich, kann ins Git committet werden)

Den `config.js` dann committen und pushen.

## Schritte im Code (lokal, automatisch durch Claude)

- `auth.js` · Supabase-Client + Login/Logout/Session-Handling
- `config.js` · URL + Anon-Key (musst Du ausfüllen)
- `fragen.html` · Sync gesehene Fragen mit DB (fallback auf localStorage ohne Login)
- Header aller Seiten · Login-Button (rechts oben)

## Tabellen-Struktur

| Tabelle | Zweck | Felder |
|---|---|---|
| `profiles` | 1:1 zu `auth.users`, Display-Name etc. | `id`, `display_name`, `created_at` |
| `seen_questions` | gesehene Fragen pro User | `user_id`, `question_text`, `category`, `seen_at` |
| `question_favorites` | markierte Lieblings-Fragen | `user_id`, `question_text`, `category`, `created_at` |
| `completed_abende` | gemachte Themenabende | `id`, `user_id`, `theme_id`, `theme_title`, `completed_at`, `participants_count`, `notes` |

Alle Tabellen haben Row-Level-Security (RLS): jede:r sieht und schreibt nur eigene Daten.

## Magic-Link-Flow (Vereinfacht)

1. User klickt „Einloggen" → Modal mit Email-Feld
2. Supabase schickt Magic-Link an Email
3. User klickt Link → kommt zurück auf `klarkreis.de/?access_token=...`
4. `auth.js` verarbeitet Token, Session ist gesetzt
5. Alle seen_questions / favorites / abende syncen automatisch

## Fallback ohne Login

Ohne Login bleibt alles wie bisher (localStorage). Login ist rein optional — für Geräte-Sync und persönliche Historie.
