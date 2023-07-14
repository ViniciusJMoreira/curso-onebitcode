const soma = (a,b) => a+b
const double = n => `e o dobro de ${sum} é ${n*2}` 

document.getElementById('submit').addEventListener('click', () => {
  const numA = Number(document.getElementById('numberA').value)
  const numB = Number(document.getElementById('numberB').value)
  const sum = numA + numB
  document.getElementById('result').innerHTML = `A soma de ${numA} e ${numB} é ${soma(numA, numB)}
  ${double(sum)}`
})

const array = ['Banana', 'Maca', 'Pera', 'Pessego']
const result = array.filter(i => i.includes('a'))
alert(result)