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
  document.getElementById('classes-grid').innerHTML=window.CLASSES.map((c,i)=>`
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
  const c=window.CLASSES[i];
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
  if(initEl){const key=initEl.getAttribute('data-init');if(key==='clase2')initClase2();if(key==='clase3')initClase3();if(key==='clase4')initClase4();if(key==='clase5')initClase5();if(key==='clase10')initClase10();if(key==='clase11')initClase11();if(key==='clase12')initClase12();if(key==='clase13')initClase13();if(key==='clase15')initClase15();if(key==='clase16')initClase16();if(key==='clase17')initClase17();if(key==='clase18')initClase18();if(key==='clase19')initClase19();if(key==='clase21')initClase21();}
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

function initClase21(){
  const items=[
    {q:"Cada año, yo ___ una rosa a mi pareja. (regalar — present)",ans:"regalo",opts:["regalo","he regalado","voy a regalar","regalando"]},
    {q:"Este año ___ un libro de poesía. (voy a + comprar)",ans:"voy a comprar",opts:["voy a comprar","he comprado","compro","comprando"]},
    {q:"¿___ algún libro este mes? (leer — tú, present)",ans:"Lees",opts:["Lees","Has leído","Vas a leer","Leyendo"]},
    {q:"Mi autor favorito ___ muchas novelas. (escribir — present, él)",ans:"escribe",opts:["escribe","ha escrito","va a escribir","escribiendo"]},
    {q:"Este fin de semana ___ la feria del libro. (voy a + visitar)",ans:"voy a visitar",opts:["voy a visitar","he visitado","visito","visitando"]},
    {q:"Hoy ___ dos libros. (comprar — yo, pretérito perfecto)",ans:"he comprado",opts:["he comprado","voy a comprar","compro","comprando"]},
  ];
  const el=document.getElementById('ex21-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+(item.opts.indexOf(item.ans))+'" data-hint="→ '+item.ans+'" onclick="chk12(this)" style="padding:8px 16px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:14px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+(i+1)+'. '+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function initClase19(){
  // Exercise A — regular or irregular participle?
  const exA=[
    {q:"hablar",opts:["hablado","hablido","hablato","hablecho"],ans:0,hint:"-AR verb → -ado"},
    {q:"comer",opts:["comado","comido","comecho","comato"],ans:1,hint:"-ER verb → -ido"},
    {q:"hacer",opts:["hacido","hacado","hecho","haceto"],ans:2,hint:"irregular → hecho"},
    {q:"ver",opts:["veido","visto","vido","veado"],ans:1,hint:"irregular → visto"},
    {q:"escribir",opts:["escribido","escrito","escribado","escribecho"],ans:1,hint:"irregular → escrito"},
    {q:"vivir",opts:["vivado","vivecho","vivido","vivto"],ans:2,hint:"-IR verb → -ido"},
    {q:"volver",opts:["volvido","volvado","vueltado","vuelto"],ans:3,hint:"irregular → vuelto"},
    {q:"decir",opts:["decido","dicho","decado","diciado"],ans:1,hint:"irregular → dicho"},
    {q:"romper",opts:["rompido","rompado","roto","rompecho"],ans:2,hint:"irregular → roto"},
    {q:"abrir",opts:["abrido","abierto","abrado","abrecho"],ans:1,hint:"irregular → abierto"},
  ];
  const elA=document.getElementById('ex19-a');
  if(!elA)return;
  exA.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 16px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:17px;font-weight:700;color:#1565C0;margin-bottom:8px">'+(i+1)+'. '+item.q+' →</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    elA.appendChild(d);
  });

  // Exercise B — form the pretérito perfecto
  const exB=[
    {q:"yo / limpiar / la casa",ans:"He limpiado la casa."},
    {q:"tú / ¿ver / la película?",ans:"¿Has visto la película?"},
    {q:"ella / hacer / ejercicio",ans:"Ha hecho ejercicio."},
    {q:"nosotros / comer / en un restaurante",ans:"Hemos comido en un restaurante."},
    {q:"yo / escribir / un email",ans:"He escrito un email."},
    {q:"¿tú / ir / al supermercado?",ans:"¿Has ido al supermercado?"},
    {q:"él / volver / de vacaciones",ans:"Ha vuelto de vacaciones."},
    {q:"yo / me levantar / tarde",ans:"Me he levantado tarde."},
  ];
  const elB=document.getElementById('ex19-b');
  if(!elB)return;
  exB.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap';
    d.innerHTML='<div style="flex:1;min-width:200px"><div style="font-size:13px;color:var(--text3);margin-bottom:4px">'+(i+1)+'.</div><div style="font-size:15px;font-weight:600;color:var(--text)">'+item.q+'</div></div>'
      +'<div style="display:flex;align-items:center;gap:8px">'
      +'<button class="show-ans-btn" style="padding:7px 14px;border-radius:16px;border:1.5px solid var(--green);background:var(--green-light);color:var(--green-dark);font-size:13px;font-weight:600;cursor:pointer">Show answer</button>'
      +'<span class="ans-txt" style="display:none;font-size:15px;font-weight:700;color:var(--green-dark)">'+item.ans+'</span>'
      +'</div>';
    d.querySelector('.show-ans-btn').onclick=function(){
      this.style.display='none';
      this.nextElementSibling.style.display='inline';
    };
    elB.appendChild(d);
  });
}

function initClase18(){
  const items=[
    {q:"You want to say someone looks great today.",opts:["¡Qué guapo más elegante!","¡Estás muy guapo/a!","¡Me gusta tu guapo!","¡Llevas muy guapo!"],ans:1,hint:"Temporary appearance → ESTAR + muy + adj"},
    {q:"You love someone's shoes.",opts:["¡Qué zapatos llevas!","¡Estás con zapatos bonitos!","¡Me gustan mucho tus zapatos!","¡Qué muy bonitos zapatos!"],ans:2,hint:"Me gustan + tus + noun"},
    {q:"You want to exclaim about a beautiful dress.",opts:["¡Qué vestido tan bonito!","¡Muy bonito vestido!","¡Estás vestido bonita!","¡Llevas bonito vestido!"],ans:0,hint:"¡Qué + noun + tan + adj!"},
    {q:"You want to say someone is wearing nice glasses.",opts:["¡Qué gafas más bonitas tienes!","¡Llevas unas gafas muy bonitas!","¡Estás con gafas bonitas!","¡Me encantan llevar tus gafas!"],ans:1,hint:"LLEVAR + unas + noun + muy + adj"},
    {q:"You absolutely love someone's hat.",opts:["¡Me gusta tu gorro!","¡Estás con un gorro bonito!","¡Me encanta tu gorro!","¡Qué gorro más tú tienes!"],ans:2,hint:"Me ENCANTA (stronger than gusta) + tu + noun"},
    {q:"What is the superlative of 'elegante'?",opts:["muy elegante","elegantísimo/a","super elegante","elegantemente"],ans:1,hint:"Add -ísimo/a to the adjective"},
  ];
  const el=document.getElementById('ex18-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 14px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:14px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+(i+1)+'. '+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function initClase17(){
  const items=[
    {q:"una chaqueta ___ (red)",opts:["rojo","roja","rojos","rojas"],ans:1,hint:"chaqueta = fem. sing. → roja"},
    {q:"un gorro ___ (red)",opts:["rojo","roja","rojos","rojas"],ans:0,hint:"gorro = masc. sing. → rojo"},
    {q:"unas sandalias ___ (red)",opts:["rojo","roja","rojos","rojas"],ans:3,hint:"sandalias = fem. pl. → rojas"},
    {q:"unos pantalones ___ (red)",opts:["rojo","roja","rojos","rojas"],ans:2,hint:"pantalones = masc. pl. → rojos"},
    {q:"una camiseta ___ (green)",opts:["verde","verdes","verdeo","verdea"],ans:0,hint:"verde only changes for plural → verde"},
    {q:"unos zapatos ___ (green)",opts:["verde","verdes","verdeo","verdea"],ans:1,hint:"verde + plural → verdes"},
    {q:"un bolso ___ (orange)",opts:["naranja","naranjoa","naranjos","naranjas"],ans:0,hint:"naranja is invariable → naranja"},
    {q:"unas botas ___ (blue)",opts:["azul","azula","azules","azulos"],ans:2,hint:"azul + plural → azules"},
  ];
  const el=document.getElementById('ex17-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+(i+1)+'. '+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function initClase16(){
  const items=[
    {q:"1. ¿___ tocar el piano? — Sí, he estudiado piano muchos años.",opts:["Sabes","Puedes"],ans:0,hint:"learned skill → SABER"},
    {q:"2. ¿___ tocar el piano? — No, ahora no, estoy cansada.",opts:["Sabes","Puedes"],ans:1,hint:"circumstances (too tired) → PODER"},
    {q:"3. ¿No ___ conducir? — No, es que no tengo mis gafas aquí.",opts:["sabes","puedes"],ans:1,hint:"circumstance (no glasses) → PODER"},
    {q:"4. ¿No ___ conducir? — No, no tengo el carné.",opts:["sabes","puedes"],ans:0,hint:"no licence = doesn't know how → SABER"},
    {q:"5. ¿___ hablar español? — Sí, un poco.",opts:["Sabes","Puedes"],ans:0,hint:"language skill → SABER"},
    {q:"6. ¿___ venir mañana? — No, tengo una reunión.",opts:["Sabes","Puedes"],ans:1,hint:"availability → PODER"},
    {q:"7. ¿___ nadar? — No, nunca aprendí.",opts:["Sabes","Puedes"],ans:0,hint:"never learned = skill → SABER"},
    {q:"8. ¿___ ayudarme? — Claro, con mucho gusto.",opts:["Sabes","Puedes"],ans:1,hint:"can you help = ability/willingness → PODER"},
  ];
  const el=document.getElementById('ex16-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function initClase15(){
  const items=[
    {q:"Estoy muy ___. No dormí bien. (tired)",opts:["cansado/a","hambre","nervioso/a","frío"],ans:0,verb:"ESTAR",hint:"ESTAR — feeling/state"},
    {q:"Tengo ___. Voy a comer algo. (hungry)",opts:["hambre","triste","cansado","sed"],ans:0,verb:"TENER",hint:"TENER — physical sensation"},
    {q:"Estoy ___ porque mañana tengo un examen. (nervous)",opts:["nervioso/a","miedo","preocupado/a","sueño"],ans:0,verb:"ESTAR",hint:"ESTAR — emotion"},
    {q:"Tengo mucho ___. ¿Puedo cerrar la ventana? (cold)",opts:["frío","cansado","triste","bien"],ans:0,verb:"TENER",hint:"TENER — physical sensation"},
    {q:"Estoy ___ porque es mi cumpleaños. (happy)",opts:["feliz","hambre","dolor","sueño"],ans:0,verb:"ESTAR",hint:"ESTAR — emotion"},
    {q:"Tengo ___. Voy a beber agua. (thirsty)",opts:["sed","triste","nervioso","bien"],ans:0,verb:"TENER",hint:"TENER — physical sensation"},
    {q:"Estoy ___ porque perdí las llaves. (worried)",opts:["preocupado/a","hambre","sueño","calor"],ans:0,verb:"ESTAR",hint:"ESTAR — emotion"},
    {q:"Tengo mucho ___. Necesito dormir. (sleepy)",opts:["sueño","feliz","frío","triste"],ans:0,verb:"TENER",hint:"TENER — physical sensation"},
  ];
  const el=document.getElementById('ex15-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const col=item.verb==='ESTAR'?'#0F6E56':'#185FA5';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px">'
      +'<span style="font-size:12px;font-weight:700;color:'+col+';background:'+col+'20;padding:2px 10px;border-radius:10px">'+item.verb+'</span>'
      +'<span style="font-size:16px;color:var(--text)">'+(i+1)+'. '+item.q+'</span>'
      +'</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function initClase13(){
  // Exercise A — fill in the room object (answers from the worksheet image)
  const exA=[
    {q:"1. El ___ está detrás de la silla.",ans:"ordenador portátil"},
    {q:"2. Hay un ___ enfrente de la tele.",ans:"sillón"},
    {q:"3. El ___ está a la izquierda de la lámpara.",ans:"reloj"},
    {q:"4. La ventana está entre el ___ y el póster.",ans:"armario"},
    {q:"5. Hay una pelota debajo de la ___.",ans:"silla"},
    {q:"6. Hay una ___ delante de la mesa.",ans:"silla"},
    {q:"7. Las llaves están en la cerradura de la ___.",ans:"puerta"},
    {q:"8. Hay un ___ al lado de la papelera.",ans:"teléfono móvil"},
    {q:"9. El mando a distancia está a la derecha de la ___.",ans:"tele"},
    {q:"10. El ___ está encima de la cama.",ans:"altavoz"},
  ];
  const elA=document.getElementById('ex13-a');
  if(!elA)return;
  exA.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border);display:flex;align-items:center;gap:10px;flex-wrap:wrap';
    d.innerHTML='<div style="font-size:15px;color:var(--text);flex:1;min-width:200px">'+item.q.replace('___','<span style="color:var(--text3)">___</span>')+'</div>'
      +'<div style="display:flex;align-items:center;gap:8px">'
      +'<button class="show-ans-btn" style="padding:7px 14px;border-radius:16px;border:1.5px solid var(--green);background:var(--green-light);color:var(--green-dark);font-size:13px;font-weight:600;cursor:pointer">Show answer</button>'
      +'<span class="ans-txt" style="display:none;font-size:15px;font-weight:700;color:var(--green-dark)">'+item.ans+'</span>'
      +'</div>';
    d.querySelector('.show-ans-btn').onclick=function(){
      this.style.display='none';
      this.nextElementSibling.style.display='inline';
    };
    elA.appendChild(d);
  });

  // Exercise B — hay or estar
  const exB=[
    {q:"¿Qué ___ a la izquierda de la tele?",opts:["hay","está","están"],ans:0,hint:"asking what exists → HAY"},
    {q:"Aquí no ___ (las llaves).",opts:["hay","está","están"],ans:0,hint:"existence → HAY"},
    {q:"Detrás de la cama ___ un armario.",opts:["hay","está","están"],ans:0,hint:"existence, no definite article → HAY"},
    {q:"No ___ en el armario.",opts:["hay","está","están"],ans:2,hint:"specific subject implied → ESTAR (están)"},
    {q:"Enfrente de la cama ___ una mesa.",opts:["hay","está","están"],ans:0,hint:"existence → HAY"},
    {q:"¿Dónde ___ la cama?",opts:["hay","está","están"],ans:1,hint:"location of specific thing → ESTAR"},
    {q:"Las llaves ___ encima de la mesa.",opts:["hay","está","están"],ans:2,hint:"location of specific things (plural) → ESTÁN"},
    {q:"En el cuarto ___ una cama y un armario.",opts:["hay","está","están"],ans:0,hint:"existence → HAY"},
  ];
  const elB=document.getElementById('ex13-b');
  if(!elB)return;
  exB.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+(i+1)+'. '+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    elB.appendChild(d);
  });
}

function initClase12(){
  const items=[
    {q:"México ___ muy bonito.",opts:["es","está","hay"],ans:0,hint:"description → SER"},
    {q:"México ___ en América Central.",opts:["es","está","hay"],ans:1,hint:"location → ESTAR"},
    {q:"En Bolivia ___ muchos lagos.",opts:["es","está","hay"],ans:2,hint:"existence → HAY"},
    {q:"En España no ___ selvas.",opts:["es","está","hay"],ans:2,hint:"existence/absence → HAY"},
    {q:"La Alhambra ___ en Granada.",opts:["es","está","hay"],ans:1,hint:"location → ESTAR"},
    {q:"Los irlandeses ___ muy simpáticos.",opts:["son","están","hay"],ans:0,hint:"description of people → SER"},
    {q:"En Tenerife ___ playas de arena negra.",opts:["es","está","hay"],ans:2,hint:"existence → HAY"},
    {q:"Irlanda ___ un país verde y húmedo.",opts:["es","está","hay"],ans:0,hint:"definition → SER"},
    {q:"¿Dónde ___ el río Shannon?",opts:["es","está","hay"],ans:1,hint:"asking for location → ESTAR"},
    {q:"En el norte de España ___ muchas montañas.",opts:["es","está","hay"],ans:2,hint:"existence → HAY"},
  ];
  const el=document.getElementById('ex12-a');
  if(!el)return;
  items.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btns=item.opts.map((o,j)=>'<button data-idx="'+j+'" data-ans="'+item.ans+'" data-hint="'+item.hint+'" onclick="chk12(this)" style="padding:8px 18px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:15px;font-weight:600;cursor:pointer">'+o+'</button>').join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+(i+1)+'. '+item.q+'</div><div style="display:flex;flex-wrap:wrap;gap:6px">'+btns+'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    el.appendChild(d);
  });
}

function chk12(btn){
  const chosen=parseInt(btn.getAttribute('data-idx'));
  const ans=parseInt(btn.getAttribute('data-ans'));
  const hint=btn.getAttribute('data-hint');
  const row=btn.parentElement;
  row.querySelectorAll('button').forEach(b=>b.disabled=true);
  const fb=row.querySelector('.gg-fb');
  if(chosen===ans){
    btn.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green)';
    if(fb){fb.textContent='✓ '+hint;fb.style.color='var(--green-dark)';}
  } else {
    btn.style.cssText+=';background:#FAECE7;color:#993C1D;border-color:#993C1D';
    if(fb){fb.textContent='✗ '+hint;fb.style.color='#993C1D';}
    row.querySelectorAll('button').forEach(b=>{if(parseInt(b.getAttribute('data-idx'))===ans)b.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green)';});
  }
}

function chk11A(btn){
  const chosen=btn.getAttribute('data-opt');
  const ans=btn.getAttribute('data-ans');
  const row=btn.parentElement;
  row.querySelectorAll('button').forEach(b=>b.disabled=true);
  const fb=row.querySelector('.gg-fb');
  if(chosen===ans){
    btn.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green);font-weight:700';
    if(fb){fb.textContent='✓ Correct!';fb.style.color='var(--green-dark)';}
  } else {
    btn.style.cssText+=';background:#FAECE7;color:#993C1D;border-color:#993C1D';
    if(fb){fb.textContent='✗ Correct answer: '+ans;fb.style.color='#993C1D';}
    row.querySelectorAll('button').forEach(b=>{if(b.getAttribute('data-opt')===ans)b.style.cssText+=';background:var(--green-light);color:var(--green-dark);border-color:var(--green);font-weight:700';});
  }
}

function initClase11(){
  // Exercise A — fill gap with voy a + verb
  const exA=[
    {q:"1. Cristina tiene 72 años. Ella ___ ayudar a sus hijos.",ans:"va a ayudar",opts:["va a ayudar","voy a ir","voy a hacer","van a ser"]},
    {q:"2. Nicolás y Hugo no encuentran trabajo. En el nuevo año ___ aprender alemán.",ans:"van a aprender",opts:["van a aprender","voy a aprender","va a aprender","van a hacer"]},
    {q:"3. En el nuevo año ___ ser mejor persona, más amable.",ans:"voy a intentar ser",opts:["voy a intentar ser","va a intentar ser","voy a hacer","voy a ser mejor"]},
    {q:"4. Andrea y yo ___ ir a la biblioteca todas las tardes.",ans:"vamos a ir",opts:["vamos a ir","voy a ir","van a ir","va a ir"]},
    {q:"5. Alejandro el año que viene ___ viajar durante dos meses.",ans:"va a viajar",opts:["va a viajar","voy a viajar","van a viajar","va a hacer"]},
    {q:"6. Héctor y Paula ___ hacer ejercicio: quieren ir a correr.",ans:"van a hacer",opts:["van a hacer","va a hacer","voy a hacer","van a ir"]},
  ];
  const elA=document.getElementById('ex11-a');
  if(!elA)return;
  exA.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const btnHtml=item.opts.map(o=>{
      return '<button data-opt="'+o+'" data-ans="'+item.ans+'" onclick="chk11A(this)" style="padding:8px 14px;border-radius:20px;border:1.5px solid var(--border2);background:var(--bg);color:var(--text);font-size:14px;cursor:pointer">'+o+'</button>';
    }).join('');
    d.innerHTML='<div style="font-size:16px;margin-bottom:8px;color:var(--text)">'+item.q+'</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:6px">'+btnHtml
      +'<span class="gg-fb" style="font-size:13px;color:var(--text3);margin-top:4px;width:100%"></span></div>';
    elA.appendChild(d);
  });

  // Exercise B — unscramble questions
  const exB=[
    {words:["vas","ir","cuándo","a"],ans:"¿Cuándo vas a ir?"},
    {words:["terminar","cuándo","a","la carrera","vas"],ans:"¿Cuándo vas a terminar la carrera?"},
    {words:["adónde","a","vas","viajar"],ans:"¿Adónde vas a viajar?"},
    {words:["a","empezar","cuándo","vas"],ans:"¿Cuándo vas a empezar?"},
    {words:["a Alemania","a","viajar","vas","cuándo"],ans:"¿Cuándo vas a viajar a Alemania?"},
    {words:["dónde","inglés","aprender","a","vas"],ans:"¿Dónde vas a aprender inglés?"},
    {words:["hacer","vas","a","qué"],ans:"¿Qué vas a hacer?"},
  ];
  const elB=document.getElementById('ex11-b');
  if(!elB)return;
  exB.forEach((item,i)=>{
    const d=document.createElement('div');
    d.style.cssText='background:var(--bg2);border-radius:var(--radius);padding:0.85rem 1.1rem;margin-bottom:8px;border:1.5px solid var(--border)';
    const shuffled=[...item.words].sort(()=>Math.random()-0.5);
    d.innerHTML='<div style="font-size:14px;color:var(--text3);margin-bottom:6px">'+( i+1)+'. Unscramble:</div>'
      +'<div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:8px">'
      +shuffled.map(w=>'<span style="background:#EEEDFE;color:#3C3489;padding:4px 10px;border-radius:10px;font-size:14px;font-weight:600">'+w+'</span>').join('')
      +'</div>'
      +'<div style="font-size:15px;font-weight:700;color:var(--green-dark);display:none" class="unscr-ans">→ '+item.ans+'</div>'
      +'<button class="show-ans-btn" style="padding:6px 14px;border-radius:16px;border:1.5px solid var(--green);background:var(--green-light);color:var(--green-dark);font-size:13px;font-weight:600;cursor:pointer">Show answer</button>';
    d.querySelector('.show-ans-btn').onclick=function(){this.previousElementSibling.style.display='block';this.style.display='none';};
    elB.appendChild(d);
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
  // Build vocab pool from CLASSES each time (works with dynamic loading)
  const allVocab=[];
  window.CLASSES.forEach(c=>c.vocab.forEach(v=>allVocab.push({es:v[0],en:v[1],topic:c.topic})));
  const topics=['All',...new Set(window.CLASSES.map(c=>c.topic))];
  document.getElementById('fc-filters').innerHTML=topics.map(t=>`
    <button class="filter-btn${t===filter?' active':''}" onclick="renderFlashcards('${t.replace(/'/g,"\\'")}')">${t==='All'?'All topics':t}</button>`).join('');
  const items=filter==='All'?allVocab:allVocab.filter(v=>v.topic===filter);
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
