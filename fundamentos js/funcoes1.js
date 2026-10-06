// Funções sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN, pois o segundo parâmetro é undefined
imprimirSoma(1,2,3,4,5,6) // Apenas os dois primeiros parâmetros são utilizados, os demais são ignorados    
imprimirSoma() // NaN, pois ambos os parâmetros são undefined

//Função com retorno

function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) // 2, pois o segundo parâmetro é 0 
