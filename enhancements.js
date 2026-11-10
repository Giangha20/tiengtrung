/* Premium Chines V13 - settings, external profile and real-time leaderboard. */
(() => {
  const KEY='premiumChinesWebSettings_v1';
  const defaults={motion:true,compact:false,softShadow:true,speechSpeed:'normal'};
  const GH=window.GH=window.GH||{};
  const getSettings=()=>{try{return {...defaults,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return {...defaults}}};
  let settings=getSettings(),rankRequest=0,rankTimer=null;
  const esc=v=>window.GH?.utils?.escapeHtml?GH.utils.escapeHtml(v):String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const period=()=>GH?.progress?.periodKeys?GH.progress.periodKeys():(()=>{const d=new Date(),day=d.getUTCDay()||7,m=new Date(d);m.setUTCDate(d.getUTCDate()-day+1);return{weekKey:m.toISOString().slice(0,10),monthKey:d.toISOString().slice(0,7)}})();
  const currentUser=()=>window.ghCurrentUser||window.ghAuth?.getUser?.()||null;

  function persistSettings(){localStorage.setItem(KEY,JSON.stringify(settings));document.documentElement.classList.toggle('gh-compact',!!settings.compact);document.documentElement.classList.toggle('gh-no-motion',!settings.motion);document.documentElement.classList.toggle('gh-no-shadow',!settings.softShadow)}
  function syncSettingInputs(){[['motion','gh-motion-toggle'],['compact','gh-compact-toggle'],['softShadow','gh-shadow-toggle']].forEach(([k,id])=>{const e=document.getElementById(id);if(e)e.checked=!!settings[k]});const spd=settings.speechSpeed||'normal';document.querySelectorAll('#gh-speech-speed-group .gh-speed-btn').forEach(b=>{b.classList.toggle('active',b.dataset.speed===spd)});persistSettings()}

  function injectSettings(){
    if(document.getElementById('gh-settings-modal'))return;
    const modal=document.createElement('div');modal.id='gh-settings-modal';modal.className='gh-modal';modal.hidden=true;
    modal.innerHTML=`<div class="gh-modal-backdrop" data-gh-close></div><div class="gh-modal-card" role="dialog" aria-modal="true" aria-labelledby="gh-settings-title"><div class="gh-modal-head"><div><span class="gh-mini-kicker">PREMIUM CHINES</span><h2 id="gh-settings-title">Cài đặt</h2><p>Tinh chỉnh giao diện học tập.</p></div><button class="gh-close" type="button" data-gh-close aria-label="Đóng">×</button></div><div class="gh-panel active" data-panel="settings"><div class="gh-setting-list"><div class="gh-setting-row gh-setting-speed-row"><div class="gh-setting-speed-info"><b>Tốc độ đọc của tiếng</b><small>Tốc độ phát âm (chậm, bình thường, nhanh) trên toàn hệ thống.</small></div><div class="gh-speed-btn-group" id="gh-speech-speed-group" role="group" aria-label="Tốc độ đọc"><button type="button" class="gh-speed-btn" data-speed="slow">🐢 Chậm</button><button type="button" class="gh-speed-btn active" data-speed="normal">🚶 Bình thường</button><button type="button" class="gh-speed-btn" data-speed="fast">⚡ Nhanh</button></div></div><label class="gh-setting-row"><span><b>Hiệu ứng chuyển động</b><small>Giữ giao diện mượt nhưng có thể tắt nếu máy yếu.</small></span><input id="gh-motion-toggle" type="checkbox"></label><label class="gh-setting-row"><span><b>Giao diện gọn</b><small>Giảm khoảng cách và kích thước một số thành phần.</small></span><input id="gh-compact-toggle" type="checkbox"></label><label class="gh-setting-row"><span><b>Bóng đổ mềm</b><small>Tắt để giảm hiệu ứng vẽ trên thiết bị yếu.</small></span><input id="gh-shadow-toggle" type="checkbox"></label><div class="gh-setting-row gh-about-section" style="margin-top:10px;padding-top:12px;border-top:1px solid rgba(0,0,0,0.08);"><div style="display:flex;align-items:center;justify-content:space-between;width:100%;"><div><b>Giới thiệu ứng dụng</b><small style="display:block;color:var(--text-muted,#64748b);margin-top:2px;">Hệ thống Ôn tập Tiếng Trung HSK 1 - 6</small></div><span class="gh-version-badge" style="font-size:0.82rem;font-weight:800;background:rgba(2,132,199,0.1);color:#0284c7;padding:3px 9px;border-radius:999px;border:1px solid rgba(2,132,199,0.25);">Phiên bản 2.0.2</span></div></div></div><button class="gh-reset-settings" id="gh-reset-settings" type="button">Khôi phục tinh chỉnh</button></div></div>`;
    document.body.appendChild(modal);
    modal.querySelectorAll('[data-gh-close]').forEach(e=>e.addEventListener('click',closeSettings));
    modal.querySelectorAll('#gh-speech-speed-group .gh-speed-btn').forEach(btn=>{btn.addEventListener('click',()=>{const spd=btn.dataset.speed||'normal';settings.speechSpeed=spd;persistSettings();syncSettingInputs();window.dispatchEvent(new CustomEvent('gh-speech-speed-changed',{detail:{speed:spd}}));})});document.getElementById('gh-motion-toggle').onchange=e=>{settings.motion=e.target.checked;persistSettings()};
    document.getElementById('gh-compact-toggle').onchange=e=>{settings.compact=e.target.checked;persistSettings()};
    document.getElementById('gh-shadow-toggle').onchange=e=>{settings.softShadow=e.target.checked;persistSettings()};
    document.getElementById('gh-reset-settings').onclick=()=>{settings={...defaults};syncSettingInputs();window.dispatchEvent(new CustomEvent('gh-speech-speed-changed',{detail:{speed:'normal'}}));};
    syncSettingInputs();
  }

  function injectProfile(){
    if(document.getElementById('gh-profile-modal'))return;
    const m=document.createElement('div');m.id='gh-profile-modal';m.className='gh-modal';m.hidden=true;
    m.innerHTML=`<div class="gh-modal-backdrop" data-profile-close></div><div class="gh-modal-card gh-external-card" role="dialog" aria-modal="true" aria-labelledby="gh-profile-title"><div class="gh-modal-head"><div><span class="gh-mini-kicker">TÀI KHOẢN</span><h2 id="gh-profile-title">Hồ sơ cá nhân</h2><p>Thông tin cá nhân, cấp độ XP và thành tích học tập.</p></div><button class="gh-close" type="button" data-profile-close aria-label="Đóng">×</button></div><div class="gh-profile-card"><div class="gh-avatar-wrap">
  <img id="gh-profile-avatar" alt="Avatar">
  <label class="gh-avatar-upload">📁 Tải ảnh từ máy<input id="gh-avatar-input" type="file" accept="image/*"></label>
  <div class="gh-avatar-presets-title">Hoặc chọn nhanh avatar:</div>
  <div class="gh-avatar-presets" id="gh-avatar-presets">
    <button type="button" class="gh-preset-btn" data-preset="🐼" title="Gấu Trúc">🐼</button>
    <button type="button" class="gh-preset-btn" data-preset="🐉" title="Rồng Vàng">🐉</button>
    <button type="button" class="gh-preset-btn" data-preset="🐱" title="Mèo Con">🐱</button>
    <button type="button" class="gh-preset-btn" data-preset="🦊" title="Hồ Ly">🦊</button>
    <button type="button" class="gh-preset-btn" data-preset="🎓" title="Trạng Nguyên">🎓</button>
    <button type="button" class="gh-preset-btn" data-preset="🌸" title="Hoa Sen">🌸</button>
    <button type="button" class="gh-preset-btn" data-preset="🐯" title="Hổ Vàng">🐯</button>
    <button type="button" class="gh-preset-btn" data-preset="🏮" title="Đèn Lồng">🏮</button>
  </div>
</div><div class="gh-profile-form"><label>Tên hiển thị<input id="gh-profile-name" maxlength="40" autocomplete="nickname" placeholder="Tên của bạn"></label><label>Ngày / tháng / năm sinh<input id="gh-profile-dob" type="date" autocomplete="bday"></label><div class="gh-profile-stats"><div><small>LEVEL HIỆN TẠI</small><strong id="gh-profile-level">Level 1</strong></div><div><small>XP HIỆN TẠI</small><strong id="gh-profile-xp">0 XP</strong></div><div><small>THÀNH TÍCH HIỆN TẠI</small><strong id="gh-profile-achievement">Tân binh</strong></div><div><small>THÀNH TÍCH CAO NHẤT</small><strong id="gh-profile-best-achievement">Tân binh</strong><span id="gh-profile-best-level">Level 1</span></div></div><div class="gh-profile-xpbar"><div><span id="gh-profile-xp-current">0 XP</span><span id="gh-profile-xp-next">100 XP để lên Level 2</span></div><i><b id="gh-profile-xp-fill"></b></i></div><button id="gh-save-profile" class="gh-primary" type="button">Lưu hồ sơ</button><span id="gh-profile-status" class="gh-status"></span></div></div></div>`;
    document.body.appendChild(m);
    m.querySelectorAll('[data-profile-close]').forEach(e=>e.addEventListener('click',closeProfile));
    document.getElementById('gh-avatar-input').addEventListener('change',handleAvatar);
    document.getElementById('gh-save-profile').addEventListener('click',saveProfile);
  }

  function injectRanking(){
    if(document.getElementById('gh-ranking-modal'))return;
    const m=document.createElement('div');m.id='gh-ranking-modal';m.className='gh-modal';m.hidden=true;
    m.innerHTML=`<div class="gh-modal-backdrop" data-ranking-close></div><div class="gh-modal-card gh-external-card gh-ranking-modal-card" role="dialog" aria-modal="true" aria-labelledby="gh-ranking-title"><div class="gh-modal-head"><div><span class="gh-mini-kicker">THÀNH TÍCH ONLINE</span><h2 id="gh-ranking-title">Bảng xếp hạng</h2><p>Điểm XP thật từ các tài khoản đang học. Tự cập nhật mỗi phút.</p></div><button class="gh-close" type="button" data-ranking-close aria-label="Đóng">×</button></div><div id="gh-honor" class="gh-honor"><span>🏆</span><div><small>VINH DANH TUẦN NÀY</small><strong id="gh-honor-name">Đang tải...</strong><p id="gh-honor-score">-- XP</p></div></div><div class="gh-ranking-head"><b>Bảng xếp hạng</b><div><button class="gh-rank-filter active" data-period="week">Tuần</button><button class="gh-rank-filter" data-period="month">Tháng</button></div></div><div id="gh-ranking-list" class="gh-ranking-list"><div class="gh-empty">Đang tải thành tích...</div></div><div class="gh-ranking-live"><span class="gh-live-dot"></span> Cập nhật tự động mỗi 60 giây · Điểm của bạn được đồng bộ ngay khi có XP mới.</div></div>`;
    document.body.appendChild(m);
    m.querySelectorAll('[data-ranking-close]').forEach(e=>e.addEventListener('click',closeRanking));
    m.querySelectorAll('.gh-rank-filter').forEach(b=>b.addEventListener('click',()=>{m.querySelectorAll('.gh-rank-filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');loadRanking(b.dataset.period)}));
  }

  function openSettings(){injectSettings();const m=document.getElementById('gh-settings-modal');m.hidden=false;document.body.classList.add('gh-modal-open')}
  function closeSettings(){const m=document.getElementById('gh-settings-modal');if(m)m.hidden=true;document.body.classList.remove('gh-modal-open')}
  function openProfile(){injectProfile();const m=document.getElementById('gh-profile-modal');m.hidden=false;document.body.classList.add('gh-modal-open');loadProfile()}
  function closeProfile(){const m=document.getElementById('gh-profile-modal');if(m)m.hidden=true;document.body.classList.remove('gh-modal-open')}
  async function openRanking(){injectRanking();const m=document.getElementById('gh-ranking-modal');m.hidden=false;document.body.classList.add('gh-modal-open');await syncLeaderboard(true);loadRanking(m.querySelector('.gh-rank-filter.active')?.dataset.period||'week');startRankTimer()}
  function closeRanking(){const m=document.getElementById('gh-ranking-modal');if(m)m.hidden=true;stopRankTimer();document.body.classList.remove('gh-modal-open')}

  function avatarSrc(user,profile){return profile?.photoURL||user?.photoURL||'./avatar.jpg'}
  function achievementForLevel(level){const l=Math.max(1,Math.min(100,Number(level)||1));if(l>=100)return'Bậc thầy HSK';if(l>=75)return'Chuyên gia';if(l>=50)return'Cao thủ';if(l>=30)return'Người chinh phục';if(l>=20)return'Học viên ưu tú';if(l>=10)return'Học viên nâng cao';if(l>=5)return'Học viên chăm chỉ';return'Tân binh'}
  function renderProfileStats(state){const p=state||GH.progress?.get?.()||{};const level=Math.max(1,Math.min(100,Number(p.level)||1));const highest=Math.max(level,Math.min(100,Number(p.highestLevel)||level));const xp=Math.max(0,Number(p.xp)||0);const xpFor=GH.progress?.xpForLevel||((n)=>n<=1?0:100*Math.pow(n-1,1.55));const cur=xpFor(level),next=level>=100?cur:xpFor(level+1);const pct=level>=100?100:Math.max(0,Math.min(100,((xp-cur)/Math.max(1,next-cur))*100));const set=(id,v)=>{const e=document.getElementById(id);if(e)e.textContent=v};set('gh-profile-level',`Level ${level}`);set('gh-profile-xp',`${xp} XP`);set('gh-profile-achievement',achievementForLevel(level));set('gh-profile-best-achievement',achievementForLevel(highest));set('gh-profile-best-level',`Level ${highest}`);set('gh-profile-xp-current',`${xp} XP`);set('gh-profile-xp-next',level>=100?'Đã đạt Level tối đa 100':`${Math.max(0,next-xp)} XP để lên Level ${level+1}`);const fill=document.getElementById('gh-profile-xp-fill');if(fill)fill.style.width=`${pct}%`}
  function makeSvgAvatar(emoji){
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="62" fill="#0f172a" stroke="#00b9d8" stroke-width="4"/><text x="50%" y="54%" font-size="64" text-anchor="middle" dominant-baseline="central">${emoji}</text></svg>`;
    return 'data:image/svg+xml;utf8,'+encodeURIComponent(svg);
  }
  function avatarSrc(user,profile){
    return profile?.photoURL||profile?.avatarUrl||user?.photoURL||localStorage.getItem('gh_avatar_'+user?.uid)||localStorage.getItem('gh_current_avatar')||'./avatar.jpg';
  }
  async function loadProfile(){
    const user=currentUser(),profile=window.ghAuth?.getProfile?await window.ghAuth.getProfile(user):null;
    const name=profile?.username||profile?.displayName||user?.displayName||user?.email||'Tài khoản';
    const av=avatarSrc(user,profile);
    const img=document.getElementById('gh-profile-avatar');
    if(img){img.src=av;img.onerror=()=>{img.src='./avatar.jpg'}}
    const input=document.getElementById('gh-profile-name');if(input)input.value=name;
    const dob=document.getElementById('gh-profile-dob');if(dob)dob.value=String(profile?.dateOfBirth||'').slice(0,10);
    renderProfileStats(GH.progress?.get?.()||{});
  }
  async function resizeImage(file){return new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const max=256,scale=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.max(1,Math.round(im.width*scale));c.height=Math.max(1,Math.round(im.height*scale));c.getContext('2d').drawImage(im,0,0,c.width,c.height);resolve(c.toDataURL('image/jpeg',.78))};im.onerror=reject;im.src=r.result};r.onerror=reject;r.readAsDataURL(file)})}
  async function handleAvatar(e){const file=e.target.files?.[0];if(!file)return;try{const data=await resizeImage(file),img=document.getElementById('gh-profile-avatar');if(img){img.src=data;img.dataset.pendingAvatar=data}}catch{GH.utils?.toast?.('Không đọc được ảnh avatar','error')}}
  async function saveProfile(){
    const user=currentUser(),input=document.getElementById('gh-profile-name'),dob=document.getElementById('gh-profile-dob'),img=document.getElementById('gh-profile-avatar'),status=document.getElementById('gh-profile-status'),btn=document.getElementById('gh-save-profile');
    if(!user||!window.ghAuth?.updateProfileData){if(status)status.textContent='Chưa sẵn sàng tài khoản';return}
    const name=String(input?.value||'').trim();
    const dateOfBirth=String(dob?.value||'').trim();
    if(name.length<2){if(status)status.textContent='Tên cần ít nhất 2 ký tự.';return}
    if(dateOfBirth&&new Date(`${dateOfBirth}T00:00:00`) > new Date()){if(status)status.textContent='Ngày sinh không thể ở tương lai.';return}
    btn.disabled=true;if(status)status.textContent='Đang lưu và đồng bộ avatar...';
    const photoToSave = img?.dataset.pendingAvatar || img?.src || user.photoURL || '';
    const ok=await window.ghAuth.updateProfileData({displayName:name,username:name,photoURL:photoToSave,dateOfBirth});
    if(ok){
      window.ghUserProfile={...(window.ghUserProfile||{}),username:name,displayName:name,photoURL:photoToSave,dateOfBirth};
      const chip=document.getElementById('online-user-chip');
      if(chip)chip.innerHTML=`<img src="${photoToSave || './avatar.jpg'}" alt="" class="chip-avatar-img" onerror="this.src='./avatar.jpg'" /> <span>${name}</span>`;
      if(status)status.textContent='✓ Đã lưu và đồng bộ avatar trên tất cả thiết bị!';
      syncLeaderboard(true);
      setTimeout(()=>{if(status)status.textContent=''},3000);
    }else{
      if(status)status.textContent='Không thể lưu. Hãy kiểm tra mạng/Firebase.';
    }
    btn.disabled=false;
  }

  async function loadRanking(periodName='week'){
    const list=document.getElementById('gh-ranking-list');if(!list)return;const request=++rankRequest;list.innerHTML='<div class="gh-empty">Đang tải thành tích thật...</div>';
    if(!window.ghAuth?.getLeaderboard){list.innerHTML='<div class="gh-empty">Chưa có hệ thống xếp hạng.</div>';return}
    const rows=await window.ghAuth.getLeaderboard(periodName);if(request!==rankRequest)return;
    const field=periodName==='month'?'monthlyXp':'weeklyXp';const me=currentUser()?.uid;
    if(!rows.length){list.innerHTML='<div class="gh-empty">Chưa có tài khoản nào có điểm trong kỳ này.</div>';return}
    const myIndex=me?rows.findIndex(r=>r.uid===me):-1;
    const visible=myIndex>19?[...rows.slice(0,20),rows[myIndex]]:rows.slice(0,20);
    list.innerHTML=visible.map(r=>{const rank=rows.findIndex(x=>x.uid===r.uid)+1;return `<div class="gh-rank-row ${rank===1?'top':''} ${r.uid===me?'me':''}"><span class="gh-rank-no">${rank<=3?['🥇','🥈','🥉'][rank-1]:rank}</span><img src="${esc(r.photoURL||'./avatar.jpg')}" onerror="this.src='./avatar.jpg'" alt=""><div class="gh-rank-name"><b>${esc(r.displayName||'Tài khoản')}${r.uid===me?' <em>Bạn</em>':''}</b><small>Level ${Number(r.level||1)} · ${Number(r[field]||0)} XP</small></div><strong>${Number(r[field]||0)} XP</strong></div>`}).join('');
    const top=rows[0],hn=document.getElementById('gh-honor-name'),hs=document.getElementById('gh-honor-score');if(periodName==='week'){if(hn)hn.textContent=top?top.displayName:'Chưa có';if(hs)hs.textContent=top?`${Number(top.weeklyXp||0)} XP trong tuần`:'-- XP'}
  }
  function startRankTimer(){stopRankTimer();rankTimer=setInterval(()=>{const m=document.getElementById('gh-ranking-modal');if(!m||m.hidden)return;loadRanking(m.querySelector('.gh-rank-filter.active')?.dataset.period||'week')},60000)}
  function stopRankTimer(){if(rankTimer){clearInterval(rankTimer);rankTimer=null}}
  let syncTimer;
  async function syncLeaderboard(immediate=false){clearTimeout(syncTimer);const run=async()=>{const user=currentUser(),p=GH.progress?.get?.();if(!user||!p||!window.ghAuth?.saveLeaderboard)return;GH.progress?.ensureLeaderboardPeriod?.();const state=GH.progress.get(),k=period();await window.ghAuth.saveLeaderboard({displayName:window.ghUserProfile?.username||user.displayName||user.email,photoURL:window.ghUserProfile?.photoURL||user.photoURL||'',weeklyXp:state.leaderboard?.weeklyXp||0,monthlyXp:state.leaderboard?.monthlyXp||0,weekKey:k.weekKey,monthKey:k.monthKey,level:state.level||1,highestLevel:state.highestLevel||state.level||1})};if(immediate)return run();return new Promise(resolve=>{syncTimer=setTimeout(async()=>{await run();resolve(true)},800)})}
  function bind(){injectSettings();injectProfile();injectRanking();persistSettings();document.getElementById('gh-settings-open')?.addEventListener('click',openSettings);document.getElementById('gh-profile-open')?.addEventListener('click',openProfile);document.getElementById('gh-ranking-open')?.addEventListener('click',openRanking);window.addEventListener('gh-xp-updated',async()=>{renderProfileStats(GH.progress?.get?.()||{});await syncLeaderboard(true);const m=document.getElementById('gh-ranking-modal');if(m&&!m.hidden)loadRanking(m.querySelector('.gh-rank-filter.active')?.dataset.period||'week')});window.addEventListener('gh-auth-ready',()=>setTimeout(()=>syncLeaderboard(true),700));window.addEventListener('gh-progress-loaded',()=>{renderProfileStats(GH.progress?.get?.()||{});setTimeout(()=>syncLeaderboard(true),300);});setTimeout(()=>syncLeaderboard(true),1400);document.addEventListener('keydown',e=>{if(e.key!=='Escape')return;closeSettings();closeProfile();closeRanking()})}
  window.GH_SPEECH={getSpeed:()=>settings.speechSpeed||'normal',setSpeed:(spd)=>{settings.speechSpeed=spd;persistSettings();syncSettingInputs();window.dispatchEvent(new CustomEvent('gh-speech-speed-changed',{detail:{speed:spd}}));},getRate:()=>{const s=settings.speechSpeed||'normal';return s==='slow'?0.65:(s==='fast'?1.15:0.85);},getPlaybackRate:()=>{const s=settings.speechSpeed||'normal';return s==='slow'?0.75:(s==='fast'?1.25:1.0);},getBaiduSpeed:()=>{const s=settings.speechSpeed||'normal';return s==='slow'?3:(s==='fast'?7:5);}};
  window.GHEnhancements={openSettings,openProfile,openRanking,loadRanking,syncLeaderboard};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
