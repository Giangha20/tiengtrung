(() => {
  const GH = window.GH = window.GH || {};
  GH.utils = {
    escapeHtml(value='') { return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); },
    todayKey(d = new Date()) {
      if (!(d instanceof Date) || isNaN(d)) d = new Date();
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    },
    yesterdayKey(d = new Date()) {
      if (!(d instanceof Date) || isNaN(d)) d = new Date();
      const prev = new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1);
      return this.todayKey(prev);
    },
    clamp(n,min,max){ return Math.min(max,Math.max(min,n)); },
    debounce(fn,wait=180){ let t; return (...args)=>{clearTimeout(t);t=setTimeout(()=>fn(...args),wait)}; },
    get(obj,path, fallback=null){ return String(path).split('.').reduce((a,k)=>a?.[k],obj) ?? fallback; },
    toast(message,type='info'){ let el=document.getElementById('gh-toast'); if(!el){el=document.createElement('div');el.id='gh-toast';el.className='gh-toast';document.body.appendChild(el)} el.textContent=message;el.dataset.type=type;el.classList.add('show');clearTimeout(el._t);el._t=setTimeout(()=>el.classList.remove('show'),2800); }
  };
})();