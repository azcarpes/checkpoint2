//Capturando os campos do formulário
let campoEmailLogin = document.getElementById('inputEmail');
let campoSenhaLogin = document.getElementById('inputPassword');
let botaoSalvar = document.getElementById('botaoSalvar');

let campoEmailLoginNormalizado;
let campoSenhaLoginNormalizado;


let emailEValido = false;
let senhaEValida = false;


//Desabilita o botão ao iniciar a página
botaoSalvar.setAttribute('disabled', true);
botaoSalvar.innerText = "Bloqueado"

//Cria o objeto que representa o login do usuário
const usuarioObjeto = {
    email: "",
    password: ""
}

//Executa ao clicar no botão de Acessar
botaoSalvar.addEventListener('click', function (evento) {

    evento.preventDefault();

    //Se a validação passar, se for true o retorno da função....
    if (validaTelaDeLogin()) {
        //Normalizando - Retirando os espaços em branco
        campoEmailLoginNormalizado = retiraEspacosDeUmValorInformado(campoEmailLogin.value);
        campoSenhaLoginNormalizado = retiraEspacosDeUmValorInformado(campoSenhaLogin.value);

        campoEmailLoginNormalizado = converteValorRecebidoEmMinusculo(campoEmailLoginNormalizado);

        //Atribui as variáveis normalizadas ao objeto do login
        usuarioObjeto.email = campoEmailLoginNormalizado;
        usuarioObjeto.password = campoSenhaLoginNormalizado;

        let usuarioObjetoJson = JSON.stringify(usuarioObjeto);

        let urlEndPointLogin = "https://ctd-todo-api.herokuapp.com/v1/users/login"

        let configuracaoRequisicao = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: usuarioObjetoJson
        }

        fetch(urlEndPointLogin, configuracaoRequisicao)
            .then(resultado => {
                if (resultado.status == 201) {
                    return resultado.json();
                }
                throw resultado;
            }).then(resultado => {
                loginSucesso(resultado.jwt);
            }
            ).catch(
                erro => {
                    loginErro(erro.status);
                }
            );

        function loginSucesso(jwtRecebido) {
            console.log(jwtRecebido);
            alert("Usuário logado com sucesso")

            sessionStorage.setItem("jwt", jwtRecebido);

            window.location.href = "tarefas.html"
        }

        function loginErro(statusRecebido) {
            console.log(statusRecebido);
            let loginValidacao = document.getElementById("loginValidacao");
            elementoSmallErro(loginValidacao);
            campoSenhaLogin.value = "";
        }


        //Se a validação NÃO passar, se for false o retorno da função....
    } else {
        evento.preventDefault();
        alert("Ambas as informações devem ser preenchidas");
    }

});

//Ao clicar e interagir com o campo de "email" no formulário
campoEmailLogin.addEventListener('blur', function () {
    //Capturando o elemento <Small> do html
    let emailValidacao = document.getElementById('emailValidacao');

    if (campoEmailLogin.value != "") {
        //Email tem informação
        emailValidacao.innerText = ""
        campoEmailLogin.style.border = ``
        emailEValido = true;
    } else {
        //Email está vazio
        emailValidacao.innerText = "Campo obrigatório"
        emailValidacao.style.color = "#E01E1E"
        emailValidacao.style.fontSize = "8"
        emailValidacao.style.fontWeight = "bold"
        campoEmailLogin.style.border = `1px solid #E01E1E`
        emailEValido = false;
    }
    validaTelaDeLogin();
});

campoSenhaLogin.addEventListener('blur', function () {

    let senhaValidacao = document.getElementById('senhaValidacao');

    if (campoSenhaLogin.value != "") {
        senhaValidacao.innerText = ""
        campoSenhaLogin.style.border = ``
        senhaEValida = true;
    } else {

        senhaValidacao.innerText = "Senha inválida"
        senhaValidacao.style.color = "#E01E1E"
        senhaValidacao.style.fontSize = "8"
        senhaValidacao.style.fontWeight = "bold"
        campoSenhaLogin.style.border = `1px solid #E01E1E`
        senhaEValida = false;
    }
    validaTelaDeLogin();
});

function validaTelaDeLogin() {
    if (emailEValido && senhaEValida) {
        botaoSalvar.removeAttribute('disabled')
        botaoSalvar.innerText = "Acessar"
        return true
    } else {
        botaoSalvar.setAttribute('disabled', true);
        botaoSalvar.innerText = "Bloqueado"
        return false
    }
}

function elementoSmallErro(small) {
    small.innerText = "Usuário ou senha incorreta";
    small.style.color = "Red"
}













