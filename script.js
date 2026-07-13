let um;
let dois;
let tres;
let quatro;
let cinco;

let p1 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();
let p2 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();
let p3 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();
let p4 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();
let p5 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p1 == 'A') {
    um = 1;
    alert(`Você acertou.`);
} else {
    um = 0;
    alert(`Você errou.`);
}

if (p2 == 'A') {
    dois = 1;
    alert(`Você acertou.`);
} else {
    dois = 0;
    alert(`Você errou.`);
}

if (p3 == 'A') {
    tres = 1;
    alert(`Você acertou.`);
} else {
    tres = 0;
    alert(`Você errou.`);
}

if (p4 == 'A') {
    quatro = 1;
    alert(`Você acertou.`);
} else {
    quatro = 0;
    alert(`Você errou.`);
}

if (p5 == 'A') {
    cinco = 1;
    alert(`Você acertou.`);
} else {
    cinco = 0;
    alert(`Você errou.`);
}

let resultado = um + dois + tres + quatro + cinco;

alert(`Vocé acertou ${resultado} de 5 perguntas`);
