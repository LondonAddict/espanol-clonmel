// ============================================================
// QUIZ QUESTIONS — espanol-clonmel
// ============================================================
// HOW TO ADD A QUESTION:
//
//   {
//     q:    "The question text — use ___ for a gap",
//     inst: "Short instruction shown below the question",
//     opts: ["Option A", "Option B", "Option C", "Option D"],
//     ans:  0   // index of the correct answer (0=A, 1=B, 2=C, 3=D)
//   },
//
// Rules:
//   - Always 4 options
//   - ans is the position (0-3) of the correct one
//   - Keep opts short — they appear as buttons
//   - Add a comma after every entry except the last
// ============================================================

const QUIZ_POOL=[

  // ── GREETINGS & BASICS ────────────────────────────────────
  {q:"How do you say 'I'm going to eat'?",inst:"Use voy a",opts:["Quiero comer.","Acabo de comer.","Voy a comer.","Tengo que comer."],ans:2},
  {q:"How do you say 'I have just finished work'?",inst:"Use acabo de",opts:["Voy a trabajar.","Acabo de trabajar.","Tengo que trabajar.","Trabajo ahora."],ans:1},
  {q:"'See you later!' →",inst:"Choose the correct farewell",opts:["¡Hasta pronto!","¡Hasta luego!","¡Adiós!","¡Chau!"],ans:1},

  // ── ARTICLES & GENDER ─────────────────────────────────────
  {q:"___ mesa",inst:"el or la?",opts:["el","la","un","una"],ans:1},
  {q:"___ gato",inst:"el or la?",opts:["la","el","una","los"],ans:1},
  {q:"___ zapato",inst:"el or la?",opts:["la","el","un","una"],ans:1},
  {q:"¿Cuál es el plural de 'el libro'?",inst:"Make it plural",opts:["los libros","las libros","el libros","los libro"],ans:0},
  {q:"¿Cuál es el plural de 'la flor'?",inst:"Ends in consonant → add -es",opts:["las floras","los flores","las flores","la flores"],ans:2},

  // ── GUSTAR ────────────────────────────────────────────────
  {q:"¿Cómo se dice 'I like chocolate'?",inst:"Choose the correct sentence",opts:["Me gusta el chocolate.","Me gustan el chocolate.","Te gusta el chocolate.","Le gusta chocolates."],ans:0},
  {q:"Me ___ los gatos.",inst:"gusta or gustan?",opts:["gusta","gustan","gusto","gustas"],ans:1},
  {q:"Me ___ vivir en la ciudad.",inst:"verb → gusta or gustan?",opts:["gustan","gusto","gusta","gustas"],ans:2},
  {q:"How do you say 'Me too' when agreeing with a like?",inst:"Choose the correct phrase",opts:["A mí tampoco","A mí también","A mí no","A mí sí"],ans:1},
  {q:"'I like your shoes!' → ¡Me ___ mucho tus zapatos!",inst:"gusta or gustan?",opts:["gusta","gustan","gusto","gustas"],ans:1},

  // ── VERBS: TENER, SER, ESTAR ──────────────────────────────
  {q:"How do you say 'I have two sisters'?",inst:"Use tener",opts:["Tengo dos hermanas.","Tienes dos hermanas.","He dos hermanas.","Yo dos hermanas."],ans:0},
  {q:"¿Cuántos años ___ ? (you have)",inst:"tener — tú form",opts:["eres","estás","tienes","haces"],ans:2},
  {q:"'I'm hungry.' →",inst:"Use tener",opts:["Estoy hambre.","Tengo hambre.","Soy hambre.","Hay hambre."],ans:1},
  {q:"'She's a doctor.' →",inst:"ser or estar?",opts:["Ella está médica.","Ella hay médica.","Ella es médica.","Ella tiene médica."],ans:2},
  {q:"'I'm happy.' →",inst:"ser or estar?",opts:["Soy feliz.","Estoy feliz.","Hay feliz.","Tengo feliz."],ans:1},
  {q:"'I'm from Ireland.' →",inst:"Use soy de",opts:["Estoy de Irlanda.","Hay Irlanda.","Soy de Irlanda.","Tengo Irlanda."],ans:2},

  // ── PLANS & OBLIGATIONS ───────────────────────────────────
  {q:"How do you say 'I have to work'?",inst:"Pick the right translation",opts:["Quiero trabajar","Voy a trabajar","Tengo que trabajar","Trabajo mucho"],ans:2},
  {q:"Voy ___ ir al gimnasio.",inst:"Fill the gap",opts:["de","a","que","para"],ans:1},

  // ── HAY / SER / ESTAR ─────────────────────────────────────
  {q:"'There is a park near my house.' →",inst:"ser, estar or hay?",opts:["Es un parque cerca.","Está un parque cerca.","Hay un parque cerca.","Son parques cerca."],ans:2},
  {q:"'The keys are on the table.' → Las llaves ___ encima de la mesa.",inst:"ser, estar or hay?",opts:["son","hay","estar","están"],ans:3},
  {q:"México ___ muy bonito.",inst:"ser or estar?",opts:["está","hay","es","son"],ans:2},
  {q:"La Alhambra ___ en Granada.",inst:"ser, estar or hay?",opts:["es","hay","estar","está"],ans:3},

  // ── REGULAR VERBS ─────────────────────────────────────────
  {q:"Yo ___ en Madrid. (vivir)",inst:"Regular -IR verb",opts:["vivas","vive","vivo","vivemos"],ans:2},
  {q:"How do you say 'I don't like Mondays'?",inst:"Use me gusta/n correctly",opts:["No me gustan los lunes.","No me gusta los lunes.","No te gustan los lunes.","No le gusta el lunes."],ans:0},

  // ── PRETÉRITO PERFECTO ────────────────────────────────────
  {q:"¿Cómo se dice 'What have you done?'",inst:"Pretérito perfecto",opts:["¿Qué haces?","¿Qué vas a hacer?","¿Qué has hecho?","¿Qué hiciste?"],ans:2},
  {q:"'I have gone.' → He ___",inst:"Irregular participle of ir",opts:["ido","voy","ir","va"],ans:0},
  {q:"Nosotros ___ visto una película.",inst:"haber + participle",opts:["hemos","habéis","han","he"],ans:0},
  {q:"¿Has estado en España ___ vez?",inst:"'ever' in Spanish",opts:["alguna","ninguna","cada","otra"],ans:0},
  {q:"'I have done.' → He ___",inst:"Irregular participle of hacer",opts:["hacido","hecho","hacado","haciendo"],ans:1},

  // ── CLOTHES & COLOURS ─────────────────────────────────────
  {q:"'She's wearing a nice dress.' →",inst:"llevar = to wear",opts:["Ella tiene un vestido bonito.","Ella lleva un vestido bonito.","Ella está un vestido bonito.","Ella pone un vestido bonito."],ans:1},
  {q:"una chaqueta ___ (red)",inst:"Colour agreement",opts:["rojo","roja","rojos","rojas"],ans:1},
  {q:"unos pantalones ___ (red)",inst:"Colour agreement",opts:["rojo","roja","rojos","rojas"],ans:2},

  // ── NATIONALITIES & DESCRIPTION ───────────────────────────
  {q:"Soy de España. Soy ___.",inst:"Nationality — masc.",opts:["española","español","espanés","espanola"],ans:1},
  {q:"¿Qué significa '¡Qué asco!'?",inst:"Translate the reaction",opts:["How strange!","How awful!","How disgusting!","How annoying!"],ans:2},
  {q:"¿Qué significa 'Pues, resulta que...'?",inst:"Translate the expression",opts:["Well, I think that...","Well, it turns out that...","Well, the thing is...","By the way..."],ans:1},

  // ── MUCHO / MUY ───────────────────────────────────────────
  {q:"Mi hija es ___ linda.",inst:"muy or mucho?",opts:["mucho","muchos","muy","mucha"],ans:2},
  {q:"Aquí hay ___ gente.",inst:"mucho/a agrees with noun",opts:["muy","mucho","mucha","muchos"],ans:2},

  // ── SABER / PODER ─────────────────────────────────────────
  {q:"¿___ hablar español? — Sí, un poco.",inst:"skill or ability?",opts:["Puedes","Sabes","Tienes","Estás"],ans:1},
  {q:"¿___ venir mañana? — No, tengo reunión.",inst:"circumstance or skill?",opts:["Sabes","Tienes","Puedes","Eres"],ans:2},

];
// Total questions in pool: update this comment when you add more
// Current count: 42
