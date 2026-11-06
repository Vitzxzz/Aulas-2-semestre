console.log("js rodando")

const modelo = document.getElementById("modelo")
const marca = document.getElementById("marca")
const ano = document.getElementById("ano")
const preco = document.getElementById("preco")
const btnconfirma = document.getElementById("btnconfirma")
const tabelacorpo = document.getElementById("corpotabela-carros")
let idedicao = null


function getCarros(){
    console.log("dando get nos carros")
    fetch("http://localhost:8000/get_carros.php")
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
                <button onclick="update(${item.id}, '${item.modelo}', '${item.marca}', ${item.ano}, ${item.preco})">Atualizar</button>
                <button onclick="fakedelete(${item.id})">Excluir</button>
            </td>
            </td>
        </tr>
    `).join("")
}

btnconfirma.onclick = create

function create(){
    console.log("Criando um novo veículo")
    const dados ={
        modelo: modelo.value,
        marca: marca.value,
        ano: ano.value,
        preco: preco.value
    };
    fetch("http://localhost:8000/cadastrar_carro.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    }).then(response => response.json())
    .then(data => {
        console.log(data.mensagem);
        getCarros();
        
        modelo.value = "";
        marca.value = "";
        ano.value = "";
        preco.value = "";
}
)}

function fakedelete(id){
    console.log("Deletando um veículo")
    fetch("http://localhost:8000/deletar_carro.php", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id })
    }).then(response => response.json())
    .then(data => {
        console.log(data.mensagem);
        getCarros();})
    }

function update(id) {
    const novoModelo = prompt("Digite o novo modelo:");
    const novaMarca = prompt("Digite a nova marca:");
    const novoAno = prompt("Digite o novo ano:");
    const novoPreco = prompt("Digite o novo preço:");

    if (!novoModelo || !novaMarca || !novoAno || !novoPreco) return;

    const dados = {
        id: id,
        modelo: novoModelo,
        marca: novaMarca,
        ano: novoAno,
        preco: novoPreco
    };

    fetch("http://localhost:8000/atualizar_carro.php", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.mensagem);
        getCarros();
    });
}


getCarros()