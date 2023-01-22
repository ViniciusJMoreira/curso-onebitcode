const soma = (a,b) => a+b

document.getElementById('submit').addEventListener('click', function(){
  const numA = Number(document.getElementById('numberA').value)
  const numB = Number(document.getElementById('numberB').value)
  document.getElementById('result').textContent = soma(numA, numB)
})

const array = ['Banana', 'Maca', 'Pera', 'Pessego']
const result = array.filter(i => i.includes('P'))
alert(result)