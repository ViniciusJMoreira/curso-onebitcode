interface Ship {
  name: string
  pilot: string
}

interface Fighter extends Ship {
  weapons: number
  shields: number
}

// Se deixássemos sem o tipo Ship desativaríamos
// totalmente o typescript para esse argumento
function cloneShip<ShipType extends Ship>(ship: ShipType, newName: string, newPilot: string) : ShipType {
  const newShip = ship
  newShip.name = newName
  newShip.pilot = newPilot
  return newShip
}

const falcon: Ship = {
  name: 'Millenium Falcon',
  pilot: 'Han'
}

const xWing: Fighter = {
  name: 'Red Five',
  pilot: 'Luke',
  weapons: 4,
  shields: 1
}

// A cópia funciona, porém a tipagem está incorreta
// pois a ambas é atribuido o tipo Ship
const copy1 = cloneShip(falcon, 'Milano', 'Peter');
const copy2 = cloneShip(xWing, 'Black One', 'Poe');