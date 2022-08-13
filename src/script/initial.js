//
//
let inputDescricao = document.querySelector("#inpuText");
let inputValor = document.querySelector("#inputNum");
let btnAdd = document.querySelector("#btnAdd");
let tabelaContasN = document.querySelector("#tabela-contas");

// Configura o armazenamento das transações no Local Storage
const lSTransacoes = JSON.parse(localStorage.getItem("transacoes"));
// A const abaixo verifica se a chave transactions do Local Storage
// é diferente de nulo, para atribuir a variável acima ou, do contrário,
//um array vazio
let transacoesStorage =
  localStorage.getItem("transacoes") !== null ? lSTransacoes : [];

const removeTransacao = (ID) => {
  // Remove uma transação pelo ID e atualiza no Local Storage e na página
  transacoesStorage = transacoesStorage.filter(
    (transacoes) => transacoes.id !== ID
  );
  updateLStorage();
  init();
};

const addTransacoesNaTabela = (transacoes) => {
  const tipoClass = "Entrada";
  const cssClass = transacoes.tipo === tipoClass ? "pEntrada" : "pSaida";

  const contaTr = document.createElement("tr");
  contaTr.classList.add("itemConta");

  contaTr.innerHTML = `
<td class="nome">${transacoes.nome}</td>
<td class="data">${transacoes.data}</td>
<td class="preco">${transacoes.valor}</td>
<td class="${cssClass}">${transacoes.tipo}</td>
<td class='tdButton'>
<button class="btnExcluir" onClick="removeTransacao(${transacoes.id})">
    Excluir
  </button>
  </td>

`;
  let tabela = document.querySelector("#tabela-contas");
  tabela.appendChild(contaTr);
  console.log(contaTr);
  return contaTr;
};
const updateSaldosValues = () => {
  const saldEntrada = document.querySelector("#saldEntrada");
  const saldSaida = document.querySelector("#saldSaida");
  const saldSaldo = document.querySelector("#saldSaldo");
  // Atualiza o somatório de entradas, saídas e o saldo
  const valoresTransacoes = transacoesStorage.map(
    (transacoes) => transacoes.valor
  );

  const entradas = valoresTransacoes
    .filter((value) => value > 0)
    .reduce((acumulado, value) => acumulado + value, 0)
    .toFixed(2);

  const saidas = valoresTransacoes
    .filter((value) => value < 0)
    .reduce((acumulado, value) => acumulado + value, 0)
    .toFixed(2);

  const total = valoresTransacoes
    .reduce((acumulado, transacoes) => acumulado + transacoes, 0)
    .toFixed(2);

  saldEntrada.textContent = `R$ ${entradas}`;
  saldSaida.textContent = `R$ ${saidas}`;
  saldSaldo.textContent = `R$ ${total}`;
};

const init = () => {
  // Executa o preenchimento na página
  tabelaContasN.innerHTML = "";
  transacoesStorage.forEach(addTransacoesNaTabela);
  updateSaldosValues();
};

init();

const updateLStorage = () => {
  localStorage.setItem("transacoes", JSON.stringify(transacoesStorage));
};

//Gerar Id aleatório
const gerarID = () => Math.round(Math.random() * 1000);

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();

  let chekEnt = document.querySelector("#ent");
  let chekSaid = document.querySelector("#said");

  const trNome = inputDescricao.value;
  const dataN = new Date().toLocaleString();

  const tipoE = "Entrada";
  const tipoS = "Saída";

  if (
    inputDescricao.value === "" ||
    inputValor.value === "" ||
    chekEnt.checked == false &&
    chekSaid.checked == false
  ) {
    ExibirModal("Ops... É necessário preencher todos os campos!");
    return;
  }

  const validaNumber = () => {
    let trValor;

    if (chekSaid.checked) {
      newValor = `${-inputValor.value}`;
      trValor = parseFloat(newValor);
    } else {
      trValor = +inputValor.value;
    }

    return trValor;
  };

  //cria o objeto no storage
  const transacoes = {
    id: gerarID(),
    nome: trNome,
    valor: validaNumber(),
    data: dataN,
    tipo: chekEnt.checked == true ? tipoE : tipoS,
  };

  console.log("Criado com sucesso!");

  transacoesStorage.push(transacoes);
  init();
  updateLStorage();

  inputDescricao.value = "";
  inputValor.value = "";
  chekEnt.checked = false;
  chekSaid.checked = false;
});
