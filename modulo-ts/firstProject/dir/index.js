"use strict";
function sendSpaceship(name, pilot) {
    const spaceship = {
        name,
        pilot,
        speed: 30,
        inMission: true
    };
    alert('A espaço nave ' + spaceship.name + ' no comando do piloto ' + spaceship.pilot + ' esta em orbita.');
    return spaceship;
}
function accelerate(speed, spaceship) {
    if (spaceship.speed < speed) {
        alert('A espaçonave ' + spaceship.name + ' aumentou a velocidade para ' + speed + ' km/h.');
    }
    else if (spaceship.speed > speed) {
        alert('A espaçonave ' + spaceship.name + ' diminuiu a velocidade para ' + speed + ' km/h.');
    }
    else {
        alert('Mantem na velocidade atual');
    }
    spaceship.speed = speed;
}
const spaceshipName = String(prompt('Inserir nome da espaço nave :'));
const pilot = String(prompt('Inserir nome do piloto :'));
const spaceship = sendSpaceship(spaceshipName, pilot);
const speed = Number(prompt('Insira a velocidade : '));
accelerate(speed, spaceship);
console.log(spaceship);