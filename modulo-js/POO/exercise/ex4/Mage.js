const Character = require("./Character");

class Mage extends Character {
  constructor(nickname, attack, defense, mage) {
    super(nickname, attack, defense)
    this.mage = mage
  }
  fight(targetCharacter) {
    let hit = 0
    const attack = this.attack + this.mage
    if(attack > targetCharacter.defense) {
      hit = ((this.attack + this.mage) - targetCharacter.defense)
      targetCharacter.healt -= hit
    }
    console.log(`O ${targetCharacter.nickname} recebeu um hit de ${hit}, do personagem ${this.nickname
    }`)
  }
  care(targetCharacter) {
    targetCharacter.healt += (this.mage * 2)
    if(targetCharacter.healt >= 100) {
      targetCharacter.healt = 100
    }
  }
}

module.exports = Mage