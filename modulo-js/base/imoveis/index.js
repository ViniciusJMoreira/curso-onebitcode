alert('Bem - vindo no Cadastro imobiliário')

let choice = 0
const sign = []

do {
  choice = Number(prompt(
    'Quantidade de imóveis: ' + sign.length +
    '\n\n[1] Cadastrar imóvel' +
    '\n[2] Imóveis Cadastrados' +
    '\n[3] Sair'
  ))

  switch (choice) {
    case 1:
      const property = {}
      property.name = prompt('Nome do proprietário :')
      property.quartos = prompt('Quantos quartos possue ?')
      property.banheiros = prompt('Quantos banheiros possue ?')
      property.garage = prompt('Possue garagem (Sim/Não)')

      const confirme = confirm(
        'Tem certeza que deseja salvar ?\n' +
        '\nProprietário: ' + property.name +
        '\nQuartos: ' + property.quartos +
        '\nBanheiros: ' + property.banheiros +
        '\nGaragem: ' + property.garage
      )

      if(confirme) {
        sign.push(property)
        alert('O imóvel foi cadastrado com sucesso!')
      } else {
        alert ('O cadastro foi recusado')
        alert('Voltando ao menu')
      }

      break
    case 2:
      for (let i = 0 ; i < sign.length ; i++){
        alert(
          'Proprietário: ' + sign[i].name +
          '\nQuartos: ' + sign[i].quartos +
          '\nBanheiros: ' + sign[i].banheiros +
          '\nGaragem: ' + sign[i].garage
        )
      }
      break
    case 3:
      alert('Finalizando...')
      break
    default :
      alert('Algo deu errado')
  }
}while(choice !== 3)