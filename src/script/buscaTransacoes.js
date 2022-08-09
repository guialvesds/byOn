//
//
async function buscatransacoesD(){
        
  const res = await fetch('../api/dataTransacoes.json');
  const data = res.json();

  const transacoes = await data;  
  console.log('Dados da APi local: ' , transacoes);

  for (let i = 0 ; i < transacoes.length ; i++ ){
      let  transacoesData = transacoes[i];
      console.log(transacoesData);
      addTransacoesNaTabela(transacoesData);
  }

}

buscatransacoesD();
