  //calc IMC
  const resultado = document.querySelector('#resultado')
  const altura = document.querySelector('#altura')
  const peso = document.querySelector('#peso')
  
  const calcIMC = () => {
  
    if (altura.value !== '' && peso.value !== '' && altura.value <= 2.5 && altura.value >= 1.2 && peso.value <= 300 && peso.value >= 30) {
      const imc = (peso.value / (altura.value * altura.value)).toFixed(2)
      let classification = ''
  
      if (imc < 18.5) {
        classification = 'Abaixo do peso'
      } else if (imc < 25) {
        classification = 'Peso normal'
      } else if (imc < 30) {
        classification = 'Acima do peso'
      } else if (imc < 35) {
        classification = 'Obesidade Grau I'
      } else if (imc < 41) {
        classification = 'Obesidade Grau II'
      } else {
        classification = 'Obesidade Grau III'
      }
      
      resultado.innerHTML = `IMC: ${imc} (${classification})`
    } else {
      resultado.innerHTML = 'Informações não validadas'
    }
  }
     