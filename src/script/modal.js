const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".closeButton");
const infoH1 = document.querySelector("#infoH1");
const img = document.querySelector("#img");

function ExibirModal(texto) {
    modal.classList.toggle("showModal");
    infoH1.innerText = texto;
    img.src = `/src/img/Personal finance-amico.png`;
}

closeButton.addEventListener("click", ExibirModal);
