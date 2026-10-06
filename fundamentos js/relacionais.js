console.log('01)', '1' == 1) // Iguais pois == compara o valor e não o tipo
console.log('02)', '1' === 1) //Falso, pois === extritamente igual, os tipos são diferentes sendo apenas valor igual
console.log('03)', '3' != 3)
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('05)', 3 >= 2)
console.log('05)', 3 <= 2)

const d1 = new Date(0) // 0 Significa a data de referencia (marco zero)
const d2 = new Date(0)
console.log('09)', d1 === d2)// False, pois estamos usando aqui endereco de memoria
console.log('09)', d1 == d2) //mesma coisa

console.log('10)', d1.getTime === d2.getTime)
console.log('11)', d1.getTime == d2.getTime)

console.log('12)', undefined == null)
console.log('12)', undefined === null)
