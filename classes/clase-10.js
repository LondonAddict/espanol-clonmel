// Clase 10
window.CLASSES.push({date:"25.11.25",topic:"Ser vs Estar & telling the time",tags:["ser","estar","la hora","¿qué hora es?"],grammar:"SER = permanent (DOCTOR: Descriptions, Occupations, Characteristics, Time, Origin, Relationships). ESTAR = temporary (PLACE: Position, Location, Actions, Conditions, Emotions). Telling the time: ¿Qué hora es? / ¿Tienes hora? — Es la una. Son las dos. Y cuarto, y media, menos cuarto.",vocab:[["Soy","I am (permanent — SER)"],["Estoy","I am (temporary — ESTAR)"],["Es la una","It's one o'clock"],["Son las dos","It's two o'clock"],["Son las doce","It's twelve o'clock"],["Y cinco","Five past"],["Y cuarto","Quarter past"],["Y media","Half past"],["Menos cuarto","Quarter to"],["Menos diez","Ten to"],["En punto","On the dot / exactly"],["De la mañana","In the morning (a.m.)"],["De la tarde","In the afternoon (p.m.)"],["De la noche","At night (p.m.)"],["¿Qué hora es?","What time is it?"],["¿Tienes hora?","Do you have the time?"],["Soy médico/a","I'm a doctor (SER — occupation)"],["Estoy cansado/a","I'm tired (ESTAR — condition)"],["Soy de Irlanda","I'm from Ireland (SER — origin)"],["Estoy en casa","I'm at home (ESTAR — location)"]],phrases:[["¿Qué hora es? — Son las tres.","What time is it? — It's three o'clock."],["Son las tres y cuarto.","It's quarter past three."],["Son las ocho y media.","It's half past eight."],["Son las cinco menos cuarto.","It's quarter to five."],["¿Tienes hora? — Sí, son las diez en punto.","Do you have the time? — Yes, it's ten o'clock exactly."],["Soy irlandesa — Estoy en Irlanda.","I'm Irish (SER) — I'm in Ireland (ESTAR)."],["Es médico pero hoy está enfermo.","He's a doctor (SER) but today he's ill (ESTAR)."]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">SER vs ESTAR — when to use each</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:1.75rem">
  <div style="background:#E1F5EE;border-radius:var(--radius-lg);padding:1.25rem;border:2px solid #1D9E75">
    <div style="font-size:26px;font-weight:900;color:#0F6E56;margin-bottom:4px">SER</div>
    <div style="font-size:14px;color:#0F6E56;margin-bottom:12px;font-weight:600">Permanent · Essence · Identity</div>
    <div style="font-size:15px;color:#085041;line-height:2.2">
      <strong>D</strong>escriptions — Es alto y moreno.<br>
      <strong>O</strong>ccupations — Soy profesora.<br>
      <strong>C</strong>haracteristics — Es inteligente.<br>
      <strong>T</strong>ime — Son las tres.<br>
      <strong>O</strong>rigin — Soy de Irlanda.<br>
      <strong>R</strong>elationships — Es mi amigo.
    </div>
    <div style="margin-top:12px;background:#fff;border-radius:var(--radius);padding:0.75rem;font-size:13px;color:#0F6E56;font-weight:600">+ events, possessions</div>
  </div>
  <div style="background:#FAEEDA;border-radius:var(--radius-lg);padding:1.25rem;border:2px solid #EF9F27">
    <div style="font-size:26px;font-weight:900;color:#633806;margin-bottom:4px">ESTAR</div>
    <div style="font-size:14px;color:#633806;margin-bottom:12px;font-weight:600">Temporary · State · Location</div>
    <div style="font-size:15px;color:#412402;line-height:2.2">
      <strong>P</strong>osition — Está sentado.<br>
      <strong>L</strong>ocation — Está en casa.<br>
      <strong>A</strong>ctions — Está trabajando.<br>
      <strong>C</strong>onditions — Está enfermo.<br>
      <strong>E</strong>motions — Está triste.
    </div>
    <div style="margin-top:12px;background:#fff;border-radius:var(--radius);padding:0.75rem;font-size:13px;color:#633806;font-weight:600">+ idioms, progressive tense</div>
  </div>
</div>

<div class="section-h">Conjugation — SER & ESTAR</div>
<div style="overflow-x:auto;margin-bottom:1.75rem">
<table style="border-collapse:collapse;font-size:16px;width:100%">
<thead><tr style="background:var(--bg2)">
  <th style="padding:10px 14px;border:1px solid var(--border);text-align:left">Pronoun</th>
  <th style="padding:10px 14px;border:1px solid var(--border);text-align:center;color:#0F6E56">SER</th>
  <th style="padding:10px 14px;border:1px solid var(--border);text-align:center;color:#633806">ESTAR</th>
</tr></thead>
<tbody>` +
[['Yo','soy','estoy'],['Tú','eres','estás'],['Él / Ella','es','está'],['Nosotros','somos','estamos'],['Vosotros','sois','estáis'],['Ellos / Ellas','son','están']].map((r,i)=>
`<tr style="${i%2===1?'background:var(--bg2)':''}">
  <td style="padding:10px 14px;border:1px solid var(--border);font-weight:600;color:var(--text2)">${r[0]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;font-size:18px;font-weight:800;color:#0F6E56">${r[1]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;font-size:18px;font-weight:800;color:#633806">${r[2]}</td>
</tr>`).join('') +
`</tbody></table></div>

<div class="section-h">Quick examples — SER or ESTAR?</div>
<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:1.75rem">` +
[['Soy irlandesa.','I\'m Irish.','SER','origin','#E1F5EE','#0F6E56'],
 ['Estoy en Irlanda.','I\'m in Ireland.','ESTAR','location','#FAEEDA','#633806'],
 ['Es médico.','He\'s a doctor.','SER','occupation','#E1F5EE','#0F6E56'],
 ['Está enfermo hoy.','He\'s ill today.','ESTAR','condition','#FAEEDA','#633806'],
 ['Es muy inteligente.','She\'s very intelligent.','SER','characteristic','#E1F5EE','#0F6E56'],
 ['Está muy contenta.','She\'s very happy (right now).','ESTAR','emotion','#FAEEDA','#633806'],
 ['Son las tres.','It\'s three o\'clock.','SER','time','#E1F5EE','#0F6E56'],
 ['El libro está en la mesa.','The book is on the table.','ESTAR','position','#FAEEDA','#633806'],
].map(([es,en,verb,reason,bg,col])=>
`<div style="background:${bg};border-radius:var(--radius);padding:0.85rem 1.1rem;border:1px solid ${col}40;display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap">
  <div>
    <div style="font-size:17px;font-weight:800;color:${col}">${es}</div>
    <div style="font-size:14px;color:${col};opacity:0.85;margin-top:2px">${en}</div>
  </div>
  <div style="text-align:right;flex-shrink:0">
    <div style="font-size:14px;font-weight:800;color:${col}">${verb}</div>
    <div style="font-size:12px;color:${col};opacity:0.7">${reason}</div>
  </div>
</div>`).join('') +
`</div>

<div class="section-h">¿Qué hora es? — Telling the time</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem">
  <div style="background:#E6F1FB;border-radius:var(--radius-lg);padding:1rem;border:2px solid #185FA5;text-align:center">
    <div style="font-size:14px;font-weight:700;color:#185FA5;margin-bottom:4px">Only for 1 o'clock</div>
    <div style="font-size:20px;font-weight:800;color:#0C447C">Es la una.</div>
    <div style="font-size:13px;color:#185FA5;margin-top:4px">It's one o'clock.</div>
  </div>
  <div style="background:#FBEAF0;border-radius:var(--radius-lg);padding:1rem;border:2px solid #993556;text-align:center">
    <div style="font-size:14px;font-weight:700;color:#993556;margin-bottom:4px">For all other hours</div>
    <div style="font-size:20px;font-weight:800;color:#72243E">Son las dos.</div>
    <div style="font-size:13px;color:#993556;margin-top:4px">It's two o'clock.</div>
  </div>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:8px;margin-bottom:1.75rem">` +
[['y cinco','5 past','Son las tres y cinco.'],
 ['y diez','10 past','Son las tres y diez.'],
 ['y cuarto','quarter past','Son las tres y cuarto.'],
 ['y veinte','20 past','Son las tres y veinte.'],
 ['y veinticinco','25 past','Son las tres y veinticinco.'],
 ['y media','half past','Son las tres y media.'],
 ['menos veinticinco','25 to','Son las cuatro menos veinticinco.'],
 ['menos veinte','20 to','Son las cuatro menos veinte.'],
 ['menos cuarto','quarter to','Son las cuatro menos cuarto.'],
 ['menos diez','10 to','Son las cuatro menos diez.'],
 ['menos cinco','5 to','Son las cuatro menos cinco.'],
 ['en punto','exactly / on the dot','Son las tres en punto.'],
].map(([phrase,en,ex])=>
`<div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;border:1.5px solid var(--border)">
  <div style="font-size:16px;font-weight:800;color:var(--green-dark)">${phrase}</div>
  <div style="font-size:13px;color:var(--text2);margin-top:2px">${en}</div>
  <div style="font-size:12px;color:var(--text3);margin-top:5px;font-style:italic">${ex}</div>
</div>`).join('') +
`</div>

<div class="section-h">Time of day</div>
<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:1.75rem">
  <div style="background:#FAEEDA;border-radius:var(--radius-lg);padding:1rem;text-align:center;border:2px solid #EF9F27">
    <div style="font-size:28px;margin-bottom:6px">🌅</div>
    <div style="font-size:17px;font-weight:800;color:#633806">de la mañana</div>
    <div style="font-size:13px;color:#854F0B;margin-top:4px">in the morning (a.m.)</div>
    <div style="font-size:13px;color:#633806;margin-top:6px;font-style:italic">Son las ocho de la mañana.</div>
  </div>
  <div style="background:#E6F1FB;border-radius:var(--radius-lg);padding:1rem;text-align:center;border:2px solid #378ADD">
    <div style="font-size:28px;margin-bottom:6px">☀️</div>
    <div style="font-size:17px;font-weight:800;color:#0C447C">de la tarde</div>
    <div style="font-size:13px;color:#185FA5;margin-top:4px">in the afternoon (p.m.)</div>
    <div style="font-size:13px;color:#0C447C;margin-top:6px;font-style:italic">Son las tres de la tarde.</div>
  </div>
  <div style="background:#EEEDFE;border-radius:var(--radius-lg);padding:1rem;text-align:center;border:2px solid #7F77DD">
    <div style="font-size:28px;margin-bottom:6px">🌙</div>
    <div style="font-size:17px;font-weight:800;color:#26215C">de la noche</div>
    <div style="font-size:13px;color:#3C3489;margin-top:4px">at night (p.m.)</div>
    <div style="font-size:13px;color:#26215C;margin-top:6px;font-style:italic">Son las diez de la noche.</div>
  </div>
</div>

<div class="section-h">Practice — what time is it?</div>
<div id="ex10-time" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:1rem"></div>
<div data-init="clase10"></div>
</div>`};);
