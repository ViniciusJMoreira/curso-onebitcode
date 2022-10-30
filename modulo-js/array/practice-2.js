const array = ['Vinícius','Ericksen','Moritz','Sérgio','Denise']
console.log(array)

// função para adicionar elementos no final da lista

array.push('Eloa')
console.log(array)

// função para adicionar elementos no começo da lista

array.unshift('Alessandro')
console.log(array)

// remover elementos no final da lista

const minhaFilha = array.pop()
console.log(minhaFilha)

// remover elementos no começo da lista

const sobrinho = array.shift()
console.log(sobrinho)

console.log(array)

// pesquisar por um elemento retornando um valor booleano

const irmao = array.includes('Ericksen')
console.log(irmao)

// pesquisar por um elemento retornando a sua posição

let i = array.indexOf('Vinícius')
console.log(i)

// cortar e concatenar elementos

// função para pegar valores por pedaços retornando valores indicados

const filhos = array.slice(0,3)
console.log(filhos)

//podemos tambem referenciar os elementos com o sinal de menos

const pais = array.slice(-2)
console.log(pais)

// função para concatenar arrays dentro de outras arrays, adicionando também outros valores em sequencia

const family = filhos.concat(pais,minhaFilha,sobrinho, 'Edoardo')
console.log(family)

// Com a função SLICE podemos substituir e remover elementos indicados por outros valores
i = family.indexOf('Eloa')
family.splice(i, 1)
console.log(family)

// iterar sobre elementos

for (i = 0 ; i < family.length ; i++) {
  const element = family[i]
  console.log(element + ' se encontra na posição ' + i)
}