let num1 = 1
let num2 = 2

num1++ //Pos fixada, acrescenta 1 ao valor da variável
console.log(num1)
--num1 //Pre fixada,decrementa 1 ao valor da variavel
console.log(num1)

console.log(++num1 === num2--) // True, pois, somente depois da comparação que o valor de num2 foi decrementado 
console.log(num1 === num2) // Agora sim da false