function addPlayer() {
  // O value do nome do player
  const namePlayer = document.getElementById('namePlayer').value
  
  // O value da posição do player
  const positionPlayer = document.getElementById('positionPlayer').value
  
  // O value do numero da camisa do player
  const numberPlayer = document.getElementById('numberPlayer').value
  
  // A tag li que será adicionada dentro a lista ordenada ul
  const playerLi = document.createElement('li')
  playerLi.id = 'player-' + numberPlayer
  playerLi.innerText = 'Jogador: ' + namePlayer + ' , ' + positionPlayer + ' (Camisa: ' + numberPlayer + ' )'
  
  const confirme = confirm(
    'Tem certeza que deseja salvar essa alterações ?' +
    '\nNome do jogador : ' + namePlayer +
    '\nPosição do jogador : ' + positionPlayer +
    '\nNumero da camisa do jogardor : ' + numberPlayer
  )

  if (confirme) {
    if (namePlayer === '' || positionPlayer === '' || numberPlayer === '') {
      alert('Preencha corretamente seus dados !')
    }else {
      const playerList = document.getElementById('playerList')
      playerList.appendChild(playerLi)
      document.getElementById('namePlayer').value = ''
      document.getElementById('positionPlayer').value = ''
      document.getElementById('numberPlayer').value = ''
    }
  }
}

function removePlayer() {
  const valueNumber = document.getElementById('valueNumber').value
  const removePlayer = document.getElementById('player-' + valueNumber)

  const confirme = confirm('Deseja excluir o jogador ' + removePlayer.innerText + ' ?')

  if (confirme) {
    document.getElementById('playerList').removeChild(removePlayer)
    document.getElementById('valueNumber').value = ''
  }
}