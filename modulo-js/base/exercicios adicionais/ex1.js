function dadosUsuario () {
  const usuario = prompt('Informe seu nome :')
  const idade = prompt('Informe sua idade :')
  let confirmeIdade = confirm('A sua idade é ' + idade + ' anos ?')
  if (confirmeIdade === true) {
    confirmeIdade = 'Sim'
  }else {
    confirmeIdade = 'Idade negada!'
  }
  alert(
    'Dados do usuario' +
    '\nNome : ' + usuario +
    '\nIdade : ' + idade +
    '\nConfirmação idade : ' + confirmeIdade
  )
  alert('Até a próxima !')
}

function exibir() {
  alert('Bem - Vindo , a seguir pediremos que informe alguns dados.')
  dadosUsuario()
}

exibir()