function vcJaEstaAqui(){
    alert(`Você esta nessa pagina`);
      homepage.innerHTML = (`Inicio`);
   }
   
   function vcJaEstaAquiDois(){
   alert(`Você esta nessa pagina`);
     homepage.innerHTML = (`Nossos Projetos`);
   }
   function vcJaEstaAquiTres(){
     alert(`Você esta nessa pagina`);
       homepage.innerHTML = (`Como Nos Ajudar`);
     }
     function vcJaEstaAquiQuatro(){
       alert(`Você esta nessa pagina`);
         homepage.innerHTML = (`Participantes`);
       }
   
     //PAG Como nos ajudar
     const idade = document.getElementById('idade');
       const nome = document.getElementById('nome');
       const idadeValue = idade.value;
       const nomeValue = nome.value;
   
   
   
     function restoForm(){
         
       
   if (idade.value !== '' && nome.value !== '' ) {
   
       if(idade.value >= 18){
         boasVindas.innerHTML = `ola ${nome.value}, obrigado por estar disposto a nos ajudar, para prosseguir acesse o link abaixo`;
         esseLink.innerHTML = `Clique Aqui`
   
         
       }else if(idade.value > 125){
         boasVindas.innerHTML = `Infelizmente você não pode prosseguir tendo mais de 80 anos!`;
       }else{
         boasVindas.innerHTML = `ola ${nome.value}, infelizmente você não pode nos ajudar, sendo menor de idade`;
       }
     }else{
       boasVindas.innerHTML = `Preencha os campos`;
     }
     }
     //  FORM DOIS
     const email = document.getElementById = (`mail`);
     const telefone = document.getElementById = (`telef`);
     const cmAjudar = document.getElementById = ('cmAjudar');
     const cidade = document.getElementById = ('cdd');

     function send(){
      
     }

     // BANCO DE FRUTAS
     const frutas = [
      "Banana",
      "Laranja",
      "Limão",
      "Maçã",
      "Mamão",
      "Abacaxi",
      "Melancia",
      "Melão",
      "Tangerina/Mexerica",
      "Coco Verde",
      "Pera",
      "Abacate",
      "Goiaba",
      "Ameixa nacional",
      "Caqui",
      "Uva comum"
  ];


  const precoFruta = document.getElementById("priceFruit");

  if(precoFruta.value <= 10){
    document.getElementById('result-fruits').innerHTML = (`<p>adsawdsadw</p>`)
  }
  
 
   
   
     