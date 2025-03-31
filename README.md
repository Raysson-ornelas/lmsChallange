# Desafio Técnico - Mobiliza

## Contexto

O LMS é um sistema utilizado por Especialistas em Treinamento e Professores para fornecer conteúdo selecionado e acompanhar as interações dos alunos com esse conteúdo.

## Requisitos

### Fluxo da Aplicação

1. **Tela Inicial**: O usuário deverá inserir o nome.
   
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

## Estrutura do Projeto

### Frontend

O frontend foi desenvolvido utilizando React e organiza o código da seguinte forma:

- **src/assets**: Contém todos os arquivos estáticos usados pela aplicação, como imagens.
- **src/components**: Armazena os componentes reutilizáveis da aplicação.
- **src/context**: Contém os contextos do React, usados para gerenciar o estado global da aplicação.
- **src/pages**: Contém as páginas da aplicação.
- **src/services**: Contém funções responsáveis por interagir com o backend.
- **src/types**: Armazena os tipos TypeScript compartilhados no frontend.

### Backend

O backend foi desenvolvido utilizando Node.js e Express, e a estrutura está organizada da seguinte maneira:

- **src/controllers**: Responsável por gerenciar as requisições e respostas HTTP.
- **src/repositories**: Contém a lógica de interação com o banco de dados.
- **src/routes**: Define as rotas da API, conectando as URLs às funções dos controladores.
- **src/services**: Contém a lógica de negócios da aplicação.

