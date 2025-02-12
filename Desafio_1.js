//1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = "Hirislayne Batista";
console.log("---Questão 1---");
console.log(nome);


//2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
let idade = 25;
let altura = 1.75;
console.log("\n---Questão 2---");
console.log(`A idade é ${idade} anos e a altura é de ${altura} m.`);


//3. Crie uma variável chamada “preco” com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50;
let desconto = 0.2;
let precoComDesconto = preco * (1 - desconto);
console.log("\n---Questão 3---");
console.log(`O novo preço com desconto é R$ ${precoComDesconto}.`);


//4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
let temperatura = 30;
console.log("\n---Questão 4---");
console.log (temperatura > 25 ? "Está calor!" : "Está fresco!");


//5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
let idade2 = 23;
console.log("\n---Questão 5---");
console.log (idade2 >= 18 ? "Você é maior de idade." : "Você é menor de idade.");


//6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
let nota = 5;
console.log("\n---Questão 6---");
if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5  && nota <= 6) {
    console.log("Recuperação.");
} else {
    console.log("Reprovado.");
}


//7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
let numero1 = 8;
let numero2 = 8;
console.log("\n---Questão 7---");
console.log (numero1 == numero2 ? "Os números são iguais" : "Os números são diferentes");


//8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
let nome2 = "Hirislayne";
let idade3 = 23;
console.log("\n---Questão 8---");
console.log(`Olá, meu nome é ${nome2} e eu tenho ${idade3} anos.`);


//9. Crie um loop que imprima os números de 1 a 10 na tela.
let i = 1;
console.log("\n---Questão 9---");
while (i <= 10) {
    console.log(i)
    i++;
}
// ou ainda:
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }


//10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let number;
console.log("\n---Questão 10---");
do {
    number = prompt("Informe um numero entre 1 e 10: ");
} while (number != 5);
console.log(`Voce acertou! O número é ${number}!`);


//11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
let num = 7;
console.log("\n---Questão 11---");
console.log(`Tabuada do ${num}`);
for (let i = 1; i<=10; i++){
    console.log(`${num} x ${i} = ${num*i}`);
}


//12. Crie um loop que exiba todos os números pares de 0 a 20.
console.log("\n---Questão 12---");
console.log("Numeros pares de 0 e 20:");
for (let i = 0; i <= 20; i += 2){
    console.log(i);
}


//13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
    const PI = Math.PI;
    return PI * Math.pow(raio, 2)
}
let raio = 5; // Exemplo de entrada
console.log("\n---Questão 13---");
console.log(`A área do círculo de raio ${raio} é ${calcularAreaCirculo(raio).toFixed(2)}.`);


//14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
// Exibe numero da Questão 
console.log("\n---Questão 14---");
// Função que retorna a soma de dois números
function somarNumeros(a, b) {
    return a + b;
}
// Declara o primeiro número
let num1 = 7;
// Declara o segundo número
let num2 = 3;
// Calcula a soma dos dois números e armazena na variável "soma"
let soma = num1 + num2;
// Exibe o resultado da soma no console
console.log(`A soma de ${num1} e ${num2} é ${somarNumeros(num1, num2)}.`);


//15. Refatore o código abaixo para ser mais legível, usando boas práticas de nomenclatura e separando o código em funções:
function somar(x, y) {
    return x + y;
}
const numX = 10
const numY = 20
const resultado = somar(numX, numY)
console.log("\n---Questão 15---");
console.log(`O resultado da soma de ${numX} com ${numY} é: ${resultado}.`);
