(function(){
if(document.getElementById('fb-ov'))return;
var url=window.location.href;
var s=document.createElement('style');
s.textContent='@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rajdhani:wght@700&display=swap");#fb-ov{position:fixed!important;inset:0!important;z-index:2147483647!important;background:#020810!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;padding:1.5rem 1.2rem!important;font-family:Rajdhani,sans-serif!important}#fb-ov *{box-sizing:border-box!important;margin:0!important;padding:0!important}.fl{font-family:"Black Ops One",cursive!important;font-size:clamp(22px,6vw,38px)!important;letter-spacing:4px!important;color:#fff!important;text-shadow:0 0 30px #00e5ff!important;text-align:center!important;animation:fbgl 2s ease-in-out infinite alternate!important}.fline{width:100%!important;max-width:380px!important;height:2px!important;background:linear-gradient(90deg,transparent,#00e5ff,#fff,#00e5ff,transparent)!important;margin:7px 0 4px!important}.fsub{font-size:10px!important;font-weight:700!important;letter-spacing:7px!important;color:#00e5ff!important;text-transform:uppercase!important;text-align:center!important;margin-bottom:20px!important}.firow{display:grid!important;grid-template-columns:1fr 1fr 1fr!important;gap:8px!important;width:100%!important;max-width:380px!important;margin-bottom:16px!important}.fib{background:#050d18!important;border:2px solid #00e5ff22!important;border-radius:10px!important;padding:10px 6px!important;text-align:center!important}.fiv{font-family:"Black Ops One",cursive!important;font-size:clamp(13px,4vw,18px)!important;color:#00e5ff!important;text-shadow:0 0 10px #00e5ff55!important}.fil{font-size:9px!important;font-weight:700!important;letter-spacing:4px!important;color:#00e5ff44!important;text-transform:uppercase!important;margin-top:3px!important}.frw{position:relative!important;width:clamp(150px,40vw,180px)!important;height:clamp(150px,40vw,180px)!important;margin-bottom:16px!important}.frsvg{width:100%!important;height:100%!important;transform:rotate(-90deg)!important}.fct{position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;text-align:center!important}.fdg{font-family:"Black Ops One",cursive!important;font-size:clamp(28px,8vw,40px)!important;color:#fff!important;text-shadow:0 0 30px #00e5ff!important;line-height:1!important;animation:fbdp 1s ease-in-out infinite alternate!important}.fds{font-size:10px!important;font-weight:700!important;letter-spacing:5px!important;color:#00e5ff55!important;margin-top:4px!important;text-transform:uppercase!important}.fprow{display:flex!important;align-items:center!important;gap:10px!important;width:100%!important;max-width:380px!important;margin-bottom:12px!important}.fpn{font-family:"Black Ops One",cursive!important;font-size:16px!important;color:#00e5ff!important;min-width:48px!important;text-align:right!important}.fbw{flex:1!important;height:6px!important;background:#050d18!important;border-radius:3px!important;border:1px solid #00e5ff22!important;overflow:visible!important}.fbar{height:100%!important;width:0%!important;background:linear-gradient(90deg,#00e5ff88,#fff,#00e5ff)!important;border-radius:3px!important;transition:width 1s linear!important;box-shadow:0 0 10px #00e5ff!important}.fsbox{background:#050d18!important;border:2px solid #00e5ff33!important;border-radius:10px!important;padding:10px 14px!important;width:100%!important;max-width:380px!important;margin-bottom:12px!important}.fst{font-size:clamp(10px,2.5vw,13px)!important;font-weight:700!important;letter-spacing:3px!important;color:#fff!important;text-transform:uppercase!important;text-align:center!important;animation:fbsp 2s ease-in-out infinite!important}.farow{display:grid!important;grid-template-columns:repeat(6,1fr)!important;gap:6px!important;width:100%!important;max-width:380px!important;margin-bottom:14px!important}.fad{background:#050d18!important;border:2px solid #00e5ff22!important;border-radius:7px!important;padding:8px 4px!important;text-align:center!important;transition:all .4s!important}.fan{font-family:"Black Ops One",cursive!important;font-size:14px!important;color:#0d2030!important}.fal{font-size:8px!important;font-weight:700!important;letter-spacing:2px!important;color:#0d2030!important;text-transform:uppercase!important;margin-top:2px!important}.fad.fdone{border-color:#00e5ff88!important;background:#030f1e!important;box-shadow:0 0 10px #00e5ff22!important}.fad.fdone .fan{color:#00e5ff!important;text-shadow:0 0 8px #00e5ff!important}.fad.fdone .fal{color:#00e5ff66!important}.fad.factive{border-color:#fff!important;background:#061a2e!important;animation:fbaa .6s ease-in-out infinite alternate!important}.fad.factive .fan{color:#fff!important;text-shadow:0 0 12px #00e5ff!important}.fad.factive .fal{color:#00e5ffaa!important}.fdots{display:flex!important;gap:8px!important}.fdot{width:7px!important;height:7px!important;border-radius:50%!important;animation:fbdb 1.4s ease-in-out infinite!important}.fdot:nth-child(1){background:#00e5ff!important;animation-delay:0s!important}.fdot:nth-child(2){background:#fff!important;animation-delay:.2s!important}.fdot:nth-child(3){background:#00e5ff!important;animation-delay:.4s!important}.fdb{background:#030f1e!important;border:2px solid #00e5ff!important;border-radius:12px!important;padding:16px!important;width:100%!important;max-width:380px!important;text-align:center!important;display:none!important;box-shadow:0 0 40px #00e5ff44!important}.fdt{font-family:"Black Ops One",cursive!important;font-size:clamp(14px,4vw,20px)!important;color:#fff!important;letter-spacing:3px!important;text-shadow:0 0 20px #00e5ff!important}.fdts{font-size:11px!important;font-weight:700!important;letter-spacing:4px!important;color:#00e5ff!important;margin-top:5px!important;text-transform:uppercase!important}.fcls{position:absolute!important;top:14px!important;right:14px!important;background:transparent!important;border:2px solid #00e5ff33!important;border-radius:6px!important;padding:4px 10px!important;font-family:Rajdhani,sans-serif!important;font-size:11px!important;font-weight:700!important;letter-spacing:3px!important;color:#00e5ff55!important;cursor:pointer!important;z-index:9!important}.fscan{position:fixed!important;inset:0!important;pointer-events:none!important;z-index:1!important;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,229,255,.015) 2px,rgba(0,229,255,.015) 4px)!important}@keyframes fbgl{0%{text-shadow:0 0 20px #00e5ff}100%{text-shadow:0 0 50px #00e5ff,0 0 100px #00e5ff44}}@keyframes fbdp{0%{text-shadow:0 0 20px #00e5ff}100%{text-shadow:0 0 40px #00e5ff,0 0 80px #00e5ff66}}@keyframes fbsp{0%,100%{opacity:.6;color:#fff}50%{opacity:1;color:#00e5ff}}@keyframes fbaa{0%{box-shadow:0 0 8px #00e5ff33}100%{box-shadow:0 0 24px #00e5ff88}}@keyframes fbdb{0%,80%,100%{transform:scale(.4);opacity:.2}40%{transform:scale(1.3);opacity:1}}';
document.head.appendChild(s);

var T=80,E=0,C=534.07,IV=null;
var MSGS=['Analyzing link structure...','Connecting to bypass API...','Bypassing ad layer 1...','Bypassing ad layer 2...','Bypassing ad layer 3...','Bypassing ad layer 4...','Bypassing ad layer 5...','Bypassing ad layer 6...','Fetching destination...','Finalizing bypass...','Almost done...'];
function fmt(s){var m=Math.floor(s/60),sc=s%60;return m+':'+(sc<10?'0':'')+sc;}

var adH='';
for(var i=1;i<=6;i++)adH+='<div class="fad" id="fad'+i+'"><div class="fan">'+i+'</div><div class="fal">AD</div></div>';

var o=document.createElement('div');
o.id='fb-ov';
o.innerHTML='<div class="fscan"></div>'
+'<button class="fcls" onclick="document.getElementById(\'fb-ov\').remove();clearInterval(window._fbiv)">✕</button>'
+'<div class="fl">FRANCO BYPASS</div>'
+'<div class="fline"></div>'
+'<div class="fsub">Link Shortener Bypass</div>'
+'<div class="firow">'
+'<div class="fib"><div class="fiv" id="fttl">'+fmt(T)+'</div><div class="fil">Total</div></div>'
+'<div class="fib"><div class="fiv" id="fpctb">0%</div><div class="fil">Progress</div></div>'
+'<div class="fib"><div class="fiv" id="fadb">0/6</div><div class="fil">Ads Done</div></div>'
+'</div>'
+'<div class="frw">'
+'<svg class="frsvg" viewBox="0 0 190 190">'
+'<circle fill="none" stroke="#050d18" stroke-width="10" cx="95" cy="95" r="85"/>'
+'<circle fill="none" stroke="#00e5ff11" stroke-width="16" cx="95" cy="95" r="85"/>'
+'<circle id="fpr" fill="none" stroke="#00e5ff" stroke-width="10" stroke-linecap="round" stroke-dasharray="534.07" stroke-dashoffset="534.07" cx="95" cy="95" r="85" style="transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);filter:drop-shadow(0 0 8px #00e5ff)"/>'
+'</svg>'
+'<div class="fct"><div class="fdg" id="fdg">'+fmt(T)+'</div><div class="fds">bypassing</div></div>'
+'</div>'
+'<div class="fprow"><div class="fpn" id="fpn">0%</div><div class="fbw"><div class="fbar" id="fbar"></div></div></div>'
+'<div class="fsbox"><div class="fst" id="fst">Analyzing link structure...</div></div>'
+'<div class="farow">'+adH+'</div>'
+'<div class="fdots"><div class="fdot"></div><div class="fdot"></div><div class="fdot"></div></div>'
+'<div class="fdb" id="fdb"><div class="fdt">✓ BYPASS COMPLETE</div><div class="fdts">Redirecting...</div></div>';
document.body.appendChild(o);

IV=setInterval(function(){
  E++;
  var rem=T-E,p=E/T;
  document.getElementById('fdg').textContent=fmt(Math.max(0,rem));
  document.getElementById('fbar').style.width=(p*100)+'%';
  document.getElementById('fpr').style.strokeDashoffset=C*(1-p);
  document.getElementById('fpn').textContent=Math.round(p*100)+'%';
  document.getElementById('fpctb').textContent=Math.round(p*100)+'%';
  var ad=Math.min(6,Math.floor(p*6));
  document.getElementById('fadb').textContent=ad+'/6';
  for(var i=1;i<=6;i++){
    var el=document.getElementById('fad'+i);
    if(!el)continue;
    el.classList.remove('fdone','factive');
    if(i<=ad)el.classList.add('fdone');
    else if(i===ad+1)el.classList.add('factive');
  }
  document.getElementById('fst').textContent=MSGS[Math.min(Math.floor(p*MSGS.length),MSGS.length-1)];
  if(E>=T){
    clearInterval(IV);
    document.getElementById('fst').textContent='Bypass complete!';
    document.getElementById('fdb').style.display='block';
    document.querySelectorAll('.fdot').forEach(function(d){d.style.display='none';});
    doBypass(url);
  }
},1000);
window._fbiv=IV;

function doBypass(u){
  // Method 1: bypass.vip redirect
  var w=window.open('https://bypass.vip/?url='+encodeURIComponent(u),'_blank');
  // Method 2: bypass current page elements
  var kw=['continue','skip','get link','get key','proceed','claim','access','next','download','verify'];
  document.querySelectorAll('a,button').forEach(function(el){
    var t=(el.textContent||el.innerText||'').toLowerCase().trim();
    if(kw.some(function(k){return t.indexOf(k)!==-1;})){
      try{el.click();}catch(e){}
    }
  });
  // Method 3: find hidden destination
  var scripts=document.querySelectorAll('script');
  var pats=[
    /(?:url|link|href|dest|redirect|goto)\s*[:=]\s*['"]([^'"]{10,})['"]/gi,
    /window\.location(?:\.href)?\s*=\s*['"]([^'"]+)['"]/gi,
    /location\.replace\s*\(\s*['"]([^'"]+)['"]/gi
  ];
  scripts.forEach(function(sc){
    var txt=sc.textContent||'';
    pats.forEach(function(pat){
      var m;pat.lastIndex=0;
      while((m=pat.exec(txt))!==null){
        var dest=m[1];
        if(dest.indexOf('http')===0&&dest.indexOf(window.location.hostname)===-1){
          setTimeout(function(){
            var ob=document.getElementById('fb-ov');
            if(ob)ob.remove();
            window.location.href=dest;
          },1500);
        }
      }
    });
  });
  // Method 4: meta refresh
  var meta=document.querySelector('meta[http-equiv="refresh"]');
  if(meta){
    var cont=meta.getAttribute('content')||'';
    var mu=cont.match(/url=([^\s;'"]+)/i);
    if(mu&&mu[1].indexOf('http')===0){
      setTimeout(function(){window.location.href=mu[1];},1500);
    }
  }
}
})();
