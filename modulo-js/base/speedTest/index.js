const car1 = prompt('Marca do primeiro carro:')
const speed1 = Number(prompt('Sua velocidade:'))
const car2 = prompt('Marca do segundo carro:')
const speed2 = Number(prompt('Sua velocidade'))

if (speed1 > speed2) {
  alert (
    'Marca ' + car1 + 
    '\nEsta na velocidade ' + speed1 + ' km/h'
  )
} else if (speed2 > speed1){
  alert (
    'Marca ' + car2 + 
    '\nEsta na velocidade ' + speed2 + ' km/h'
  )
} else {
  alert(
    'Os dois Autoveiculos estão indo na mesma velocidade'
  )
}