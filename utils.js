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
  // SINGLE-VOICE RESILIENT AUDIO ENGINE (100% RELIABLE PC & MOBILE)
  // 1. Google Translate TTS (Primary - standard Mandarin, supports words & full sentences)
  // 2. Baidu Translate TTS (Secondary - Beijing standard, CDN fast fallback)
  // 3. Web SpeechSynthesis (Tertiary - offline fallback)
  // Bảo đảm: CHỈ 1 GIỌNG NÓI DUY NHẤT, KHÔNG CHỒNG CHÉO, KHÔNG BAO GIỜ MẤT TIẾNG.
  // ==============================================================
  let audioUnlocked = false;
  let sharedAudio = null;
  let playSeq = 0;
  let activeFallbackTimer = null;

  function getSharedAudio() {
    if (!sharedAudio && typeof Audio !== 'undefined') {
      try {
        sharedAudio = new Audio();
        sharedAudio.setAttribute('playsinline', '');
        sharedAudio.setAttribute('webkit-playsinline', '');
        sharedAudio.preload = 'auto';
      } catch (e) {}
    }
    return sharedAudio;
  }

  function stopAllAudio() {
    playSeq++; // Ngay lập tức vô hiệu hóa mọi callback của lần phát trước
    if (activeFallbackTimer) {
      clearTimeout(activeFallbackTimer);
      activeFallbackTimer = null;
    }
    const a = getSharedAudio();
    if (a) {
      try {
        a.pause();
        a.currentTime = 0;
      } catch (e) {}
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

  // Pre-unlock audio on first user touch / click for iOS & mobile browsers
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    const a = getSharedAudio();
    if (a) {
      try {
        // Silent 1-sample WAV unlock
        a.src = 'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEARKwAAIhYAQACABAAZGF0YQAAAAA=';
        const p = a.play();
        if (p && typeof p.then === 'function') {
          p.then(() => {
            a.pause();
            a.currentTime = 0;
          }).catch(() => {});
        }
      } catch (e) {}
    }
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
    stop: stopAllAudio,
    play(text, options = {}) {
      if (!text) return;
      text = String(text).trim();
      if (!text) return;

      // 1. Dừng ngay bất kỳ âm thanh nào đang phát trước đó (Đảm bảo chỉ 1 giọng)
      stopAllAudio();
      unlockAudio();

      const thisSeq = playSeq;

      // User speed settings
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
        if (thisSeq !== playSeq) return;
        if (finished) return;
        finished = true;
        if (typeof options.onEnd === 'function') options.onEnd();
      };

      // Native SpeechSynthesis (dự phòng offline)
      const trySpeechSynth = () => {
        if (thisSeq !== playSeq) return;
        if ('speechSynthesis' in window) {
          try {
            window.speechSynthesis.cancel();
            window.speechSynthesis.resume();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'zh-CN';
            u.rate = speechRate;
            const voices = window.speechSynthesis.getVoices() || [];
            const zhVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN')
                         || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('zh-cn'))
                         || voices.find(v => v.lang && (v.lang.includes('zh') || v.lang.includes('cmn')));
            if (zhVoice) u.voice = zhVoice;
            u.onend = () => { if (thisSeq === playSeq) onDone(); };
            u.onerror = () => { if (thisSeq === playSeq) onDone(); };
            window.speechSynthesis.speak(u);
            return;
          } catch (e) {}
        }
        onDone();
      };

      // URL Sources:
      // Primary: Google Translate TTS (chuẩn Mandarin quốc tế, mượt mà cả từ ngắn lẫn câu dài)
      const googleUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=zh-CN&client=tw-ob&q=${encodeURIComponent(text)}`;
      // Secondary: Baidu Translate TTS (chuẩn Bắc Kinh)
      const baiduUrl = `https://fanyi.baidu.com/gettts?lan=zh&text=${encodeURIComponent(text)}&spd=5&source=web`;

      const audio = getSharedAudio();
      if (!audio) {
        trySpeechSynth();
        return;
      }

      audio.playbackRate = playbackRate;

      // Hàm phát một URL âm thanh, bảo đảm 1 giọng duy nhất
      const playUrl = (url, nextFallback) => {
        if (thisSeq !== playSeq) return;

        let hasStarted = false;
        const cancelTimer = () => {
          if (activeFallbackTimer) {
            clearTimeout(activeFallbackTimer);
            activeFallbackTimer = null;
          }
        };

        audio.onplay = () => {
          if (thisSeq !== playSeq) return;
          hasStarted = true;
          cancelTimer();
        };

        audio.onplaying = () => {
          if (thisSeq !== playSeq) return;
          hasStarted = true;
          cancelTimer();
        };

        audio.ontimeupdate = () => {
          if (thisSeq !== playSeq) return;
          if (audio.currentTime > 0) {
            hasStarted = true;
            cancelTimer();
          }
        };

        audio.onended = () => {
          if (thisSeq !== playSeq) return;
          cancelTimer();
          onDone();
        };

        audio.onerror = () => {
          if (thisSeq !== playSeq) return;
          cancelTimer();
          nextFallback();
        };

        // Fallback timer nếu URL bị treo hoặc quá lâu không tải được
        cancelTimer();
        activeFallbackTimer = setTimeout(() => {
          if (thisSeq !== playSeq) return;
          if (hasStarted || (!audio.paused && audio.currentTime > 0)) {
            cancelTimer();
            return;
          }
          nextFallback();
        }, 4000);

        try {
          audio.src = url;
          const p = audio.play();
          if (p && typeof p.catch === 'function') {
            p.catch(err => {
              if (thisSeq !== playSeq) return;
              // Nếu play() bị gián đoạn do click mới, không fallback
              if (err && err.name === 'AbortError') return;
              cancelTimer();
              nextFallback();
            });
          }
        } catch (e) {
          cancelTimer();
          nextFallback();
        }
      };

      // Ưu tiên 1: Google TTS -> Nếu lỗi chuyển Ưu tiên 2: Baidu TTS -> Nếu lỗi chuyển Dự phòng 3: SpeechSynthesis
      playUrl(googleUrl, () => {
        playUrl(baiduUrl, () => {
          trySpeechSynth();
        });
      });
    }
  };

  window.GH_Audio = AudioEngine;
})();
