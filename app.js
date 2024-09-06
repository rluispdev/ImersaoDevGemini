function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == "") {
    section.innerHTML = "Digite um nome de jogador."
    return
  }
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada jogador no array 'jogadores'
    for (let jogador of jogadores) {
    

      if (jogador.titulo.includes (campoPesquisa)) {
        // Constrói o HTML para cada jogador, utilizando template literals para inserir os dados dinamicamente
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${jogador.titulo}</a>
          </h2>
          <p class="descricao-meta">${jogador.descricao}</p>
          <a href="${jogador.link}" target="_blank">Saiba Mais...</a>
        </div>
      `;
      }
    }

    // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }