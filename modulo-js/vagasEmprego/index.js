const vagas = []

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function(textoFinal, vaga , indice){
    textoFinal += indice + '. '
    textoFinal += vaga.nome
    textoFinal += ' (' + vaga.candidatos.length + ' candidatos).\n'
    return textoFinal
  },"")
  alert(vagasEmTexto)
}

function novaVaga() {
  const nome = prompt('Informe o nome da vaga : ')
  const descricao = prompt('Informe uma descrição para a vaga : ')
  const dataLimite = prompt('Informe uma data limite (dd/mm/aaaa): ')

  const confirmacao = confirm(
    'Tem certeza deseja salvar a vaga com essas informações ?' +
    '\nNome : ' + nome +
    '\nDescricao : ' + descricao +
    '\nData limite : ' + dataLimite
  )
  if (confirmacao) {
    const novaVaga = {nome , descricao, dataLimite, candidatos : []}
    vagas.push(novaVaga)
    alert('Vaga criada com sucesso!')
  }
}

function exibirVaga() {
  const indice = prompt('Informe o índice da vaga : ')
  const vaga = vagas[indice]

  if (vaga >= vaga.length || vaga < 0) {
    alert('Vaga inesistente')
    return
  }

  const candidatosEmTexto = vagas.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + '\n - ' + candidato
  },"")

  alert(
    'Vaga : ' + indice +
    '\nNome : ' + vaga.nome +
    '\nDescricao : ' + vaga.descricao +
    '\nData limite : ' + vaga.dataLimite +
    '\nQuantidade de candidatos : ' + vagas.candidatos.length +
    '\nCandidatos inscritos : ' + candidatosEmTexto   
  )
}

function inscreverCandidato() {
  const candidato = prompt('Informe o nome do(a) candidato(a) : ')
  const indice = prompt('Informe o indice da vaga em qual o(a) candidato(a) deseja se inscrever : ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Tem certeza que deseja se increver na seguinte vaga ?' +
    '\nNome : ' + vaga.nome +
    '\nDescricao : ' + vaga.descricao +
    '\nData limite : ' + vaga.dataLimite
  )

  if (confirmacao) {
    vagas.candidatos.push(candidato)
    alert('Candidato inscrito com sucesso !')
  }
}

function excluir() {
  const indice = prompt('Informe o indice da vaga : ')
  const vaga = vagas[indice]

  const confirmacao = confirm(
    'Tem certeza que deseja excluir a vaga ' + indice + ' ?' +
    '\nNome : ' + vaga.nome +
    '\nDescricao : ' + vaga.descricao +
    '\nData limite : ' + vaga.dataLimite
  )

  if(confirmacao) {
    vagas.splice(vaga)
    alert('Vaga eliminada com sucesso!')
  }
}

function exibirMenu() {
  const opcao = prompt(
    'Cadastro de vagas de emprego' +
    '\n\nEscolha uma opção' +
    '\n[1] Listar vagas' +
    '\n[2] Nova vaga' +
    '\n[3] Exibir vaga' + 
    '\n[4] Inscrever candidato' + 
    '\n[5] Excluir vaga' +
    '\n[6] Sair'
  )
  return opcao
}

function executar() {
  let opcao = ''

  do {
    opcao = exibirMenu()

    switch(opcao) {
      case '1':
        listarVagas()
        break
      case '2':
        novaVaga()
        break
      case '3':
        exibirVaga()
        break
      case '4':
        inscreverCandidato()
        break
      case '5':
        excluir()
        break
      case '6':
        alert('Finalizando !')
        break
      default:
        alert('Algo deu errado ...')
    }
  }while(opcao !== '6')
}

executar()