function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos pelo ID
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (campoPesquisa == " ") {
    section.innerHTML = "Digite um nome de jogador."
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

  
    // Itera sobre cada jogador no array 'jogadores'
    for (let jogador of jogadores) {
    titulo = jogador.titulo.toLowerCase()
    descricao = jogador.descricao.toLowerCase()
    tags = jogador.tags.toLowerCase()

      if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
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

    if(!resultados || campoPesquisa == "" ){
      resultados = "Nada foi encontrado."
    }

    // Atribui o HTML gerado para a propriedade innerHTML da seção, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }