function newInput() {
  const ul = document.getElementById('inputs')

  const newLi = document.createElement('li')
  newLi.className = 'newInput'
  newLi.innerText = 'Novo Input '

  const newInput = document.createElement('input')
  newInput.type = 'text'
  newInput.name = 'nameInput'

  newLi.appendChild(newInput)
  ul.appendChild(newLi)

}