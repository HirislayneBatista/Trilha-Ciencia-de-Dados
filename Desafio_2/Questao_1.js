const readline = require('readline-sync'); // Importa o módulo readline-sync. Instalar antes: npm install readline-sync

let x = 3;
let aux = true;

while (aux) {
    let numero = Number(readline.question("Informe um numero entre 1 e 10: ")); // Lê a entrada do usuário
    if (numero === x) {
        console.log("Você acertou o número!\n");
        aux = false;
    } else {
        console.log("\nNúmero incorreto. Tente novamente.\n");
    }
}
