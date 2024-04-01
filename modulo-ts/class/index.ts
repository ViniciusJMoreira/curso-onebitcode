class Spaceship {
  #_name: string
  protected captain: string
  protected speed: number
  constructor(name: string, captain: string) {
    this.#_name = name
    this.captain = captain
    this.speed = 0
  }

  public accelerate(rate: number, time: number) {
    this.speed = rate * time
  }

  get name() {
    return this.#_name
  }
}

class Fighter extends Spaceship {
  weapons: number
  constructor(name: string, captain: string, weapons:number) {
    super(name, captain)
    this.weapons = weapons
  }

  shoot() {
    for (let i = 0; i < this.weapons; i++) {
      console.log('Pew!')
    }
  }

  erase() {
    this.captain = ''
  }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10)

ship.accelerate(50, 10)
console.log(ship);