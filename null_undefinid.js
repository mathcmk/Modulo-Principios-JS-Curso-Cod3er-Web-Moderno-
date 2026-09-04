// Exemplo de atribuição por referencia, pos a nao guarda o valor, mas sim o endereço de memoria do objeto. Portanto, quando alteramos b, a tambem é alterado.
// Entao b e a apontam para o mesmo objeto na memoria. Se um alterar o objeto, o outro tambem sera alterado.

const a = {nome: "Teste"}

const b = a


b.nome = "Opa"

console.log(a)


// Exemplo de atribuição por valor, valores primitivos sao armazenados na memoria stack, 
// e quando atribuimos um valor a uma variavel, o valor é copiado para a nova variavel. 
// Portanto, quando alteramos d, c nao é alterado.

let c = 3

let d = c
d++

console.log(c)
console.log(d)

//---------------------------------------------------------------------
let valor // nao inicializada
console.log(valor) // undefined

valor = null // ausencia de valor, seja primitivo ou endereco de memoria.
console.log(valor) // null

//console.log(valor.toString()) // Erro, pois null nao tem metodo toString

const produto = {}
console.log(produto.preco) // undefined, pois preco nao foi definido no objeto produto
console.log(produto) // {} objeto vazio, pois nao foi definido nenhum atributo no objeto produto

produto.preco = 3.5
console.log(produto) // 3.0, pois preco foi definido no objeto produto

//produto.preco = undefined // Evitar atribuir undefined, pois o ideal é remover o atributo do objeto
//delete produto.preco // Remove o atributo preco do objeto produto

console.log(!!produto.preco) // false, pois preco foi definido como undefined
console.log(produto) // { preco: undefined }, pois preco foi definido como undefined

produto.preco = null // Sem preco, ausencia de valor
console.log(!!produto.preco) // false, pois preco foi definido como null
console.log(produto) // { preco: null }, pois preco foi definido como null