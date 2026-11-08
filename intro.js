/**
 * intro.js - Fullscreen Video Onboarding & Intro Walkthrough
 * Plays intro.mp4 with top-right Skip button (Bỏ qua)
 * Supports both Web and iOS Capacitor App
 * CẬP NHẬT: Mỗi lần đóng hẳn app và mở lại, video intro sẽ tự động phát lại.
 */
(() => {
  const SESSION_KEY = 'gh_intro_session_shown';
  const VIDEO_SRC = './intro.mp4';

  let overlayEl = null;
  let videoEl = null;

  function createIntroVideoDOM() {
    if (document.getElementById('gh-intro-overlay')) return document.getElementById('gh-intro-overlay');

    const overlay = document.createElement('div');
    overlay.id = 'gh-intro-overlay';

    overlay.innerHTML = `
      <!-- Top Bar: Branding & Top-Right Skip Button -->
      <div class="gh-intro-top-bar">
        <div class="gh-intro-brand">
          <span>🏮</span>
          <span>Tiếng Trung HSK</span>
        </div>
        <!-- NÚT BỎ QUA NHỎ Ở TRÊN BÊN PHẢI (THEO ĐÚNG YÊU CẦU CỦA BẠN) -->
        <button id="gh-intro-skip-btn" class="gh-intro-skip-btn" type="button" aria-label="Bỏ qua video giới thiệu">
          <span>Bỏ qua</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Video Container -->
      <div class="gh-intro-video-container" id="gh-intro-video-container">
        <video
          id="gh-intro-video"
          src="${VIDEO_SRC}"
          playsinline
          webkit-playsinline
          preload="auto"
          muted
        ></video>

        <!-- Tap to unmute hint -->
        <div class="gh-intro-unmute-hint" id="gh-intro-unmute-hint">
          <span>🔊</span>
          <span>Chạm vào màn hình để bật âm thanh</span>
        </div>
      </div>

      <!-- Bottom Bar: Sound Toggle & Info -->
      <div class="gh-intro-bottom-bar">
        <button id="gh-intro-sound-btn" class="gh-intro-sound-btn" type="button" aria-label="Bật/Tắt âm thanh">
          <svg id="gh-sound-icon-muted" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6"/></svg>
          <svg id="gh-sound-icon-on" style="display:none;" viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          <span id="gh-sound-label">Bật tiếng</span>
        </button>

        <span style="color:rgba(255,255,255,0.7);font-size:12px;font-weight:600;text-shadow:0 1px 4px rgba(0,0,0,0.8);">
          Giới thiệu ứng dụng
        </span>
      </div>

      <!-- Bottom Progress Track -->
      <div class="gh-intro-progress-track">
        <div class="gh-intro-progress-fill" id="gh-intro-progress-fill"></div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlayEl = overlay;
    videoEl = overlay.querySelector('#gh-intro-video');

    bindVideoEvents(overlay, videoEl);
    return overlay;
  }

  function bindVideoEvents(overlay, video) {
    const skipBtn = overlay.querySelector('#gh-intro-skip-btn');
    const soundBtn = overlay.querySelector('#gh-intro-sound-btn');
    const soundIconMuted = overlay.querySelector('#gh-sound-icon-muted');
    const soundIconOn = overlay.querySelector('#gh-sound-icon-on');
    const soundLabel = overlay.querySelector('#gh-sound-label');
    const unmuteHint = overlay.querySelector('#gh-intro-unmute-hint');
    const progressFill = overlay.querySelector('#gh-intro-progress-fill');
    const container = overlay.querySelector('#gh-intro-video-container');

    // 1. NÚT BỎ QUA Ở TRÊN BÊN PHẢI: Bấm là đóng video ngay và về Trang chủ
    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeIntroVideo();
      });
    }

    // Toggle sound helper
    const toggleSound = (forceUnmute = false) => {
      if (forceUnmute || video.muted) {
        video.muted = false;
        video.volume = 1.0;
        if (soundIconMuted) soundIconMuted.style.display = 'none';
        if (soundIconOn) soundIconOn.style.display = 'inline-block';
        if (soundLabel) soundLabel.textContent = 'Tắt tiếng';
        if (unmuteHint) unmuteHint.style.opacity = '0';
      } else {
        video.muted = true;
        if (soundIconMuted) soundIconMuted.style.display = 'inline-block';
        if (soundIconOn) soundIconOn.style.display = 'none';
        if (soundLabel) soundLabel.textContent = 'Bật tiếng';
      }
    };

    if (soundBtn) {
      soundBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleSound();
      });
    }

    // Chạm vào màn hình để bật âm thanh hoặc tiếp tục phát
    if (container) {
      container.addEventListener('click', () => {
        if (video.muted) {
          toggleSound(true);
        } else if (video.paused) {
          video.play().catch(() => {});
        }
      });
    }

    // Progress bar update
    video.addEventListener('timeupdate', () => {
      if (video.duration && progressFill) {
        const pct = (video.currentTime / video.duration) * 100;
        progressFill.style.width = `${pct}%`;
      }
    });

    // Khi video kết thúc: Tự động đóng và vào Trang chủ
    video.addEventListener('ended', () => {
      closeIntroVideo();
    });

    // Error safety: Nếu video lỗi tải, không làm đứng app
    video.addEventListener('error', (err) => {
      console.warn('Intro video error, fallback to home:', err);
      closeIntroVideo();
    });

    // Keyboard support: Phím Escape hoặc M
    const handleKey = (e) => {
      if (!overlayEl || overlayEl.classList.contains('gh-intro-closing')) return;
      if (e.key === 'Escape') {
        closeIntroVideo();
      } else if (e.key === 'm' || e.key === 'M') {
        toggleSound();
      }
    };
    document.addEventListener('keydown', handleKey);

    // Thử phát với âm thanh, nếu trình duyệt chặn thì muted và phát
    video.muted = false;
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {
        video.muted = true;
        video.play().catch(() => {});
        if (soundIconMuted) soundIconMuted.style.display = 'inline-block';
        if (soundIconOn) soundIconOn.style.display = 'none';
        if (soundLabel) soundLabel.textContent = 'Bật tiếng';
        if (unmuteHint) unmuteHint.style.opacity = '1';
      });
    } else {
      if (soundIconMuted) soundIconMuted.style.display = 'none';
      if (soundIconOn) soundIconOn.style.display = 'inline-block';
      if (soundLabel) soundLabel.textContent = 'Tắt tiếng';
      if (unmuteHint) unmuteHint.style.opacity = '0';
    }
  }

  function closeIntroVideo() {
    try {
      // Lưu vào sessionStorage để trong suốt phiên học hiện tại không bị hiện lại liên tục khi chuyển tab
      sessionStorage.setItem(SESSION_KEY, '1');
      // Xóa các key vĩnh viễn cũ để mỗi lần ĐÓNG HẲN APP và MỞ LẠI, sessionStorage trống sẽ hiện lại video intro
      localStorage.removeItem('gh_intro_video_v3');
      localStorage.removeItem('gh_intro_video_v2');
      localStorage.removeItem('gh_intro_seen_v1');
    } catch (e) {}

    if (videoEl) {
      try {
        videoEl.pause();
        videoEl.currentTime = 0;
      } catch (e) {}
    }

    if (overlayEl) {
      overlayEl.classList.add('gh-intro-closing');
      setTimeout(() => {
        if (overlayEl && overlayEl.parentNode) {
          overlayEl.parentNode.removeChild(overlayEl);
        }
        overlayEl = null;
        videoEl = null;
      }, 350);
    }

    // Luôn đưa người dùng về Trang chủ an toàn
    if (typeof window.switchMode === 'function') {
      window.switchMode('home');
    } else {
      document.querySelectorAll('main > section, section').forEach(s => s.classList.remove('active'));
      const home = document.getElementById('gh-home-mode');
      if (home) home.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showIntroVideo(force = false) {
    if (!force) {
      try {
        // Nếu phiên hiện tại đã xem rồi (người dùng đang học trong app), không làm gián đoạn
        if (sessionStorage.getItem(SESSION_KEY)) return;
      } catch (e) {}
    }

    createIntroVideoDOM();
  }

  // Export globally
  window.GH_showIntroVideo = () => showIntroVideo(true);
  window.GH_showIntro = window.GH_showIntroVideo;
  window.GH_closeIntro = closeIntroVideo;

  // Auto trigger on initial load / fresh app launch
  function checkAndAutoShow() {
    try {
      // Luôn dọn dẹp các key localStorage cũ
      localStorage.removeItem('gh_intro_video_v3');
      localStorage.removeItem('gh_intro_video_v2');
      localStorage.removeItem('gh_intro_seen_v1');

      if (location.search.includes('intro=1') || location.search.includes('open=intro')) {
        setTimeout(() => showIntroVideo(true), 150);
        return;
      }

      // Mỗi khi đóng hẳn app rồi vào lại (hoặc đóng tab web rồi mở lại):
      // sessionStorage là trống hoàn toàn -> Video intro sẽ tự động phát lại!
      if (!sessionStorage.getItem(SESSION_KEY)) {
        setTimeout(() => {
          showIntroVideo(false);
        }, 150);
      }
    } catch (e) {}
  }

  // Theo dõi thời gian app chạy ngầm: Nếu đóng/ẩn app trên 15 phút, khi quay lại cũng kích hoạt intro
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
      try {
        sessionStorage.setItem('gh_last_hidden_time', String(Date.now()));
      } catch (e) {}
    } else if (document.visibilityState === 'visible') {
      try {
        const lastHidden = parseInt(sessionStorage.getItem('gh_last_hidden_time') || '0', 10);
        if (lastHidden && (Date.now() - lastHidden > 15 * 60 * 1000)) {
          sessionStorage.removeItem(SESSION_KEY);
          showIntroVideo(false);
        }
      } catch (e) {}
    }
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndAutoShow, { once: true });
  } else {
    checkAndAutoShow();
  }
})();
