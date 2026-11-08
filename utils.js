(() => {
  const GH = window.GH = window.GH || {};
  GH.utils = {
    escapeHtml(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },
    todayKey(d = new Date()) {
      if (!(d instanceof Date) || isNaN(d)) d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    },
    yesterdayKey(d = new Date()) {
      if (!(d instanceof Date) || isNaN(d)) d = new Date();
      const prev = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
      return this.todayKey(prev);
    },
    clamp(n,min,max){ return Math.min(max,Math.max(min,n)); },
    debounce(fn,wait=180){ let t; return (...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),wait)}; },
    get(obj,path, fallback=null){ return String(path).split('.').reduce((a,k)=>a?.[k],obj) ?? fallback; },
    toast(message,type='info'){ let el=document.getElementById('gh-toast'); if(!el){el=document.createElement('div');el.id='gh-toast';el.className='gh-toast';document.body.appendChild(el)} el.textContent=message;el.dataset.type=type;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),2800); }
  };

  // ==============================================================
  // RESILIENT MULTI-ENGINE CHINESE AUDIO PLAYER (Mobile & Desktop)
  // 100% reliable on iOS Safari, Android Chrome, and Desktop browsers.
  // ==============================================================
  let globalAudio = null;
  let audioUnlocked = false;

  function getGlobalAudio() {
    if (!globalAudio) {
      globalAudio = new Audio();
      globalAudio.id = 'gh-global-audio';
      globalAudio.preload = 'auto';
      globalAudio.setAttribute('playsinline', '');
      globalAudio.setAttribute('webkit-playsinline', '');
    }
    return globalAudio;
  }

  // Pre-unlock audio on first touch/click (critical for iOS Safari & Android Chrome)
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    const a = getGlobalAudio();
    // Silent tiny wav to unlock audio hardware on mobile
    a.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
    const p = a.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        a.pause();
        a.currentTime = 0;
      }).catch(() => {});
    }
    if ('speechSynthesis' in window) {
      try { window.speechSynthesis.resume(); } catch (e) {}
    }
  }

  if (typeof document !== 'undefined') {
    document.addEventListener('touchstart', unlockAudio, { once: true, passive: true });
    document.addEventListener('touchend', unlockAudio, { once: true, passive: true });
    document.addEventListener('click', unlockAudio, { once: true, passive: true });
  }

  const AudioEngine = {
    play(text, options = {}) {
      if (!text) return;
      text = String(text).trim();
      if (!text) return;

      unlockAudio();

      // Retrieve speed from user settings
      const getSpeedObj = () => window.GH_SPEECH || {
        getSpeed: () => {
          try {
            const raw = localStorage.getItem('premiumChinesWebSettings_v1');
            return raw ? JSON.parse(raw).speechSpeed || 'normal' : 'normal';
          } catch (e) { return 'normal'; }
        },
        getRate: () => {
          try {
            const raw = localStorage.getItem('premiumChinesWebSettings_v1');
            const s = raw ? JSON.parse(raw).speechSpeed || 'normal' : 'normal';
            return s === 'slow' ? 0.65 : (s === 'fast' ? 1.15 : 0.85);
          } catch (e) { return 0.85; }
        },
        getPlaybackRate: () => {
          try {
            const raw = localStorage.getItem('premiumChinesWebSettings_v1');
            const s = raw ? JSON.parse(raw).speechSpeed || 'normal' : 'normal';
            return s === 'slow' ? 0.75 : (s === 'fast' ? 1.25 : 1.0);
          } catch (e) { return 1.0; }
        }
      };

      const spdHelper = getSpeedObj();
      const playbackRate = spdHelper.getPlaybackRate();
      const speechRate = spdHelper.getRate();

      if (typeof options.onStart === 'function') options.onStart();

      let finished = false;
      const onDone = () => {
        if (finished) return;
        finished = true;
        if (typeof options.onEnd === 'function') options.onEnd();
      };

      // Native SpeechSynthesis fallback
      const trySpeechSynth = () => {
        if ('speechSynthesis' in window) {
          try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'zh-CN';
            u.rate = speechRate;
            const voices = window.speechSynthesis.getVoices() || [];
            const zhVoice = voices.find(v => v.lang && (v.lang.includes('zh') || v.lang.includes('cmn')));
            if (zhVoice) u.voice = zhVoice;
            u.onend = onDone;
            u.onerror = onDone;
            window.speechSynthesis.speak(u);
            return;
          } catch (e) {}
        }
        onDone();
      };

      // NetEase Youdao native Beijing Mandarin MP3 voice (100% reliable on mobile and PC)
      const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=zh`;

      const audio = getGlobalAudio();
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (e) {}

      audio.playbackRate = playbackRate;

      let fallbackTimeout = setTimeout(() => {
        trySpeechSynth();
      }, 3500);

      audio.onended = () => {
        clearTimeout(fallbackTimeout);
        onDone();
      };

      audio.onerror = () => {
        clearTimeout(fallbackTimeout);
        trySpeechSynth();
      };

      audio.src = youdaoUrl;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err) => {
          console.warn('Audio play error, falling back to speech synthesis:', err);
          clearTimeout(fallbackTimeout);
          trySpeechSynth();
        });
      }
    }
  };

  window.GH_Audio = AudioEngine;
})();
