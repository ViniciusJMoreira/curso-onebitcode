class Reservation {
  constructor(guess, rooms, days) {
    this.guess = guess
    this.rooms = rooms
    this.days = days
    this.total = days * Reservation.baseFee
  }

  static baseFee = 150

  static showBaseFee() {
    console.log(`Base fee is $${Reservation.baseFee}`)
  }
  static get premiumFee() {
    return Reservation.baseFee * 1.5
  }
}

Reservation.showBaseFee()
console.log(Reservation.premiumFee)

const r1 = new Reservation('2', 1, 5),
r2 = new Reservation('3', 2, 3)
console.log({r1, r2})

Reservation.baseFee = 200
const r3 = new Reservation('2', 1, 5),
r4 = new Reservation('3', 2, 3)

console.log({r3, r4})
console.log(Reservation.premiumFee)