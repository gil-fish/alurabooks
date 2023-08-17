//criar var referenciando o id btnOrdenarPorPreco e aplicar evento de click
let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

//criar function, sem parâmetros
function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco) // ordenar do menor preço para o maior
    exibirOsLivrosNaTela(livrosOrdenados)

}