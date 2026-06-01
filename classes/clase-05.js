// Clase 5 — 21.10.25
const clase_05 = {date:"21.10.25",topic:"Nationalities, jobs & numbers",tags:["nacionalidades","profesiones","números","gue/gui","ü"],grammar:"Nationalities change by gender: irlandés/irlandesa, español/española. Professions follow patterns: -o/-a (camarero/a), consonant +a (profesor/a), -ista same for both (taxista). GUE/GUI: the U is silent. Ü (with two dots) IS pronounced — pingüino, cigüeña.",vocab:[["Encantado/a","Nice to meet you (m/f)"],["Mucho gusto","Nice to meet you"],["Un placer","A pleasure"],["Soy irlandés/a","I'm Irish"],["Soy español/a","I'm Spanish"],["Soy francés/francesa","I'm French"],["Soy alemán/alemana","I'm German"],["Soy italiano/a","I'm Italian"],["Soy polaco/a","I'm Polish"],["¿De dónde eres?","Where are you from?"],["¿A qué te dedicas?","What do you do?"],["Soy camarero/a","I'm a waiter/waitress"],["Soy profesor/a","I'm a teacher"],["Soy taxista","I'm a taxi driver (m/f same)"],["Soy cantante","I'm a singer (m/f same)"],["Soy estudiante","I'm a student"],["cero, uno, dos","0, 1, 2"],["tres, cuatro, cinco","3, 4, 5"],["seis, siete, ocho","6, 7, 8"],["nueve, diez, once, doce","9, 10, 11, 12"]],phrases:[["Soy de Irlanda. Soy irlandesa.","I'm from Ireland. I'm Irish."],["Encantada. / Mucho gusto.","Nice to meet you."],["¿A qué te dedicas? — Soy profesora.","What do you do? — I'm a teacher."],["¿Cuántos años tienes? — Tengo 36 años.","How old are you? — I'm 36."],["Soy de España. Soy español.","I'm from Spain. I'm Spanish."],["Soy taxista.","I'm a taxi driver. (same for m/f)"]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">Nice to meet you</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;margin-bottom:1.5rem">
` + [['Encantado/a','Nice to meet you'],['Mucho gusto','Nice to meet you'],['Un placer','A pleasure']].map(([es,en])=>
`<div style="background:var(--green-light);border-radius:var(--radius);padding:0.85rem;text-align:center"><div style="font-size:15px;font-weight:600;color:var(--green-dark)">${es}</div><div style="font-size:12px;color:var(--green-dark);margin-top:3px;opacity:0.8">${en}</div></div>`).join('') +
`</div>

<div class="section-h">Pronunciation: GUE / GUI / Ü</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:8px;margin-bottom:1.5rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">GUE / GUI — U is silent</div>
    <div style="color:var(--text2);margin-bottom:8px">The U disappears — just read the G + vowel</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">
      <span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">guerra</span>
      <span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">guitarra</span>
      <span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">guía</span>
      <span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">Miguel</span>
    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">Ü — U WITH dots IS pronounced</div>
    <div style="color:var(--text2);margin-bottom:8px">The two dots (diéresis) mean you DO say the U</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">
      <span style="background:#FAEEDA;color:#633806;border-radius:10px;padding:2px 8px;font-size:12px">pin<strong>gü</strong>ino 🐧</span>
      <span style="background:#FAEEDA;color:#633806;border-radius:10px;padding:2px 8px;font-size:12px">ci<strong>gü</strong>eña 🦢</span>
    </div>
  </div>
</div>

<div class="section-h">Countries & nationalities</div>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="border-collapse:collapse;font-size:12px;width:100%">
<thead><tr style="background:var(--bg2)">
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border)">País</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#185FA5">Masculino</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#993556">Femenino</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border)">País</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#185FA5">Masculino</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#993556">Femenino</th>
</tr></thead>
<tbody>` +
[['Argentina','argentino','argentina','Australia','australiano','australiana'],
 ['Bolivia','boliviano','boliviana','Brasil','brasileño','brasileña'],
 ['Chile','chileno','chilena','China','chino','china'],
 ['Colombia','colombiano','colombiana','Cuba','cubano','cubana'],
 ['Egipto','egipcio','egipcia','Francia','francés','francesa'],
 ['Alemania','alemán','alemana','España','español','española'],
 ['Inglaterra','inglés','inglesa','Italia','italiano','italiana'],
 ['Japón','japonés','japonesa','México','mexicano','mexicana'],
 ['Polonia','polaco','polaca','Portugal','portugués','portuguesa'],
 ['Rusia','ruso','rusa','Suecia','sueco','sueca'],
 ['Irlanda','irlandés','irlandesa','Bélgica','belga','belga'],
 ['Canadá','canadiense','canadiense','Ucrania','ucraniano','ucraniana'],
].map((r,i)=>`<tr style="${i%2===1?'background:var(--bg2)':''}">
  <td style="padding:5px 10px;border:0.5px solid var(--border);font-weight:500">${r[0]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#185FA5">${r[1]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#993556">${r[2]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);font-weight:500">${r[3]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#185FA5">${r[4]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#993556">${r[5]}</td>
</tr>`).join('') +
`</tbody></table></div>

<div class="section-h">Professions — gender patterns</div>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="border-collapse:collapse;font-size:13px;width:100%">
<thead><tr style="background:var(--bg2)">
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border)">Pattern</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#185FA5">Masculino</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border);color:#993556">Femenino</th>
  <th style="padding:7px 10px;text-align:left;border:0.5px solid var(--border)">English</th>
</tr></thead>
<tbody>` +
[['Ends -o → -a','camarero','camarera','waiter/waitress'],
 ['Ends -o → -a','médico','médica','doctor'],
 ['Ends -e → -a','jefe','jefa','boss'],
 ['Consonant → +a','profesor','profesora','teacher'],
 ['Consonant → +a','director','directora','director'],
 ['-ista = same','taxista','taxista','taxi driver'],
 ['-ista = same','periodista','periodista','journalist'],
 ['-ante = same','cantante','cantante','singer'],
 ['Special','actor','actriz','actor/actress'],
 ['Special','rey','reina','king/queen'],
 ['Different','hombre','mujer','man/woman'],
].map((r,i)=>`<tr style="${i%2===1?'background:var(--bg2)':''}">
  <td style="padding:5px 10px;border:0.5px solid var(--border);font-size:11px;color:var(--text3)">${r[0]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#185FA5;font-weight:500">${r[1]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:#993556;font-weight:500">${r[2]}</td>
  <td style="padding:5px 10px;border:0.5px solid var(--border);color:var(--text2)">${r[3]}</td>
</tr>`).join('') +
`</tbody></table></div>

<div class="section-h">Asking about jobs</div>
<div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;font-size:13px;line-height:2;margin-bottom:1.5rem">
  ¿<strong>A qué te dedicas?</strong> <span style="color:var(--text3)">— What do you do?</span><br>
  ¿<strong>En qué trabajas?</strong> <span style="color:var(--text3)">— What do you work as?</span><br>
  Soy <strong>profesora</strong>. <span style="color:var(--text3)">— I'm a teacher.</span><br>
  Trabajo de <strong>camarero</strong>. <span style="color:var(--text3)">— I work as a waiter.</span>
</div>

<div class="section-h">Numbers 0–12</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(80px,1fr));gap:6px;margin-bottom:1.5rem">` +
[['0','cero'],['1','uno'],['2','dos'],['3','tres'],['4','cuatro'],['5','cinco'],['6','seis'],['7','siete'],['8','ocho'],['9','nueve'],['10','diez'],['11','once'],['12','doce']].map(([n,es])=>
`<div style="background:var(--bg2);border-radius:var(--radius);padding:0.75rem;text-align:center;border:0.5px solid var(--border)"><div style="font-size:22px;font-weight:700;color:var(--green-dark)">${n}</div><div style="font-size:12px;color:var(--text2);margin-top:2px">${es}</div></div>`).join('') +
`</div>

<div class="section-h">Practice — nationalities quiz</div>
<div style="font-size:12px;color:var(--text2);margin-bottom:0.75rem">What is the nationality? Choose masculine or feminine.</div>
<div id="ex5-nat" style="margin-bottom:1rem"></div>
<div data-init="clase5"></div>
</div>`};
