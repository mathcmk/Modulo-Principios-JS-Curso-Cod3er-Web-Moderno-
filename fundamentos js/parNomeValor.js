const saudacao = 'Opa' //Contexto lexico 1

function exec() {
    const saudacao = 'Falaaaaa' // Contexto lexico 2
    return saudacao
}

// Objetos são grupos aninhado de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Francisco',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)