# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Construa uma API REST para gerenciar tarefas usando FastAPI. Você vai praticar criação de rotas HTTP, validação de dados com modelos Pydantic e operações CRUD com respostas apropriadas.

## 📝 Tasks

### 🛠️ Criar a aplicação e listar tarefas

#### Descrição
Complete o código inicial para criar a aplicação FastAPI e disponibilizar rotas para verificar se a API está funcionando e listar as tarefas armazenadas em memória.

#### Requisitos
O programa concluído deve:

- Criar uma instância de `FastAPI` que possa ser executada com Uvicorn
- Implementar `GET /` com uma mensagem que identifique a API
- Implementar `GET /tasks` e retornar a lista de tarefas, inicialmente vazia
- Abrir `/docs` e confirmar que as rotas aparecem na documentação interativa


### 🛠️ Criar e consultar tarefas

#### Descrição
Adicione endpoints para criar uma tarefa e consultar uma tarefa específica pelo identificador. Use o modelo Pydantic fornecido para validar os dados recebidos.

#### Requisitos
O programa concluído deve:

- Implementar `POST /tasks` recebendo um título e, opcionalmente, o estado `completed`
- Gerar um identificador único e retornar a tarefa criada com status HTTP `201`
- Implementar `GET /tasks/{task_id}` para retornar uma tarefa existente
- Retornar status HTTP `404` quando o identificador solicitado não existir
- Rejeitar títulos vazios por meio da validação do modelo


### 🛠️ Atualizar e remover tarefas

#### Descrição
Finalize a API permitindo atualizar todos os campos de uma tarefa existente e removê-la. Use a documentação interativa do FastAPI para exercitar cada operação.

#### Requisitos
O programa concluído deve:

- Implementar `PUT /tasks/{task_id}` para atualizar o título e o estado `completed`
- Implementar `DELETE /tasks/{task_id}` para remover uma tarefa existente
- Retornar status HTTP `404` ao tentar atualizar ou remover uma tarefa inexistente
- Confirmar que as alterações aparecem nas rotas de consulta e na lista de tarefas