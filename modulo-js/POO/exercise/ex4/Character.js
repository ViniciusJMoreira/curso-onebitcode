class Character {
  constructor(nickname, attack, defense) {
    this.nickname = nickname
    this.healt = 100
    this.attack = attack
    this.defense = defense
  }

  fight(targetCharacter) {
    const hit = this.attack - targetCharacter.defense
    console.log(`O ${targetCharacter.nickname} recebeu um hit de ${hit}, do personagem ${this.nickname
    }`)
    targetCharacter.healt -= hit
  }
}
module.exports = Character