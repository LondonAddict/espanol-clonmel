// ============================================================
// QUIZ QUESTIONS — espanol-clonmel
// ============================================================
// HOW TO ADD A QUESTION:
//
//   {
//     q:    "The question text",
//     inst: "Short instruction",
//     opts: ["Option A", "Option B", "Option C", "Option D"],
//     ans:  0   // 0=A, 1=B, 2=C, 3=D
//   },
//
// Edit this file directly on GitHub (pencil icon) or
// use the Excel file and send it back to get a new quiz.js
// ============================================================

const QUIZ_POOL=[

  // ── GREETINGS ─────────────────────────────────────────────
  {q:"How do you say \'I\'m going to eat\'?",inst:"choose the correct phrase",opts:["Quiero comer.","Acabo de comer.","Voy a comer.","Tengo que comer."],ans:2},
  {q:"How do you say \'I have just worked\'?",inst:"choose the correct phrase",opts:["Voy a trabajar.","Acabo de trabajar.","Tengo que trabajar.","Trabajo ahora."],ans:1},
  {q:"\'See you later!\' →",inst:"choose the correct phrase",opts:["¡Hola!","¡Hasta luego!","¡Adiós!","¡Chau!"],ans:1},
  // ── ARTICLES ─────────────────────────────────────────────
  {q:"___ mesa",inst:"el, la, los or las?",opts:["el","una","un","unas"],ans:1},
  {q:"___ gato",inst:"el, la, los or las?",opts:["la","un","una","los"],ans:1},
  {q:"___ zapato",inst:"el, la, los or las?",opts:["la","el","las","una"],ans:1},
  {q:"¿Cuál es el plural de \'el libro\'?",inst:"el, la, los or las?",opts:["los libros","las libros","el libros","los libro"],ans:0},
  {q:"¿Cuál es el plural de \'la flor\'?",inst:"el, la, los or las?",opts:["las floras","los flores","las flores","la flores"],ans:2},
  // ── GUSTAR ─────────────────────────────────────────────
  {q:"¿Cómo se dice \'I like chocolate\'?",inst:"gusta or gustan?",opts:["Me gusta el chocolate.","Me gustan el chocolate.","Te gusta el chocolate.","Le gusta chocolates."],ans:0},
  {q:"Me ___ los gatos.",inst:"gusta or gustan?",opts:["gusta","gustan","gusto","gustas"],ans:1},
  {q:"Me ___ vivir en la ciudad.",inst:"gusta or gustan?",opts:["gustan","gusto","gusta","gustas"],ans:2},
  {q:"How do you say \'Me too\' when agreeing with a like?",inst:"gusta or gustan?",opts:["A mí tampoco","A mí también","A mí no","A mí sí"],ans:1},
  {q:"\'I like your shoes!\' → ¡Me ___ mucho tus zapatos!",inst:"gusta or gustan?",opts:["gusta","gustan","gusto","gustas"],ans:1},
  // ── TENER ─────────────────────────────────────────────
  {q:"How do you say \'I have two sisters\'?",inst:"use tener",opts:["Tengo dos hermanas.","Tienes dos hermanas.","He dos hermanas.","Yo dos hermanas."],ans:0},
  {q:"¿Cuántos años ___ ? (you have)",inst:"use tener",opts:["eres","estás","tienes","haces"],ans:2},
  {q:"\'I\'m hungry.\' →",inst:"use tener",opts:["Estoy hambre.","Tengo hambre.","Soy hambre.","Hay hambre."],ans:1},
  // ── SER/ESTAR ─────────────────────────────────────────────
  {q:"\'She\'s a doctor.\' →",inst:"ser or estar?",opts:["Ella está médica.","Ella hay médica.","Ella es médica.","Ella tiene médica."],ans:2},
  {q:"\'I\'m happy.\' →",inst:"ser or estar?",opts:["Soy feliz.","Estoy feliz.","Hay feliz.","Tengo feliz."],ans:1},
  {q:"\'I\'m from Ireland.\' →",inst:"ser or estar?",opts:["Estoy de Irlanda.","Hay Irlanda.","Soy de Irlanda.","Tengo Irlanda."],ans:2},
  // ── PLANS ─────────────────────────────────────────────
  {q:"How do you say \'I have to work\'?",inst:"voy a, quiero or tengo que?",opts:["Quiero trabajar","Voy a trabajar","Tengo que trabajar","Trabajo mucho"],ans:2},
  {q:"Voy ___ ir al gimnasio.",inst:"voy a, quiero or tengo que?",opts:["de","a","que","para"],ans:1},
  // ── HAY/SER/ESTAR ─────────────────────────────────────────────
  {q:"There is a park nearby.\' →",inst:"ser, estar or hay?",opts:["Es un parque cerca.","Está un parque cerca.","Hay un parque cerca.","Son parques cerca."],ans:2},
  {q:"Las llaves ___ encima de la mesa.",inst:"ser, estar or hay?",opts:["son","hay","estar","están"],ans:3},
  {q:"México ___ muy bonito.",inst:"ser, estar or hay?",opts:["está","hay","es","son"],ans:2},
  {q:"La Alhambra ___ en Granada.",inst:"ser, estar or hay?",opts:["es","hay","estar","está"],ans:3},
  // ── VERBS ─────────────────────────────────────────────
  {q:"Yo ___ en Madrid. (vivir)",inst:"choose the correct form",opts:["vivas","vive","vivo","vivemos"],ans:2},
  {q:"How do you say \'I don\'t like Mondays\'?",inst:"choose the correct form",opts:["No me gustan los lunes.","No me gusta los lunes.","No te gustan los lunes.","No le gusta el lunes."],ans:0},
  // ── PRETÉRITO PERFECTO ─────────────────────────────────────────────
  {q:"¿Cómo se dice \'What have you done?\'",inst:"pretérito perfecto",opts:["¿Qué haces?","¿Qué vas a hacer?","¿Qué has hecho?","¿Qué hiciste?"],ans:2},
  {q:"\'I have gone.\' → He ___",inst:"pretérito perfecto",opts:["ido","voy","ir","va"],ans:0},
  {q:"Nosotros ___ visto una película.",inst:"pretérito perfecto",opts:["hemos","habéis","han","he"],ans:0},
  {q:"¿Has estado en España ___ vez?",inst:"pretérito perfecto",opts:["alguna","ninguna","cada","otra"],ans:0},
  {q:"\'I have done.\' → He ___",inst:"pretérito perfecto",opts:["hacido","hecho","hacado","haciendo"],ans:1},
  // ── ROPA ─────────────────────────────────────────────
  {q:"\'She\'s wearing a nice dress.\' →",inst:"llevar = to wear",opts:["Tengo un vestido bonito.","Ella lleva un vestido bonito.","Ella está un vestido bonito.","Ella poner un vestido bonito."],ans:1},
  // ── COLORES ─────────────────────────────────────────────
  {q:"una chaqueta ___ (red)",inst:"colour agreement",opts:["rojo","roja","rojos","rojas"],ans:1},
  {q:"unos pantalones ___ (red)",inst:"colour agreement",opts:["rojo","roja","rojos","rojas"],ans:2},
  // ── NACIONALIDADES ─────────────────────────────────────────────
  {q:"Soy de España. Soy ___.",inst:"nationality form",opts:["españas","español","espanés","espanola"],ans:1},
  // ── REACCIONES ─────────────────────────────────────────────
  {q:"¿Qué significa \'¡Qué asco!\'?",inst:"translate",opts:["How strange!","How awful!","How disgusting!","How annoying!"],ans:2},
  // ── EXPRESIONES ─────────────────────────────────────────────
  {q:"¿Qué significa \'Pues, resulta que...\'?",inst:"translate",opts:["Well, I think that...","Well, it turns out that...","Well, the thing is...","By the way..."],ans:1},
  // ── MUCHO/MUY ─────────────────────────────────────────────
  {q:"Mi hija es ___ guapa.",inst:"mucho or muy?",opts:["mucho","muchos","muy","mucha"],ans:2},
  {q:"Aquí hay ___ gente.",inst:"mucho or muy?",opts:["muy","mucho","mucha","muchos"],ans:2},
  // ── SABER/PODER ─────────────────────────────────────────────
  {q:"¿___ hablar español? — Sí, un poco.",inst:"saber or poder?",opts:["Puedes","Sabes","Tienes","Estás"],ans:1},
  {q:"¿___ venir mañana? — No, tengo trabajo.",inst:"saber or poder?",opts:["Sabes","Tienes","Puedes","Eres"],ans:2},
  // ── PREGUNTAS ─────────────────────────────────────────────
  {q:"Hola. ¿Cómo estás?",inst:"choose the correct answer",opts:["Me llamo Andrés.","Muy bien. Gracias.","Soy de México.","Tengo nueve."],ans:1},
  {q:"¿Cómo te llamas?",inst:"choose the correct answer",opts:["Vivo en Nueva York.","Muy bien. Gracias.","Me llamo Andrés.","Soy de México."],ans:2},
  {q:"¿Cuántos años tienes?",inst:"choose the correct answer",opts:["El dos de enero.","Soy de México.","Me gusta bailar.","Tengo nueve años."],ans:3},
  {q:"¿Cuándo es tu cumpleaños?",inst:"choose the correct answer",opts:["Me llamo Andrés.","El dos de enero.","Vivo en Nueva York.","Tengo nueve."],ans:1},
  {q:"¿De dónde eres?",inst:"choose the correct answer",opts:["Vivo en Nueva York.","Me llamo Andrés.","Soy de México.","Me gusta bailar."],ans:2},
  {q:"¿Dónde vives?",inst:"choose the correct answer",opts:["Soy de México.","Vivo en Nueva York.","Me llamo Andrés.","Muy bien. Gracias."],ans:1},
  {q:"¿A dónde vas de vacaciones?",inst:"choose the correct answer",opts:["Me gusta bailar.","Soy de México.","Voy a España.","Tengo nueve."],ans:2},
  {q:"¿Qué haces en tu tiempo libre?",inst:"choose the correct answer",opts:["Soy de México.","Me gusta bailar.","Vivo en Nueva York.","Tengo nueve."],ans:1},
  {q:"¿Tienes los ojos verdes?",inst:"choose the correct answer",opts:["No, son azules.","No, tengo un libro.","He visto varios.","Son de mi novio."],ans:0},
  {q:"¿Hace frío en Irlanda?",inst:"choose the correct answer",opts:["Sí. Y llueve mucho.","Me gusta viajar.","Hace un rato.","Hace poco."],ans:0},
  // ── COLORES ─────────────────────────────────────────────
  {q:"El mar es ___ .",inst:"colour agreement",opts:["verde","amarillo","lago","azul"],ans:3},
  {q:"Un plátano es _____.",inst:"colour agreement",opts:["amarillo","azul","rosa","gris"],ans:0},
  {q:"Una fresa es _____.",inst:"colour agreement",opts:["naranja","rojo","roja","gris"],ans:2},
  // ── PREGUNTAS ─────────────────────────────────────────────
  {q:"¿Sabes tocar la guitarra?",inst:"choose the correct answer",opts:["Sí, toco muy bien.","Es mi amigo Pablo.","Mi hija saber.","Sí, está en Lóndres."],ans:0},
  // ── DÍAS ─────────────────────────────────────────────
  {q:"¿Qué día viene a continuación? lunes - martes - ___",inst:"choose the correct day",opts:["domingo","jueves","sábado","miércoles"],ans:3},
  {q:"¿Qué día viene a continuación? martes - miércoles - ___",inst:"choose the correct day",opts:["lunes","domingo","jueves","sábado"],ans:2},
  {q:"¿Qué día viene a continuación? miércoles - jueves - ___",inst:"choose the correct day",opts:["viernes","domingo","lunes","martes"],ans:0},
  // ── MUCHO/MUY ─────────────────────────────────────────────
  {q:"En Irlanda hace ___ frío.",inst:"mucho or muy?",opts:["muy","mucho","mucha","muchos"],ans:1},
  {q:"La sopa está ___ caliente.",inst:"mucho or muy?",opts:["mucha","mucho","muy","muchas"],ans:2},
  {q:"Este libro está ___ interesante",inst:"mucho or muy?",opts:["mucho","muy","mucha","muchos"],ans:1},
  {q:"Carmen trabaja ___.",inst:"mucho or muy?",opts:["mucho","muy","mucha","muchos"],ans:0},
  {q:"Estamos ___ bien.",inst:"mucho or muy?",opts:["mucho","muy","mucha","muchos"],ans:1},
  {q:"Me gustan ___ los plátanos.",inst:"mucho or muy?",opts:["mucho","muy","mucha","muchos"],ans:0},
  {q:"Ya era ___ tarde.",inst:"mucho or muy?",opts:["mucho","muy","mucha","muchos"],ans:1},
  // ── TAMBIÉN/TAMPOCO ─────────────────────────────────────────────
  {q:"Mi madre tiene los ojos azules y yo ___.",inst:"también or tampoco?",opts:["también","tampoco","sí","estoy"],ans:0},
  {q:"Si Juan no va a la fiesta, yo ___.",inst:"también or tampoco?",opts:["también","tampoco","él","soy"],ans:1},
  {q:"Luis es muy bueno y su hermano ___.",inst:"también or tampoco?",opts:["también","tampoco","está","es"],ans:0},
  {q:"No tengo un mapa y ___ sé como llegar.",inst:"también or tampoco?",opts:["también","tampoco","hay","estoy"],ans:1},
  // ── ADVERBIOS ─────────────────────────────────────────────
  {q:"no longer",inst:"translate to Spanish",opts:["entretanto","ya no","tarde","a menudo"],ans:1},
  {q:"already",inst:"translate to Spanish",opts:["hoy","siempre","a veces","ya"],ans:3},
  {q:"when",inst:"translate to Spanish",opts:["luego","después","cuando","ayer"],ans:2},
  {q:"now",inst:"translate to Spanish",opts:["hace un rato","hoy","ahora","siempre"],ans:2},
  {q:"sometimes",inst:"translate to Spanish",opts:["a veces","hoy","a menudo","nunca"],ans:0},
  {q:"often",inst:"translate to Spanish",opts:["a veces","a menudo","adiós","ayer"],ans:1},
  {q:"after/afterwards",inst:"translate to Spanish",opts:["ahora","hace","después","dentro"],ans:2},
  {q:"soon",inst:"translate to Spanish",opts:["luego","pronto","lejos","cerca"],ans:1},
  {q:"yet",inst:"translate to Spanish",opts:["después","luego","ahora","todavía"],ans:3},
  // ── VERBS ─────────────────────────────────────────────
  {q:"Yo ___ irlandesa.",inst:"choose the correct form",opts:["soy","eres","es","sois"],ans:0},
  {q:"Rosa ___ profesora de inglés.",inst:"choose the correct form",opts:["es","son","eres","somos"],ans:0},
  {q:"Nosotros ___ estudiantes.",inst:"choose the correct form",opts:["sois","están","son","somos"],ans:3},
  {q:"Tú ___ muy joven.",inst:"choose the correct form",opts:["es","está","hay","eres"],ans:3},
  {q:"Hoy ___ jueves.",inst:"choose the correct form",opts:["hay","tengo","muy","es"],ans:3},
  {q:"¿Qué hora ___?",inst:"choose the correct form",opts:["hay","es","está","hay"],ans:1},
  {q:"¿Qué hora es?   ___ las tres y media.",inst:"choose the correct form",opts:["Es","Son","Somos","Sois"],ans:1},
  {q:"¿Cuánto _____ esto?",inst:"choose the correct form",opts:["cuesta","costa","cuestan","costan"],ans:0},
  {q:"¿Qué ____  esto?",inst:"choose the correct form",opts:["es","está","tengo","eres"],ans:0},
  // ── NÚMEROS ─────────────────────────────────────────────
  {q:"67",inst:"choose the correct option",opts:["sesenta y siete","setenta y seis","setentaseis","sesentesiete"],ans:0},
  {q:"15",inst:"choose the correct option",opts:["diecicinco","quince","cincuenta","quinientos"],ans:1},
  {q:"2026",inst:"choose the correct option",opts:["dos mil veintiséis","dos mil diecidos y seis","dos mil veinte y séis","dos cero dos cinco"],ans:0},

];
// Total: 91 questions