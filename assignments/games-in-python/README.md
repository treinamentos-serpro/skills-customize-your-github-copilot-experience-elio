
# 📘 Atividade: Jogo da Forca

## 🎯 Objetivo

Construir um jogo da forca em Python usando strings, listas, laços e entrada do usuário para praticar lógica de programação, controle de fluxo e tomada de decisão.

## 📝 Tarefas

### 🛠️ Escolha da palavra e início do jogo

#### Descrição
Crie a lógica inicial do jogo, incluindo uma lista de palavras e a seleção aleatória da palavra secreta. O programa deve preparar o estado inicial do jogo e mostrar ao jogador o número de letras que precisam ser descobertas.

#### Requisitos
O programa concluído deve:

- Selecionar uma palavra aleatória de uma lista predefinida
- Exibir a palavra como espaços em branco ou underscores para cada letra
- Inicializar o número de tentativas disponíveis e o estado do jogo
- Preparar a estrutura para receber palpites do usuário

### 🛠️ Validação das letras e lógica de vitória/derrota

#### Descrição
Implemente o fluxo principal do jogo para receber palpites, verificar se a letra existe na palavra, atualizar o progresso e decidir quando o jogador vence ou perde.

#### Requisitos
O programa concluído deve:

- Ler uma letra do usuário e validar a entrada
- Atualizar a visualização da palavra conforme as letras corretas forem descobertas
- Contabilizar tentativas incorretas e avisar o jogador quando uma letra já foi usada
- Encerrar o jogo com mensagem de vitória quando a palavra for completada
- Encerrar o jogo com mensagem de derrota quando as tentativas acabarem