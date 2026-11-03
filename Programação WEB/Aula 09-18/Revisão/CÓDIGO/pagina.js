console.log("página inicial funcionando!")

const tabelaCorpo = document.getElementById("tabelaCorpo")

let dados = [
    {
        "Titulo": "Gigantes de aço",
        "Ano": "2015",
        "Genero": "Ação"
    },
    {
        "Titulo": "Homem aranha",
        "Ano": "2026",
        "Genero": "Heróis"
    },
    {
        "Titulo": "Odisseia",
        "Ano": "2026",
        "Genero": "Ação"
    }
]

let resposta = dados.map(item => `
        <tr>
            <td>${item.Titulo}</td>
            <td>${item.Ano}</td>
            <td>${item.Genero}</td>        
        </tr>
    `).join('')

tabelaCorpo.innerHTML = resposta
console.log(resposta)