
# Web api em node

## Como utilizar

```bash
 git clone https://github.com/majutestoni/webapi-node.git
```

```bash
 npm i
```

Necessario criar um database MariaDB ou Mysql como o nome "webapi" para então poder dar o comando 

```bash
 npm start
```
que levantará o projeto
## Utilizado

 - [Express](https://awesomeopensource.com/project/elangosundar/awesome-README-templates)
 - [Mysql](https://github.com/matiassingers/awesome-readme)

## Notas de Dev
 ### Migrations

1. para criar `npm run typeorm migration:create src/database/migrations/createEmpresa` 
2. Para rodar `npm run typeorm -- -d ./src/database/data-source.ts migration:run`



