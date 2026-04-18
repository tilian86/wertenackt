// KlarKreis Audio Player — sticky kompakt, play/pause/scrub/speed/skip ±10s
// Verwendung: KlarKreisPlayer.mount(container, src, { title, sticky })
//   container: HTMLElement oder selector
//   src:       URL der MP3 (lädt onerror still — falls Datei fehlt, wird nichts angezeigt)
//   options.title:  optional Label über dem Player
//   options.sticky: true → fixed an Bildschirmunterkante
//   options.compact: true → kleinere Variante (für inline-Stationen)
//
// State persistiert: playbackRate in localStorage('klarkreis_audio_speed').

(function () {
  if (window.KlarKreisPlayer) return;

  const SPEEDS = [0.75, 1, 1.15, 1.3, 1.5, 1.75];
  const STORAGE_KEY = 'klarkreis_audio_speed';

  const CSS = `
.kk-player{font-family:'Inter',sans-serif;background:#f0eee9;border:1px solid rgba(67,72,67,.12);border-radius:.5rem;padding:.75rem 1rem;display:flex;flex-direction:column;gap:.5rem;color:#1b1c19;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.kk-player.kk-sticky{position:sticky;bottom:1rem;z-index:30;backdrop-filter:blur(8px);background:rgba(240,238,233,.94);box-shadow:0 6px 24px rgba(0,0,0,.08)}
.kk-player.kk-compact{padding:.5rem .75rem;gap:.35rem}
.kk-player .kk-title{font-size:.7rem;text-transform:uppercase;letter-spacing:.18em;color:#924c00;font-weight:600;margin-bottom:.1rem}
.kk-player .kk-row{display:flex;align-items:center;gap:.6rem}
.kk-player .kk-btn{appearance:none;border:0;background:transparent;cursor:pointer;color:#1b3022;display:inline-flex;align-items:center;justify-content:center;padding:.25rem;border-radius:999px;transition:background .15s,color .15s}
.kk-player .kk-btn:hover{background:rgba(27,48,34,.06);color:#924c00}
.kk-player .kk-btn:active{transform:scale(.95)}
.kk-player .kk-btn:disabled{opacity:.35;cursor:default}
.kk-player .kk-btn .material-symbols-outlined{font-variation-settings:'FILL' 0,'wght' 400,'opsz' 24;font-size:1.5rem}
.kk-player .kk-btn.kk-primary{background:#1b3022;color:#fff;width:42px;height:42px;border-radius:999px}
.kk-player .kk-btn.kk-primary:hover{background:#0b2013;color:#fff}
.kk-player .kk-btn.kk-primary .material-symbols-outlined{font-size:1.6rem;font-variation-settings:'FILL' 1,'wght' 500}
.kk-player .kk-time{font-variant-numeric:tabular-nums;font-size:.72rem;color:#434843;letter-spacing:.02em;min-width:80px;text-align:right}
.kk-player .kk-progress{flex:1;height:6px;background:rgba(67,72,67,.12);border-radius:999px;cursor:pointer;position:relative;overflow:hidden;touch-action:none}
.kk-player .kk-progress-fill{position:absolute;left:0;top:0;bottom:0;background:#924c00;width:0%;transition:width .08s linear;border-radius:999px}
.kk-player .kk-progress-buffered{position:absolute;left:0;top:0;bottom:0;background:rgba(67,72,67,.18);width:0%;border-radius:999px}
.kk-player .kk-speed{appearance:none;border:1px solid rgba(67,72,67,.18);background:#fff;border-radius:6px;padding:2px 4px;font-size:.7rem;color:#1b3022;font-weight:600;font-family:inherit;cursor:pointer;text-align:center}
.kk-player .kk-speed:hover{border-color:#924c00}
.kk-player.kk-loading .kk-row{opacity:.5;pointer-events:none}
.kk-player.kk-error{display:none}
@media (max-width:480px){
  .kk-player .kk-time{min-width:62px;font-size:.68rem}
  .kk-player .kk-btn .material-symbols-outlined{font-size:1.3rem}
  .kk-player .kk-btn.kk-primary{width:38px;height:38px}
}`;

  function injectCSS() {
    if (document.getElementById('kk-player-css')) return;
    const s = document.createElement('style');
    s.id = 'kk-player-css';
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  function fmtTime(sec) {
    if (!isFinite(sec) || sec < 0) sec = 0;
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  function getSpeed() {
    const v = parseFloat(localStorage.getItem(STORAGE_KEY) || '1');
    return SPEEDS.includes(v) ? v : 1;
  }
  function setSpeed(v) {
    localStorage.setItem(STORAGE_KEY, String(v));
  }

  class Player {
    constructor(container, src, opts = {}) {
      this.container = (typeof container === 'string') ? document.querySelector(container) : container;
      if (!this.container) return;
      this.src = src;
      this.opts = opts;
      this.speed = getSpeed();
      this.render();
      this.bind();
    }

    render() {
      injectCSS();
      const cls = ['kk-player', 'kk-loading'];
      if (this.opts.sticky) cls.push('kk-sticky');
      if (this.opts.compact) cls.push('kk-compact');
      const titleHtml = this.opts.title
        ? `<div class="kk-title">${this.opts.title}</div>` : '';
      this.container.innerHTML = `
        <div class="${cls.join(' ')}">
          ${titleHtml}
          <div class="kk-row">
            <button class="kk-btn kk-back" aria-label="10 Sekunden zurück" title="−10s">
              <span class="material-symbols-outlined">replay_10</span>
            </button>
            <button class="kk-btn kk-primary kk-play" aria-label="Abspielen" title="Play / Pause">
              <span class="material-symbols-outlined">play_arrow</span>
            </button>
            <button class="kk-btn kk-fwd" aria-label="10 Sekunden vor" title="+10s">
              <span class="material-symbols-outlined">forward_10</span>
            </button>
            <div class="kk-progress" role="slider" aria-label="Audio-Position">
              <div class="kk-progress-buffered"></div>
              <div class="kk-progress-fill"></div>
            </div>
            <span class="kk-time">0:00 / 0:00</span>
            <select class="kk-speed" aria-label="Geschwindigkeit">
              ${SPEEDS.map(v => `<option value="${v}"${v === this.speed ? ' selected' : ''}>${v}×</option>`).join('')}
            </select>
          </div>
        </div>`;
      this.root = this.container.querySelector('.kk-player');
      this.btnPlay = this.root.querySelector('.kk-play');
      this.btnBack = this.root.querySelector('.kk-back');
      this.btnFwd = this.root.querySelector('.kk-fwd');
      this.elProg = this.root.querySelector('.kk-progress');
      this.elFill = this.root.querySelector('.kk-progress-fill');
      this.elBuf = this.root.querySelector('.kk-progress-buffered');
      this.elTime = this.root.querySelector('.kk-time');
      this.elSpeed = this.root.querySelector('.kk-speed');

      this.audio = new Audio();
      this.audio.preload = 'metadata';
      this.audio.playbackRate = this.speed;
      this.audio.src = this.src;
    }

    bind() {
      const a = this.audio;

      a.addEventListener('loadedmetadata', () => {
        this.root.classList.remove('kk-loading');
        this.update();
      });
      a.addEventListener('timeupdate', () => this.update());
      a.addEventListener('progress', () => this.updateBuffered());
      a.addEventListener('play', () => this.setPlayIcon(true));
      a.addEventListener('pause', () => this.setPlayIcon(false));
      a.addEventListener('ended', () => this.setPlayIcon(false));
      a.addEventListener('error', () => {
        this.root.classList.add('kk-error');
        if (typeof this.opts.onError === 'function') this.opts.onError();
      });

      this.btnPlay.addEventListener('click', () => this.toggle());
      this.btnBack.addEventListener('click', () => this.skip(-10));
      this.btnFwd.addEventListener('click', () => this.skip(10));

      this.elSpeed.addEventListener('change', (e) => {
        this.speed = parseFloat(e.target.value);
        a.playbackRate = this.speed;
        setSpeed(this.speed);
        // sync mit anderen Playern auf der Page
        document.querySelectorAll('.kk-speed').forEach(s => { if (s !== this.elSpeed) s.value = this.speed; });
      });

      // Scrub: pointer events (klick + drag)
      let scrubbing = false;
      const seekFromEvent = (e) => {
        if (!isFinite(a.duration)) return;
        const r = this.elProg.getBoundingClientRect();
        const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
        const pct = Math.max(0, Math.min(1, x / r.width));
        a.currentTime = pct * a.duration;
        this.update();
      };
      this.elProg.addEventListener('pointerdown', (e) => {
        scrubbing = true;
        this.elProg.setPointerCapture(e.pointerId);
        seekFromEvent(e);
      });
      this.elProg.addEventListener('pointermove', (e) => { if (scrubbing) seekFromEvent(e); });
      this.elProg.addEventListener('pointerup', (e) => {
        scrubbing = false;
        try { this.elProg.releasePointerCapture(e.pointerId); } catch (_) {}
      });
    }

    update() {
      const a = this.audio;
      const cur = a.currentTime || 0;
      const dur = a.duration || 0;
      this.elFill.style.width = dur ? (cur / dur * 100) + '%' : '0%';
      this.elTime.textContent = `${fmtTime(cur)} / ${fmtTime(dur)}`;
    }
    updateBuffered() {
      const a = this.audio;
      if (!a.buffered.length || !a.duration) return;
      const end = a.buffered.end(a.buffered.length - 1);
      this.elBuf.style.width = (end / a.duration * 100) + '%';
    }
    setPlayIcon(playing) {
      this.btnPlay.querySelector('.material-symbols-outlined').textContent = playing ? 'pause' : 'play_arrow';
      this.btnPlay.setAttribute('aria-label', playing ? 'Pause' : 'Abspielen');
    }
    toggle() {
      if (this.audio.paused) {
        // pause alle anderen Player
        document.querySelectorAll('audio').forEach(o => { if (o !== this.audio && !o.paused) o.pause(); });
        this.audio.play().catch(() => {});
      } else {
        this.audio.pause();
      }
    }
    skip(delta) {
      if (!isFinite(this.audio.duration)) return;
      this.audio.currentTime = Math.max(0, Math.min(this.audio.duration, this.audio.currentTime + delta));
      this.update();
    }
    setSrc(src) {
      this.audio.pause();
      this.audio.src = src;
      this.root.classList.remove('kk-error');
      this.root.classList.add('kk-loading');
    }
    destroy() {
      this.audio.pause();
      this.audio.src = '';
      this.container.innerHTML = '';
    }
  }

  // Convenience: probiert ob die Datei existiert (HEAD), mounted nur dann.
  function mountIfExists(container, src, opts) {
    return fetch(src, { method: 'HEAD' }).then(r => {
      if (!r.ok) return null;
      return new Player(container, src, opts || {});
    }).catch(() => null);
  }

  // Slug-Helper (muss synchron sein mit Build-Skript)
  function slug(s) {
    return (s || '').toLowerCase()
      .replace(/[äöüß]/g, c => ({ ä: 'ae', ö: 'oe', ü: 'ue', ß: 'ss' }[c]))
      .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function audioPath(themeId, format, stationIndex, stationName) {
    const num = String(stationIndex + 1).padStart(2, '0');
    return `audio/${themeId}/${format}/${num}-${slug(stationName)}.mp3`;
  }
  function introPath(themeId) {
    return `audio/${themeId}/00-intro.mp3`;
  }

  window.KlarKreisPlayer = {
    mount: (container, src, opts) => new Player(container, src, opts || {}),
    mountIfExists,
    audioPath,
    introPath,
  };
})();
