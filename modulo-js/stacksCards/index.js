alert('Bem - Vindo ao DevCards')

const cards = []
let choice = 0

do {

  choice = Number(prompt(
    'Quantidades de Cartas : ' + cards.length +
    '\n\nEscolha uma opção' +
    '\n[1] Adicionar uma carta' +
    '\n[2] Puxar uma carta' +
    '\n[3] Sair'
  ))

  switch (choice) {
    case 1 :
      const newCard = prompt('Qual é o nome da carta ?')
      cards.unshift(newCard)
      alert(newCard + ' foi adicionada')
      break
    case 2 :
      const cardChoice = cards.shift()
      if (cardChoice) {
        alert(cardChoice + ' foi pescada!')
      }else {
        alert('Não ha mais cartas!')
      }
      break
    case 3 :
      alert('Finalizando...')
      break
    default :
      alert('Opção Invalida')
  }
} while(choice !== 3)