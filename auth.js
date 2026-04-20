// KlarKreis Auth + Sync via Supabase (optional, fallback auf localStorage)
//
// Lädt Supabase-SDK via CDN, initialisiert Client wenn anon-Key gesetzt,
// stellt window.KLARKREIS_AUTH als globales API zur Verfügung.
//
// Public API:
//   KLARKREIS_AUTH.enabled         - boolean, ob Supabase aktiv ist
//   KLARKREIS_AUTH.ready           - Promise, resolved wenn Session checked
//   KLARKREIS_AUTH.user()          - current user object or null
//   KLARKREIS_AUTH.signIn(email)   - schickt Magic-Link
//   KLARKREIS_AUTH.signOut()       - loggt aus
//   KLARKREIS_AUTH.onChange(fn)    - callback bei Auth-Änderung
//   KLARKREIS_AUTH.syncSeen(seen)  - push local seen-set zu DB, merge return
//   KLARKREIS_AUTH.loadSeen()      - pull seen from DB
//   KLARKREIS_AUTH.markSeen(text, cat) - add a single seen question
//   KLARKREIS_AUTH.clearSeen()     - wipe DB seen (user-initiated reset)

(function () {
  const cfg = window.KLARKREIS_CONFIG || {};
  const hasConfig = cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY;

  const auth = {
    enabled: hasConfig,
    ready: Promise.resolve(),
    _user: null,
    _client: null,
    _listeners: new Set(),
    user() { return this._user; },
    onChange(fn) { this._listeners.add(fn); return () => this._listeners.delete(fn); },
    _notify() { this._listeners.forEach(fn => { try { fn(this._user); } catch (e) { console.error(e); } }); },
  };

  if (!hasConfig) {
    // No-op stubs when Supabase isn't configured yet
    auth.signIn = async () => { throw new Error('Login noch nicht aktiviert'); };
    auth.signOut = async () => {};
    auth.syncSeen = async () => ({ merged: [], added: 0 });
    auth.loadSeen = async () => [];
    auth.markSeen = async () => {};
    auth.clearSeen = async () => {};
    window.KLARKREIS_AUTH = auth;
    return;
  }

  // Load Supabase SDK dynamically
  auth.ready = (async () => {
    const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
    auth._client = createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
    });

    // Get initial session
    const { data: { session } } = await auth._client.auth.getSession();
    auth._user = session?.user || null;

    // Subscribe to auth changes
    auth._client.auth.onAuthStateChange((_event, session) => {
      auth._user = session?.user || null;
      auth._notify();
    });

    // Remove magic-link tokens from URL for cleanliness
    if (window.location.hash.includes('access_token') || window.location.search.includes('code=')) {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  })();

  auth.signIn = async (email) => {
    await auth.ready;
    const redirect = window.location.origin + window.location.pathname;
    const { error } = await auth._client.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: redirect },
    });
    if (error) throw error;
    return { ok: true };
  };

  auth.signOut = async () => {
    await auth.ready;
    await auth._client.auth.signOut();
    auth._user = null;
    auth._notify();
  };

  // --- Sync seen questions ---

  auth.loadSeen = async () => {
    await auth.ready;
    if (!auth._user) return [];
    const { data, error } = await auth._client
      .from('seen_questions')
      .select('question_text')
      .eq('user_id', auth._user.id);
    if (error) { console.error('[auth] loadSeen:', error); return []; }
    return data.map(r => r.question_text);
  };

  // Merge local seen-set with remote; push any locals not in remote
  auth.syncSeen = async (localSeen) => {
    await auth.ready;
    if (!auth._user) return { merged: Array.from(localSeen), added: 0 };

    const remote = await auth.loadSeen();
    const remoteSet = new Set(remote);
    const toPush = [];
    for (const text of localSeen) {
      if (!remoteSet.has(text)) toPush.push({ user_id: auth._user.id, question_text: text });
    }
    if (toPush.length > 0) {
      const { error } = await auth._client.from('seen_questions').upsert(toPush, { onConflict: 'user_id,question_text' });
      if (error) console.error('[auth] syncSeen push:', error);
    }
    // Merged set = union
    const merged = new Set(remote);
    for (const t of localSeen) merged.add(t);
    return { merged: Array.from(merged), added: toPush.length };
  };

  auth.markSeen = async (questionText, category) => {
    await auth.ready;
    if (!auth._user) return;
    const { error } = await auth._client.from('seen_questions')
      .upsert({ user_id: auth._user.id, question_text: questionText, category }, { onConflict: 'user_id,question_text' });
    if (error) console.error('[auth] markSeen:', error);
  };

  auth.clearSeen = async () => {
    await auth.ready;
    if (!auth._user) return;
    const { error } = await auth._client.from('seen_questions')
      .delete().eq('user_id', auth._user.id);
    if (error) console.error('[auth] clearSeen:', error);
  };

  window.KLARKREIS_AUTH = auth;
})();
