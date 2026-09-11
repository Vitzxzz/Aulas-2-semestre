console.log("Pagina Inicial rodando!")

let dados = [
    {
        nome:"Adam",
        idade:25,
        genero:"M",
        endereco:"Rua Acre"
    },
    {
        nome:"Joao",
        idade:14,
        genero:"M",
        endereco:"Rua Imaculada"
    },
    {
        nome:"Ana",
        idade:22,
        genero:"F",
        endereco:"Rua Pará"
    },
    {
        nome:"Guilherme",
        idade:29,
        genero:"-",
        endereco:"Rua Joinville"
    },
    {
        nome:"Pedro",
        idade:12,
        genero:"M",
        endereco:"Rua Acre"
    }
]

let respostaMap = dados.map(n => `
        <tr>
            <td>${n.nome}</td>
            <td>${n.idade}</td>
            <td>${n.genero}</td>
            <td>${n.endereco}</td>
        </tr>
    `).join("")

    console.log(respostaMap)

const tabelaCorpo = document.getElementById("tabela-corpo")
tabelaCorpo.innerHTML = respostaMap


let dadosRobo = [
    {imagem:"./../images/zeus.png",
     nome:"Zeus",
     descricao:"O robô Zeus pode se referir a diferentes assuntos populares, desde o famoso robô campeão de boxe do cinema até robôs de LED para festas ou robôs de tecnologia real"
    },
    {imagem:"./../images/duasCabeca.png",
     nome:"Twin",
     descricao:"O robô com duas cabeças gigantes de aço do filme Gigantes de Aço (Real Steel, 2011) chama-se Twin Cities"
    },
    {imagem:"./../images/japones.png",
     nome:"Noisy Boy",
     descricao:"No filme Gigantes de Aço (Real Steel), os robôs japoneses de destaque são o Noisy Boy"
    },
    {imagem:"./../images/feioso.png",
     nome:"Metro",
     descricao:"O Metro é um robô lutador de visual rústico e improvisado, que aparece no filme Gigantes de Aço (Real Steel)."
    }
]

document.getElementById("container-cards").innerHTML = 
dadosRobo.map(n => `
    
        <div class="container-card">
            <div class="container-image">
                <img class="robotImage" src="${n.imagem}">
            </div>
            <div class="container-text">
                <label class="label-nome">${n.nome}</label>
                <label class="label-desc">${n.descricao}</label>
            </div>
        </div>`).join("")




const btnComparar = document.getElementById("btnComparar");
const inptN1 = document.getElementById("inptN1");
const inptN2 = document.getElementById("inptN2");
const btnenviar = document.getElementById("btnenviar");

btnenviar.onclick = () =>{
    console.log("arquivos enviados!")
}

btnComparar.onclick = () =>{
    console.log("comparando")
    if(inptN1.value > inptN2.value){
        inptN1.classList.add("maior")
        return
    }
    inptN2.classList.add("maior")
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