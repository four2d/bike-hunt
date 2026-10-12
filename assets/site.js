document.documentElement.classList.add('js');
const nav=document.querySelector('.nav'),b=document.querySelector('.burger');
if(b){b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});nav.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
if('IntersectionObserver'in window){const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.05});document.querySelectorAll('.rv').forEach(el=>o.observe(el))}else document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'));
document.querySelectorAll('.gth').forEach(t=>t.addEventListener('click',()=>{const m=document.querySelector('.gmain picture');m.querySelector('source').srcset=t.dataset.webp;m.querySelector('img').src=t.dataset.jpg;document.querySelectorAll('.gth').forEach(x=>x.classList.remove('on'));t.classList.add('on')}));
(function(){var g=document.getElementById('agrid');if(!g)return;var cs=[].slice.call(g.children),$=function(i){return document.getElementById(i)};
function n(v){return parseInt((v||'').replace(/[^0-9]/g,''))||0}
function run(){var v=$('fv').value,c=$('fc').value,p=n($('fp').value),m=n($('fm').value),s=$('fs').value,k=0;
cs.forEach(function(e){var d=e.dataset,ok=(!v||d.v==v)&&(!c||d.c==c)&&(!p||(+d.p>0&&+d.p<=p))&&(!m||(+d.m>=0&&+d.m<=m));e.hidden=!ok;if(ok)k++});
var key=s.replace('-',''),dir=s[0]=='-'?-1:1;cs.slice().sort(function(a,b){var x=+a.dataset[key],y=+b.dataset[key];if(key=='m'){if(x<0)x=1e9;if(y<0)y=1e9}return (x-y)*dir}).forEach(function(e){g.appendChild(e)});$('fn').textContent=k}
['fv','fc','fp','fm','fs'].forEach(function(i){$(i).addEventListener('change',run)});$('fr').addEventListener('click',function(){['fv','fc','fp','fm'].forEach(function(i){$(i).value=''});$('fs').value='p';run()});run()})();
