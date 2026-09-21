// Seleciona todos os botões de alternativa
const botoes = document.querySelectorAll(".alternativa");

// Adiciona o evento de clique em cada um deles
botoes.forEach(botao => {
    botao.addEventListener("click", function() {
        // Verifica o atributo data-correta do botão clicado
        const ehCorreta = this.getAttribute("data-correta") === "true";
        
        if (ehCorreta) {
            alert("Parabéns, você acertou! 🎉");
            this.style.backgroundColor = "green"; // Fica verde
        } else {
            alert("Resposta errada! ❌");
            this.style.backgroundColor = "red"; // Fica vermelho
        }
    });
});


/*
const perguntas = [
  {
    pergunta: "Quanto é 2 + 2?",
    respostas: [
      { texto: "3", correto: false },
      { texto: "4", correto: true },
      { texto: "5", correto: false }
    ]
  },
  {
    pergunta: "Qual a cor do céu?",
    respostas: [
      { texto: "Azul", correto: true },
      { texto: "Verde", correto: false },
      { texto: "Vermelho", correto: false }
    ]
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const elPergunta = document.getElementById("pergunta");
const elRespostas = document.getElementById("respostas-container");
const elProximo = document.getElementById("proximo");
const elResultado = document.getElementById("resultado");

function carregarPergunta() {
  limparRespostas();
  let atual = perguntas[indiceAtual];
  elPergunta.innerText = atual.pergunta;

  atual.respostas.forEach(resp => {
    const botao = document.createElement("button");
    botao.innerText = resp.texto;
    botao.classList.add("btn");
    if (resp.correto) {
      botao.dataset.correto = resp.correto;
    }
    botao.addEventListener("click", selecionarResposta);
    elRespostas.appendChild(botao);
  });
}


function selecionarResposta(e) {
  const botaoSelecionado = e.target;
  const estaCorreto = botaoSelecionado.dataset.correto === "true";

  if (estaCorreto) {
    pontuacao++;
    botaoSelecionado.style.backgroundColor = "green";
  } else {
    botaoSelecionado.style.backgroundColor = "red";
  }

  Array.from(elRespostas.children).forEach(botao => {
    if (botao.dataset.correto === "true") {
      botao.style.backgroundColor = "green";
    }
    botao.disabled = true;
  });

  if (perguntas.length > indiceAtual + 1) {
    elProximo.style.display = "block";
  } else {
    elResultado.innerText = `Fim de jogo! Você acertou ${pontuacao} de ${perguntas.length} perguntas.`;
  }
}

elProximo.addEventListener("click", () => {
  indiceAtual++;
  carregarPergunta();
});

carregarPergunta();


alert(`Você acertou `)
*/
