/* Falta colocar algumas coisas ainda. Tipo as oerguntas e as respostas corretas. */

let um;
let dois;
let tres;
let quatro;
let cinco;
let seis;


let p1 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p1 == 'C') {
    um = 1;
    alert(`Você acertou.`);
} else {
    um = 0;
    alert(`Você errou.`);
}

let p2 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p2 == 'A') {
    dois = 1;
    alert(`Você acertou.`);
} else {
    dois = 0;
    alert(`Você errou.`);
}

let p3 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p3 == 'C') {
    tres = 1;
    alert(`Você acertou.`);
} else {
    tres = 0;
    alert(`Você errou.`);
}

let p4 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p4 == 'D') {
    quatro = 1;
    alert(`Você acertou.`);
} else {
    quatro = 0;
    alert(`Você errou.`);
}

let p5 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p5 == 'B') {
    cinco = 1;
    alert(`Você acertou.`);
} else {
    cinco = 0;
    alert(`Você errou.`);
}

let p6 = prompt("Para a pergunta ... Qual a resposta?").toUpperCase();

if (p6 == 'A') {
    seis = 1;
    alert(`Você acertou.`);
} else {
    seis = 0;
    alert(`Você errou.`);
}



let resultado = um + dois + tres + quatro + cinco + seis;

alert(`Vocé acertou ${resultado} de 6 perguntas`);
