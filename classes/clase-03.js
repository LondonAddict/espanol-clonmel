// Clase 3
window.CLASSES.push({date:"07.10.25",topic:"Me gusta & gender",tags:["me gusta","género","artículos","comida","países"],grammar:"ME GUSTA + article + noun (I like pizza = Me gusta la pizza). With verbs, always use GUSTA: Me gusta trabajar. Gender: nouns ending in -O are masculine → EL. Nouns ending in -A are feminine → LA. QU is always pronounced [k]: qué, quién, quiero.",vocab:[["Soy de Irlanda","I'm from Ireland"],["Soy de España","I'm from Spain"],["Soy de Polonia","I'm from Poland"],["Soy de Ucrania","I'm from Ukraine"],["Me gusta","I like (sing.)"],["No me gusta","I don't like"],["¿Te gusta?","Do you like?"],["El café","Coffee (masc.)"],["El fútbol","Football (masc.)"],["El teatro","Theatre (masc.)"],["El chocolate","Chocolate (masc.)"],["El aguacate","Avocado (masc.)"],["El jamón","Ham (masc.)"],["La pizza","Pizza (fem.)"],["La música","Music (fem.)"],["La playa","Beach (fem.)"],["La cerveza","Beer (fem.)"],["La fruta","Fruit (fem.)"],["La naturaleza","Nature (fem.)"],["Comprar","To buy"]],phrases:[["Soy de Irlanda.","I'm from Ireland."],["Me gusta el chocolate.","I like chocolate."],["No me gusta limpiar.","I don't like cleaning."],["¿Te gusta el fútbol?","Do you like football?"],["Sí, me gusta el fútbol.","Yes, I like football."],["No, no me gusta el chocolate.","No, I don't like chocolate."],["Voy a comprar la fruta.","I'm going to buy the fruit."],["Me gusta la naturaleza.","I like nature."]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">Soy de — countries</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:6px;margin-bottom:1.5rem">
` + ['Irlanda','Polonia','Inglaterra','Holanda','Bielorrusia (Belarús)','Ucrania','España','Francia','Italia','Alemania','Suecia','Finlandia'].map(c =>
  `<div style="background:var(--bg2);border-radius:var(--radius);padding:0.6rem 0.85rem;font-size:13px;font-weight:500">Soy de <span style="color:var(--green-dark)">${c}</span></div>`
).join('') + `
</div>

<div class="section-h">Vowel sounds</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;margin-bottom:1.5rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:22px;font-weight:700;color:var(--green-dark);margin-bottom:4px">A</div><div style="color:var(--text2);margin-bottom:6px">like "a" in f<strong>a</strong>ther</div><div style="color:var(--text3);font-size:12px">mama, papa, mapa</div></div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:22px;font-weight:700;color:var(--green-dark);margin-bottom:4px">E</div><div style="color:var(--text2);margin-bottom:6px">like "e" in b<strong>e</strong>d</div><div style="color:var(--text3);font-size:12px">mes, bebé, mesa</div></div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:22px;font-weight:700;color:var(--green-dark);margin-bottom:4px">I</div><div style="color:var(--text2);margin-bottom:6px">like "ee" in s<strong>ee</strong></div><div style="color:var(--text3);font-size:12px">sí, iris, difícil</div></div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:22px;font-weight:700;color:var(--green-dark);margin-bottom:4px">O</div><div style="color:var(--text2);margin-bottom:6px">like "o" in d<strong>o</strong>g</div><div style="color:var(--text3);font-size:12px">no, sol, rojo</div></div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:22px;font-weight:700;color:var(--green-dark);margin-bottom:4px">U</div><div style="color:var(--text2);margin-bottom:6px">like "oo" in m<strong>oo</strong>n</div><div style="color:var(--text3);font-size:12px">tú, cruz, minuto</div></div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px"><div style="font-size:16px;font-weight:700;color:var(--green-dark);margin-bottom:4px">QU = [k]</div><div style="color:var(--text2);margin-bottom:6px">Q always pairs with U, silent U</div><div style="color:var(--text3);font-size:12px">¿qué? ¿quién? quiero</div></div>
</div>
<div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px;margin-bottom:1.5rem;color:var(--text2)">
  <strong style="color:var(--text)">Two vowels together?</strong> Read both, connect them smoothly:<br>
  <span style="color:var(--green-dark)">ciudad · bailar · nuevo · muy bien</span>
</div>

<div class="section-h">Gender — el / la</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.5rem">
  <div style="background:#E6F1FB;border-radius:var(--radius);padding:1rem;font-size:13px">
    <div style="font-weight:600;color:#185FA5;margin-bottom:8px">Masculino — EL</div>
    <div style="color:#185FA5;font-size:11px;margin-bottom:8px">nouns ending in -O (mostly)</div>
    <div style="display:flex;flex-direction:column;gap:3px;color:#0C447C;font-size:13px">
      <span>el fútbol</span><span>el teatro</span><span>el café</span><span>el aguacate</span><span>el chocolate</span><span>el mango</span><span>el jamón</span>
    </div>
  </div>
  <div style="background:#FBEAF0;border-radius:var(--radius);padding:1rem;font-size:13px">
    <div style="font-weight:600;color:#993556;margin-bottom:8px">Femenino — LA</div>
    <div style="color:#993556;font-size:11px;margin-bottom:8px">nouns ending in -A (mostly)</div>
    <div style="display:flex;flex-direction:column;gap:3px;color:#72243E;font-size:13px">
      <span>la música</span><span>la playa</span><span>la cerveza</span><span>la pizza</span><span>la fruta</span><span>la naturaleza</span><span>la amiga</span>
    </div>
  </div>
</div>

<div class="section-h">Gender pairs — words that change</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:6px;margin-bottom:1.5rem">
` + [
  ['amigo / amiga','friend'],
  ['vecino / vecina','neighbour'],
  ['chico / chica','boy / girl'],
  ['hermano / hermana','brother / sister'],
  ['hijo / hija','son / daughter'],
  ['gato / gata','cat'],
  ['perro / perra','dog'],
].map(([es,en]) => `<div style="background:var(--bg2);border-radius:var(--radius);padding:0.6rem 0.85rem;font-size:13px"><span style="font-weight:500">${es}</span> <span style="color:var(--text3)">→ ${en}</span></div>`).join('') + `
</div>

<div class="section-h">Me gusta / No me gusta / ¿Te gusta?</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;margin-bottom:1.5rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;color:var(--green-dark);margin-bottom:8px">With verbs (infinitive)</div>
    <div style="color:var(--text2);line-height:2">
      Me gusta <strong>trabajar</strong>.<br>
      Me gusta <strong>dormir</strong>.<br>
      Me gusta <strong>comer</strong>.<br>
      No me gusta <strong>limpiar</strong>.<br>
      No me gusta <strong>leer</strong>.
    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;color:var(--green-dark);margin-bottom:8px">With nouns (+ article)</div>
    <div style="color:var(--text2);line-height:2">
      Me gusta <strong>la pizza</strong>.<br>
      Me gusta <strong>el café</strong>.<br>
      No me gusta <strong>el fútbol</strong>.<br>
      ¿Te gusta <strong>la música</strong>?<br>
      ¿Te gusta <strong>el chocolate</strong>?
    </div>
  </div>
</div>

<div class="section-h">Exercise — el o la?</div>
<div style="font-size:12px;color:var(--text2);margin-bottom:0.75rem">Choose the correct article for each noun. Click to reveal.</div>
<div id="ex3-articles" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:6px;margin-bottom:1.5rem"></div>

<div class="section-h">¿Te gusta? — practice words</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem">
  <div>
    <div style="font-size:11px;font-weight:600;color:#185FA5;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px">Masculino</div>
    <div style="display:flex;flex-direction:column;gap:4px">
      ` + [['el fútbol','football'],['el jamón','ham'],['el teatro','theatre'],['el café','coffee'],['el aguacate','avocado'],['el chocolate','chocolate']].map(([es,en])=>`<div style="font-size:13px"><span style="color:#185FA5;font-weight:500">${es}</span> <span style="color:var(--text3);font-size:11px">— ${en}</span></div>`).join('') + `
    </div>
  </div>
  <div>
    <div style="font-size:11px;font-weight:600;color:#993556;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px">Femenino</div>
    <div style="display:flex;flex-direction:column;gap:4px">
      ` + [['la música','music'],['la playa','beach'],['la naturaleza','nature'],['la pizza','pizza'],['la cerveza','beer'],['la fruta','fruit']].map(([es,en])=>`<div style="font-size:13px"><span style="color:#993556;font-weight:500">${es}</span> <span style="color:var(--text3);font-size:11px">— ${en}</span></div>`).join('') + `
    </div>
  </div>
</div>
<div data-init="clase3"></div>
</div>`};);
