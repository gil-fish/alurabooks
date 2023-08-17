function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto

}

/* criar a variável, livrosComDesconto = livros.map e aplicar desconto em cada livro. Então, arrowFunction, {} e vamos mandar ver nessa função. Primeira coisa, a função map vai precisar retornar alguma coisa, então eu vou colocar um return.
Queremos pegar todos com todas as informações sem alterar nenhuma delas além do preço. Para isso, podemos usar no return e duas chaves {} para indicar que retornaremos um objeto. Vamos utilizar um operador especial do JavaScript que é ...livro. Quando colocamos as reticências ... e escrevemos livro, ele vai fazer uma cópia de todo o nosso array, ou do nosso objeto existente, para outro objeto.
 */