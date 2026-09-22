(() => {
  const GH=window.GH=window.GH||{};
  const KEY='gh_learning_engine_v1';
  const defaults=()=>({xp:0,level:1,learned:[],mastered:[],review:{},stats:{answers:0,correct:0,studySeconds:0,wordsToday:0,lastStudy:null},daily:{date:null,words:0,listen:0,pinyin:0,challengeDone:false},favorites:[],notes:{}});
  function load(){try{return {...defaults(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return defaults()}}
  let state=load();
  function persist(){localStorage.setItem(KEY,JSON.stringify(state));}
  function xpLevel(xp){return Math.max(1,Math.floor(Math.sqrt(Math.max(0,xp)/100))+1)}
  function ensureDay(){const d=GH.utils.todayKey();if(state.daily.date!==d) state.daily={date:d,words:0,listen:0,pinyin:0,challengeDone:false};}
  function patch(obj){state={...state,...obj};persist();return state}
  function addXp(amount){state.xp+=Math.max(0,Number(amount)||0);state.level=xpLevel(state.xp);persist();return state}
  function markWord(wordId,quality=2){ensureDay();const id=String(wordId);if(!state.learned.includes(id))state.learned.push(id);if(quality>=3&&!state.mastered.includes(id))state.mastered.push(id);const now=Date.now();const current=state.review[id]||{interval:0,reps:0};const intervals=[1,2,4,7,14,30];const idx=GH.utils.clamp((current.reps||0)+(quality>=2?1:-1),0,intervals.length-1);current.reps=Math.max(0,(current.reps||0)+(quality>=2?1:-1));current.interval=intervals[idx];current.nextAt=now+current.interval*86400000;state.review[id]=current;state.daily.words++;state.stats.wordsToday=state.daily.words;state.stats.lastStudy=now;addXp(quality>=3?10:5);persist();return current}
  function answer(correct){ensureDay();state.stats.answers++;if(correct)state.stats.correct++;state.daily.pinyin++;addXp(correct?5:1);persist()}
  function markListening(correct){ensureDay();state.stats.answers++;if(correct)state.stats.correct++;state.daily.listen++;addXp(correct?8:2);persist()}
  function dueWords(){const now=Date.now();return Object.entries(state.review).filter(([,v])=>v.nextAt<=now).map(([id])=>id)}
  function toggleFavorite(id){id=String(id);const i=state.favorites.indexOf(id);if(i>=0)state.favorites.splice(i,1);else state.favorites.push(id);persist();if(window.ghAuth?.[state.favorites.includes(id)?'saveFavorite':'removeFavorite']){window.ghAuth[state.favorites.includes(id)?'saveFavorite':'removeFavorite'](id).catch(()=>{})}sync();return state.favorites.includes(id)}
  function setNote(id,note){state.notes[String(id)]=String(note||'');persist();window.ghAuth?.saveNote?.(id,note).catch(()=>{});sync()}
  async function sync(){if(window.ghAuth?.saveProgress){try{await window.ghAuth.saveProgress({learningEngine:state})}catch(e){console.warn('learning sync',e)}}}
  async function hydrate(){try{const p=window.ghAuth?.getProgress?.()||{};if(p.learningEngine&&typeof p.learningEngine==='object'){state={...defaults(),...p.learningEngine,...state};persist()}}catch(e){}}
  GH.progress={get:()=>state,patch,addXp,markWord,answer,markListening,dueWords,toggleFavorite,setNote,hydrate,sync,persist};
  window.addEventListener('gh-auth-ready',hydrate); ensureDay(); persist();
})();