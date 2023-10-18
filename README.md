# SpaceX API Challenge

Este repositório contém o backend da minha solução para o desafio Fullstack SpaceX API. Desenvolvi uma aplicação web que consome a API da SpaceX para listar informações sobre os lançamentos de foguetes da SpaceX e apresentar essas informações de maneira visualmente atraente. Instruções podem ser vistas em [README](_general/instructions/README.md).

## Back-End

### Tecnologias Utilizadas

- Node.js (Fastify) para criar a API Restful
- Postgres para armazenar os dados dos lançamentos
- Node-cron para agendamento de tarefas diárias de sincronização de lançamentos
- Swagger para documentação da API
- Docker e Docker-Compose para facilitar o deploy
- Testes unitários com Vitest

### Como instalar e executar o projeto

Necessário que docker e docker-compose estajam instalados e rodando.

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

### Aplicação

Para iniciar a API (em modo desenvolvimento), execute:

```
npm run dev
```

### CRON

Foi utilizada a biblioteca node-cron para a importação dos dados da SpaceX.

### Testes

O projeto inclui testes unitários para as rotas da API. Você pode executar os testes usando o seguinte comando na pasta do servidor:

```bash
npm run test
```

This is a challenge by Coodesh
