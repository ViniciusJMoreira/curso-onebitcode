const subtracao = function (a , b){
  return a - b
}

console.log(subtracao(5 , 5))

olaMundo()
ola() // aqui vai dar erro , será executado depois da declaração

function olaMundo(){
  console.log('Ola, Mundo')
}

const ola = function() {
  console.log('Ola mundo!')
}
