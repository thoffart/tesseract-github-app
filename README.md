# Tesseract Github App

Site para pesquisa dos usuários do grupo tesseract utilizando react com typescript e redux-observable.

## Instalação

Clone o repositório e rode 

```bash
npm i
npm start
```

## Padrão de commits

Para o padrão de commits foi utilizado o [Karma](http://karma-runner.github.io/4.0/dev/git-commit-msg.html)


## Arquitetura

Para este projeto foi utilizado a arquitetura do react com [redux-observable](https://redux-observable.js.org/). 

```
src
│       
│
└───components
│      
│
└───models   
│  
│   
│
└───pages  
│     
│   
│
└───store
```

Onde cada pasta representa:

* components: Componentes que podem ser reutilizados.
* models: Interfaces para a tipagem.
* pages: As páginas da aplicação
* store: A store da aplicação, aonde conterá todo seu estado.

Para a store, cada nova entidade seguirá o seguinte padrão:

```
store
│   index.ts    
│
└───actions
│      index.ts
│      entity-actions.ts
│
└───constants
│      index.ts
│      entity-constants.ts
│   
│
└───epics
│      index.ts
│      entity-epics.ts
│   
│
└───reducers
│      index.ts
│      entity-reducers.ts
│   
│
└───selectors
       entity-selectors.ts
```

Onde cada arquivo representa:

* entity-actions: As actions para serem disparadas e haver mudança de state da entity.
* entity-constants: As constantes para serem usadas nas actions.
* entity-epics: As operações necessárias antes de que ocorrá a mudança de estado, como por exemplo uma requisição para uma api.
* entity-reducers: Onde ficará o state da entidade e acontecerá sua mudança de estado.
* entity-selectors: Funções para acesso ao state com memoization.

## License
[MIT](https://choosealicense.com/licenses/mit/)