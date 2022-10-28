let wallet = Number(prompt('Qual é seu saldo disponivél ?'))

do {
  let = choice = Number(prompt(
    'Seu saldo disponivél : ' + wallet + ' R$\n' +
    '\nSelecione (1) para adicionar dinheiro na sua carteira' +
    '\nSelecione (2) para adicionar dinheiro na sua carteira' +
    '\nSelecione (3) para finalizar'
  ))
  if (choice === 1) {
    let add = Number(prompt('Quanto deseja depositar ?'))
    wallet += add
  }else if (choice === 2) {
      let remove = Number(prompt('Quanto deseja sacar ?'))
      wallet -= remove
  }
}while(choice != 3)
alert('O Programa foi finalizado')