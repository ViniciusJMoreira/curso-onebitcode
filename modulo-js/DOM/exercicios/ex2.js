function createLabel (text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, name, value, placeholder = "", type = "text") {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.value = value
  input.placeholder = placeholder
  input.type = type
  return input
}


const addTech = document.getElementById('addTech')
const form = document.getElementById('devForm')
const developers = Array()
let inputRows = 0

addTech.addEventListener('click', function (ev){
  ev.preventDefault()

  const listInputs = document.getElementById('listInputs')
  
  const newRow = document.createElement('li')
  const rowIndex = inputRows
  inputRows ++
  newRow.id = 'dev-' + rowIndex
  newRow.className = 'inputRow'

  const techNameLabel = createLabel('Nome Tecnologia ', 'techIdName-'+rowIndex)
  const techNameInput = createInput('techIdName-'+rowIndex,'techName', null, 'Informe a tecnologia')
  newRow.append(techNameLabel,techNameInput)
  newRow.appendChild(document.createElement('br'))
  newRow.appendChild(document.createElement('br'))

  const ExpRadioLabel = createLabel('Anos de experiencia')
  newRow.append(ExpRadioLabel,document.createElement('br'))
  const firstRadioInput = createInput('firstRadio'+rowIndex,'inputName-'+rowIndex, '0-2 Anos', "", 'radio')
  const firstRadioLabel = createLabel('0-2 Anos', 'firstRadio'+rowIndex)
  newRow.append(
    firstRadioInput,
    firstRadioLabel,
    document.createElement('br')
  )
  const middleRadioInput = createInput('middleRadio'+rowIndex,'inputName-'+rowIndex, '2-4 Anos', "", 'radio')
  const middleRadioLabel = createLabel('3-4 Anos', 'middleRadio'+rowIndex)
  newRow.append(middleRadioInput,
    middleRadioLabel,
    document.createElement('br')
  )
  const lastRadioInput = createInput('lastRadio'+rowIndex,'inputName-'+rowIndex, '5+ Anos', "", 'radio')
  const lastRadioLabel = createLabel('5+ Anos', 'lastRadio'+rowIndex)
  newRow.append(
    lastRadioInput,
    lastRadioLabel,
    document.createElement('br'),
    document.createElement('br')
  )
  const buttonRemove = document.createElement('button')
  buttonRemove.type = 'button'
  buttonRemove.innerText = 'Remover'
  buttonRemove.addEventListener('click', function(){
    listInputs.removeChild(newRow)
  })
  newRow.appendChild(buttonRemove)

  listInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev){
  ev.preventDefault()

  const nameDev = document.getElementById('nameDev')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = Array()
  inputRows.forEach(function(row){
    const techName = document.querySelector('input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push(techName, techExp)
  })
  const newDev = {nameDev: nameDev.value , technologies: technologies}
  developers.push(newDev)

  nameDev.value = null
  inputRows.forEach(function(row){
    row.remove()
  })

  console.log(developers)
})