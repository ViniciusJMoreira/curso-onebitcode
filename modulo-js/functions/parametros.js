function dobro(x) {
  console.log('O dobro de ' + x + ' é ' + (x*2))
}

dobro(2)

function welcome (name = 'Mundo') {
  console.log('Olá ' + name)
}

welcome('Vinicius')

function soma(a, b) {
  console.log('A soma de ' + a + ' + ' + b + ' é ' + (a + b))
}

soma(2, 9)

function criarUsuario(nome, telefone, email) {
  const usuario = {
    nome,
    telefone,
    email
  }
  console.log(usuario)
}

criarUsuario('Vinicius', '3398208642', 'vinicius@gmail.com')

function objeto(usuario) {
  usuario.nome,
  usuario.email
  usuario.telefone
  console.log(usuario)
}

const dadosDoUsuario = {
  nome : 'Vinicius',
  email : 'vinicius@email.com',
  telefone: '3398208642'
}

objeto(dadosDoUsuario)