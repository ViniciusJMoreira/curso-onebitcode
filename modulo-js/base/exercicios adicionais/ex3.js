const nomePiloto = prompt('Informe o nome do piloto :')
let confirmacao = Boolean()
let velocidadeNave = Number()
do {
  velocidadeNave = Number(prompt('Informe a velocidade que a nave deve percorrer :'))

  if (velocidadeNave === 0) {
    confirmacao = confirm(
      'A nave está parada' +
      '\nDeseja alterar a velocidade ?'
    )
  }else if (velocidadeNave < 40) {
    confirmacao = confirm(
      'Voce está muito devagar, pode aumentar mais.' +
      '\nDeseja alterar a velocidade ?'
    )
  }else if (velocidadeNave >= 40 || velocidadeNave < 80) {
    confirmacao = confirm(
      'Parece uma boa velocidade para se manter.' +
      '\nDeseja alterar a velocidade ?'
    )
  }else if (velocidadeNave >= 80 || velocidadeNave < 100) {
    confirmacao = confirm(
      'Velocidade alta. Considere diminuir.' +
      '\nDeseja alterar a velocidade ?'
    )
  }else if (velocidadeNave >= 100) {
    alert('Velocidade perigosa controle automatico forçado')
    confirmacao = true
  }else {
    alert('A velocidade não possue numeros negativos !')
  }

}while(confirmacao === true)

alert(
  'Piloto no comando : ' + nomePiloto +
  '\nVelocidade atual da nave : ' + velocidadeNave + ' km/h'
)