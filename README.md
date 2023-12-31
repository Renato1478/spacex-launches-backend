# SpaceX API Challenge

Este é o repositório do backend da minha solução para o desafio Fullstack SpaceX API. Ele alimenta uma aplicação web que exibe informações atraentes sobre os lançamentos de foguetes da SpaceX. Para ver as instruções do desafio original, consulte [README](_general/instructions/README.md).

Para ver a apresentação do projeto em vídeo [clicke aqui](https://www.loom.com/share/385b4079440143ca9a36aa097beaa685?sid=a76a8918-7bd9-43b9-b752-765628fbc8a6).

## Back-End

### Tecnologias Utilizadas

- Node.js (Fastify) para criar a API Restful
- Postgres para armazenar os dados dos lançamentos
- Node-cron para agendamento de tarefas diárias de sincronização de lançamentos
- Swagger para documentação da API
- Docker e Docker-Compose para facilitar o deploy
- Testes unitários com Vitest

### Como instalar e executar o projeto

1. Clone o repositório:

```bash
git clone https://github.com/Renato1478/coodesh-spacex-backend
```

2. Navegue para o diretório do projeto:

```bash
cd pasta/de/destino/do/projeto
```

3. Inicie os containers

```bash
docker compose up
```

4. Copie o conteúdo do arquivo *.env.example* para um novo chamado *.env*

```bash
cp .env.example .env
```

### Aplicação

Para iniciar a API (em modo desenvolvimento), execute:

```
npm run dev
```

Ao finalizar o processo de inicialização do container, a aplicação estará disponível em http://localhost:3333.

### CRON

Foi utilizada a biblioteca node-cron para a importação dos dados da SpaceX.

### Testes

O projeto inclui testes unitários para as rotas da API. Você pode executar os testes usando o seguinte comando na pasta do servidor:

```bash
npm run test
```

This is a challenge by Coodesh
