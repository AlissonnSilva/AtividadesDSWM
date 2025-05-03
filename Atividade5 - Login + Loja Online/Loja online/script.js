//digitar no terminal: node script.js
// Importa o módulo readline para capturar entrada do usuário
const readline = require("readline");

// Saldo inicial do cliente
let saldo = 200.00;

// Array para armazenar os produtos escolhidos
let carrinho = [];

// Lista de produtos disponíveis
const produtos = [
    { nome: "Camisa", preco: 50 },
    { nome: "Boné", preco: 30 },
    { nome: "Moletom", preco: 100 },
    { nome: "Meia", preco: 20 },
    { nome: "Calça", preco: 80 }
];

// Função para exibir os produtos disponíveis
function exibirProdutos() {
    console.log("Produtos disponíveis:");
    produtos.forEach((produto, posicao) => {
        console.log(`${posicao + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)}`);
    });
}

// Função para adicionar produtos ao carrinho
function adicionarProduto(indice) {
    if (indice >= 1 && indice <= produtos.length) {
        const produto = produtos[indice - 1];
        carrinho.push(produto.preco); // Adiciona o preço do produto ao carrinho
        console.log(`${produto.nome} adicionado ao carrinho.`);
        calcularTotal(); // Atualiza o total
    } else {
        console.log("Opção inválida. Tente novamente.");
    }
}

// Função para calcular o total da compra
function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i]; // Soma os valores no carrinho
    }
    console.log(`Total da compra: R$${total.toFixed(2)}`);
    return total;
}

// Função para finalizar a compra
function finalizarCompra() {
    let total = calcularTotal();

    // Verifica se o saldo é suficiente
    const mensagem = total > saldo
        ? "Saldo insuficiente!"
        : "Compra realizada com sucesso!";

    console.log(mensagem);

    // Subtrai o valor do saldo se a compra for realizada
    if (total <= saldo) {
        saldo -= total;
        carrinho = []; // Limpa o carrinho
        console.log(`Novo saldo: R$${saldo.toFixed(2)}`);
    }
}

// Configuração do readline para capturar entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Exibe os produtos disponíveis
console.log("Saldo inicial: R$200.00");
exibirProdutos();

// Função para capturar a escolha do usuário
function perguntar() {
    rl.question("Digite o número do produto que deseja adicionar ao carrinho (ou 0 para finalizar): ", (resposta) => {
        const indice = parseInt(resposta);

        if (indice === 0) {
            // Finaliza a compra e encerra o readline
            finalizarCompra();
            rl.close();
        } else {
            // Adiciona o produto escolhido e pergunta novamente
            adicionarProduto(indice);
            perguntar();
        }
    });
}

// Inicia o loop de perguntas
perguntar();