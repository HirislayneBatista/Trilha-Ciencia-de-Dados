let precoTotal;
limpar();

function adicionar(){
    // Recuperar valores numero do pedido , quantidade  e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // Se os valores nao forem validos, para a execução
    if (!validar(produto, quantidade)) return;

    // calcular o preco 
    let nomeProduto = produto.split('-')[0];
    let precoUnitario = parseFloat(produto.split('R$')[1]);  // converte pra numero
    let preco = precoUnitario * quantidade;

    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
        <span class="texto-azul">R$ ${preco.toFixed(2)}</span></section>`
    
    // atualizar o valor total da compra
    precoTotal += preco;
    document.getElementById('valor-total').textContent = `R$ ${precoTotal.toFixed(2)}`;

    // resetar a quantidade para zero
    document.getElementById('quantidade').value = 0;

}

function limpar(){
    precoTotal = 0;

    // Limpar entradas iniciais do carrinho
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}

function validar(produto, quantidade){
    // Verificar se o produto selecionado é válido
    if (!produto || produto.trim() === "") {
        alert("Selecione um produto válido.");
        return false;
    }

    // Verificar se a quantidade inserida é válida
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return false;
    }

    return true;
}