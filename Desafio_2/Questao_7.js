const readline = require('readline-sync'); 

function calcularQuadrado(numero) {
    return Math.pow(numero, 2)
}

let numero = Number(readline.question('\nInforme um numero para obter o seu quadrado: '));
console.log(`O quadrado de ${numero} é ${calcularQuadrado(numero)}.\n`);