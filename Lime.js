// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: light-brown; icon-glyph: magic;
const HTML = String.raw`<!DOCTYPE html><html lang="de"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="color-scheme" content="dark"><title>LimeTool ULTRA</title>
<style>
:root{--bg:#070a06;--pnl:rgba(22,29,19,.82);--ln:rgba(166,255,77,.14);--fg:#e9f3e3;
--dim:#8fa183;--a:#a6ff4d;--a2:#5fd11a;--er:#ff5f52;--ok:#3ddc84;--cy:#5ec8ff}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;min-height:100%}
body{background:radial-gradient(1200px 600px at 50% -15%,#1d2c14 0%,var(--bg) 60%) fixed;
color:var(--fg);font:15px/1.45 -apple-system,BlinkMacSystemFont,sans-serif;
padding:14px 12px calc(20px + env(safe-area-inset-bottom));max-width:540px;margin:0 auto}
.top{display:flex;align-items:center;gap:9px;margin-bottom:14px}
.logo{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;
background:linear-gradient(150deg,var(--a),var(--a2));color:#08120a;font-weight:900;font-size:15px;
box-shadow:0 0 22px rgba(166,255,77,.28)}
h1{font-size:15px;margin:0;letter-spacing:.4px;flex:1}
h1 small{display:block;font-size:9.5px;letter-spacing:2.4px;color:var(--a);font-weight:800;opacity:.8}
.pill{font-size:10px;font-weight:800;letter-spacing:.8px;text-transform:uppercase;
padding:6px 10px;border-radius:99px;border:1px solid var(--ln);color:var(--dim);white-space:nowrap}
.pill.on{background:var(--ok);color:#06120a;border-color:transparent;box-shadow:0 0 16px rgba(61,220,132,.4)}
.pill.work{background:var(--a);color:#06120a;border-color:transparent;animation:bp .7s infinite}
@keyframes bp{50%{opacity:.45}}
.tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:12px;
background:rgba(0,0,0,.35);padding:5px;border-radius:13px;border:1px solid var(--ln)}
.tabs button{font:inherit;font-size:11.5px;font-weight:800;letter-spacing:.7px;padding:9px 2px;
border:0;border-radius:9px;background:transparent;color:var(--dim)}
.tabs button.act{background:linear-gradient(160deg,var(--a),var(--a2));color:#08120a}
.card{background:var(--pnl);border:1px solid var(--ln);border-radius:16px;padding:13px;
margin-bottom:11px;backdrop-filter:blur(9px)}
.card.hide{display:none}
h2{font-size:10px;letter-spacing:1.6px;text-transform:uppercase;color:var(--dim);margin:0 0 11px;font-weight:800}
button.b{font:inherit;font-weight:700;width:100%;padding:13px;margin:5px 0;border:1px solid var(--ln);
border-radius:11px;background:rgba(255,255,255,.045);color:var(--fg);transition:.15s}
button.b:active{transform:scale(.985)}
button.b:disabled{opacity:.3}
button.p{background:linear-gradient(160deg,var(--a),var(--a2));color:#08120a;border:0;
box-shadow:0 6px 22px rgba(166,255,77,.22)}
button.huge{padding:22px;font-size:17px;letter-spacing:1.5px;border-radius:14px}
.g2{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.g3{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px}
label{display:block;font-size:11px;color:var(--dim);margin-bottom:10px;font-weight:600}
input,select{width:100%;padding:10px;margin-top:5px;background:rgba(0,0,0,.45);color:var(--fg);
border:1px solid var(--ln);border-radius:9px;font:14px ui-monospace,SFMono-Regular,Menlo,monospace}
input:focus,select:focus{outline:none;border-color:var(--a2)}
.row{display:flex;justify-content:space-between;align-items:center;font-size:12.5px;padding:6px 0}
.row b{font-family:ui-monospace,monospace;color:var(--a);font-size:12.5px;text-align:right}
.bar{height:6px;border-radius:99px;background:rgba(255,255,255,.09);overflow:hidden;margin:9px 0}
.bar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--a2),var(--a));transition:.2s}
#log{height:230px;overflow:auto;background:rgba(0,0,0,.6);border:1px solid var(--ln);border-radius:10px;
padding:9px;font:11px/1.55 ui-monospace,monospace;white-space:pre-wrap;word-break:break-all}
.ln{display:flex;gap:7px}.ln .t{color:#3d4d35;flex:none}
.tx .m{color:var(--a)}.rx .m{color:var(--cy)}.er .m{color:var(--er)}.ok .m{color:var(--ok)}
.dim .m{color:var(--dim)}
.hint{font-size:11px;color:var(--dim);margin:9px 0 0;line-height:1.5}
#toast{position:fixed;left:50%;bottom:22px;transform:translate(-50%,140%);z-index:99;
padding:11px 17px;border-radius:12px;font-size:13px;font-weight:700;
background:#101a0c;border:1px solid var(--ln);box-shadow:0 10px 30px rgba(0,0,0,.5);transition:.28s}
#toast.show{transform:translate(-50%,0)}
#toast.ok{border-color:var(--ok);color:var(--ok)}#toast.er{border-color:var(--er);color:var(--er)}
.saved{font-size:10px;color:var(--ok);font-weight:700}
</style></head><body>

<div class="top">
  <div class="logo">L</div>
  <h1>LimeTool<small>ULTRA JAILBREAK</small></h1>
  <div id="pill" class="pill">offline</div>
</div>

<div class="tabs">
  <button class="act" data-t="c">LINK</button>
  <button data-t="a">AUTH</button>
  <button data-t="x">CONTROL</button>
  <button data-t="d">DEBUG</button>
</div>

<div class="card" id="tab-c">
  <h2>Verbindung</h2>
  <label>Scanfilter
    <select id="filt"><option value="1">nur lime-…</option><option value="0">alle Geräte</option></select></label>
  <button id="bc" class="b p">CONNECT</button>
  <button id="bd" class="b" disabled>Disconnect</button>
  <div class="g2" style="margin-top:6px">
    <button id="bkeep" class="b">Poke: 400 ms</button>
    <button id="brec2" class="b">Autohold: AN</button>
  </div>
  <div class="row"><span>Gerät</span><b id="iName">–</b></div>
  <div class="row"><span>Schreibkanal</span><b id="iWr">–</b></div>
  <div class="row"><span>Notify</span><b id="iNt">–</b></div>
  <p class="hint">Autohold verbindet bei Abbruch automatisch neu und schickt den letzten Befehl nochmal.</p>
</div>

<div class="card hide" id="tab-a">
  <h2>Authentifizierung</h2>
  <label>IMEI vom Aufkleber <input id="imei" inputmode="numeric" placeholder="861234567890123"></label>
  <label>Unbekannte Endstellen
    <select id="brute">
      <option value="6">6 Stellen – ca. 1 Mio</option>
      <option value="5">5 Stellen – ca. 100 k</option>
      <option value="4">4 Stellen – schnell</option>
      <option value="0">0 – IMEI komplett</option>
    </select></label>
  <button id="brec" class="b p" disabled>TOKEN BERECHNEN</button>
  <div class="bar"><i id="bar"></i></div>
  <div id="prog" class="hint">bereit</div>
  <label style="margin-top:10px">Token <span id="saved" class="saved"></span>
    <input id="tok" placeholder="wird berechnet"></label>
  <button id="bsave" class="b" disabled>Token für dieses Gerät merken</button>
</div>

<div class="card hide" id="tab-x">
  <h2>Befehle</h2>
  <label>Format
    <select id="fmt">
      <option value="at">AT+CMD mit Token (richtig)</option>
      <option value="raw">roher Frame (ohne Auth)</option>
    </select></label>
  <button id="b1" class="b p huge" disabled>UNLOCK</button>
  <div class="g2">
    <button id="b2" class="b" disabled>Unlock dauerhaft</button>
    <button id="b3" class="b" disabled>Lock</button>
    <button id="b4" class="b" disabled>Beep</button>
    <button id="b5" class="b" disabled>Poke</button>
  </div>
  <h2 style="margin-top:14px">Register (experimentell)</h2>
  <div class="g3">
    <label>Reg <input id="reg" value="0D"></label>
    <label>Wert <input id="rval" value="1E"></label>
    <button id="bw" class="b" style="align-self:end;margin-bottom:10px" disabled>Write</button>
  </div>
  <button id="br" class="b" disabled>Register lesen</button>
</div>

<div class="card hide" id="tab-d">
  <h2>Debug</h2>
  <label>Roh senden (Hex oder Text) <input id="raw" placeholder="46 43 16 61 00 01 F1 F2 8F"></label>
  <div class="g2">
    <button id="bsend" class="b" disabled>Roh senden</button>
    <button id="bhex" class="b">Hex-Modus: AN</button>
  </div>
  <div class="g2">
    <button id="bcopy" class="b">Log kopieren</button>
    <button id="bclr" class="b">Log leeren</button>
  </div>
  <div id="log" style="margin-top:10px"></div>
</div>

<div id="toast"></div>

<script>
const $=s=>document.querySelector(s),logEl=$('#log');
const SV=['6e400001-b5a3-f393-e0a9-e50e24dcca9e','0000ffe0-0000-1000-8000-00805f9b34fb',
'0000ffe5-0000-1000-8000-00805f9b34fb','0000ffe9-0000-1000-8000-00805f9b34fb',
'0000fff0-0000-1000-8000-00805f9b34fb','0000ff00-0000-1000-8000-00805f9b34fb'];
let dev=null,wr=null,rd=null,seq=0,nm='',pokeT=null,pokeMs=400,autoHold=true,
hexMode=true,busy=false,connecting=false,manual=false,lastCmd=null,lastLabel='';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
const hex=b=>[...b].map(x=>x.toString(16).padStart(2,'0').toUpperCase()).join(' ');
function toast(m,k){const t=$('#toast');t.textContent=m;t.className='show '+(k||'');clearTimeout(t._x);
t._x=setTimeout(()=>t.className='',2100)}
function log(m,c){const d=document.createElement('div');d.className='ln '+(c||'');
const a=document.createElement('span');a.className='t';a.textContent=new Date().toTimeString().slice(0,8);
const b=document.createElement('span');b.className='m';b.textContent=m;d.append(a,b);logEl.prepend(d);
while(logEl.children.length>400)logEl.lastChild.remove()}
function pill(s,c){const p=$('#pill');p.textContent=s;p.className='pill '+(c||'')}
document.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{
document.querySelectorAll('.tabs button').forEach(x=>x.classList.remove('act'));
b.classList.add('act');['c','a','x','d'].forEach(t=>$('#tab-'+t).classList.toggle('hide',t!==b.dataset.t))});

function crc16(b){let c=0;for(const x of b){c^=x<<8;for(let i=0;i<8;i++)
c=c&0x8000?((c<<1)^0x1021)&0xFFFF:(c<<1)&0xFFFF}return c}
function frame(cmd,pl=[]){const n=pl.length,f=new Uint8Array(8+n);
f[0]=0x46;f[1]=0x43;f[2]=cmd>>8&255;f[3]=cmd&255;f[4]=n>>8&255;f[5]=n&255;
f.set(pl,6);const c=crc16(f.subarray(0,6+n));f[6+n]=c>>8&255;f[7+n]=c&255;return f}

const IP=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7];
const FP=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25];
const EX=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1];
const P=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25];
const PC1=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4];
const PC2=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32];
const SH=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1];
const SB=[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7,0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8,4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0,15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13,
15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10,3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5,0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15,13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9,
10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8,13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1,13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7,1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12,
7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15,13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9,10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4,3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14,
2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9,14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6,4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14,11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3,
12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11,10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8,9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6,4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13,
4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1,13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6,1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2,6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12,
13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7,1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2,7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8,2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11];
const pm=(b,t)=>t.map(i=>b[i-1]),xo=(a,b)=>a.map((v,i)=>v^b[i]);
const h2b=h=>{const o=[];for(const c of h){const n=parseInt(c,16);for(let i=3;i>=0;i--)o.push(n>>i&1)}return o};
const b2h=b=>{let s='';for(let i=0;i<b.length;i+=4){let n=0;for(let j=0;j<4;j++)n=n<<1|b[i+j];s+=n.toString(16)}return s};
const KEY='1122334455667788';
function des(blk,key){const cd=pm(h2b(key),PC1);let C=cd.slice(0,28),D=cd.slice(28),sk=[];
for(let r=0;r<16;r++){C=C.slice(SH[r]).concat(C.slice(0,SH[r]));D=D.slice(SH[r]).concat(D.slice(0,SH[r]));
sk.push(pm(C.concat(D),PC2))}
const B=pm(h2b(blk),IP);let L=B.slice(0,32),R=B.slice(32);
for(let r=0;r<16;r++){const e=xo(pm(R,EX),sk[r]),o=[];
for(let s=0;s<8;s++){const c=e.slice(s*6,s*6+6),rw=c[0]<<1|c[5],cl=c[1]<<3|c[2]<<2|c[3]<<1|c[4],
v=SB[s*64+rw*16+cl];o.push(v>>3&1,v>>2&1,v>>1&1,v&1)}
const f=pm(o,P),n=xo(L,f);L=R;R=n}
return b2h(pm(R.concat(L),FP))}
function token(imei){const bcd=(imei+'0000000000000000').slice(0,16),o=[];
for(let i=0;i<16;i+=2)o.push(parseInt(bcd.substr(i,2),16));
const a=des(o.map(x=>x.toString(16).padStart(2,'0')).join(''),KEY);
const asc=[...imei.slice(0,8)].map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join('');
return [a,des(asc,KEY)]}
const sfx=()=>nm.replace(/^lime-/i,'').toLowerCase();
const match=t=>t[0].slice(-8).toLowerCase()===sfx()||t[1].slice(-8).toLowerCase()===sfx();

/* --- Poke: hält die Verbindung ab der ersten ms --- */
function startPoke(ch){stopPoke();if(!ch)return;
  pokeT=setInterval(()=>{try{ch.readValue()}catch(_){}},pokeMs)}
function stopPoke(){if(pokeT){clearInterval(pokeT);pokeT=null}}

async function attach(sv){
  let w=null,nt=0;
  const svcs=[];
  for(const u of SV){try{svcs.push(await sv.getPrimaryService(u))}catch(_){}}
  if(!svcs.length){try{svcs.push(...await sv.getPrimaryServices())}catch(_){}}
  for(const s of svcs){
    let cs=[];try{cs=await s.getCharacteristics()}catch(_){continue}
    for(const ch of cs){
      const p=ch.properties||{};
      if(!rd&&p.read){rd=ch;startPoke(ch);log('poke an','dim')}
      if((p.write||p.writeWithoutResponse)&&(!w||/40002/.test(ch.uuid)))w=ch;
      if(p.notify||p.indicate){nt++;try{await ch.startNotifications();
        ch.addEventListener('characteristicvaluechanged',onRx)}catch(_){}}}
  }
  if(!w){log('kein Schreibkanal','er');return false}
  wr=w;$('#iWr').textContent=wr.uuid.slice(0,8);$('#iNt').textContent=nt;
  ['#b1','#b2','#b3','#b4','#b5','#bw','#br','#bsend','#bsave','#brec'].forEach(s=>$(s).disabled=false);
  $('#bd').disabled=false;
  return true
}

async function connectLoop(){
  if(connecting||!dev)return false;connecting=true;manual=false;
  for(let i=1;i<=12;i++){
    try{
      pill('halt '+i+'/12','work');
      const sv=await dev.gatt.connect();
      if(await attach(sv)){connecting=false;pill('verbunden','on');toast('Verbunden','ok');
        if(lastCmd){const c=lastCmd;lastCmd=null;await sleep(250);log('replay '+lastLabel,'dim');await write(c)}
        return true}
    }catch(e){log('V'+i+': '+e.message,'er')}
    await sleep(350)
  }
  connecting=false;pill('offline','');toast('nicht durchgekommen','er');return false
}

function onRx(e){
  const v=new Uint8Array(e.target.value.buffer);const txt=new TextDecoder().decode(v);
  log('<< '+hex(v)+(/[ -~]{3,}/.test(txt)?'  |'+txt.replace(/[^\x20-\x7e]/g,'.')+'|':''),'rx');
  if(/OK|\bACK\b/i.test(txt))toast('ACK','ok');
  else if(/ERR|NAK|FAIL|DENIED/i.test(txt))toast('Fehler/Token falsch','er')
}

$('#bc').onclick=async()=>{
  if(!navigator.bluetooth){log('kein Web Bluetooth – Bluefy','er');return toast('Bluefy benutzen','er')}
  if(dev&&dev.gatt.connected){manual=false;return connectLoop()}
  try{
    const f=$('#filt').value==='1';
    dev=await navigator.bluetooth.requestDevice(f?{filters:[{namePrefix:'lime-'}],optionalServices:SV}
      :{acceptAllDevices:true,optionalServices:SV});
    nm=dev.name||'?';$('#iName').textContent=nm;log('Ziel '+nm);
    dev.addEventListener('gattserverdisconnected',onDrop);
    await connectLoop();
    const st=localStorage.getItem('lime.tok.'+nm);
    if(st&&wr){$('#tok').value=st;$('#saved').textContent='gespeichert';log('Token geladen','ok')}
  }catch(e){pill('fehler','');log('Connect: '+e.message,'er')}
};
$('#bd').onclick=()=>{manual=true;lastCmd=null;stopPoke();
  try{dev&&dev.gatt.connected&&dev.gatt.disconnect()}catch(_){}};

function onDrop(){
  wr=null;rd=null;stopPoke();
  ['#b1','#b2','#b3','#b4','#b5','#bw','#br','#bsend','#bsave','#brec'].forEach(s=>$(s).disabled=true);
  $('#bd').disabled=true;$('#iWr').textContent='–';$('#iNt').textContent='–';
  if(manual){pill('offline','');return log('getrennt','dim')}
  if(autoHold){log('!! weg – halte neu','er');connectLoop()}
  else pill('offline','')
}
$('#bkeep').onclick=()=>{pokeMs=pokeMs===400?900:400;
  $('#bkeep').textContent='Poke: '+pokeMs+' ms';if(rd)startPoke(rd)};
$('#brec2').onclick=()=>{autoHold=!autoHold;$('#brec2').textContent='Autohold: '+(autoHold?'AN':'AUS')};

$('#brec').onclick=async()=>{
  if(busy)return;const p=$('#imei').value.replace(/\D/g,''),n=+$('#brute').value;
  if(!p)return toast('IMEI eingeben','er');
  if(!n){const t=token(p);$('#tok').value=t[0];log('Token '+t[0],'ok');toast('gesetzt','ok');
    $('#bar').style.width='100%';return}
  busy=true;pill('brute','work');const tot=Math.pow(10,n);let i=0;
  log('brute '+tot+' …','dim');
  const step=()=>{const end=Math.min(i+2500,tot);
    for(;i<end;i++){const im=p+String(i).padStart(n,'0');const t=token(im);
      if(match(t)){$('#tok').value=t[0];$('#bar').style.width='100%';
        $('#prog').textContent='gefunden: '+im;log('TOKEN '+t[0],'ok');
        toast('Token gefunden','ok');busy=false;pill('verbunden','on');return}}
    $('#bar').style.width=(i/tot*100).toFixed(1)+'%';$('#prog').textContent=i+' / '+tot;
    if(i<tot)setTimeout(step,0);
    else{$('#prog').textContent='kein Treffer';log('kein Treffer','er');
      toast('kein Treffer','er');busy=false;pill('verbunden','on')}};
  step()};
$('#bsave').onclick=()=>{const t=$('#tok').value.trim();if(!t)return;
  localStorage.setItem('lime.tok.'+nm,t);$('#saved').textContent='gespeichert';toast('gemerkt','ok')};

async function write(p){
  if(!wr)return toast('nicht verbunden','er');
  try{wr.properties.write?await wr.writeValueWithResponse(p):await wr.writeValueWithoutResponse(p)}
  catch(_){try{await wr.writeValueWithoutResponse(p)}catch(e){log('write: '+e.message,'er')}}
}
const wrap=d=>'AT+CMD,'+($('#tok').value.trim()||'0')+','+Math.floor(Date.now()/1000)+','+(seq++)+','+d+'$';
async function cmd(f,label){
  const d=hex(f).replace(/ /g,'');
  if($('#fmt').value==='at'){const s=wrap(d);const b=new TextEncoder().encode(s);
    lastCmd=b;lastLabel=label||'';await write(b);log('>> '+s,'tx')}
  else{lastCmd=f;lastLabel=label||'';await write(f);log('>> '+hex(f),'tx')}
  if(label)toast(label,'')
}
$('#b1').onclick=async()=>{
  if(!$('#tok').value.trim()&&$('#fmt').value==='at')toast('kein Token – AUTH','er');
  await cmd(frame(0x1661,[0xF1]),'unlock');
  await sleep(500);
  lastCmd=null;await cmd(frame(0x1663,[0xF1]),'dauerhaft')};
$('#b2').onclick=()=>cmd(frame(0x1663,[0xF1]),'dauerhaft');
$('#b3').onclick=()=>cmd(frame(0x1661,[0xF0]),'lock');
$('#b4').onclick=()=>cmd(frame(0x1114,[]),'beep');
$('#b5').onclick=()=>{try{rd&&rd.readValue();toast('poke','')}catch(_){}};
const hx=s=>parseInt((s||'0').replace(/[^0-9a-f]/gi,'')||'0',16)&255;
$('#bw').onclick=()=>cmd(frame(0x1663,[hx($('#reg').value),hx($('#rval').value)]),'reg');
$('#br').onclick=()=>cmd(frame(0x1613,[hx($('#reg').value)]),'read');

$('#bhex').onclick=()=>{hexMode=!hexMode;$('#bhex').textContent='Hex-Modus: '+(hexMode?'AN':'AUS')};
$('#bsend').onclick=async()=>{
  const v=$('#raw').value.trim();if(!v)return;
  if(hexMode){const b=new Uint8Array(v.replace(/[^0-9a-f]/gi,'').match(/.{2}/g).map(x=>parseInt(x,16)));
    await write(b);log('>> '+hex(b),'tx')}
  else{await write(new TextEncoder().encode(v));log('>> '+v,'tx')}};
$('#bcopy').onclick=async()=>{try{await navigator.clipboard.writeText(logEl.innerText);toast('kopiert','ok')}
  catch(_){toast('kopieren fehlgeschlagen','er')}};
$('#bclr').onclick=()=>{logEl.innerHTML=''};

log('Jailbreak-Modus: poke ab erster ms, 12er-Retry, replay.','dim');
</script></body></html>`;

const fm = FileManager.iCloud();
const p = fm.joinPath(fm.documentsDirectory(), "lime.html");
fm.writeString(p, HTML);
const a = new Alert();
a.title = "Jailbreak-Version geschrieben";
a.message = "Jetzt bei GitHub: Add file → Upload files → iCloud/Scriptable/lime.html → Commit.";
a.addAction("OK");
await a.present();