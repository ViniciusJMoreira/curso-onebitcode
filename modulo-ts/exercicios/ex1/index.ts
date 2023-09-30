const spaceships = []

function addSpaceship(name: string, pilot: String, crewLimit: number) {
  const spaceship = {
    name,
    pilot,
    crewLimit,
    crew : [],
    inMission : false
  }
  spaceships.push(spaceship)
  alert('A nave ' + spaceship.name + ' foi registrada.')
}

function findSpaceship(name:string) {
  let spaceship : {
    name: string,
    pilot: string,
    crewLimit: number,
    crew: string[]
    inMission: boolean
  }

  spaceship = spaceships.find(ship => ship.name === name)

  return spaceship
}

function addCrewMember(member:string, spaceship: { name: string, crewLimit: number, crew: string[] }){
  if(spaceship.crew.length >= spaceship.crewLimit) {
    alert('O ' + member + ' nao pode ser adicionado. Limite atingido.')
  } else {
    spaceship.crew.push(member)
    alert(member + ' foi adicionado a tripulaçao da ' + spaceship.name)
  }
}

function sendInMission(spaceship: { name: string, crewLimit: number, crew: string[] , inMission: boolean }) {
  if(spaceship.inMission) {
    alert('A espaço nave ' + spaceship.name + ' jà està em missao.')
  } else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
    alert(spaceship.name + ' nao pode ser enviada, tripulaçao insuficiente.')
  } else {
    spaceship.inMission = true
    alert(spaceship.name + ' enviada para missao.')
  }
}

function showMenu() {
  let res : number
  do {
    res = Number(prompt(
      'Bem-Vindo \n' +
      'Para adicionar uma nave [1]\n' +
      'Para adicionar uma tripulancia [2]\n' +
      'Para enviar uma nave em missao [3]\n' +
      'Sair [4]\n'))

    switch(res) {
      case 1 :
        const name = String(prompt('Nome da nave:'))
        const pilot = String(prompt('Nome do piloto:'))
        const crewlimit = Number(prompt('Limite massimo de tripulantes:'))
        addSpaceship(name,pilot,crewlimit)
        break
      case 2 :
        const member = String(prompt('Nome do membro: '))
        const findName = String(prompt('Nome da nave: '))
        const spaceship = findSpaceship(findName)
        addCrewMember(member, spaceship)
        break
      case 3 :
        const nameSpaceship = String(prompt('Nome da nave: '))
        const spaceshipInMission = findSpaceship(nameSpaceship)
        sendInMission(spaceshipInMission)
        break
    }
  }
  while(res != 4)
}

showMenu()