const setPilot = (pilot: string, spaceship: { name: string; pilot: string; speed: number; inMission: boolean; }) => {
  spaceship.pilot = pilot;
}

const accelerate = (speed: number, spaceship: { name: string; pilot: string; speed: number; inMission: boolean; }) => {
  spaceship.speed = speed
}

const sendToMission = (inMission: boolean, spaceship: { name: string; pilot: string; speed: number; inMission: boolean; }) => {
  spaceship.inMission = inMission;
}

const spaceship = {
  name: "",
  pilot: "",
  speed: 0,
  inMission: false
}

const pilot = 'Vinicius';
const speed = 50;
const inMission = true;

setPilot(pilot, spaceship);
accelerate(speed, spaceship);
sendToMission(inMission, spaceship);

console.log(spaceship);