/**
 * panda_art.js - Visual Generator for Realistic Ninja Panda & Flying Shuriken
 */
(() => {
  const GH = window.GH = window.GH || {};

  /**
   * Generates high-resolution realistic Ninja Panda SVG markup.
   * State: 'idle' | 'throw' | 'celebrate'
   */
  function getPandaSvg(state = 'idle') {
    const isThrow = state === 'throw';
    const isCelebrate = state === 'celebrate';

    return `
    <svg class="panda-ninja-svg ${state}" viewBox="0 0 200 220" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Fur Gradient Body -->
        <radialGradient id="pandaWhiteFur" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="75%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </radialGradient>
        <!-- Dark Fur Gradient -->
        <linearGradient id="pandaDarkFur" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="60%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </linearGradient>
        <!-- Headband Crimson Gradient -->
        <linearGradient id="ninjaRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </linearGradient>
        <!-- Gold Medallion -->
        <linearGradient id="ninjaGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <!-- Soft Shadow -->
        <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(0,0,0,0.35)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0)"/>
        </radialGradient>
      </defs>

      <!-- Ground Shadow -->
      <ellipse cx="100" cy="205" rx="65" ry="12" fill="url(#groundShadow)"/>

      <!-- Legs / Feet -->
      <ellipse cx="65" cy="190" rx="22" ry="16" fill="url(#pandaDarkFur)"/>
      <ellipse cx="135" cy="190" rx="22" ry="16" fill="url(#pandaDarkFur)"/>
      <!-- Claws -->
      <circle cx="55" cy="198" r="3" fill="#64748b"/>
      <circle cx="65" cy="201" r="3.2" fill="#64748b"/>
      <circle cx="75" cy="198" r="3" fill="#64748b"/>
      <circle cx="125" cy="198" r="3" fill="#64748b"/>
      <circle cx="135" cy="201" r="3.2" fill="#64748b"/>
      <circle cx="145" cy="198" r="3" fill="#64748b"/>

      <!-- Body -->
      <ellipse cx="100" cy="145" rx="55" ry="48" fill="url(#pandaWhiteFur)"/>
      <!-- Ninja Vest / Kimono Belt -->
      <path d="M 68 135 Q 100 160 132 135 L 126 175 Q 100 185 74 175 Z" fill="#0f172a" opacity="0.85"/>
      <rect x="70" y="160" width="60" height="12" rx="4" fill="url(#ninjaRed)"/>
      <!-- Gold Buckle -->
      <circle cx="100" cy="166" r="7" fill="url(#ninjaGold)"/>
      <text x="100" y="170" font-family="'KaiTi', sans-serif" font-size="9" font-weight="900" fill="#78350f" text-anchor="middle">武</text>

      <!-- Left Arm (Holding Shurikens) -->
      <g class="panda-left-arm ${isCelebrate ? 'arm-celebrate' : ''}">
        <ellipse cx="50" cy="136" rx="16" ry="26" transform="rotate(22 50 136)" fill="url(#pandaDarkFur)"/>
        <circle cx="42" cy="155" r="13" fill="url(#pandaDarkFur)"/>
        <!-- Shuriken in pouch/paw -->
        <polygon points="38,150 42,143 46,150 53,154 46,158 42,165 38,158 31,154" fill="#94a3b8" stroke="#334155" stroke-width="1"/>
      </g>

      <!-- Right Arm (Throwing Paw) -->
      <g class="panda-right-arm ${isThrow ? 'arm-throwing' : (isCelebrate ? 'arm-celebrate' : '')}">
        <ellipse cx="150" cy="136" rx="16" ry="26" transform="rotate(-22 150 136)" fill="url(#pandaDarkFur)"/>
        <circle cx="158" cy="155" r="13" fill="url(#pandaDarkFur)"/>
        <!-- Dart ready in right hand if idle -->
        ${!isThrow ? `
          <polygon points="158,145 162,138 166,145 173,149 166,153 162,160 158,153 151,149" fill="url(#ninjaGold)" stroke="#b45309" stroke-width="1.2"/>
        ` : ''}
      </g>

      <!-- Ears with inner shadow -->
      <circle cx="52" cy="56" r="21" fill="url(#pandaDarkFur)"/>
      <circle cx="52" cy="56" r="13" fill="#020617" opacity="0.6"/>
      <circle cx="148" cy="56" r="21" fill="url(#pandaDarkFur)"/>
      <circle cx="148" cy="56" r="13" fill="#020617" opacity="0.6"/>

      <!-- Head -->
      <ellipse cx="100" cy="85" rx="54" ry="46" fill="url(#pandaWhiteFur)"/>

      <!-- Ninja Headband (Băng đô Ninja Đỏ) -->
      <path d="M 48 68 Q 100 60 152 68 L 150 82 Q 100 74 50 82 Z" fill="url(#ninjaRed)"/>
      <!-- Headband Knot Tails (dải khăn bay) -->
      <path d="M 148 75 Q 172 70 186 85 Q 175 92 148 83 Z" fill="url(#ninjaRed)" opacity="0.95"/>
      <path d="M 149 78 Q 178 85 188 105 Q 172 102 147 85 Z" fill="#991b1b"/>
      <!-- Metallic Headband Plate -->
      <rect x="84" y="66" width="32" height="13" rx="3" fill="#e2e8f0" stroke="#64748b" stroke-width="1"/>
      <circle cx="100" cy="72.5" r="3.2" fill="#dc2626"/>

      <!-- Black Eye Patches -->
      <ellipse cx="78" cy="88" rx="15" ry="19" transform="rotate(-16 78 88)" fill="url(#pandaDarkFur)"/>
      <ellipse cx="122" cy="88" rx="15" ry="19" transform="rotate(16 122 88)" fill="url(#pandaDarkFur)"/>

      <!-- Cute Shining Eyes -->
      <circle cx="78" cy="88" r="7.5" fill="#1e293b"/>
      <circle cx="122" cy="88" r="7.5" fill="#1e293b"/>
      <circle cx="79.5" cy="89" r="6" fill="#0284c7"/>
      <circle cx="123.5" cy="89" r="6" fill="#0284c7"/>
      <!-- Eye Highlights -->
      <circle cx="77" cy="86" r="2.8" fill="#ffffff"/>
      <circle cx="81" cy="91" r="1.3" fill="#ffffff"/>
      <circle cx="121" cy="86" r="2.8" fill="#ffffff"/>
      <circle cx="125" cy="91" r="1.3" fill="#ffffff"/>

      <!-- Cute Snout & Nose -->
      <ellipse cx="100" cy="104" rx="14" ry="10" fill="#f8fafc"/>
      <path d="M 94 99 C 97 97 103 97 106 99 C 107 102 103 106 100 106 C 97 106 93 102 94 99 Z" fill="#0f172a"/>
      <!-- Mouth -->
      <path d="M 100 106 L 100 110 M 94 111 Q 100 116 106 111" stroke="#0f172a" stroke-width="2" stroke-linecap="round" fill="none"/>
      <!-- Pink Cheeks -->
      <ellipse cx="62" cy="100" rx="9" ry="5" fill="#f43f5e" opacity="0.3"/>
      <ellipse cx="138" cy="100" rx="9" ry="5" fill="#f43f5e" opacity="0.3"/>
    </svg>
    `;
  }

  /**
   * Generates a flying golden ninja shuriken (Phi Tiêu).
   */
  function getShurikenSvg() {
    return `
    <svg class="flying-shuriken-svg" viewBox="0 0 60 60" width="46" height="46" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shurikenBlade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="45%" stop-color="#94a3b8"/>
          <stop offset="70%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <radialGradient id="shurikenCenter" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#b45309"/>
        </radialGradient>
      </defs>
      <!-- 4-Pointed Sharp Shuriken Blades -->
      <polygon points="30,3 36,23 57,30 36,37 30,57 24,37 3,30 24,23" fill="url(#shurikenBlade)" stroke="#475569" stroke-width="1"/>
      <!-- Blade Sharpening Creases -->
      <line x1="30" y1="3" x2="30" y2="57" stroke="#ffffff" stroke-width="1.2" opacity="0.75"/>
      <line x1="3" y1="30" x2="57" y2="30" stroke="#ffffff" stroke-width="1.2" opacity="0.75"/>
      <!-- Central Ring -->
      <circle cx="30" cy="30" r="8" fill="url(#shurikenCenter)" stroke="#d97706" stroke-width="1.5"/>
      <circle cx="30" cy="30" r="3.5" fill="#0f172a"/>
    </svg>
    `;
  }

  /**
   * Spawns a flying shuriken from the Panda towards target element.
   * On arrival, triggers callback and particle burst!
   */
  function throwShuriken(startEl, targetEl, onImpact) {
    if (!startEl || !targetEl) {
      if (onImpact) onImpact();
      return;
    }

    const startRect = startEl.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    // Calculate start & end coordinates relative to viewport
    const startX = startRect.left + startRect.width * 0.75;
    const startY = startRect.top + startRect.height * 0.6;
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;

    const projectile = document.createElement('div');
    projectile.className = 'panda-shuriken-projectile';
    projectile.innerHTML = getShurikenSvg();
    projectile.style.left = `${startX}px`;
    projectile.style.top = `${startY}px`;
    document.body.appendChild(projectile);

    // Play throw whoosh audio
    GH.PandaSFX?.playThrow?.();

    const duration = 280; // ms
    const startTime = performance.now();

    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Ease in speed curve for realistic projectile acceleration
      const ease = progress * progress;

      const currentX = startX + (targetX - startX) * progress;
      const currentY = startY + (targetY - startY) * ease;
      const rotation = progress * 1080; // 3 full spins

      projectile.style.left = `${currentX}px`;
      projectile.style.top = `${currentY}px`;
      projectile.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(${1 + 0.3 * (1 - progress)})`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Impact!
        projectile.remove();
        spawnHitParticles(targetX, targetY);
        GH.PandaSFX?.playHit?.();
        if (onImpact) onImpact();
      }
    }

    requestAnimationFrame(animate);
  }

  /**
   * Spawns fireworks / sparks / popped particles at impact point.
   */
  function spawnHitParticles(x, y, count = 16) {
    const container = document.createElement('div');
    container.className = 'panda-particle-burst';
    container.style.left = `${x}px`;
    container.style.top = `${y}px`;
    document.body.appendChild(container);

    const colors = ['#f59e0b', '#ef4444', '#38bdf8', '#10b981', '#fcd34d', '#ffffff', '#ec4899'];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('span');
      p.className = 'panda-spark';
      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
      const dist = 35 + Math.random() * 55;
      const vx = Math.cos(angle) * dist;
      const vy = Math.sin(angle) * dist;
      const size = 5 + Math.random() * 7;
      const color = colors[Math.floor(Math.random() * colors.length)];

      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = color;
      p.style.setProperty('--vx', `${vx}px`);
      p.style.setProperty('--vy', `${vy}px`);
      container.appendChild(p);
    }

    setTimeout(() => container.remove(), 600);
  }

  GH.PandaArt = {
    getPandaSvg,
    getShurikenSvg,
    throwShuriken,
    spawnHitParticles
  };
})();
