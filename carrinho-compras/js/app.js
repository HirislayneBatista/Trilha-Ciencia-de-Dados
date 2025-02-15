let precoTotal;
limpar();

function adicionar(){
    // Recuperar valores numero do pedido , quantidade  e valor
    let produto = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;

    // calcular o preco 
    let nomeProduto = produto.split('-')[0];
    let precoUnitario = produto.split('R$')[1];
    let preco = precoUnitario * quantidade;

    // adicionar ao carrinho
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} 
        <span class="texto-azul">R$ ${preco.toFixed(2)}</span></section>`
    
    // atualizar o valor total da compra
    precoTotal = precoTotal + preco;
    let campoPrecoTotal = document.getElementById('valor-total');
    campoPrecoTotal.textContent = `R$ ${precoTotal.toFixed(2)}`;
    document.getElementById('quantidade').value = 0;

    // alert(`Quantidade: ${quantidade}`);
    // alert(`Produto: ${nomeProduto} | Preco: R$ ${precoUnitario.toFixed(2)}`);
    // alert(`Preco total: R$ ${preco}`);

}

function limpar(){
    precoTotal = 0;

    // Limpando entradas iniciais do carrinho
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}