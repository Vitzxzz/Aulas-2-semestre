console.log("JS Rodando!")

nomeCred = "vitor"
senhaCred = "123"

const iptNome = document.getElementById("iptNome")
const iptSenha = document.getElementById("iptSenha")
const btnConf = document.getElementById("btnConf")

btnConf.onclick = () => {
    console.log("Botão funcionando")
    validacao(iptNome.value, iptSenha.value)
}

function validacao(nome, senha){
    if(nomeCred == iptNome.value && senhaCred == iptSenha.value){
        console.log("login aceito!")
        window.location.href = "../pagina/pagina.html"
    }
    else{
        alert("Credenciais erradas!")
    }
}