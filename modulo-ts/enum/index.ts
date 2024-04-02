enum planets {
  mercurio,
  terra,
  venus
}

const result = planets.mercurio

console.log(result)

enum role {
  admin = 'admin',
  user = 'user',
  visitor = 'visitor'
}

const data = new Date().getDay();

enum week {
  'Domingo',
  'Segunda',
  'Terca',
  'Quarta',
  'Quinta',
  'Sexta',
  'Sabado'
};

console.log(week[data]);