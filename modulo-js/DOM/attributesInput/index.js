const input = document.getElementById('inputId')

function changeValue() {
  // value em modo atual escrito dentro do input
  input.value = input.value === '' ? 'Hello, World' : ''
  // value pré-definido do input
  input.setAttribute('value', 'Value default')
  console.log(input.getAttribute('value'))
}

function changeType() {
  input.type = input.type === "text" ? "radio" : "text"
}

function addPlacheholder() {
  input.placeholder = 'Digite Algo'
}

function disabledInput() {
  input.setAttribute('disabled', !input.disabled)
}

function enableInput() {
  input.disabled = true
}

function showData() {
  let data = input.dataset.someValue
  console.log(data)
  data = input.dataset.someValue = 'Algum outro valor'
  console.log(data)
}

document.getElementById('changeValue').addEventListener('click', changeValue)
document.getElementById('changeType').addEventListener('click',changeType)
document.getElementById('addPlaceholder').addEventListener('click', addPlacheholder)
document.getElementById('disabled').addEventListener('click', disabledInput)
document.getElementById('enable').addEventListener('click', enableInput)
document.getElementById('showData').addEventListener('click', showData)
