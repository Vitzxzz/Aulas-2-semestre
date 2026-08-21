console.log("Olá js")

const inputnome = document.getElementById("inputnome");
const inputsenha = document.getElementById("inputsenha");
const btnenviar = document.getElementById("btnenviar");

function cliquei(){
    console.log(inputnome.value, inputsenha.value)
}

btnenviar.onclick = cliquei

