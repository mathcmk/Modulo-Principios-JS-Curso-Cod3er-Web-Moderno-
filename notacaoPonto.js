console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Matheus' //Criou um elemento no objeto usando notação ponto
//obj1 [nome] = 'Thalyta' - Poderia ser feito dessa maneira também
console.log(obj1)

function Obj(nome) {
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}

const obj2 = new Obj("Cadeira")
const obj3 = new Obj("Mesa")
console.log(obj2.nome)
console.log(obj3.nome)
obj2.exec()