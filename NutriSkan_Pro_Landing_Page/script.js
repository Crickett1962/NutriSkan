// Minimal reveal animations (no trackers)
(function(){
  const els = document.querySelectorAll('.fade-up');
  if (!('IntersectionObserver' in window) || els.length === 0) return;

  const io = new IntersectionObserver((entries)=>{
    for (const e of entries){
      if (e.isIntersecting){
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    }
  }, {threshold: 0.14});

  els.forEach(el=>io.observe(el));
})();