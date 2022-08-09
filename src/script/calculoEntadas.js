//
//
let entradas = document.querySelector("#saldEntrada");
let saidas = document.querySelector("#saldSainda");
let saldo = document.querySelector("#saldSaldo");

let total = 0;
let vEntrada;
let vSaida;

async function calculoEntrada() {
  const res = await fetch("../api/dataTransacoes.json");
  const data = res.json();

  const transacoes = await data;
  console.log("Dados da APi local: ", transacoes);

  for (let i = 0; i < transacoes.length; i++) {
    let transacoesData = transacoes[i];
    vEntrada = transacoesData;
    if (vEntrada.tipo == "Entrada") {
      vEntrada = transacoesData.preco + total;

      entradas.innerHTML = vEntrada;
    }
  }
}

async function calculoSaida() {
  const res = await fetch("../api/dataTransacoes.json");
  const data = res.json();

  const transacoes = await data;
  console.log("Dados da APi local: ", transacoes);

  let transacoesData = transacoes;

  for (let i = 0 ; i < transacoes.length ; i++ ){
      let  transacoesData = transacoes[i];

      if(transacoesData.tipo == 'Saída'){

          vSaida = transacoesData.preco + total;
          saidas.innerHTML = vSaida;
      }
  }
}

function saldoA() {
  saldo.innerHTML = vEntrada - vSaida;
}

calculoEntrada();
calculoSaida();
saldoA();
