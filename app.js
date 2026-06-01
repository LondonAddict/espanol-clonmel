// Core app logic

function showPage(p,btn){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(x=>x.classList.remove('active'));
  document.getElementById('page-'+p).classList.add('active');
  if(btn)btn.classList.add('active');
  if(p==='flashcards')renderFlashcards('All');
  if(p==='exercises')renderExercises(0);
  if(p==='phrases')renderPhrases();
  if(p==='classes'){document.getElementById('class-list-view').style.display='';document.getElementById('class-detail-view').style.display='none';}
}

function renderClasses(){
  document.getElementById('classes-grid').innerHTML=CLASSES.map((c,i)=>`
    <div class="class-card" onclick="showClass(${i})">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
        <div class="cc-date">${c.date}</div>
        <div style="font-size:11px;font-weight:600;color:var(--green-dark);background:var(--green-light);border-radius:10px;padding:1px 8px">clase ${i+1}</div>
      </div>
      <div class="cc-topic">${c.topic}</div>
      <div class="cc-tags">${c.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    </div>`).join('');
}

function showClass(i){
  const c=CLASSES[i];
  document.getElementById('class-list-view').style.display='none';
  document.getElementById('class-detail-view').style.display='block';
  document.getElementById('detail-content').innerHTML=`
    <div class="detail-date">${c.date}</div>
    <div class="detail-title">${c.topic}</div>
    <div class="grammar-note"><strong>Grammar note:</strong> ${c.grammar}</div>
    <div class="section-h">Vocabulary <span style="font-size:12px;font-weight:400;color:var(--text3)">— tap to flip</span></div>
    <div class="vocab-grid">${c.vocab.map(v=>`<div class="vocab-card" onclick="this.classList.toggle('flipped')"><div class="v-es">${v[0]}</div><div class="v-en">${v[1]}</div></div>`).join('')}</div>
    <div class="section-h">Key phrases</div>
    <ul class="phrase-list">${c.phrases.map(p=>`<li class="phrase-item"><span class="p-es">${p[0]}</span><span class="p-en">${p[1]}</span></li>`).join('')}</ul>
    ${c.extra || ''}`;
  // Run any class-specific init after innerHTML is set
  const initEl = document.querySelector('[data-init]');
  if(initEl){const key=initEl.getAttribute('data-init');if(key==='clase2')initClase2();if(key==='clase3')initClase3();if(key==='clase4')initClase4();if(key==='clase5')initClase5();if(key==='clase10')initClase10();}
}

function initClase2(){
  const verbs=["trabajar","descansar","cocinar","limpiar","caminar","leer","comer","dormir","ir al supermercado","hacer deporte"];
  const ex1qs=["1. Hoy quiero","2. Mañana tengo que","3. El lunes voy a","4. El martes quiero","5. El miércoles tengo que","6. El jueves voy a","7. El viernes quiero","8. El sábado tengo que","9. El domingo voy a","10. El fin de semana quiero"];
  const ex1el=document.getElementById("ex2-1");
  if(!ex1el)return;
  ex1qs.forEach(q=>{
    const d=document.createElement("div");
    d.style.cssText="display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:0.5px solid var(--border);font-size:13px;flex-wrap:wrap";
    d.innerHTML='<span style="color:var(--text2);flex:1;min-width:180px">'+q+'...</span><select onchange="this.style.color=this.value?\'var(--text)\':\'var(--text3)\'" style="padding:5px 8px;border-radius:8px;border:0.5px solid var(--border2);background:var(--bg2);color:var(--text3);font-size:13px;cursor:pointer"><option value="">choose a verb...</option>'+verbs.map(v=>'<option value="'+v+'">'+v+'</option>').join('')+'</select>';
    ex1el.appendChild(d);
  });
  const ex2items=[
    {a:"Quiero leer.",b:"Tengo que limpiar.",conn:"pero",hint:"contrast → pero"},
    {a:"Voy a cocinar.",b:"Voy a ir al supermercado.",conn:"y",hint:"two plans → y"},
    {a:"Quiero caminar.",b:"Quiero descansar.",conn:"y",hint:"two desires → y"},
    {a:"Tengo que trabajar.",b:"Quiero dormir.",conn:"pero",hint:"obligation vs desire → pero"},
    {a:"Voy a comer.",b:"Voy a leer.",conn:"y",hint:"two plans → y"},
    {a:"Quiero ir al supermercado.",b:"Tengo que hacer deporte.",conn:"pero",hint:"desire vs obligation → pero"},
    {a:"Voy a descansar.",b:"Tengo que trabajar.",conn:"pero",hint:"plan vs obligation → pero"},
    {a:"Quiero cocinar.",b:"Voy a comer.",conn:"y",hint:"two related actions → y"},
    {a:"Tengo que dormir.",b:"Quiero leer.",conn:"pero",hint:"obligation vs desire → pero"},
    {a:"Voy a caminar.",b:"Voy a hacer deporte.",conn:"y",hint:"two plans → y"},
  ];
  const ex2el=document.getElementById("ex2-2");
  if(!ex2el)return;
  ex2items.forEach((item,i)=>{
    const d=document.createElement("div");
    d.style.cssText="background:var(--bg2);border-radius:var(--radius);padding:0.75rem;margin-bottom:6px;font-size:13px";
    const result=item.a.replace(".","")+" "+item.conn+" "+item.b.charAt(0).toLowerCase()+item.b.slice(1);
    d.innerHTML='<div style="color:var(--text2);margin-bottom:6px"><strong>'+(i+1)+'.</strong> '+item.a+' '+item.b+'</div>'
      +'<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'
      +'<button onclick="checkConn(this,\'pero\',\''+item.conn+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">pero</button>'
      +'<button onclick="checkConn(this,\'y\',\''+item.conn+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">y</button>'
      +'<span style="font-size:12px;color:var(--text3)" class="cf"></span></div>'
      +'<div class="cr" style="font-size:12px;color:var(--green-dark);margin-top:4px;display:none">'+result+'</div>';
    ex2el.appendChild(d);
  });
  const ex3qs=["hoy","mañana","el lunes","el martes","el miércoles","el jueves","el viernes","el sábado","el domingo","el fin de semana"];
  const ex3el=document.getElementById("ex2-3");
  if(!ex3el)return;
  ex3qs.forEach((q,i)=>{
    const d=document.createElement("div");
    d.style.cssText="margin-bottom:8px;font-size:13px";
    d.innerHTML='<div style="color:var(--text2);margin-bottom:4px"><strong>'+(i+1)+'.</strong> ¿Qué vas a hacer '+q+'?</div><input type="text" placeholder="Voy a / Quiero / Tengo que + verb..." style="width:100%;padding:7px 10px;border-radius:8px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:13px">';
    ex3el.appendChild(d);
  });
}

function initClase10(){
  const times=[
    {q:"3:00",ans:"Son las tres en punto."},
    {q:"1:00",ans:"Es la una en punto."},
    {q:"7:15",ans:"Son las siete y cuarto."},
    {q:"10:30",ans:"Son las diez y media."},
    {q:"5:45",ans:"Son las seis menos cuarto."},
    {q:"2:10",ans:"Son las dos y diez."},
    {q:"8:50",ans:"Son las nueve menos diez."},
    {q:"12:00",ans:"Son las doce en punto."},
    {q:"4:25",ans:"Son las cuatro y veinticinco."},
    {q:"6:35",ans:"Son las siete menos veinticinco."},
  ];
  const el=document.getElementById('ex10-time');
  if(!el)return;
  times.forEach(item=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:1rem;border:1.5px solid var(--border);text-align:center;cursor:pointer;transition:all 0.15s';
    d.innerHTML='<div style="font-size:28px;font-weight:900;color:var(--green-dark);margin-bottom:8px">'+item.q+'</div>'
      +'<div class="time-ans" style="display:none;font-size:15px;font-weight:700;color:var(--green-dark);margin-bottom:6px">'+item.ans+'</div>'
      +'<div class="time-hint" style="font-size:13px;color:var(--text3)">Tap to see the answer</div>';
    d.onclick=function(){
      const ans=this.querySelector('.time-ans');
      const hint=this.querySelector('.time-hint');
      const show=ans.style.display==='none';
      ans.style.display=show?'block':'none';
      hint.textContent=show?'Tap to hide':'Tap to see the answer';
      this.style.borderColor=show?'var(--green)':'var(--border)';
      this.style.background=show?'var(--bg)':'var(--bg2)';
    };
    el.appendChild(d);
  });
}

function initClase5(){
  const pairs=[
    {country:'Irlanda',m:'irlandés',f:'irlandesa'},
    {country:'España',m:'español',f:'española'},
    {country:'Francia',m:'francés',f:'francesa'},
    {country:'Alemania',m:'alemán',f:'alemana'},
    {country:'Italia',m:'italiano',f:'italiana'},
    {country:'Polonia',m:'polaco',f:'polaca'},
    {country:'Rusia',m:'ruso',f:'rusa'},
    {country:'Japón',m:'japonés',f:'japonesa'},
    {country:'Brasil',m:'brasileño',f:'brasileña'},
    {country:'Bélgica',m:'belga',f:'belga'},
  ];
  const el=document.getElementById('ex5-nat');
  if(!el)return;
  pairs.forEach(p=>{
    const isSame=p.m===p.f;
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.75rem 1rem;margin-bottom:6px;font-size:13px';
    if(isSame){
      d.innerHTML='<span style="font-weight:500">Soy de '+p.country+'.</span> → <span style="color:var(--green-dark);font-weight:600">Soy '+p.m+'.</span> <span style="color:var(--text3);font-size:11px">(same for m/f)</span>';
    } else {
      d.innerHTML='<div style="margin-bottom:6px;font-weight:500">Soy de '+p.country+'. → Soy ___</div>'
        +'<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'
        +'<button onclick="chkNat(this,\'m\',\''+p.m+'\',\''+p.f+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:#185FA5;font-size:12px;cursor:pointer">👨 '+p.m+'</button>'
        +'<button onclick="chkNat(this,\'f\',\''+p.m+'\',\''+p.f+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:#993556;font-size:12px;cursor:pointer">👩 '+p.f+'</button>'
        +'<span style="font-size:12px;color:var(--text3);font-style:italic">both are correct — depends on who is speaking!</span></div>';
    }
    el.appendChild(d);
  });
}

function chkNat(btn,chosen,m,f){
  // Both answers are correct — just show both
  const row=btn.parentElement;
  row.querySelectorAll('button').forEach(b=>{
    b.disabled=true;
    b.style.cssText+=';background:var(--green-light);border-color:var(--green)';
  });
  const sp=row.querySelector('span');
  if(sp){sp.textContent='✓ Both correct! Use '+m+' (man speaking) or '+f+' (woman speaking)';sp.style.color='var(--green-dark)';}
}

function initClase4(){
  // Exercise A — gusta or gustan
  const exA=[
    {q:"1. Me ___ el chocolate.",ans:"gusta",hint:"el chocolate = singular → gusta"},
    {q:"2. Te ___ los gatos.",ans:"gustan",hint:"los gatos = plural → gustan"},
    {q:"3. Me ___ las películas españolas.",ans:"gustan",hint:"las películas = plural → gustan"},
    {q:"4. Te ___ el café con leche.",ans:"gusta",hint:"el café = singular → gusta"},
    {q:"5. Me ___ los domingos.",ans:"gustan",hint:"los domingos = plural → gustan"},
    {q:"6. Te ___ la pizza italiana.",ans:"gusta",hint:"la pizza = singular → gusta"},
    {q:"7. Me ___ las montañas.",ans:"gustan",hint:"las montañas = plural → gustan"},
    {q:"8. Me ___ el mar.",ans:"gusta",hint:"el mar = singular → gusta"},
    {q:"9. Te ___ las clases de español.",ans:"gustan",hint:"las clases = plural → gustan"},
    {q:"10. Me ___ vivir en la ciudad.",ans:"gusta",hint:"vivir = verb → gusta"},
  ];
  const elA=document.getElementById('ex4-a');
  if(!elA)return;
  exA.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.75rem 1rem;margin-bottom:6px;font-size:13px';
    d.innerHTML='<div style="margin-bottom:6px;color:var(--text)">'+item.q+'</div>'
      +'<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'
      +'<button onclick="chkGG(this,\'gusta\',\''+item.ans+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">gusta</button>'
      +'<button onclick="chkGG(this,\'gustan\',\''+item.ans+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">gustan</button>'
      +'<span class="gg-fb" style="font-size:12px;color:var(--text3)"></span></div>';
    elA.appendChild(d);
  });

  // Exercise B — plurals (tap to reveal)
  const exB=[
    {s:'el chico',p:'los chicos'},{s:'el libro',p:'los libros'},{s:'la escuela',p:'las escuelas'},
    {s:'el árbol',p:'los árboles'},{s:'la flor',p:'las flores'},{s:'el chocolate',p:'los chocolates'},
    {s:'la mesa',p:'las mesas'},{s:'el cocodrilo',p:'los cocodrilos'},{s:'el perro',p:'los perros'},
    {s:'la gata',p:'las gatas'},{s:'el lápiz',p:'los lápices'},{s:'el pez',p:'los peces'},
  ];
  const elB=document.getElementById('ex4-b');
  if(!elB)return;
  exB.forEach(item=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.75rem;font-size:13px;cursor:pointer;border:0.5px solid var(--border);text-align:center;transition:all 0.15s';
    d.innerHTML='<div style="color:var(--text2)">'+item.s+'</div><div class="pl-ans" style="display:none;font-weight:600;color:var(--green-dark);margin-top:4px">→ '+item.p+'</div>';
    d.onclick=function(){
      const a=this.querySelector('.pl-ans');
      const show=a.style.display==='none';
      a.style.display=show?'block':'none';
      this.style.borderColor=show?'var(--green)':'var(--border)';
      this.style.background=show?'var(--bg)':'var(--bg2)';
    };
    elB.appendChild(d);
  });

  // Exercise C — advanced gusta/gustan
  const exC=[
    {q:"1. Me ___ mucho vivir en la ciudad.",ans:"gusta",hint:"vivir = verb → gusta"},
    {q:"2. ¿Te ___ las grandes ciudades?",ans:"gustan",hint:"las ciudades = plural → gustan"},
    {q:"3a. A nosotros nos ___ pasar las vacaciones en el mar.",ans:"gusta",hint:"pasar = verb → gusta"},
    {q:"3b. ...pero no nos ___ nada las playas llenas de gente.",ans:"gustan",hint:"las playas = plural → gustan"},
    {q:"4a. ¿Os ___ la comida mexicana?",ans:"gusta",hint:"la comida = singular → gusta"},
    {q:"4b. A mí me ___ muchísimo.",ans:"gusta",hint:"implied singular → gusta"},
    {q:"5. A Manuel no le ___ nada el chocolate.",ans:"gusta",hint:"el chocolate = singular → gusta"},
    {q:"6. ¿Sabes si a sus amigos les ___ bailar?",ans:"gusta",hint:"bailar = verb → gusta"},
    {q:"7. Me ___ los deportes al aire libre.",ans:"gustan",hint:"los deportes = plural → gustan"},
  ];
  const elC=document.getElementById('ex4-c');
  if(!elC)return;
  exC.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.75rem 1rem;margin-bottom:6px;font-size:13px';
    d.innerHTML='<div style="margin-bottom:6px;color:var(--text)">'+item.q+'</div>'
      +'<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center">'
      +'<button onclick="chkGG(this,\'gusta\',\''+item.ans+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">gusta</button>'
      +'<button onclick="chkGG(this,\'gustan\',\''+item.ans+'\',\''+item.hint+'\')" style="padding:5px 14px;border-radius:16px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">gustan</button>'
      +'<span class="gg-fb" style="font-size:12px;color:var(--text3)"></span></div>';
    elC.appendChild(d);
  });

  // Exercise D — pronouns
  const exD=[
    {q:"1. Pablo, ¿___ gusta esta música?",ans:"te",opts:["me","te","le","nos","os","les"],hint:"Pablo = tú → te"},
    {q:"2. A Laura no ___ gustan las noticias.",ans:"le",opts:["me","te","le","nos","os","les"],hint:"Laura = ella → le"},
    {q:"3. A Sergio y a mí ___ gustan los deportes de riesgo.",ans:"nos",opts:["me","te","le","nos","os","les"],hint:"Sergio y mí = nosotros → nos"},
    {q:"4. A mis hijos ___ gustan los dibujos animados.",ans:"les",opts:["me","te","le","nos","os","les"],hint:"mis hijos = ellos → les"},
    {q:"5a. A ti ___ gustan los perros.",ans:"te",opts:["me","te","le","nos","os","les"],hint:"tú → te"},
    {q:"5b. ...y a tu mujer ___ gustan los gatos.",ans:"le",opts:["me","te","le","nos","os","les"],hint:"tu mujer = ella → le"},
    {q:"5c. Menos mal que no ___ gusta discutir. (referring to both of them)",ans:"les",opts:["me","te","le","nos","os","les"],hint:"both of them = ellos → les"},
    {q:"6a. No ___ gustan las mismas cosas. (general — both)",ans:"les",opts:["me","te","le","nos","os","les"],hint:"ellos → les"},
    {q:"6b. ...a él ___ gusta la música.",ans:"le",opts:["me","te","le","nos","os","les"],hint:"él → le"},
    {q:"6c. ...a mí ___ gusta el teatro.",ans:"me",opts:["me","te","le","nos","os","les"],hint:"mí = yo → me"},
  ];
  const elD=document.getElementById('ex4-d');
  if(!elD)return;
  exD.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.75rem 1rem;margin-bottom:6px;font-size:13px';
    d.innerHTML='<div style="margin-bottom:6px;color:var(--text)">'+item.q+'</div>'
      +'<div style="display:flex;gap:5px;flex-wrap:wrap;align-items:center">'
      +item.opts.map(o=>'<button onclick="chkPron(this,\''+o+'\',\''+item.ans+'\',\''+item.hint+'\')" style="padding:4px 10px;border-radius:14px;border:0.5px solid var(--border2);background:var(--bg);color:var(--text2);font-size:12px;cursor:pointer">'+o+'</button>').join('')
      +'<span class="gg-fb" style="font-size:12px;color:var(--text3)"></span></div>';
    elD.appendChild(d);
  });
}

function chkGG(btn,chosen,ans,hint){
  const row=btn.parentElement;
  row.querySelectorAll('button').forEach(b=>b.disabled=true);
  const fb=row.querySelector('.gg-fb');
  if(chosen===ans){
    btn.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green)';
    if(fb){fb.textContent='✓ '+hint;fb.style.color='var(--green-dark)';}
  } else {
    btn.style.cssText+=';background:#FAECE7;color:#993C1D;border-color:#993C1D';
    if(fb){fb.textContent='✗ '+hint;fb.style.color='#993C1D';}
    row.querySelectorAll('button').forEach(b=>{if(b.textContent===ans)b.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green)';});
  }
}

function chkPron(btn,chosen,ans,hint){chkGG(btn,chosen,ans,hint);}

function initClase3(){
  const items=[
    {w:"ventana",ans:"la"},{w:"gato",ans:"el"},{w:"bolsa",ans:"la"},{w:"chico",ans:"el"},
    {w:"chica",ans:"la"},{w:"libro",ans:"el"},{w:"casa",ans:"la"},{w:"zapato",ans:"el"},
    {w:"mesa",ans:"la"},{w:"pelota",ans:"la"},{w:"plato",ans:"el"},{w:"manzana",ans:"la"},
    {w:"teléfono",ans:"el"},{w:"falda",ans:"la"},{w:"vaso",ans:"el"},{w:"camisa",ans:"la"},
    {w:"silla",ans:"la"},{w:"mochila",ans:"la"},{w:"brazo",ans:"el"},{w:"cama",ans:"la"},
  ];
  const el=document.getElementById("ex3-articles");
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement("div");
    d.style.cssText="background:var(--bg2);border-radius:var(--radius);padding:0.75rem;font-size:13px;cursor:pointer;border:0.5px solid var(--border);transition:all 0.15s;text-align:center";
    d.innerHTML='<div style="color:var(--text3);font-size:11px;margin-bottom:4px">___ </div><div style="font-weight:500">'+item.w+'</div><div class="art-ans" style="display:none;margin-top:6px;font-weight:600;color:var(--green-dark);font-size:15px">'+item.ans+' '+item.w+'</div>';
    d.onclick=function(){
      const ans=this.querySelector(".art-ans");
      ans.style.display=ans.style.display==="none"?"block":"none";
      this.style.borderColor=ans.style.display==="block"?"var(--green)":"var(--border)";
      this.style.background=ans.style.display==="block"?"var(--bg)":"var(--bg2)";
    };
    el.appendChild(d);
  });
}

function checkConn(btn,chosen,ans,hint){
  const row=btn.parentElement;
  const btns=row.querySelectorAll("button");
  btns.forEach(b=>b.disabled=true);
  const fb=row.querySelector(".cf");
  const res=btn.closest("div[style]").querySelector(".cr");
  if(chosen===ans){
    btn.style.cssText+="background:var(--green-light);color:var(--green-dark);border-color:var(--green)";
    if(fb){fb.textContent="✓ "+hint;fb.style.color="var(--green-dark)";}
  } else {
    btn.style.cssText+="background:#FAECE7;color:#993C1D;border-color:#993C1D";
    if(fb){fb.textContent="✗ "+hint;fb.style.color="#993C1D";}
    btns.forEach(b=>{if(b.textContent===ans){b.style.cssText+="background:var(--green-light);color:var(--green-dark);border-color:var(--green)";}});
  }
  if(res)res.style.display="block";
}

function backToList(){
  document.getElementById('class-list-view').style.display='';
  document.getElementById('class-detail-view').style.display='none';
}

function renderFlashcards(filter){
  const topics=['All',...new Set(CLASSES.map(c=>c.topic))];
  document.getElementById('fc-filters').innerHTML=topics.map(t=>`
    <button class="filter-btn${t===filter?' active':''}" onclick="renderFlashcards('${t.replace(/'/g,"\\'")}')">${t==='All'?'All topics':t}</button>`).join('');
  const items=filter==='All'?ALL_VOCAB:ALL_VOCAB.filter(v=>v.topic===filter);
  document.getElementById('fc-grid').innerHTML=items.map(v=>`
    <div class="vocab-card" onclick="this.classList.toggle('flipped')">
      <div class="v-es">${v.es}</div><div class="v-en">${v.en}</div>
    </div>`).join('');
}

let exTopic=0;
function renderExercises(idx){
  exTopic=idx;
  document.getElementById('ex-filters').innerHTML=EXERCISES.map((e,i)=>`
    <button class="filter-btn${i===idx?' active':''}" onclick="renderExercises(${i})">${e.topic}</button>`).join('');
  const ex=EXERCISES[idx];
  document.getElementById('ex-content').innerHTML=ex.items.map((item,i)=>`
    <div class="ex-block" id="ex-${i}">
      <div class="ex-q">${item.q}</div>
      <div class="ex-opts">${item.opts.map((o,j)=>`<button class="ex-btn" onclick="checkEx(${i},${j},${item.ans},'${item.hint.replace(/'/g,"\\'")}')">${o}</button>`).join('')}</div>
      <div class="ex-feedback" id="exfb-${i}"></div>
    </div>`).join('');
}

function checkEx(qi,chosen,ans,hint){
  const block=document.getElementById('ex-'+qi);
  const btns=block.querySelectorAll('.ex-btn');
  btns.forEach(b=>b.disabled=true);
  btns[ans].classList.add('correct');
  if(chosen!==ans)btns[chosen].classList.add('wrong');
  document.getElementById('exfb-'+qi).textContent=chosen===ans?'✓ Correct! '+hint:'✗ '+hint;
}

function renderPhrases(){
  document.getElementById('phrases-content').innerHTML=KEY_PHRASES.map(p=>`
    <div class="phrases-section">
      <div class="phrases-cat">${p.cat}</div>
      <ul class="phrase-list">${p.items.map(i=>`<li class="phrase-item"><span class="p-es">${i[0]}</span><span class="p-en">${i[1]}</span></li>`).join('')}</ul>
    </div>`).join('');
}

let quizQs=[],quizIdx=0,quizScore=0;
function startQuiz(){
  quizQs=[...QUIZ_POOL].sort(()=>Math.random()-0.5).slice(0,20);
  quizIdx=0;quizScore=0;
  document.getElementById('quiz-start').style.display='none';
  document.getElementById('quiz-end').style.display='none';
  document.getElementById('quiz-running').style.display='block';
  showQ();
}
function showQ(){
  const q=quizQs[quizIdx];
  document.getElementById('q-counter').textContent=`${quizIdx+1} / ${quizQs.length}`;
  document.getElementById('q-score').textContent=`Score: ${quizScore}`;
  document.getElementById('q-bar').style.width=`${Math.round((quizIdx/quizQs.length)*100)}%`;
  document.getElementById('q-text').textContent=q.q;
  document.getElementById('q-inst').textContent=q.inst;
  document.getElementById('q-feedback').textContent='';
  document.getElementById('q-next').style.display='none';
  document.getElementById('q-opts').innerHTML=q.opts.map((o,i)=>`<button class="q-btn" onclick="checkQ(${i})">${o}</button>`).join('');
}
function checkQ(chosen){
  const q=quizQs[quizIdx];
  const btns=document.querySelectorAll('.q-btn');
  btns.forEach(b=>b.disabled=true);
  btns[q.ans].classList.add('correct');
  if(chosen!==q.ans){btns[chosen].classList.add('wrong');document.getElementById('q-feedback').textContent='Correct answer highlighted above.';}
  else{quizScore++;document.getElementById('q-score').textContent=`Score: ${quizScore}`;document.getElementById('q-feedback').textContent='¡Correcto!';}
  document.getElementById('q-next').style.display='inline-block';
}
function nextQ(){
  quizIdx++;
  if(quizIdx>=quizQs.length){
    document.getElementById('quiz-running').style.display='none';
    document.getElementById('quiz-end').style.display='block';
    const pct=quizScore/quizQs.length;
    document.getElementById('q-final').textContent=`${quizScore} / ${quizQs.length}`;
    document.getElementById('q-msg').textContent=pct>=0.9?'¡Excelente! Outstanding work!':pct>=0.7?'¡Muy bien! Keep it up!':pct>=0.5?'Good effort — a bit more practice will help!':'Keep going — ¡tú puedes! 💪';
  }else showQ();
}

renderClasses();

// Boot
renderClasses();
