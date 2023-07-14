const person = {name:'Vinicius', age:', 29 years', parents:['Sergio', 'Denise']}

const {name, age} = person

console.log(name, age)

const [pai, mae] = person.parents

console.log(pai,mae)

const button = document.getElementById('submit')
button.addEventListener('click', () => {
  const nome = document.getElementById('name').value
  const sobreNome = document.getElementById('sobrenome').value
  const user = {nome : nome, sobrenome: sobreNome}
  const newUser = createUser(user)
  console.log(newUser)
})

function createUser({nome, sobrenome}){
  const id = Math.floor(Math.random()*99)
  return {
    id,
    nome,
    sobrenome
  }
}