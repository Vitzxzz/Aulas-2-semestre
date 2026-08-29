console.log("Está funcionando")

let id_aplicativo = [
    {
        nome: "Spotify",
        descricao: "Um aplicativo para ouvir músicas e podcasts.",
    },
    {
        nome: "Whatsapp",
        descricao: "Um aplicativo para se comunicar via texto ou ligação.",
    },
    {
        nome: "Snapchat",
        descricao: "Um aplicativo para interagir com amigos e utilizar filtros.",
    },
    {
        nome: "Ifood",
        descricao: "Um aplicativo para pedir comida via delivery.",
    }
]

let inserirDados = id_aplicativo.map(n => `<label>${n.descricao}</label>`).join("")

console.log(inserirDados)

const desc_spot = document.getElementById("desc-spot")
const desc_whats = document.getElementById("desc-whats")
const desc_snap = document.getElementById("desc-snap")
const desc_ifood = document.getElementById("desc-ifood")
desc_spot.id_aplicativo[0].innerHTML = inserirDados
desc_whats.id_aplicativo[1].innerHTML = inserirDados
desc_snap.innerHTML = inserirDados
desc_ifood.innerHTML = inserirDados