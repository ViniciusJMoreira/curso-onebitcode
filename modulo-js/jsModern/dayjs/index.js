const dayjs = require("dayjs")
import chalk from 'chalk'
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
function birthday(date) {
  const birthday = dayjs(date)
  const today = dayjs()
  const myAge = today.diff(birthday, 'year')
  const nextBirthday = birthday.add(myAge + 1, 'year')
  const nextToBirthday = nextBirthday.diff(today, 'day')


  console.log(`A minha idade é ${myAge} anos`)
  console.log(`Meu próximo aniversário é ${nextBirthday.format('DD/MM/YYYY')}`)
  console.log(`Faltam ${nextToBirthday} dias para meu próximo aniversário.`)

  if(nextToBirthday === 365) {
    console.log(`Parabéns hoje é seu aniversário!`)
  }
}

birthday("1993-07-16")