let nomeInput = document.getElementById("nome");
let sobrenomeInput = document.getElementById("sobrenome");
let emailInput = document.getElementById("email");
let senhaInput = document.getElementById("senha");
let repeteSenha = document.getElementById("repeteSenha");

let nomeValidacao = document.getElementById("nomeValidacao");
let sobrenomeValidacao = document.getElementById("sobrenomeValidacao");
let emailValidacao = document.getElementById("emailValidacao");
let senhaValidacao = document.getElementById("senhaValidacao");
let repeteSenhaValidacao = document.getElementById("repeteSenhaValidacao");
let botaoSignup = document.getElementById("botaoSignup");

let nomeEValido = false;
let sobrenomeEValido = false;
let emailEValido = false;
let senhaEValida = false;
let repeteSenhaEValida = false;


nomeInput.addEventListener("blur", () => {
    if (nomeInput.value != "") {

        nomeValidacao.innerText = ""
        nomeInput.style.border = ``
        nomeEValido = true;
    } else {

        nomeValidacao.innerText = "Campo obrigatório"
        nomeValidacao.style.color = "#E01E1E"
        nomeValidacao.style.fontSize = "8"
        nomeValidacao.style.fontWeight = "bold"
        nomeInput.style.border = `1px solid #E01E1E`
        nomeEValido = false;
    }
    validaTelaDeSignup();
})

sobrenomeInput.addEventListener("blur", () => {
    if (sobrenomeInput.value != "") {

        sobrenomeValidacao.innerText = ""
        sobrenomeInput.style.border = ``
        sobrenomeEValido = true;
    } else {

        sobrenomeValidacao.innerText = "Campo obrigatório"
        sobrenomeValidacao.style.color = "#E01E1E"
        sobrenomeValidacao.style.fontSize = "8"
        sobrenomeValidacao.style.fontWeight = "bold"
        sobrenomeInput.style.border = `1px solid #E01E1E`
        sobrenomeEValido = false;
    }
    validaTelaDeSignup();
})

emailInput.addEventListener("blur", () => {
    if (emailInput.value != "") {

        emailValidacao.innerText = ""
        emailInput.style.border = ``
        emailEValido = true;
    } else {

        emailValidacao.innerText = "Campo obrigatório"
        emailValidacao.style.color = "#E01E1E"
        emailValidacao.style.fontSize = "8"
        emailValidacao.style.fontWeight = "bold"
        emailInput.style.border = `1px solid #E01E1E`
        emailEValido = false;
    }
    validaTelaDeSignup();
})

senhaInput.addEventListener("blur", () => {
    if (/[0-9a-zA-Z$*&@#]{8,}/.test(senhaInput.value)) {

        senhaValidacao.innerText = ""
        senhaInput.style.border = ``
        senhaEValida = true;
    } else {

        senhaValidacao.innerText = "A senha deve conter no mínimo 8 caracteres"
        senhaValidacao.style.color = "#E01E1E"
        senhaValidacao.style.fontSize = "8"
        senhaValidacao.style.fontWeight = "bold"
        senhaInput.style.border = `1px solid #E01E1E`
        senhaEValida = false;

        validaTelaDeSignup();
    }
})


repeteSenha.addEventListener("blur", () => {

    if (repeteSenha.value == senhaInput.value) {

        repeteSenhaValidacao.innerText = ""
        repeteSenha.style.border = ``
        repeteSenhaEValida = true;
    } else {

        repeteSenhaValidacao.innerText = "As senhas não conferem"
        repeteSenhaValidacao.style.color = "#E01E1E"
        repeteSenhaValidacao.style.fontSize = "8"
        repeteSenhaValidacao.style.fontWeight = "bold"
        repeteSenha.style.border = `1px solid #E01E1E`
        repeteSenhaEValida = false;
    }
    validaTelaDeSignup();
})


function validaTelaDeSignup() {
    if (nomeEValido && sobrenomeEValido && emailEValido && senhaEValida && repeteSenhaEValida) {
        botaoSignup.removeAttribute('disabled')
        botaoSignup.innerText = "Criar conta"
        return true
    } else {
        botaoSignup.setAttribute('disabled', true);
        botaoSignup.innerText = "Bloqueado"
        return false
    }
}