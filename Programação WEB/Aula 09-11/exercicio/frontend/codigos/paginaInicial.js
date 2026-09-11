console.log("Pagina Inicial rodando!")
const btnComparar = document.getElementById("btnComparar");
const inptN1 = document.getElementById("inptN1");
const inptN2 = document.getElementById("inptN2");
const btnenviar = document.getElementById("btnenviar");
const idade = document.getElementById("idade");
const nome = document.getElementById("nome");
const resp = await fetch("http://localhost:8000/cadastro-dados.php");
const dados = await resp.json();

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
    document.getElementById("saida").innerHTML = dados.username;
}