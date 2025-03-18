const readline = require('readline-sync'); 

let lista2 = [];
console.log('Informe 5 numeros.');
for (let i = 0; i < 5; i++){
    let num = Number(readline.question(`Numero ${i + 1}: `));
    lista2.push(num);
}
console.log("Os numeros informados foram:", lista2);