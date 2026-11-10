/**
 * panda_sfx.js - Web Audio Arcade Synthesizer for Panda Games
 * Zero external audio assets required; synthesized in real-time.
 */
(() => {
  const GH = window.GH = window.GH || {};
  let ctx = null;
  let isMuted = false;

  function getAudioContext() {
    if (!ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      ctx = new AudioCtx();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
    return ctx;
  }

  // Ensure unlock on user interaction
  const unlock = () => {
    getAudioContext();
    window.removeEventListener('pointerdown', unlock);
    window.removeEventListener('keydown', unlock);
  };
  window.addEventListener('pointerdown', unlock, { once: true });
  window.addEventListener('keydown', unlock, { once: true });

  const PandaSFX = {
    setMuted(muted) {
      isMuted = !!muted;
    },
    isMuted() {
      return isMuted;
    },

    // 1. Dart Throw Whoosh (phi tiêu xé gió)
    playThrow() {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;

      // Noise buffer for air whoosh
      const bufSize = c.sampleRate * 0.18;
      const buf = c.createBuffer(1, bufSize, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufSize * 0.3));
      }

      const noise = c.createBufferSource();
      noise.buffer = buf;

      const filter = c.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, now);
      filter.frequency.exponentialRampToValueAtTime(3200, now + 0.08);
      filter.frequency.exponentialRampToValueAtTime(600, now + 0.18);
      filter.Q.value = 3.5;

      const gain = c.createGain();
      gain.gain.setValueAtTime(0.01, now);
      gain.gain.linearRampToValueAtTime(0.45, now + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(c.destination);

      noise.start(now);
      noise.stop(now + 0.2);
    },

    // 2. Dart Hit / Bubble Pop (phi tiêu trúng đích)
    playHit() {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;

      const osc = c.createOscillator();
      const gain = c.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.14);

      gain.gain.setValueAtTime(0.65, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

      osc.connect(gain);
      gain.connect(c.destination);

      osc.start(now);
      osc.stop(now + 0.15);

      // Add small crisp high snap
      const snap = c.createOscillator();
      const snapGain = c.createGain();
      snap.type = 'sine';
      snap.frequency.setValueAtTime(1800, now);
      snap.frequency.exponentialRampToValueAtTime(400, now + 0.05);

      snapGain.gain.setValueAtTime(0.4, now);
      snapGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      snap.connect(snapGain);
      snapGain.connect(c.destination);

      snap.start(now);
      snap.stop(now + 0.06);
    },

    // 3. Combo Success Chime (giai điệu tăng điểm)
    playChime(combo = 1) {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;

      const baseFreq = 523.25; // C5
      const mult = Math.min(2.0, 1 + (combo - 1) * 0.1);
      const notes = [baseFreq * mult, baseFreq * 1.25 * mult, baseFreq * 1.5 * mult];

      notes.forEach((freq, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        const startTime = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.01, startTime);
        gain.gain.linearRampToValueAtTime(0.28, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.22);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.25);
      });
    },

    // 4. Mistake / Lost Life (mất mạng / chữ rơi chạm đất)
    playMiss() {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;

      const osc = c.createOscillator();
      const gain = c.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.linearRampToValueAtTime(110, now + 0.28);

      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      osc.connect(gain);
      gain.connect(c.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    },

    // 5. Game Over Fanfare
    playGameOver() {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;
      const notes = [392, 349.2, 329.6, 261.6]; // G4, F4, E4, C4

      notes.forEach((freq, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        const startTime = now + idx * 0.14;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.3, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.32);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.35);
      });
    },

    // 6. Level Up Victory Fanfare
    playVictory() {
      if (isMuted) return;
      const c = getAudioContext();
      if (!c) return;
      const now = c.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6

      notes.forEach((freq, idx) => {
        const osc = c.createOscillator();
        const gain = c.createGain();
        const startTime = now + idx * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.35, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);

        osc.connect(gain);
        gain.connect(c.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    }
  };

  GH.PandaSFX = PandaSFX;
})();
