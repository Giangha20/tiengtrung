/**
 * intro.js - Modern Onboarding & Intro Walkthrough
 * Support both Web and iOS Capacitor App
 * Includes top-right Skip button (Bỏ qua)
 */
(() => {
  const STORAGE_KEY = 'gh_intro_seen_v1';

  const SLIDES = [
    {
      badge: 'LỘ TRÌNH CHUẨN HSK 1 - 6',
      icon: '🏮',
      gradient: 'gradient-red',
      title: 'Học Tiếng Trung HSK Dễ Dàng',
      desc: 'Hệ thống học tập bài bản, lộ trình từ con số 0 đến thành thạo HSK 6 với hơn 5.000 từ vựng cốt lõi.',
      features: [
        { icon: '🎯', text: '5.000+ từ vựng & ví dụ chuẩn ngữ cảnh' },
        { icon: '💡', text: 'Phân loại theo cấp độ HSK 1 đến HSK 6' },
        { icon: '🏆', text: 'Tích lũy XP & lên cấp mỗi ngày' }
      ]
    },
    {
      badge: 'RÈN LUYỆN TOÀN DIỆN',
      icon: '✍️',
      gradient: 'gradient-blue',
      title: 'Luyện Viết & Luyện Nghe',
      desc: 'Tập viết từng nét chữ Hán theo ô ly chuẩn và rèn luyện kỹ năng nghe với phát âm Bắc Kinh tự nhiên.',
      features: [
        { icon: '📝', text: 'Luyện viết chữ Hán theo ô ly chuẩn từng nét' },
        { icon: '🎧', text: 'Phát âm chuẩn giọng Bắc Kinh (1 giọng rõ nét)' },
        { icon: '🃏', text: 'Flashcard thông minh lặp lại ngắt quãng' }
      ]
    },
    {
      badge: 'PHẢN XẠ & THI THẬT',
      icon: '🌐',
      gradient: 'gradient-purple',
      title: 'Luyện Dịch & Thi Thử HSK',
      desc: 'Nâng cao khả năng phản xạ với chế độ dịch 2 chiều và phòng thi thử bấm giờ như thi thật.',
      features: [
        { icon: '🔄', text: 'Luyện dịch 2 chiều Việt ⇄ Trung thông minh' },
        { icon: '⏱️', text: 'Phòng thi thử HSK bấm giờ tính điểm chuẩn' },
        { icon: '📊', text: 'Bảng xếp hạng đua top cùng bạn bè' }
      ]
    },
    {
      badge: 'SẴN SÀNG CHINH PHỤC',
      icon: '🚀',
      gradient: 'gradient-green',
      title: 'Bắt Đầu Hành Trình Ngay!',
      desc: 'Duy trì mục tiêu 20 từ mỗi ngày để tạo chuỗi streak học tập và tiến bộ vượt bậc.',
      features: [
        { icon: '🔥', text: 'Giữ chuỗi ngày streak học tập liên tục' },
        { icon: '📱', text: 'Tối ưu siêu mượt cho cả máy tính & điện thoại' },
        { icon: '✨', text: 'Đồng bộ tiến trình học tập lên đám mây' }
      ]
    }
  ];

  let currentSlide = 0;
  let overlayEl = null;

  function createIntroDOM() {
    if (document.getElementById('gh-intro-overlay')) return document.getElementById('gh-intro-overlay');

    const overlay = document.createElement('div');
    overlay.id = 'gh-intro-overlay';

    overlay.innerHTML = `
      <!-- Top Bar with Branding and Top-Right Skip Button -->
      <div class="gh-intro-top-bar">
        <div class="gh-intro-brand">
          <span>🏮</span>
          <span>Tiếng Trung HSK</span>
        </div>
        <!-- NÚT BỎ QUA NHỎ Ở TRÊN BÊN PHẢI THEO YÊU CẦU -->
        <button id="gh-intro-skip-btn" class="gh-intro-skip-btn" type="button" aria-label="Bỏ qua giới thiệu">
          <span>Bỏ qua</span>
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>

      <!-- Main Intro Card -->
      <div class="gh-intro-card" id="gh-intro-card">
        <div class="gh-intro-slider" id="gh-intro-slider">
          ${SLIDES.map((s, idx) => `
            <div class="gh-intro-slide ${idx === 0 ? 'active' : ''}" data-index="${idx}">
              <div class="gh-intro-icon-wrap ${s.gradient}">
                <span>${s.icon}</span>
              </div>
              <span class="gh-intro-badge">${s.badge}</span>
              <h2 class="gh-intro-title">${s.title}</h2>
              <p class="gh-intro-desc">${s.desc}</p>
              <div class="gh-intro-features">
                ${s.features.map(f => `
                  <div class="gh-intro-feat-item">
                    <span class="gh-intro-feat-icon">${f.icon}</span>
                    <span>${f.text}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Footer with Pagination & Action Buttons -->
        <div class="gh-intro-footer">
          <div class="gh-intro-dots" id="gh-intro-dots">
            ${SLIDES.map((_, idx) => `
              <button type="button" class="gh-intro-dot ${idx === 0 ? 'active' : ''}" data-index="${idx}" aria-label="Slide ${idx + 1}"></button>
            `).join('')}
          </div>
          <div class="gh-intro-actions">
            <button id="gh-intro-prev-btn" class="gh-intro-btn-prev" type="button" style="display: none;">Quay lại</button>
            <button id="gh-intro-next-btn" class="gh-intro-btn-next" type="button">
              <span>Tiếp tục</span>
              <svg style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    overlayEl = overlay;
    bindIntroEvents(overlay);
    return overlay;
  }

  function bindIntroEvents(overlay) {
    const skipBtn = overlay.querySelector('#gh-intro-skip-btn');
    const nextBtn = overlay.querySelector('#gh-intro-next-btn');
    const prevBtn = overlay.querySelector('#gh-intro-prev-btn');
    const dotsContainer = overlay.querySelector('#gh-intro-dots');
    const card = overlay.querySelector('#gh-intro-card');

    if (skipBtn) skipBtn.addEventListener('click', closeIntro);

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (currentSlide < SLIDES.length - 1) {
          goToSlide(currentSlide + 1);
        } else {
          closeIntro();
        }
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) goToSlide(currentSlide - 1);
      });
    }

    if (dotsContainer) {
      dotsContainer.addEventListener('click', e => {
        const dot = e.target.closest('.gh-intro-dot');
        if (dot && dot.dataset.index !== undefined) {
          goToSlide(parseInt(dot.dataset.index, 10));
        }
      });
    }

    // Touch swipe left/right gesture
    let startX = 0;
    card.addEventListener('touchstart', e => {
      if (e.touches && e.touches[0]) startX = e.touches[0].clientX;
    }, { passive: true });

    card.addEventListener('touchend', e => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diff = startX - e.changedTouches[0].clientX;
        if (diff > 45) {
          // Swipe left -> Next
          if (currentSlide < SLIDES.length - 1) goToSlide(currentSlide + 1);
        } else if (diff < -45) {
          // Swipe right -> Prev
          if (currentSlide > 0) goToSlide(currentSlide - 1);
        }
      }
    }, { passive: true });

    // Keyboard support
    const handleKey = e => {
      if (!overlayEl || overlayEl.classList.contains('gh-intro-closing')) return;
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        if (currentSlide < SLIDES.length - 1) goToSlide(currentSlide + 1);
        else closeIntro();
      } else if (e.key === 'ArrowLeft') {
        if (currentSlide > 0) goToSlide(currentSlide - 1);
      } else if (e.key === 'Escape') {
        closeIntro();
      }
    };
    document.addEventListener('keydown', handleKey);
  }

  function goToSlide(index) {
    if (index < 0 || index >= SLIDES.length) return;
    const slides = overlayEl.querySelectorAll('.gh-intro-slide');
    const dots = overlayEl.querySelectorAll('.gh-intro-dot');
    const prevBtn = overlayEl.querySelector('#gh-intro-prev-btn');
    const nextBtn = overlayEl.querySelector('#gh-intro-next-btn');

    slides.forEach((s, idx) => {
      s.classList.toggle('active', idx === index);
      s.classList.toggle('prev', idx < index);
    });

    dots.forEach((d, idx) => {
      d.classList.toggle('active', idx === index);
    });

    currentSlide = index;

    // Update buttons
    if (prevBtn) {
      prevBtn.style.display = index > 0 ? 'inline-flex' : 'none';
    }

    if (nextBtn) {
      if (index === SLIDES.length - 1) {
        nextBtn.innerHTML = `
          <span>Bắt đầu học ngay 🚀</span>
        `;
        nextBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        nextBtn.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.4)';
      } else {
        nextBtn.innerHTML = `
          <span>Tiếp tục</span>
          <svg style="width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round;" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        `;
        nextBtn.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
        nextBtn.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.35)';
      }
    }
  }

  function closeIntro() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}

    if (overlayEl) {
      overlayEl.classList.add('gh-intro-closing');
      setTimeout(() => {
        if (overlayEl && overlayEl.parentNode) {
          overlayEl.parentNode.removeChild(overlayEl);
        }
        overlayEl = null;
      }, 320);
    }

    // Always ensure user is routed smoothly to Home view
    if (typeof window.switchMode === 'function') {
      window.switchMode('home');
    } else {
      document.querySelectorAll('main > section, section').forEach(s => s.classList.remove('active'));
      const home = document.getElementById('gh-home-mode');
      if (home) home.classList.add('active');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showIntro(force = false) {
    if (!force) {
      try {
        if (localStorage.getItem(STORAGE_KEY)) return; // Already seen
      } catch (e) {}
    }

    currentSlide = 0;
    const overlay = createIntroDOM();
    overlay.classList.remove('gh-intro-closing');
    goToSlide(0);
  }

  // Export globally for manual testing / settings
  window.GH_showIntro = () => showIntro(true);
  window.GH_closeIntro = closeIntro;

  // Auto show on first load
  function checkAndAutoShow() {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Delay slightly for smooth page rendering & auth check
        setTimeout(() => {
          showIntro(false);
        }, 300);
      }
    } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', checkAndAutoShow, { once: true });
  } else {
    checkAndAutoShow();
  }
})();
