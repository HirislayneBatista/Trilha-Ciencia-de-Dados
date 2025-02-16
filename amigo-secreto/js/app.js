// array para armazenar nomes
let amigos = [];

function adicionar() {
    // recuperar valores dos nomes
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    // adicionar nomes ao array
    amigos.push(amigo.value);

    // adicionar nomes ao campo de lista de amigos
    if (lista.textContent == '') {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }

    // limpar campo de entrada de nomes
    amigo.value = '';
}

// function adicionar(){
//     // Recuperar valor do nome do amigo
//     let nomeAmigo = document.getElementById('nome-amigo');
//     let listaDeAmigos = document.getElementById('lista-amigos');
//     lista.push(nomeAmigo.value); // Adicionar amigo na lista
//     listaDeAmigos.innerHTML = lista.join(', '); // Mostrar lista de amigos
//     document.getElementById('nome-amigo').value=''; // Após mostrar, limpar campo
// };

function sortear() {
    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}