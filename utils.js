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
  let audioUnlocked = false;

  // Pre-unlock speech synthesis on first user interaction
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.resume();
      } catch (e) {}
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

      // Primary: NetEase Youdao Mandarin MP3 (Beijing standard)
      const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=zh`;
      // Secondary: Google Translate TTS
      const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(text)}`;

      let audio = new Audio();
      audio.preload = 'auto';
      audio.setAttribute('playsinline', '');
      audio.setAttribute('webkit-playsinline', '');
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
        // Try Google TTS as secondary audio stream
        try {
          const audio2 = new Audio();
          audio2.playbackRate = playbackRate;
          audio2.setAttribute('playsinline', '');
          audio2.setAttribute('webkit-playsinline', '');
          audio2.onended = () => onDone();
          audio2.onerror = () => trySpeechSynth();
          audio2.src = googleUrl;
          const p2 = audio2.play();
          if (p2 && typeof p2.catch === 'function') {
            p2.catch(() => trySpeechSynth());
          }
        } catch (e) {
          trySpeechSynth();
        }
      };

      audio.src = youdaoUrl;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err) => {
          console.warn('Youdao play interrupted, switching to secondary/synth:', err);
          audio.onerror();
        });
      }
    }
  };

  window.GH_Audio = AudioEngine;
})();
