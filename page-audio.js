// page-audio.js
// Fügt inline Play-Buttons in Sektionen mit [data-page-audio="page/section"] ein.
// Audio-Datei liegt unter audio/pages/<page>/<section>.mp3 — erscheint nur, wenn
// die Datei existiert (HEAD-Check). Nur ein Audio läuft gleichzeitig.
(function () {
  const sections = document.querySelectorAll('[data-page-audio]');
  if (!sections.length) return;

  // Globaler Audio-Slot: nur eins spielt gleichzeitig.
  let activeAudio = null;
  let activeBtn = null;

  function stopActive() {
    if (activeAudio) {
      activeAudio.pause();
      activeAudio.currentTime = 0;
    }
    if (activeBtn) {
      activeBtn.dataset.state = 'idle';
      activeBtn.querySelector('.page-audio-icon').textContent = 'play_arrow';
      activeBtn.querySelector('.page-audio-label').textContent = 'Anhören';
    }
    activeAudio = null;
    activeBtn = null;
  }

  sections.forEach(section => {
    const key = section.getAttribute('data-page-audio');
    const url = 'audio/pages/' + key + '.mp3';

    // HEAD-Check: Button nur einfügen, wenn Audio existiert.
    fetch(url, { method: 'HEAD' }).then(r => {
      if (!r.ok) return;

      const btn = document.createElement('button');
      btn.className = 'page-audio-btn inline-flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant/30 bg-surface-container-low hover:bg-surface-container hover:border-secondary/50 text-on-surface-variant hover:text-secondary transition-all duration-200 font-label text-[11px] uppercase tracking-[0.15em] mb-6';
      btn.setAttribute('aria-label', 'Abschnitt anhören');
      btn.dataset.state = 'idle';
      btn.innerHTML = '<span class="material-symbols-outlined page-audio-icon text-[18px]">play_arrow</span><span class="page-audio-label">Anhören</span>';

      // Einfügen vor dem ersten Kind der Sektion (i.d.R. Headline oder Label).
      section.insertBefore(btn, section.firstChild);

      const audio = new Audio(url);
      audio.preload = 'none';

      btn.addEventListener('click', () => {
        if (btn.dataset.state === 'playing') {
          stopActive();
          return;
        }
        // Wenn anderes Audio läuft: stoppen.
        if (activeAudio && activeAudio !== audio) stopActive();

        audio.play().then(() => {
          activeAudio = audio;
          activeBtn = btn;
          btn.dataset.state = 'playing';
          btn.querySelector('.page-audio-icon').textContent = 'pause';
          btn.querySelector('.page-audio-label').textContent = 'Pause';
        }).catch(err => console.warn('page-audio:', err));
      });

      audio.addEventListener('ended', () => {
        if (activeBtn === btn) stopActive();
      });
    }).catch(() => {});
  });
})();
