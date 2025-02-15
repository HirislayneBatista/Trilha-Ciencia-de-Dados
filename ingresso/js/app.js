function comprar(){

    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    if (tipoIngresso == 'pista'){
        comprarPista(quantidade);
    } else if (tipoIngresso == 'inferior'){
        comprarCadeiraInferior(quantidade);
    } else {
        comprarCadeiraSuperior(quantidade);
    }
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista){
        alert("Quantidade indiponivel para tipo Pista!");
    } else {
        qtdPista -= quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert("Compra realizada com sucesso!");
    }  
}

function comprarCadeiraInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior){
        alert("Quantidade indiponivel para tipo Cadeira Inferior!");
    } else {
        qtdInferior -= quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert("Compra realizada com sucesso!");
    }  
}

function comprarCadeiraSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior){
        alert("Quantidade indiponivel para tipo Cadeira Superior!");
    } else {
        qtdSuperior -= quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert("Compra realizada com sucesso!");
    }  
}