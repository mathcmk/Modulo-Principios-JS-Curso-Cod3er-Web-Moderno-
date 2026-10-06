let a = 3

global.b = 123
this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.a)
console.log(global.b)
console.log(this.c)
// O this é tambem no Node o module.exports
console.log(module.exports === this) // true
console.log(module.exports.d)
console.log(module.exports) // retorna um objeto com as variaveis this

//Criando uma variavel maluca sem var/let

abc = 3 // Não faça isso em casa
console.log(global.abc)

