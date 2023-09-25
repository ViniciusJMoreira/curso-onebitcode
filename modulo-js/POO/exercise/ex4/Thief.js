const Character = require("./Character");

class Thief extends Character {
  fight(targetCharacter) {
    let hit = 0
    if(this.attack > targetCharacter.defense) {
      hit = (this.attack - targetCharacter.defense) * 2
      targetCharacter.healt -= hit
    }
    console.log(`O ${targetCharacter.nickname} recebeu um hit de ${hit}, do personagem ${this.nickname
    }`)
  }
}

module.exports = Thief