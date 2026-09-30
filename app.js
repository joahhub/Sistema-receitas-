const $=s=>document.querySelector(s);
const grid=$("#grid"), search=$("#search"), category=$("#category"), difficulty=$("#difficulty"), time=$("#time"), sort=$("#sort");
const modal=$("#modal"), modalContent=$("#modalContent");
let favorites=JSON.parse(localStorage.getItem("recipe_favorites")||"[]");
let showFavorites=false;

const icons={"Café da manhã":"🥞","Almoço":"🍛","Jantar":"🍲","Massas":"🍝","Sobremesas":"🍰","Lanches":"🥪","Bebidas":"🥤","Air Fryer":"🍟","Fitness":"🥗","Carnes":"🥩","Vegetarianas":"🥦"};

function saveFav(){localStorage.setItem("recipe_favorites",JSON.stringify(favorites));$("#favCount").textContent=favorites.length}
function toggleFav(id,e){if(e)e.stopPropagation();id=Number(id);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];saveFav();render()}

// Gera uma ilustração SVG única e estável para cada receita.
// Não depende de nenhum site externo, então nunca fica com imagem quebrada.
function hashText(text){let h=0;for(let i=0;i<text.length;i++)h=(h*31+text.charCodeAt(i))>>>0;return h>>>0}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function makeRecipeImage(r){
  const seed=(hashText(r.title)+Number(r.id)*2654435761)>>>0;
  const hue=seed%360, hue2=(hue+45+(seed%80))%360;
  const bg=`hsl(${hue} 35% 94%)`, accent=`hsl(${hue} 70% 48%)`, accent2=`hsl(${hue2} 75% 55%)`;
  const base=(r.title||"").toLowerCase();
  let food="🍽️";
  if(base.includes("panqueca")) food="🥞";
  else if(base.includes("omelete")) food="🍳";
  else if(base.includes("tapioca")) food="🫓";
  else if(base.includes("pão")) food="🍞";
  else if(base.includes("mingau")) food="🥣";
  else if(base.includes("frango")) food="🍗";
  else if(base.includes("arroz")) food="🍚";
  else if(base.includes("macarrão")||base.includes("penne")||base.includes("nhoque")||base.includes("lasanha")) food="🍝";
  else if(base.includes("strogonoff")) food="🍛";
  else if(base.includes("sopa")||base.includes("caldo")) food="🍲";
  else if(base.includes("crepioca")) food="🥞";
  else if(base.includes("brigadeiro")) food="🍫";
  else if(base.includes("mousse")) food="🍮";
  else if(base.includes("pudim")) food="🍮";
  else if(base.includes("bolo")) food="🍰";
  else if(base.includes("doce")) food="🍌";
  const rot=(seed%18)-9, x1=110+(seed%160), x2=500+(seed%150), y1=105+(seed%80), y2=420+(seed%70);
  const title=esc((r.title||"").slice(0,28));
  const cat=esc(r.category||"Receita");
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg}"/><stop offset="1" stop-color="hsl(${hue2} 40% 88%)"/></linearGradient>
      <filter id="s"><feDropShadow dx="0" dy="12" stdDeviation="12" flood-opacity=".14"/></filter>
    </defs>
    <rect width="800" height="600" rx="42" fill="url(#g)"/>
    <circle cx="${x1}" cy="${y1}" r="62" fill="${accent}" opacity=".12"/>
    <circle cx="${x2}" cy="${y2}" r="88" fill="${accent2}" opacity=".12"/>
    <g transform="rotate(${rot} 400 310)" filter="url(#s)">
      <ellipse cx="400" cy="355" rx="245" ry="145" fill="#fff"/>
      <ellipse cx="400" cy="350" rx="210" ry="115" fill="hsl(${hue} 18% 97%)" stroke="${accent}" stroke-width="6"/>
      <text x="400" y="390" text-anchor="middle" font-size="118" font-family="Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">${food}</text>
    </g>
    <rect x="42" y="42" width="716" height="82" rx="26" fill="#ffffff" opacity=".86"/>
    <text x="70" y="78" font-family="Arial,sans-serif" font-size="21" font-weight="700" fill="#263238">${cat}</text>
    <text x="70" y="106" font-family="Arial,sans-serif" font-size="17" fill="#667085">${title}</text>
    <circle cx="720" cy="84" r="20" fill="${accent}" opacity=".9"/>
    <text x="720" y="91" text-anchor="middle" font-family="Arial,sans-serif" font-size="14" font-weight="700" fill="#fff">${Number(r.id)}</text>
  </svg>`;
  return "data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(svg);
}

function setRecipeImages(root, recipes){
  root.querySelectorAll("img.recipe-image, img.recipe-detail-image").forEach(img=>{
    const id=Number(img.dataset.recipeId);
    const r=recipes.find(x=>Number(x.id)===id) || RECIPES.find(x=>Number(x.id)===id);
    if(r) img.src=makeRecipeImage(r);
  });
}

function openRecipe(id){
  const r=RECIPES.find(x=>x.id===Number(id));
  if(!r)return;
  modalContent.innerHTML=`
  <img class="recipe-detail-image" alt="${esc(r.title)}" data-recipe-id="${r.id}" loading="eager">
  <div class="label">${icons[r.category]||"🍽️"} ${esc(r.category)}</div>
  <h2>${esc(r.title)}</h2>
  <div class="info"><span>⏱ ${r.time} min</span><span>👥 ${r.servings} porções</span><span>📌 ${esc(r.difficulty)}</span></div>
  <button class="favorite-modal" onclick="toggleFav(${r.id});openRecipe(${r.id})">${favorites.includes(r.id)?"❤️ Remover dos favoritos":"🤍 Adicionar aos favoritos"}</button>
  <div class="label">Ingredientes</div><ul>${r.ingredients.map(i=>`<li>${esc(i)}</li>`).join("")}</ul>
  <div class="label">Modo de preparo</div><ol>${(Array.isArray(r.steps)?r.steps:[r.steps]).map(step=>`<li>${esc(step)}</li>`).join("")}</ol>`;
  setRecipeImages(modalContent,[r]);
  modal.classList.remove("hidden");
  document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.add("hidden");document.body.style.overflow=""}
function filtered(){
 let list=RECIPES.filter(r=>{
  const q=search.value.trim().toLowerCase();
  const text=(r.title+" "+r.ingredients.join(" ")).toLowerCase();
  return (!q||text.includes(q))&&(!category.value||r.category===category.value)&&(!difficulty.value||r.difficulty===difficulty.value)&&(!time.value||r.time<=Number(time.value))&&(!showFavorites||favorites.includes(r.id));
 });
 if(sort.value==="az")list.sort((a,b)=>a.title.localeCompare(b.title));
 if(sort.value==="time")list.sort((a,b)=>a.time-b.time);
 return list;
}
function render(){
 const list=filtered();
 $("#resultsTitle").textContent=showFavorites?"Meus favoritos":"Todas as receitas";
 $("#resultsCount").textContent=`${list.length} receita${list.length===1?"":"s"}`;
 grid.innerHTML=list.map(r=>`<article class="card" onclick="openRecipe(${r.id})">
   <button class="fav" aria-label="favoritar" onclick="toggleFav(${r.id},event)">${favorites.includes(r.id)?"❤️":"🤍"}</button>
   <img class="recipe-image" alt="${esc(r.title)}" data-recipe-id="${r.id}" loading="lazy">
   <h3>${esc(r.title)}</h3>
   <div class="meta"><span>⏱ ${r.time} min</span><span>📌 ${esc(r.difficulty)}</span></div>
   <span class="tag">${esc(r.category)}</span>
 </article>`).join("");
 setRecipeImages(grid,list);
 $("#empty").classList.toggle("hidden",list.length!==0);
}
function setup(){
 const cats=[...new Set(RECIPES.map(r=>r.category))];
 category.innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option>${esc(c)}</option>`).join("");
 $("#chips").innerHTML=['Todas',...cats].map(c=>`<button class="chip ${c==="Todas"?"active":""}" data-cat="${c==="Todas"?"":esc(c)}">${esc(c)}</button>`).join("");
 document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{category.value=b.dataset.cat;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});
 [search,category,difficulty,time,sort].forEach(x=>x.addEventListener("input",render));
 $("#favoritesBtn").onclick=()=>{showFavorites=!showFavorites;$("#favoritesBtn").classList.toggle("active",showFavorites);render()};
 $("#clear").onclick=()=>{search.value="";category.value="";difficulty.value="";time.value="";showFavorites=false;render()};
 $("#close").onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
 saveFav();render();
}
setup();
