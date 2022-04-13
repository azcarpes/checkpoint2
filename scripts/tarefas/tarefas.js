let tokenJwt = sessionStorage.getItem("jwt");

onload = function () {

    if (!tokenJwt) {
        alert("Sem permisão para acessar a página, você será redirecionado");
        window.location.href = "index.html"
    } else {
        console.log(tokenJwt);
    }

    usuarioLogado();
    mostrarTarefas()
}

function usuarioLogado() {

    let urlEndPointGetMe = "https://ctd-todo-api.herokuapp.com/v1/users/getMe"

    let configuracaoRequisicaoGetMe = {
        method: "GET",
        headers: {
            "authorization": tokenJwt,
        },
    }

    fetch(urlEndPointGetMe, configuracaoRequisicaoGetMe)
        .then(resultado => {
            return resultado.json();

        })
        .then(resultado => {
            return resultado.firstName;

        })
        .then(firstName => {
            console.log(firstName);
            let nomeUsuarioLogado = document.getElementById("nomeUsuarioLogado");
            nomeUsuarioLogado.innerText = firstName;

        })
        .catch(
            erro => {
                console.log(erro);
            }
        );

}

function mostrarTarefas() {
    let urlEndPointTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks"

    let configuracaoMostrarTarefas = {
        method: "GET",
        headers: {
            "authorization": tokenJwt,
        },
    }

    fetch(urlEndPointTasks, configuracaoMostrarTarefas)
        .then(resultado => {
            console.log(resultado.json());

        })

        .catch(
            erro => {
                console.log(erro);
            }
        );

}

function criarTarefas() {
    let novaTarefa = document.getElementById("novaTarefa")

    let urlEndPointCriarTasks = "https://ctd-todo-api.herokuapp.com/v1/tasks"

    let configuracaoCriarTarefas = {
        method: "POST",
        headers: {
            "authorization": tokenJwt,
        },
        body: {
            "description": novaTarefa.value,
            "completed": false
        },
    }

    fetch(urlEndPointCriarTasks, configuracaoCriarTarefas)
        .then(resultado => {
            console.log(resultado.json());

        })

        .catch(
            erro => {
                console.log(erro);
            }
        );

}

let botaoAddTarefa = document.getElementById("botaoAddTarefa");

botaoAddTarefa.addEventListener("click", () => {
    criarTarefas();
})