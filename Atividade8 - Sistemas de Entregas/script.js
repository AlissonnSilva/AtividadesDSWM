const entrega = {
    id: 1,
    cliente: "Alisson",
    endereço: "Rua bom Jesus",
    status: "Pendente"
}
setTimeout(() => {
    console.log("O pedido foi entregue!")
    entrega.status = "Entregue"
}, 3000)

function buscarDadosEntrega() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = true;
            if (sucesso) {
                resolve(`Olá ${entrega.cliente}, confira o endereço e o status do seu pedido: ${entrega.endereço}, ${entrega.status}!`)
            } else {
                reject("Erro ao buscar dados da entrega!")
            }
        }, 1000)

    })
}

buscarDadosEntrega().then((usuario) => {
    console.log(`Olá ${entrega.cliente}, recebemos seus dados, vamos conferir seu pedido!`)
    console.log(usuario)
}).catch((erro) => {
    console.log("Ocorreu um erro:", erro)
})

setTimeout(() => {
    console.log(`Status do pedido revisado: ${entrega.status}!`)
    console.log(`Lista alterada:`, entrega)
}, 3000)


//Desafio
const listaEntregas = [{
    id: 2,
    cliente: "Vinicius",
    endereço: "Rua XV",
    status: "Pendente"
},
{
    id: 3,
    cliente: "Gabriel",
    endereço: "Rua Alameda",
    status: "Pendente"
},
{
    id: 2,
    cliente: "Nicolas",
    endereço: "Rua Presidente",
    status: "Pendente"
}]

function buscarEntregas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(listaEntregas)
        }, 1000)
    })
}


function atualizarStatusEntrega(i) {
    setTimeout(() => {
        listaEntregas[i].status = "Entregue";
        console.log("Entrega atualizada:", listaEntregas[i])
        console.log("Lista completa de entregas:", listaEntregas)
    }, 3000)
}

buscarEntregas().then((entregas) => {
    console.log("Entregas encontradas:", entregas)
    atualizarStatusEntrega(1)

})