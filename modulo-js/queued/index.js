alert('Bem-Vindo ao Consultório médico')

let choice = 0
let patient = []

  do {
    let list = ''
    for (let i = 0; i < patient.length ; i++) {
      list += (i + 1) + ') ' + patient[i] + '\n'
    }
    choice = Number(prompt(
      list + 
      '\n[1] Adicionar Pacientes' +
      '\n[2] Consultar Paciente' +
      '\n[3] Sair'
    ))
    switch (choice) {
      case 1 :
        const newPatient = prompt('Nome do paciente: ')
        patient.push(newPatient)
        break
      case 2 :
        const patientCared = patient.shift()
        if (patientCared) {
          alert(patientCared + ' está sendo atendido(a)')
        } else {
          alert('Não há mais pacientes')
        }
        
        break
      case 3 : 
      alert('Finalizando...')
      default :
      alert('Option invalid')
    }
    }while (choice !== 3)