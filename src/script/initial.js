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

  if (inputDescricao.value == "" || inputValor.value == "") {
    alert("É necessário preecher todos os campos!");
  } else {
    let form = document.querySelector("#inputForm");

    let contas = obterContas(form);

    addTransacoesNaTabela(contas);

    form.reset();
  }
});

function addTransacoesNaTabela(contas) {
  let contaTr = montaTr(contas);
  console.log("Dados da Tr", contaTr);
  let tabela = document.querySelector("#tabela-contas");
  tabela.appendChild(contaTr);
}

function obterContas(form) {
  let conta = {
    descricao: form.inpuText.value,
    valor: form.inputNum.value,
    tEntrada: form.ent.value,
    tSaida: form.said.value,
  };
  return conta;
}

function montaTr(contas) {
  let contaTr = document.createElement("tr");
  contaTr.classList.add("itemConta");

  let nomeN = document.querySelector("#inpuText");
  let precoN = document.querySelector("#inputNum");
  let data = new Date();
  const dataN = data.toLocaleString();

  contaTr.appendChild(montaTd(contas.nome ? contas.nome : nomeN.value, "nome"));
  contaTr.appendChild(montaTd(contas.data ? contas.data : dataN, "data"));
  contaTr.appendChild(
    montaTd(`R$ ${contas.preco ? contas.preco : precoN.value}`, "preco")
  );
  tipoEntrada();
  contaTr.appendChild(montaTd("Excluir", "btnExcluir"));

  function tipoEntrada() {
    let tipoE = "Entrada";
    let tipoS = "Saída";

    if (chekEnt.checked == true || contas.tipo == "Entrada") {
      contaTr.appendChild(montaTd(tipoE, "pEntrada"));
    }
    if (chekSaid.checked == true || contas.tipo == "Saída") {
      contaTr.appendChild(montaTd(tipoS, "pSaida"));
    }
  }

  return contaTr;
}

function montaTd(dado, classe) {
  let td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);

  return td;
}
