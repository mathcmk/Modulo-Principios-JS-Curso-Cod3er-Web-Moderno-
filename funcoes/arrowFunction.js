let dobro = function (a) {
    return 2 * a
}

dobro = (a) =>  {
    return 2 * a
}

dobro = a => 2 * a // return está implicito

console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}

ola = () => 'ola'

ola = _ => 'Olé'

console.log(ola())
