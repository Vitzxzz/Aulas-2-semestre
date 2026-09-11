console.log("meu js rodou!");

const inptNome = document.getElementById("inptNome");
const inptSenha = document.getElementById("inptSenha");
const btnEnviar = document.getElementById("btnEnviar");
const lblResultado = document.getElementById("lblResultado");

//funcao tradicional
function cliquei(){

    console.log("Frontend - btn clicked")

    const data = {
        nome: inptNome.value,
        senha: inptSenha.value
    }

    fetch("http://localhost:8000/", {
        method: "POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
    }).then(respose => respose.json())
    .then(data => {
        console.log(data)
    })

    console.log("linhas depois do fetch")
    //window.location.href = "./../paginas/paginaInicial.html";
}

btnEnviar.onclick = cliquei
























//funcao anonima
// function (){
//     console.log(inptNome.value, inptSenha.value)
// }

//arrow function
// btnEnviar.onclick = () => {
//     console.log(inptNome.value, inptSenha.value)
// }