async function getBirth(birthday) {
  if(birthday.match(/\d{4}\-\d{2}\-\d{2}/)) {
    const birthYear = new Date(birthday).getFullYear()
    const currentYear = new Date().getFullYear()
    return Promise.resolve(currentYear - birthYear)
  } else {
    return Promise.reject(new Error(`Insira corretamente a data de nascimento! No formato(0000-00-00)`))
  }
}

async function checkAge(age) {
  if(age >= 18) {
    return Promise.resolve(`é maior de idade, possui ${age} anos.`)
  } else {
    return Promise.reject(new Error(`é menor de idade, possui ${age} anos.`))
  }
}

getBirth('2020-04-0').then((age) => checkAge(age)).then((result) => console.log(result)).catch((err) => console.log(err.message))