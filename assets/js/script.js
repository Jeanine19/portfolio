const nome = document.querySelector("#nome");
const email = document.querySelector("#email");

let nomeOk = false;
let emailOk = false;
let mensagemOk = false;
let cepOk = false;

function validarNome() {
    let txtNome = document.querySelector("#txtNome");
  
    if (nome.value.length < 3) {
      txtNome.innerHTML = "Nome muito curto";
      txtNome.style.color = "red";
      nomeOk = false;
    } else {
      txtNome.innerHTML = "✔";
      txtNome.style.color = "green";
      nomeOk = true;
    }
  }

  function validarEmail() {
    let txtEmail = document.querySelector("#txtEmail");
  
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
      txtEmail.innerHTML = "E-mail inválido";
      txtEmail.style.color = "red";
      emailOk = false;
    } else {
      txtEmail.innerHTML = "✔";
      txtEmail.style.color = "green";
      emailOk = true;
    }
  }

function validarEmailregEx() {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let txtEmail = document.querySelector("#txtEmail");
  
    if (email.value.match(regex)) {
      txtEmail.innerHTML = "✔";
      txtEmail.style.color = "green";
      emailOk = true;
    } else {
      txtEmail.innerHTML = "E-mail inválido";
      txtEmail.style.color = "red";
      emailOk = false;
    }
  }
  function enviarForm() {
    if (nomeOk === true && emailOk === true && mensagemOk === true) {
      alert(nome.value + ", obrigado pelo contato, aguarde nosso retorno.");
    } else {
      alert("Por favor, preencha todos os campos corretamente.");
    }
  }
  function consultarCep() {

    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => {
      if (jsonBody.erro === true || jsonBody.logradouro === undefined) {
        alert("CEP nao encontrado!");
      } else {
        document.getElementById("dados").innerHTML =
          jsonBody.logradouro +
          "\n" +
          jsonBody.bairro +
          "\n" +
          jsonBody.localidade +
          "\n" +
          jsonBody.uf;
      }
    })
    .catch((error) => {
      alert("CEP não encontrado!");
    });
   
}