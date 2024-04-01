const person = {
  fullname : {
    name : 'Vinicius',
    surname : 'Moreira'
  },
  telphone : '3398208642' ,
  address : {
    street : 'Via guglielmo Marconi' ,
    number : '10' ,
    city : 'Verucchio'
  }
}

function verify () {
  const verify1 = person.address?.name
  const verify2 = person.fullname?.name
  if (verify1 == undefined) {
    console.log('A verificação numero 1 não existe')
  } else if (verify1 != undefined) {
    console.log('A verificação numero 1 é correta')
  }

  if (verify2 == undefined) {
    console.log('A verificação numero 2 não existe')
  } else if (verify2 != undefined) {
    console.log('A verificação numero 2 é correta')
  }
}

verify()