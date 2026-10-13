document.documentElement.classList.add('js');
const nav=document.querySelector('.nav'),b=document.querySelector('.burger');
if(b){b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});nav.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
if('IntersectionObserver'in window){const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');o.unobserve(x.target)}}),{threshold:.05});document.querySelectorAll('.rv').forEach(el=>o.observe(el))}else document.querySelectorAll('.rv').forEach(el=>el.classList.add('in'));
document.querySelectorAll('.gth').forEach(t=>t.addEventListener('click',()=>{const m=document.querySelector('.gmain picture');m.querySelector('source').srcset=t.dataset.webp;m.querySelector('img').src=t.dataset.jpg;document.querySelectorAll('.gth').forEach(x=>x.classList.remove('on'));t.classList.add('on')}));
(function(){var g=document.getElementById('agrid');if(!g)return;var $=function(i){return document.getElementById(i)},cs=[].slice.call(g.children),B=24,lim=B,st={v:'',c:''};
var fp=$('fp'),fm=$('fm'),fd=$('fd'),PM=+fp.max,MM=+fm.max,DS=[25,50,100,150,200,300,0];
function fmt(n){return n.toLocaleString('en-GB')}
function paint(r){r.style.setProperty('--f',((r.value-r.min)/(r.max-r.min)*100)+'%')}
function run(keep){if(!keep)lim=B;var p=+fp.value,m=+fm.value,dl=DS[+fd.value],s=$('fs').value,list=[];$('fdo').textContent=dl?dl+' mi':'Any';paint(fd);
$('fpo').textContent=p>=PM?'Any':'£'+fmt(p);$('fmo').textContent=m>=MM?'Any':fmt(m)+' mi';paint(fp);paint(fm);
cs.forEach(function(e){var d=e.dataset,ok=(!st.v||d.v==st.v)&&(!st.c||d.c==st.c)&&(p>=PM||(+d.p>0&&+d.p<=p))&&(m>=MM||(+d.m>=0&&+d.m<=m))&&(!dl||(+d.d>=0&&+d.d<=dl));if(ok)list.push(e);else e.classList.add('off')});
var key=s.replace('-',''),dir=s[0]=='-'?-1:1;
list.sort(function(a,b){if(s=='best'){var h=b.dataset.h-a.dataset.h;return h||(a.dataset.p-b.dataset.p)}var x=+a.dataset[key],y=+b.dataset[key];if(key=='m'||key=='d'){if(x<0)x=1e9;if(y<0)y=1e9}return (x-y)*dir});
list.forEach(function(e,i){g.appendChild(e);e.classList.toggle('off',i>=lim)});
$('fn').textContent=list.length;$('fn2').textContent=list.length;$('fnone').hidden=list.length>0;
$('fmore').hidden=list.length<=lim;$('fshown').textContent=list.length?'Showing '+Math.min(lim,list.length)+' of '+list.length:'';
var a=(st.v?1:0)+(st.c?1:0)+(p<PM?1:0)+(m<MM?1:0)+(dl?1:0);$('factive').textContent=a||''}
[].forEach.call(document.querySelectorAll('.chip'),function(b){b.addEventListener('click',function(){st[b.dataset.g]=b.dataset.val;[].forEach.call(document.querySelectorAll('.chip[data-g="'+b.dataset.g+'"]'),function(x){x.classList.toggle('on',x==b)});run()})});
fp.addEventListener('input',function(){run()});fm.addEventListener('input',function(){run()});fd.addEventListener('input',function(){run()});$('fs').addEventListener('change',function(){run()});
function reset(){st={v:'',c:''};[].forEach.call(document.querySelectorAll('.chip'),function(x){x.classList.toggle('on',x.dataset.val=='')});fp.value=PM;fm.value=MM;fd.value=6;$('fs').value='best';run()}
$('fr').addEventListener('click',reset);$('fr2').addEventListener('click',reset);
$('fmore').addEventListener('click',function(){lim+=B;run(true)});
var sh=$('fsheet'),shHome=sh.parentNode,shNext=sh.nextSibling,mq=window.matchMedia('(max-width:760px)');function place(){if(mq.matches){if(sh.parentNode!==document.body)document.body.appendChild(sh)}else if(sh.parentNode===document.body){shHome.insertBefore(sh,shNext)}}place();mq.addListener(place);function open(o){sh.classList.toggle('open',o);document.body.classList.toggle('sheet',o);$('fopen').setAttribute('aria-expanded',o)}
$('fopen').addEventListener('click',function(){open(true)});$('fclose').addEventListener('click',function(){open(false)});$('fdone').addEventListener('click',function(){open(false);document.getElementById('all').scrollIntoView({behavior:'smooth'})});
document.addEventListener('click',function(e){if(document.body.classList.contains('sheet')&&!sh.contains(e.target)&&e.target!=$('fopen'))open(false)});
[].forEach.call(document.querySelectorAll('.vt button'),function(b){b.addEventListener('click',function(){[].forEach.call(document.querySelectorAll('.vt button'),function(x){x.classList.toggle('on',x==b)});g.classList.toggle('list',b.dataset.view=='list')})});
(function(){var q=new URLSearchParams(location.search);if(q.get('d')){var i=DS.indexOf(+q.get('d'));if(i>=0)fd.value=i}if(q.get('sort'))$('fs').value=q.get('sort');run();if(q.get('filters')=='open')open(true);if(q.get('d')||q.get('sort'))setTimeout(function(){document.getElementById('all').scrollIntoView()},50)})()})();
