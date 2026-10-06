const pessoa = {
    nome: 'Matheus',
    idade: 28,
    endereco: {
        estado: 'PR',
        cidade: 'Curitiba',
        rua: 'Padre Franciso',
        numero: '57'
    }
}

const { nome } = pessoa
const { idade } = pessoa
const { endereco } = pessoa

console.log(nome)
console.log(idade)
console.log(endereco)


const produto = {
    nome1: 'Notebook',
    preco: 1500,
    estoque: 12,
    categoria: 'Informática'
}

const { nome1, preco } = produto
console.log(`${nome1} custa R$  ${preco}`)


const usuario = {
    nome2: 'Matheus',
    email: 'mathcmk@hotmail.com'
}

const {nome2: nomeUsusario } =  usuario
console.log(nomeUsusario)

const config = {
    tema: 'escuro'
}

const { tema, idioma = 'PT'} = config
console.log(config)
console.log(idioma)

const linguagens = ["Java,","JS", "Python", "C#"]

const [primeira, segunda, terceira, quarta] = linguagens
console.log(primeira)

const [j, ,p,] = linguagens
console.log(j)
console.log(p)

const pedido = {
    numero: 150,
    cliente: {
        nome3: 'Ana',
        endereco: {
            cidade: 'Curitiba',
            estado: 'PR'
        }
    },
    total: 1550
}

const {numero, cliente: {nome3}, cliente: {endereco: {cidade}}, total} = pedido

console.log(numero)
console.log(nome3)
console.log(cidade)
console.log(total)


const resposta = {
    status: 200,
    dados: {
        usuario: {
            id: 7,
            nome4: 'Matheus',
            tecnologias: ["Java", "Spring Boot", "React"]
        }
    }
}

const {status, dados: {usuario: {id, nome4, tecnologias: [principal]}}} = resposta
console.log(status)
console.log(id)
console.log(nome4)
console.log(principal)
