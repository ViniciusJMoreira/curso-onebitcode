const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('screen')
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

const button = document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function(){
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})


//navigator.clipboard.writeText(input.value)

document.getElementById('clear').addEventListener('click', function(){
  input.value = ''
  input.focus()
})

input.addEventListener('keydown', function(ev){
  ev.preventDefault()
  if(allowedKeys.includes(ev.key)){
    input.value += ev.key
    return
  }
  if (ev.key === 'Backspace'){
    input.value = input.value.slice(0, -1)
  }
  if(ev.key === 'Enter'){
    calculate()
  }
})

document.getElementById('equal').addEventListener('click', calculate)


function calculate() {
  const result = eval(input.value)
  input.value = result
  if (result === undefined) {
    input.value = 'ERROR'
  }
}

document.getElementById('themeSwitch').addEventListener('click', function(){
  if(main.dataset.theme === 'dark'){
    root.style.setProperty('--light-color', '#212529')
  }else {
    root.style.setProperty('--light-color', '#e9e9e9')
  }
})