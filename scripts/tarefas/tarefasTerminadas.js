let tarefasTerminadas = document.querySelector(".tarefas-terminadas");

function mostraTarefasTerminadas(tarefa) {
    let liTarefas = document.createElement("li");
    liTarefas.classList.add("tarefa");

    liTarefas.innerHTML =
        `            
        <div class="done" id="${tarefa.id}"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
         </div>
    `
    tarefasTerminadas.appendChild(liTarefas)
}