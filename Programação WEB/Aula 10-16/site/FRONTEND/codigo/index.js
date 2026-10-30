console.log("js rodando")

const tabelaCorpo = document.getElementById("tabelaCorpo")

function getFilmes(){
    console.log("dando get nos filmes")
    fetch("http://localhost:8000/BACKEND/php/index.php")
    .then(response => response.json())
    .then(data =>  populate(data))
}

function populate(data){
    console.log("inserindo os filmes")
   
    tabelaCorpo.innerHTML = data.map(item => `
        <tr>
            <td>${item.id}</td>
            <td>${item.titulo}</td>
            <td>${item.genero}</td>
            <td>${item.ano_lancamento}</td>
            <td>${item.nota_imdb}</td>
        </tr>
    `).join("")
}

getFilmes()