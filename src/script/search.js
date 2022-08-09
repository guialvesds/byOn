let search = document.querySelector('#search');

search.addEventListener("input", function(){
    console.log(this.value);
    let transacoes = document.querySelectorAll('.itemConta');

    if(this.value.length > 0) {

        for(let i = 0 ; i < transacoes.length ;  i++){
                let transacao = transacoes[i];
                let tdNome = transacao.querySelector('.nome');
                let tNome = tdNome.textContent;
                let expressao = new RegExp(this.value, "i");
                if(!expressao.test(tNome)){
                       transacao.classList.add('invisible'); 
                }
                else {
                    transacao.classList.remove('invisible');
                }
        };
    } else {
        for(let i = 0 ; i < transacoes.length ;  i++){
            let transacao = transacoes[i];
            transacao.classList.remove('invisible');
        }
    }
});