const cpf = require("cpf")
const helloWorld = require('hello-world-npm')

function validationCpf(number) {
  const format = cpf.format(number)
  const formaTrue = cpf.isValid(format)
  console.log(format)
  console.log(formaTrue)
}

validationCpf('37643616897')

console.log(helloWorld())
