console.log("js rodando")

const modelo = document.getElementById("modelo")
const marca = document.getElementById("marca")
const ano = document.getElementById("ano")
const preco = document.getElementById("preco")
const btnconfirma = document.getElementById("btnconfirma")
const tabelacorpo = document.getElementById("corpotabela-carros")
const btnatualiza = document.getElementById("btnatualizar")
const btndelete = document.getElementById("btndelete")

function getCarros(){
    console.log("dando get nos carros")
    fetch("inserir http do php aqui!!!!!")
    .then(response => response.json())
    .then(data => populate(data))
}

function populate(data){
    console.log("inserindo os carros")

    tabelacorpo.innerHTML = data.map(item =>`
       <tr>
            <td>${item.id}</td>
            <td>${item.modelo}</td>
            <td>${item.marca}</td>
            <td>${item.ano}</td>
            <td>R$ ${item.preco}</td>
            <td>
                <button onclick="atualizar(${item.id})">Atualizar</button>
                <button onclick="deletar(${item.id})">Excluir</button>
            </td>
        </tr>
    ).join("")`)
}

function atualizar(){
    console.log("ta funcionando a atualização")
}

function deletar(){
    console.log("ta funcionando o delete")
}
function confirmar(){
    console.log("Confirmar ta funcionando tbm")
}

btnconfirma.onclick = confirmar
btnatualiza.onclick = atualizar
btndelete.onclick = deletar
getCarros()