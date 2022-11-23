function calcoloIdade () {
  const firstName = prompt('Informe o nome da primeira pessoa : ')
  const firstAge = Number(prompt('Informe a idade da primeira pessoa : '))
  const secondName = prompt('Informe o nome da segunda pessoa : ')
  const secondAge = Number(prompt('Informe a idade da segunda pessoa : '))

  if (firstAge > secondAge) {
    alert(
      firstName + ' é mais velho que ' + secondName +
      '\nCom a diferença de ' + (firstAge - secondAge) + ' anos de idade.'
    )
  }else if (secondAge > firstAge) {
    alert(
      secondName + ' é mais velho que ' + firstName +
      '\nCom a diferença de ' + (secondAge - firstAge) + ' anos de idade.')
  }else {
    alert('Eles possuem a mesma idade')
  }
}

calcoloIdade()