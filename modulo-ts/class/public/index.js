"use strict";
class Spaceship {
    #_name;
    captain;
    speed;
    constructor(name, captain) {
        this.#_name = name;
        this.captain = captain;
        this.speed = 0;
    }
    accelerate(rate, time) {
        this.speed = rate * time;
    }
    get name() {
        return this.#_name;
    }
}
class Fighter extends Spaceship {
    weapons;
    constructor(name, captain, weapons) {
        super(name, captain);
        this.weapons = weapons;
    }
    shoot() {
        for (let i = 0; i < this.weapons; i++) {
            console.log('Pew!');
        }
    }
    erase() {
        this.captain = '';
    }
}
let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10);
ship.accelerate(50, 10);
console.log(ship);
