const person = {name:'Vinicius', age:', 29 years', parents:['Sergio', 'Denise']}

const {name, age} = person

console.log(name, age)

const [pai, mae] = person.parents

console.log(pai,mae)

const user = {nome : 'Vinicius', sobrenome: 'Moreira'}

function createUser({nome, sobrenome}){
  const id = Math.floor(Math.random()*99)
  return {
    id,
    nome,
    sobrenome
  }
}

const newUser = createUser(user)
console.log(newUser)