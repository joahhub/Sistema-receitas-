// Busca 3 fotos no Pexels para cada prato e cria o arquivo imagens.js
// Uso:  node buscar-imagens.js SUA_CHAVE_PEXELS
//   ou: PEXELS_KEY=SUA_CHAVE node buscar-imagens.js   (Mac/Linux)
// Precisa do Node.js 18 ou mais novo.

const fs = require("fs");

const KEY = process.argv[2] || process.env.PEXELS_KEY;
if (!KEY) {
  console.error("Faltou a chave. Use: node buscar-imagens.js SUA_CHAVE_PEXELS");
  process.exit(1);
}

// Prato -> termo de busca. A busca em inglês costuma achar fotos melhores.
// Se alguma foto não agradar, troque o termo aqui e rode de novo.
const PRATOS = {
  "Panqueca de banana": "banana pancakes",
  "Omelete simples": "omelette breakfast plate",
  "Tapioca com queijo": "tapioca crepe cheese",
  "Pão de frigideira": "skillet flatbread",
  "Mingau de aveia": "oatmeal porridge bowl",
  "Frango cremoso": "creamy chicken dish",
  "Arroz de forno": "baked rice casserole",
  "Macarrão alho e óleo": "spaghetti garlic olive oil",
  "Strogonoff de frango": "chicken stroganoff rice",
  "Escondidinho de carne": "shepherd's pie mashed potato beef",
  "Sopa de legumes": "vegetable soup bowl",
  "Crepioca recheada": "tapioca egg crepe filled",
  "Caldo de frango": "chicken broth soup",
  "Arroz com legumes": "rice with vegetables",
  "Omelete de legumes": "vegetable omelette",
  "Lasanha de frango": "chicken lasagna",
  "Macarrão cremoso": "creamy pasta",
  "Nhoque de batata": "potato gnocchi",
  "Penne ao molho vermelho": "penne tomato sauce",
  "Macarrão com queijo": "macaroni and cheese",
  "Brigadeiro de colher": "chocolate fudge dessert cup",
  "Mousse de maracujá": "passion fruit mousse",
  "Pudim simples": "caramel flan pudding",
  "Bolo de chocolate": "chocolate cake slice",
  "Doce de banana": "banana dessert caramelized",
};

const FOTOS_POR_PRATO = 3;
const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

async function buscar(termo) {
  const url =
    "https://api.pexels.com/v1/search?per_page=10&orientation=landscape&query=" +
    encodeURIComponent(termo);
  const resp = await fetch(url, { headers: { Authorization: KEY } });
  if (!resp.ok) throw new Error("Pexels respondeu " + resp.status);
  const dados = await resp.json();
  return (dados.photos || []).slice(0, FOTOS_POR_PRATO).map((f) => ({
    url: f.src.large,
    autor: f.photographer,
    link: f.url,
  }));
}

(async () => {
  const resultado = {};
  const semFoto = [];
  for (const [prato, termo] of Object.entries(PRATOS)) {
    try {
      const fotos = await buscar(termo);
      if (fotos.length) resultado[prato] = fotos;
      else semFoto.push(prato);
      console.log((fotos.length ? "ok    " : "VAZIO ") + prato + " (" + fotos.length + ")");
    } catch (e) {
      semFoto.push(prato);
      console.log("ERRO  " + prato + ": " + e.message);
    }
    await esperar(400);
  }
  const saida =
    "// Gerado por buscar-imagens.js. Fotos: Pexels (https://www.pexels.com)\n" +
    "const DISH_IMAGES = " + JSON.stringify(resultado, null, 2) + ";\n";
  fs.writeFileSync("imagens.js", saida);
  console.log("\nimagens.js criado com " + Object.keys(resultado).length + " pratos.");
  if (semFoto.length) console.log("Sem foto (ajuste o termo e rode de novo): " + semFoto.join(", "));
})();
