function getBirth(birthday) {
  return new Promise((resolve, reject) => {
    if(birthday.match(/\d{4}\-\d{2}\-\d{2}/)) {
      const birthYear = new Date(birthday).getFullYear()
      const currentYear = new Date().getFullYear()
      resolve(currentYear - birthYear)
    } else {
      reject(new Error(`Insira corretamente a data de nascimento! Formato(0000-00-00)`))
    }
  })
}

function checkAge(age) {
  return new Promise((resolve, reject) => {
    if(age >= 18) {
      resolve(`é maior de idade`)
    } else {
      reject(new Error(`é menor de idade`))
    }
  })
}

getBirth('2000-04-23').then((age) => checkAge(age)).then((result) => console.log(result)).catch((err) => console.log(err.message))