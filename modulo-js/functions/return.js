function calculaMedia(a, b) {
  return (a + b) /2
}

console.log(calculaMedia(4,7))

function criarProduto(name, preco) {
  const produto = {
    name,
    preco,
    estoque : 1
  }
  return produto
}

console.log(criarProduto('notebook Intel Core i3 , 8gb', 2500))

function areaRetangulo(base, altura) {
  return base * altura
}

console.log(areaRetangulo(5, 8))

function areaQuadrada (lado){
  return areaRetangulo(lado, lado)
}

console.log(areaQuadrada(5))