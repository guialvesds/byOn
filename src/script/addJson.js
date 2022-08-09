//
//
 function addJson(){

    let nome = document.querySelector("#inpuText").value;
    let preco = document.querySelector("#inputNum").value;
  
    return fetch('../api/dataTransacoes.json', {
      method: 'POST',
      body: JSON.stringify({
        nome: nome,
        // data: new Date().toLocaleString(),
        preco: preco
        
      }),
      headers: {
        "Content-type":"application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(function(data){
      console.log(data);
    });
  };



  