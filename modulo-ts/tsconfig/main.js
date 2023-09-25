"use strict";
const setPilot = (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false
};
const pilot = 'Han Solo';
spaceship.name = 'millennium falcon';
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
console.log('amareza')