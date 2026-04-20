// KlarKreis Login-UI — fügt Login-Button rechts in den Header ein,
// öffnet ein Modal für Magic-Link-Login.
// Lädt nur wenn Supabase aktiv (config.js mit anon-Key befüllt).

(function () {
  if (!window.KLARKREIS_AUTH || !window.KLARKREIS_AUTH.enabled) return;

  const auth = window.KLARKREIS_AUTH;

  // Inject button into existing nav
  function mountButton() {
    // Find nav block (varies slightly per page)
    const nav = document.querySelector('header nav') || document.querySelector('nav div.md\\:flex');
    if (!nav || document.getElementById('klarkreisLoginBtn')) return;

    const wrap = document.createElement('div');
    wrap.id = 'klarkreisLoginWrap';
    wrap.className = 'hidden md:flex items-center ml-6 relative';
    wrap.innerHTML = `
      <button id="klarkreisLoginBtn" class="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-widest font-semibold text-on-background/60 hover:text-secondary transition-colors">
        <span class="material-symbols-outlined text-[16px]">person</span>
        <span id="klarkreisLoginLabel">Einloggen</span>
      </button>
      <div id="klarkreisUserMenu" class="hidden absolute top-full right-0 mt-2 bg-surface-bright border border-outline-variant/30 rounded-lg shadow-lg py-2 min-w-[180px] z-50">
        <p class="px-4 py-2 text-[10px] uppercase tracking-widest text-on-surface-variant/60" id="klarkreisUserEmail"></p>
        <div class="border-t border-outline-variant/20 my-1"></div>
        <button id="klarkreisLogoutBtn" class="w-full text-left px-4 py-2 text-[11px] uppercase tracking-widest text-on-background hover:bg-surface-container-low transition-colors">Abmelden</button>
      </div>
    `;
    nav.parentElement.appendChild(wrap);

    document.getElementById('klarkreisLoginBtn').addEventListener('click', () => {
      if (auth.user()) {
        // Toggle user menu
        const menu = document.getElementById('klarkreisUserMenu');
        menu.classList.toggle('hidden');
      } else {
        openLoginModal();
      }
    });

    document.getElementById('klarkreisLogoutBtn').addEventListener('click', async () => {
      await auth.signOut();
      document.getElementById('klarkreisUserMenu').classList.add('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target)) {
        document.getElementById('klarkreisUserMenu')?.classList.add('hidden');
      }
    });

    updateButtonLabel();
  }

  function updateButtonLabel() {
    const label = document.getElementById('klarkreisLoginLabel');
    const emailEl = document.getElementById('klarkreisUserEmail');
    if (!label) return;
    const user = auth.user();
    if (user) {
      label.textContent = 'Konto';
      if (emailEl) emailEl.textContent = user.email || 'Eingeloggt';
    } else {
      label.textContent = 'Einloggen';
      if (emailEl) emailEl.textContent = '';
    }
  }

  function openLoginModal() {
    if (document.getElementById('klarkreisLoginModal')) return;
    const modal = document.createElement('div');
    modal.id = 'klarkreisLoginModal';
    modal.className = 'fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary-container/40 backdrop-blur-sm';
    modal.innerHTML = `
      <div class="bg-surface-bright rounded-xl p-8 md:p-10 max-w-md w-full relative shadow-2xl">
        <button id="klarkreisModalClose" class="absolute top-4 right-4 text-on-surface-variant/50 hover:text-on-background">
          <span class="material-symbols-outlined">close</span>
        </button>
        <p class="font-label uppercase tracking-[0.2em] text-[11px] text-secondary mb-3">Einloggen</p>
        <h3 class="font-serif text-2xl md:text-3xl text-primary-container mb-4">Du kriegst einen Magic-Link.</h3>
        <p class="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
          Gib deine Email ein. Wir schicken Dir einen Link — ein Klick, Du bist drin. Kein Passwort nötig.
        </p>
        <form id="klarkreisLoginForm" class="space-y-4">
          <input id="klarkreisEmailInput" type="email" required placeholder="dein@email.de"
            class="w-full px-4 py-3 rounded-lg border border-outline-variant/40 bg-surface-container-low text-on-background focus:outline-none focus:border-secondary transition-colors"/>
          <button type="submit" id="klarkreisSubmitBtn" class="w-full bg-primary-container text-on-primary px-6 py-3 rounded-lg text-[11px] uppercase tracking-widest font-semibold hover:opacity-90 transition-opacity">
            Link schicken
          </button>
        </form>
        <p id="klarkreisLoginMsg" class="mt-4 text-sm text-on-surface-variant hidden"></p>
        <p class="mt-6 text-[10px] uppercase tracking-widest text-on-surface-variant/50">
          Geräte-Sync und Historie. Nur optional — KlarKreis läuft auch ohne.
        </p>
      </div>
    `;
    document.body.appendChild(modal);

    const closeModal = () => modal.remove();
    document.getElementById('klarkreisModalClose').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', esc); }
    });

    document.getElementById('klarkreisLoginForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('klarkreisEmailInput').value.trim();
      const btn = document.getElementById('klarkreisSubmitBtn');
      const msg = document.getElementById('klarkreisLoginMsg');
      if (!email) return;
      btn.disabled = true;
      btn.textContent = 'Wird gesendet…';
      msg.classList.add('hidden');
      try {
        await auth.signIn(email);
        msg.classList.remove('hidden');
        msg.className = 'mt-4 text-sm text-primary-container';
        msg.innerHTML = '✓ Check deine Mails. Der Link ist ca. 1 Stunde gültig.';
        btn.textContent = 'Gesendet';
      } catch (err) {
        msg.classList.remove('hidden');
        msg.className = 'mt-4 text-sm text-error';
        msg.textContent = err.message || 'Das hat nicht geklappt. Probier es gleich nochmal.';
        btn.disabled = false;
        btn.textContent = 'Nochmal versuchen';
      }
    });
  }

  // React to auth changes
  auth.onChange(() => updateButtonLabel());

  // Mount when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountButton);
  } else {
    mountButton();
  }
})();
