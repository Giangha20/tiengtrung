(() => {
  const GH=window.GH=window.GH||{};
  let list=[],i=0,flipped=false;
  const esc=v=>GH.utils?.escapeHtml?GH.utils.escapeHtml(v):String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const words=()=>{const level=document.getElementById('hsk-level')?.value||'1';const d=window.hskData?.[level]||[];return Array.isArray(d)?d:[]};
  function start(items=words()){list=Array.isArray(items)?items.slice():[];i=0;flipped=false;render()}
  function refreshForLevel(level){
    const wanted=String(level||document.getElementById('hsk-level')?.value||'1');
    const pool=Array.isArray(window.hskData?.[wanted])?window.hskData[wanted]:[];
    start(pool);
  }
  function startReview(){
    const dueIds=GH.progress?.dueWords?.()||[];
    const pool=words();
    const dueSet=new Set(dueIds.map(String));
    const review=pool.filter(w=>dueSet.has(String(w?.word||w?.hanzi||'')));
    start(review);
    if(!review.length){
      const host=document.getElementById('gh-flashcard-panel');
      if(host) host.innerHTML='<div class="gh-fc-empty"><strong>Chưa có từ cần ôn lại.</strong><span>Các từ đến hạn sẽ tự động xuất hiện ở đây.</span></div>';
    }
  }
  function render(){
    const host=document.getElementById('gh-flashcard-panel'); if(!host)return;
    if(!list.length){host.innerHTML='<div class="gh-fc-empty">Chưa có dữ liệu Flashcard cho HSK này.</div>';return;}
    if(i>=list.length)i=0;
    const w=list[i]||{}, hanzi=esc(w.word||w.hanzi||''), pinyin=esc(w.pinyin||''), meaning=esc(w.meaning||w.vn||'');
    host.innerHTML=`
      <div class="gh-uiverse-card ${flipped?'is-flipped':''}" tabindex="0" role="button" aria-label="Flashcard ${i+1}/${list.length}">
        <div class="gh-uiverse-content">
          <div class="gh-uiverse-face gh-uiverse-front">
            <div class="gh-uiverse-back-content">
              <div class="gh-fc-card-label">FLASHCARD · ${i+1}/${list.length}</div>
              <div class="gh-fc-hanzi-front">${hanzi}</div>
              <button class="gh-fc-speak" type="button" data-speak aria-label="Phát âm chữ Hán">🔊 Phát âm</button>
              <div class="gh-fc-flip-hint">Chạm vào thẻ để xem đáp án</div>
            </div>
          </div>
          <div class="gh-uiverse-face gh-uiverse-back">
            <div class="gh-uiverse-img"><i></i><i class="right"></i><i class="bottom"></i></div>
            <div class="gh-uiverse-front-content gh-answer-content">
              <div class="gh-fc-card-label">ĐÁP ÁN · ${i+1}/${list.length}</div>
              <div class="gh-fc-meaning">${meaning}</div>
              <div class="gh-fc-pinyin">${pinyin}</div>
              <div class="gh-fc-back-hanzi">${hanzi}</div>
              <div class="gh-fc-flip-hint">Chạm vào thẻ để quay lại chữ Hán</div>
            </div>
          </div>
        </div>
      </div>
      <div class="gh-fc-review-actions" aria-label="Đánh giá flashcard">
        <button class="gh-cyber-action gh-cyber-again" type="button" data-again>↻ <span>Ôn lại</span></button>
        <button class="gh-cyber-action gh-cyber-known" type="button" data-known>✓ <span>Nhớ rồi</span></button>
      </div>`;
    const card=host.querySelector('.gh-uiverse-card');
    const flip=()=>{flipped=!flipped;render()};
    // V24: one delegated click handler on the panel. Every click/tap toggles
    // exactly once, and the handler is installed only once (not on every render).
    // This prevents old handlers from stacking up and causing the card to flip
    // multiple times or appear stuck after repeated taps.
    if(!host.dataset.flipHandlerReady){
      host.dataset.flipHandlerReady='1';
      host.addEventListener('click',e=>{
        const target=e.target.closest?.('.gh-uiverse-card');
        if(!target || e.target.closest('button'))return;
        e.preventDefault();
        flipped=!flipped;
        render();
      });
    }
    card.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}};
    host.querySelector('[data-speak]').onclick=e=>{e.stopPropagation();window.speakWord?.(w.word||w.hanzi||'')};
    host.querySelector('[data-known]').onclick=e=>{e.stopPropagation();next(3)};
    host.querySelector('[data-again]').onclick=e=>{e.stopPropagation();next(1)};
  }
  function next(q){const w=list[i];if(!w)return;try{GH.progress?.markWord?.(w.word||w.hanzi||'',q)}catch(e){}if(q>=3)GH.streak?.activity?.();i++;flipped=false;render()}
  function mount(){
    const old=document.getElementById('list-mode');if(!old||document.getElementById('gh-flashcard-panel'))return;
    const section=document.createElement('section');section.id='gh-flashcard-mode';section.className='gh-extra-mode';
    section.innerHTML=`<div class="gh-section-head"><div><span>HỌC CHỦ ĐỘNG</span><h2>Flashcard</h2><p>Mặt trước: chữ Hán + phát âm. Mặt sau: nghĩa và pinyin.</p></div><div class="gh-fc-head-actions"><button class="gh-primary gh-cyber-action" id="gh-fc-start" type="button">Bắt đầu</button><button class="gh-primary gh-cyber-action" id="gh-fc-review" type="button">↻ Ôn lại từ</button><button class="gh-fc-close gh-cyber-action" id="gh-fc-close" type="button" aria-label="Đóng Flashcard">×</button></div></div><div id="gh-flashcard-panel"></div>`;
    old.parentNode.insertBefore(section,old.nextSibling);
    document.getElementById('gh-fc-start').onclick=()=>start();
    document.getElementById('gh-fc-review').onclick=()=>startReview();
    document.getElementById('gh-fc-close').onclick=()=>window.switchMode?.('progress');
  }
  GH.flashcard={start,refreshForLevel};
  window.addEventListener('DOMContentLoaded',mount);
  window.addEventListener('keydown',e=>{if(!document.getElementById('gh-flashcard-mode')?.classList.contains('active'))return;if(e.key===' '){e.preventDefault();flipped=!flipped;render()}if(['1','2','3','4'].includes(e.key)&&list[i])next(Number(e.key))});
  function patchMode(){if(window.__ghFlashcardModePatched||typeof window.switchMode!=='function')return;const original=window.switchMode;window.switchMode=function(mode){if(mode==='flashcard'){const section=document.getElementById('gh-flashcard-mode');if(!section){mount();setTimeout(()=>window.switchMode('flashcard'),0);return}document.querySelectorAll('main > section, section').forEach(s=>s.classList.remove('active'));section.classList.add('active');start(words());return}return original.apply(this,arguments)};window.__ghFlashcardModePatched=true}
  window.addEventListener('DOMContentLoaded',()=>setTimeout(patchMode,0));
  window.addEventListener('gh-hsk-changed',e=>{
    if(!document.getElementById('gh-flashcard-mode')?.classList.contains('active'))return;
    const level=String(e.detail?.level||document.getElementById('hsk-level')?.value||'1');
    // Refresh on the next frame so the select/current HSK and hskData are already synchronized.
    requestAnimationFrame(()=>refreshForLevel(level));
  });
})();
