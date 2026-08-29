console.log("Está funcionando")

let id_aplicativo = [
    {
        nome: "SPOTIFY",
        descricao: "Um aplicativo para ouvir músicas e podcasts.",
        imagem:"../imagens/spotify.png"
    },
    {
        nome: "WHATSAPP",
        descricao: "Um aplicativo para se comunicar via texto ou ligação.",
        imagem:"../imagens/whatsapp.png"
    },
    {
        nome: "SNAPCHAT",
        descricao: "Um aplicativo para interagir com amigos e utilizar filtros.",
        imagem: "../imagens/snapchat.png"
    },
    {
        nome: "IFOOD",
        descricao: "Um aplicativo para pedir comida via delivery.",
        imagem:"../imagens/ifood.png"
    }
]

const desc_spot = document.getElementById("desc-spot")
const desc_whats = document.getElementById("desc-whats")
const desc_snap = document.getElementById("desc-snap")
const desc_ifood = document.getElementById("desc-ifood")

desc_spot.innerHTML = id_aplicativo[0].descricao
desc_whats.innerHTML = id_aplicativo[1].descricao
desc_snap.innerHTML = id_aplicativo[2].descricao
desc_ifood.innerHTML = id_aplicativo[3].descricao

const title_spot = document.getElementById("title-spot")
const title_whats = document.getElementById("title-whats")
const title_snap = document.getElementById("title-snap")
const title_ifood = document.getElementById("title-ifood")

title_spot.innerHTML = id_aplicativo[0].nome
title_whats.innerHTML = id_aplicativo[1].nome
title_snap.innerHTML = id_aplicativo[2].nome
title_ifood.innerHTML = id_aplicativo[3].nome

const img_spot = document.getElementById("img-spot")
const img_whats = document.getElementById("img-whats")
const img_snap = document.getElementById("img-snap")
const img_ifood = document.getElementById("img-ifood")

img_spot.src = id_aplicativo[0].imagem
img_whats.src = id_aplicativo[1].imagem
img_snap.src = id_aplicativo[2].imagem
img_ifood.src = id_aplicativo[3].imagem