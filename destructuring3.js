function rand ({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max -  min) + min
    return Math.floor(valor) //Math.floor arredonda um número decimal sempre para baixo, 
                            //transformando-o no número inteiro mais próximo menor ou igual ao valor original
                            //Ex: 1.2 -> 1
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))

// Ou desta maneira também
console.log(rand({ min: 40, max: 50 }))

//ou usando o valor padrão definido na funcao
console.log(rand({ min: 900 }))

//Passando um objeto vazio, que usará osvalores padrões definidos
console.log(rand({}))