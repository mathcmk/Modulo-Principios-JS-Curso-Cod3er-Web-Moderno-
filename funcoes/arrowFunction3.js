let comparaComThis = function name(param) {
    return console.log(this === param);
}

comparaComThis(global)


const obj = {}

comparaComThis = comparaComThis.bind(obj)
console.log(comparaComThis(global))
console.log(comparaComThis(obj))

comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
