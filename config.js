// Supabase-Client-Konfiguration (öffentlich — anon-Key ist für Client-Use bestimmt)
// Anon-Key holen: Dashboard → Project Settings → API Keys
// https://supabase.com/dashboard/project/liqnavdghqhhavgkhgpx/settings/api-keys
//
// Solange SUPABASE_ANON_KEY leer ist, läuft die Seite ohne Login im reinen
// localStorage-Modus (fragerunde-seen bleibt lokal).

window.KLARKREIS_CONFIG = {
  SUPABASE_URL: 'https://liqnavdghqhhavgkhgpx.supabase.co',
  SUPABASE_ANON_KEY: 'sb_publishable_5lEVXLCtoG6yvY1w-Q5Xcw_Y9V46rjy',
};
