"use strict";
const spaceships = [];
function findSpaceship(name) {
    let spaceship;
    spaceship = spaceships.find(n => n.name === name);
    if (spaceship)
        return spaceship;
    else
        alert('Nave nao encontrada');
}
function addSpaceship(name, pilot, crewLimit) {
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    };
    spaceships.push(spaceship);
    alert('A nave ' + spaceship.name + ' foi registrada.');
}
function addSpaceman(member, spaceship) {
    if (spaceship.crew.length >= spaceship.crewLimit) {
        alert(`O membro ${member} nao pode ser adicionado. Limite atingido.`);
    }
    else {
        spaceship.crew.push(member);
        alert(member + ' foi adicionado a tripulaçao da ' + spaceship.name);
    }
}
function sendToMission(spaceship) {
    if (spaceship.inMission) {
        alert(`A spaceship ${spaceship.name} ja esta em missao!`);
    }
    else if (spaceship.crew.length < Math.floor(spaceship.crewLimit / 3)) {
        alert(`A spaceship ${spaceship.name} nao possui astronautas suficiente para missao!`);
    }
    else {
        spaceship.inMission = true;
        alert(`A spaceship ${spaceship.name} foi enviada em missao com sucesso!`);
    }
}
function firstMenuOption() {
    const nome = String(prompt('Informe o nome da spaceship: '));
    const pilot = String(prompt('Informe o nome do piloto da spaceship: '));
    const crewLimit = Number(prompt('Informe o limite da tripulaçao: '));
    addSpaceship(nome, pilot, crewLimit);
}
function secondMenuOption() {
    const member = String(prompt('Insira o nome do novo membro:'));
    const spaceshipName = String(prompt(`Para qual nave ${member} deverá ser designado?`));
    const spaceship = findSpaceship(spaceshipName);
    addSpaceman(member, spaceship);
}
function thirdMenuOption() {
    const spaceshipName = String(prompt('Insira o nome da Nave:'));
    const spaceship = findSpaceship(spaceshipName);
    const confirmation = confirm(`Confirma e envio da ${spaceship.name} na missão?`);
    if (confirmation) {
        sendToMission(spaceship);
    }
}
function fourthMenuOption() {
    let list = 'Nives Registradas:\n';
    spaceships.forEach((spaceship) => {
        list +=
            `
    Nave; ${spaceship.name}
    Piloto: ${spaceship.pilot}
    Maximo de Tripulantes: ${spaceship.crewLimit}
    Tripulaçao: ${spaceship.crew.length}
    Em Missao ? ${spaceship.inMission ? 'Sim' : 'Nao'}
    `;
        spaceship.crew.forEach(member => {
            list += `    - ${member}\n`;
        });
    });
    alert(list);
}
function menuOption() {
    let menu = 0;
    while (menu != 5) {
        menu = Number(prompt(`
      MENU INTERATIVO DA SPACEX \n
      [1] ADICIONAR UMA SPACESHIP
      [2] ADICIONAR UM ASTRONAUTA NA EQUIPE
      [3] ENVIAR SPACESHIP EM MISSAO
      [4] EXIBIR TODAS SPACESHIPS
      [5] ENCERRAR PROGRAMA
    `));
        switch (menu) {
            case 1:
                firstMenuOption();
                break;
            case 2:
                secondMenuOption();
                break;
            case 3:
                thirdMenuOption();
                break;
            case 4:
                fourthMenuOption();
                break;
            case 5:
                alert('Aplicaçao esta sendo encerrada.');
                break;
            default:
                alert('Algo deu errado..\n Voltando Ao Menu Incial');
                break;
        }
    }
}
menuOption();
