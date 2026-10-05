(function(){
  // floating dots
  var d=document.getElementById('dots');
  for(var i=0;i<28;i++){var s=document.createElement('span');s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.animationDelay=(Math.random()*4)+'s';d.appendChild(s);}

  // parallax layers (mouse + scroll)
  var L=document.querySelectorAll('.layer,.par'),mx=0,my=0,sy=0,tick=false;
  function upd(){tick=false;L.forEach(function(l){var k=parseFloat(l.dataset.s);l.style.transform='translate3d('+(mx*k*30)+'px,'+(my*k*30+sy*k)+'px,0)';});}
  function req(){if(!tick){tick=true;requestAnimationFrame(upd);}}
  addEventListener('mousemove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5;req();});
  addEventListener('scroll',function(){sy=Math.min(scrollY,900)*.4;req();},{passive:true});

  // scroll reveal
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
  document.querySelectorAll('.rv').forEach(function(el,i){el.style.transitionDelay=(i%3)*.08+'s';io.observe(el);});

  // card glow follows cursor
  document.querySelectorAll('.card').forEach(function(c){c.addEventListener('mousemove',function(e){var r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px');});});

  // typing effect
  var w=['full-stack web apps','C++ & DSA solutions','clean responsive UIs','practical projects'],wi=0,ci=0,dl=false,te=document.getElementById('typed');
  function ty(){var s=w[wi];ci+=dl?-1:1;te.textContent=s.slice(0,ci);var d=dl?35:75;if(!dl&&ci===s.length){dl=true;d=1400}else if(dl&&ci===0){dl=false;wi=(wi+1)%w.length;d=300}setTimeout(ty,d)}
  ty();
})();