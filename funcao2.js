//Armazenando uma função em uma variavel

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenar uma função arrow em uma variavel. Arrow (=>)
//Arrow function é uma forma mais curta de escrever uma função, mas não possui o seu próprio this, arguments, super ou new.target. Essas funções são melhor utilizadas para funções que não precisam de um contexto próprio.

const soma = (a, b) => { return a + b }


console.log(soma(2, 3))

//Retorno implícito em funções arrow, quando a função possui apenas uma expressão, o retorno é implícito, ou seja, não é necessário utilizar a palavra-chave return.

const subtracao = (a, b) => a - b

console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)   
imprimir2('Legal!!!')
