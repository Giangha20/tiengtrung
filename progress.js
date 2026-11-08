(() => {
  const GH=window.GH=window.GH||{};
  const KEY='gh_learning_engine_v1';
  const defaults=()=>({xp:0,level:1,highestLevel:1,leaderboard:{weekKey:null,weeklyXp:0,monthKey:null,monthlyXp:0},learned:[],mastered:[],review:{},stats:{answers:0,correct:0,studySeconds:0,wordsToday:0,lastStudy:null},daily:{date:null,words:0,listen:0,pinyin:0,challengeDone:false},favorites:[],notes:{}});
  function load(){try{return {...defaults(),...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return defaults()}}
  let state=load();
  function persist(){localStorage.setItem(KEY,JSON.stringify(state));}
  function xpForLevel(level){const l=Math.max(1,Math.min(100,Number(level)||1));return l<=1?0:Math.round(100*Math.pow(l-1,1.55))}
  function xpLevel(xp){const value=Math.max(0,Number(xp)||0);let level=1;for(let n=2;n<=100;n++){if(value<xpForLevel(n))break;level=n}return level}
  function scaleReward(base,level=state.level||1){const raw=Math.max(0,Number(base)||0);const factor=Math.max(.5,1-(Math.max(1,Math.min(100,Number(level)||1))-1)*.005);return Math.max(5,Math.floor(raw*factor))}
  function ensureDay(){const d=GH.utils.todayKey();if(state.daily.date!==d) state.daily={date:d,words:0,listen:0,pinyin:0,challengeDone:false};}
  function patch(obj){state={...state,...obj};persist();return state}
  function periodKeys(d=new Date()){
    const day=new Date(d.getTime());
    const isoDay=day.getUTCDay()||7;
    day.setUTCDate(day.getUTCDate()-isoDay+1);
    const weekKey=day.toISOString().slice(0,10);
    const monthKey=d.toISOString().slice(0,7);
    return {weekKey,monthKey};
  }
  function ensureLeaderboardPeriod(){
    const k=periodKeys();
    if(!state.leaderboard||state.leaderboard.monthKey!==k.monthKey){state.leaderboard={weekKey:k.weekKey,weeklyXp:0,monthKey:k.monthKey,monthlyXp:0};}
    else if(state.leaderboard.weekKey!==k.weekKey){state.leaderboard={...state.leaderboard,weekKey:k.weekKey,weeklyXp:0};}
  }
  function addXp(amount){const gained=scaleReward(amount,state.level||1);ensureLeaderboardPeriod();state.xp+=gained;state.leaderboard.weeklyXp+=gained;state.leaderboard.monthlyXp+=gained;state.level=xpLevel(state.xp);state.highestLevel=Math.max(Number(state.highestLevel)||1,state.level);persist();window.dispatchEvent(new CustomEvent('gh-xp-updated',{detail:{gained,level:state.level}}));sync();return state}
  function markWord(wordId,quality=2){ensureDay();const id=String(wordId);if(!state.learned.includes(id))state.learned.push(id);if(quality>=3&&!state.mastered.includes(id))state.mastered.push(id);const now=Date.now();const current=state.review[id]||{interval:0,reps:0};const intervals=[1,2,4,7,14,30];const idx=GH.utils.clamp((current.reps||0)+(quality>=2?1:-1),0,intervals.length-1);current.reps=Math.max(0,(current.reps||0)+(quality>=2?1:-1));current.interval=intervals[idx];current.nextAt=now+current.interval*86400000;state.review[id]=current;state.daily.words++;state.stats.wordsToday=state.daily.words;state.stats.lastStudy=now;addXp(quality>=3?10:5);persist();return current}
  function answer(correct){ensureDay();state.stats.answers++;if(correct)state.stats.correct++;state.daily.pinyin++;addXp(correct?5:1);persist()}
  function markListening(correct){ensureDay();state.stats.answers++;if(correct)state.stats.correct++;state.daily.listen++;addXp(correct?8:2);persist()}
  function dueWords(){const now=Date.now();return Object.entries(state.review).filter(([,v])=>v.nextAt<=now).map(([id])=>id)}
  function toggleFavorite(id){id=String(id);const i=state.favorites.indexOf(id);if(i>=0)state.favorites.splice(i,1);else state.favorites.push(id);persist();if(window.ghAuth?.[state.favorites.includes(id)?'saveFavorite':'removeFavorite']){window.ghAuth[state.favorites.includes(id)?'saveFavorite':'removeFavorite'](id).catch(()=>{})}sync();return state.favorites.includes(id)}
  function setNote(id,note){state.notes[String(id)]=String(note||'');persist();window.ghAuth?.saveNote?.(id,note).catch(()=>{});sync()}
  async function sync(){if(window.ghAuth?.saveProgress){try{await window.ghAuth.saveProgress({learningEngine:state})}catch(e){console.warn('learning sync',e)}}}
  async function hydrate(){
    try {
      const p = window.ghAuth?.getProgress?.() || {};
      const cloud = p.learningEngine;
      if (cloud && typeof cloud === 'object') {
        const xp = Math.max(Number(cloud.xp) || 0, Number(state.xp) || 0);
        const level = Math.max(Number(cloud.level) || 1, Number(state.level) || 1, xpLevel(xp));
        const highestLevel = Math.max(Number(cloud.highestLevel) || 1, Number(state.highestLevel) || 1, level);

        const learned = Array.from(new Set([...(cloud.learned || []), ...(state.learned || [])]));
        const mastered = Array.from(new Set([...(cloud.mastered || []), ...(state.mastered || [])]));
        const favorites = Array.from(new Set([...(cloud.favorites || []), ...(state.favorites || [])]));
        const notes = { ...(cloud.notes || {}), ...(state.notes || {}) };
        const review = { ...(cloud.review || {}), ...(state.review || {}) };

        const stats = {
          answers: Math.max(cloud.stats?.answers || 0, state.stats?.answers || 0),
          correct: Math.max(cloud.stats?.correct || 0, state.stats?.correct || 0),
          studySeconds: Math.max(cloud.stats?.studySeconds || 0, state.stats?.studySeconds || 0),
          wordsToday: Math.max(cloud.stats?.wordsToday || 0, state.stats?.wordsToday || 0),
          lastStudy: Math.max(cloud.stats?.lastStudy || 0, state.stats?.lastStudy || 0) || null
        };

        const leaderboard = {
          weekKey: cloud.leaderboard?.weekKey || state.leaderboard?.weekKey,
          weeklyXp: Math.max(cloud.leaderboard?.weeklyXp || 0, state.leaderboard?.weeklyXp || 0),
          monthKey: cloud.leaderboard?.monthKey || state.leaderboard?.monthKey,
          monthlyXp: Math.max(cloud.leaderboard?.monthlyXp || 0, state.leaderboard?.monthlyXp || 0)
        };

        state = {
          ...defaults(),
          ...cloud,
          ...state,
          xp,
          level,
          highestLevel,
          learned,
          mastered,
          favorites,
          notes,
          review,
          stats,
          leaderboard
        };
      }
      ensureLeaderboardPeriod();
      persist();
      window.dispatchEvent(new CustomEvent('gh-progress-updated', { detail: state }));
      window.dispatchEvent(new CustomEvent('gh-xp-updated', { detail: { gained: 0, level: state.level } }));
      return state;
    } catch(e) {
      console.warn('Hydrate error:', e);
      return state;
    }
  }
  GH.progress={get:()=>state,patch,addXp,periodKeys,ensureLeaderboardPeriod,markWord,answer,markListening,dueWords,toggleFavorite,setNote,hydrate,sync,persist,xpForLevel,xpLevel,scaleReward};
  window.addEventListener('gh-auth-ready', hydrate);
  window.addEventListener('gh-progress-loaded', hydrate);
  ensureDay();
  persist();
})();