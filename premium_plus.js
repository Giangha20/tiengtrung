(() => {
  'use strict';
  const GH = window.GH = window.GH || {};
  const KEY = 'gh_premium_plus_v1';
  const read = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch { return {}; } };
  const write = v => { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch {} };
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const today = () => new Date().toISOString().slice(0,10);

  function toast(message, type='info') {
    let root = document.getElementById('ghpp-toasts');
    if (!root) { root = document.createElement('div'); root.id='ghpp-toasts'; document.body.appendChild(root); }
    const el = document.createElement('div'); el.className=`ghpp-toast ${type}`; el.setAttribute('role','status'); el.textContent=message; root.appendChild(el);
    setTimeout(()=>el.classList.add('show'),10); setTimeout(()=>{el.classList.remove('show');setTimeout(()=>el.remove(),220)},3000);
  }

  function ensureUI() {
    if (document.getElementById('ghpp-tools')) return;
    const home = document.getElementById('gh-home-mode');
    if (!home) return;
    const tools = document.createElement('section'); tools.id='ghpp-tools'; tools.className='ghpp-grid';
    tools.innerHTML = `
      <article class="ghpp-card ghpp-today"><div class="ghpp-card-head"><div><span>SMART STUDY</span><h3>Học hôm nay</h3></div><b id="ghpp-today-pct">0%</b></div><div class="ghpp-progress"><i id="ghpp-today-fill"></i></div><div class="ghpp-task-list" id="ghpp-task-list"></div></article>
      <article class="ghpp-card"><div class="ghpp-card-head"><div><span>QUICK TOOLS</span><h3>Công cụ học nhanh</h3></div>⚡</div><div class="ghpp-actions"><button data-ghpp="review">🔄 Ôn nhanh 5 phút</button><button data-ghpp="focus">🎯 Chế độ tập trung</button><button data-ghpp="challenge">🔥 Daily Challenge</button><button data-ghpp="placement">🧭 Đánh giá trình độ</button></div></article>
      <article class="ghpp-card"><div class="ghpp-card-head"><div><span>YOUR PROGRESS</span><h3>Tiến bộ cá nhân</h3></div>📈</div><div class="ghpp-mini-stats" id="ghpp-mini-stats"></div></article>
      <article class="ghpp-card"><div class="ghpp-card-head"><div><span>ACCOUNT</span><h3>Dữ liệu của tôi</h3></div>☁️</div><div class="ghpp-actions"><button data-ghpp="export">⬇️ Xuất dữ liệu</button><label class="ghpp-file">⬆️ Nhập dữ liệu<input id="ghpp-import" type="file" accept="application/json" hidden></label><button data-ghpp="notifications">🔔 Thông báo</button></div><small class="ghpp-sync" id="ghpp-sync">Đồng bộ tự động khi bạn đăng nhập.</small></article>`;
    home.insertAdjacentElement('afterend', tools);
    tools.querySelectorAll('[data-ghpp]').forEach(b=>b.addEventListener('click',()=>action(b.dataset.ghpp)));
    document.getElementById('ghpp-import')?.addEventListener('change', importData);
  }

  function getState(){ return GH.progress?.get?.() || {}; }
  function renderToday(){
    const s=getState(), d=s.daily||{}; const done=Math.min(20,Number(d.words||0)+Math.min(5,Number(d.listen||0))+Math.min(5,Number(d.pinyin||0))); const pct=Math.min(100,Math.round(done/20*100));
    const fill=document.getElementById('ghpp-today-fill'); if(fill)fill.style.width=pct+'%'; const p=document.getElementById('ghpp-today-pct'); if(p)p.textContent=pct+'%';
    const due=GH.progress?.dueWords?.().length||0;
    const tasks=[['📚',`${Math.max(0,10-(d.words||0))} từ mới`,`words`],['🔄',`${due} từ đến hạn ôn`,`review`],['🎧',`${Math.max(0,5-(d.listen||0))} câu nghe`,`listen`],['⌨️',`${Math.max(0,5-(d.pinyin||0))} câu phản xạ`,`typing`]];
    const box=document.getElementById('ghpp-task-list'); if(box)box.innerHTML=tasks.map(([i,t,k])=>`<button class="ghpp-task" data-task="${k}"><span>${i}</span><b>${esc(t)}</b><small>›</small></button>`).join('');
    box?.querySelectorAll('[data-task]').forEach(x=>x.onclick=()=>taskAction(x.dataset.task));
  }
  function renderStats(){
    const s=getState(), answers=Number(s.stats?.answers||0), correct=Number(s.stats?.correct||0), acc=answers?Math.round(correct/answers*100):0;
    const vals=[['XP',Number(s.xp||0)],['Từ đã học',s.learned?.length||0],['Độ chính xác',acc+'%'],['Streak',(GH.streak?.get?.().current)||0]];
    const box=document.getElementById('ghpp-mini-stats'); if(box)box.innerHTML=vals.map(x=>`<div><b>${esc(x[1])}</b><span>${esc(x[0])}</span></div>`).join('');
  }
  function taskAction(task){
    if(task==='review'||task==='review') return openMode('flashcard');
    if(task==='listen') return openMode('listening');
    if(task==='typing') return openMode('typing');
    openMode('list');
  }
  function openMode(mode){ document.querySelectorAll('main > section').forEach(s=>s.classList.remove('active')); if(mode==='flashcard'){document.getElementById('gh-flashcard-mode')?.classList.add('active'); GH.flashcard?.start?.((window.hskData?.[document.getElementById('hsk-level')?.value||'1']||[]).filter(Boolean));} else window.switchMode?.(mode); }

  function action(kind){
    if(kind==='review') { openMode('flashcard'); toast('Đã mở phiên ôn nhanh.'); }
    else if(kind==='focus') focusMode();
    else if(kind==='challenge') challenge();
    else if(kind==='placement') placement();
    else if(kind==='export') exportData();
    else if(kind==='notifications') notifications();
  }
  function modal(title, body, actions=''){
    document.getElementById('ghpp-modal')?.remove(); const m=document.createElement('div');m.id='ghpp-modal';m.className='ghpp-modal';m.innerHTML=`<div class="ghpp-backdrop" data-close></div><div class="ghpp-dialog" role="dialog" aria-modal="true"><button class="ghpp-x" data-close aria-label="Đóng">×</button><span>PREMIUM CHINES</span><h2>${esc(title)}</h2><div class="ghpp-body">${body}</div><div class="ghpp-modal-actions">${actions}</div></div>`;document.body.appendChild(m);m.querySelectorAll('[data-close]').forEach(x=>x.onclick=()=>m.remove());return m;
  }
  function focusMode(){
    if(document.body.classList.contains('ghpp-focus')){document.body.classList.remove('ghpp-focus');document.getElementById('ghpp-focusbar')?.remove();toast('Đã thoát chế độ tập trung.');return;}
    document.body.classList.add('ghpp-focus'); const bar=document.createElement('div');bar.id='ghpp-focusbar';bar.innerHTML='<b>🎯 FOCUS MODE</b><span>Chỉ tập trung vào bài học</span><button>Thoát</button>';bar.querySelector('button').onclick=focusMode;document.body.appendChild(bar);toast('Chế độ tập trung đã bật.');
  }
  function challenge(){
    const s=getState(), d=s.daily||{}; const done=!!d.challengeDone; const body=`<div class="ghpp-challenge"><div class="ghpp-challenge-icon">🔥</div><h3>Thử thách hôm nay</h3><p>Hoàn thành ít nhất <b>20 hoạt động học</b> trong ngày để nhận huy hiệu thử thách.</p><div class="ghpp-challenge-bar"><i style="width:${Math.min(100,Math.round(((d.words||0)+(d.listen||0)+(d.pinyin||0))/20*100))}%"></i></div><strong>${done?'Đã hoàn thành 🎉':'Đang thực hiện'}</strong></div>`;
    const m=modal('Daily Challenge',body,done?'':'<button class="ghpp-primary" id="ghpp-challenge-check">Kiểm tra tiến độ</button>');m.querySelector('#ghpp-challenge-check')?.addEventListener('click',()=>{const total=(d.words||0)+(d.listen||0)+(d.pinyin||0);if(total>=20){GH.progress.patch({daily:{...GH.progress.get().daily,challengeDone:true}});toast('🎉 Bạn đã hoàn thành Daily Challenge!','success');m.remove();render();}else toast(`Bạn còn ${20-total} hoạt động nữa.`)});
  }
  function placement(){
    const levels=['1','2','3','4','5','6']; const data=window.hskData||{}; let pool=[];levels.forEach(l=>(data[l]||[]).forEach(w=>pool.push({...w,level:Number(l)}))); pool=pool.filter(x=>x.word||x.hanzi||x.chinese); if(!pool.length){toast('Chưa đủ dữ liệu để tạo bài đánh giá.','error');return;}
    pool.sort(()=>Math.random()-.5); const qs=pool.slice(0,Math.min(24,pool.length)); let i=0,score=0; const ask=()=>{if(i>=qs.length){const level=Math.max(1,Math.min(6,Math.round(1+(score/qs.length)*5)));modal('Kết quả đánh giá',`<div class="ghpp-result"><b>HSK ${level}</b><p>Bạn đúng ${score}/${qs.length} câu. Đây là mức tham khảo để chọn lộ trình học.</p></div>`,'<button class="ghpp-primary" data-close>Đóng</button>');return;} const q=qs[i], word=q.word||q.hanzi||q.chinese, meaning=q.meaning||q.translation||q.vn||''; const opts=[meaning]; pool.filter(x=>(x.meaning||x.translation||x.vn)&&String(x.word||x.hanzi||x.chinese)!==String(word)).sort(()=>Math.random()-.5).slice(0,3).forEach(x=>opts.push(x.meaning||x.translation||x.vn));opts.sort(()=>Math.random()-.5); const m=modal('Placement Test',`<div class="ghpp-placement"><small>Câu ${i+1}/${qs.length}</small><h3>${esc(word)}</h3><div class="ghpp-options">${opts.map(o=>`<button data-answer="${esc(o)}">${esc(o)}</button>`).join('')}</div></div>`);m.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{if(b.dataset.answer===meaning)score++;i++;m.remove();ask();});}; ask();
  }
  function exportData(){
    const payload={version:1,exportedAt:new Date().toISOString(),learningEngine:getState(),theme:localStorage.getItem('premiumChinesTheme')||'light'}; const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`premium-chines-backup-${today()}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);toast('Đã xuất bản sao lưu dữ liệu.','success');
  }
  function importData(e){const file=e.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const x=JSON.parse(reader.result);const s=x.learningEngine;if(!s||typeof s!=='object'||!Array.isArray(s.learned)||!Array.isArray(s.mastered)||typeof s.stats!=='object')throw new Error('invalid'); if(s.learned.length>100000||s.mastered.length>100000)throw new Error('large'); GH.progress.patch({xp:Math.max(0,Number(s.xp)||0),level:Math.max(1,Number(s.level)||1),highestLevel:Math.max(1,Number(s.highestLevel)||1),learned:s.learned.slice(0,100000).map(String),mastered:s.mastered.slice(0,100000).map(String),review:(s.review&&typeof s.review==='object')?s.review:{},stats:s.stats,daily:s.daily||{},favorites:Array.isArray(s.favorites)?s.favorites.map(String):[],notes:s.notes&&typeof s.notes==='object'?s.notes:{}});GH.progress.sync?.();render();toast('Đã khôi phục dữ liệu hợp lệ.','success');}catch{toast('File sao lưu không hợp lệ hoặc đã bị hỏng.','error')}finally{e.target.value='';}};reader.readAsText(file);
  }
  function notifications(){const s=getState(), due=GH.progress?.dueWords?.().length||0, streak=GH.streak?.get?.().current||0;modal('Thông báo',`<div class="ghpp-notifs"><div>🔄 <b>${due}</b> từ đang đến hạn ôn.</div><div>🔥 Streak hiện tại: <b>${streak} ngày</b>.</div><div>🎯 Daily Challenge: <b>${s.daily?.challengeDone?'Đã hoàn thành':'Chưa hoàn thành'}</b>.</div></div>`,'<button class="ghpp-primary" data-close>Đã hiểu</button>');}
  function render(){ensureUI();renderToday();renderStats();}
  function init(){render();window.addEventListener('gh-progress-updated',render);window.addEventListener('gh-xp-updated',render);window.addEventListener('gh-auth-ready',()=>setTimeout(render,250));window.addEventListener('online',()=>toast('Đã kết nối mạng.','success'));window.addEventListener('offline',()=>toast('Mất kết nối — dữ liệu cục bộ vẫn được giữ.','info'));window.addEventListener('error',e=>{if(e?.error)console.error('Premium Chines runtime error:',e.error);});}
  GH.premiumPlus={render,toast}; window.addEventListener('DOMContentLoaded',init);
})();
