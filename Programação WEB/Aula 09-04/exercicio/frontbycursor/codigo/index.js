const btnConfirmar = document.getElementById("btnConfirmar")
const iptNome = document.getElementById("iptNome")
const iptSenha = document.getElementById("iptSenha")
const iptCSenha = document.getElementById("iptCSenha")
const iptGen = document.getElementById("iptGen")
const iptIdd = document.getElementById("iptIdd")
const iptEmail = document.getElementById("iptEmail")
const iptNum = document.getElementById("iptNum")

console.log(iptNome, iptSenha, iptCSenha, iptGen, iptIdd, iptEmail, iptNum) //para testar se todos estao funcionando

const campos = [iptNome, iptSenha, iptCSenha, iptGen, iptIdd, iptEmail, iptNum]

campos.forEach((campo) => {
    campo.addEventListener("blur", () => {
        if (campo.value.trim() === "") {
            campo.classList.add("campo-vazio")
        } else {
            campo.classList.remove("campo-vazio")
        }
    })

    campo.addEventListener("input", () => {
        if (campo.value.trim() !== "") {
            campo.classList.remove("campo-vazio")
        }
    })
})

btnConfirmar.onclick = () => {

    //aqui em baixo é verificado se tem algum campo vazio, retornando um alert na tela
    let temCampoVazio = false
    //for each funciona quase que igual um for percorrendo o array
    //.trim remove espaços em branco no inicio e fim do texto digitado
    campos.forEach((campo) => {
        if (campo.value.trim() === "") {
            temCampoVazio = true
        }
    })

    if (temCampoVazio) {
        alert("preencha todos os campos")
        return
    }
    //verificação para ver se as senhas sao iguais
    if (iptSenha.value !== iptCSenha.value) {
        alert("as senhas inseridas não são iguais")
        return
    }

    const data = {
        nome: iptNome.value,
        senha: iptSenha.value,
        genero: iptGen.value,
        idade: iptIdd.value,
        email: iptEmail.value,
        num: iptNum.value
    }
    fetch("index.php", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
    })
    .then((resposta) => resposta.json())
    .then((resultado) => {
        console.log(resultado)
        if (resultado.sucesso) {
        alert(resultado.mensagem);
        } 
        else {
        alert("Erro: " + resultado.mensagem);
    }
    })
    .catch((erro) => {
        console.error("dados não enviados, erro", erro)
        alert("não foi possível enviar os dados")
    })
}