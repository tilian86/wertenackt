// page-audio.js
// Fügt in jede Sektion mit [data-page-audio="page/section"] einen Mini-Player
// ein — Play/Pause, Scrub-Bar, Geschwindigkeits-Toggle. Geschwindigkeit wird
// seitenübergreifend persistiert in localStorage (Key: klarkreis:playbackRate).
// HEAD-Check sorgt dafür, dass der Player nur bei existierender Audio-Datei
// erscheint. Nur ein Audio spielt gleichzeitig.
//
// Zusätzlich als wiederverwendbare Komponente exportiert:
//   window.KlarKreisMiniPlayer.insert(mountEl, audioUrl)
//   window.KlarKreisMiniPlayer.setUrl(mountEl, newUrl)
// für Stellen, an denen Audio dynamisch wechselt (Impulse-Ziehen etc.).

(function () {
  // Globales Speed-Setting, geteilt über alle Player der Seite UND über Seiten hinweg.
  const SPEEDS = [1, 1.25, 1.5, 1.75, 2, 0.75];
  function getRate() {
    const stored = parseFloat(localStorage.getItem('klarkreis:playbackRate') || '1');
    return SPEEDS.includes(stored) ? stored : 1;
  }
  function setRate(r) {
    localStorage.setItem('klarkreis:playbackRate', String(r));
    document.querySelectorAll('audio[data-klarkreis-audio]').forEach(a => { a.playbackRate = r; });
    document.querySelectorAll('.kk-speed-btn').forEach(b => { b.textContent = r + '×'; });
  }

  // Aktives Audio: nur eins spielt gleichzeitig (global über alle Player).
  let activeAudio = null;
  let activeBtn = null;

  function fmt(t) {
    if (!isFinite(t)) return '0:00';
    const m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }

  // Baut einen Mini-Player und gibt ein API-Handle zurück.
  // theme: 'light' (Standard) für helle Seiten, 'dark' für dunkle Cards.
  function buildPlayer(url, opts) {
    opts = opts || {};
    const dark = opts.theme === 'dark';
    const wrap = document.createElement('div');
    wrap.className = 'page-audio-wrap inline-flex flex-wrap items-center gap-3 rounded-full px-4 py-2 transition-colors ' +
      (dark
        ? 'bg-on-primary/10 border border-on-primary/15 backdrop-blur-sm'
        : 'bg-surface-container-low/80 border border-outline-variant/30');

    const play = document.createElement('button');
    play.className = 'kk-play-btn flex items-center justify-center w-9 h-9 rounded-full transition-colors flex-shrink-0 ' +
      (dark ? 'bg-on-primary/15 hover:bg-on-primary/25 text-on-primary' : 'bg-secondary/10 hover:bg-secondary/20 text-secondary');
    play.setAttribute('aria-label', 'Anhören');
    play.innerHTML = '<span class="material-symbols-outlined text-[20px] kk-play-icon" style="font-variation-settings: \'FILL\' 1;">play_arrow</span>';

    const label = document.createElement('span');
    label.className = 'kk-play-label font-label text-[11px] uppercase tracking-[0.15em] select-none ' +
      (dark ? 'text-secondary-fixed-dim' : 'text-on-surface-variant');
    label.textContent = opts.label || 'Anhören';

    const bar = document.createElement('input');
    bar.type = 'range'; bar.min = 0; bar.max = 1000; bar.value = 0;
    bar.className = 'kk-seek hidden appearance-none h-1 rounded-full cursor-pointer ' +
      (dark ? 'bg-on-primary/20' : 'bg-outline-variant/40');
    bar.style.width = '140px';
    bar.style.accentColor = '#924c00';

    const time = document.createElement('span');
    time.className = 'kk-time hidden font-label text-[10px] tabular-nums select-none ' +
      (dark ? 'text-on-primary/60' : 'text-on-surface-variant/60');
    time.textContent = '0:00';

    const speed = document.createElement('button');
    speed.className = 'kk-speed-btn font-label text-[10px] uppercase tracking-wider transition-colors px-2 py-1 rounded select-none ' +
      (dark ? 'text-secondary-fixed-dim/80 hover:text-on-primary' : 'text-on-surface-variant/70 hover:text-secondary');
    speed.setAttribute('aria-label', 'Geschwindigkeit ändern');
    speed.title = 'Geschwindigkeit (klick zum Ändern)';
    speed.textContent = getRate() + '×';

    wrap.appendChild(play);
    wrap.appendChild(label);
    wrap.appendChild(bar);
    wrap.appendChild(time);
    wrap.appendChild(speed);

    const audio = new Audio();
    audio.preload = 'none';
    audio.setAttribute('data-klarkreis-audio', '1');
    audio.playbackRate = getRate();
    if (url) audio.src = url;

    function showControls() { bar.classList.remove('hidden'); time.classList.remove('hidden'); label.classList.add('hidden'); }
    function hideControls() { bar.classList.add('hidden'); time.classList.add('hidden'); label.classList.remove('hidden'); }
    function resetUI() {
      play.querySelector('.kk-play-icon').textContent = 'play_arrow';
      label.textContent = opts.label || 'Anhören';
      hideControls();
    }

    function stopOthers() {
      if (activeAudio && activeAudio !== audio) { activeAudio.pause(); activeAudio.currentTime = 0; }
      if (activeBtn && activeBtn !== wrap) {
        const b = activeBtn;
        b.querySelector('.kk-play-icon').textContent = 'play_arrow';
        const lbl = b.querySelector('.kk-play-label');
        if (lbl) lbl.textContent = b.dataset.idleLabel || 'Anhören';
        b.querySelector('.kk-seek').classList.add('hidden');
        b.querySelector('.kk-time').classList.add('hidden');
        if (lbl) lbl.classList.remove('hidden');
      }
    }

    play.addEventListener('click', () => {
      if (!audio.paused) {
        audio.pause();
        play.querySelector('.kk-play-icon').textContent = 'play_arrow';
        label.textContent = 'Weiter';
        return;
      }
      stopOthers();
      audio.playbackRate = getRate();
      audio.play().then(() => {
        activeAudio = audio; activeBtn = wrap;
        play.querySelector('.kk-play-icon').textContent = 'pause';
        showControls();
      }).catch(() => {});
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        bar.value = (audio.currentTime / audio.duration) * 1000;
        time.textContent = fmt(audio.currentTime) + ' / ' + fmt(audio.duration);
      }
    });

    bar.addEventListener('input', () => {
      if (audio.duration) audio.currentTime = (bar.value / 1000) * audio.duration;
    });

    audio.addEventListener('ended', () => {
      resetUI();
      label.textContent = 'Nochmal anhören';
      if (activeAudio === audio) { activeAudio = null; activeBtn = null; }
    });

    speed.addEventListener('click', (e) => {
      e.stopPropagation();
      const cur = getRate();
      const next = SPEEDS[(SPEEDS.indexOf(cur) + 1) % SPEEDS.length];
      setRate(next);
    });

    wrap.dataset.idleLabel = opts.label || 'Anhören';

    return {
      element: wrap,
      audio: audio,
      setUrl(newUrl) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = newUrl || '';
        resetUI();
      }
    };
  }

  // Öffentliche API
  window.KlarKreisMiniPlayer = {
    insert(mountEl, url, opts) {
      if (!mountEl) return null;
      mountEl.innerHTML = '';
      const p = buildPlayer(url, opts);
      mountEl.appendChild(p.element);
      return p;
    },
    getRate, setRate, SPEEDS
  };

  // --- Auto-Mount für [data-page-audio] Sektionen ---
  const sections = document.querySelectorAll('[data-page-audio]');
  sections.forEach(section => {
    const key = section.getAttribute('data-page-audio');
    const url = 'audio/pages/' + key + '.mp3';
    fetch(url, { method: 'HEAD' }).then(r => {
      if (!r.ok) return;
      const p = buildPlayer(url, { label: 'Abschnitt anhören' });
      p.element.classList.add('mb-6');
      section.insertBefore(p.element, section.firstChild);
    }).catch(() => {});
  });
})();
