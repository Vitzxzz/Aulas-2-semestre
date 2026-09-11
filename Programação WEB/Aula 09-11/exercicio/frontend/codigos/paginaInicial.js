console.log("Pagina Inicial rodando!")
const btnComparar = document.getElementById("btnComparar");
const inptN1 = document.getElementById("inptN1");
const inptN2 = document.getElementById("inptN2");
const btnenviar = document.getElementById("btnenviar");

btnenviar.onclick = () =>{
    console.log("arquivos enviados!")
    sendData
}

function sendData(data){
    console.log(data)

    fetch("http://localhost:8000/cadastro-dados-php",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json)
    .then(data => {console.log(data)})
}

function getData(data){
    fetch("http//localhost:8000")
    .then(response => response.json())
    .then(data => populate(data))
}

function populate(data){
    console.log(data)
    let respostafetch = data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.idade}/td>
        <tr>
        `)
}