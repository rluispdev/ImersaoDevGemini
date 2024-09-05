
 

let section = document.getElementById("resultados-pesquisa")

for(let jogador of jogadores){
    section.innerHTML += `
    <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank"> ${jogador.titulo} </a> 
                     </h2>
                <p class="descricao-meta"> ${jogador.descricao} </p>
                <a href= ${jogador.link} target= "_blank"> Saiba Mais... </a>
            </div>
    `
}
 

