const a = 0 // 0 é um valor falso no javascript
const b = null // null é um valor falso no js
const c = undefined // undefined é um valor falso no js
const d = 42
const resultLogico = a || b || d || c // retorna o valor 42 

// Os operadores lógicos eles retorna o valor verdadeiro ignorando assim os valores falsos da esquerda para direita, Nesse exemplo ele retorna o [c] verdadeiro porque 0, null e undefined no operando é falso

console.log({resultLogico})

// O operador de coelescencia ?? nula a diferencia dos operadores lógicos não ignora o 0 , retornando falso somente null e undefined

const resultNullish = c ?? b ?? a ?? b // retorna o valor a

console.log({resultNullish})