# Desafio Técnico - Mobiliza

## Contexto

O LMS é um sistema utilizado por Especialistas em Treinamento e Professores para fornecer conteúdo selecionado e acompanhar as interações dos alunos com esse conteúdo.

## Requisitos

### Fluxo da Aplicação

1. **Tela de Cadastro**: O usuário deverá inserir o nome.
   
2. **Tela de Pergunta**: O usuário deverá responder a uma pergunta de múltipla escolha. A pergunta terá várias opções, das quais algumas estão corretas e outras não.

3. **Tela de Ranking**: Após responder à pergunta, o usuário receberá uma pontuação com base nas suas escolhas:
   - **100 pontos**: Selecionou todas as opções corretas e não selecionou nenhuma errada.
   - **0 pontos**: Selecionou qualquer opção errada.
   - **50 pontos**: Selecionou metade das opções corretas.
   - **25 pontos**: Selecionou um quarto das opções corretas.
   - E assim por diante...

   O ranking será exibido com todas as pontuações, ordenadas da maior para a menor. O usuário deverá ser destacado com sua pontuação, e, em caso de empate, os usuários mais antigos aparecerão primeiro.


## Tecnologias Utilizadas

- **Frontend:** React, TypeScript, Axios, etc.
- **Backend:** Express, Node.js, TypeScript, Prisma, etc.
- **Banco de Dados:** PostgreSQL
- **Ferramentas de Desenvolvimento:** Docker, ESLint, Prettier, etc.

## Pré-requisitos

Antes de começar, verifique se você tem os seguintes pré-requisitos instalados em sua máquina:

- **Node.js:** [Instalar Node.js](https://nodejs.org/en/)
- **Docker:** [Instalar Docker](https://www.docker.com/get-started)

### Passos para Rodar Localmente

1. Clone o repositório:

    ```bash
    git clone git@github.com:Raysson-ornelas/lmsChallange.git
    ```

2. Navegue até a pasta do projeto:

    ```bash
    cd lmsChallange
    ```

3. Inicie os containers do Docker:

    ```bash
    npm run start
    ```

4. A aplicação estará disponível em [http://localhost:5173](http://localhost:5173).
