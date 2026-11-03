console.log("teste js, rodando")

const loginCred = "vitor"
const senhaCred = "1234"

const inptLogin = document.getElementById("inptLogin")
const inptSenha = document.getElementById("inptSenha")
const btnConf = document.getElementById("btnConf")

btnConf.onclick = () => {
    console.log("botao funcionando")
    validacao(inptLogin.value, inptSenha.value)
}

function validacao(login, senha){
    if(loginCred == login && senhaCred == senha){
        console.log("login aceito")
        window.location.href = "./PÁGINAS/pagina.html"
    }
    else{
        alert("Erro!")
    }
}