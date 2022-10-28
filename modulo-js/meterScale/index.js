const meterAttribute = Number(prompt('Seleciona a metragem: '))
const chooseScale = Number(prompt(
'Para qual unidade de medida queremos converter ? \n' +
'\n(1) Milimetros (mm)' +
'\n(2) Centimetros (cm)' +
'\n(3) Decimetro (dm)' +
'\n(4) Decametro (dam)' +
'\n(5) Hectometro (hm)' +
'\n(6) Quilometro (km)'))

let meterScale

switch (chooseScale) {
  case 1 :
    meterScale = meterAttribute * 1000
    alert(meterScale + ' (mm)')
    break
  case 2 :
    meterScale = meterAttribute * 100
    alert(meterScale + ' (cm)')
    break
  case 3 :
    meterScale = meterAttribute * 10
    alert(meterScale + ' (dm)')
    break
  case 4 :
    meterScale = meterAttribute / 10
    alert(meterScale + ' (dam)')
    break
  case 5 :
    meterScale = meterAttribute / 100
    alert(meterScale + ' (hm)')
    break
  case 6 :   
  meterScale = meterAttribute / 1000
  alert(meterScale + ' (km)')
    break
  default : alert('Opção invalida !')
}