"use strict";
let planetas = [{
        nome: 'terra',
        coordenadas: [1, 1, 1, 1],
        situacao: 'Habitado',
        satelites: []
    }];
function findPlanet(nome) {
    const planeta = planetas.find(planeta => planeta.nome === nome);
    return planeta ?? false;
}
function situationPLanet() {
    let situacao;
    let condicao = false;
    while (!condicao) {
        const situacaoPlaneta = String(prompt(`Situcao do Planeta [ Inabitavel , Habitavel , Habitado , Inexplorado ]`));
        switch (situacaoPlaneta) {
            case 'Habitavel':
                condicao = true;
                situacao = "Habitavel";
                break;
            case 'Inabitavel':
                condicao = true;
                situacao = "Inabitavel";
                break;
            case 'Habitado':
                condicao = true;
                situacao = "Habitado";
                break;
            case 'Inexplorado':
                condicao = true;
                situacao = "Inexplorado";
                break;
            default:
                alert('Situacao do planeta inesistente.');
                break;
        }
    }
    return situacao;
}
function newPlanet(nome, coordenadas, situacao) {
    planetas.push({
        nome: nome,
        coordenadas: coordenadas,
        situacao: situacao,
        satelites: []
    });
    alert(`O planeata ${nome} foi salvo com sucesso.`);
}
function updateSituation(situacao, planeta) {
    planeta.situacao = situacao;
    alert(`A situacao do planeta ${planeta.nome} foi alterado com sucesso.`);
}
function addSatelite(nomeSatelite, planeta) {
    planeta.satelites.push(nomeSatelite);
    alert(`O satelite ${nomeSatelite} foi adicionado no planeta ${planeta.nome} com sucesso-`);
}
function removeSatelite(nomeSatelite, planeta) {
    planeta.satelites = planeta.satelites.filter(satelite => satelite != nomeSatelite);
    const index = planeta.satelites.findIndex(satelite => satelite === nomeSatelite);
    planeta.satelites.splice(index);
    alert(`O satelite ${nomeSatelite} foi removido do planeta ${planeta.nome} com sucesso-`);
}
function showPlanets() {
    let list = `Listagem Planetas\n`;
    planetas.forEach((planeta) => {
        list += `
    Nome: ${planeta.nome}
    Coordenadas: ${planeta.coordenadas}
    Situacao: ${planeta.situacao}
    Satelites: ${planeta.satelites}
    `;
    });
    alert(list);
}
function firstMenuOption() {
    const nome = String(prompt(`Nome do Planeta`));
    const coordenadaX = Number(prompt(`Coordenada X`));
    const coordenadaY = Number(prompt(`Coordenada Y`));
    const coordenadaZ = Number(prompt(`Coordenada Z`));
    const coordenadaW = Number(prompt(`Coordenada W`));
    const situacao = situationPLanet();
    const confirmacao = confirm(`
  Deseja confirmar os dados inseridos ?
  ${nome}
  ${coordenadaX}
  ${coordenadaY}
  ${coordenadaZ}
  ${coordenadaW}
  ${situacao}
  `);
    if (confirmacao) {
        newPlanet(nome, [coordenadaX, coordenadaY, coordenadaZ, coordenadaW], situacao);
    }
}
function secondMenuOption() {
    const situacao = situationPLanet();
    const nomePlaneta = String(prompt(`Insira nome do planeta`));
    const planeta = findPlanet(nomePlaneta);
    if (planeta) {
        updateSituation(situacao, planeta);
    }
    else {
        alert('Nao foi encontrado o planeta');
    }
    ;
}
function thirdMenuOption() {
    const nomeSatelite = String(prompt(`Insira nome do satelite`));
    const nomePlaneta = String(prompt(`Insira nome do planeta`));
    const planeta = findPlanet(nomePlaneta);
    if (planeta) {
        const confirmacao = confirm(`
    Verifique os Dados do planeta ${planeta.nome}
    Nome: ${planeta.nome}
    Coordenadas: ${planeta.coordenadas}
    Situacao: ${planeta.situacao}
    Satelites: ${planeta.satelites}\n
    Novo satelite: ${nomeSatelite}
    `);
        if (confirmacao) {
            addSatelite(nomeSatelite, planeta);
        }
        else {
            alert('Satelite foi rejeitado');
        }
    }
    else {
        alert(`Nao foi encontrado o planeta ${nomePlaneta}`);
    }
}
function fourthMenuOption() {
    const nomeSatelite = String(prompt(`Insira nome do satelite`));
    const nomePlaneta = String(prompt(`Insira nome do planeta`));
    const planeta = findPlanet(nomePlaneta);
    if (planeta) {
        const confirmacao = confirm(`
    Verifique os Dados do planeta ${planeta.nome}
    Nome: ${planeta.nome}
    Coordenadas: ${planeta.coordenadas}
    Situacao: ${planeta.situacao}
    Satelites: ${planeta.satelites}\n
    Removendo satelite: ${nomeSatelite}
    `);
        if (confirmacao) {
            removeSatelite(nomeSatelite, planeta);
        }
        else {
            alert('Satelite foi rejeitado');
        }
    }
    else {
        alert(`Nao foi encontrado o planeta ${nomePlaneta}`);
    }
}
function showMenu() {
    let menu = 0;
    while (menu != 6) {
        menu = Number(prompt(`
      [1] Novo Planeta
      [2] Alterar Situacao
      [3] Novo Satelite
      [4] Remover Satelite
      [5] Listar Planetas
      [6] Sair
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
                showPlanets();
                break;
            case 6:
                alert('Encerrando o programa.');
                break;
            default:
                alert('Opicao Inesistente');
                break;
        }
    }
}
showMenu();
