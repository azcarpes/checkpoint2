let tarefasPendentes = document.querySelector(".tarefas-pendentes");

function mostraTarefasPendentes(tarefa) {
    let liTarefasPendentes = document.createElement("li");
    liTarefasPendentes.classList.add("tarefa");

    liTarefasPendentes.innerHTML =
        `            
        <div class="not-done" id="${tarefa.id}"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
         </div>
    `
    tarefasPendentes.appendChild(liTarefasPendentes)
}