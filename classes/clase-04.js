// Clase 4 — 14.10.25
const clase_04 = {date:"14.10.25",topic:"Gustar — all forms, plurals & Z/G",tags:["gustar","plurales","me/te/le/nos","z","g"],grammar:"GUSTA for a verb or singular noun. GUSTAN for plural nouns. Pronouns: me, te, le, nos, os, les. 'No' goes before the pronoun. Pronunciation: Z = /θ/ like 'think' (Spain) or /s/ (LatAm). G = hard before a/o/u like 'got'; soft before e/i like harsh 'h'.",vocab:[["Me gustan","I like (plural)"],["Te gustan","You like (plural)"],["Le gusta","He/she likes"],["Nos gustan","We like (plural)"],["Os gustan","You all like (plural)"],["Les gustan","They like (plural)"],["Los gatos","The cats (masc. pl.)"],["Las películas","The films (fem. pl.)"],["Los libros","The books (masc. pl.)"],["Las casas","The houses (fem. pl.)"],["A mí también","Me too"],["A mí tampoco","Me neither"],["A mí sí","I do (disagreeing)"],["A mí no","I don't (disagreeing)"],["El lápiz → los lápices","Pencil → pencils (z→ces)"],["La flor → las flores","Flower → flowers (+es)"]],phrases:[["A mí me gusta el español.","I like Spanish."],["A él no le gusta perder.","He doesn't like to lose."],["A ti te gustan los idiomas.","You like languages."],["A Brad Pitt le gustan los gatos.","Brad Pitt likes cats."],["A mí tampoco.","Me neither."],["A Pierre no le gusta la lluvia, y a mí tampoco.","Pierre doesn't like rain, and neither do I."],["A Brad Pitt no le gusta Angelina, y a mí sí.","Brad Pitt doesn't like Angelina, but I do!"]],extra:`<div style="margin-top:1.5rem">

<div class="section-h">Z — pronunciation</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">In Spain</div>
    <div style="color:var(--text2);margin-bottom:8px">Like <strong>th</strong> in "think" — /θ/</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">` +
['zapato (shoe)','zafiro (sapphire)','zorro (fox)','zumo (juice)','calabaza (pumpkin)','zanahoria (carrot)','zoológico (zoo)'].map(w=>
`<span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">${w}</span>`).join('') +
`    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">In Latin America</div>
    <div style="color:var(--text2);margin-bottom:8px">Like <strong>s</strong> in "see" — /s/</div>
    <div style="color:var(--text3);font-size:12px;font-style:italic">Same words, different accent — both are correct!</div>
  </div>
</div>
<div style="background:#FAEEDA;border-radius:var(--radius);padding:0.85rem;font-size:13px;margin-bottom:1.5rem;color:#633806">
  <strong>Trabalenguas:</strong> Camarón, caramelo, / Caramelo, camarón.
</div>

<div class="section-h">G — pronunciation</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.5rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">Before A, O, U</div>
    <div style="color:var(--text2);margin-bottom:8px">Hard G — like "g" in "got"</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">` +
['gato','globos','galleta','guante','grúa','gorro','gota'].map(w=>
`<span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">${w}</span>`).join('') +
`    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;margin-bottom:4px">Before E, I</div>
    <div style="color:var(--text2);margin-bottom:8px">Soft G — like harsh "h"</div>
    <div style="display:flex;flex-wrap:wrap;gap:4px">` +
['girasol','general','gitano','gimnasio'].map(w=>
`<span style="background:var(--green-light);color:var(--green-dark);border-radius:10px;padding:2px 8px;font-size:12px">${w}</span>`).join('') +
`    </div>
  </div>
</div>

<div class="section-h">Articles — definite (the)</div>
<div style="overflow-x:auto;margin-bottom:1.5rem">
<table style="border-collapse:collapse;font-size:13px;width:100%;text-align:center">
  <thead>
    <tr style="background:var(--bg2)">
      <th style="padding:8px 12px;border:0.5px solid var(--border)"></th>
      <th style="padding:8px 12px;border:0.5px solid var(--border);color:#185FA5">Masculino</th>
      <th style="padding:8px 12px;border:0.5px solid var(--border);color:#993556">Femenino</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-weight:500;background:var(--bg2)">Singular</td>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:20px;font-weight:700;color:#185FA5">el</td>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:20px;font-weight:700;color:#993556">la</td>
    </tr>
    <tr>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-weight:500;background:var(--bg2)">Plural</td>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:20px;font-weight:700;color:#185FA5">los</td>
      <td style="padding:8px 12px;border:0.5px solid var(--border);font-size:20px;font-weight:700;color:#993556">las</td>
    </tr>
  </tbody>
</table>
</div>

<div class="section-h">How to make plurals</div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:8px;margin-bottom:1.5rem">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;color:var(--green-dark);margin-bottom:6px">Ends in vowel → add -S</div>
    <div style="color:var(--text2);line-height:1.9">la cas<strong>a</strong> → las cas<strong>as</strong><br>el libr<strong>o</strong> → los libr<strong>os</strong><br>el chic<strong>o</strong> → los chic<strong>os</strong></div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;color:var(--green-dark);margin-bottom:6px">Ends in consonant → add -ES</div>
    <div style="color:var(--text2);line-height:1.9">el árbo<strong>l</strong> → los árbol<strong>es</strong><br>la flo<strong>r</strong> → las flor<strong>es</strong><br>el pan → los pan<strong>es</strong></div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem;font-size:13px">
    <div style="font-weight:600;color:var(--green-dark);margin-bottom:6px">Ends in -Z → change to -CES</div>
    <div style="color:var(--text2);line-height:1.9">el lápi<strong>z</strong> → los lápi<strong>ces</strong><br>el pe<strong>z</strong> → los pe<strong>ces</strong><br>la nue<strong>z</strong> → las nue<strong>ces</strong></div>
  </div>
</div>

<div class="section-h">Verb gustar — full structure</div>
<div style="background:var(--bg2);border-radius:var(--radius);padding:1rem;margin-bottom:1rem;font-size:13px">
  <div style="display:grid;grid-template-columns:auto auto auto 1fr;gap:8px 16px;align-items:center;line-height:2">
    <span style="color:var(--text3);font-size:11px;font-weight:600;text-transform:uppercase">Who</span>
    <span style="color:var(--text3);font-size:11px;font-weight:600;text-transform:uppercase">no?</span>
    <span style="color:var(--text3);font-size:11px;font-weight:600;text-transform:uppercase">pronoun</span>
    <span style="color:var(--text3);font-size:11px;font-weight:600;text-transform:uppercase">gusta / gustan + what</span>
    <span style="color:var(--text2)">A mí</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">me</span><span style="color:var(--text2)">gusta el español / gustan los gatos</span>
    <span style="color:var(--text2)">A ti</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">te</span><span style="color:var(--text2)">gusta leer / gustan los idiomas</span>
    <span style="color:var(--text2)">A él/ella</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">le</span><span style="color:var(--text2)">gusta perder / gustan los perros</span>
    <span style="color:var(--text2)">A nosotros</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">nos</span><span style="color:var(--text2)">gusta cocinar / gustan las fiestas</span>
    <span style="color:var(--text2)">A vosotros</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">os</span><span style="color:var(--text2)">gusta viajar / gustan los domingos</span>
    <span style="color:var(--text2)">A ellos</span><span style="color:var(--text3)">(no)</span><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:1px 8px;font-weight:600">les</span><span style="color:var(--text2)">gusta la música / gustan los animales</span>
  </div>
</div>
<div style="background:#E1F5EE;border-radius:var(--radius);padding:0.85rem;font-size:13px;margin-bottom:1.5rem;color:#0F6E56;line-height:1.8">
  <strong>Key rule:</strong> GUSTA or GUSTAN depends on <em>what</em> you like, not <em>who</em> likes it.<br>
  A Brad Pitt le gust<strong>A</strong> Angelina. (singular person → gusta)<br>
  A Brad Pitt le gust<strong>AN</strong> los gatos. (plural noun → gustan)
</div>

<div class="section-h">Agreeing & disagreeing</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1.5rem;font-size:13px">
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem">
    <div style="font-weight:600;margin-bottom:8px;color:var(--green-dark)">✓ Me gusta la playa.</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:2px 8px;font-size:12px">agree 👍</span> <strong>A mí también.</strong> <span style="color:var(--text3)">Me too.</span></div>
      <div><span style="background:#FAECE7;color:#993C1D;border-radius:6px;padding:2px 8px;font-size:12px">disagree 👎</span> <strong>A mí no.</strong> <span style="color:var(--text3)">I don't.</span></div>
    </div>
  </div>
  <div style="background:var(--bg2);border-radius:var(--radius);padding:0.85rem">
    <div style="font-weight:600;margin-bottom:8px;color:#993C1D">✗ No me gusta la playa.</div>
    <div style="display:flex;flex-direction:column;gap:6px">
      <div><span style="background:var(--green-light);color:var(--green-dark);border-radius:6px;padding:2px 8px;font-size:12px">agree 👎</span> <strong>A mí tampoco.</strong> <span style="color:var(--text3)">Me neither.</span></div>
      <div><span style="background:#FAECE7;color:#993C1D;border-radius:6px;padding:2px 8px;font-size:12px">disagree 👍</span> <strong>A mí sí.</strong> <span style="color:var(--text3)">I do!</span></div>
    </div>
  </div>
</div>

<div class="section-h">Exercise A — gusta or gustan?</div>
<div id="ex4-a" style="margin-bottom:1.5rem"></div>

<div class="section-h">Exercise B — make it plural</div>
<div style="font-size:12px;color:var(--text2);margin-bottom:0.75rem">Tap each card to reveal the plural form.</div>
<div id="ex4-b" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:6px;margin-bottom:1.5rem"></div>

<div class="section-h">Exercise C — gusta or gustan? (advanced)</div>
<div id="ex4-c" style="margin-bottom:1.5rem"></div>

<div class="section-h">Exercise D — pronouns: me, te, le, nos, os, les</div>
<div id="ex4-d" style="margin-bottom:1rem"></div>

<div data-init="clase4"></div>
</div>`};
