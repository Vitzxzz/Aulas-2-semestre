console.log("Página inicial rodando")

let dados = [
    {
        "Jogador": "Matheuzinho",
        "Posicao": "Lateral direito",
        "Idade": "26"
    },
    {
        "Jogador": "Gabriel Paulista",
        "Posicao": "Zagueiro",
        "Idade": "35"
    },
    {
        "Jogador": "Gustavo Henrique",
        "Posicao": "Zagueiro",
        "Idade": "33"
    },
    {
        "Jogador": "Matheus Bidu",
        "Posicao": "Lateral esquerdo",
        "Idade": "27"
    },
    {
        "Jogador": "Allan",
        "Posicao": "Volante",
        "Idade": "29"
    },
    {
        "Jogador": "André Carrillo",
        "Posicao": "Meia",
        "Idade": "35"
    },
    {
        "Jogador": "Breno Bidon",
        "Posicao": "Meia",
        "Idade": "21"
    },
    {
        "Jogador": "Rodrigo Garro",
        "Posicao": "Meia",
        "Idade": "28"
    },
    {
        "Jogador": "Kaio César",
        "Posicao": "Atacante",
        "Idade": "22"
    },
    {
        "Jogador": "Memphis Depay",
        "Posicao": "Atacante",
        "Idade": "32"
    }
]

let resposta = dados.map(item =>`
      <tr>
        <td>${item.Jogador}</td>
        <td>${item.Posicao}</td>
        <td>${item.Idade}</td>
      </tr>`).join('')

tabelaCorpo.innerHTML = resposta
console.log(resposta)
