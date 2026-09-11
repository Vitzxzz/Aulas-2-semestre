console.log("Pagina Inicial rodando!")
const btnenviar = document.getElementById("btnenviar");
const tabelacorpo = document.getElementById("tabelaCorpo")
const iptnome = document.getElementById("iptnome");
const iptidade = document.getElementById("iptidade");

btnenviar.onclick = () =>{
    console.log("arquivos enviados!")
    sendData({
        "nome": iptnome.value,
        "idade": iptidade.value
    })
}

function sendData(data){
    console.log(data)
    fetch("http://localhost:8000/cadastro-dados.php",{
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        getData()})
}

function getData(){
    fetch("http://localhost:8000/get-dados.php")
    .then(response => response.json())
    .then(data => populate(data))
}

function populate(data){
    console.log(data)
    //se o tamanho for 0 retorna a frase sem dados
    if(data.lenght === 0){
        tabelacorpo.innerHTML = "Sem dados!"
        return
    }

    let respostafetch = data.map(item => `
        <tr>
            <td>${item.nome}</td>
            <td>${item.idade}</td>
        </tr>
        `).join("")
    console.log(respostafetch)
    tabelacorpo.innerHTML = respostafetch
}