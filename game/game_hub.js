/**
 * game_hub.js - Game Hub Controller
 * Manages game selection, HSK levels, and launching Game 1 (Pinyin) or Game 2 (Writing).
 */
(() => {
  const GH = window.GH = window.GH || {};

  let currentSelectedHsk = '1';

  function initGameHub() {
    const container = document.getElementById('game-mode');
    if (!container) return;

    // Default to current global level if available
    const globalLevel = document.getElementById('hsk-level')?.value || '1';
    currentSelectedHsk = globalLevel;

    renderHub(container);
  }

  function renderHub(container) {
    if (!container) return;

    container.innerHTML = `
      <div class="panda-hub-container">
        <!-- Hub Banner -->
        <div class="panda-hub-hero">
          <div class="hub-hero-text">
            <span class="hub-kicker">🎮 ĐẤU TRƯỜNG TIẾNG TRUNG</span>
            <h2>Gấu Trúc Phi Tiêu (Ninja Panda)</h2>
            <p>Vừa chơi vừa nhớ từ vựng tiếng Trung siêu tốc. Gõ đúng Pinyin hoặc viết chuẩn nét chữ Hán để Gấu Trúc phóng phi tiêu công phá từng chữ!</p>
          </div>
          <div class="hub-hero-panda">
            ${GH.PandaArt?.getPandaSvg('idle') || '🐼'}
          </div>
        </div>

        <!-- HSK Level Selector Tabs -->
        <div class="hub-hsk-selector">
          <span class="selector-label">Chọn cấp độ HSK:</span>
          <div class="hub-level-pills">
            ${['1','2','3','4','5','6'].map(lvl => `
              <button type="button" class="hub-level-pill ${currentSelectedHsk === lvl ? 'active' : ''}" data-hsk="${lvl}">
                HSK ${lvl}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- 2 Game Selection Cards -->
        <div class="panda-game-cards-grid">
          <!-- Game 1: Pinyin Dart Panda -->
          <div class="panda-game-card card-pinyin">
            <div class="game-card-badge">GAME 1 • PHẢN XẠ NHANH</div>
            <div class="game-card-icon">⌨️🎯</div>
            <h3>Gõ Pinyin Phi Tiêu</h3>
            <p class="game-card-desc">
              Từ vựng HSK rơi từ trên xuống. Bạn gõ nhanh Pinyin tương ứng, Gấu Trúc Ninja sẽ lập tức vung tay phóng phi tiêu nổ tung chữ!
            </p>
            <ul class="game-features-list">
              <li>🎯 <b>Luyện phản xạ Pinyin:</b> Gõ chữ không cần dấu vẫn chuẩn.</li>
              <li>💥 <b>Hiệu ứng phi tiêu chân thực:</b> Âm thanh xé gió và nổ chữ.</li>
              <li>🔥 <b>Chuỗi Combo điểm cao:</b> Nhận thêm nhiều XP vào hồ sơ cá nhân.</li>
            </ul>
            <button type="button" class="btn-play-game primary" id="hub-btn-play-pinyin">
              🚀 Vào Chơi Gõ Pinyin (HSK <span class="card-hsk-num">${currentSelectedHsk}</span>)
            </button>
          </div>

          <!-- Game 2: Hanzi Stroke Dart Panda -->
          <div class="panda-game-card card-writing">
            <div class="game-card-badge">GAME 2 • TẬP VIẾT CHỮ</div>
            <div class="game-card-icon">✍️🎋</div>
            <h3>Luyện Viết Chữ Hán Phi Tiêu</h3>
            <p class="game-card-desc">
              Chữ Hán xuất hiện trong ô Mễ chuẩn. Viết đúng từng nét chữ, Gấu Trúc Ninja sẽ phóng phi tiêu tiêu diệt mục tiêu và đọc phát âm chuẩn!
            </p>
            <ul class="game-features-list">
              <li>🖌️ <b>Chấm nét trực tiếp:</b> Nhận diện thứ tự nét chữ chính xác.</li>
              <li>💡 <b>Có nút gợi ý nét:</b> Vừa chơi vừa học thuộc mặt chữ sâu sắc.</li>
              <li>🔊 <b>Phát âm tiếng Trung chuẩn:</b> Củng cố cả nghe và viết.</li>
            </ul>
            <button type="button" class="btn-play-game success" id="hub-btn-play-writing">
              🚀 Vào Chơi Luyện Viết (HSK <span class="card-hsk-num">${currentSelectedHsk}</span>)
            </button>
          </div>
        </div>

        <!-- Rules & Tip Box -->
        <div class="hub-rules-box">
          <div class="rules-head">
            <span>🐼</span>
            <b>Quy Tắc Đấu Trường Gấu Trúc</b>
          </div>
          <div class="rules-body">
            <p>• Mỗi màn chơi bạn có <b>3 mạng (❤️❤️❤️)</b>. Nếu chữ rơi chạm hàng rào tre hoặc hết thời gian, bạn sẽ mất 1 mạng.</p>
            <p>• Đạt chuỗi <b>Combo liên tiếp</b> sẽ giúp Gấu Trúc tung đòn ăn mừng và nhân số điểm thưởng XP lên gấp nhiều lần.</p>
            <p>• Điểm XP tích lũy sau mỗi trận đấu sẽ được tự động cộng thẳng vào <b>Hồ sơ học tập</b> và bảng thành tích online của bạn!</p>
          </div>
        </div>
      </div>
    `;

    bindHubEvents(container);
  }

  function bindHubEvents(container) {
    // Level selection pills
    container.querySelectorAll('.hub-level-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        container.querySelectorAll('.hub-level-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        currentSelectedHsk = pill.dataset.hsk || '1';
        container.querySelectorAll('.card-hsk-num').forEach(el => el.textContent = currentSelectedHsk);
      });
    });

    // Launch Game 1
    container.querySelector('#hub-btn-play-pinyin')?.addEventListener('click', () => {
      if (GH.PinyinGame?.start) {
        GH.PinyinGame.start(container, currentSelectedHsk);
      }
    });

    // Launch Game 2
    container.querySelector('#hub-btn-play-writing')?.addEventListener('click', () => {
      if (GH.WritingGame?.start) {
        GH.WritingGame.start(container, currentSelectedHsk);
      }
    });
  }

  GH.GameHub = {
    init: initGameHub,
    renderHub
  };
  window.GH_GameHub = GH.GameHub;
})();
