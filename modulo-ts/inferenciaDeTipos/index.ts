const spaceship = {
  name: 'x-wing',
  speed: 0
};

function acelerate(spaceship: { name: string; speed: number; }, speed: number) {
  spaceship.speed = speed
};

acelerate(spaceship, 10);