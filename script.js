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
    qtdAlternativasExibir: 3,
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
  },
  {
    id: "p4",
    enunciados: ["Os imperadores romanos eram absolutos."],
    alternativasDisponiveis: [
      { texto: "Sim", correta: false },
      { texto: "Não", correta: true },
    ],
    qtdAlternativasExibir: 2,
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

  const formData = new FormData(this);
  let acertos = 0;

  for (let [perguntaId, respostaSelecionada] of formData.entries()) {
    if (respostasCorretas[perguntaId] === respostaSelecionada) {
      acertos++;
    }
  }

  document.getElementById(
    "resultado"
  ).textContent = `Você acertou ${acertos} de ${totalPerguntas} perguntas!`;
});

// Inicia o quiz ao carregar a página
gerarQuiz();
