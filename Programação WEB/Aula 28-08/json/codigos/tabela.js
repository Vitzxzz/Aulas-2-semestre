console.log("Está funcionando")

let id_aplicativo = [
    {
        nome: "Spotify",
        descricao: "Um aplicativo para ouvir músicas e podcasts.",
    },
    {
        nome: "Whatsapp",
        descricao: "Um aplicativo para se comunicar via texto ou ligação",
    },
    {
        nome: "Snapchat",
        descricao: "Um aplicativo para interagir com amigos e utilizar filtros",
    },
    {
        nome: "Ifood",
        descricao: "Um aplicativo para pedir comida via delivery",
    }
]

let inserirDados = id_aplicativo.map(n => `
        <tr>
            <td>${n.nome}</td>
            <td>${n.descricao}</td>
        </tr>
    `).join("")

console.log(inserirDados)

const tabelaCorpo = document.getElementById("corpo_tabela")
tabelaCorpo.innerHTML = inserirDados