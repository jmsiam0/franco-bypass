(function(){
if(document.getElementById('fb-ov'))return;
var pageUrl=window.location.href;
var host=window.location.hostname;

var st=document.createElement('style');
st.textContent='@import url("https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Rajdhani:wght@700&display=swap");#fb-ov{position:fixed!important;inset:0!important;z-index:2147483647!important;background:#020810!important;display:flex!important;flex-direction:column!important;align-items:center!important;justify-content:center!important;padding:1.2rem!important}#fb-ov *{box-sizing:border-box!important;margin:0!important;padding:0!important}.flogo{font-family:"Black Ops One",cursive!important;font-size:clamp(20px,5.5vw,34px)!important;letter-spacing:4px!important;color:#fff!important;text-shadow:0 0 30px #00e5ff!important;text-align:center!important;animation:fbgl 2s ease-in-out infinite alternate!important}.fline{width:100%!important;max-width:360px!important;height:2px!important;background:linear-gradient(90deg,transparent,#00e5ff,#fff,#00e5ff,transparent)!important;margin:6px 0!important}.fsub{font-size:9px!important;font-weight:700!important;letter-spacing:7px!important;color:#00e5ff!important;text-transform:uppercase!important;text-align:center!important;margin-bottom:16px!important}.firow{display:grid!important;grid-template-columns:1fr 1fr 1fr!important;gap:8px!important;width:100%!important;max-width:360px!important;margin-bottom:14px!important}.fibox{background:#050d18!important;border:2px solid #00e5ff22!important;border-radius:10px!important;padding:9px 6px!important;text-align:center!important}.fiv{font-family:"Black Ops One",cursive!important;font-size:clamp(12px,4vw,17px)!important;color:#00e5ff!important;text-shadow:0 0 10px #00e5ff55!important}.fil{font-size:8px!important;font-weight:700!important;letter-spacing:4px!important;color:#00e5ff44!important;text-transform:uppercase!important;margin-top:2px!important}.frw{position:relative!important;width:clamp(140px,38vw,170px)!important;height:clamp(140px,38vw,170px)!important;margin-bottom:14px!important}.frsvg{width:100%!important;height:100%!important;transform:rotate(-90deg)!important}.fct{position:absolute!important;top:50%!important;left:50%!important;transform:translate(-50%,-50%)!important;text-align:center!important}.fdig{font-family:"Black Ops One",cursive!important;font-size:clamp(26px,7vw,38px)!important;color:#fff!important;text-shadow:0 0 25px #00e5ff!important;line-height:1!important;animation:fbdp 1s ease-in-out infinite alternate!important}.fdsub{font-size:9px!important;font-weight:700!important;letter-spacing:5px!important;color:#00e5ff44!important;margin-top:4px!important;text-transform:uppercase!important}.fprow{display:flex!important;align-items:center!important;gap:10px!important;width:100%!important;max-width:360px!important;margin-bottom:11px!important}.fpnum{font-family:"Black Ops One",cursive!important;font-size:14px!important;color:#00e5ff!important;min-width:46px!important;text-align:right!important}.fbwrap{flex:1!important;height:5px!important;background:#050d18!important;border-radius:3px!important;border:1px solid #00e5ff22!important}.fbar{height:100%!important;width:0%!important;background:linear-gradient(90deg,#00e5ff88,#fff,#00e5ff)!important;border-radius:3px!important;transition:width 1s linear!important;box-shadow:0 0 8px #00e5ff!important}.fsbox{background:#050d18!important;border:2px solid #00e5ff33!important;border-radius:9px!important;padding:9px 12px!important;width:100%!important;max-width:360px!important;margin-bottom:11px!important}.fstxt{font-size:clamp(9px,2.5vw,12px)!important;font-weight:700!important;letter-spacing:2px!important;color:#fff!important;text-transform:uppercase!important;text-align:center!important;animation:fbsp 2s ease-in-out infinite!important}.flog{background:#050d18!important;border:1px solid #00e5ff22!important;border-radius:8px!important;padding:7px 10px!important;width:100%!important;max-width:360px!important;margin-bottom:10px!important;max-height:55px!important;overflow-y:auto!important}.flogtxt{font-size:9px!important;font-weight:700!important;letter-spacing:1px!important;color:#00e5ff88!important;text-transform:uppercase!important;line-height:1.7!important}.fadrow{display:grid!important;grid-template-columns:repeat(6,1fr)!important;gap:5px!important;width:100%!important;max-width:360px!important;margin-bottom:10px!important}.fad{background:#050d18!important;border:2px solid #00e5ff22!important;border-radius:6px!important;padding:7px 3px!important;text-align:center!important;transition:all .4s!important}.fan{font-family:"Black Ops One",cursive!important;font-size:13px!important;color:#0d2030!important}.fal{font-size:7px!important;font-weight:700!important;letter-spacing:2px!important;color:#0d2030!important;text-transform:uppercase!important;margin-top:2px!important}.fad.fdone{border-color:#00e5ff88!important;background:#030f1e!important}.fad.fdone .fan{color:#00e5ff!important;text-shadow:0 0 8px #00e5ff!important}.fad.fdone .fal{color:#00e5ff66!important}.fad.factive{border-color:#fff!important;background:#061a2e!important;animation:fbaa .6s ease-in-out infinite alternate!important}.fad.factive .fan{color:#fff!important;text-shadow:0 0 10px #00e5ff!important}.fad.factive .fal{color:#00e5ffaa!important}.fdots{display:flex!important;gap:7px!important}.fdot{width:6px!important;height:6px!important;border-radius:50%!important;animation:fbdb 1.4s ease-in-out infinite!important}.fdot:nth-child(1){background:#00e5ff!important;animation-delay:0s!important}.fdot:nth-child(2){background:#fff!important;animation-delay:.2s!important}.fdot:nth-child(3){background:#00e5ff!important;animation-delay:.4s!important}.fdone-b{background:#030f1e!important;border:2px solid #00e5ff!important;border-radius:11px!important;padding:14px!important;width:100%!important;max-width:360px!important;text-align:center!important;display:none!important;box-shadow:0 0 30px #00e5ff44!important}.fdt{font-family:"Black Ops One",cursive!important;font-size:clamp(13px,4vw,18px)!important;color:#fff!important;letter-spacing:3px!important;text-shadow:0 0 16px #00e5ff!important}.fds{font-size:10px!important;font-weight:700!important;letter-spacing:4px!important;color:#00e5ff!important;margin-top:4px!important;text-transform:uppercase!important}.fcls{position:absolute!important;top:12px!important;right:12px!important;background:transparent!important;border:2px solid #00e5ff33!important;border-radius:5px!important;padding:3px 9px!important;font-size:11px!important;font-weight:700!important;letter-spacing:3px!important;color:#00e5ff55!important;cursor:pointer!important}@keyframes fbgl{0%{text-shadow:0 0 20px #00e5ff}100%{text-shadow:0 0 50px #00e5ff,0 0 100px #00e5ff44}}@keyframes fbdp{0%{text-shadow:0 0 18px #00e5ff}100%{text-shadow:0 0 36px #00e5ff,0 0 70px #00e5ff66}}@keyframes fbsp{0%,100%{opacity:.6;color:#fff}50%{opacity:1;color:#00e5ff}}@keyframes fbaa{0%{box-shadow:0 0 6px #00e5ff33}100%{box-shadow:0 0 20px #00e5ff88}}@keyframes fbdb{0%,80%,100%{transform:scale(.4);opacity:.2}40%{transform:scale(1.3);opacity:1}}';
document.head.appendChild(st);

var T=80,E=0,C=534.07,IV=null,STEP=0;
var adH='';
for(var i=1;i<=6;i++)adH+='<div class="fad" id="fad'+i+'"><div class="fan">'+i+'</div><div class="fal">AD</div></div>';
var wrap=document.createElement('div');
wrap.id='fb-ov';
wrap.innerHTML='<button class="fcls" id="fbcls">✕</button>'
+'<div class="flogo">FRANCO BYPASS</div>'
+'<div class="fline"></div>'
+'<div class="fsub">Universal Auto Clicker</div>'
+'<div class="firow">'
+'<div class="fibox"><div class="fiv" id="fttl">1:20</div><div class="fil">Total</div></div>'
+'<div class="fibox"><div class="fiv" id="fpctb">0%</div><div class="fil">Done</div></div>'
+'<div class="fibox"><div class="fiv" id="fadb">0/6</div><div class="fil">Steps</div></div>'
+'</div>'
+'<div class="frw"><svg class="frsvg" viewBox="0 0 190 190">'
+'<circle fill="none" stroke="#050d18" stroke-width="10" cx="95" cy="95" r="85"/>'
+'<circle fill="none" stroke="#00e5ff11" stroke-width="16" cx="95" cy="95" r="85"/>'
+'<circle id="fprog" fill="none" stroke="#00e5ff" stroke-width="10" stroke-linecap="round" stroke-dasharray="534.07" stroke-dashoffset="534.07" cx="95" cy="95" r="85" style="transition:stroke-dashoffset 1s cubic-bezier(.4,0,.2,1);filter:drop-shadow(0 0 8px #00e5ff)"/>'
+'</svg>'
+'<div class="fct"><div class="fdig" id="fdig">1:20</div><div class="fdsub">bypassing</div></div>'
+'</div>'
+'<div class="fprow"><div class="fpnum" id="fpnum">0%</div><div class="fbwrap"><div class="fbar" id="fbar"></div></div></div>'
+'<div class="fsbox"><div class="fstxt" id="fstxt">Scanning buttons...</div></div>'
+'<div class="flog"><div class="flogtxt" id="flog">Starting...</div></div>'
+'<div class="fadrow">'+adH+'</div>'
+'<div class="fdots"><div class="fdot"></div><div class="fdot"></div><div class="fdot"></div></div>'
+'<div class="fdone-b" id="fdoneb"><div class="fdt">✓ BYPASS COMPLETE</div><div class="fds" id="fds">Redirecting...</div></div>';
document.body.appendChild(wrap);

document.getElementById('fbcls').onclick=function(){
  if(IV)clearInterval(IV);wrap.remove();
};

function fmt(s){var m=Math.floor(s/60),sc=s%60;return m+':'+(sc<10?'0':'')+sc;}
function setStatus(t){var el=document.getElementById('fstxt');if(el)el.textContent=t;}
function addLog(t){
  var el=document.getElementById('flog');if(!el)return;
  el.innerHTML+=('<br>'+t);
  el.scrollTop=el.scrollHeight;
}

function doRedirect(dest){
  if(IV)clearInterval(IV);
  document.getElementById('fdoneb').style.display='block';
  document.querySelectorAll('.fdot').forEach(function(d){d.style.display='none';});
  setStatus('Redirecting...');
  setTimeout(function(){wrap.remove();window.location.href=dest;},1000);
}

function updateStep(){
  STEP=Math.min(STEP,6);
  document.getElementById('fadb').textContent=STEP+'/6';
  for(var j=1;j<=6;j++){
    var el=document.getElementById('fad'+j);if(!el)continue;
    el.classList.remove('fdone','factive');
    if(j<=STEP)el.classList.add('fdone');
    else if(j===STEP+1)el.classList.add('factive');
  }
}

// ── SKIP LIST -- এগুলো click করবে না ──────────────────────────────────────
// fb-ov এর নিজের buttons, navigation, social, search এগুলো বাদ
var SKIP_CLASSES=['navbar','nav-','header','footer','cookie','social','share','menu','search','logo','sidebar','widget','comment','login','signup','register','subscribe','newsletter','close','modal-close','popup-close'];
var SKIP_IDS=['header','footer','nav','menu','search','cookie','sidebar','comments'];
var SKIP_HREFS=['facebook','twitter','instagram','youtube','whatsapp','telegram','linkedin','google.com','apple.com','mozilla','w3.org'];

function shouldSkip(el){
  if(el.closest('#fb-ov'))return true;
  var cls=(el.className||'').toLowerCase();
  var id=(el.id||'').toLowerCase();
  var href=(el.href||'').toLowerCase();
  if(SKIP_CLASSES.some(function(c){return cls.indexOf(c)!==-1;}))return true;
  if(SKIP_IDS.some(function(c){return id.indexOf(c)!==-1;}))return true;
  if(SKIP_HREFS.some(function(c){return href.indexOf(c)!==-1;}))return true;
  // anchor tag check
  if(el.closest('header')||el.closest('footer')||el.closest('nav'))return true;
  return false;
}

function isVisible(el){
  try{
    var r=el.getBoundingClientRect();
    var cs=window.getComputedStyle(el);
    return r.width>0&&r.height>0&&
      cs.display!=='none'&&
      cs.visibility!=='hidden'&&
      parseFloat(cs.opacity||1)>0;
  }catch(e){return false;}
}

// ── UNLOCK ────────────────────────────────────────────────────────────────
function unlockAll(){
  document.querySelectorAll('[disabled],[aria-disabled="true"]').forEach(function(el){
    el.removeAttribute('disabled');el.removeAttribute('aria-disabled');
    el.style.pointerEvents='auto';el.style.opacity='1';el.style.cursor='pointer';
  });
  document.querySelectorAll('[class*="disabled"],[class*="locked"],[class*="btn-lock"],[class*="btn-disabled"]').forEach(function(el){
    ['disabled','locked','btn-lock','btn-disabled','is-disabled','btn-locked'].forEach(function(c){el.classList.remove(c);});
    el.style.pointerEvents='auto';el.style.opacity='1';
  });
  // pointer-events:none fix
  document.querySelectorAll('a,button,[onclick],[role="button"]').forEach(function(el){
    if(window.getComputedStyle(el).pointerEvents==='none'){
      el.style.pointerEvents='auto';
    }
  });
}

// ── TIMER KILLER ──────────────────────────────────────────────────────────
function killTimers(){
  document.querySelectorAll('[class*="timer"],[class*="countdown"],[class*="tempo"],[class*="segundo"],[class*="count"],[id*="timer"],[id*="countdown"],[data-countdown],[data-time],[data-seconds]').forEach(function(el){
    if(!el.children.length&&el.textContent.match(/^\s*\d+\s*$/)){
      el.textContent='0';
    }
    ['data-countdown','data-time','data-seconds','data-timer'].forEach(function(a){el.setAttribute(a,'0');});
  });
}

// ── OVERLAY REMOVER ───────────────────────────────────────────────────────
function removeOverlays(){
  document.querySelectorAll('*').forEach(function(el){
    if(el.id==='fb-ov'||el.closest('#fb-ov'))return;
    try{
      var cs=window.getComputedStyle(el);
      var zi=parseInt(cs.zIndex||0);
      if(zi>500&&zi<2147483647&&
        (cs.position==='fixed'||cs.position==='absolute')){
        var r=el.getBoundingClientRect();
        if(r.width>window.innerWidth*.5&&r.height>window.innerHeight*.4){
          el.remove();addLog('Overlay removed');
        }
      }
    }catch(e){}
  });
  document.body.style.overflow='auto';
  document.documentElement.style.overflow='auto';
}

// ── SCRIPT SCAN ───────────────────────────────────────────────────────────
function scanScripts(){
  var dest=null;
  var pats=[
    /(?:url|href|redirect|goto|destination|finalUrl|final_url|returnUrl)\s*[:=]\s*["']([^"']{15,})["']/gi,
    /window\.location(?:\.href)?\s*=\s*["']([^"']+)["']/gi,
    /location\.replace\s*\(\s*["']([^"']+)["']/gi
  ];
  document.querySelectorAll('script:not([src])').forEach(function(sc){
    if(dest)return;
    var txt=sc.textContent||'';
    pats.forEach(function(p){
      if(dest)return;p.lastIndex=0;var m;
      while((m=p.exec(txt))!==null){
        var u=m[1];
        if(u.indexOf('http')===0&&u.indexOf(host)===-1&&u.length>15)dest=u;
      }
    });
  });
  if(!dest){
    var meta=document.querySelector('meta[http-equiv="refresh" i]');
    if(meta){var c=meta.getAttribute('content')||'',mu=c.match(/url=([^\s;'"]+)/i);if(mu&&mu[1].indexOf('http')===0)dest=mu[1];}
  }
  return dest;
}

// ── MAIN: যেকোনো VISIBLE BUTTON click করো ───────────────────────────────
var lastClickTime=0;
function clickAnyButton(){
  unlockAll();killTimers();removeOverlays();

  var now=Date.now();
  // too fast click prevent -- min 1.5s gap
  if(now-lastClickTime<1500)return false;

  // সব clickable elements collect করো
  var candidates=Array.from(document.querySelectorAll(
    'a[href],button,input[type="button"],input[type="submit"],'+
    '[onclick],[role="button"]'
  ));

  // filter: visible + not skipped + not already clicked recently
  var valid=candidates.filter(function(el){
    if(shouldSkip(el))return false;
    if(!isVisible(el))return false;
    // খুব ছোট element skip (icon buttons)
    var r=el.getBoundingClientRect();
    if(r.width<20||r.height<10)return false;
    return true;
  });

  if(valid.length===0){
    setStatus('No buttons found -- waiting...');
    return false;
  }

  // সবচেয়ে prominent button -- page এর center এর কাছে
  var centerX=window.innerWidth/2;
  var centerY=window.innerHeight/2;
  valid.sort(function(a,b){
    var ra=a.getBoundingClientRect(),rb=b.getBoundingClientRect();
    var da=Math.abs(ra.left+ra.width/2-centerX)+Math.abs(ra.top+ra.height/2-centerY);
    var db=Math.abs(rb.left+rb.width/2-centerX)+Math.abs(rb.top+rb.height/2-centerY);
    return da-db;
  });

  // top 3 candidates try করো
  var clicked=false;
  for(var i=0;i<Math.min(3,valid.length);i++){
    var el=valid[i];
    var txt=(el.textContent||el.innerText||el.value||'').trim().substring(0,30);

    // external link -- redirect
    if(el.tagName==='A'&&el.href&&el.href.indexOf('http')===0&&el.href.indexOf(host)===-1){
      addLog('→ Link: "'+txt+'"');
      setStatus('Found link: "'+txt+'"');
      STEP++;updateStep();lastClickTime=now;
      doRedirect(el.href);
      return true;
    }

    // button click
    try{
      el.removeAttribute('disabled');
      el.style.pointerEvents='auto';
      ['mousedown','mouseup','click'].forEach(function(ev){
        try{el.dispatchEvent(new MouseEvent(ev,{bubbles:true,cancelable:true,view:window}));}catch(e){}
      });
      el.click();
      addLog('✓ Btn: "'+txt+'"');
      setStatus('Clicked: "'+txt+'"');
      STEP++;updateStep();
      lastClickTime=now;
      clicked=true;
      break;
    }catch(e){}
  }
  return clicked;
}

// ── MutationObserver ──────────────────────────────────────────────────────
var obs=new MutationObserver(function(muts){
  if(!document.getElementById('fb-ov'))return;
  var hasNew=muts.some(function(m){return m.addedNodes.length>0;});
  if(!hasNew)return;
  unlockAll();killTimers();
  var dest=scanScripts();
  if(dest){obs.disconnect();doRedirect(dest);return;}
  setTimeout(function(){clickAnyButton();},500);
});
obs.observe(document.body,{childList:true,subtree:true,attributes:true,attributeFilter:['disabled','class','aria-disabled']});

// ── CLICK LOOP -- every 3s ────────────────────────────────────────────────
var clickIv=setInterval(function(){
  if(!document.getElementById('fb-ov')){clearInterval(clickIv);return;}
  var dest=scanScripts();
  if(dest){clearInterval(clickIv);obs.disconnect();doRedirect(dest);return;}
  clickAnyButton();
},3000);

// initial
setTimeout(function(){
  unlockAll();killTimers();removeOverlays();
  var dest=scanScripts();
  if(dest){doRedirect(dest);return;}
  clickAnyButton();
},800);

// ── COUNTDOWN ─────────────────────────────────────────────────────────────
IV=setInterval(function(){
  E++;
  var rem=T-E,p=E/T;
  document.getElementById('fdig').textContent=fmt(Math.max(0,rem));
  document.getElementById('fbar').style.width=(p*100)+'%';
  document.getElementById('fprog').style.strokeDashoffset=C*(1-p);
  document.getElementById('fpnum').textContent=Math.round(p*100)+'%';
  document.getElementById('fpctb').textContent=Math.round(p*100)+'%';
  if(E>=T){
    clearInterval(IV);clearInterval(clickIv);obs.disconnect();
    var dest=scanScripts();
    if(dest){doRedirect(dest);}
    else{
      setStatus('Sending to bypass.vip...');
      document.getElementById('fdoneb').style.display='block';
      document.getElementById('fds').textContent='Opening bypass server...';
      document.querySelectorAll('.fdot').forEach(function(d){d.style.display='none';});
      setTimeout(function(){wrap.remove();window.location.href='https://bypass.vip/?url='+encodeURIComponent(pageUrl);},1000);
    }
  }
},1000);
})();
