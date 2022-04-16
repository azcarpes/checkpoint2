let tarefasPendentes = document.querySelector(".tarefas-pendentes");

function mostraTarefasPendentes(tarefa) {
    let liTarefasPendentes = document.createElement("li");
    liTarefasPendentes.classList.add("tarefa");
    liTarefasPendentes.setAttribute("id", tarefa.id)

    liTarefasPendentes.innerHTML =
        `            
        <div class="not-done"></div>
        <div class="descricao">
            <p class="nome">${tarefa.description}</p>
            <p class="timestamp"><i class="far fa-calendar-alt"></i>${tarefa.createdAt}</p>
         </div>
         <img id="lixeira" src="/ToDo-App/assets/bin.png" onclick="deletarTarefa(${tarefa.id}, ${tarefa.completed})">
    `
    tarefasPendentes.appendChild(liTarefasPendentes)
}

function capturaIdTarefa(idTarefa) {

    console.log(idTarefa);
}