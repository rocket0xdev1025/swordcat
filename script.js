(()=>{const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const t=document.getElementById('track');let s='';for(let i=0;i<12;i++)s+='<span>$SWORDCAT</span><span>&#9670;</span><span>CAT WIF SWORD</span><span>&#9670;</span>';t.innerHTML=s+s;
const b=document.getElementById('burger'),m=document.getElementById('menu');b.onclick=()=>{const o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)};m.querySelectorAll('a').forEach(a=>a.onclick=()=>m.classList.remove('open'));
const nav=document.querySelector('.nav'),bg=document.querySelector('.hero-bg');
if(RM&&bg.pause){bg.removeAttribute('autoplay');bg.pause()}
addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);if(!RM)bg.style.transform=`translateY(${scrollY*.35}px)`},{passive:true});
const cb=document.getElementById('copy');cb.onclick=async()=>{const v=document.getElementById('ca').textContent;const l=cb.querySelector('b');try{await navigator.clipboard.writeText(v);l.textContent='Copied'}catch(e){l.textContent='Copy failed'}setTimeout(()=>l.textContent='Copy',1500)};
const count=el=>{const n=+el.dataset.count,suf=el.dataset.suffix||'';if(RM){el.textContent=n+suf;return}let st=null;const f=ts=>{st??=ts;const p=Math.min((ts-st)/1500,1);el.textContent=Math.round(n*p*(2-p))+suf;if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-count]').forEach(count);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
document.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;c.style.setProperty('--mx',x*100+'%');c.style.setProperty('--my',y*100+'%');if(!RM)c.style.transform=`perspective(700px) rotateY(${(x-.5)*10}deg) rotateX(${(.5-y)*10}deg)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
const v=document.getElementById('vid'),sb=document.getElementById('sound');sb.onclick=()=>{v.muted=!v.muted;sb.textContent=v.muted?'Sound On':'Sound Off';v.play().catch(()=>{})};
if(RM){v.removeAttribute('autoplay');v.pause()}
else new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting?v.play().catch(()=>{}):v.pause()),{threshold:.3}).observe(v);
if(RM)return;const c=document.getElementById('fx'),x=c.getContext('2d');let W,H,P=[];const rs=()=>{W=c.width=innerWidth;H=c.height=innerHeight};rs();addEventListener('resize',rs);
const add=(px,py,trail)=>P.push({x:px,y:py,vx:(Math.random()-.5)*(trail?1:.6),vy:trail?-Math.random()*1.5:-(Math.random()*.8+.2),l:1,d:trail?.03:.003+Math.random()*.004,r:trail?2+Math.random()*2:1+Math.random()*2.2,dust:!trail&&Math.random()<.4});
for(let i=0;i<70;i++){add(Math.random()*innerWidth,Math.random()*innerHeight,false)}
addEventListener('pointermove',e=>{for(let i=0;i<2;i++)add(e.clientX,e.clientY,true)});
(function loop(){x.clearRect(0,0,W,H);if(P.length<90)add(Math.random()*W,H+10,false);x.globalCompositeOperation='lighter';
P=P.filter(p=>{p.x+=p.vx+(p.dust?.4:Math.sin(p.y/40)*.3);p.y+=p.dust?p.vy*.2:p.vy;p.l-=p.d;if(p.l<=0||p.y<-20)return false;
x.fillStyle=p.dust?`rgba(230,200,150,${p.l*.35})`:`rgba(255,${120+Math.random()*80|0},30,${p.l})`;x.shadowBlur=p.dust?0:10;x.shadowColor='#ff7a1a';x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fill();return true});requestAnimationFrame(loop)})();})();
