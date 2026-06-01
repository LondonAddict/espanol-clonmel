// Clase 8 — 11.11.25
const clase_08 = {date:"11.11.25",topic:"Regular verbs & mucho/muy",tags:["presente","verbos regulares","mucho/muy","frecuencia"],grammar:"Regular verbs: remove -ar/-er/-ir and add endings. MUCHO agrees with the noun (mucho dinero, mucha hambre, muchos amigos, muchas gracias). MUY is for adjectives and adverbs — it never changes (muy bien, muy grande).",vocab:[["Hablo","I speak (-AR)"],["Hablas","You speak"],["Habla","He/she speaks"],["Hablamos","We speak"],["Como","I eat (-ER)"],["Comes","You eat"],["Come","He/she eats"],["Vivo","I live (-IR)"],["Vives","You live"],["Vive","He/she lives"],["Mucho dinero","A lot of money (masc.)"],["Mucha hambre","Very hungry (fem.)"],["Muchos amigos","Many friends (masc. pl.)"],["¡Muchas gracias!","Thank you very much! (fem. pl.)"],["Muy bien","Very well"],["Muy grande","Very big"],["Siempre","Always"],["Todos los días","Every day"],["Cada día","Every day"],["A menudo","Often"],["Normalmente","Usually"],["A veces","Sometimes"],["De vez en cuando","From time to time"],["Nunca","Never"]],phrases:[["¿Dónde trabajas?","Where do you work?"],["Trabajo en el hospital.","I work in the hospital."],["Tengo mucho trabajo.","I have a lot of work."],["Tengo mucha hambre.","I'm very hungry."],["A veces voy al gimnasio.","I sometimes go to the gym."],["Nunca como carne.","I never eat meat."],["Dos veces por semana.","Twice a week."],["Leer es vivir dos veces.","To read is to live twice."]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">Mucho / Mucha / Muchos / Muchas</div>
<div style="background:var(--bg2);border-radius:var(--radius-lg);padding:1.25rem;margin-bottom:1.75rem">
  <div style="font-size:15px;color:var(--text2);margin-bottom:1rem">MUCHO agrees with the noun it describes — like an adjective.</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
    <div style="background:#E6F1FB;border-radius:var(--radius);padding:1rem;text-align:center">
      <div style="font-size:13px;font-weight:700;color:#185FA5;margin-bottom:6px">MASCULINO</div>
      <div style="font-size:18px;font-weight:800;color:#0C447C">mucho</div>
      <div style="font-size:14px;color:#185FA5;margin-top:4px">Tengo mucho dinero.</div>
      <div style="border-top:1px solid #B5D4F4;margin:10px 0"></div>
      <div style="font-size:18px;font-weight:800;color:#0C447C">muchos</div>
      <div style="font-size:14px;color:#185FA5;margin-top:4px">Tengo muchos amigos.</div>
    </div>
    <div style="background:#FBEAF0;border-radius:var(--radius);padding:1rem;text-align:center">
      <div style="font-size:13px;font-weight:700;color:#993556;margin-bottom:6px">FEMENINO</div>
      <div style="font-size:18px;font-weight:800;color:#72243E">mucha</div>
      <div style="font-size:14px;color:#993556;margin-top:4px">Tengo mucha hambre.</div>
      <div style="border-top:1px solid #F4C0D1;margin:10px 0"></div>
      <div style="font-size:18px;font-weight:800;color:#72243E">muchas</div>
      <div style="font-size:14px;color:#993556;margin-top:4px">¡Muchas gracias!</div>
    </div>
  </div>
  <div style="margin-top:1rem;background:var(--green-light);border-radius:var(--radius);padding:0.85rem;font-size:15px;color:var(--green-dark)">
    <strong>MUY</strong> = very — used with adjectives & adverbs, never changes!<br>
    muy bien · muy grande · muy bonita · muy tarde
  </div>
</div>

<div class="section-h">Regular verbs — present tense</div>
<div style="overflow-x:auto;margin-bottom:1.75rem">
<table style="border-collapse:collapse;font-size:16px;width:100%">
<thead>
  <tr style="background:var(--green-light)">
    <th style="padding:10px 14px;text-align:left;border:1px solid var(--border);color:var(--green-dark)">Pronoun</th>
    <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#185FA5">-AR<br><span style="font-weight:400;font-size:14px">hablar (to speak)</span></th>
    <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#993556">-ER<br><span style="font-weight:400;font-size:14px">comer (to eat)</span></th>
    <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#854F0B">-IR<br><span style="font-weight:400;font-size:14px">vivir (to live)</span></th>
  </tr>
</thead>
<tbody>` +
[['Yo','habl-<strong>o</strong>','com-<strong>o</strong>','viv-<strong>o</strong>'],
 ['Tú','habl-<strong>as</strong>','com-<strong>es</strong>','viv-<strong>es</strong>'],
 ['Él / Ella','habl-<strong>a</strong>','com-<strong>e</strong>','viv-<strong>e</strong>'],
 ['Nosotros/-as','habl-<strong>amos</strong>','com-<strong>emos</strong>','viv-<strong>imos</strong>'],
 ['Vosotros/-as','habl-<strong>áis</strong>','com-<strong>éis</strong>','viv-<strong>ís</strong>'],
 ['Ellos / Ellas','habl-<strong>an</strong>','com-<strong>en</strong>','viv-<strong>en</strong>'],
].map((r,i)=>
`<tr style="${i%2===1?'background:var(--bg2)':''}">
  <td style="padding:10px 14px;border:1px solid var(--border);font-weight:600;color:var(--text2)">${r[0]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;color:#185FA5;font-size:17px">${r[1]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;color:#993556;font-size:17px">${r[2]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;color:#854F0B;font-size:17px">${r[3]}</td>
</tr>`).join('') +
`</tbody></table></div>

<div class="section-h">Useful verbs to practise</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;margin-bottom:1.75rem">` +
[['hablar','to speak','-AR'],['trabajar','to work','-AR'],['cocinar','to cook','-AR'],['limpiar','to clean','-AR'],['caminar','to walk','-AR'],['escuchar','to listen','-AR'],['comprar','to buy','-AR'],['comer','to eat','-ER'],['leer','to read','-ER'],['beber','to drink','-ER'],['vivir','to live','-IR'],['escribir','to write','-IR'],['dormir*','to sleep','-IR*'],['abrir','to open','-IR']].map(([es,en,type])=>{
  const col=type.startsWith('-AR')?'#185FA5':type.startsWith('-ER')?'#993556':'#854F0B';
  const bg=type.startsWith('-AR')?'#E6F1FB':type.startsWith('-ER')?'#FBEAF0':'#FAEEDA';
  return `<div style="background:${bg};border-radius:var(--radius);padding:0.85rem;border:1px solid ${col}40">
    <div style="font-size:15px;font-weight:700;color:${col}">${es}</div>
    <div style="font-size:13px;color:var(--text2);margin-top:2px">${en}</div>
    <div style="font-size:11px;font-weight:700;color:${col};margin-top:4px;opacity:0.7">${type}</div>
  </div>`;}).join('') +
`</div>

<div class="section-h">Adverbs of frequency</div>
<div style="display:flex;flex-direction:column;gap:0;border-radius:var(--radius-lg);overflow:hidden;border:1px solid var(--border);margin-bottom:1.75rem">` +
[['Siempre','Always','100%','#0F6E56'],
 ['Todos los días / Cada día','Every day','90%','#1D9E75'],
 ['A menudo','Often','70%','#5DCAA5'],
 ['Normalmente','Usually','60%','#9FE1CB'],
 ['A veces','Sometimes','40%','#FAEEDA'],
 ['De vez en cuando','From time to time','20%','#FAC775'],
 ['Nunca','Never','0%','#993C1D'],
].map(([es,en,pct,col],i)=>
`<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg${i%2===1?'2':''});border-bottom:1px solid var(--border)">
  <div style="width:48px;height:48px;border-radius:50%;background:${col};display:flex;align-items:center;justify-content:center;color:#fff;font-size:12px;font-weight:700;flex-shrink:0">${pct}</div>
  <div>
    <div style="font-size:16px;font-weight:700;color:var(--text)">${es}</div>
    <div style="font-size:14px;color:var(--text2)">${en}</div>
  </div>
</div>`).join('') +
`</div>

<div class="section-h">Online exercises</div>
<a href="https://www.spanishunicorn.com/verbos-regulares-en-espanol-ejercicios/" target="_blank" style="display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--radius);background:var(--green-light);color:var(--green-dark);font-size:16px;font-weight:700;text-decoration:none;border:1.5px solid var(--green)">Practice regular verbs → SpanishUnicorn</a>
</div>`};
