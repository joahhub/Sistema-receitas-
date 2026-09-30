const RECIPES = [
  {
    "id": 1,
    "title": "Panqueca de banana Tradicional",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 2,
    "title": "Panqueca de banana Rápida",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 3,
    "title": "Panqueca de banana Caseira",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 4,
    "title": "Panqueca de banana Cremosa",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 5,
    "title": "Panqueca de banana Especial",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 6,
    "title": "Panqueca de banana Econômica",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 7,
    "title": "Panqueca de banana Fácil",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 8,
    "title": "Panqueca de banana De domingo",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 9,
    "title": "Panqueca de banana Prática",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 10,
    "title": "Panqueca de banana Com ervas",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 11,
    "title": "Panqueca de banana Ao forno",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 12,
    "title": "Panqueca de banana Leve",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 13,
    "title": "Panqueca de banana Para família",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 14,
    "title": "Panqueca de banana Express",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 15,
    "title": "Panqueca de banana Com queijo",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 16,
    "title": "Panqueca de banana Com tomate",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 17,
    "title": "Panqueca de banana Temperada",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 18,
    "title": "Panqueca de banana Dourada",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 19,
    "title": "Panqueca de banana Da semana",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 20,
    "title": "Panqueca de banana Super simples",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 21,
    "title": "Panqueca de banana Caprichada",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-01.jpg"
  },
  {
    "id": 22,
    "title": "Panqueca de banana De frigideira",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 bananas maduras",
      "2 ovos",
      "4 colheres de aveia",
      "1 colher de chá de canela"
    ],
    "steps": "Amasse as bananas, misture os ovos, a aveia e a canela. Doure pequenas porções em frigideira antiaderente.",
    "favorite": false,
    "image": "/images/panqueca-02.jpg"
  },
  {
    "id": 23,
    "title": "Omelete simples Tradicional",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 24,
    "title": "Omelete simples Rápida",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 25,
    "title": "Omelete simples Caseira",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 26,
    "title": "Omelete simples Cremosa",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 27,
    "title": "Omelete simples Especial",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 28,
    "title": "Omelete simples Econômica",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 29,
    "title": "Omelete simples Fácil",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 30,
    "title": "Omelete simples De domingo",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 31,
    "title": "Omelete simples Prática",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 32,
    "title": "Omelete simples Com ervas",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 33,
    "title": "Omelete simples Ao forno",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 34,
    "title": "Omelete simples Leve",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 35,
    "title": "Omelete simples Para família",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 36,
    "title": "Omelete simples Express",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 37,
    "title": "Omelete simples Com queijo",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 38,
    "title": "Omelete simples Com tomate",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 39,
    "title": "Omelete simples Temperada",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 40,
    "title": "Omelete simples Dourada",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 41,
    "title": "Omelete simples Da semana",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 42,
    "title": "Omelete simples Super simples",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 43,
    "title": "Omelete simples Caprichada",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-01.jpg"
  },
  {
    "id": 44,
    "title": "Omelete simples De frigideira",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 ovos",
      "1 pitada de sal",
      "1 colher de sopa de queijo ralado",
      "1 colher de sopa de tomate picado"
    ],
    "steps": "Bata os ovos, misture os ingredientes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-02.jpg"
  },
  {
    "id": 45,
    "title": "Tapioca com queijo Tradicional",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 46,
    "title": "Tapioca com queijo Rápida",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 47,
    "title": "Tapioca com queijo Caseira",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 48,
    "title": "Tapioca com queijo Cremosa",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 49,
    "title": "Tapioca com queijo Especial",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 50,
    "title": "Tapioca com queijo Econômica",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 51,
    "title": "Tapioca com queijo Fácil",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 52,
    "title": "Tapioca com queijo De domingo",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 53,
    "title": "Tapioca com queijo Prática",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 54,
    "title": "Tapioca com queijo Com ervas",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 55,
    "title": "Tapioca com queijo Ao forno",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 56,
    "title": "Tapioca com queijo Leve",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 57,
    "title": "Tapioca com queijo Para família",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 58,
    "title": "Tapioca com queijo Express",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 59,
    "title": "Tapioca com queijo Com queijo",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 60,
    "title": "Tapioca com queijo Com tomate",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 61,
    "title": "Tapioca com queijo Temperada",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 62,
    "title": "Tapioca com queijo Dourada",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 63,
    "title": "Tapioca com queijo Da semana",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 64,
    "title": "Tapioca com queijo Super simples",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 65,
    "title": "Tapioca com queijo Caprichada",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 66,
    "title": "Tapioca com queijo De frigideira",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 colheres de sopa de goma de tapioca",
      "2 fatias de queijo",
      "sal a gosto"
    ],
    "steps": "Espalhe a goma em frigideira quente, aqueça dos dois lados, recheie com queijo e dobre.",
    "favorite": false,
    "image": "/images/tapioca-01.jpg"
  },
  {
    "id": 67,
    "title": "Pão de frigideira Tradicional",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 68,
    "title": "Pão de frigideira Rápida",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 69,
    "title": "Pão de frigideira Caseira",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 70,
    "title": "Pão de frigideira Cremosa",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 71,
    "title": "Pão de frigideira Especial",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 72,
    "title": "Pão de frigideira Econômica",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 73,
    "title": "Pão de frigideira Fácil",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 74,
    "title": "Pão de frigideira De domingo",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 75,
    "title": "Pão de frigideira Prática",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 76,
    "title": "Pão de frigideira Com ervas",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 77,
    "title": "Pão de frigideira Ao forno",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 78,
    "title": "Pão de frigideira Leve",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 79,
    "title": "Pão de frigideira Para família",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 80,
    "title": "Pão de frigideira Express",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 81,
    "title": "Pão de frigideira Com queijo",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 82,
    "title": "Pão de frigideira Com tomate",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 83,
    "title": "Pão de frigideira Temperada",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 84,
    "title": "Pão de frigideira Dourada",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 85,
    "title": "Pão de frigideira Da semana",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 86,
    "title": "Pão de frigideira Super simples",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 87,
    "title": "Pão de frigideira Caprichada",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 88,
    "title": "Pão de frigideira De frigideira",
    "category": "Café da manhã",
    "time": 15,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de farinha de aveia",
      "1 colher de sopa de iogurte",
      "1/2 colher de chá de fermento"
    ],
    "steps": "Misture tudo, coloque em frigideira untada e cozinhe em fogo baixo dos dois lados.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 89,
    "title": "Mingau de aveia Tradicional",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 90,
    "title": "Mingau de aveia Rápida",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 91,
    "title": "Mingau de aveia Caseira",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 92,
    "title": "Mingau de aveia Cremosa",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 93,
    "title": "Mingau de aveia Especial",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 94,
    "title": "Mingau de aveia Econômica",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 95,
    "title": "Mingau de aveia Fácil",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 96,
    "title": "Mingau de aveia De domingo",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 97,
    "title": "Mingau de aveia Prática",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 98,
    "title": "Mingau de aveia Com ervas",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 99,
    "title": "Mingau de aveia Ao forno",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 100,
    "title": "Mingau de aveia Leve",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 101,
    "title": "Mingau de aveia Para família",
    "category": "Café da manhã",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 102,
    "title": "Mingau de aveia Express",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 103,
    "title": "Mingau de aveia Com queijo",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 104,
    "title": "Mingau de aveia Com tomate",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 105,
    "title": "Mingau de aveia Temperada",
    "category": "Café da manhã",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 106,
    "title": "Mingau de aveia Dourada",
    "category": "Café da manhã",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 107,
    "title": "Mingau de aveia Da semana",
    "category": "Café da manhã",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 108,
    "title": "Mingau de aveia Super simples",
    "category": "Café da manhã",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 109,
    "title": "Mingau de aveia Caprichada",
    "category": "Café da manhã",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 110,
    "title": "Mingau de aveia De frigideira",
    "category": "Café da manhã",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "200 ml de leite",
      "3 colheres de sopa de aveia",
      "1 banana",
      "canela a gosto"
    ],
    "steps": "Leve o leite e a aveia ao fogo, mexendo até engrossar. Finalize com banana e canela.",
    "favorite": false,
    "image": "/images/mingau-01.jpg"
  },
  {
    "id": 111,
    "title": "Frango cremoso Tradicional",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 112,
    "title": "Frango cremoso Rápida",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 113,
    "title": "Frango cremoso Caseira",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 114,
    "title": "Frango cremoso Cremosa",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 115,
    "title": "Frango cremoso Especial",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 116,
    "title": "Frango cremoso Econômica",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 117,
    "title": "Frango cremoso Fácil",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 118,
    "title": "Frango cremoso De domingo",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 119,
    "title": "Frango cremoso Prática",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 120,
    "title": "Frango cremoso Com ervas",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 121,
    "title": "Frango cremoso Ao forno",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 122,
    "title": "Frango cremoso Leve",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 123,
    "title": "Frango cremoso Para família",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 124,
    "title": "Frango cremoso Express",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 125,
    "title": "Frango cremoso Com queijo",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 126,
    "title": "Frango cremoso Com tomate",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 127,
    "title": "Frango cremoso Temperada",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 128,
    "title": "Frango cremoso Dourada",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 129,
    "title": "Frango cremoso Da semana",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 130,
    "title": "Frango cremoso Super simples",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 131,
    "title": "Frango cremoso Caprichada",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-01.jpg"
  },
  {
    "id": 132,
    "title": "Frango cremoso De frigideira",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "300 g de frango em cubos",
      "1/2 cebola",
      "2 colheres de sopa de creme de leite",
      "sal e pimenta"
    ],
    "steps": "Doure o frango com a cebola. Tempere, desligue o fogo e misture o creme de leite.",
    "favorite": false,
    "image": "/images/frango-cremoso-02.jpg"
  },
  {
    "id": 133,
    "title": "Arroz de forno Tradicional",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 134,
    "title": "Arroz de forno Rápida",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 135,
    "title": "Arroz de forno Caseira",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 136,
    "title": "Arroz de forno Cremosa",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 137,
    "title": "Arroz de forno Especial",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 138,
    "title": "Arroz de forno Econômica",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 139,
    "title": "Arroz de forno Fácil",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 140,
    "title": "Arroz de forno De domingo",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 141,
    "title": "Arroz de forno Prática",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 142,
    "title": "Arroz de forno Com ervas",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 143,
    "title": "Arroz de forno Ao forno",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 144,
    "title": "Arroz de forno Leve",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 145,
    "title": "Arroz de forno Para família",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 146,
    "title": "Arroz de forno Express",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 147,
    "title": "Arroz de forno Com queijo",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 148,
    "title": "Arroz de forno Com tomate",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 149,
    "title": "Arroz de forno Temperada",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 150,
    "title": "Arroz de forno Dourada",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 151,
    "title": "Arroz de forno Da semana",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 152,
    "title": "Arroz de forno Super simples",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 153,
    "title": "Arroz de forno Caprichada",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 154,
    "title": "Arroz de forno De frigideira",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "200 g de frango desfiado",
      "1/2 lata de milho",
      "100 g de queijo",
      "molho de tomate"
    ],
    "steps": "Misture arroz, frango, milho e molho. Cubra com queijo e leve ao forno até gratinar.",
    "favorite": false,
    "image": "/images/arroz-forno-01.jpg"
  },
  {
    "id": 155,
    "title": "Macarrão alho e óleo Tradicional",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 156,
    "title": "Macarrão alho e óleo Rápida",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 157,
    "title": "Macarrão alho e óleo Caseira",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 158,
    "title": "Macarrão alho e óleo Cremosa",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 159,
    "title": "Macarrão alho e óleo Especial",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 160,
    "title": "Macarrão alho e óleo Econômica",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 161,
    "title": "Macarrão alho e óleo Fácil",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 162,
    "title": "Macarrão alho e óleo De domingo",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 163,
    "title": "Macarrão alho e óleo Prática",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 164,
    "title": "Macarrão alho e óleo Com ervas",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 165,
    "title": "Macarrão alho e óleo Ao forno",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 166,
    "title": "Macarrão alho e óleo Leve",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 167,
    "title": "Macarrão alho e óleo Para família",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 168,
    "title": "Macarrão alho e óleo Express",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 169,
    "title": "Macarrão alho e óleo Com queijo",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 170,
    "title": "Macarrão alho e óleo Com tomate",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 171,
    "title": "Macarrão alho e óleo Temperada",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 172,
    "title": "Macarrão alho e óleo Dourada",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 173,
    "title": "Macarrão alho e óleo Da semana",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 174,
    "title": "Macarrão alho e óleo Super simples",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 175,
    "title": "Macarrão alho e óleo Caprichada",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-01.jpg"
  },
  {
    "id": 176,
    "title": "Macarrão alho e óleo De frigideira",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "3 dentes de alho",
      "3 colheres de sopa de óleo",
      "sal e cheiro-verde"
    ],
    "steps": "Cozinhe o macarrão. Doure o alho no óleo, misture o macarrão e finalize com cheiro-verde.",
    "favorite": false,
    "image": "/images/macarrao-alho-oleo-02.jpg"
  },
  {
    "id": 177,
    "title": "Strogonoff de frango Tradicional",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 178,
    "title": "Strogonoff de frango Rápida",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 179,
    "title": "Strogonoff de frango Caseira",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 180,
    "title": "Strogonoff de frango Cremosa",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 181,
    "title": "Strogonoff de frango Especial",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 182,
    "title": "Strogonoff de frango Econômica",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 183,
    "title": "Strogonoff de frango Fácil",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 184,
    "title": "Strogonoff de frango De domingo",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 185,
    "title": "Strogonoff de frango Prática",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 186,
    "title": "Strogonoff de frango Com ervas",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 187,
    "title": "Strogonoff de frango Ao forno",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 188,
    "title": "Strogonoff de frango Leve",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 189,
    "title": "Strogonoff de frango Para família",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 190,
    "title": "Strogonoff de frango Express",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 191,
    "title": "Strogonoff de frango Com queijo",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 192,
    "title": "Strogonoff de frango Com tomate",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 193,
    "title": "Strogonoff de frango Temperada",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 194,
    "title": "Strogonoff de frango Dourada",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 195,
    "title": "Strogonoff de frango Da semana",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 196,
    "title": "Strogonoff de frango Super simples",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 197,
    "title": "Strogonoff de frango Caprichada",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 198,
    "title": "Strogonoff de frango De frigideira",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "400 g de frango",
      "1/2 cebola",
      "3 colheres de molho de tomate",
      "2 colheres de ketchup",
      "200 g de creme de leite"
    ],
    "steps": "Doure o frango e a cebola. Acrescente os molhos, cozinhe por alguns minutos e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 199,
    "title": "Escondidinho de carne Tradicional",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 200,
    "title": "Escondidinho de carne Rápida",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 201,
    "title": "Escondidinho de carne Caseira",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 202,
    "title": "Escondidinho de carne Cremosa",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 203,
    "title": "Escondidinho de carne Especial",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 204,
    "title": "Escondidinho de carne Econômica",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 205,
    "title": "Escondidinho de carne Fácil",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 206,
    "title": "Escondidinho de carne De domingo",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 207,
    "title": "Escondidinho de carne Prática",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 208,
    "title": "Escondidinho de carne Com ervas",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 209,
    "title": "Escondidinho de carne Ao forno",
    "category": "Almoço",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 210,
    "title": "Escondidinho de carne Leve",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 211,
    "title": "Escondidinho de carne Para família",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 212,
    "title": "Escondidinho de carne Express",
    "category": "Almoço",
    "time": 20,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 213,
    "title": "Escondidinho de carne Com queijo",
    "category": "Almoço",
    "time": 15,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 214,
    "title": "Escondidinho de carne Com tomate",
    "category": "Almoço",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 215,
    "title": "Escondidinho de carne Temperada",
    "category": "Almoço",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 216,
    "title": "Escondidinho de carne Dourada",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 217,
    "title": "Escondidinho de carne Da semana",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 218,
    "title": "Escondidinho de carne Super simples",
    "category": "Almoço",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 219,
    "title": "Escondidinho de carne Caprichada",
    "category": "Almoço",
    "time": 30,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 220,
    "title": "Escondidinho de carne De frigideira",
    "category": "Almoço",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de carne moída",
      "500 g de batata",
      "1/2 cebola",
      "100 g de queijo",
      "sal a gosto"
    ],
    "steps": "Prepare o purê de batata. Refogue a carne com cebola. Monte camadas, cubra com queijo e gratine.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 221,
    "title": "Sopa de legumes Tradicional",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 222,
    "title": "Sopa de legumes Rápida",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 223,
    "title": "Sopa de legumes Caseira",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 224,
    "title": "Sopa de legumes Cremosa",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 225,
    "title": "Sopa de legumes Especial",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 226,
    "title": "Sopa de legumes Econômica",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 227,
    "title": "Sopa de legumes Fácil",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 228,
    "title": "Sopa de legumes De domingo",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 229,
    "title": "Sopa de legumes Prática",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 230,
    "title": "Sopa de legumes Com ervas",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 231,
    "title": "Sopa de legumes Ao forno",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 232,
    "title": "Sopa de legumes Leve",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 233,
    "title": "Sopa de legumes Para família",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 234,
    "title": "Sopa de legumes Express",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 235,
    "title": "Sopa de legumes Com queijo",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 236,
    "title": "Sopa de legumes Com tomate",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 237,
    "title": "Sopa de legumes Temperada",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 238,
    "title": "Sopa de legumes Dourada",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 239,
    "title": "Sopa de legumes Da semana",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 240,
    "title": "Sopa de legumes Super simples",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 241,
    "title": "Sopa de legumes Caprichada",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 242,
    "title": "Sopa de legumes De frigideira",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 batatas",
      "1 cenoura",
      "1 abobrinha",
      "1/2 cebola",
      "1 litro de água",
      "sal"
    ],
    "steps": "Corte os legumes, refogue a cebola, cubra com água e cozinhe até ficarem macios.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 243,
    "title": "Crepioca recheada Tradicional",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 244,
    "title": "Crepioca recheada Rápida",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 245,
    "title": "Crepioca recheada Caseira",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 246,
    "title": "Crepioca recheada Cremosa",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 247,
    "title": "Crepioca recheada Especial",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 248,
    "title": "Crepioca recheada Econômica",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 249,
    "title": "Crepioca recheada Fácil",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 250,
    "title": "Crepioca recheada De domingo",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 251,
    "title": "Crepioca recheada Prática",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 252,
    "title": "Crepioca recheada Com ervas",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 253,
    "title": "Crepioca recheada Ao forno",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 254,
    "title": "Crepioca recheada Leve",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 255,
    "title": "Crepioca recheada Para família",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 256,
    "title": "Crepioca recheada Express",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 257,
    "title": "Crepioca recheada Com queijo",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 258,
    "title": "Crepioca recheada Com tomate",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 259,
    "title": "Crepioca recheada Temperada",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 260,
    "title": "Crepioca recheada Dourada",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 261,
    "title": "Crepioca recheada Da semana",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 262,
    "title": "Crepioca recheada Super simples",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 263,
    "title": "Crepioca recheada Caprichada",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 264,
    "title": "Crepioca recheada De frigideira",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 ovo",
      "2 colheres de sopa de tapioca",
      "2 fatias de queijo",
      "tomate"
    ],
    "steps": "Misture ovo e tapioca. Cozinhe em frigideira, recheie e dobre.",
    "favorite": false,
    "image": "/images/crepioca-01.jpg"
  },
  {
    "id": 265,
    "title": "Caldo de frango Tradicional",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 266,
    "title": "Caldo de frango Rápida",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 267,
    "title": "Caldo de frango Caseira",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 268,
    "title": "Caldo de frango Cremosa",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 269,
    "title": "Caldo de frango Especial",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 270,
    "title": "Caldo de frango Econômica",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 271,
    "title": "Caldo de frango Fácil",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 272,
    "title": "Caldo de frango De domingo",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 273,
    "title": "Caldo de frango Prática",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 274,
    "title": "Caldo de frango Com ervas",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 275,
    "title": "Caldo de frango Ao forno",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 276,
    "title": "Caldo de frango Leve",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 277,
    "title": "Caldo de frango Para família",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 278,
    "title": "Caldo de frango Express",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 279,
    "title": "Caldo de frango Com queijo",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 280,
    "title": "Caldo de frango Com tomate",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 281,
    "title": "Caldo de frango Temperada",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 282,
    "title": "Caldo de frango Dourada",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 283,
    "title": "Caldo de frango Da semana",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 284,
    "title": "Caldo de frango Super simples",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 285,
    "title": "Caldo de frango Caprichada",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 286,
    "title": "Caldo de frango De frigideira",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "300 g de frango",
      "2 batatas",
      "1 cenoura",
      "1/2 cebola",
      "1 litro de água"
    ],
    "steps": "Cozinhe o frango e os legumes. Desfie o frango, ajuste o tempero e sirva quente.",
    "favorite": false,
    "image": "/images/caldo-frango-01.jpg"
  },
  {
    "id": 287,
    "title": "Arroz com legumes Tradicional",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 288,
    "title": "Arroz com legumes Rápida",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 289,
    "title": "Arroz com legumes Caseira",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 290,
    "title": "Arroz com legumes Cremosa",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 291,
    "title": "Arroz com legumes Especial",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 292,
    "title": "Arroz com legumes Econômica",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 293,
    "title": "Arroz com legumes Fácil",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 294,
    "title": "Arroz com legumes De domingo",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 295,
    "title": "Arroz com legumes Prática",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 296,
    "title": "Arroz com legumes Com ervas",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 297,
    "title": "Arroz com legumes Ao forno",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 298,
    "title": "Arroz com legumes Leve",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 299,
    "title": "Arroz com legumes Para família",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 300,
    "title": "Arroz com legumes Express",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 301,
    "title": "Arroz com legumes Com queijo",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 302,
    "title": "Arroz com legumes Com tomate",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 303,
    "title": "Arroz com legumes Temperada",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 304,
    "title": "Arroz com legumes Dourada",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 305,
    "title": "Arroz com legumes Da semana",
    "category": "Jantar",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 306,
    "title": "Arroz com legumes Super simples",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 307,
    "title": "Arroz com legumes Caprichada",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 308,
    "title": "Arroz com legumes De frigideira",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de arroz cozido",
      "1 cenoura",
      "1/2 lata de milho",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Refogue a cebola e os legumes, acrescente o arroz e misture até aquecer.",
    "favorite": false,
    "image": "/images/arroz-legumes-01.jpg"
  },
  {
    "id": 309,
    "title": "Omelete de legumes Tradicional",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 310,
    "title": "Omelete de legumes Rápida",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 311,
    "title": "Omelete de legumes Caseira",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 312,
    "title": "Omelete de legumes Cremosa",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 313,
    "title": "Omelete de legumes Especial",
    "category": "Jantar",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 314,
    "title": "Omelete de legumes Econômica",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 315,
    "title": "Omelete de legumes Fácil",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 316,
    "title": "Omelete de legumes De domingo",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 317,
    "title": "Omelete de legumes Prática",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 318,
    "title": "Omelete de legumes Com ervas",
    "category": "Jantar",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 319,
    "title": "Omelete de legumes Ao forno",
    "category": "Jantar",
    "time": 15,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 320,
    "title": "Omelete de legumes Leve",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 321,
    "title": "Omelete de legumes Para família",
    "category": "Jantar",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 322,
    "title": "Omelete de legumes Express",
    "category": "Jantar",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 323,
    "title": "Omelete de legumes Com queijo",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 324,
    "title": "Omelete de legumes Com tomate",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 325,
    "title": "Omelete de legumes Temperada",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 326,
    "title": "Omelete de legumes Dourada",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 327,
    "title": "Omelete de legumes Da semana",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 328,
    "title": "Omelete de legumes Super simples",
    "category": "Jantar",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 329,
    "title": "Omelete de legumes Caprichada",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 330,
    "title": "Omelete de legumes De frigideira",
    "category": "Jantar",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "3 ovos",
      "1/2 cenoura ralada",
      "1/2 tomate",
      "1/4 de pimentão",
      "sal"
    ],
    "steps": "Bata os ovos, acrescente os legumes e cozinhe em frigideira até firmar.",
    "favorite": false,
    "image": "/images/omelete-legumes-01.jpg"
  },
  {
    "id": 331,
    "title": "Lasanha de frango Tradicional",
    "category": "Massas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 332,
    "title": "Lasanha de frango Rápida",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 333,
    "title": "Lasanha de frango Caseira",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 334,
    "title": "Lasanha de frango Cremosa",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 335,
    "title": "Lasanha de frango Especial",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 336,
    "title": "Lasanha de frango Econômica",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 337,
    "title": "Lasanha de frango Fácil",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 338,
    "title": "Lasanha de frango De domingo",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 339,
    "title": "Lasanha de frango Prática",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 340,
    "title": "Lasanha de frango Com ervas",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 341,
    "title": "Lasanha de frango Ao forno",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 342,
    "title": "Lasanha de frango Leve",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 343,
    "title": "Lasanha de frango Para família",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 344,
    "title": "Lasanha de frango Express",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 345,
    "title": "Lasanha de frango Com queijo",
    "category": "Massas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 346,
    "title": "Lasanha de frango Com tomate",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 347,
    "title": "Lasanha de frango Temperada",
    "category": "Massas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 348,
    "title": "Lasanha de frango Dourada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 349,
    "title": "Lasanha de frango Da semana",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 350,
    "title": "Lasanha de frango Super simples",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 351,
    "title": "Lasanha de frango Caprichada",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 352,
    "title": "Lasanha de frango De frigideira",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de frango desfiado",
      "massa para lasanha",
      "500 ml de molho de tomate",
      "300 g de queijo",
      "200 ml de creme de leite"
    ],
    "steps": "Monte camadas de molho, massa, frango e queijo. Repita e asse até a massa cozinhar e o queijo gratinar.",
    "favorite": false,
    "image": "/images/lasanha-frango-01.jpg"
  },
  {
    "id": 353,
    "title": "Macarrão cremoso Tradicional",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 354,
    "title": "Macarrão cremoso Rápida",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 355,
    "title": "Macarrão cremoso Caseira",
    "category": "Massas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 356,
    "title": "Macarrão cremoso Cremosa",
    "category": "Massas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 357,
    "title": "Macarrão cremoso Especial",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 358,
    "title": "Macarrão cremoso Econômica",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 359,
    "title": "Macarrão cremoso Fácil",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 360,
    "title": "Macarrão cremoso De domingo",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 361,
    "title": "Macarrão cremoso Prática",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 362,
    "title": "Macarrão cremoso Com ervas",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 363,
    "title": "Macarrão cremoso Ao forno",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 364,
    "title": "Macarrão cremoso Leve",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 365,
    "title": "Macarrão cremoso Para família",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 366,
    "title": "Macarrão cremoso Express",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 367,
    "title": "Macarrão cremoso Com queijo",
    "category": "Massas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 368,
    "title": "Macarrão cremoso Com tomate",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 369,
    "title": "Macarrão cremoso Temperada",
    "category": "Massas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 370,
    "title": "Macarrão cremoso Dourada",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 371,
    "title": "Macarrão cremoso Da semana",
    "category": "Massas",
    "time": 25,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 372,
    "title": "Macarrão cremoso Super simples",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 373,
    "title": "Macarrão cremoso Caprichada",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 374,
    "title": "Macarrão cremoso De frigideira",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de creme de leite",
      "100 g de queijo",
      "1/2 cebola",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Refogue a cebola, adicione creme e queijo e misture ao macarrão.",
    "favorite": false,
    "image": "/images/macarrao-cremoso-01.jpg"
  },
  {
    "id": 375,
    "title": "Nhoque de batata Tradicional",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 376,
    "title": "Nhoque de batata Rápida",
    "category": "Massas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 377,
    "title": "Nhoque de batata Caseira",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 378,
    "title": "Nhoque de batata Cremosa",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 379,
    "title": "Nhoque de batata Especial",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 380,
    "title": "Nhoque de batata Econômica",
    "category": "Massas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 381,
    "title": "Nhoque de batata Fácil",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 382,
    "title": "Nhoque de batata De domingo",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 383,
    "title": "Nhoque de batata Prática",
    "category": "Massas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 384,
    "title": "Nhoque de batata Com ervas",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 385,
    "title": "Nhoque de batata Ao forno",
    "category": "Massas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 386,
    "title": "Nhoque de batata Leve",
    "category": "Massas",
    "time": 25,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 387,
    "title": "Nhoque de batata Para família",
    "category": "Massas",
    "time": 25,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 388,
    "title": "Nhoque de batata Express",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 389,
    "title": "Nhoque de batata Com queijo",
    "category": "Massas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 390,
    "title": "Nhoque de batata Com tomate",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 391,
    "title": "Nhoque de batata Temperada",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 392,
    "title": "Nhoque de batata Dourada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 393,
    "title": "Nhoque de batata Da semana",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 394,
    "title": "Nhoque de batata Super simples",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 395,
    "title": "Nhoque de batata Caprichada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 396,
    "title": "Nhoque de batata De frigideira",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "500 g de batata",
      "1 ovo",
      "1 xícara de farinha",
      "sal"
    ],
    "steps": "Cozinhe e amasse as batatas. Misture os demais ingredientes, modele, corte e cozinhe em água fervente.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 397,
    "title": "Penne ao molho vermelho Tradicional",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 398,
    "title": "Penne ao molho vermelho Rápida",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 399,
    "title": "Penne ao molho vermelho Caseira",
    "category": "Massas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 400,
    "title": "Penne ao molho vermelho Cremosa",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 401,
    "title": "Penne ao molho vermelho Especial",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 402,
    "title": "Penne ao molho vermelho Econômica",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 403,
    "title": "Penne ao molho vermelho Fácil",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 404,
    "title": "Penne ao molho vermelho De domingo",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 405,
    "title": "Penne ao molho vermelho Prática",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 406,
    "title": "Penne ao molho vermelho Com ervas",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 407,
    "title": "Penne ao molho vermelho Ao forno",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 408,
    "title": "Penne ao molho vermelho Leve",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 409,
    "title": "Penne ao molho vermelho Para família",
    "category": "Massas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 410,
    "title": "Penne ao molho vermelho Express",
    "category": "Massas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 411,
    "title": "Penne ao molho vermelho Com queijo",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 412,
    "title": "Penne ao molho vermelho Com tomate",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 413,
    "title": "Penne ao molho vermelho Temperada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 414,
    "title": "Penne ao molho vermelho Dourada",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 415,
    "title": "Penne ao molho vermelho Da semana",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 416,
    "title": "Penne ao molho vermelho Super simples",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 417,
    "title": "Penne ao molho vermelho Caprichada",
    "category": "Massas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 418,
    "title": "Penne ao molho vermelho De frigideira",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de penne",
      "300 ml de molho de tomate",
      "1/2 cebola",
      "2 dentes de alho",
      "sal"
    ],
    "steps": "Cozinhe o penne. Refogue alho e cebola, acrescente o molho e misture à massa.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 419,
    "title": "Macarrão com queijo Tradicional",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 420,
    "title": "Macarrão com queijo Rápida",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 421,
    "title": "Macarrão com queijo Caseira",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 422,
    "title": "Macarrão com queijo Cremosa",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 423,
    "title": "Macarrão com queijo Especial",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 424,
    "title": "Macarrão com queijo Econômica",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 425,
    "title": "Macarrão com queijo Fácil",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 426,
    "title": "Macarrão com queijo De domingo",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 427,
    "title": "Macarrão com queijo Prática",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 428,
    "title": "Macarrão com queijo Com ervas",
    "category": "Massas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 429,
    "title": "Macarrão com queijo Ao forno",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 430,
    "title": "Macarrão com queijo Leve",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 431,
    "title": "Macarrão com queijo Para família",
    "category": "Massas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 432,
    "title": "Macarrão com queijo Express",
    "category": "Massas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 433,
    "title": "Macarrão com queijo Com queijo",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 434,
    "title": "Macarrão com queijo Com tomate",
    "category": "Massas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 435,
    "title": "Macarrão com queijo Temperada",
    "category": "Massas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 436,
    "title": "Macarrão com queijo Dourada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 437,
    "title": "Macarrão com queijo Da semana",
    "category": "Massas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 438,
    "title": "Macarrão com queijo Super simples",
    "category": "Massas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 439,
    "title": "Macarrão com queijo Caprichada",
    "category": "Massas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 440,
    "title": "Macarrão com queijo De frigideira",
    "category": "Massas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "250 g de macarrão",
      "200 ml de leite",
      "150 g de queijo",
      "1 colher de manteiga",
      "sal"
    ],
    "steps": "Cozinhe o macarrão. Aqueça leite, manteiga e queijo até formar molho e misture.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 441,
    "title": "Brigadeiro de colher Tradicional",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 442,
    "title": "Brigadeiro de colher Rápida",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 443,
    "title": "Brigadeiro de colher Caseira",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 444,
    "title": "Brigadeiro de colher Cremosa",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 445,
    "title": "Brigadeiro de colher Especial",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 446,
    "title": "Brigadeiro de colher Econômica",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Médio",
    "servings": 6,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 447,
    "title": "Brigadeiro de colher Fácil",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 448,
    "title": "Brigadeiro de colher De domingo",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 449,
    "title": "Brigadeiro de colher Prática",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 450,
    "title": "Brigadeiro de colher Com ervas",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 451,
    "title": "Brigadeiro de colher Ao forno",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 452,
    "title": "Brigadeiro de colher Leve",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 453,
    "title": "Brigadeiro de colher Para família",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 454,
    "title": "Brigadeiro de colher Express",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 455,
    "title": "Brigadeiro de colher Com queijo",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 456,
    "title": "Brigadeiro de colher Com tomate",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 457,
    "title": "Brigadeiro de colher Temperada",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 458,
    "title": "Brigadeiro de colher Dourada",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 459,
    "title": "Brigadeiro de colher Da semana",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 460,
    "title": "Brigadeiro de colher Super simples",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 461,
    "title": "Brigadeiro de colher Caprichada",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 462,
    "title": "Brigadeiro de colher De frigideira",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 colheres de chocolate em pó",
      "1 colher de manteiga",
      "100 ml de creme de leite"
    ],
    "steps": "Misture leite condensado, chocolate e manteiga em fogo baixo. Quando engrossar, desligue e misture o creme de leite.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 463,
    "title": "Mousse de maracujá Tradicional",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 464,
    "title": "Mousse de maracujá Rápida",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 465,
    "title": "Mousse de maracujá Caseira",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 466,
    "title": "Mousse de maracujá Cremosa",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 467,
    "title": "Mousse de maracujá Especial",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 468,
    "title": "Mousse de maracujá Econômica",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 469,
    "title": "Mousse de maracujá Fácil",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 470,
    "title": "Mousse de maracujá De domingo",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 471,
    "title": "Mousse de maracujá Prática",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 472,
    "title": "Mousse de maracujá Com ervas",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 473,
    "title": "Mousse de maracujá Ao forno",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 474,
    "title": "Mousse de maracujá Leve",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 475,
    "title": "Mousse de maracujá Para família",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 476,
    "title": "Mousse de maracujá Express",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 477,
    "title": "Mousse de maracujá Com queijo",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 478,
    "title": "Mousse de maracujá Com tomate",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 479,
    "title": "Mousse de maracujá Temperada",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 480,
    "title": "Mousse de maracujá Dourada",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 481,
    "title": "Mousse de maracujá Da semana",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 482,
    "title": "Mousse de maracujá Super simples",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 483,
    "title": "Mousse de maracujá Caprichada",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 484,
    "title": "Mousse de maracujá De frigideira",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "1 caixa de creme de leite",
      "200 ml de suco concentrado de maracujá"
    ],
    "steps": "Bata todos os ingredientes no liquidificador e leve à geladeira por pelo menos 2 horas.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 485,
    "title": "Pudim simples Tradicional",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 486,
    "title": "Pudim simples Rápida",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 487,
    "title": "Pudim simples Caseira",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 488,
    "title": "Pudim simples Cremosa",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 489,
    "title": "Pudim simples Especial",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 490,
    "title": "Pudim simples Econômica",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 491,
    "title": "Pudim simples Fácil",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 492,
    "title": "Pudim simples De domingo",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 493,
    "title": "Pudim simples Prática",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 494,
    "title": "Pudim simples Com ervas",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 495,
    "title": "Pudim simples Ao forno",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 496,
    "title": "Pudim simples Leve",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 497,
    "title": "Pudim simples Para família",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 498,
    "title": "Pudim simples Express",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 499,
    "title": "Pudim simples Com queijo",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 500,
    "title": "Pudim simples Com tomate",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 501,
    "title": "Pudim simples Temperada",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 502,
    "title": "Pudim simples Dourada",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 503,
    "title": "Pudim simples Da semana",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 504,
    "title": "Pudim simples Super simples",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 505,
    "title": "Pudim simples Caprichada",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 506,
    "title": "Pudim simples De frigideira",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "1 lata de leite condensado",
      "2 medidas de leite",
      "3 ovos",
      "1 xícara de açúcar"
    ],
    "steps": "Faça a calda com açúcar. Bata os demais ingredientes, coloque na forma e asse em banho-maria até firmar.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 507,
    "title": "Bolo de chocolate Tradicional",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 508,
    "title": "Bolo de chocolate Rápida",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 509,
    "title": "Bolo de chocolate Caseira",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 510,
    "title": "Bolo de chocolate Cremosa",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 511,
    "title": "Bolo de chocolate Especial",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 512,
    "title": "Bolo de chocolate Econômica",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 513,
    "title": "Bolo de chocolate Fácil",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 514,
    "title": "Bolo de chocolate De domingo",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 515,
    "title": "Bolo de chocolate Prática",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 516,
    "title": "Bolo de chocolate Com ervas",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 517,
    "title": "Bolo de chocolate Ao forno",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 518,
    "title": "Bolo de chocolate Leve",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 519,
    "title": "Bolo de chocolate Para família",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 4,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 520,
    "title": "Bolo de chocolate Express",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 521,
    "title": "Bolo de chocolate Com queijo",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 522,
    "title": "Bolo de chocolate Com tomate",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 523,
    "title": "Bolo de chocolate Temperada",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 524,
    "title": "Bolo de chocolate Dourada",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 525,
    "title": "Bolo de chocolate Da semana",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 526,
    "title": "Bolo de chocolate Super simples",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 527,
    "title": "Bolo de chocolate Caprichada",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 528,
    "title": "Bolo de chocolate De frigideira",
    "category": "Sobremesas",
    "time": 10,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "2 xícaras de farinha",
      "1 xícara de açúcar",
      "1 xícara de chocolate em pó",
      "2 ovos",
      "1 xícara de leite",
      "1 colher de fermento"
    ],
    "steps": "Misture os ingredientes, deixando o fermento por último. Asse em forno preaquecido até passar no teste do palito.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 529,
    "title": "Doce de banana Tradicional",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 530,
    "title": "Doce de banana Rápida",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 6,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 531,
    "title": "Doce de banana Caseira",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 532,
    "title": "Doce de banana Cremosa",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 533,
    "title": "Doce de banana Especial",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 534,
    "title": "Doce de banana Econômica",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 535,
    "title": "Doce de banana Fácil",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 5,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 536,
    "title": "Doce de banana De domingo",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 3,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 537,
    "title": "Doce de banana Prática",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 538,
    "title": "Doce de banana Com ervas",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 539,
    "title": "Doce de banana Ao forno",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 540,
    "title": "Doce de banana Leve",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 541,
    "title": "Doce de banana Para família",
    "category": "Sobremesas",
    "time": 25,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 542,
    "title": "Doce de banana Express",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Médio",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 543,
    "title": "Doce de banana Com queijo",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 544,
    "title": "Doce de banana Com tomate",
    "category": "Sobremesas",
    "time": 45,
    "difficulty": "Médio",
    "servings": 3,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 545,
    "title": "Doce de banana Temperada",
    "category": "Sobremesas",
    "time": 40,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 546,
    "title": "Doce de banana Dourada",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Médio",
    "servings": 1,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 547,
    "title": "Doce de banana Da semana",
    "category": "Sobremesas",
    "time": 30,
    "difficulty": "Fácil",
    "servings": 1,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 548,
    "title": "Doce de banana Super simples",
    "category": "Sobremesas",
    "time": 20,
    "difficulty": "Fácil",
    "servings": 4,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 549,
    "title": "Doce de banana Caprichada",
    "category": "Sobremesas",
    "time": 15,
    "difficulty": "Fácil",
    "servings": 5,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  },
  {
    "id": 550,
    "title": "Doce de banana De frigideira",
    "category": "Sobremesas",
    "time": 35,
    "difficulty": "Fácil",
    "servings": 2,
    "ingredients": [
      "4 bananas",
      "1/2 xícara de açúcar",
      "canela a gosto",
      "1 colher de água"
    ],
    "steps": "Corte as bananas e cozinhe com açúcar, água e canela até formar um doce cremoso.",
    "favorite": false,
    "image": "/images/recipe-placeholder.svg"
  }
];
