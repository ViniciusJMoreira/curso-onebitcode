const objeto = {
  nomeCompleto : {
    nome : 'Vinicius',
    sobrenome : 'Moreira'
  },
  telefone : '3398208642' ,
  endereco : {
    rua : 'Via guglielmo Marconi' ,
    numero : '10' ,
    bairro : 'Verucchio'
  }
}

function verify () {
  const verify1 = objeto.endereco?.nome
  const verify2 = objeto.nomeCompleto?.nome
  if (verify1 == undefined) {
    console.log('A verificação numero 1 não existe')
  }

  if (verify2 != undefined) {
    console.log('A verificação numero 2 é correta')
  }

}

verify()