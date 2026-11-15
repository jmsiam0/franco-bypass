
(function(){
'use strict';

if(window.FRANCO_BOOKMARK_LOAD!==true)return;
if(document.getElementById('fb-ov'))return;

var T=80,E=0,IV=null,OB=null,COUNT=0;
var pageUrl=location.href;

var style=document.createElement('style');
style.id='fb-style';
style.textContent=`
#fb-ov{
position:fixed!important;inset:0!important;
z-index:2147483647!important;
background:#020810!important;color:white!important;
display:flex!important;flex-direction:column!important;
align-items:center!important;justify-content:center!important;
padding:20px!important;font-family:Arial,sans-serif!important
}
#fb-ov *{box-sizing:border-box!important}
.flogo{font-size:30px;font-weight:900;letter-spacing:4px;
color:#00e5ff;text-shadow:0 0 20px #00e5ff}
.fline{height:2px;width:100%;max-width:340px;
background:linear-gradient(90deg,transparent,#00e5ff,transparent);
margin:12px}
.fsub{font-size:10px;letter-spacing:5px;color:#00e5ff;margin-bottom:20px}
.firow{display:grid;grid-template-columns:repeat(3,1fr);
gap:8px;width:100%;max-width:340px}
.fibox{background:#071522;border:1px solid #00e5ff44;
padding:12px 5px;text-align:center;border-radius:8px}
.fiv{font-size:19px;font-weight:900;color:#00e5ff}
.fil{font-size:9px;color:#7c9eaa;margin-top:5px}
.frw{width:165px;height:165px;position:relative;margin:20px}
.frsvg{width:100%;height:100%;transform:rotate(-90deg)}
.fct{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center}
.fdig{font-size:36px;font-weight:900;color:white}
.fdsub{font-size:10px;color:#00e5ff;letter-spacing:3px}
.fprow{width:100%;max-width:340px;height:5px;background:#102333}
.fbar{height:100%;width:0;background:#00e5ff;transition:width 1s}
.fsbox{margin:18px;width:100%;max-width:340px;padding:12px;
background:#071522;border:1px solid #00e5ff44;text-align:center;
font-size:11px;color:#00e5ff}
.flog{width:100%;max-width:340px;max-height:70px;overflow:auto;
font-size:10px;color:#80cddd;line-height:1.7}
.fcls{position:absolute;top:15px;right:15px;
background:transparent;color:#00e5ff;border:1px solid #00e5ff;
padding:6px 12px}
.fdone{display:none;border:1px solid #00e5ff;
padding:15px;margin-top:20px;text-align:center;color:#00e5ff}
`;

document.head.appendChild(style);

var wrap=document.createElement('div');
wrap.id='fb-ov';

wrap.innerHTML=`
<button class="fcls" id="fbcls">CLOSE</button>
<div class="flogo">FRANCO BYPASS</div>
<div class="fline"></div>
<div class="fsub">UNIVERSAL AD SCANNER</div>

<div class="firow">
<div class="fibox"><div class="fiv" id="fttl">1:20</div><div class="fil">TOTAL</div></div>
<div class="fibox"><div class="fiv" id="fpct">0%</div><div class="fil">SCANNED</div></div>
<div class="fibox"><div class="fiv" id="fcount">0</div><div class="fil">AD ELEMENTS</div></div>
</div>

<div class="frw">
<svg class="frsvg" viewBox="0 0 190 190">
<circle cx="95" cy="95" r="85" fill="none" stroke="#102333" stroke-width="10"/>
<circle id="fprog" cx="95" cy="95" r="85" fill="none"
stroke="#00e5ff" stroke-width="10" stroke-dasharray="534.07"
stroke-dashoffset="534.07" stroke-linecap="round"/>
</svg>
<div class="fct">
<div class="fdig" id="fdig">1:20</div>
<div class="fdsub">SCANNING</div>
</div>
</div>

<div class="fprow"><div class="fbar" id="fbar"></div></div>
<div class="fsbox" id="fstxt">Initializing scanner...</div>
<div class="flog" id="flog">FRANCO SYSTEM STARTED</div>
<div class="fdone" id="fdone">✓ SCAN COMPLETE</div>
`;

document.body.appendChild(wrap);

function $(id){
return document.getElementById(id);
}

function log(msg){
var el=$('flog');
if(!el)return;
el.innerHTML+= '<br>'+String(msg).replace(/[<>&"]/g,function(c){
return {'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[c];
});
el.scrollTop=el.scrollHeight;
}

function scanAds(){
var selectors=[
'ins.adsbygoogle',
'[id^="google_ads"]',
'[id*="ad-container"]',
'[class*="ad-slot"]',
'[class*="advertisement"]',
'[class*="adsbygoogle"]',
'[data-ad-client]',
'iframe[src*="doubleclick.net"]',
'iframe[src*="googlesyndication.com"]',
'iframe[src*="googleadservices.com"]'
];

var found=0;

selectors.forEach(function(selector){
try{
document.querySelectorAll(selector).forEach(function(el){
if(wrap.contains(el))return;
if(el.dataset.francoProcessed)return;

el.dataset.francoProcessed='1';
el.style.setProperty('display','none','important');
found++;
});
}catch(e){}
});

if(found){
COUNT+=found;
$('fcount').textContent=COUNT;
$('fstxt').textContent='Advertisement elements detected';
log('AD elements hidden: '+found);
}

return found;
}

function finish(){
if(IV)clearInterval(IV);
if(OB)OB.disconnect();

$('fstxt').textContent='Scan complete';
$('fdone').style.display='block';
log('Scanner finished');
}

function close(){
if(IV)clearInterval(IV);
if(OB)OB.disconnect();
wrap.remove();
style.remove();
}

$('fbcls').onclick=close;

scanAds();

if(window.MutationObserver){
OB=new MutationObserver(function(){
scanAds();
});

OB.observe(document.body,{
childList:true,
subtree:true
});
}

IV=setInterval(function(){
E++;

var rem=Math.max(0,T-E);
var p=E/T;

var time=Math.floor(rem/60)+':'+
String(rem%60).padStart(2,'0');

$('fdig').textContent=time;
$('fttl').textContent=time;
$('fpct').textContent=Math.round(p*100)+'%';
$('fbar').style.width=(p*100)+'%';
$('fprog').style.strokeDashoffset=534.07*(1-p);

if(E>=T)finish();

},1000);

})();
