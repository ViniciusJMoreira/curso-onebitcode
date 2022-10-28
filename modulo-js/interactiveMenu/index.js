let escolha = 0
do {
  escolha = Number(prompt(
    'Escolha uma opção' +
    '\nOpção (1)' +
    '\nOpção (2)' +
    '\nOpção (3)' +
    '\nOpção (4)' +
    '\nFinalizar (5)'
    ))
    switch (escolha) {
      case 1 :
        alert('Opção 1')
        break
      case 2 :
        alert('Opção 2')
        break
      case 3 :
        alert('Opção 3')
        break
      case 4 :
        alert('Opção 4')
        break
    }
}while(escolha != 5 || false)
alert('O Programa foi finalizado')