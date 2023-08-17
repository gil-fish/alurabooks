//section - inserir livros
const elementoParaInserirLivros = document.getElementById('livros')
    //livros disponíveis
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

//função para exibir os livros
function exibirOsLivrosNaTela(listaDeLivros) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = '' //limpa os dados de categorias de livros para filtrar
    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        /* let disponibilidade = verificarDisponibilidadeDoLivro(livro) */ //criar uma função que vai verificar a disponibilidade.
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' //método operador ternário
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });

}

//método tradicional
/* function verificarDisponibilidadeDoLivro(livro) {
    if (livro.quantidade > 0) {
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }
} */