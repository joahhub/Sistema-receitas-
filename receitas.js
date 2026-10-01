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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que a superfície firmar, porque calor demais deixa a receita seca. Se quiser mais maciez, junte 1 colher de sopa de leite à massa (ou aos ovos) antes de cozinhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão ao forno: em vez da frigideira, despeje a massa em uma forma pequena untada e asse a 180 °C por 15 a 20 minutos, até firmar e dourar. Espete um palito no centro: deve sair limpo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão com queijo: sirva com uma fatia fina de queijo minas frescal ao lado, combinação tradicional com doce de banana."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela média, um garfo, uma frigideira antiaderente e uma espátula. Use bananas bem maduras, com pintinhas marrons na casca: elas deixam a massa naturalmente doce.",
      "Descasque as bananas e amasse com o garfo dentro da tigela até virar um purê, com poucos pedaços.",
      "Junte os ovos e bata com o garfo por cerca de 1 minuto, até ficarem bem misturados ao purê.",
      "Acrescente a aveia e a canela e mexa até não sobrar aveia seca. Deixe a massa descansar por 2 minutos para a aveia absorver o líquido e engrossar. A massa deve ficar mole, mas não líquida: se estiver firme demais, junte 1 colher de sopa de leite ou água; se estiver mole demais, 1 colher de aveia.",
      "Aqueça a frigideira em fogo médio-baixo por 1 minuto. Passe um fio de óleo ou um pouco de manteiga com papel-toalha, só para untar de leve.",
      "Com uma colher de sopa, coloque porções de massa na frigideira, deixando espaço entre elas. Faça panquecas pequenas, de uns 8 cm, porque são mais fáceis de virar.",
      "Deixe cozinhar por 2 a 3 minutos sem mexer, até aparecerem bolhinhas na superfície e as bordas ficarem firmes e secas.",
      "Vire com a espátula, com cuidado, e cozinhe mais 1 a 2 minutos, até dourar do outro lado. Se dourar rápido por fora e ficar crua por dentro, diminua o fogo.",
      "Passe as panquecas para um prato e repita com o restante da massa, untando de novo a frigideira só se começar a grudar.",
      "Sirva morna, com mel, frutas ou iogurte. Se sobrar, guarde em pote fechado na geladeira por até 2 dias e reaqueça na frigideira.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que a superfície firmar, porque calor demais deixa a receita seca. Se quiser mais maciez, junte 1 colher de sopa de leite à massa (ou aos ovos) antes de cozinhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão ao forno: em vez da frigideira, despeje a massa em uma forma pequena untada e asse a 180 °C por 15 a 20 minutos, até firmar e dourar. Espete um palito no centro: deve sair limpo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o tomate em cubinhos bem pequenos e, se puder, tire as sementes e o excesso de líquido para o omelete não ficar molhado.",
      "Quebre os ovos em uma tigela e junte o sal.",
      "Bata com um garfo por cerca de 1 minuto, até a clara e a gema ficarem bem misturadas, sem fios de clara.",
      "Aqueça uma frigideira antiaderente pequena (de 18 a 20 cm) em fogo médio por 1 minuto e unte com um fio de óleo ou um pouco de manteiga.",
      "Despeje os ovos e incline a frigideira para espalhar. Deixe cozinhar sem mexer por cerca de 1 minuto, até as bordas firmarem.",
      "Com a espátula, puxe as bordas cozidas para o centro e incline a frigideira para o ovo cru escorrer para as beiradas. Repita 2 ou 3 vezes.",
      "Quando a superfície ainda estiver úmida e brilhante, abaixe o fogo e espalhe o queijo ralado e o tomate sobre uma das metades.",
      "Dobre a outra metade por cima com a espátula e cozinhe por mais 30 segundos a 1 minuto, só para o queijo derreter. Mais tempo que isso deixa o omelete seco.",
      "Deslize para o prato e sirva na hora, ainda macio por dentro.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão cremosa: use um queijo que derreta bem, como coalho ou muçarela, e deixe aquecer em fogo baixo até ficar macio e derretido por dentro."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm, uma peneira e uma espátula. Use a goma já hidratada, vendida pronta para tapioca (parece uma areia úmida e solta). Se a sua for goma seca, hidrate antes, seguindo as instruções da embalagem.",
      "Misture uma pitada de sal à goma e passe tudo pela peneira sobre um prato. Peneirar deixa a goma solta e a tapioca mais leve e macia.",
      "Aqueça a frigideira em fogo médio por 1 minuto, seca, sem óleo.",
      "Espalhe a goma peneirada na frigideira, formando uma camada uniforme e fina que cubra todo o fundo. Não aperte a goma.",
      "Deixe cozinhar por 30 segundos a 1 minuto, até os grãos se unirem e formarem uma massa firme. Ao sacudir a frigideira, a tapioca deve se soltar do fundo.",
      "Vire com a espátula (ou sacuda a frigideira com firmeza) e deixe mais 20 a 30 segundos do outro lado.",
      "Abaixe o fogo, coloque as fatias de queijo sobre uma das metades e espere alguns segundos para começarem a amolecer.",
      "Dobre a tapioca ao meio e deixe 30 segundos a 1 minuto de cada lado, até o queijo derreter por dentro.",
      "Sirva quente. A tapioca endurece ao esfriar, por isso o ideal é comer na hora.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que a superfície firmar, porque calor demais deixa a receita seca. Se quiser mais maciez, junte 1 colher de sopa de leite à massa (ou aos ovos) antes de cozinhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão ao forno: em vez da frigideira, despeje a massa em uma forma pequena untada e asse a 180 °C por 15 a 20 minutos, até firmar e dourar. Espete um palito no centro: deve sair limpo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma tigela pequena, um garfo e uma frigideira antiaderente pequena com tampa.",
      "Quebre o ovo na tigela e bata com o garfo até misturar a clara com a gema.",
      "Junte o iogurte e misture bem.",
      "Acrescente a farinha de aveia e o fermento e mexa até obter uma massa lisa e espessa, parecida com massa de panqueca grossa. Deixe descansar por 2 minutos. Se estiver muito firme, junte 1 colher de chá de leite ou água.",
      "Aqueça a frigideira em fogo baixo por 1 minuto e unte de leve com óleo ou manteiga.",
      "Despeje a massa formando um disco com cerca de 1,5 cm de altura e tampe a frigideira.",
      "Cozinhe por 3 a 4 minutos sem abrir, até a superfície secar, aparecerem bolhinhas e o fundo dourar.",
      "Vire o pão com cuidado, tampe de novo e cozinhe por mais 2 a 3 minutos. Para testar, espete um palito ou garfo no centro: deve sair limpo.",
      "Deixe esfriar por 2 minutos, corte ao meio e recheie com queijo, ovo ou o que preferir. Sirva morno.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão com queijo: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma panela pequena de fundo grosso e uma colher de pau ou de silicone.",
      "Amasse a banana com um garfo em um prato e reserve.",
      "Coloque o leite e a aveia na panela e misture antes de acender o fogo, para a aveia não formar grumos.",
      "Leve ao fogo médio-baixo e mexa sem parar, raspando o fundo, por 4 a 5 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver forte: o leite pode subir e transbordar.",
      "Abaixe o fogo, junte a banana amassada e continue mexendo por 2 a 3 minutos, até o mingau engrossar e ficar cremoso. No ponto certo, a colher deixa um rastro no fundo da panela.",
      "Ajuste a textura: se ficar grosso demais, junte 2 colheres de sopa de leite; se ficar ralo, deixe mais 1 minuto no fogo.",
      "Desligue, polvilhe a canela e misture. Deixe descansar por 1 a 2 minutos, porque o mingau engrossa um pouco ao amornar.",
      "Sirva em uma tigela, ainda morno, com mais canela por cima. Prove antes de comer: a aveia guarda bastante calor.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola em cubinhos. Seque o frango com papel-toalha, para ele dourar em vez de cozinhar no vapor, e tempere com sal e pimenta. Se tiver tempo, deixe descansar por 10 minutos.",
      "Aqueça uma panela ou frigideira funda em fogo médio por 1 minuto e coloque um fio de óleo ou azeite.",
      "Refogue a cebola por 2 a 3 minutos, mexendo, até ficar macia e transparente.",
      "Junte o frango em uma camada só e deixe por 2 a 3 minutos sem mexer, para dourar. Depois mexa e doure os outros lados por mais 4 a 5 minutos.",
      "Acrescente 3 colheres de sopa de água, tampe e cozinhe em fogo baixo por 8 a 10 minutos, mexendo de vez em quando. Corte um pedaço ao meio para conferir: não pode ter parte rosada. Se secar demais, junte mais 2 colheres de água.",
      "Retire a tampa e, se ainda houver muito líquido, cozinhe em fogo médio por 1 a 2 minutos para reduzir.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 a 2 minutos, só até aquecer e formar um molho. Não deixe ferver forte, para o creme não talhar.",
      "Prove e ajuste o sal e a pimenta. Sirva com arroz, purê ou batata cozida.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão cremosa: não deixe passar do tempo indicado: retire do forno assim que estiver no ponto e deixe descansar antes de servir, para manter a textura macia."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão ao forno: esta receita já vai ao forno. Preaqueça por 10 minutos antes de levar e evite abrir a porta nos primeiros 20 minutos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão dourada: nos últimos 5 a 10 minutos, deixe o refratário na parte de cima do forno com o grill ligado (ou em temperatura mais alta), vigiando sempre para dourar sem queimar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Unte um refratário médio (cerca de 20 x 25 cm) com óleo ou manteiga. Escorra o milho e rale ou pique o queijo.",
      "Em uma tigela grande, misture o arroz, o frango, o milho e a maior parte do molho de tomate, reservando 3 a 4 colheres de sopa para a cobertura. Mexa com um garfo para soltar os grãos.",
      "Prove e ajuste o sal. Lembre que o frango e o molho já costumam ter sal.",
      "Coloque metade da mistura no refratário e pressione de leve com as costas de uma colher.",
      "Espalhe metade do queijo e cubra com o restante da mistura, alisando a superfície.",
      "Finalize com o molho reservado e o queijo restante.",
      "Leve ao forno por 15 a 20 minutos, até o queijo derreter, dourar e borbulhar nas bordas.",
      "Retire e deixe descansar por 5 minutos antes de cortar, para as camadas firmarem. Sirva com salada.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão dourada: deixe o alho chegar a um dourado-claro, sem escurecer. Alho muito escuro amarga o prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Descasque o alho e fatie bem fino, ou pique. Pique o cheiro-verde. Coloque 2 litros de água em uma panela grande.",
      "Leve a água ao fogo alto. Quando ferver forte, junte 1 colher de sopa de sal e o macarrão, mexendo no primeiro minuto para não grudar.",
      "Cozinhe pelo tempo da embalagem menos 1 minuto, para o macarrão ficar al dente (firme ao morder). Antes de escorrer, reserve 1 xícara da água do cozimento.",
      "Enquanto o macarrão cozinha, coloque o óleo e o alho em uma frigideira grande ainda fria e ligue o fogo baixo. Assim o alho doura devagar e não amarga. Mexa por 2 a 3 minutos, até ficar dourado-claro. Se escurecer, tire do fogo: alho queimado amarga.",
      "Escorra o macarrão e passe para a frigideira com o alho. Misture em fogo médio por 1 minuto para o óleo envolver todos os fios.",
      "Se estiver seco, junte a água reservada, 2 colheres de sopa por vez, até ficar brilhante e soltinho.",
      "Desligue o fogo, junte o cheiro-verde, prove e ajuste o sal. Sirva imediatamente, porque o macarrão seca ao esfriar.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de cerca de 2 cm, seque com papel-toalha e tempere com sal. Pique a cebola.",
      "Aqueça uma panela larga em fogo médio-alto com um fio de óleo.",
      "Doure o frango em duas levas, para a panela não encher e o frango dourar em vez de cozinhar na água. Deixe 3 a 4 minutos por leva, mexendo pouco. Volte tudo para a panela.",
      "Abaixe o fogo para médio, junte a cebola e refogue por 2 a 3 minutos, até ficar macia.",
      "Acrescente o molho de tomate, o ketchup e meia xícara de água. Raspe o fundo da panela para soltar os pedaços dourados, que dão sabor.",
      "Tampe e cozinhe em fogo baixo por 10 a 12 minutos, mexendo de vez em quando, até o frango ficar cozido por inteiro (sem parte rosada) e o molho encorpado.",
      "Destampe e cozinhe por mais 2 a 3 minutos para apurar. No ponto certo, a colher deixa um rastro no fundo.",
      "Desligue o fogo, junte o creme de leite e mexa só até incorporar. Não ferva depois disso, para o molho não talhar.",
      "Prove e ajuste o sal. Sirva com arroz e batata palha.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão cremosa: não deixe passar do tempo indicado: retire do forno assim que estiver no ponto e deixe descansar antes de servir, para manter a textura macia."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão ao forno: esta receita já vai ao forno. Preaqueça por 10 minutos antes de levar e evite abrir a porta nos primeiros 20 minutos."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão dourada: nos últimos 5 a 10 minutos, deixe o refratário na parte de cima do forno com o grill ligado (ou em temperatura mais alta), vigiando sempre para dourar sem queimar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as batatas, corte em pedaços de uns 3 cm e coloque em uma panela com água fria e uma pitada de sal. Leve ao fogo, tampe e, depois que ferver, cozinhe por 15 a 20 minutos, até um garfo entrar sem resistência.",
      "Enquanto isso, pique a cebola. Em outra panela, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte a carne moída e desmanche com a colher. Cozinhe por 8 a 10 minutos, mexendo, até secar o líquido e a carne dourar. Tempere com sal e, se soltar muita gordura, retire com uma colher.",
      "Preaqueça o forno a 200 °C e unte um refratário médio.",
      "Escorra as batatas, guardando meia xícara da água do cozimento. Amasse ainda quentes com um espremedor ou um garfo, juntando um pouco de manteiga ou óleo e 2 a 3 colheres da água reservada, até virar um purê macio e firme. Ajuste o sal.",
      "Monte: espalhe a carne no fundo do refratário, cubra com metade do queijo e depois com o purê, alisando com as costas da colher.",
      "Espalhe o queijo restante por cima.",
      "Asse por 15 a 20 minutos, até o queijo derreter e dourar.",
      "Deixe descansar por 5 minutos antes de servir, para não desmanchar ao cortar.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Lave e descasque as batatas e a cenoura. Lave a abobrinha (a casca pode ficar). Corte tudo em cubos de cerca de 2 cm: pedaços do mesmo tamanho cozinham juntos. Pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos, até ficar macia.",
      "Junte a batata e a cenoura e mexa por 1 minuto.",
      "Adicione a água e 1 colher de chá de sal. Tampe e aumente o fogo até ferver.",
      "Abaixe o fogo e cozinhe tampado por 15 minutos.",
      "Junte a abobrinha, que cozinha mais rápido, e cozinhe por mais 5 a 8 minutos, até todos os legumes ficarem macios.",
      "Escolha a textura: deixe em pedaços, amasse alguns legumes com a concha na própria panela, ou bata parte da sopa no liquidificador. Ao bater, encha o copo só até a metade e segure a tampa com um pano, porque o líquido quente expande.",
      "Prove, ajuste o sal e sirva bem quente.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que a superfície firmar, porque calor demais deixa a receita seca. Se quiser mais maciez, junte 1 colher de sopa de leite à massa (ou aos ovos) antes de cozinhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e pegue uma frigideira antiaderente de uns 20 cm. Corte o tomate em cubinhos ou rodelas finas.",
      "Em uma tigela, bata o ovo com a goma de tapioca e uma pitada de sal, até ficar liso e sem grumos. Deixe descansar por 1 minuto para a goma hidratar.",
      "Aqueça a frigideira em fogo médio-baixo e unte bem de leve com óleo.",
      "Despeje a massa e gire a frigideira para espalhar, formando um disco fino.",
      "Cozinhe por 1 a 2 minutos, até as bordas soltarem e a superfície perder o brilho.",
      "Vire com a espátula e cozinhe por mais 30 a 40 segundos.",
      "Coloque o queijo e o tomate em uma das metades, abaixe o fogo e tampe por 30 a 60 segundos, até o queijo derreter.",
      "Dobre ao meio, passe para o prato e sirva quente.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Corte o frango em cubos de 2 a 3 cm, descasque e corte as batatas e a cenoura em cubos de 2 cm e pique a cebola.",
      "Em uma panela grande, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte o frango e mexa por 3 a 4 minutos, até mudar de cor. Não precisa dourar.",
      "Adicione a água e sal a gosto e deixe ferver em fogo alto. Com uma colher, retire a espuma que subir à superfície: ela deixa o caldo mais limpo.",
      "Junte as batatas e a cenoura, tampe parcialmente e cozinhe em fogo baixo por 20 a 25 minutos, até os legumes ficarem macios e o frango bem cozido.",
      "Para engrossar o caldo, amasse alguns pedaços de batata contra a parede da panela e mexa. Se preferir o frango desfiado, retire-o, desfie com dois garfos e devolva à panela.",
      "Prove e ajuste o sal. Sirva bem quente, com cheiro-verde picado, se gostar.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão dourada: deixe a cebola dourar por 1 a 2 minutos a mais antes de juntar a cenoura, para dar mais sabor ao arroz."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura (ou corte em cubinhos bem pequenos), pique a cebola e escorra o milho. Se o arroz estava na geladeira, solte os grãos com um garfo.",
      "Em uma frigideira ou panela larga, aqueça um fio de óleo em fogo médio e refogue a cebola por 2 minutos.",
      "Junte a cenoura e cozinhe por 3 a 4 minutos, mexendo, até ficar macia. Se estiver em cubinhos, acrescente 2 colheres de sopa de água e tampe.",
      "Acrescente o milho e mexa por 1 minuto.",
      "Junte o arroz aos poucos, misturando com um garfo ou colher, por 3 a 4 minutos, até aquecer por inteiro. Se estiver seco, pingue 2 colheres de sopa de água.",
      "Prove, ajuste o sal e sirva.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que a superfície firmar, porque calor demais deixa a receita seca. Se quiser mais maciez, junte 1 colher de sopa de leite à massa (ou aos ovos) antes de cozinhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão ao forno: em vez da frigideira, despeje a massa em uma forma pequena untada e asse a 180 °C por 15 a 20 minutos, até firmar e dourar. Espete um palito no centro: deve sair limpo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão dourada: para dourar bem, deixe a frigideira aquecer antes e não mexa nem vire a receita antes da hora. Quando a superfície soltar com facilidade e estiver dourada, aí sim vire ou mexa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Rale a cenoura, pique o tomate sem as sementes e corte o pimentão em cubinhos de uns 0,5 cm.",
      "Em uma frigideira de uns 24 cm, aqueça um fio de óleo em fogo médio. Refogue o pimentão e a cenoura por 2 a 3 minutos, até amolecerem. Junte o tomate, mexa por 1 minuto e espalhe os legumes pelo fundo.",
      "Em uma tigela, bata os ovos com o sal por cerca de 1 minuto.",
      "Abaixe o fogo para médio-baixo, despeje os ovos sobre os legumes e incline a frigideira para cobrir tudo.",
      "Tampe e cozinhe por 3 a 4 minutos sem mexer, até a superfície quase firmar e não escorrer mais líquido.",
      "Solte as bordas com a espátula. Para virar, coloque um prato grande sobre a frigideira, vire de uma vez e deslize o omelete de volta, dourando por mais 1 a 2 minutos. Se preferir, apenas dobre ao meio.",
      "Corte em fatias e sirva quente.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão cremosa: não deixe passar do tempo indicado: retire do forno assim que estiver no ponto e deixe descansar antes de servir, para manter a textura macia."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão ao forno: esta receita já vai ao forno. Preaqueça por 10 minutos antes de levar e evite abrir a porta nos primeiros 20 minutos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão dourada: nos últimos 5 a 10 minutos, deixe o refratário na parte de cima do forno com o grill ligado (ou em temperatura mais alta), vigiando sempre para dourar sem queimar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 200 °C. Se o queijo for em bloco, rale ou corte em fatias. Separe um refratário de cerca de 20 x 30 cm.",
      "Leia a embalagem da massa. Se for pré-cozida, use direto. Se precisar cozinhar, ferva em água com sal, poucas folhas por vez, pelo tempo indicado, escorra e deixe abertas sobre um pano limpo, sem sobrepor.",
      "Prepare o recheio: em uma panela, misture o frango desfiado com metade do molho de tomate e aqueça em fogo médio por 3 a 4 minutos, mexendo. Desligue o fogo, junte o creme de leite e ajuste o sal.",
      "Monte a primeira camada: espalhe 2 a 3 colheres de molho no fundo do refratário, cubra com folhas de massa, metade do recheio e um terço do queijo.",
      "Repita: massa, o restante do recheio e mais um terço do queijo.",
      "Finalize com uma última camada de massa, o molho restante e o queijo que sobrou.",
      "Cubra com papel-alumínio untado por dentro, para o queijo não grudar, e asse por 25 minutos.",
      "Retire o papel e asse por mais 10 a 15 minutos, até o queijo dourar e as bordas borbulharem.",
      "Deixe descansar por 10 minutos antes de cortar: a lasanha firma e os pedaços saem inteiros.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola bem fina e rale o queijo. Coloque 2 litros de água em uma panela grande para ferver.",
      "Quando a água ferver, junte 1 colher de sopa de sal e o macarrão. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Na mesma panela, aqueça um fio de óleo ou um pouco de manteiga em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar transparente.",
      "Abaixe o fogo, junte o creme de leite e mexa por 1 minuto, até aquecer, sem ferver.",
      "Acrescente o queijo aos poucos, mexendo até derreter e formar um molho liso, por 1 a 2 minutos. Se ficar grosso demais, junte a água do cozimento, 2 colheres de sopa por vez.",
      "Devolva o macarrão à panela e misture por 1 minuto, até o molho envolver tudo.",
      "Desligue o fogo, prove e ajuste o sal. Sirva logo, porque o molho engrossa ao esfriar.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão dourada: depois de cozidos, doure os nhoques em uma frigideira com um pouco de manteiga, por 1 a 2 minutos de cada lado, até formarem uma casquinha dourada."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Lave as batatas e cozinhe inteiras, com casca, em água fervente por 25 a 30 minutos, até um garfo entrar fácil. A casca evita que a batata absorva água, e a massa fica mais leve.",
      "Escorra, descasque ainda quentes (segure com um pano) e passe no espremedor, até formar um purê sem grumos. Espalhe sobre a bancada por 5 a 10 minutos para o vapor sair.",
      "Junte o ovo, 1 colher de chá de sal e metade da farinha. Misture com as mãos.",
      "Acrescente o restante da farinha aos poucos, amassando só até a massa desgrudar das mãos e ficar macia. Não amasse demais, porque o nhoque fica duro. Se grudar muito, junte 1 colher de sopa de farinha.",
      "Divida a massa em 4 partes. Em bancada enfarinhada, enrole cada uma em um cordão de cerca de 2 cm de espessura e corte pedaços de 2 cm.",
      "Se quiser, marque cada pedaço com as costas de um garfo: os sulcos seguram o molho.",
      "Teste um nhoque: ferva bastante água com sal e cozinhe só um. Se desmanchar, junte um pouco mais de farinha à massa.",
      "Cozinhe os nhoques aos poucos na água fervente. Quando subirem à superfície, deixe mais 30 segundos a 1 minuto e retire com a escumadeira.",
      "Sirva com molho de tomate, manteiga e queijo ou o que preferir.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Pique a cebola e o alho. Coloque 2 litros de água em uma panela grande.",
      "Quando a água ferver forte, junte 1 colher de sopa de sal e o penne. Cozinhe pelo tempo da embalagem menos 1 minuto. Reserve meia xícara da água do cozimento e escorra.",
      "Em uma panela ou frigideira grande, aqueça um fio de azeite ou óleo em fogo médio e refogue a cebola por 2 a 3 minutos, até ficar macia.",
      "Junte o alho e mexa por 30 segundos a 1 minuto, sem deixar queimar.",
      "Acrescente o molho de tomate e 3 colheres de sopa da água do cozimento. Cozinhe em fogo baixo por 5 minutos, com a panela semitampada, pois o molho respinga. Se estiver muito ácido, use uma pitada de açúcar.",
      "Junte o penne ao molho e misture por 1 a 2 minutos. Se secar, acrescente mais um pouco da água reservada.",
      "Prove, ajuste o sal e sirva quente.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste o sal."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou travessa bonita e finalize com cheiro-verde picado."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão com ervas: finalize com cheiro-verde, salsinha ou orégano. Coloque as ervas só no final, com o fogo desligado, para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão ao forno: depois de pronto, passe para um refratário untado, cubra com queijo ralado e leve ao forno preaquecido a 200 °C por 10 a 15 minutos, até dourar e borbulhar."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão leve: use só o necessário de gordura para untar ou refogar e não acrescente sal além do indicado. Sirva uma porção moderada, acompanhada de salada."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão com queijo: finalize com queijo ralado ou em fatias (muçarela, prato ou parmesão) e espere alguns instantes para derreter ou amolecer com o calor do prato."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão com tomate: corte 1 tomate médio em cubos, sem as sementes, e junte aos demais ingredientes perto do fim do preparo, só para aquecer sem desmanchar. Ajuste o sal depois de juntar."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão temperada: ajuste os temperos aos poucos, provando a cada adição, e deixe descansar por 2 minutos antes de servir para o sabor se firmar."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão caprichada: sirva em prato fundo ou travessa, finalize com cheiro-verde picado e um fio de azeite e leve à mesa ainda quente."
    ],
    "favorite": false
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
    "steps": [
      "Ferva 2 litros de água com 1 colher de sopa de sal. Cozinhe o macarrão pelo tempo da embalagem menos 1 minuto, escorra e reserve.",
      "Enquanto isso, rale o queijo e separe o leite e a manteiga.",
      "Na mesma panela, em fogo baixo, derreta a manteiga.",
      "Junte o leite aos poucos, mexendo, e aqueça por 2 minutos, até aparecerem bolhinhas nas bordas. Não deixe ferver.",
      "Acrescente o queijo em três vezes, mexendo até derreter a cada adição. Em 2 a 3 minutos o molho fica liso e cremoso.",
      "Devolva o macarrão à panela e misture em fogo baixo por 1 a 2 minutos, até o molho envolver tudo. Ele engrossa um pouco ao descansar.",
      "Prove antes de salgar, porque o queijo já é salgado. Ajuste o sal se precisar e sirva imediatamente.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão com queijo: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes. Use uma panela de fundo grosso e uma colher de pau ou de silicone. Tenha à mão uma tigela ou copinhos para servir.",
      "Na panela fria, coloque o leite condensado, o chocolate em pó e a manteiga e misture bem antes de acender o fogo, para o chocolate não empelotar.",
      "Leve ao fogo baixo e mexa sem parar, raspando o fundo e as laterais, por 6 a 8 minutos.",
      "Faça o teste do ponto: passe a colher pelo fundo da panela. O rastro deve ficar aberto por 2 a 3 segundos antes de fechar. Lembre que o brigadeiro engrossa ao esfriar.",
      "Desligue o fogo, junte o creme de leite e mexa por 1 minuto, até ficar liso e brilhante.",
      "Despeje na tigela ou nos copinhos e espere amornar.",
      "Se quiser gelado, cubra com filme plástico encostado na superfície (para não formar casquinha) e leve à geladeira por 1 a 2 horas.",
      "Sirva com granulado ou frutas. Guarde na geladeira por até 3 dias.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão cremosa: bata bem no liquidificador e respeite o tempo completo de geladeira: é ele que deixa a textura firme e cremosa."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão ao forno: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão com queijo: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão dourada: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Separe os ingredientes e deixe o creme de leite e o suco de maracujá já abertos. Escolha uma travessa ou copos para servir.",
      "Coloque no liquidificador o leite condensado, o creme de leite e o suco concentrado de maracujá.",
      "Bata por 2 a 3 minutos, até ficar liso, cremoso e mais espesso. A acidez do maracujá ajuda o creme a engrossar. Se ainda estiver ralo, bata por mais 1 minuto.",
      "Despeje na travessa ou distribua nos copos.",
      "Cubra com filme plástico e leve à geladeira por pelo menos 3 a 4 horas, até firmar. O ideal é preparar na véspera.",
      "Antes de servir, decore com polpa de maracujá, sementes ou folhinhas de hortelã.",
      "Guarde na geladeira por até 3 dias.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão cremosa: não deixe passar do tempo indicado: retire do forno assim que estiver no ponto e deixe descansar antes de servir, para manter a textura macia."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão ao forno: esta receita já vai ao forno. Preaqueça por 10 minutos antes de levar e evite abrir a porta nos primeiros 20 minutos."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão com queijo: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão dourada: o caramelo deve ficar cor de mel escuro. Se passar disso, amarga."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Preaqueça o forno a 180 °C. Separe uma forma de pudim de uns 20 cm, uma assadeira maior, em que a forma caiba, e uma chaleira de água quente.",
      "Faça o caramelo: coloque o açúcar em uma panela de fundo grosso limpa e leve ao fogo médio-baixo, sem mexer com colher. Incline a panela de vez em quando. Quando derreter e ficar cor de mel escuro (5 a 8 minutos), desligue. Cuidado: o caramelo queima a pele. Despeje na forma e gire para cobrir o fundo e as laterais.",
      "No liquidificador, bata o leite condensado, o leite (use a lata do leite condensado como medida) e os ovos por 1 a 2 minutos, só até misturar. Bater demais cria bolhas e deixa furinhos.",
      "Passe a mistura por uma peneira para ficar bem lisa e despeje sobre o caramelo. Cubra a forma com papel-alumínio.",
      "Coloque a forma dentro da assadeira e despeje água quente na assadeira até a metade da altura da forma (banho-maria).",
      "Asse por 50 a 60 minutos. O pudim está pronto quando uma faca enfiada no centro sai limpa, mesmo que ele ainda balance um pouquinho.",
      "Retire da água e deixe esfriar até a temperatura ambiente. Depois, leve à geladeira por pelo menos 4 horas, de preferência de um dia para o outro.",
      "Para desenformar, passe uma faca fina entre o pudim e a forma, cubra com um prato, vire e espere o pudim descer. Sirva gelado.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão cremosa: não deixe passar do tempo indicado: retire do forno assim que estiver no ponto e deixe descansar antes de servir, para manter a textura macia."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão ao forno: esta receita já vai ao forno. Preaqueça por 10 minutos antes de levar e evite abrir a porta nos primeiros 20 minutos."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão com queijo: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão dourada: preaqueça bem o forno e não abra a porta antes de 25 minutos. Assim a superfície forma uma casquinha firme."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
      "1 colher de fermento",
      "1/2 xícara de óleo"
    ],
    "steps": [
      "Preaqueça o forno a 180 °C. Unte uma forma de 20 a 22 cm com óleo ou manteiga e polvilhe chocolate em pó, sacudindo o excesso.",
      "Em uma tigela grande, peneire a farinha e o chocolate em pó. Peneirar evita grumos e deixa o bolo fofo.",
      "Em outra tigela, bata os ovos, o açúcar e o óleo com um batedor de arame ou batedeira por 2 a 3 minutos, até o açúcar dissolver e a mistura clarear.",
      "Junte os ingredientes secos e o leite alternadamente, em 2 ou 3 vezes, mexendo só até a massa ficar lisa. Bater demais deixa o bolo duro.",
      "Por último, acrescente o fermento e misture com delicadeza, com movimentos de baixo para cima.",
      "Despeje a massa na forma e bata a forma de leve na bancada 2 vezes, para soltar as bolhas de ar.",
      "Asse no centro do forno por 35 a 40 minutos, sem abrir a porta nos primeiros 25. Espete um palito no centro: deve sair limpo ou com poucas migalhas secas.",
      "Retire do forno e espere 10 minutos antes de desenformar sobre uma grade. Deixe esfriar por completo antes de cobrir.",
      "Cubra com brigadeiro, calda de chocolate ou polvilhe açúcar de confeiteiro. Guarde coberto por até 3 dias.",
      "Dica da versão de frigideira: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão tradicional: siga as medidas da lista sem trocar ingredientes. Antes de servir, prove e ajuste a doçura."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão rápida: deixe todos os ingredientes medidos e separados antes de começar e organize os utensílios ao alcance da mão. Preparar tudo antes evita pausas no meio da receita."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão caseira: prefira ingredientes frescos e prepare sem pressa, seguindo cada etapa. O resultado é aquele sabor de comida feita em casa."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão cremosa: cozinhe em fogo baixo e retire assim que chegar ao ponto, porque calor demais seca a receita. Se quiser mais cremosidade, finalize com 1 colher de sopa de leite ou de creme de leite, sem deixar ferver."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão especial: capriche na apresentação: sirva em prato ou taça bonita e finalize com canela, raspas de chocolate ou frutas."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão econômica: aproveite o que já tem em casa, compre só o que faltar e evite desperdício. Guarde as sobras em pote fechado na geladeira e consuma em até 2 dias."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão fácil: leia todos os passos antes de começar, separe os utensílios e siga a ordem indicada, uma etapa de cada vez."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão de domingo: reserve um tempo sem pressa, deixe a mesa posta e sirva para dividir com a família ou com os amigos."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão prática: lave os utensílios à medida que for usando e reaproveite a mesma tábua e a mesma faca. Assim você termina com pouca louça para lavar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão com ervas: finalize com folhinhas de hortelã. Coloque só na hora de servir para manter o aroma."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão ao forno: em vez do fogão, disponha as bananas em rodelas em um refratário, polvilhe o açúcar e a canela e asse a 180 °C por 20 minutos, virando na metade do tempo."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão leve: use só o necessário de gordura para untar e não acrescente açúcar além do indicado. Sirva uma porção moderada, acompanhada de frutas."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão para família: confira o número de porções antes de começar e use panela ou forma de tamanho adequado. Se precisar de mais, multiplique todos os ingredientes na mesma proporção, sem aumentar só um deles."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão express: corte os ingredientes em pedaços pequenos para cozinharem mais depressa e deixe tudo pronto antes de começar. Fique por perto durante o preparo para retirar no ponto certo."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão com queijo: sirva com uma fatia fina de queijo minas frescal ao lado, combinação tradicional com doce de banana."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão com tomate: o passo a passo acima já traz o melhor resultado para este prato. Siga as etapas na ordem indicada e respeite os tempos de descanso."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão temperada: acrescente um toque aromático de sua preferência, como canela ou raspas de limão, sempre aos poucos e provando a cada adição."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão dourada: deixe o açúcar caramelizar por 1 a 2 minutos a mais, em fogo baixo, até a calda escurecer levemente. Cuidado para não queimar."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão da semana: adiante o que puder: corte os ingredientes na véspera e guarde em potes fechados na geladeira. No dia, o preparo fica bem mais rápido."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão super simples: use só os ingredientes da lista, sem substituições nem acompanhamentos, e siga as etapas na ordem. É a forma mais direta de fazer este prato."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão caprichada: finalize com cobertura ou acompanhamento de sua escolha, como calda, frutas ou sorvete, e sirva em prato ou taça bonita."
    ],
    "favorite": false
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
    "steps": [
      "Descasque as bananas, que devem estar maduras, mas firmes, e corte em rodelas de cerca de 1 cm.",
      "Coloque as bananas em uma panela de fundo grosso com o açúcar, a água e metade da canela.",
      "Leve ao fogo baixo e não mexa nos primeiros 3 minutos: o açúcar derrete e as bananas soltam líquido.",
      "Mexa com cuidado de vez em quando, por 10 a 15 minutos, até formar uma calda encorpada e as bananas ficarem macias e com cor de âmbar. Para um doce mais cremoso, amasse parte das bananas com um garfo na própria panela.",
      "Teste o ponto: passe a colher pelo fundo. O rastro deve demorar para fechar.",
      "Desligue o fogo e polvilhe o restante da canela. Sirva morno ou frio, com sorvete ou iogurte.",
      "Guarde em pote fechado na geladeira por até 3 dias.",
      "Dica da versão de frigideira: prepare tudo em uma frigideira grande e funda, com tampa se tiver, em fogo médio-baixo, mexendo com frequência para não grudar. Assim você lava menos louça."
    ],
    "favorite": false
  }
];
