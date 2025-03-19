const readline = require('readline-sync'); 

let senhaAcesso = 1234;
let cont = 3;
do {
    let senha = Number(readline.question(`\nInforme a senha numerica de 4 digitos (tentativas restantes: ${cont}): `));
    if (senha == senhaAcesso){
        console.log('Acesso concedido!\n');
        break;
    } else {
        cont--;
        if (cont > 0) {
            console.log('Senha incorreta. Tente novamente!');
        } else {
            console.log('Numero de tentativas de senha excedido.');
        }
    }
} while (cont > 0);

if (cont == 0) {
    console.log('\nSenha bloqueada!\n');
}