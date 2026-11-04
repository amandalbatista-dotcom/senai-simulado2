// Relógio em tempo real no topo da página
function atualizarRelogio() {
    const agora = new Date();
    document.getElementById('relogio').innerText = `${agora.toLocaleDateString('pt-BR')} - ${agora.toLocaleTimeString('pt-BR')}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// --- Lógica de Cadastro de Produtos ---

const listaProdutos = [];

const inputCliente = document.getElementById('nomeCliente');
const inputProduto = document.getElementById('nomeProduto');
const inputPreco = document.getElementById('precoProduto');
const btnSalvar = document.getElementById('btnSalvar');
const corpoTabela = document.getElementById('corpoTabela');

// Função para atualizar a tabela na tela
function exibirProdutos() {
    corpoTabela.innerHTML = "";

    listaProdutos.forEach(item => {
        const linha = document.createElement('tr');

        // Adicionada a célula ${item.dataCadastro} na estrutura da tabela
        linha.innerHTML = `
            <td>${item.cliente}</td>
            <td>${item.produto}</td>
            <td>R$ ${parseFloat(item.preco).toFixed(2)}</td>
            <td>${item.dataCadastro}</td> 
        `;

        corpoTabela.appendChild(linha);
    });
}

// Função executada ao clicar em Salvar
btnSalvar.addEventListener('click', function() {
    const clienteVal = inputCliente.value.trim();
    const produtoVal = inputProduto.value.trim();
    const precoVal = inputPreco.value.trim();

    if (clienteVal === "" || produtoVal === "" || precoVal === "") {
        alert("Por favor, preencha todos os campos!");
        return; 
    }

    // 1. Captura o momento exato do clique
    const momentoCadastro = new Date();
    
    // 2. Formata a data e hora para o padrão brasileiro
    const dataHoraFormatada = `${momentoCadastro.toLocaleDateString('pt-BR')} ${momentoCadastro.toLocaleTimeString('pt-BR')}`;

    // 3. Cria o objeto incluindo a nova propriedade "dataCadastro"
    const novoProduto = {
        cliente: clienteVal,
        produto: produtoVal,
        preco: precoVal,
        dataCadastro: dataHoraFormatada // Salva a data/hora gerada no clique
    };

    listaProdutos.push(novoProduto);
    exibirProdutos();

    inputCliente.value = "";
    inputProduto.value = "";
    inputPreco.value = "";
});
