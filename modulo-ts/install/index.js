"use strict";
const setPilot = (pilot, spaceship) => {
    spaceship.pilot = pilot;
};
const accelerate = (speed, spaceship) => {
    spaceship.speed = speed;
};
const sendToMission = (inMission, spaceship) => {
    spaceship.inMission = inMission;
};
const spaceship = {
    name: "",
    pilot: "",
    speed: 0,
    inMission: false
};
const pilot = 'Vinicius';
const speed = 50;
const inMission = true;
setPilot(pilot, spaceship);
accelerate(speed, spaceship);
sendToMission(inMission, spaceship);
console.log(spaceship);
