from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(title="Task Manager API")


class TaskInput(BaseModel):
    title: str = Field(min_length=1)
    completed: bool = False


class Task(TaskInput):
    id: int


tasks: dict[int, Task] = {}
next_task_id = 1


@app.get("/")
def read_root():
    return {"message": "Task Manager API"}


@app.get("/tasks")
def list_tasks():
    # TODO: Retorne todas as tarefas armazenadas.
    pass


@app.post("/tasks", response_model=Task, status_code=201)
def create_task(task_input: TaskInput):
    global next_task_id
    # TODO: Crie a tarefa, atribua um ID e atualize o próximo ID disponível.
    pass


@app.get("/tasks/{task_id}", response_model=Task)
def get_task(task_id: int):
    # TODO: Retorne a tarefa ou lance HTTPException com status 404.
    pass


@app.put("/tasks/{task_id}", response_model=Task)
def update_task(task_id: int, task_input: TaskInput):
    # TODO: Atualize a tarefa ou lance HTTPException com status 404.
    pass


@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    # TODO: Remova a tarefa ou lance HTTPException com status 404.
    pass