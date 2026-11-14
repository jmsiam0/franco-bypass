(function(){
'use strict';
if(window.FRANCO_BOOKMARK_LOAD!==true)return;
if(document.getElementById('fb-ov'))return;

var T=80,E=0,C=534.07,IV=null,CIV=null;
var HOST=window.location.hostname;

// ── INJECT STYLE ──
var st=document.createElement('style');
st.id='fb-style';
st.textContent=[
'@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rajdhani:wght@700&display=swap");',
'#fb-ov{position:fixed!important;inset:0!important;z-index:2147483647!important;',
'background:#020810!important;display:flex!important;flex-direction:column!important;',
'align-items:center!important;justify-content:center!important;padding:1.2rem!important;}',
'#fb-ov *{box-sizing:border-box!important;margin:0!important;padding:0!important;font-family:Rajdhani,sans-serif!important;}',
'.fb-logo{font-family:"Black Ops One",cursive!important;font-size:clamp(20px,5.5vw,36px)!important;',
'letter-spacing:4px!important;color:#fff!important;text-shadow:0 0 30px #00e5ff!important;',
'text-align:center!important;animation:fbgl 2s ease-in-out infinite alternate!important;}',
'.fb-line{width:100%!important;max-width:360px!important;height:2px!important;',
'background:linear-gradient(90deg,transparent,#00e5ff,#fff,#00e5ff,transparent)!important;margin:6px 0!important;}',
'.fb-sub{font-size:9px!important;font-weight:700!important;letter-spacing:7px!important;',
'color:#00e5ff!important;text-transform:uppercase!important;text-align:center!important;margin-bottom:16px!important;}',
'.fb-irow{display:grid!important;grid-template-columns:1fr 1fr 1fr!important;gap:8px!important;',
'width:100%!important;max-width:360px!important;margin-bottom:14px!important;}',
'.fb-ibox{background:#050d18!important;border:2px solid #00e5ff22!important;border-radius:10px!important;',
'padding:9px 6px!important;text-align:center!important;}',
'.fb-ival{font-family:"Black Ops One",cursive!important;font-size:clamp(12px,4vw,17px)!important;',
'color:#00e5ff!important;text-shadow:0 0 10px #00e5ff55!important;}',
'.fb-ilbl{font-size:8px!important;font-weight:700!important;letter-spacing:4px!important;',
'color:#00e5ff44!important;text-transform:uppercase!important;margin-top:2px!important;}',
'.fb-ring-w{position:relative!important;width:clamp(140px,38vw,170px)!important;',
'height:clamp(140px,38vw,170px)!important;margin-bottom:14px!important;}',
'.fb-ring{width:100%!important;height:100%!important;transform:rotate(-90deg)!important;}',
'.fb-center{position:absolute!important;top:50%!important;left:50%!important;',
'transform:translate(-50%,-50%)!important;text-align:center!important;}',
'.fb-dig{font-family:"Black Ops One",cursive!important;font-size:clamp(26px,7vw,38px)!important;',
'color:#fff!important;text-shadow:0 0 25px #00e5ff!important;line-height:1!important;',
'animation:fbdp 1s ease-in-out infinite alternate!important;}',
'.fb-dsub{font-size:9px!important;font-weight:700!important;letter-spacing:5px!important;',
'color:#00e5ff44!important;margin-top:4px!important;text-transform:uppercase!important;}',
'.fb-prow{display:flex!important;align-items:center!important;gap:10px!important;',
'width:100%!important;max-width:360px!important;margin-bottom:11px!important;}',
'.fb-pnum{font-family:"Black Ops One",cursive!important;font-size:14px!important;',
'color:#00e5ff!important;min-width:46px!important;text-align:right!important;}',
'.fb-bwrap{flex:1!important;height:5px!important;background:#050d18!important;',
'border-radius:3px!important;border:1px solid #00e5ff22!important;overflow:visible!important;}',
'.fb-bar{height:100%!important;width:0%!important;',
'background:linear-gradient(90deg,#00e5ff88,#fff,#00e5ff)!important;',
'border-radius:3px!important;transition:width 1s linear!important;box-shadow:0 0 8px #00e5ff!important;}',
'.fb-sbox{background:#050d18!important;border:2px solid #00e5ff33!important;',
'border-radius:9px!important;padding:9px 12px!important;width:100%!important;',
'max-width:360px!important;margin-bottom:11px!important;}',
'.fb-stxt{font-size:clamp(9px,2.5vw,12px)!important;font-weight:700!important;',
'letter-spacing:2px!important;color:#fff!important;text-transform:uppercase!important;',
'text-align:center!important;animation:fbsp 2s ease-in-out infinite!important;}',
'.fb-adrow{display:grid!important;grid-template-columns:repeat(6,1fr)!important;',
'gap:5px!important;width:100%!important;max-width:360px!important;margin-bottom:12px!important;}',
'.fb-ad{background:#050d18!important;border:2px solid #00e5ff22!important;',
'border-radius:6px!important;padding:7px 3px!important;text-align:center!important;transition:all .4s!important;}',
'.fb-an{font-family:"Black Ops One",cursive!important;font-size:13px!important;color:#0d2030!important;}',
'.fb-al{font-size:7px!important;font-weight:700!important;letter-spacing:2px!important;',
'color:#0d2030!important;text-transform:uppercase!important;margin-top:2px!important;}',
'.fb-ad.done{border-color:#00e5ff88!important;background:#030f1e!important;}',
'.fb-ad.done .fb-an{color:#00e5ff!important;text-shadow:0 0 8px #00e5ff!important;}',
'.fb-ad.done .fb-al{color:#00e5ff66!important;}',
'.fb-ad.active{border-color:#fff!important;background:#061a2e!important;',
'animation:fbaa .6s ease-in-out infinite alternate!important;}',
'.fb-ad.active .fb-an{color:#fff!important;text-shadow:0 0 10px #00e5ff!important;}',
'.fb-ad.active .fb-al{color:#00e5ffaa!important;}',
'.fb-dots{display:flex!important;gap:7px!important;}',
'.fb-dot{width:6px!important;height:6px!important;border-radius:50%!important;',
'animation:fbdb 1.4s ease-in-out infinite!important;}',
'.fb-dot:nth-child(1){background:#00e5ff!important;animation-delay:0s!important;}',
'.fb-dot:nth-child(2){background:#fff!important;animation-delay:.2s!important;}',
'.fb-dot:nth-child(3){background:#00e5ff!important;animation-delay:.4s!important;}',
'.fb-done{background:#030f1e!important;border:2px solid #00e5ff!important;',
'border-radius:11px!important;padding:14px!important;width:100%!important;',
'max-width:360px!important;text-align:center!important;display:none!important;',
'box-shadow:0 0 30px #00e5ff44!important;}',
'.fb-dt{font-family:"Black Ops One",cursive!important;font-size:clamp(13px,4vw,18px)!important;',
'color:#fff!important;letter-spacing:3px!important;text-shadow:0 0 16px #00e5ff!important;}',
'.fb-ds{font-size:10px!important;font-weight:700!important;letter-spacing:4px!important;',
'color:#00e5ff!important;margin-top:4px!important;text-transform:uppercase!important;}',
'.fb-cls{position:absolute!important;top:12px!important;right:12px!important;',
'background:transparent!important;border:2px solid #00e5ff33!important;',
'border-radius:5px!important;padding:3px 9px!important;font-size:11px!important;',
'font-weight:700!important;letter-spacing:3px!important;color:#00e5ff55!important;cursor:pointer!important;}',
'@keyframes fbgl{0%{text-shadow:0 0 20px #00e5ff}100%{text-shadow:0 0 50px #00e5ff,0 0 100px #00e5ff44}}',
'@keyframes fbdp{0%{text-shadow:0 0 18px #00e5ff}100%{text-shadow:0 0 36px #00e5ff,0 0 70px #00e5ff66}}',
'@keyframes fbsp{0%,100%{opacity:.6;color:#fff}50%{opacity:1;color:#00e5ff}}',
'@keyframes fbaa{0%{box-shadow:0 0 6px #00e5ff33}100%{box-shadow:0 0 20px #00e5ff88}}',
'@keyframes fbdb{0%,80%,100%{transform:scale(.4);opacity:.2}40%{transform:scale(1.3);opacity:1}}'
].join('');
document.head.appendChild(st);

// ── BUILD UI ──
var adH='';
for(var i=1;i<=6;i++){
  adH+='<div class="fb-ad" id="fad'+i+'"><div class="fb-an">'+i+'</div><div class="fb-al">AD</div></div>';
}
var wrap=document.createElement('div');
wrap.id='fb-ov';
wrap.innerHTML=[
  '<button class="fb-cls" id="fb-cls-btn">✕</button>',
  '<div class="fb-logo">FRANCO BYPASS</div>',
  '<div class="fb-line"></div>',
  '<div class="fb-sub">Checkpoint Bypass Active</div>',
  '<div class="fb-irow">',
  '<div class="fb-ibox"><div class="fb-ival" id="fb-ttl">1:20</div><div class="fb-ilbl">Total</div></div>',
  '<div class="fb-ibox"><div class="fb-ival" id="fb-pctb">0%</div><div class="fb-ilbl">Progress</div></div>',
  '<div class="fb-ibox"><div class="fb-ival" id="fb-adb">0/6</div><div class="fb-ilbl">Steps</div></div>',
  '</div>',
  '<div class="fb-ring-w">',
  '<svg class="fb-ring" viewBox="0 0 190 190">',
  '<circle fill="none" stroke="#050d18" stroke-width="10" cx="95" cy="95" r="85"/>',
  '<circle fill="none" stroke="#00e5ff11" stroke-width="16" cx="95" cy="95" r="85"/>',
  '<circle id="fb-prog" fill="none" stroke="#00e5ff" stroke-width="10" stroke-linecap="round"',
  ' stroke-dasharray="534.07" stroke-dashoffset="534.07" cx="95" cy="95" r="85"',
  ' style="transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);filter:drop-shadow(0 0 8px #00e5ff)"/>',
  '</svg>',
  '<div class="fb-center">',
  '<div class="fb-dig" id="fb-dig">1:20</div>',
  '<div class="fb-dsub">bypassing</div>',
  '</div>',
  '</div>',
  '<div class="fb-prow"><div class="fb-pnum" id="fb-pnum">0%</div>',
  '<div class="fb-bwrap"><div class="fb-bar" id="fb-bar"></div></div></div>',
  '<div class="fb-sbox"><div class="fb-stxt" id="fb-stxt">Initializing bypass...</div></div>',
  '<div class="fb-adrow">'+adH+'</div>',
  '<div class="fb-dots"><div class="fb-dot"></div><div class="fb-dot"></div><div class="fb-dot"></div></div>',
  '<div class="fb-done" id="fb-done"><div class="fb-dt">✓ BYPASS COMPLETE</div><div class="fb-ds" id="fb-ds">Redirecting...</div></div>'
].join('');
document.body.appendChild(wrap);

document.getElementById('fb-cls-btn').onclick=function(){
  cleanup();
  wrap.remove();
};

function fmt(s){var m=Math.floor(s/60),sc=s%60;return m+':'+(sc<10?'0':'')+sc;}
function setStatus(msg){var el=document.getElementById('fb-stxt');if(el)el.textContent=msg;}
function cleanup(){
  if(IV)clearInterval(IV);
  if(CIV)clearInterval(CIV);
  if(window._fbObs)try{window._fbObs.disconnect();}catch(e){}
}

// ── BYPASS LOGIC ──

var KW_PORT=[
  'continuar','próximo','proximo','pular','confirmar',
  'avançar','avancar','ir para','clique aqui',
  'obter link','obter chave','acessar','verificar'
];
var KW_ENG=[
  'continue','next','skip','proceed','get link',
  'get key','access','verify','claim','download',
  'click here','go','unlock'
];
var ALL_KW=KW_PORT.concat(KW_ENG);

function killTimers(){
  // override setTimeout/setInterval temporarily to catch countdown resets
  document.querySelectorAll(
    '[class*="timer"],[class*="countdown"],[class*="tempo"],'+
    '[id*="timer"],[id*="countdown"],[class*="segundo"],'+
    '[class*="count"],[data-time],[data-countdown],[data-seconds]'
  ).forEach(function(el){
    if(!el.children.length){el.textContent='0';}
    ['data-time','data-countdown','data-seconds','data-timer'].forEach(function(a){
      el.setAttribute(a,'0');
    });
  });
}

function removeBlockers(){
  // fixed/absolute overlays that block interaction (not the main content)
  document.querySelectorAll('*').forEach(function(el){
    if(el.id==='fb-ov')return;
    var cs=getComputedStyle(el);
    if((cs.position==='fixed'||cs.position==='absolute')&&
       parseInt(cs.zIndex)>100&&el.tagName!=='BUTTON'&&el.tagName!=='A'){
      var r=el.getBoundingClientRect();
      if(r.width>window.innerWidth*0.4&&r.height>window.innerHeight*0.3){
        el.style.display='none';
      }
    }
  });
  document.body.style.overflow='auto';
  document.documentElement.style.overflow='auto';
}

function enableBtns(){
  document.querySelectorAll('[disabled],[aria-disabled="true"]').forEach(function(el){
    el.removeAttribute('disabled');
    el.removeAttribute('aria-disabled');
    el.style.pointerEvents='auto';
    el.style.opacity='1';
  });
  document.querySelectorAll('[class*="disabled"],[class*="locked"],[class*="btn-lock"]').forEach(function(el){
    ['disabled','locked','btn-lock','btn-disabled'].forEach(function(c){el.classList.remove(c);});
    el.style.pointerEvents='auto';
    el.style.opacity='1';
  });
}

var STEP=0;
function tryClick(){
  var els=Array.from(document.querySelectorAll('a,button,[onclick],[role="button"]'));
  for(var i=0;i<els.length;i++){
    var el=els[i];
    if(!el.offsetParent&&el.tagName!=='A')continue;// hidden skip
    var txt=(el.textContent||el.innerText||'').toLowerCase().trim();
    if(!ALL_KW.some(function(k){return txt.indexOf(k)!==-1;}))continue;
    // external link
    if(el.href&&el.href.indexOf('http')===0&&el.href.indexOf(HOST)===-1){
      STEP++;
      setStatus('Step '+STEP+' -- following checkpoint link...');
      var ov=document.getElementById('fb-ov');
      setTimeout(function(href){
        cleanup();
        if(ov)ov.remove();
        window.location.href=href;
      }.bind(null,el.href),600);
      return true;
    }
    // same-site click
    try{
      el.removeAttribute('disabled');
      el.style.pointerEvents='auto';
      el.click();
      STEP++;
      setStatus('Step '+STEP+' clicked...');
      return true;
    }catch(e){}
  }
  return false;
}

function scanScripts(){
  var dest=null;
  var pats=[
    /(?:url|href|redirect|goto|destination|returnUrl|finalUrl|target_url)\s*[:=]\s*["']([^"']{12,})["']/gi,
    /window\.location(?:\.href)?\s*=\s*["']([^"']+)["']/gi,
    /location\.replace\s*\(\s*["']([^"']+)["']/gi,
  ];
  document.querySelectorAll('script:not([src])').forEach(function(sc){
    if(dest)return;
    var txt=sc.textContent||'';
    pats.forEach(function(p){
      if(dest)return;
      p.lastIndex=0;var m;
      while((m=p.exec(txt))!==null){
        var u=m[1];
        if(u.indexOf('http')===0&&u.indexOf(HOST)===-1&&u.length>12){dest=u;}
      }
    });
  });
  if(!dest){
    var meta=document.querySelector('meta[http-equiv="refresh" i]');
    if(meta){var c=meta.content||'',mu=c.match(/url=([^\s;'"]+)/i);if(mu&&mu[1].indexOf('http')===0)dest=mu[1];}
  }
  return dest;
}

function doRedirect(dest){
  cleanup();
  setStatus('Redirecting to key...');
  document.getElementById('fb-done').style.display='block';
  document.querySelectorAll('.fb-dot').forEach(function(d){d.style.display='none';});
  var ov=document.getElementById('fb-ov');
  setTimeout(function(){
    if(ov)ov.remove();
    window.location.href=dest;
  },1200);
}

// MutationObserver
var obs=new MutationObserver(function(){
  killTimers();enableBtns();removeBlockers();
});
obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['disabled','style','class']});
window._fbObs=obs;

// initial sweep
setTimeout(function(){
  killTimers();enableBtns();removeBlockers();
  tryClick();
},800);

// click loop -- every 4s
var clickCount=0;
CIV=setInterval(function(){
  clickCount++;
  killTimers();enableBtns();removeBlockers();
  var dest=scanScripts();
  if(dest){doRedirect(dest);clearInterval(CIV);return;}
  if(clickCount%4===0)tryClick();
},1000);

// ── COUNTDOWN ──
var MSGS=[
  'Initializing bypass...','Scanning page elements...',
  'Removing blockers...','Bypassing step 1...',
  'Bypassing step 2...','Bypassing step 3...',
  'Bypassing step 4...','Bypassing step 5...',
  'Bypassing step 6...','Waiting for server...',
  'Almost complete...'
];
IV=setInterval(function(){
  E++;
  var rem=T-E,p=E/T;
  document.getElementById('fb-dig').textContent=fmt(Math.max(0,rem));
  document.getElementById('fb-bar').style.width=(p*100)+'%';
  document.getElementById('fb-prog').style.strokeDashoffset=C*(1-p);
  document.getElementById('fb-pnum').textContent=Math.round(p*100)+'%';
  document.getElementById('fb-pctb').textContent=Math.round(p*100)+'%';
  var ad=Math.min(6,Math.floor(p*6));
  document.getElementById('fb-adb').textContent=ad+'/6';
  for(var j=1;j<=6;j++){
    var el=document.getElementById('fad'+j);if(!el)continue;
    el.classList.remove('done','active');
    if(j<=ad)el.classList.add('done');
    else if(j===ad+1)el.classList.add('active');
  }
  document.getElementById('fb-stxt').textContent=MSGS[Math.min(Math.floor(p*MSGS.length),MSGS.length-1)];
  if(E>=T){
    clearInterval(IV);clearInterval(CIV);obs.disconnect();
    var dest=scanScripts();
    if(dest){doRedirect(dest);}
    else{
      tryClick();
      setStatus('Bypass complete -- check page');
      document.getElementById('fb-done').style.display='block';
      document.getElementById('fb-ds').textContent='Check page for key';
      document.querySelectorAll('.fb-dot').forEach(function(d){d.style.display='none';});
      setTimeout(function(){
        var ov=document.getElementById('fb-ov');if(ov)ov.remove();
      },3000);
    }
  }
},1000);
})();
