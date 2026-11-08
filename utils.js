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
  // SINGLE-VOICE RESILIENT AUDIO ENGINE (1 GIỌNG DUY NHẤT, KHÔNG TRÙNG LẶP)
  // Đảm bảo không bao giờ có 2 giọng nói cùng lúc hay chồng chéo nhau.
  // ==============================================================
  let audioUnlocked = false;
  let activeAudio = null;
  let activeTimeout = null;

  function stopAllAudio() {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }
    if (activeAudio) {
      try {
        activeAudio.pause();
        activeAudio.currentTime = 0;
        activeAudio.src = '';
      } catch (e) {}
      activeAudio = null;
    }
    if ('speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
      } catch (e) {}
    }
  }

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
    stop: stopAllAudio,
    play(text, options = {}) {
      if (!text) return;
      text = String(text).trim();
      if (!text) return;

      // 1. DỪNG NGAY MỌI ÂM THANH ĐANG PHÁT - ĐẢM BẢO CHỈ 1 GIỌNG DUY NHẤT
      stopAllAudio();
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
        stopAllAudio();
        if (typeof options.onEnd === 'function') options.onEnd();
      };

      // Giọng dự phòng duy nhất: Native SpeechSynthesis (chuẩn zh-CN)
      const speakWithSynth = () => {
        if ('speechSynthesis' in window) {
          try {
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(text);
            u.lang = 'zh-CN';
            u.rate = speechRate;
            const voices = window.speechSynthesis.getVoices() || [];
            const zhVoice = voices.find(v => v.lang === 'zh-CN' || v.lang === 'zh_CN')
                         || voices.find(v => v.lang && v.lang.toLowerCase().startsWith('zh-cn'))
                         || voices.find(v => v.lang && (v.lang.includes('zh') || v.lang.includes('cmn')));
            if (zhVoice) u.voice = zhVoice;
            u.onend = onDone;
            u.onerror = onDone;
            window.speechSynthesis.speak(u);
            return;
          } catch (e) {}
        }
        onDone();
      };

      // Giọng phát âm chuẩn tự nhiên NetEase Youdao (Bắc Kinh tiêu chuẩn)
      const youdaoUrl = `https://dict.youdao.com/dictvoice?audio=${encodeURIComponent(text)}&le=zh`;

      const audio = new Audio();
      activeAudio = audio;
      audio.preload = 'auto';
      audio.setAttribute('playsinline', '');
      audio.setAttribute('webkit-playsinline', '');
      audio.playbackRate = playbackRate;

      // HỦY NGAY TIMER FALLBACK KHI ÂM THANH BẮT ĐẦU PHÁT - KHÔNG BAO GIỜ CHO PHÉP GIỌNG 2 CHÈN VÀO!
      const cancelFallback = () => {
        if (activeTimeout) {
          clearTimeout(activeTimeout);
          activeTimeout = null;
        }
      };

      audio.onplay = cancelFallback;
      audio.onplaying = cancelFallback;
      audio.ontimeupdate = () => {
        if (audio.currentTime > 0) cancelFallback();
      };

      audio.onended = () => {
        cancelFallback();
        onDone();
      };

      const handleFail = () => {
        cancelFallback();
        if (activeAudio === audio) {
          try {
            audio.pause();
            audio.src = '';
          } catch (e) {}
          activeAudio = null;
        }
        speakWithSynth();
      };

      audio.onerror = handleFail;

      // Timeout 4s nếu mạng bị rớt hoặc chặn không thể tải audio
      activeTimeout = setTimeout(() => {
        // Nếu audio đang phát bình thường thì tuyệt đối không fallback
        if (!audio.paused && audio.currentTime > 0) {
          cancelFallback();
          return;
        }
        handleFail();
      }, 4000);

      audio.src = youdaoUrl;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch(() => {
          handleFail();
        });
      }
    }
  };

  window.GH_Audio = AudioEngine;
})();
