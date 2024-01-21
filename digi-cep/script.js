function buscarCEP(){
    
    // entrada
    let entrada = document.getElementById('buscar_cep').value;
   
    // saída
    let cep = document.getElementById('cep');
    let logradouro = document.getElementById('logradouro');
    let bairro = document.getElementById('bairro');
    let cidade = document.getElementById('cidade');
    let estado = document.getElementById('estado');
    let ibge =  document.getElementById('ibge');

              
    // cria objeto xhr
    let xhr = new XMLHttpRequest(); 
    xhr.responseType = "json"; 
   
    // envia requisição
    xhr.open("GET", 
      "https://viacep.com.br/ws/"+ entrada +"/json/"); 
    xhr.send();  
   
    // verifia se o estado da conexão mudou
    xhr.onreadystatechange = ()=>{
   
      if(xhr.readyState == 4 && xhr.status == 200){
   
        // mostra resultado na tela
        console.log(xhr.response);
      
        // grava valores
        cep.innerText = xhr.response.cep;
        logradouro.innerText = xhr.response.logradouro;
        bairro.innerText = xhr.response.bairro;
        cidade.innerText = xhr.response.localidade;
        estado.innerText = xhr.response.uf;
        ibge.innerText = xhr.response.ibge
      }
    }

       
  }