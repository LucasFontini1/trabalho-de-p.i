function vcJaEstaAqui(){
 alert(`Você esta nessa pagina`)
   homepage.innerHTML = (`Inicio`)
}

function vcJaEstaAquiDois(){
alert(`Você esta nessa pagina`)
  homepage.innerHTML = (`Nossos Projetos`)
}
function vcJaEstaAquiTres(){
  alert(`Você esta nessa pagina`)
    homepage.innerHTML = (`Como Nos Ajudar`)
  }

  //PAG Como nos ajudar
  const idade = document.getElementById('idade')
    const nome = document.getElementById('nome')
    const idadeValue = idade.value
    const nomeValue = nome.value



  function restoForm(){
      
    

    if(idade.value >= 18){
      boasVindas.innerHTML = `ola ${nomeValue}, obrigado por estar disposto a nos ajudar`
   

      document.getElementById("hide").style.display = flex
    }else{
      boasVindas.innerHTML = `ola infelismente você não pode nos ajudar, sendo menor de idade`
    }
  }
  
