"use strict";
function sendSpaceship(name, pilot) {
    const spaceship = {
        name: name,
        pilot: pilot,
        speed: 30,
        inMission: true
    };
    alert(`A spaceship ${spaceship.name}, no comando do piloto ${spaceship.pilot}, foi enviada em missao com sucesso!`);
    return spaceship;
}
const spaceshipName = String(prompt('Qual é o nome da spaceship ?'));
const spaceshipPilot = String(prompt('Qual é o nome do piloto ?'));
const spaceship = sendSpaceship(spaceshipName, spaceshipPilot);
function accelerate(speed, spaceship) {
    if (spaceship.speed < speed) {
        alert(`A velocidade da spaceship ${spaceship.name} esta sendo aumentada ${speed}`);
    }
    else if (spaceship.speed > speed) {
        alert(`A velocidade da spaceship ${spaceship.name} esta diminuindo ${speed}`);
    }
    else {
        alert(`A velocidade continua na mesma ${speed}`);
    }
    spaceship.speed = speed;
}
const speed = Number(prompt('Inserir a velocidade da spaceship: '));
accelerate(speed, spaceship);
