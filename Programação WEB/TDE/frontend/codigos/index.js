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
    fetch("http://localhost:8000/get-carros.php")
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
    `).join("")
}

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



getCarros()