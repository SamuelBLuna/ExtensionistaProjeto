const btnDoacao = document.getElementById('fazDoacao')
const btnPedido = document.getElementById('fazPedido')

btnDoacao.addEventListener('click', fazerDoacao)
btnPedido.addEventListener('click', fazerPedido)

let doacaoFeita = []
let pedidoFeito = []
let disponivel = []

function fazerDoacao(e) {
    e.preventDefault()
    if(localStorage.minhasDoacoes) {
        doacaoFeita = JSON.parse(localStorage.getItem('minhasDoacoes'))
    }
    const doacao = document.querySelector('#item').value
    const itens = {
        doacao: doacao.toUpperCase()
    }  
    doacaoFeita.push(itens)
    localStorage.minhasDoacoes = JSON.stringify(doacaoFeita)      
    comparacao()
}
function fazerPedido(e) {
    e.preventDefault()
    if(localStorage.meusPedidos) {
        pedidoFeito = JSON.parse(localStorage.getItem('meusPedidos'))
    }
    const doacao = document.querySelector('#nome2').value
    const rua = document.querySelector('#ender').value
    const ref = document.querySelector('#ref').value
    const pedido = document.querySelector('#pedido').value
    
    const dados = {
        nome: doacao.toUpperCase(),
        rua: rua,
        refe: ref,
        pedido: pedido.toUpperCase()
    }  
    pedidoFeito.push(dados)
    
    
    localStorage.meusPedidos = JSON.stringify(pedidoFeito)
    comparacao()
}


function comparacao() {
    if(localStorage.minhasDoacoes) {
        doacaoFeita = JSON.parse(localStorage.getItem('minhasDoacoes'))
    }
    if(localStorage.meusPedidos) {
        pedidoFeito = JSON.parse(localStorage.getItem('meusPedidos'))
    }

    if(localStorage.pedidoDisponivel) {
        disponivel = JSON.parse(localStorage.getItem('pedidoDisponivel'))
    }

    for(let i of doacaoFeita) {
        for (let j of pedidoFeito) {
            if(i.doacao === j.pedido) {
                const dados = {
                    nome: j.nome,
                    rua: j.rua,
                    ref: j.refe,
                    pedido: j.pedido
                }
                disponivel.push(dados)
                
                
                indiceI = doacaoFeita.indexOf(i)
                indiceJ = pedidoFeito.indexOf(j)

                if (indiceI > -1 && indiceJ > -1) {
                    doacaoFeita.splice(indiceI, 1)
                    pedidoFeito.splice(indiceJ, 1)
                  }
                
            
                localStorage.minhasDoacoes = JSON.stringify(doacaoFeita)
                localStorage.meusPedidos = JSON.stringify(pedidoFeito)
                localStorage.pedidoDisponivel = JSON.stringify(disponivel)
            }
        }
    }
}