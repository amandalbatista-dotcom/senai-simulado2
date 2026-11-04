// Relógio (mantendo a lógica anterior)
function atualizarRelogio() {
    const agora = new Date();
    document.getElementById('relogio').innerText = `${agora.toLocaleDateString('pt-BR')} - ${agora.toLocaleTimeString('pt-BR')}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// --- Lógica de Cadastro de Produtos ---

// Array (lista) para salvar os produtos na memória do navegador
const listaProdutos = [];

// Mapeia os elementos do HTML
const inputCliente = document.getElementById('nomeCliente');
const inputProduto = document.getElementById('nomeProduto');
const inputPreco = document.getElementById('precoProduto');
const btnSalvar = document.getElementById('btnSalvar');
const corpoTabela = document.getElementById('corpoTabela');

// Função para atualizar a tabela na tela
function exibirProdutos() {
    // Limpa a tabela antes de desenhar a lista atualizada
    corpoTabela.innerHTML = "";

    // Passa por cada produto da lista e adiciona uma linha na tabela
    listaProdutos.forEach(item => {
        const linha = document.createElement('tr');

        linha.innerHTML = `
            <td>${item.cliente}</td>
            <td>${item.produto}</td>
            <td>R$ ${parseFloat(item.preco).toFixed(2)}</td>
        `;

        corpoTabela.appendChild(linha);
    });
}

// Função executada ao clicar em Salvar
btnSalvar.addEventListener('click', function() {
    // Captura os valores digitados
    const clienteVal = inputCliente.value.trim();
    const produtoVal = inputProduto.value.trim();
    const precoVal = inputPreco.value.trim();

    // Validação simples para não salvar campos vazios
    if (clienteVal === "" || produtoVal === "" || precoVal === "") {
        alert("Por favor, preencha todos os campos!");
        return; 
    }

    // Cria um objeto com os dados do novo produto
    const novoProduto = {
        cliente: clienteVal,
        produto: produtoVal,
        preco: precoVal
    };

    // Salva o objeto dentro do nosso Array
    listaProdutos.push(novoProduto);

    // Atualiza a tabela visível na tela
    exibirProdutos();

    // Limpa os campos do formulário para o próximo cadastro
    inputCliente.value = "";
    inputProduto.value = "";
    inputPreco.value = "";
});
