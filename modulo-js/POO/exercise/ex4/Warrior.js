const Character = require("./Character");

class Warrior extends Character {
  constructor(nickname, attack, defense, shield) {
    super(nickname, attack , defense)
    this.shield = shield
    this.stance = 'attack'
  }
  switchStance() {
    if(this.stance === 'attack') {
      this.stance = 'defense'
      this.defense += this.shield
    } else {
      this.stance = 'attack'
      this.defense -= this.shield
    }
  }
  fight(targetCharacter) {
    if(this.stance === 'attack') {
      super.fight(targetCharacter)
    } else {
      console.log(`You're in defense mode`)
    }
  }
}

module.exports = Warrior