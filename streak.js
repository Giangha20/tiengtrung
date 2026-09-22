(() => {
  const GH=window.GH=window.GH||{}; const KEY='gh_streak_v2';
  function calc(){let s={current:0,best:0,last:null};try{s={...s,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{};const today=GH.utils.todayKey();if(s.last&&s.last!==today){const prev=new Date();prev.setDate(prev.getDate()-1);if(s.last!==GH.utils.todayKey(prev))s.current=0}return s}
  function activity(){let s=calc(),today=GH.utils.todayKey();if(s.last===today)return s;const y=new Date();y.setDate(y.getDate()-1);s.current=s.last===GH.utils.todayKey(y)?s.current+1:1;s.best=Math.max(s.best,s.current);s.last=today;localStorage.setItem(KEY,JSON.stringify(s));render(s);if(window.ghAuth?.saveProgress)window.ghAuth.saveProgress({streak:s}).catch(()=>{});return s}
  function render(s=calc()){const el=document.getElementById('streak-count');if(el)el.textContent=s.current;const w=document.getElementById('streak-widget');if(w)w.title=`Chuỗi học tập: ${s.current} ngày • Kỷ lục ${s.best} ngày`}
  GH.streak={activity,render,get:calc}; window.addEventListener('DOMContentLoaded',()=>render());
})();