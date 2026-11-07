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
  // RESILIENT MULTI-ENGINE CHINESE AUDIO PLAYER (Baidu -> Google -> WebSpeech)
  // Supports Slow / Normal / Fast speed setting from User Settings
  // ==============================================================
  const AudioEngine = {
    activeAudio: null,
    play(text, options = {}) {
      if (!text) return;
      text = String(text).trim();
      if (!text) return;

      if (this.activeAudio) {
        try {
          this.activeAudio.pause();
          this.activeAudio.currentTime = 0;
        } catch (e) {}
        this.activeAudio = null;
      }

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
        },
        getBaiduSpeed: () => {
          try {
            const raw = localStorage.getItem('premiumChinesWebSettings_v1');
            const s = raw ? JSON.parse(raw).speechSpeed || 'normal' : 'normal';
            return s === 'slow' ? 3 : (s === 'fast' ? 7 : 5);
          } catch (e) { return 5; }
        }
      };

      const spdHelper = getSpeedObj();
      const spd = spdHelper.getBaiduSpeed();
      const playbackRate = spdHelper.getPlaybackRate();
      const speechRate = spdHelper.getRate();

      if (typeof options.onStart === 'function') options.onStart();

      let hasFinished = false;
      const onDone = () => {
        if (hasFinished) return;
        hasFinished = true;
        if (typeof options.onEnd === 'function') options.onEnd();
      };

      // Strategy 1: Baidu TTS (native Beijing Mandarin MP3 with speed parameter)
      const baiduUrl = `https://fanyi.baidu.com/gettts?lan=zh&text=${encodeURIComponent(text)}&spd=${spd}&source=web`;
      // Strategy 2: Google Translate TTS
      const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(text)}`;

      const tryAudioUrl = (url, fallbackFn) => {
        const audio = new Audio();
        this.activeAudio = audio;
        audio.playbackRate = playbackRate;

        let timer = setTimeout(() => {
          fallbackFn();
        }, 3200);

        audio.onended = () => {
          clearTimeout(timer);
          onDone();
        };

        audio.onerror = () => {
          clearTimeout(timer);
          fallbackFn();
        };

        audio.src = url;
        audio.play().catch(() => {
          clearTimeout(timer);
          fallbackFn();
        });
      };

      const trySpeechSynthesis = () => {
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

      tryAudioUrl(baiduUrl, () => {
        tryAudioUrl(googleUrl, () => {
          trySpeechSynthesis();
        });
      });
    }
  };

  window.GH_Audio = AudioEngine;
})();
