let estoquedisponivel = []
let doacaoDisponivel = []

const divEstoque = document.querySelector('.estoque')
const divDisponivel = document.querySelector('.disponivel')

window.onload = function () {
    estoque()
    disponivel()    
} 



if(localStorage.minhasDoacoes) {
    estoquedisponivel = JSON.parse(localStorage.getItem('minhasDoacoes'))
}

if(localStorage.pedidoDisponivel) {
    doacaoDisponivel = JSON.parse(localStorage.getItem('pedidoDisponivel'))
}


function estoque() {
    if (estoquedisponivel.length != 0) {
        divEstoque.classList.remove('hiden')
        let numerador = 0
        for(let produtos of estoquedisponivel) {
            let novaDiv = document.createElement('div')
            novaDiv.classList.add('itens')
            novaDiv.innerHTML = `
            <div>
                <h4>Item Doado</h4>
                <p class="id">#${numerador += 1}</p>
            </div>
            <p class="text">${produtos.doacao}</p>
            `
            divEstoque.appendChild(novaDiv)
        }
    }
}

function disponivel() {
    if (doacaoDisponivel.length != 0) {
        divDisponivel.classList.remove('hiden')
        for(let disponivel of doacaoDisponivel) {
            let novaDiv = document.createElement('div')
            novaDiv.classList.add('itens')
            novaDiv.innerHTML = `
            <div>
                <h4>Item Pedido</h4>
                <div>
                    <p class="nomePedido">${disponivel.nome}</p>
                    <ul>
                        <h5>Endereço:</h5>
                        <li>
                            <p class="enderPedido">${disponivel.rua}</p>
                        </li>
                        <li>
                            <p class="refe">${disponivel.ref}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="text">${disponivel.pedido}</p>
            `
            divDisponivel.appendChild(novaDiv)
        }
    }
}