const notas = [6.7,9.8,8.1,7.7,2.8]

for (i in notas) {
    console.log(i, notas[i])
}

const obj = {
    nome: 'Ana',
    sobrenome: 'Maria',
    idade: 24,
    peso: 1.98
}

for (let atributo in obj) {
    console.log(`Atributo = ${atributo} ----- ${obj[atributo]}`)
}

console.log(atributo)