# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `data-source.ts` file
3. Run `npm start` command

nome do database: webapi


comandos:


criação: npm run typeorm migration:create src/database/migrations/createEmpresa
rodar a migration: npm run typeorm -- -d ./src/database/data-source.ts migration:run