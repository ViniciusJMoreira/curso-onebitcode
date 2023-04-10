const dayjs = require("dayjs")
const chalk = require("chalk")

function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()

  const ageInYear = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(ageInYear + 1, 'year')
  const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

  console.log(`Idade : ${ageInYear} anos`)
  console.log(nextBirthday.format("YYYY/MM/DD"))
  console.log(`Faltam ${chalk.blue(daysToNextBirthday)} dias`)

  if (daysToNextBirthday === 366) {
    console.log(`Parabéns hoje é teu aniversário`)
  }
}

birthday("1993-03-15")
