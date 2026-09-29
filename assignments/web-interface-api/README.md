# 📘 Assignment: Web Interface for a REST API

## 🎯 Objective

Construa uma interface web com HTML, CSS e JavaScript para consumir a API de tarefas criada na assignment de FastAPI. Você vai praticar manipulação do DOM, eventos de formulário, requisições com `fetch` e atualização da interface depois de cada operação.

## 📝 Tasks

### 🛠️ Exibir a lista de tarefas

#### Descrição
Complete a função `loadTasks` no arquivo `starter-code.js`. Quando a página for carregada, faça uma requisição `GET` para o endpoint `/tasks` e mostre cada tarefa na lista da página.

#### Requisitos
O programa concluído deve:

- Fazer uma requisição `GET /tasks` usando `fetch`
- Exibir o título e o estado de cada tarefa
- Mostrar uma mensagem adequada quando não houver tarefas
- Mostrar uma mensagem de erro se a API não puder ser acessada


### 🛠️ Criar tarefas pelo formulário

#### Descrição
Conecte o formulário da página ao endpoint `POST /tasks`. O usuário deve conseguir informar o título de uma tarefa, enviá-la e visualizar a nova tarefa sem recarregar a página.

#### Requisitos
O programa concluído deve:

- Interceptar o envio do formulário com `preventDefault`
- Enviar o título em JSON no corpo de uma requisição `POST /tasks`
- Usar o cabeçalho `Content-Type: application/json`
- Limpar o campo e atualizar a lista depois de uma criação bem-sucedida
- Informar o usuário quando o título estiver vazio ou quando a API retornar um erro


### 🛠️ Atualizar e remover tarefas

#### Descrição
Adicione controles para concluir e remover cada tarefa. Use os endpoints `PUT /tasks/{task_id}` e `DELETE /tasks/{task_id}` e mantenha a interface sincronizada com a API.

#### Requisitos
O programa concluído deve:

- Enviar uma requisição `PUT` ao alternar o estado de uma tarefa
- Enviar uma requisição `DELETE` ao remover uma tarefa
- Atualizar a lista após cada operação bem-sucedida
- Pedir confirmação antes de remover uma tarefa
- Exibir uma mensagem de erro quando uma operação falhar
