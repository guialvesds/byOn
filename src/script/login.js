//
//
let inputUser = document.querySelector("#user");
let inputPassword = document.querySelector("#password");
let btnLogin = document.querySelector("#btnLogin");

let users = [
  { user: "guilherme", password: "123456789" },
  { user: "admin", password: "admin" },
];

function entrar() {
  users.forEach((item) => {
    let error = document.querySelector("#error");
    error.style.marginTop = "7px";
    error.style.color = "red";

    if (
      inputUser.value === item.user &&
      inputPassword.value === item.password
    ) {
      location.replace("src/pages/initial.html");
      error.innerHTML = "";
    }
    if (
      inputUser.value !== item.user &&
      inputPassword.value !== item.password
    ) {
      error.innerHTML = "Usuário ou senha inválidos";
    }
    if (inputUser.value == "" && inputPassword.value == "") {
      error.innerHTML = "Usuário e senha são obrigatorios";
    }
  });
}
