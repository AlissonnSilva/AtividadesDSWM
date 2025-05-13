const botao = document.getElementById("botao");
const inputNome = document.getElementById("nome");
const texto = document.getElementById("texto");
let contador = 0;

// Evento de clique no botão
botao.addEventListener("click", function () {
    const nome = inputNome.value.trim(); // Obtém o valor do campo de nome
    if (nome) {
        contador++;
        texto.innerText = `Olá ${nome}, você clicou no curtir ${contador} vezes!`;
    } else {
        texto.innerText = `Por favor, digite seu nome!`;
    }
});

inputNome.addEventListener("input", function () {
    contador = 0; // Reseta o contador
    texto.innerText = ""; // Limpa a mensagem exibida
});

// Digitação no campo de nome
inputNome.addEventListener("keydown", function (tecla) {
    console.log(`Tecla pressionada: ${tecla.key}`);
});

botao.addEventListener("mouseover", function () {
    botao.style.backgroundColor = "#14833b"; // Altera a cor do botão
});

botao.addEventListener("mouseout", function () {
    botao.style.backgroundColor = "#1db954"; // Restaura a cor original
});