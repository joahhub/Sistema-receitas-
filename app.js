const $=s=>document.querySelector(s);
const grid=$("#grid"), search=$("#search"), category=$("#category"), difficulty=$("#difficulty"), time=$("#time"), sort=$("#sort");
const modal=$("#modal"), modalContent=$("#modalContent");
let favorites=JSON.parse(localStorage.getItem("recipe_favorites")||"[]");
let showFavorites=false;

const icons={"Café da manhã":"🥞","Almoço":"🍛","Jantar":"🍲","Massas":"🍝","Sobremesas":"🍰","Lanches":"🥪","Bebidas":"🥤","Air Fryer":"🍟","Fitness":"🥗","Carnes":"🥩","Vegetarianas":"🥦"};

function saveFav(){localStorage.setItem("recipe_favorites",JSON.stringify(favorites));$("#favCount").textContent=favorites.length}
function toggleFav(id,e){if(e)e.stopPropagation();id=Number(id);favorites=favorites.includes(id)?favorites.filter(x=>x!==id):[...favorites,id];saveFav();render()}
function openRecipe(id){const r=RECIPES.find(x=>x.id===Number(id));if(!r)return;modalContent.innerHTML=`
  ${r.image?`<img class="recipe-detail-image" src="${r.image}" alt="${r.title}" loading="lazy">`:""}
  <div class="label">${icons[r.category]||"🍽️"} ${r.category}</div>
  <h2>${r.title}</h2>
  <div class="info"><span>⏱ ${r.time} min</span><span>👥 ${r.servings} porções</span><span>📌 ${r.difficulty}</span></div>
  <button class="favorite-modal" onclick="toggleFav(${r.id});openRecipe(${r.id})">${favorites.includes(r.id)?"❤️ Remover dos favoritos":"🤍 Adicionar aos favoritos"}</button>
  <div class="label">Ingredientes</div><ul>${r.ingredients.map(i=>`<li>${i}</li>`).join("")}</ul>
  <div class="label">Modo de preparo</div><ol>${(Array.isArray(r.steps)?r.steps:[r.steps]).map(step=>`<li>${step}</li>`).join("")}</ol>`;
modal.classList.remove("hidden");document.body.style.overflow="hidden"}
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
   ${r.image?`<img class="recipe-image" src="${r.image}" alt="${r.title}" loading="lazy">`:`<div class="emoji">${icons[r.category]||"🍽️"}</div>`}
   <h3>${r.title}</h3>
   <div class="meta"><span>⏱ ${r.time} min</span><span>📌 ${r.difficulty}</span></div>
   <span class="tag">${r.category}</span>
 </article>`).join("");
 $("#empty").classList.toggle("hidden",list.length!==0);
}
function setup(){
 const cats=[...new Set(RECIPES.map(r=>r.category))];
 category.innerHTML='<option value="">Todas as categorias</option>'+cats.map(c=>`<option>${c}</option>`).join("");
 $("#chips").innerHTML=['Todas',...cats].map(c=>`<button class="chip ${c==="Todas"?"active":""}" data-cat="${c==="Todas"?"":c}">${c}</button>`).join("");
 document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{category.value=b.dataset.cat;document.querySelectorAll(".chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");render()});
 [search,category,difficulty,time,sort].forEach(x=>x.addEventListener("input",render));
 $("#favoritesBtn").onclick=()=>{showFavorites=!showFavorites;$("#favoritesBtn").classList.toggle("active",showFavorites);render()};
 $("#clear").onclick=()=>{search.value="";category.value="";difficulty.value="";time.value="";showFavorites=false;render()};
 $("#close").onclick=closeModal;modal.onclick=e=>{if(e.target===modal)closeModal()};
 document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
 saveFav();render();
}
setup();