// Mobile-Navigation für KlarKreis.
// Findet das existierende Desktop-Menü <nav class="hidden md:flex …">
// und baut daneben einen Hamburger-Button, der auf Mobile ein Dropdown
// mit denselben Links zeigt. Kein Eingriff ins bestehende Markup nötig.
(function () {
  if (window._kkMobileNav) return;
  window._kkMobileNav = true;

  const CSS = `
.kk-burger{display:none;background:none;border:0;padding:.4rem;cursor:pointer;color:#1b3022;border-radius:6px;transition:background .15s}
.kk-burger:hover{background:rgba(27,48,34,.06)}
.kk-burger .material-symbols-outlined{font-size:1.75rem;font-variation-settings:'FILL' 0,'wght' 400}
.kk-mobile-menu{display:none;position:absolute;top:100%;right:0;left:0;background:rgba(251,249,244,.98);backdrop-filter:blur(10px);border-top:1px solid rgba(67,72,67,.1);box-shadow:0 8px 24px rgba(0,0,0,.06);z-index:40}
.kk-mobile-menu.kk-open{display:block}
.kk-mobile-menu a{display:block;padding:1rem 2rem;font-family:'Noto Serif',serif;font-size:1.05rem;color:#1b1c19;border-bottom:1px solid rgba(67,72,67,.06);transition:background .15s,color .15s;text-decoration:none}
.kk-mobile-menu a:last-child{border-bottom:0}
.kk-mobile-menu a:hover{background:rgba(146,76,0,.04);color:#924c00}
.kk-mobile-menu a.kk-active{color:#924c00;font-weight:600}
@media (max-width:767px){
  .kk-burger{display:inline-flex;align-items:center;justify-content:center}
}`;

  function inject() {
    // Ziel: das erste Element mit Klasse "hidden md:flex" innerhalb eines <nav>-/<header>-Bereichs.
    const desktopNav = document.querySelector('nav.hidden.md\\:flex, nav .hidden.md\\:flex');
    if (!desktopNav) {
      // Fallback: <nav> mit class="hidden md:flex …"
      const nav = Array.from(document.querySelectorAll('nav')).find(n => n.classList.contains('hidden') && n.classList.contains('md:flex'));
      if (!nav) return;
      buildFor(nav);
      return;
    }
    buildFor(desktopNav);
  }

  function buildFor(desktopNav) {
    const links = Array.from(desktopNav.querySelectorAll('a[href]'));
    if (!links.length) return;

    // CSS einfügen
    if (!document.getElementById('kk-mobile-nav-css')) {
      const st = document.createElement('style');
      st.id = 'kk-mobile-nav-css';
      st.textContent = CSS;
      document.head.appendChild(st);
    }

    // Hamburger-Button neben dem Desktop-Menü in dessen Parent einfügen
    const parent = desktopNav.parentElement;
    if (!parent || parent.querySelector('.kk-burger')) return;

    const burger = document.createElement('button');
    burger.className = 'kk-burger';
    burger.setAttribute('aria-label', 'Menü öffnen');
    burger.setAttribute('aria-expanded', 'false');
    burger.innerHTML = '<span class="material-symbols-outlined">menu</span>';
    parent.appendChild(burger);

    // Mobile-Menü als Dropdown an <header>/<nav>-Container hängen (muss relativ sein)
    const anchor = parent.closest('header, nav') || parent;
    const host = anchor.parentElement && anchor.parentElement.style
      ? anchor.parentElement : anchor;
    // relative positioning fürs absolute dropdown
    const anchorStyle = getComputedStyle(anchor);
    if (anchorStyle.position === 'static') anchor.style.position = 'relative';

    const menu = document.createElement('div');
    menu.className = 'kk-mobile-menu';
    menu.innerHTML = links.map(a => {
      const href = a.getAttribute('href') || '#';
      const isActive = location.pathname.endsWith(href.split('?')[0]) || href === 'index.html' && (location.pathname === '/' || location.pathname.endsWith('/index.html'));
      return `<a href="${href}" class="${isActive ? 'kk-active' : ''}">${a.textContent.trim()}</a>`;
    }).join('');
    anchor.appendChild(menu);

    burger.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = menu.classList.toggle('kk-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.querySelector('.material-symbols-outlined').textContent = open ? 'close' : 'menu';
    });
    document.addEventListener('click', (e) => {
      if (menu.classList.contains('kk-open') && !menu.contains(e.target) && e.target !== burger && !burger.contains(e.target)) {
        menu.classList.remove('kk-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.querySelector('.material-symbols-outlined').textContent = 'menu';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
