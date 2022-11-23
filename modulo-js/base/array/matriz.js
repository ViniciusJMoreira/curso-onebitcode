const matriz = [
  ['l1 , c1','l1 , c2','l1 , c3'],
  ['l2 , c1','l2 , c2','l2 , c3'],
  ['l3 , c1','l3 , c2','l3 , c3']
]

for (let i = 0 ; i < matriz.length ; i++) {
  for (let j = 0 ; j < matriz[i].length ; j++) {
    const elements = matriz[i][j]
    console.log(
      'Posição : ' + '(' + i + ',' + j + ') Valor :' + elements
    )
  }
}

console.log(matriz[1][1])