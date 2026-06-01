// Clase 7 — 04.11.25
const clase_07 = {date:"04.11.25",topic:"Ser, tener, numbers & opinions",tags:["ser","tener","números","opinión"],grammar:"SER: permanent identity — soy, eres, es, somos, sois, son. TENER: to have — tengo, tienes, tiene. LLAMARSE: to be called — me llamo, te llamas, se llama. Numbers 0–100. Opinion phrases: Creo que..., Estoy de acuerdo, No sé.",vocab:[["Soy","I am (ser)"],["Eres","You are (ser)"],["Es","He/she is (ser)"],["Somos","We are (ser)"],["Me llamo","My name is"],["Te llamas","Your name is"],["Se llama","His/her name is"],["Creo que sí","I think so"],["Creo que no","I don't think so"],["No sé","I don't know"],["No tengo ni idea","I have no idea"],["No me acuerdo","I don't remember"],["Estoy de acuerdo","I agree"],["No estoy de acuerdo","I disagree"],["¿Seguro?","Sure? / Really?"],["Estoy seguro/a","I am sure"],["No estoy seguro/a","I'm not sure"],["tener éxito","to be successful"],["tener resaca","to have a hangover"],["tener suerte","to be lucky"]],phrases:[["¿Cómo te llamas? — Me llamo María.","What's your name? — My name is María."],["Creo que es de Brasil.","I think he's from Brazil."],["No sé. / No tengo ni idea.","I don't know. / I have no idea."],["Estoy de acuerdo.","I agree."],["No estoy de acuerdo.","I disagree."],["Estoy segura.","I'm sure."],["No me acuerdo.","I don't remember."],["Creo que sí. / Creo que no.","I think so. / I don't think so."]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">Ser / Tener / Llamarse — comparison</div>
<div style="overflow-x:auto;margin-bottom:1.75rem">
<table style="border-collapse:collapse;font-size:16px;width:100%">
<thead><tr style="background:var(--green-light)">
  <th style="padding:10px 14px;text-align:left;border:1px solid var(--border);color:var(--green-dark)">Pronoun</th>
  <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#185FA5">SER (to be)</th>
  <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#993556">TENER (to have)</th>
  <th style="padding:10px 14px;text-align:center;border:1px solid var(--border);color:#854F0B">LLAMARSE (to be called)</th>
</tr></thead>
<tbody>` +
[['(yo)','soy','tengo','me llamo'],
 ['(tú)','eres','tienes','te llamas'],
 ['(él, ella, usted)','es','tiene','se llama'],
 ['(nosotros/as)','somos','tenemos','nos llamamos'],
 ['(vosotros/as)','sois','tenéis','os llamáis'],
 ['(ellos/as, ustedes)','son','tienen','se llaman']].map((r,i)=>
`<tr style="${i%2===1?'background:var(--bg2)':''}">
  <td style="padding:10px 14px;border:1px solid var(--border);font-weight:600;color:var(--text2);font-size:14px">${r[0]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;font-weight:700;color:#185FA5;font-size:17px">${r[1]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;font-weight:700;color:#993556;font-size:17px">${r[2]}</td>
  <td style="padding:10px 14px;border:1px solid var(--border);text-align:center;font-weight:700;color:#854F0B;font-size:17px">${r[3]}</td>
</tr>`).join('') +
`</tbody></table></div>

<div class="section-h">Numbers 0 – 100</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:8px;margin-bottom:1.75rem">` +
[['0','cero'],['1','uno'],['2','dos'],['3','tres'],['4','cuatro'],['5','cinco'],['6','seis'],['7','siete'],['8','ocho'],['9','nueve'],
 ['10','diez'],['11','once'],['12','doce'],['13','trece'],['14','catorce'],['15','quince'],['16','dieciséis'],['17','diecisiete'],['18','dieciocho'],['19','diecinueve'],
 ['20','veinte'],['21','veintiuno'],['22','veintidós'],['23','veintitrés'],['24','veinticuatro'],['25','veinticinco'],['26','veintiséis'],['27','veintisiete'],['28','veintiocho'],['29','veintinueve'],
 ['30','treinta'],['31','treinta y uno'],['40','cuarenta'],['50','cincuenta'],['60','sesenta'],['70','setenta'],['80','ochenta'],['90','noventa'],['99','noventa y nueve'],['100','cien']
].map(([n,es])=>
`<div style="background:var(--bg2);border-radius:var(--radius);padding:0.7rem;text-align:center;border:1.5px solid var(--border)"><div style="font-size:20px;font-weight:800;color:var(--green-dark)">${n}</div><div style="font-size:13px;color:var(--text2);margin-top:2px">${es}</div></div>`).join('') +
`</div>
<div style="background:var(--green-light);border-radius:var(--radius);padding:1rem 1.25rem;font-size:15px;color:var(--green-dark);margin-bottom:1.75rem;line-height:1.8">
  <strong>Pattern:</strong> 31–99 = tens + <strong>y</strong> + units<br>
  treinta <strong>y</strong> uno (31) · cuarenta <strong>y</strong> dos (42) · noventa <strong>y</strong> nueve (99)
</div>

<div class="section-h">Expressing opinions</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:1.75rem">
  <div style="background:#E6F1FB;border-radius:var(--radius-lg);padding:1.1rem 1.25rem">
    <div style="font-size:14px;font-weight:700;color:#0C447C;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em">Saying what you think</div>
    <div style="font-size:16px;line-height:2.2;color:#0C447C">
      <strong>Creo que...</strong> — I think that...<br>
      <strong>Creo que sí.</strong> — I think so.<br>
      <strong>Creo que no.</strong> — I don't think so.<br>
      <strong>Creo que es de Brasil.</strong> — I think he's from Brazil.
    </div>
  </div>
  <div style="background:#EAF3DE;border-radius:var(--radius-lg);padding:1.1rem 1.25rem">
    <div style="font-size:14px;font-weight:700;color:#27500A;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em">Agreeing & disagreeing</div>
    <div style="font-size:16px;line-height:2.2;color:#27500A">
      <strong>Estoy de acuerdo.</strong> — I agree.<br>
      <strong>No estoy de acuerdo.</strong> — I disagree.<br>
      <strong>Estoy seguro/a.</strong> — I'm sure.<br>
      <strong>No estoy seguro/a.</strong> — I'm not sure.
    </div>
  </div>
  <div style="background:#FAEEDA;border-radius:var(--radius-lg);padding:1.1rem 1.25rem">
    <div style="font-size:14px;font-weight:700;color:#633806;margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em">When you don't know</div>
    <div style="font-size:16px;line-height:2.2;color:#633806">
      <strong>No sé.</strong> — I don't know.<br>
      <strong>No tengo ni idea.</strong> — I have no idea.<br>
      <strong>No me acuerdo.</strong> — I don't remember.<br>
      <strong>¿Seguro/a?</strong> — Are you sure?
    </div>
  </div>
</div>

<div class="section-h">More tener expressions</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:8px;margin-bottom:1rem">` +
[['tener que + inf','to have to do...','e.g. Tengo que trabajar'],
 ['tener __ años','to be __ years old','Tengo 36 años'],
 ['tener hambre','to be hungry','Tengo hambre'],
 ['tener sed','to be thirsty','Tengo sed'],
 ['tener sueño','to be sleepy','Tengo sueño'],
 ['tener frío','to be cold','Tengo frío'],
 ['tener calor','to be hot','Tengo calor'],
 ['tener miedo','to be scared','Tengo miedo'],
 ['tener prisa','to be in a hurry','Tengo prisa'],
 ['tener razón','to be right','Tienes razón'],
 ['tener suerte','to be lucky','¡Qué suerte tienes!'],
 ['tener éxito','to be successful','Tiene mucho éxito'],
 ['tener resaca','to have a hangover','Tengo resaca'],
 ['tener ganas de...','to feel like...','Tengo ganas de dormir'],
].map(([es,en,ex])=>
`<div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;border:1.5px solid var(--border)"><div style="font-weight:700;color:var(--green-dark);font-size:15px">${es}</div><div style="color:var(--text);font-size:14px;margin-top:2px">${en}</div><div style="color:var(--text3);font-size:12px;margin-top:4px;font-style:italic">${ex}</div></div>`).join('') +
`</div>
</div>`};
