//
//

let inputDescricao = document.querySelector("#inpuText");
let inputValor = document.querySelector("#inputNum");
let btnAdd = document.querySelector("#btnAdd");
let btnExcluir = document.querySelector("#btnExcluir");

let chekEnt = document.querySelector("#ent");
let chekSaid = document.querySelector("#said");


btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  if(inputDescricao.value == '' || inputValor== '' || chekEnt.checked == false){
    alert('É necessário preecher todos os campos!')
  } else{

  let form = document.querySelector("#inputForm");

  let contas = obterContas(form);

  let contaTr = montaTr(contas);

  console.log("Dados da Tr", contaTr);

  let tabela = document.querySelector("#tabela-contas");

  tabela.appendChild(contaTr);

  form.reset();
}
});

function obterContas(form) {
  let conta = {
    descricao: form.inpuText.value,
    valor: form.inputNum.value,
    tEntrada: form.ent.value,
    tSaida: form.said.value,
  };
  return conta;
}

function montaTr(conta) {
  let contaTr = document.createElement("tr");
  contaTr.classList.add("itemConta");

  let data = new Date();

  const dataN = data.toLocaleString();

//   let btn = document.createComment("BUTTON");

  contaTr.appendChild(montaTd(conta.descricao, "nome"));
  contaTr.appendChild(montaTd(dataN, "data"));
  contaTr.appendChild(montaTd(`R$ ${conta.valor}`, "preco"));
  tipoEntrada();
//   contaTr.appendChild(montaTd(btn, "btnExcluir"));

  return contaTr;

  function tipoEntrada() {
    let tipoE = "Entrada";
    let tipoS = "Saída";

    if (chekEnt.checked == true) {
      contaTr.appendChild(montaTd(tipoE, "tipo"));
    } else {
      contaTr.appendChild(montaTd(tipoS, "tipo"));
    }
  }
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
