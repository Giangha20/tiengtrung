(() => {
  function initNavMenu(){
    const toggle=document.getElementById('gh-nav-menu-toggle'),menu=document.getElementById('gh-nav-menu');
    if(!toggle||!menu||toggle.dataset.ready)return;
    toggle.dataset.ready='1';
    const setOpen=(open)=>{menu.hidden=!open;toggle.setAttribute('aria-expanded',String(open));toggle.classList.toggle('is-open',open)};
    const close=()=>setOpen(false);
    toggle.addEventListener('click',e=>{e.stopPropagation();setOpen(menu.hidden)});
    menu.addEventListener('click',e=>{
      const b=e.target.closest('.gh-nav-item');if(!b)return;
      const action=b.dataset.action;
      if(action){
        const api=window.GHLearningPlus;
        const fn={exercise:api?.openQuickExercise,flashcard:()=>window.switchMode?.('flashcard'),profile:()=>window.GHEnhancements?.openProfile?.(),ranking:()=>window.GHEnhancements?.openRanking?.()}[action];
        fn?.();close();return;
      }
      const mode=b.dataset.mode;if(mode){window.switchMode?.(mode);close();}
    });
    document.addEventListener('click',e=>{if(!menu.contains(e.target)&&e.target!==toggle&&!toggle.contains(e.target))close()});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',initNavMenu,{once:true});else initNavMenu();
})();
