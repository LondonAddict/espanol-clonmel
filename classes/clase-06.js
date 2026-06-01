// Clase 6 — 28.10.25
const clase_06 = {date:"28.10.25",topic:"Tener, articles & Día de los Muertos",tags:["tener","un/una","Día de Muertos","r/rr"],grammar:"TENER conjugation: tengo, tienes, tiene, tenemos, tenéis, tienen. Indefinite articles: un/una (a/an), unos/unas (some). R/RR: strong rolling R at the start of words and after L, N, S. Double RR is always rolled.",vocab:[["Tengo","I have"],["Tienes","You have"],["Tiene","He/she has"],["Tenemos","We have"],["Tenéis","You all have"],["Tienen","They have"],["Un gato","A cat (masc.)"],["Una casa","A house (fem.)"],["Unos libros","Some books"],["Unas flores","Some flowers"],["Tengo hambre","I'm hungry"],["Tengo sueño","I'm sleepy"],["Tengo razón","I'm right"],["Tengo sed","I'm thirsty"],["Tengo frío","I'm cold"],["Tengo calor","I'm hot"],["No tengo tiempo","I don't have time"],["El pan de muerto","Bread of the dead"],["La calavera","The skull"],["El altar","The altar"],["La vela","The candle"],["El cempasúchil","Marigold flower"],["La tumba","The tomb/grave"],["El esqueleto","The skeleton"],["La catrina","La Catrina (decorated skull figure)"]],phrases:[["¿Tienes un gato?","Do you have a cat?"],["Sí, tengo un gato.","Yes, I have a cat."],["No, no tengo un gato.","No, I don't have a cat."],["Yo también. / Yo tampoco.","Me too. / Me neither."],["Tengo hambre.","I'm hungry."],["No tengo tiempo.","I don't have time."],["¿Tenéis hijos?","Do you (all) have children?"],["No tengo gatos pero María tiene un gato.","I don't have cats but María has a cat."]],extra:`<div style="margin-top:1.5rem">

<div style="background:linear-gradient(135deg,#1a0a2e 0%,#3d0066 50%,#1a0a2e 100%);border-radius:var(--radius-lg);padding:1.5rem;margin-bottom:1.5rem;text-align:center">
  <div style="font-size:22px;font-weight:700;color:#ff9f00;margin-bottom:4px">💀 Día de los Muertos 💀</div>
  <div style="font-size:13px;color:#e0b0ff;opacity:0.9">28 October — 2 November · Mexican celebration of life and remembrance</div>
</div>

<div class="section-h">Vocabulary — Día de los Muertos</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:8px;margin-bottom:1.5rem">` +
[['🍞','El pan de muerto','bread of the dead'],['🕯️','La vela','candle'],['💀','La calavera','skull'],['⛪','El altar','altar'],['🌸','El cempasúchil','marigold'],['⚰️','La tumba','tomb / grave'],['💧','El agua','water'],['🎸','La guitarra','guitar'],['☩','La cruz','cross'],['🎵','La música','music'],['💃','La catrina','la catrina'],['🌮','Los tamales','tamales'],['🦜','El quetzal','quetzal bird'],['🦴','El esqueleto','skeleton'],['🎊','El papel picado','papel picado'],['🎺','Los mariachis','mariachis'],['🪦','La muerte','death'],['🖼️','El retrato del difunto','portrait of the deceased'],['🐕','El xoloitzcuintle','Mexican hairless dog'],['🧂','La sal','salt'],['🪔','El incienso','incense (copal)'],['🎭','El alebrije','alebrije (spirit animal)']].map(([em,es,en])=>
`<div style="background:#2a0845;border-radius:var(--radius);padding:0.75rem;text-align:center;border:0.5px solid #6b0099">
  <div style="font-size:24px;margin-bottom:4px">${em}</div>
  <div style="font-size:12px;font-weight:600;color:#ff9f00">${es}</div>
  <div style="font-size:11px;color:#e0b0ff;margin-top:2px">${en}</div>
</div>`).join('') +
`</div>

<div class="section-h">R / RR pronunciation</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">Single R — soft</div>
    <div style="color:var(--text2);margin-bottom:8px">Between vowels: light tap of tongue</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">` +
['pero (but)','cara (face)','loro (parrot)','caro (expensive)'].map(w=>
`<span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">${w}</span>`).join('') +
`    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">RR / R at start — strong roll</div>
    <div style="color:var(--text2);margin-bottom:8px">At word start or after L, N, S → always rolled</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">` +
['perro (dog)','carro (car)','rojo (red)','arroz (rice)','Enrique','Israel'].map(w=>
`<span style="background:#FAEEDA;color:#633806;border-radius:10px;padding:2px 8px;font-size:12px">${w}</span>`).join('') +
`    </div>
  </div>
</div>
<div style="margin-bottom:1.5rem">
  <a href="https://youtu.be/_kk7AQybJCk" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:8px 14px;border-radius:20px;background:var(--green-light);color:var(--green-dark);font-size:13px;text-decoration:none;border:0.5px solid var(--green)">▶ Watch: How to roll the R (video)</a>
</div>

<div class="section-h">Articles — definite & indefinite</div>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="border-collapse:collapse;font-size:13px;width:100%;text-align:center">
<thead><tr style="background:var(--bg2)">
  <th style="padding:8px 12px;border:0.5px solid var(--border)"></th>
  <th colspan="2" style="padding:8px 12px;border:0.5px solid var(--border);color:#185FA5">Masculino</th>
  <th colspan="2" style="padding:8px 12px;border:0.5px solid var(--border);color:#993556">Femenino</th>
</tr>
<tr style="background:var(--bg2)">
  <th style="padding:6px 12px;border:0.5px solid var(--border)"></th>
  <th style="padding:6px 12px;border:0.5px solid var(--border);color:#185FA5;font-weight:400">Singular</th>
  <th style="padding:6px 12px;border:0.5px solid var(--border);color:#185FA5;font-weight:400">Plural</th>
  <th style="padding:6px 12px;border:0.5px solid var(--border);color:#993556;font-weight:400">Singular</th>
  <th style="padding:6px 12px;border:0.5px solid var(--border);color:#993556;font-weight:400">Plural</th>
</tr></thead>
<tbody>
<tr>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-weight:500;background:var(--bg2)">Definite (the)</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#185FA5">el</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#185FA5">los</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#993556">la</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#993556">las</td>
</tr>
<tr>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-weight:500;background:var(--bg2)">Indefinite (a/some)</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#185FA5">un</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#185FA5">unos</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#993556">una</td>
  <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:18px;font-weight:700;color:#993556">unas</td>
</tr>
</tbody></table></div>

<div class="section-h">Verb TENER — to have</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:1.5rem">` +
[['Yo','TENGO','I have'],['Tú','TIENES','You have'],['Él / ella','TIENE','He / she has'],['Nosotros','TENEMOS','We have'],['Vosotros','TENÉIS','You all have'],['Ellos / ellas','TIENEN','They have']].map(([pro,verb,en],i)=>
`<div style="background:${i%2===0?'var(--bg2)':'var(--bg)'};border:0.5px solid var(--border);border-radius:var(--radius);padding:0.75rem;font-size:13px">
  <div style="font-size:10px;color:var(--text3);margin-bottom:2px">${pro}</div>
  <div style="font-size:17px;font-weight:700;color:var(--green-dark)">${verb}</div>
  <div style="font-size:12px;color:var(--text2)">${en}</div>
</div>`).join('') +
`</div>

<div class="section-h">Tener expressions</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:6px;margin-bottom:1.5rem">` +
[['tengo hambre','I\'m hungry 🍽️'],['tengo sed','I\'m thirsty 💧'],['tengo sueño','I\'m sleepy 😴'],['tengo frío','I\'m cold 🥶'],['tengo calor','I\'m hot 🥵'],['tengo razón','I\'m right ✓'],['tengo miedo','I\'m scared 😨'],['tengo prisa','I\'m in a hurry 🏃'],['no tengo tiempo','I don\'t have time ⏰'],['tengo ganas de...','I feel like... / I want to...']].map(([es,en])=>
`<div style="background:var(--bg2);border-radius:var(--radius);padding:0.6rem 0.85rem;font-size:13px"><div style="font-weight:500;color:var(--green-dark)">Tengo...</div><div style="color:var(--text)">${es.replace('tengo ','')}</div><div style="font-size:11px;color:var(--text3);margin-top:2px">${en}</div></div>`).join('') +
`</div>

<div class="section-h">Practice — ¿Tienes...?</div>
<div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;font-size:13px;line-height:2;margin-bottom:1.5rem">
  ¿<strong>Tienes</strong> un gato? — Sí, <strong>tengo</strong> un gato. / No, no <strong>tengo</strong> un gato.<br>
  ¿Y tú? — Yo <strong>también</strong>. ✓ / Yo <strong>tampoco</strong>. ✗<br>
  ¿<strong>Tenéis</strong> gatos? — Sí, <strong>tenemos</strong> gatos. / No, no <strong>tenemos</strong> gatos.<br>
  Yo no <strong>tengo</strong> gatos pero María <strong>tiene</strong> un gato.
</div>

<div class="section-h">Online exercises — verb tener</div>
<div style="display:flex;flex-direction:column;gap:6px;margin-bottom:1rem">` +
[['1. Present tense — choose','https://aprenderespanol.org/ejercicios/verbos/presente-tener.htm'],
 ['2. Pronouns practice','https://aprenderespanol.org/ejercicios/verbos/tener/presente-pronombres.htm'],
 ['3. All forms — choose','https://aprenderespanol.org/ejercicios/verbos/tener/presente-formas.html'],
 ['4. Indicative forms','https://aprenderespanol.org/ejercicios/verbos/tener/presente-indicativo-formas.htm'],
 ['5. Write the forms','https://aprenderespanol.org/ejercicios/verbos/tener/presente-formas-escribir.htm'],
 ['6. Write — indicative','https://aprenderespanol.org/ejercicios/verbos/tener/presente-indicativo-escribir.htm'],
 ['7. Tener / no tener','https://aprenderespanol.org/ejercicios/verbos/tener/tener-no-tener.htm'],
 ['8. Negative forms','https://aprenderespanol.org/ejercicios/verbos/tener/presente-formas-negativas.html'],
 ['9. Write sentences','https://aprenderespanol.org/ejercicios/verbos/tener/presente-escribe.html'],
 ['10. Write — indicative 3','https://aprenderespanol.org/ejercicios/verbos/tener/presente-indicativo-escribir-3.htm'],
 ['11. Write full sentences','https://aprenderespanol.org/ejercicios/verbos/tener/presente-escribe-oraciones.htm'],
].map(([label,url])=>
`<a href="${url}" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:var(--radius);background:var(--bg2);color:var(--text);font-size:13px;text-decoration:none;border:0.5px solid var(--border2)">${label} →</a>`).join('') +
`</div>
</div>`};
