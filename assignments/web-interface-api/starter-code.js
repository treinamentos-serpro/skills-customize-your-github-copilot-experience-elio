const API_URL = "http://localhost:8000";

const taskForm = document.querySelector("#task-form");
const taskTitle = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const statusMessage = document.querySelector("#status");

function showStatus(message) {
  statusMessage.textContent = message;
}

function renderTasks(tasks) {
  taskList.innerHTML = "";
  taskCount.textContent = `${tasks.length} tarefa${tasks.length === 1 ? "" : "s"}`;

  if (tasks.length === 0) {
    showStatus("Nenhuma tarefa cadastrada.");
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task";

    const info = document.createElement("div");
    info.className = "task-info";

    const title = document.createElement("p");
    title.className = `task-title${task.completed ? " task-completed" : ""}`;
    title.textContent = task.title;

    const state = document.createElement("p");
    state.className = "task-state";
    state.textContent = task.completed ? "Concluída" : "Pendente";

    const actions = document.createElement("div");
    actions.className = "task-actions";
    actions.innerHTML = `
      <button type="button" data-action="toggle" data-id="${task.id}">
        ${task.completed ? "Reabrir" : "Concluir"}
      </button>
      <button type="button" data-action="delete" data-id="${task.id}">Remover</button>
    `;

    info.append(title, state);
    item.append(info, actions);
    taskList.append(item);
  });

  showStatus("");
}

async function loadTasks() {
  // TODO: Busque as tarefas em GET /tasks e chame renderTasks com o resultado.
}

taskForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = taskTitle.value.trim();

  if (!title) {
    showStatus("Digite um título para a tarefa.");
    return;
  }

  // TODO: Envie title para POST /tasks e atualize a lista ao concluir.
});

taskList.addEventListener("click", async (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  const taskId = button.dataset.id;
  const action = button.dataset.action;

  if (action === "delete") {
    if (!window.confirm("Remover esta tarefa?")) return;
    // TODO: Envie DELETE /tasks/{taskId} e atualize a lista.
    return;
  }

  if (action === "toggle") {
    // TODO: Encontre a tarefa, inverta completed e envie PUT /tasks/{taskId}.
  }
});

loadTasks();
