
 function pesquisar(){
    let section = document.getElementById("resultados-pesquisa")
let resultados = ""

for(let jogador of jogadores){
    resultados += `
    <div class="item-resultado">
                <h2> 
                    <a href="#" target="_blank"> ${jogador.titulo} </a> 
                     </h2>
                <p class="descricao-meta"> ${jogador.descricao} </p>
                <a href= ${jogador.link} target= "_blank"> Saiba Mais... </a>
            </div>
    `
}
section.innerHTML  = resultados

 }

