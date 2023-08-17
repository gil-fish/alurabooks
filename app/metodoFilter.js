//criar variavel que abrange todos os botões e aplicar metodo forEach
const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) //botão que está sendo clicado
    const categoria = elementoBtn.value //identificar categorias a serem filtradas
    let livrosFiltrados = categoria == 'disponivel' ? filtroPorQuantidade() : filtroPorCategoria(categoria) // ? (se) : (senão)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        //criar constante para o calculo de livros disponíveis da function presente em reduce.js
        const valorTotal = calculoValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
    }
}

function filtroPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtroPorQuantidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

//criar função para exibir os livros disponíveis na tela

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
        `
}