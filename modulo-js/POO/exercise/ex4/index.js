const Mage = require('./Mage')
const Thief = require('./Thief')
const Warrior = require('./Warrior')

const godThief = new Thief('gmThief', 12, 8),
godMage = new Mage('gmMage', 8, 10, 4),
godWarrior = new Warrior('gmWarrior', 14, 7, 3)

console.table({godThief, godMage, godWarrior})

godThief.fight(godMage)
godMage.fight(godThief)

console.table({godThief, godMage, godWarrior})

godWarrior.fight(godMage)
godThief.fight(godWarrior)

console.table({godThief, godMage, godWarrior})

godMage.care(godMage)
godWarrior.switchStance()
godMage.fight(godWarrior)

console.table({godThief, godMage, godWarrior})