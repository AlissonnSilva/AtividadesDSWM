//1-Crie uma função que receba um array de números e retorne a soma de todos os elementos.

function recebeElementos(lista) {
    let soma = 0;
    lista.forEach(element => {
        soma += element;
    })
    return soma;
}

let numeros = [1, 2, 3, 4, 5]
console.log(recebeElementos(numeros))

//2-Crie uma função que receba um array de strings e retorne um novo array com todas as strings em letras maiúsculas.

function recebePalavras(lista) {
    return lista.map(item => item.toUpperCase())
}

let palavras = ["abacaxi", "maça", "uva"]
console.log(recebePalavras(palavras))

//3-Crie uma função que receba um array e um item, e adicione esse item ao final do array.

function recebeItem(lista, item) {
    lista.push(item)
    return lista
}

let listanumeros = [1, 2, 3, 4, 5]
let item = 6


console.log("lista sem o item:", listanumeros)
let novaLista = recebeItem(listanumeros, item)
console.log("lista com o item:", novaLista)

//4-Crie uma função que remova o primeiro elemento de um array e retorne o array modificado.

function removePrimeiro(lista) {
    lista.shift()
    return lista
}

let listanumeros2 = [1, 2, 3, 4, 5]
console.log("lista com o primeiro elemento:", listanumeros2)
console.log("lista sem o primeiro elemento:", removePrimeiro(listanumeros2))

//5-Crie uma função que filtre os números pares de um array de números.

function filtraPar(lista) {
    return lista.filter(item => item % 2 === 0)
}

let listaPares = [1, 2, 3, 4, 5, 6]

console.log("Lista sem o filtro de par:", listaPares)
console.log("Lista com o filtro de par:", filtraPar(listaPares))

//6-Crie uma função que conte quantas palavras têm mais de 5 letras em um array de strings.

function contaPalavras(lista) {
    return lista.filter(item => item.length > 5)
}

let listaPalavras = ["camiseta", "tenis", "moletom"]
console.log("lista de palavras:", listaPalavras)
console.log("lista de palavras com mais de 5 letras:", contaPalavras(listaPalavras))

//7-Crie uma função que retorne o maior número de um array.

function retornaMaior(lista) {
    let n = 0
    lista.forEach(item => { if (item >= n) { n = item } })
    return n
}

let listaNumeros3 = [0, 2, 5, 1, 7, 3]
console.log("lista de numeros:", listaNumeros3)
console.log("Maior numero da lista:", retornaMaior(listaNumeros3))

//8-Crie uma função que receba um array de nomes e retorne uma string com todos os nomes separados por vírgula.

function recebeNomes(lista) {
    return lista.join(", ")
}

let listaNomes = ["Alisson", "Nicolas", "Caio"]
console.log(recebeNomes(listaNomes))

//9-Crie uma função que receba um array e retorne um novo array com os elementos em ordem reversa.

function recebeLista(lista) {
    return lista.slice().reverse()
}

let listaFrutas = ["Amora", "Banana", "Caju"]
console.log(recebeLista(listaFrutas))

//10-Crie uma função que receba um array de números e retorne um novo array com os quadrados desses números.

function recebeListaNumeros(lista) {
    let lista2 = []
    for (let i = 0; i < lista.length; i++) {
        lista2.push(lista[i] * lista[i])
    }
    return lista2
}

let listaNumerosQuadrados = [2, 4, 3, 5, 7]

console.log(recebeListaNumeros(listaNumerosQuadrados))