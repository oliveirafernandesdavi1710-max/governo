// 1. Base de dados das perguntas com variações dinâmicas
const totalPerguntas = 5;
const bancoDePerguntas = [
  {
    id: "p1",
    // Opções de enunciado para escolher uma aleatoriamente
    enunciados: [
      "Qual a diferença de um plebeu para um liberto?",
    ],
    // Lista de possíveis alternativas
    alternativasDisponiveis: [
      { texto: "Os libertos não possuíam bens materiais.", correta: false },
      { texto: "Os libertos eram ex soldados de guerra que foram liberados do campo de batalha.", correta: false },
      { texto: "Os nomes são sinonimos e não possuem nenhuma diferença de um ao outro.", correta: false },
      { texto: "Os libertos eram ex escravos que adquiriram liberdade com pecúlio ou por bom desempenho no trabalho.", correta: true },
    ],
    // Quantidade de botões/alternativas que devem aparecer nesta pergunta
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: PLEBE, LIBERTOS e HOMENS LIVRES",
    link: "index.html/assuntos",
  },
  {
    id: "p2",
    enunciados: [
      "O que é um questor?",
    ],
    alternativasDisponiveis: [
      { texto: "Uma função que atua como oficial de guerra", correta: true },
      { texto: "A função mais alta do cursus honorum, feita para seguir mandatos de um ano.", correta: false },
      { texto: "É uma função comum que servia para coleta de impostos e criação de algumas leis.", correta: false },
      { texto: "É uma função administrativa ocupada por senadores feita para administrar o povo.", correta: false },
    ],
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: SENADORES",
    link: "index.html/assuntos",
  },
  {
    id: "p3",
    enunciados: ["Como surgiu a plebe?"],
    alternativasDisponiveis: [
      { texto: "A plebe surgiu a partir de estrangeiros escravizados que foram trazidos para Roma.", correta: true },
      { texto: "A plebe surgiu logo após a abolição da escravidão em Roma, quando todos os antigos escravos receberam terras do governo e o direito de votar. ", correta: false },
      { texto: "A classe dos plebeus foi criada por um decreto do primeiro rei de Roma, Rômulo, para dividir oficialmente os cidadãos mais ricos dos mais pobres.", correta: false },
      { texto: "Acredita-se que foi composta por povos conquistados, antigos clientes e estrangeiros protegidos pelo Estado. Durante a Monarquia Romana.", correta: false },
    ],
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: PLEBE",
    link: "index.html/assuntos",
  },
  {
    id: "p4",
    enunciados: ["Os imperadores romanos eram absolutos."],
    alternativasDisponiveis: [
      { texto: "Sim", correta: false },
      { texto: "Não", correta: true },
    ],
    qtdAlternativasExibir: 2,
    textoLink: "Veja mais em: IMPERADORES",
    link: "index.html/assuntos",
  },
  {
    id: "p5",
    enunciados: ["Como o Império Romano tratava os escravos?"],
    alternativasDisponiveis: [
      { texto: "Os escravos eram como propriedade de seus donos, trabalhando como agricultores, mineradores ou em serviços domésticos sem direitos civis. A escravidão não era sobre 'raça' no império romano, era sobre conquistas militares.", correta: true },
      { texto: "Tratavam com respeito. Todos os escravos eram semi-livres podendo sair nos fins de semana.", correta: false },
      { texto: "Os escravos eram tratados como inimigo do Estados. Todos os escravos eram presos quando se tornavam-se escravos.", correta: false },
    ],
    qtdAlternativasExibir: 3,
    textoLink: "Veja mais em: ESCRAVOS",
    link: "index.html/assuntos",
  },
  {
    id: "p6",
    enunciados: ["Qual a ordem correta das classes da pirâmide social do império romano, analisando da classe mais baixa até a classe mais alta?"],
    alternativasDisponiveis: [
      { texto: "Imperador, escravos, plebe, patrícios, libertos , senadores e homens livres.", correta: false },
      { texto: "Escravos, libertos, plebe, senadores, patrícios e imperador.", correta: false },
      { texto: "Escravos, libertos, homens livres, plebe, patrícios, senadores e imperador.", correta: true },
    ],
    qtdAlternativasExibir: 3,
    textoLink: "Veja mais em: INÍCIO",
    link: "index.html/assuntos",
  },
  {
    id: "p7",
    enunciados: ["O que eram os patrícios?"],
    alternativasDisponiveis: [
      { texto: "Eram filhos do reis que tinham algum tipo de cargo político.", correta: false },
      { texto: "Eram pessoas que tinham cargos na igreja.", correta: false },
      { texto: "Eram programadores reais do imperador.", correta: false },
      { texto: "Eram descendentes de antigas famílias de Roma que obtiveram grande poder.", correta: true },
    ],
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: PATRÍCIOS",
    link: "index.html/assuntos",
  },
  {
    id: "p8",
    enunciados: ["Qual a função da plebe no Império Romano?"],
    alternativasDisponiveis: [
      { texto: "Servir ao imperador e mandar nos escravos.", correta: false },
      { texto: "Trabalhar no senado e na agricultura.", correta: false },
      { texto: "Trabalhar no comércio, agricultura e artesanato.", correta: true },
    ],
    qtdAlternativasExibir: 3,
    textoLink: "Veja mais em: PLEBE",
    link: "index.html/assuntos",
  },
  {
    id: "p9",
    enunciados: ["Qual são as três etapas necessárias para se tornar um senador romano?"],
    alternativasDisponiveis: [
      { texto: "Faculdade, diploma e mestrado.", correta: false },
      { texto: "Questores, pretores e cônsul.", correta: true },
      { texto: "Filosofia, sociologia e mestrado.", correta: false },
      { texto: "Diploma, cônsul e questores.", correta: false },
    ],
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: SENADORES",
    link: "index.html/assuntos",
  },
  {
    id: "p10",
    enunciados: ["O que era necessário para se tornar um imperador romano?"],
    alternativasDisponiveis: [
      { texto: "Era necessário anexar uma cidade.", correta: false },
      { texto: "Era necessário ser reconhecido pelo exército ou pelo senado.", correta: true },
      { texto: "Era necessário ser o mais votado pela população.", correta: false },
      { texto: "Era necessário entrar em uma luta contra o antigo imperador, quem vencer se torna o novo imperador.", correta: false },
    ],
    qtdAlternativasExibir: 4,
    textoLink: "Veja mais em: IMPERADORES",
    link: "index.html/assuntos",
  },
];

// Função utilitária para embaralhar um array (Algoritmo de Fisher-Yates)
function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Retorna um elemento aleatório de um array
function sortearItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Armazena o ID da opção correta de cada pergunta renderizada
const respostasCorretas = {};

// 2. Renderizar o formulário
function gerarQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "";

  // Randomiza a ordem das perguntas no formulário
  const perguntasEmbaralhadas = embaralhar(bancoDePerguntas).slice(0, totalPerguntas);
  totalPerguntasExibidas = perguntasEmbaralhadas.length;

  perguntasEmbaralhadas.forEach((pergunta, index) => {
    // A. Sorteia o enunciado
    const enunciadoSorteado = sortearItem(pergunta.enunciados);

    // B. Garante que a opção correta esteja sempre presente
    const opcaoCorreta = pergunta.alternativasDisponiveis.find(
      (alt) => alt.correta
    );
    const opcoesIncorretas = pergunta.alternativasDisponiveis.filter(
      (alt) => !alt.correta
    );

    // Embaralha as incorretas e pega a quantidade necessária
    const incorretasSorteadas = embaralhar(opcoesIncorretas).slice(
      0,
      pergunta.qtdAlternativasExibir - 1
    );

    // Junta a correta com as incorretas sorteadas e embaralha tudo
    const alternativasFinais = embaralhar([
      opcaoCorreta,
      ...incorretasSorteadas,
    ]);

    // Guarda qual texto era o correto para a validação final
    respostasCorretas[pergunta.id] = opcaoCorreta.texto;

    // C. Cria os elementos HTML da pergunta
    const card = document.createElement("div");
    card.className = "card-pergunta";
    card.dataset.id = pergunta.id;
    card.dataset.textoLink = pergunta.textoLink || "";
    card.dataset.link = pergunta.link || "";

    const titulo = document.createElement("div");
    titulo.className = "enunciado";
    titulo.textContent = `${index + 1}. ${enunciadoSorteado}`;
    card.appendChild(titulo);

    const opcoesDiv = document.createElement("div");
    opcoesDiv.className = "alternativas-container";

    alternativasFinais.forEach((alt, altIndex) => {
      const idInput = `${pergunta.id}_opt_${altIndex}`;

      const label = document.createElement("label");
      label.className = "opcao-label";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = pergunta.id;
      input.value = alt.texto;
      input.required = true;
      input.id = idInput;

      label.appendChild(input);
      label.appendChild(document.createTextNode(alt.texto));
      opcoesDiv.appendChild(label);
    });

    card.appendChild(opcoesDiv);
    container.appendChild(card);
  });
}

// 3. Processar envio e calcular pontuação
document.getElementById("quiz-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let acertos = 0;

  this.querySelectorAll(".card-pergunta").forEach((card) => {
    const perguntaId = card.dataset.id;
    const marcada = card.querySelector("input:checked");
    const label = marcada.closest("label");

    if (marcada.value === respostasCorretas[perguntaId]) {
      acertos++;
      label.classList.add("correta");
    } else {
      label.classList.add("errada");

      // revela a alternativa correta em cinza
      card.querySelectorAll("input").forEach((input) => {
        if (input.value === respostasCorretas[perguntaId]) {
          input.closest("label").classList.add("revelada");
        }
      });
    }

    // texto/link embaixo da pergunta
    if (card.dataset.link) {
      const p = document.createElement("p");
      p.className = "link-estudo";

      const a = document.createElement("a");
      a.href = card.dataset.link;
      a.textContent = card.dataset.textoLink || "Saiba mais";

      p.appendChild(a);
      card.appendChild(p);
    }
  });

  // trava o quiz depois de enviado
  this.querySelectorAll("input").forEach((input) => (input.disabled = true));
  document.getElementById("btn-enviar").disabled = true;

  document.getElementById(
    "resultado"
  ).textContent = `Você acertou ${acertos} de ${totalPerguntasExibidas} perguntas!`;
});

// Inicia o quiz ao carregar a página
gerarQuiz();

document.getElementById("btn-reiniciar").addEventListener("click", function () {
  gerarQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
});