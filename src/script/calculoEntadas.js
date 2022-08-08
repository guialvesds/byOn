//
//
let entradas = document.querySelector("#saldEntrada");
let saidas = document.querySelector("#saldSainda");
let saldo = document.querySelector("#saldSaldo");

let itens = document.querySelectorAll(".itemConta");

let total = 0;

for(let i = 0 ; i < itens.length ; i++ ){   

    let item = itens[i];

    let preco = item.querySelector(".preco").textContent;
    let tipo = item.querySelector(".tipo").textContent;
    let valor = +preco

    let entrada = "Entrada";
    let saida = "Saida";

    let somaT = total += valor;

    function soma(){       

        let valorE = somaT;

        if(tipo == entrada){
            entradas.innerHTML = valorE.toFixed(2);
        }
    
    }
    function subtrair(){
        
        let valorS = somaT;

        if(tipo == saida){
            saidas.innerHTML = valorS.toFixed(2);
        }
    }

    soma();
    subtrair();

}



