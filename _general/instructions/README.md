# Fullstack Challenge 🏅 Space X API

Este é um desafio para podermos ver suas habilidades como Fullstack Developer.
Nesse desafio você deverá desenvolver um aplicativo para listar informações da API SpaceX-API.

[SPOILER] As instruções de entrega e apresentação do challenge estão no final deste Readme (=

### Antes de começar
 
- Prepare o projeto para ser disponibilizado no Github, copiando o conteúdo deste repositório para o seu (ou utilize o fork do projeto e aponte para o Github). Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);
- O projeto deve utilizar a Linguagem específica na sua Vaga (caso esteja se candidatando). Por exempo: Python, R, Scala e entre outras;
- Considere como deadline 5 dias a partir do início do desafio. Caso tenha sido convidado a realizar o teste e não seja possível concluir dentro deste período, avise a pessoa que o convidou para receber instruções sobre o que fazer.
- Documentar todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes do que o seu processo de pensamento e decisões à medida que as completa, por isso tente documentar e apresentar os seus hipóteses e decisões na medida do possível.

### Instruções iniciais obrigatórias

- Utilize as seguintes tecnologias:

#### Tecnologias (Front-End):
- Com ou sem framework (React, Angular, Vue.js, Javascript Vanilla, ou outro da sua escolha)
- Estilização (Material UI, Semantic UI, Styled Components, etc). Ou escrever o seu proprio sob medida 👌
- CSS Flexbox + CSS Grid
- Design Mobile First
- Gestão de dados (Redux, Context API, Localstorage, etc)
- Conceitos de Programação Funcional em JS (pelo menos .map, .filter e .reduce)

Atente-se, ao desenvolver a aplicação front-end, para conceitos de usabilidade e adeque a interface com elementos visuais para os usuários do seu sistema.

#### Tecnologias (Back-End):
- API (Node.js, PHP, Ruby, ou outra da sua escolha) com ou sem uso de frameworks
- Banco de dados (Postgres, MySQL, MongoDB, etc).

Como sugestões, pode criar um banco de dados grátis **MongoDB** usando Atlas: https://www.mongodb.com/cloud/atlas. Para conhecer outras plataformas de banco de dados, acesse https://coodesh.com/blog/candidates/heroku-acabou-e-agora-veja-alternativas/

#### Organização:
- Separar o repositório do back do front
- Aplicação de padrões Clean Code
- Validação de chamadas assíncronas para evitar travamentos

### Modelo de Dados:
Conforme indicado na documentação da API https://github.com/r-spacex/SpaceX-API, a estrutura de dados presente retorna as seguintes informações:
```json
{
  "fairings": null,
  "links": {
    "patch": {
      "small": "https://images2.imgbox.com/eb/0f/Vev7xkUX_o.png",
      "large": "https://images2.imgbox.com/ab/79/Wyc9K7fv_o.png"
    },
    "reddit": {
      "campaign": "https://www.reddit.com/r/spacex/comments/fjf6rr/dm2_launch_campaign_thread/",
      "launch": "https://www.reddit.com/r/spacex/comments/glwz6n/rspacex_cctcap_demonstration_mission_2_general",
      "media": "https://www.reddit.com/r/spacex/comments/gp1gf5/rspacex_dm2_media_thread_photographer_contest/",
      "recovery": "https://www.reddit.com/r/spacex/comments/gu5gkd/cctcap_demonstration_mission_2_stage_1_recovery/"
    },
    "flickr": {
      "small": [],
      "original": [
        "https://live.staticflickr.com/65535/49927519643_b43c6d4c44_o.jpg",
        "https://live.staticflickr.com/65535/49927519588_8a39a3994f_o.jpg",
        "https://live.staticflickr.com/65535/49928343022_6fb33cbd9c_o.jpg",
        "https://live.staticflickr.com/65535/49934168858_cacb00d790_o.jpg",
        "https://live.staticflickr.com/65535/49934682271_fd6a31becc_o.jpg",
        "https://live.staticflickr.com/65535/49956109906_f88d815772_o.jpg",
        "https://live.staticflickr.com/65535/49956109706_cffa847208_o.jpg",
        "https://live.staticflickr.com/65535/49956109671_859b323ede_o.jpg",
        "https://live.staticflickr.com/65535/49955609618_4cca01d581_o.jpg",
        "https://live.staticflickr.com/65535/49956396622_975c116b71_o.jpg",
        "https://live.staticflickr.com/65535/49955609378_9b77e5c771_o.jpg",
        "https://live.staticflickr.com/65535/49956396262_ef41c1d9b0_o.jpg"
      ]
    },
    "presskit": "https://www.nasa.gov/sites/default/files/atoms/files/commercialcrew_press_kit.pdf",
    "webcast": "https://youtu.be/xY96v0OIcK4",
    "youtube_id": "xY96v0OIcK4",
    "article": "https://spaceflightnow.com/2020/05/30/nasa-astronauts-launch-from-us-soil-for-first-time-in-nine-years/",
    "wikipedia": "https://en.wikipedia.org/wiki/Crew_Dragon_Demo-2"
  },
  "static_fire_date_utc": "2020-05-22T17:39:00.000Z",
  "static_fire_date_unix": 1590169140,
  "tdb": false,
  "net": false,
  "window": 0,
  "rocket": "5e9d0d95eda69973a809d1ec",
  "success": true,
  "failures": [],
  "details": "SpaceX will launch the second demonstration mission of its Crew Dragon vehicle as part of NASA's Commercial Crew Transportation Capability Program (CCtCap), carrying two NASA astronauts to the International Space Station. Barring unexpected developments, this mission will be the first crewed flight to launch from the United States since the end of the Space Shuttle program in 2011. DM-2 demonstrates the Falcon 9 and Crew Dragon's ability to safely transport crew to the space station and back to Earth and it is the last major milestone for certification of Crew Dragon. Initially the mission duration was planned to be no longer than two weeks, however NASA has been considering an extension to as much as six weeks or three months. The astronauts have been undergoing additional training for the possible longer mission.",
  "crew": [
    "5ebf1b7323a9a60006e03a7b",
    "5ebf1a6e23a9a60006e03a7a"
  ],
  "ships": [
    "5ea6ed30080df4000697c913",
    "5ea6ed2f080df4000697c90b",
    "5ea6ed2f080df4000697c90c",
    "5ea6ed2e080df4000697c909",
    "5ea6ed2f080df4000697c90d"
  ],
  "capsules": [
    "5e9e2c5df359188aba3b2676"
  ],
  "payloads": [
    "5eb0e4d1b6c3bb0006eeb257"
  ],
  "launchpad": "5e9e4502f509094188566f88",
  "auto_update": true,
  "flight_number": 94,
  "name": "CCtCap Demo Mission 2",
  "date_utc": "2020-05-30T19:22:00.000Z",
  "date_unix": 1590866520,
  "date_local": "2020-05-30T15:22:00-04:00",
  "date_precision": "hour",
  "upcoming": false,
  "cores": [
    {
      "core": "5e9e28a7f3591817f23b2663",
      "flight": 1,
      "gridfins": true,
      "legs": true,
      "reused": false,
      "landing_attempt": true,
      "landing_success": true,
      "landing_type": "ASDS",
      "landpad": "5e9e3032383ecb6bb234e7ca"
    }
  ],
  "id": "5eb87d46ffd86e000604b388"
}
``` 

### Back-End:

Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento. Para isso você deve executar os passos a seguir:

### INSTRUÇÕES

**Obrigatório 1** - Você deverá desenvolver as seguintes rotas:

<details open>
<summary>[GET] /</summary>
<p>
Retornar a mensagem "Fullstack Challenge 🏅 - Space X API"
</p>

```json
{
    "message": "Fullstack Challenge 🏅 - Space X API"
}
```
</details>

<details open>
<summary>[GET] /launches</summary>
<p>
Listar todos os dados da base, com paginação e suporte a busca. O endpoint de paginação de uma busca hipotética deve retornar a seguinte estrutura:
<br/>
[GET]/launches?search=tesla&limit=4
</p>

```json
{
    "results": [
        {.....},
        {.....},
        {.....},
        {.....},
    ],
    "totalDocs": 20,
    "page": 1,
    "totalPages": 5, 
    "hasNext": true,
    "hasPrev": false
}
```
</details>
<details open>
<summary>[GET] /launches/stats</summary>
<p>
Deve retornar os dados que serão usados nos gráficos da interface. O formato de saída final pode depender da biblioteca utilizada no frontend. Além disso, pode ser necessário criar mais de um endpoint para separar os dois gráficos, considerando a performance e a quantidade de cálculos e consultas ao banco.

- O campo `success` informa se o lançamento ocorreu com ou sem falhas. Faça a contagem dos registros para obter o resultado de sucessos e falhas;
- O campo `cores.reused` informa se o lançamento usou estágios reaproveitáveis. Para obter o nome do estágio, busque pelo nome do foguete usando o campo `rocket`;
- Ao analisar os registros será possível contabilizar a quantidade de lançamentos separados por foguete e renderizar o gráfico de pizza;
- Os dados do gráfico de barras são agrupados por mês/ano e por foguete.

</p>

</details>

Além disso, os endpoints devem utilizar os seguintes códigos de status:
- 200: sucesso com body ou sem body
- 204: sucesso sem body
- 400: mensagem de erro em formato humanizado, ou seja, sem informações internas e códigos de erro:

```json
{
    "message": "Error message"
}
```

**Obrigatório 2** - Para alimentar o seu banco de dados você deve criar um script que armazene os dados dos lançamentos da SpaceX API no seu back-end.

**Obrigatório 3** - Além disso, você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar os novos lançamentos ao seu banco de dados. (Para essa tarefa você pode precisar fazer alterações no modelo de dados)

**Obrigatório 4** - Descrever a documentação da API utilizando o conceito de Open API 3.0;

**Diferencial 1** - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 2** - Configurar um sistema de alerta se houver alguma falha durante a sincronização dos lançamentos;

**Diferencial 3** - Escrever Unit Tests para os endpoints da API;

### Front-End:

Nessa etapa você deverá desenvolver uma aplicação web para consumir a API que você criou.

### INSTRUÇÕES

Obrigatório 1 - Você deverá atender aos seguintes casos de uso:
- Como usuário, devo ser capaz de visualizar um gráfico de pizza/setor sobre o lançamento dos foguetes;
- Como usuário, devo ser capaz de visualizar os resultados de lançamentos (sucesso e falha);
- Como usuário, devo ser capaz de visualizar um gráfico de colunas com o laçamento de foguetes por ano (atente-se para a coloração, ela deve ser semelhante  ao que foi atribuído no gráfico de pizza/setor);
- Como usuário, devo ser capaz de pesquisar pelo nome, missão e/ou resultado;
- Como usuário, devo ser capaz de visualizar o vídeo no YouTube ao apertar no ícone;
- Como usuário, devo ser capaz de mudar de página aparecendo os próximos 5 lançamentos.

**Obrigatório 2** - Seguir o wireframe para mostrar os dados necessários, estilização ao seu critério conforme seus conhecimentos de usabilidade.

<img src="./img/wireframe.png" width="100%" />

**Obrigatório 3** - A filtragem dos dados deve ser feito usando debounce.

**Diferencial 1** - Escrever Unit Tests e/ou E2E Test. Escolher a melhor abordagem e biblioteca;

**Diferencial 2** - Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 3** - Colocar na URL os parâmetros utilizados na busca, para compartilhar a URL;

## Readme do Repositório

- Deve conter o título do projeto
- Uma descrição sobre o projeto em frase
- Deve conter uma lista com linguagem, framework e/ou tecnologias usadas
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)
- Se está usando github pessoal, referencie que é um challenge by coodesh:  

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Finalização e Instruções para a Apresentação

Avisar sobre a finalização e enviar para correção.

1. Confira se você respondeu o Scorecard anexado na Vaga que se candidatou;
2. Confira se você respondeu o Mapeamento anexado na Vaga que se candidatou;
3. Acesse [https://coodesh.com/challenges/review](https://coodesh.com/challenges/review);
4. Adicione o repositório com a sua solução;
5. Grave um vídeo, utilizando o botão na tela de solicitar revisão da Coodesh, com no máximo 5 minutos, com a apresentação do seu projeto. Utilize o tempo para:
- Explicar o objetivo do desafio
- Quais tecnologias foram utilizadas
- Mostrar a aplicação em funcionamento
- Foque em pontos obrigatórios e diferenciais quando for apresentar.
6. Adicione o link da apresentação do seu projeto no README.md.
7. Verifique se o Readme está bom e faça o commit final em seu repositório;
8. Confira a vaga desejada;
9. Envie e aguarde as instruções para seguir no processo. Sucesso e boa sorte. =)

## Suporte

Use a [nossa comunidade](https://discord.gg/rdXbEvjsWu) para tirar dúvidas sobre o processo ou envie uma mensagem diretamente a um especialista no chat da plataforma. 
