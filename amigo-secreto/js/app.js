// array para armazenar nomes
let listaAmigos = [];

function adicionar() {
    // recuperar valores dos nomes
    let amigo = document.getElementById('nome-amigo').value;

    // Validação para adicionar nomes ao array
    if (listaAmigos.includes(amigo)) {
        alert('Este nome já foi incluído na lista de Amigos. Digite um novo nome.');
    } else if (amigo == '') {
        alert('O nome do amigo não pode ser vazio.');
    } else {
        listaAmigos.push(amigo);
        atualizarLista();
    }
}

function atualizarLista() {
    let amigosIncluidos = document.getElementById('lista-amigos');
    amigosIncluidos.innerHTML = '';

    listaAmigos.forEach((amigo, index) => {
        let amigoElement = document.createElement('p');
        amigoElement.textContent = amigo;
        amigoElement.addEventListener('click', () => remover(index));
        amigosIncluidos.appendChild(amigoElement);
    });

    // limpar campo de entrada de nomes 
    document.getElementById('nome-amigo').value = '';
}

function sortear() {
    if (listaAmigos.length < 4){
        alert('Adicione pelo menos 4 amigos para realização do sorteio!');
        return;
    }

    // Chamar funcao para embaralhar lista de amigos 
    embaralhar(listaAmigos);

    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < listaAmigos.length; i++) {
        if (i == listaAmigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' +listaAmigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaAmigos[i] +' --> ' +listaAmigos[i + 1] + '<br/>';
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
    listaAmigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function remover(index){
    listaAmigos.splice(index, 1);
    atualizarLista();
}