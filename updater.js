/**
 * updater.js - Hệ thống kiểm tra và cập nhật tự động cho Web & App
 * - Web: Cập nhật tự động ngay lập tức khi có bản mới.
 * - App: Hiển thị thông báo cập nhật tuyệt đẹp, chạm 1 nút là cập nhật ngay.
 */
(() => {
  const BUILD_KEY = 'gh_app_build';
  const CURRENT_BUILD = 'gh_v59_20261128';
  const VERSION_URL = './version.json';

  function isNativePlatform() {
    try {
      const isCap = !!(
        (window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform()) ||
        (window.Capacitor && typeof window.Capacitor.getPlatform === 'function' && window.Capacitor.getPlatform() !== 'web') ||
        (window.Capacitor && (window.Capacitor.platform === 'ios' || window.Capacitor.platform === 'android')) ||
        document.documentElement.classList.contains('ios-app') ||
        window.location.protocol === 'capacitor:' ||
        navigator.userAgent.includes('Capacitor')
      );
      return isCap;
    } catch(e) {
      return false;
    }
  }

  window.GH_applyAppUpdate = function() {
    const banner = document.getElementById('gh-app-update-banner');
    if (banner) {
      banner.innerHTML = `
        <div class="update-banner-content" style="justify-content:center;">
          <div class="update-applying-spinner"></div>
          <div style="font-weight:700;font-size:0.95rem;color:var(--text,#0f172a);">Đang tải bản cập nhật mới...</div>
        </div>
      `;
    }

    const targetBuild = window.GH_REMOTE_BUILD || CURRENT_BUILD;

    function finish() {
      try { localStorage.setItem(BUILD_KEY, targetBuild); } catch(e) {}
      setTimeout(() => {
        window.location.href = window.location.pathname + '?v=' + Date.now();
      }, 400);
    }

    if ('caches' in window) {
      caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
        .then(() => {
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations()
              .then(regs => Promise.all(regs.map(r => r.unregister())))
              .then(finish)
              .catch(finish);
          } else {
            finish();
          }
        })
        .catch(finish);
    } else {
      finish();
    }
  };

  window.GH_dismissUpdateBanner = function() {
    const banner = document.getElementById('gh-app-update-banner');
    if (banner) {
      banner.classList.remove('show');
      setTimeout(() => banner.remove(), 400);
    }
  };

  function showAppUpdateNotification(info) {
    if (document.getElementById('gh-app-update-banner')) return;
    const banner = document.createElement('div');
    banner.id = 'gh-app-update-banner';
    banner.className = 'gh-app-update-banner';
    banner.innerHTML = `
      <div class="update-banner-content">
        <div class="update-banner-icon">✨</div>
        <div class="update-banner-text">
          <div class="update-banner-title">Có bản cập nhật mới ${info.version ? ('v' + info.version) : ''}!</div>
          <div class="update-banner-desc">${info.notes || 'Giao diện mới cực đẹp, mượt mà và tối ưu.'}</div>
        </div>
        <div class="update-banner-actions">
          <button type="button" class="update-banner-btn" onclick="window.GH_applyAppUpdate()">Cập nhật ngay</button>
          <button type="button" class="update-banner-close" onclick="window.GH_dismissUpdateBanner()" aria-label="Đóng">✕</button>
        </div>
      </div>
    `;
    document.body.appendChild(banner);
    requestAnimationFrame(() => {
      setTimeout(() => banner.classList.add('show'), 50);
    });
  }

  async function checkVersion(manual = false) {
    try {
      const res = await fetch(VERSION_URL + '?_t=' + Date.now(), { cache: 'no-store' });
      if (!res.ok) {
        if (manual && window.GH?.utils?.toast) window.GH.utils.toast('Không thể kiểm tra bản cập nhật lúc này.', 'info');
        return;
      }
      const data = await res.json();
      if (!data || !data.build) return;
      window.GH_REMOTE_BUILD = data.build;

      const localBuild = localStorage.getItem(BUILD_KEY);
      const isNew = !localBuild || localBuild !== data.build;

      if (!isNew) {
        if (manual && window.GH?.utils?.toast) window.GH.utils.toast('Bạn đang sử dụng phiên bản mới nhất! ✓', 'success');
        return;
      }

      // Có bản mới!
      if (isNativePlatform()) {
        // TRÊN APP: Hiện thông báo để người dùng ấn vào cập nhật
        showAppUpdateNotification(data);
      } else {
        // TRÊN WEB: Tự động cập nhật luôn
        try { localStorage.setItem(BUILD_KEY, data.build); } catch(e) {}
        if ('caches' in window) {
          caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
            .then(() => {
              if ('serviceWorker' in navigator) {
                navigator.serviceWorker.getRegistrations()
                  .then(regs => Promise.all(regs.map(r => r.unregister())))
                  .then(() => window.location.reload(true))
                  .catch(() => window.location.reload(true));
              } else {
                window.location.reload(true);
              }
            })
            .catch(() => window.location.reload(true));
        } else {
          window.location.reload(true);
        }
      }
    } catch(err) {
      if (manual && window.GH?.utils?.toast) window.GH.utils.toast('Lỗi khi kiểm tra cập nhật.', 'error');
    }
  }

  window.GH_checkAppUpdate = checkVersion;

  // Khởi động kiểm tra khi tải trang
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(() => checkVersion(false), 1500));
  } else {
    setTimeout(() => checkVersion(false), 1500);
  }

  // Tự động kiểm tra định kỳ mỗi 3 phút
  setInterval(() => checkVersion(false), 180000);
})();
