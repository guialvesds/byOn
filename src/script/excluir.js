let tabelaContas = document.querySelectorAll('#tabela-contas');

console.log(tabelaContas);

tabelaContas.forEach(function(event){

    // let btnExcluirN = document.querySelector(".btnExcluir");

    event.addEventListener('dblclick', function(event){
        console.log('Clicado');
        // let alvoEvento = event.target;
        // let paiDoAlvo = alvoEvento.parentNode; //TR = paciente  = revomer
        event.target.parentNode.classList.add("fadeOut");
        
        setTimeout(function(){ // função para esperar alguns tempo para executar algo            
            event.target.parentNode.remove();
        }, 300);

    });
});


