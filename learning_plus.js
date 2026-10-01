/* Premium Chines - Personalized learning add-on. Does not replace existing learning logic. */
(() => {
  const PKEY='premiumChines_learning_pref_v1';
  const WRONG_KEY='premiumChines_wrong_answers_v1';
  function currentLevel(){return String(document.getElementById('hsk-level')?.value||window.currentLevel||'1');}
  function unseenWords(level){const list=Array.isArray(window.hskData?.[level])?window.hskData[level]:[];const learned=new Set((window.GH?.progress?.get?.().learned||[]).map(String));return list.filter((w,i)=>w&&w.word&&!learned.has(String(w.word))).slice(0,30);}
  function getWrong(){try{return JSON.parse(localStorage.getItem(WRONG_KEY)||'[]')}catch{return []}}
  function saveWrong(item){const arr=getWrong().filter(x=>!(String(x.level)===String(item.level)&&x.word===item.word));arr.unshift({...item,level:String(item.level),at:new Date().toISOString()});const next=arr.slice(0,100);localStorage.setItem(WRONG_KEY,JSON.stringify(next));try{window.GH?.progress?.patch?.({wrongAnswers:next});window.ghAuth?.saveProgress?.({learningEngine:{...(window.GH?.progress?.get?.()||{}),wrongAnswers:next}})}catch(e){}}
  function removeWrong(level,word){const arr=getWrong().filter(x=>!(String(x.level)===String(level)&&x.word===word));localStorage.setItem(WRONG_KEY,JSON.stringify(arr));try{window.GH?.progress?.patch?.({wrongAnswers:arr});window.ghAuth?.saveProgress?.({learningEngine:{...(window.GH?.progress?.get?.()||{}),wrongAnswers:arr}})}catch(e){}}
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function addStyles(){if(document.getElementById('gh-learning-plus-css'))return;const l=document.createElement('link');l.id='gh-learning-plus-css';l.rel='stylesheet';l.href='./learning_plus.css?v=4';document.head.appendChild(l);}
  function inject(){
    if(document.getElementById('gh-learning-plus'))return;
    addStyles();
    const box=document.createElement('div');box.id='gh-learning-plus';box.innerHTML=`
      <div class="ghlp-overlay" data-close></div><section class="ghlp-modal" role="dialog" aria-modal="true">
        <header><div><small>PREMIUM CHINES • LỘ TRÌNH CÁ NHÂN</small><h2 id="ghlp-title">Chọn hướng học của bạn</h2><p id="ghlp-sub">Thiết lập một lần, hệ thống sẽ ưu tiên nội dung phù hợp.</p></div><button data-close>×</button></header>
        <div class="ghlp-body" id="ghlp-body"></div>
      </section>`;document.body.appendChild(box);box.querySelectorAll('[data-close]').forEach(e=>e.onclick=()=>close());
  }
  function syncThemeVisibility(){
    const theme=document.querySelector('.container > header .switch');
    if(theme) theme.style.display=document.getElementById('gh-learning-plus')?.classList.contains('open')?'none':'';
  }
  function setLearningPlusOpen(open){
    document.body.classList.toggle('gh-learning-plus-open',!!open);
    document.getElementById('gh-learning-plus')?.classList.toggle('open',!!open);
    syncThemeVisibility();
  }
  function openOnboarding(){inject();const p=getPrefs()||{};document.getElementById('ghlp-title').textContent='Chọn hướng học của bạn';document.getElementById('ghlp-sub').textContent='Bạn có thể đổi lại trong Cài đặt bất cứ lúc nào.';document.getElementById('ghlp-body').innerHTML=`<div class="ghlp-grid"><label><span>🎯 Cấp độ chính</span><select id="ghlp-level">${[1,2,3,4,5,6].map(x=>`<option value="${x}" ${String(p.level||1)===String(x)?'selected':''}>HSK ${x}</option>`).join('')}</select></label><label><span>📚 Hướng học</span><select id="ghlp-focus"><option value="balanced">Cân bằng</option><option value="vocab">Từ vựng</option><option value="exam">Thi HSK</option><option value="listening">Nghe hiểu</option></select></label><label><span>⏱️ Thời gian mỗi ngày</span><select id="ghlp-minutes"><option value="10">10 phút</option><option value="20">20 phút</option><option value="30">30 phút</option><option value="45">45 phút</option></select></label><label><span>🔥 Mục tiêu</span><select id="ghlp-goal"><option value="daily">Duy trì mỗi ngày</option><option value="exam">Chinh phục HSK</option><option value="conversation">Giao tiếp</option><option value="vocab">Mở rộng từ vựng</option></select></label></div><div class="ghlp-preview"><b id="ghlp-preview-title">Thiết lập HSK ${p.level||1}</b><span>• Từ mới chưa học</span><span>• Bài tập thích ứng</span><span>• Tự động gom câu sai để làm lại</span></div><button class="ghlp-primary" id="ghlp-save">Bắt đầu học →</button>`;const lv=document.getElementById('ghlp-level');lv.onchange=()=>document.getElementById('ghlp-preview-title').textContent='Thiết lập HSK '+lv.value;['focus','minutes','goal'].forEach(k=>{const el=document.getElementById('ghlp-'+k);if(el&&p[k])el.value=p[k]});document.getElementById('ghlp-save').onclick=saveOnboarding;box.classList.add('open');}
  async function saveOnboarding(){const p={level:String(document.getElementById('ghlp-level').value),focus:document.getElementById('ghlp-focus').value,minutes:Number(document.getElementById('ghlp-minutes').value),goal:document.getElementById('ghlp-goal').value,onboardingCompleted:true,updatedAt:new Date().toISOString()};setPrefs(p);if(window.ghAuth?.saveLearningPreferences)await window.ghAuth.saveLearningPreferences(p);const sel=document.getElementById('hsk-level');if(sel){sel.value=p.level;window.changeLevel?.()}close();toast('Đã lưu thiết lập HSK '+p.level+' cho bạn.');}
  function close(){setLearningPlusOpen(false);}
  function toast(msg){if(window.GH?.utils?.toast)GH.utils.toast(msg);else{const t=document.createElement('div');t.className='ghlp-toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}}
  function openNewWords(){inject();const level=currentLevel(),words=unseenWords(level);document.getElementById('ghlp-title').textContent=`Từ vựng mới • HSK ${level}`;document.getElementById('ghlp-sub').textContent='Ưu tiên những từ bạn chưa đánh dấu đã học.';document.getElementById('ghlp-body').innerHTML=`<div class="ghlp-section-head"><b>${words.length} từ mới đề xuất</b><button class="ghlp-small" id="ghlp-start-new">Học dạng flashcard</button></div><div class="ghlp-word-grid">${words.length?words.map(w=>`<article><strong>${esc(w.word)}</strong><small>${esc(w.pinyin||'')}</small><p>${esc(w.meaning||'')}</p></article>`).join(''):'<div class="ghlp-empty">Bạn đã học hết dữ liệu đang có ở HSK này. Hãy thử cấp độ tiếp theo.</div>'}</div>`;document.getElementById('ghlp-start-new')?.addEventListener('click',()=>{close();document.querySelectorAll('main > section').forEach(s=>s.classList.remove('active'));document.getElementById('gh-flashcard-mode')?.classList.add('active');window.GH?.flashcard?.start?.(words);});setLearningPlusOpen(true);}
  function openQuickExercise(){
    inject();
    const level=currentLevel(), all=Array.isArray(window.hskData?.[level])?window.hskData[level]:[];
    const pool=[...all].sort(()=>Math.random()-.5).slice(0,Math.min(5,all.length));
    let idx=0,score=0;
    document.getElementById('ghlp-title').textContent=`Bài tập nhanh • HSK ${level}`;
    document.getElementById('ghlp-sub').textContent='5 câu chọn nghĩa đúng để củng cố từ vựng.';
    const render=()=>{
      const q=pool[idx];
      if(!q){document.getElementById('ghlp-body').innerHTML=`<div class="ghlp-empty"><h3>Hoàn thành!</h3><p>Bạn đúng ${score}/${pool.length} câu.</p><button class="ghlp-primary" id="ghlp-quick-again">Làm thêm 5 câu</button></div>`;document.getElementById('ghlp-quick-again').onclick=openQuickExercise;return;}
      const opts=[q,...all.filter(x=>x.word!==q.word).sort(()=>Math.random()-.5).slice(0,3)].sort(()=>Math.random()-.5);
      document.getElementById('ghlp-body').innerHTML=`<div class="ghlp-section-head"><b>Câu ${idx+1}/${pool.length}</b><span>${score} đúng</span></div><article class="ghlp-quick-q"><strong>${esc(q.word)}</strong><small>${esc(q.pinyin||'')}</small><div>${opts.map((o,i)=>`<button class="ghlp-answer" data-i="${i}">${esc(o.meaning||'')}</button>`).join('')}</div><p id="ghlp-quick-feedback"></p></article>`;
      document.querySelectorAll('.ghlp-answer').forEach((b,i)=>b.onclick=()=>{document.querySelectorAll('.ghlp-answer').forEach(x=>x.disabled=true);const chosen=opts[i];if(chosen.word===q.word){score++;b.classList.add('ok');document.getElementById('ghlp-quick-feedback').textContent='✓ Chính xác!';try{window.GH?.progress?.answer?.(true)}catch(e){}}else{b.classList.add('bad');document.querySelectorAll('.ghlp-answer')[opts.findIndex(x=>x.word===q.word)]?.classList.add('ok');document.getElementById('ghlp-quick-feedback').textContent='✗ Sai rồi — đã lưu vào câu sai.';try{window.GH?.progress?.answer?.(false);window.GHLearningPlus?.saveWrong?.({level,word:q.word,pinyin:q.pinyin||'',meaning:q.meaning||''})}catch(e){}};setTimeout(()=>{idx++;render()},650)});
    };
    render();setLearningPlusOpen(true);
  }
  function openWrong(){inject();const arr=getWrong(),level=currentLevel(),rows=arr.filter(x=>String(x.level)===level);document.getElementById('ghlp-title').textContent=`Câu sai cần làm lại • HSK ${level}`;document.getElementById('ghlp-sub').textContent='Những câu bạn sai sẽ được giữ lại để luyện lại.';document.getElementById('ghlp-body').innerHTML=`<div class="ghlp-section-head"><b>${rows.length} câu sai</b><button class="ghlp-small" id="ghlp-retry-all">Làm lại tất cả</button></div><div class="ghlp-wrong-list">${rows.length?rows.map((x,i)=>`<article><div><strong>${esc(x.word)}</strong><small>${esc(x.pinyin||'')} • ${esc(x.meaning||'')}</small></div><button class="ghlp-small" data-retry="${i}">Làm lại</button></article>`).join(''):'<div class="ghlp-empty">Chưa có câu sai ở HSK '+level+'. Khi bạn trả lời sai, câu sẽ tự động xuất hiện tại đây.</div>'}</div>`;document.getElementById('ghlp-retry-all')?.addEventListener('click',()=>startWrongExam(rows));document.querySelectorAll('[data-retry]').forEach(b=>b.onclick=()=>startWrongExam([rows[Number(b.dataset.retry)]]));setLearningPlusOpen(true);}
  function startWrongExam(rows){close();if(!rows.length){toast('Chưa có câu sai để làm lại.');return}window.startExam?.({wrongWords:rows.map(x=>x.word)});}
  async function checkOnboarding(){if(!window.ghCurrentUser)return;let local=getPrefs(),profile=null;try{profile=await window.ghAuth?.getProfile?.()}catch{}let p=local||profile?.learningPreferences||null;if(p?.onboardingCompleted){setPrefs(p);return}if(window.ghNewRegistration || localStorage.getItem('gh_new_registration')==='1'){window.ghNewRegistration=false;try{localStorage.removeItem('gh_new_registration')}catch(e){}openOnboarding();return}if(!local&&!profile?.learningPreferences){return}openOnboarding();}
  function patchExam(){const old=window.startExam;if(!old||old.__patchedPlus)return;const wrapped=function(opts){if(opts?.wrongWords){const level=currentLevel(),all=window.hskData?.[level]||[],wanted=new Set(opts.wrongWords.map(String)),selected=all.filter(w=>wanted.has(String(w.word)));window.__GH_WRONG_EXAM_WORDS=selected;return old.call(this,{__wrongMode:true});}window.__GH_WRONG_EXAM_WORDS=null;return old.apply(this,arguments)};wrapped.__patchedPlus=true;window.startExam=wrapped;}
  window.addEventListener('gh-hsk-changed',e=>{
    const level=String(e.detail?.level||currentLevel());
    const p=getPrefs();if(p){p.level=level;setPrefs(p);}
    // If Bài tập mới is currently open, rebuild it for the newly selected HSK.
    const modal=document.getElementById('gh-learning-plus');
    if(modal?.classList.contains('open')){
      const title=document.getElementById('ghlp-title')?.textContent||'';
      if(title.startsWith('Bài tập nhanh')) openQuickExercise();
    }
  });
  function boot(){window.addEventListener('gh-auth-ready',()=>setTimeout(()=>{checkOnboarding();},450));setTimeout(()=>{if(window.ghCurrentUser)checkOnboarding()},900);patchExam();}
  window.GHLearningPlus={openOnboarding,openNewWords,openQuickExercise,openWrong,saveWrong,getWrong,removeWrong};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
